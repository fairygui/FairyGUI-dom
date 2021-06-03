import { Timers } from "../utils/Timers";
import { UIElement } from "./UIElement";
import { lastInput } from "../event/Event";
import { EventDispatcher } from "../event/EventDispatcher";
import { Vec2 } from "../math/Vec2";
import { TextField } from "./TextField";
import { InputTextField } from "./InputTextField";
import { Shape } from "./Shape";
import { Image } from "./Image";
import { MovieClip } from "./MovieClip";
import { IStage } from "./IStage";

const clickTestThreshold = 10;
const maxPointer = 10;

export class Stage extends UIElement implements IStage {
    private _window: Window;
    private _touchscreen: boolean;
    private _pointers: Array<PointerInfo> = [];
    private _touchTarget: UIElement;
    private _pointerPos: Vec2 = new Vec2();
    private _touchCount: number = 0;
    private _rollOverChain: Array<UIElement> = [];
    private _rollOutChain: Array<UIElement> = [];
    private _lastPointerId: number;
    private _nextCursor: string;
    private _focused: UIElement;
    private _nextFocus: UIElement;
    private _focusOutChain: Array<UIElement> = [];
    private _focusInChain: Array<UIElement> = [];
    private _focusHistory: Array<UIElement> = [];

    public constructor() {
        super();

        (<any>this).is_stage = true;
    }

    public setWindow(ownerWindow: Window) {
        this._window = ownerWindow;
        ownerWindow.stage = this;
        let doc = ownerWindow.document;
        doc.body.appendChild(this);

        this._touchscreen = ('ontouchstart' in ownerWindow) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0);

        for (let i = 0; i < maxPointer; i++)
            this._pointers.push(new PointerInfo());

        doc.addEventListener('pointerdown', ev => this.handlePointer(ev, 0), { passive: false });
        doc.addEventListener('pointerup', ev => this.handlePointer(ev, 1), { passive: false });
        doc.addEventListener('pointermove', ev => this.handlePointer(ev, 2), { passive: false });
        doc.addEventListener('pointercancel', ev => this.handlePointer(ev, 3), { passive: false });
        doc.addEventListener('contextmenu', ev => ev.preventDefault());

        doc.addEventListener('dragend', ev => this.handlePointer(ev, 1), { passive: false });
        doc.addEventListener('dragover', ev => this.handlePointer(ev, 2), { passive: false });
        doc.addEventListener('wheel', ev => this.handleWheel(ev), { passive: false });

        doc.body.insertAdjacentHTML("afterbegin",
            `<style>
            .fgui-link { color:#3A67CC }
            .fgui-link:hover { color:#3A67CC }

            fgui-input {
                resize : none;
                overflow : scroll;
                outline : none;
                border : 0px;
                padding : 0px;
                margin : 0px;
                position : absolute;
                background : transparent;
                width : 100%;
                height : 100%;
            }

            fgui-input textarea::-webkit-scrollbar {
                display: none;
            }

            div:focus {
                outline: none;
            }
        </style>`
        );

        ownerWindow.addEventListener('keydown', this.onKeydown.bind(this));
        ownerWindow.addEventListener('keyup', this.onKeyup.bind(this));

        ownerWindow.requestAnimationFrame(() => {
            if (this._nextFocus != null) {
                if (this._nextFocus.onStage) {
                    if (this._nextFocus.tabStopChildren) {
                        if (this._nextFocus._lastFocus != null && this._nextFocus.isAncestorOf(this._nextFocus._lastFocus))
                            this.setFocus(this._nextFocus._lastFocus);
                        else
                            this.setFocus(this._nextFocus);
                    }
                    else
                        this.setFocus(this._nextFocus);
                }
                this._nextFocus = null;
            }
        });
    }

    public get window(): Window {
        return this._window;
    }

    public get pointerPos(): Vec2 {
        return this._pointerPos;
    }

    public get touchScreen(): boolean {
        return this._touchscreen;
    }

    public get touchTarget(): UIElement {
        return this._touchTarget;
    }

    public get touchCount(): number {
        return this._touchCount;
    }

    public getPointerPos(pointerId?: number, ret?: Vec2): Vec2 {
        if (!ret)
            ret = new Vec2();
        if (pointerId == null || pointerId == -1)
            ret.copy(this._pointerPos);
        else {
            let pointer = this.getPointer(pointerId);
            if (pointer)
                ret.set(pointer.x, pointer.y);
            else
                ret.copy(this._pointerPos);
        }
        return ret;
    }

    public addPointerMonitor(pointerId: number, target: EventDispatcher) {
        if (pointerId == null || pointerId == -1)
            pointerId = this._lastPointerId;

        let pointer: PointerInfo = this.getPointer(pointerId);
        if (pointer.captors.indexOf(target) == -1)
            pointer.captors.push(target);

        this.setPointerCapture(pointerId);
    }

    public removePointerMonitor(target: EventDispatcher) {
        for (let j = 0; j < maxPointer; j++) {
            let pointer = this._pointers[j];
            let i = pointer.captors.indexOf(target);
            if (i != -1)
                pointer.captors[i] = null;
        }
    }

    public cancelClick(pointerId: number) {
        for (let j = 0; j < maxPointer; j++) {
            let pointer = this._pointers[j];
            if (pointer.pointerId == pointerId)
                pointer.clickCancelled = true;
        }
    }

    //Key handle -----------------

    private onKeydown(ev: KeyboardEvent) {
        this.setLastInput(ev);
        let f = this.focusedElement;
        if (f)
            f.bubbleEvent("key_down");
        else
            this.$owner.emit("key_down");
    }

    private onKeyup(ev: KeyboardEvent) {
        this.setLastInput(ev);
        let f = this.focusedElement;
        if (f)
            f.bubbleEvent("key_up");
        else
            this.$owner.emit("key_up");
    }

    private setLastInput(ev: KeyboardEvent) {
        lastInput.altKey = ev.altKey;
        lastInput.ctrlKey = ev.ctrlKey;
        lastInput.shiftKey = ev.shiftKey;
        lastInput.commandKey = ev.metaKey;
        lastInput.keyCode = ev.code;
        lastInput.key = ev.key;
    }

    //Mouse/Touch Handle -----------------

    private handlePointer(ev: MouseEvent, type: number) {
        this._pointerPos.set(ev.pageX, ev.pageY);
        this._lastPointerId = (<PointerEvent>ev).pointerId ?? this._lastPointerId;

        let pointer: PointerInfo;
        let free: PointerInfo;
        for (let j: number = 0; j < maxPointer; j++) {
            if (this._pointers[j].pointerId == this._lastPointerId) {
                pointer = this._pointers[j];
                break;
            }

            if (this._pointers[j].pointerId == -1)
                free = this._pointers[j];
        }
        if (!pointer) {
            pointer = free;
            if (!pointer)
                return;

            pointer.pointerId = this._lastPointerId;
        }

        pointer.shiftKey = ev.shiftKey;
        pointer.altKey = ev.altKey;
        pointer.ctrlKey = ev.ctrlKey;
        pointer.commandKey = ev.metaKey;
        this._touchTarget = null;
        let ele: any = ev.target;
        while (ele) {
            if (ele.$owner) {
                this._touchTarget = ele;
                break;
            }

            ele = ele.parentElement;
        }

        if (!this._touchTarget)
            this._touchTarget = this;
        pointer.target = this._touchTarget;

        if (this._pointerPos.x != pointer.x || this._pointerPos.y != pointer.y) {
            pointer.x = this._pointerPos.x;
            pointer.y = this._pointerPos.y;

            if (pointer.began)
                pointer.holdTime = (Timers.frameCount - pointer.downFrame) == 1 ? (1 / 60) : (performance.now() - pointer.downTime) / 1000;

            this.setLastPointer(pointer);

            if (Math.abs(pointer.x - pointer.downX) > 50 || Math.abs(pointer.y - pointer.downY) > 50) pointer.clickCancelled = true;

            if (pointer.captors.length > 0) {
                let len = pointer.captors.length;
                for (let i = 0; i < len; i++) {
                    let e = pointer.captors[i];
                    if ((e instanceof UIElement) && !e.onStage)
                        pointer.captors[i] = null;
                }

                this.bubbleEvent("pointer_move", null, pointer.captors);
            }
            else
                this.$owner.emit("pointer_move");
        }

        if (pointer.lastRollOver != pointer.target)
            this.handleRollOver(pointer);

        if (type == 0) {
            if (!pointer.began) {
                this._touchCount++;
                pointer.began = true;
                pointer.clickCancelled = false;
                pointer.downX = pointer.x;
                pointer.downY = pointer.y;
                pointer.downTime = performance.now();
                pointer.downFrame = Timers.frameCount;
                pointer.holdTime = 0;

                pointer.downTargets.length = 0;
                if (pointer.target) {
                    pointer.downTargets.push(pointer.target);
                    pointer.target.traverseAncestors(obj => {
                        pointer.downTargets.push(obj);
                    });
                }

                pointer.button = ev.button;
                this.setFocus(pointer.target);
                this.setLastPointer(pointer);

                pointer.target.bubbleEvent("pointer_down");
            }
        }
        else if (type == 1 || type == 3) {
            if (pointer.began) {
                this._touchCount--;

                if (pointer.captors.length > 0)
                    this.releasePointerCapture(pointer.pointerId);

                pointer.began = false;
                let now = performance.now();

                if (pointer.downTargets.length == 0
                    || pointer.clickCancelled
                    || Math.abs(pointer.x - pointer.downX) > clickTestThreshold
                    || Math.abs(pointer.y - pointer.downY) > clickTestThreshold) {
                    pointer.clickCancelled = true;
                    pointer.lastClickTime = 0;
                    pointer.clickCount = 1;
                }
                else {
                    if (now - pointer.lastClickTime < 350
                        && Math.abs(pointer.x - pointer.lastClickX) < clickTestThreshold
                        && Math.abs(pointer.y - pointer.lastClickY) < clickTestThreshold
                        && pointer.lastClickButton == pointer.button) {
                        if (pointer.clickCount == 2)
                            pointer.clickCount = 1;
                        else
                            pointer.clickCount++;
                    }
                    else
                        pointer.clickCount = 1;
                    pointer.lastClickTime = now;
                    pointer.lastClickX = pointer.x;
                    pointer.lastClickY = pointer.y;
                    pointer.lastClickButton = pointer.button;
                }

                //当间隔一帧时，使用帧率计算时间，避免掉帧因素
                pointer.holdTime = (Timers.frameCount - pointer.downFrame) == 1 ? (1 / 60) : (now - pointer.downTime) / 1000;
                this.setLastPointer(pointer);

                let bubbleFrom = pointer.target ? pointer.target : this;

                if (pointer.captors.length > 0) {
                    let len = pointer.captors.length;
                    for (let i = 0; i < len; i++) {
                        let e = pointer.captors[i];
                        if ((e instanceof UIElement) && !e.onStage)
                            pointer.captors[i] = null;
                    }
                    bubbleFrom.bubbleEvent("pointer_up", null, pointer.captors);

                    pointer.captors.length = 0;
                }
                else
                    bubbleFrom.bubbleEvent("pointer_up");

                if (type != 3) {
                    let clickTarget = this.clickTest(pointer);
                    if (clickTarget) {
                        this.setLastPointer(pointer);
                        if (ev.button == 1 || ev.button == 2)
                            clickTarget.bubbleEvent("right_click");
                        else
                            clickTarget.bubbleEvent("click");
                    }
                }

                pointer.button = -1;

                if ((<PointerEvent>ev).pointerType != "mouse") {
                    pointer.target = null;
                    this.handleRollOver(pointer);
                    pointer.pointerId = -1;
                }

                if (this._nextCursor != null) {
                    this.style.cursor = this._nextCursor;
                    this._nextCursor = null;
                }
            }
        }
    }

    private clickTest(pointer: PointerInfo): UIElement {
        if (pointer.clickCancelled) {
            pointer.downTargets.length = 0;
            return null;
        }

        let obj: UIElement = pointer.downTargets[0];
        if (obj.onStage) {
            pointer.downTargets.length = 0;
            return obj;
        }

        obj = pointer.target;
        while (obj) {
            let i = pointer.downTargets.indexOf(obj);
            if (i != -1 && obj.onStage)
                break;

            obj = obj.parent;
        }

        pointer.downTargets.length = 0;

        return obj;
    }

    private handleWheel(ev: WheelEvent): void {
        this._pointerPos.set(ev.pageX, ev.pageY);

        let pointer = this._pointers[0];
        this._touchTarget = null;
        let ele: any = ev.target;
        while (ele) {
            if (ele.$owner) {
                this._touchTarget = ele;
                break;
            }

            ele = ele.parentElement;
        }

        if (!this._touchTarget)
            this._touchTarget = this;
        pointer.target = this._touchTarget;

        pointer.shiftKey = ev.shiftKey;
        pointer.altKey = ev.altKey;
        pointer.ctrlKey = ev.ctrlKey;
        pointer.commandKey = ev.metaKey;
        pointer.mouseWheelDelta = ev.deltaY;
        this.setLastPointer(pointer);
        this._touchTarget.bubbleEvent("mouse_wheel");
        pointer.mouseWheelDelta = 0;
    }

    private getPointer(pointerId: number): PointerInfo {
        for (let j: number = 0; j < maxPointer; j++) {
            let pointer: PointerInfo = this._pointers[j];
            if (pointerId == -1 && pointer.pointerId != -1
                || pointerId != -1 && pointer.pointerId == pointerId)
                return pointer;
        }

        return null;
    }

    private handleRollOver(pointer: PointerInfo) {
        this._rollOverChain.length = 0;
        this._rollOutChain.length = 0;

        let obj = pointer.lastRollOver;
        while (obj != null) {
            this._rollOutChain.push(obj);
            obj = obj.parent;
        }
        pointer.lastRollOver = pointer.target;

        obj = pointer.target;
        while (obj) {
            let i = this._rollOutChain.indexOf(obj);
            if (i != -1) {
                this._rollOutChain.splice(i, this._rollOutChain.length - i);
                break;
            }

            this._rollOverChain.push(obj);
            obj = obj.parent;
        }

        let cnt: number = this._rollOutChain.length;
        if (cnt > 0) {
            for (let i = 0; i < cnt; i++) {
                let obj = this._rollOutChain[i];
                if (obj.onStage && obj.$owner)
                    obj.$owner.emit("roll_out");
            }
            this._rollOutChain.length = 0;
        }

        let cursor: string;
        cnt = this._rollOverChain.length;
        if (cnt > 0) {
            for (let i = 0; i < cnt; i++) {
                let obj = this._rollOverChain[i];
                if (obj.onStage && obj.$owner) {
                    obj.$owner.emit("roll_over");
                    cursor = obj.cursor;
                }
            }
            this._rollOverChain.length = 0;
        };

        let style = this.style;
        if (cursor == null) cursor = "";
        let oldCursor = style.cursor ?? "";

        if (pointer.began) {
            if (oldCursor != cursor)
                this._nextCursor = cursor;
            else
                this._nextCursor = null;
        }
        else {
            this._nextCursor = null;
            if (oldCursor != cursor)
                style.cursor = cursor;
        }
    }

    private setLastPointer(pointer: PointerInfo) {
        lastInput.pointerId = pointer.pointerId;
        lastInput.x = pointer.x;
        lastInput.y = pointer.y;
        lastInput.clickCount = pointer.clickCount;
        lastInput.mouseWheelDelta = pointer.mouseWheelDelta;
        lastInput.button = pointer.button;
        lastInput.holdTime = pointer.holdTime;
        lastInput.altKey = pointer.altKey;
        lastInput.ctrlKey = pointer.ctrlKey;
        lastInput.shiftKey = pointer.shiftKey;
        lastInput.commandKey = pointer.commandKey;
    }

    public onClickLink(event: Event, href: string) {
        let e: HTMLElement = <HTMLElement>event.currentTarget;
        while (e) {
            if (e instanceof UIElement) {
                e.bubbleEvent("click_link", href);
                break;
            }
            e = e.parentElement;
        }
    }

    //Focus Manage -----------------

    public get focusedElement(): UIElement {
        if (this._focused != null && !this._focused.onStage)
            this._focused = null;
        return this._focused;
    }

    public validateFocus(container: UIElement, child: UIElement) {
        if (child == this._focused || child.isAncestorOf(this._focused))
            this.onFocusRemoving(container);
    }

    public setFocus(newFocus: UIElement, byKey?: boolean) {
        if (newFocus == this)
            newFocus = null;

        this._nextFocus = null;

        if (this._focused == newFocus)
            return;

        let navRoot = null;
        let element = newFocus;
        while (element != null) {
            if (!element.focusable)
                return;
            else if (element.tabStopChildren) {
                if (navRoot == null)
                    navRoot = element;
            }

            element = element.parent;
        }

        let oldFocus = this._focused;
        this._focused = newFocus;

        if (navRoot != null) {
            navRoot._lastFocus = this._focused;
            let pos = this._focusHistory.indexOf(navRoot);
            if (pos != -1) {
                if (pos < this._focusHistory.length - 1)
                    this._focusHistory.splice(pos + 1, this._focusHistory.length - pos - 1);
            }
            else {
                this._focusHistory.push(navRoot);
                if (this._focusHistory.length > 10)
                    this._focusHistory.shift();
            }
        }

        this._focusInChain.length = 0;
        this._focusOutChain.length = 0;

        element = oldFocus;
        while (element != null) {
            if (element.focusable)
                this._focusOutChain.push(element);
            element = element.parent;
        }

        element = this._focused;
        let i: number;
        while (element != null) {
            i = this._focusOutChain.indexOf(element);
            if (i != -1) {
                this._focusOutChain.splice(i, this._focusOutChain.length - i);
                break;
            }
            if (element.focusable)
                this._focusInChain.push(element);

            element = element.parent;
        }

        let cnt = this._focusOutChain.length;
        if (cnt > 0) {
            for (i = 0; i < cnt; i++) {
                element = this._focusOutChain[i];
                if (element.onStage && element.$owner) {
                    element.$owner.emit("focus_out");
                    if (this._focused != newFocus) //focus changed in event
                        return;
                }
            }
            this._focusOutChain.length = 0;
        }

        cnt = this._focusInChain.length;
        if (cnt > 0) {
            for (i = 0; i < cnt; i++) {
                element = this._focusInChain[i];
                if (element.onStage && element.$owner) {
                    element.$owner.emit("focus_in", byKey ? "key" : null);
                    if (this._focused != newFocus) //focus changed in event
                        return;
                }
            }
            this._focusInChain.length = 0;
        }
    }

    private onFocusRemoving(sender: UIElement) {
        this._nextFocus = sender;
        if (this._focusHistory.length > 0) {
            let i = this._focusHistory.length - 1;
            let test = this._focusHistory[i];
            let element = this._focused;
            while (element != null && element != sender) {
                if (element.tabStopChildren && element == test) {
                    i--;
                    if (i < 0)
                        break;

                    test = this._focusHistory[i];
                }

                element = element.parent;
            }

            if (i != this._focusHistory.length - 1) {
                this._focusHistory.splice(i + 1, this._focusHistory.length - i - 1);
                if (this._focusHistory.length > 0)
                    this._nextFocus = this._focusHistory[this._focusHistory.length - 1];
            }
        }

        this._focused = null;
    }
}

class PointerInfo {
    public x: number = 0;
    public y: number = 0;
    public pointerId: number = -1;
    public clickCount: number = 0;
    public mouseWheelDelta: number = 0;
    public button: number = -1;
    public shiftKey: boolean = false;
    public altKey: boolean = false;
    public ctrlKey: boolean = false;
    public commandKey: boolean = false;

    public downX: number = 0;
    public downY: number = 0;
    public downTime: number = 0;
    public downFrame: number = 0;
    public began: boolean = false;
    public clickCancelled: boolean = false;
    public lastClickTime: number = 0;
    public lastClickX: number = 0;
    public lastClickY: number = 0;
    public lastClickButton: number = 0;
    public holdTime: number = 0;
    public target: UIElement = null;
    public downTargets: UIElement[] = new Array<UIElement>();
    public lastRollOver: UIElement = null;
    public captors: Array<EventDispatcher> = new Array<EventDispatcher>();
}

export interface CustomTags {
    "fgui-div": UIElement,
    "fgui-img": Image,
    "fgui-movieclip": MovieClip,
    "fgui-text": TextField,
    "fgui-input": InputTextField,
    "fgui-shape": Shape,
    "fgui-stage": Stage,
}

global.createUIElement = function <K extends keyof CustomTags>(tagName: K, owner?: any): CustomTags[K] {
    if (!customElements.get("fgui-div")) {
        customElements.define("fgui-div", UIElement, { extends: "div" });
        customElements.define("fgui-img", Image, { extends: "div" });
        customElements.define("fgui-movieclip", MovieClip, { extends: "div" });
        customElements.define("fgui-text", TextField, { extends: "div" });
        customElements.define("fgui-input", InputTextField, { extends: "div" });
        customElements.define("fgui-shape", Shape, { extends: "div" });
        customElements.define("fgui-stage", Stage, { extends: "div" });
    }

    let ele = <CustomTags[K]>document.createElement("div", { is: tagName });
    ele.style.position = "absolute";
    ele.$owner = owner;
    ele.init();

    return ele;
}

declare global {
    export function createUIElement<K extends keyof CustomTags>(tagName: K, owner?: any): CustomTags[K];
}