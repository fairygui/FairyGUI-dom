import { EventPool } from "../event/Event";
import { EventDispatcher } from "../event/EventDispatcher";
import { Rect } from "../math/Rect";
import { Vec2 } from "../math/Vec2";
import { FlipType } from "../ui/FieldTypes";
import { GObject } from "../ui/GObject";
import { IStage } from "./IStage";

export class UIElement extends HTMLDivElement {
    public $owner: GObject;

    protected _alpha: number;
    protected _touchable: boolean;
    protected _touchDisabled?: boolean;
    protected _visible: boolean;
    protected _grayed: boolean;
    protected _opaque: boolean;
    protected _pos: Vec2;
    protected _contentRect: Rect;
    protected _scale: Vec2;
    protected _rot: number;
    protected _pivot: Vec2;
    protected _clipping?: boolean;
    protected _parent: UIElement;
    protected _children: Array<UIElement>;
    protected _flipX?: boolean;
    protected _flipY?: boolean;
    protected _cursor: string;

    protected _notFocusable?: boolean;
    protected _tabStop?: boolean;
    protected _tabStopChildren?: boolean;

    /** @internal */
    public _lastFocus: UIElement;
    /** @internal */
    public _isRoot: boolean;

    private _timerID: number = 0;

    public constructor() {
        super();

        this._children = [];

        this._pos = new Vec2();
        this._scale = new Vec2(1, 1);
        this._rot = 0;
        this._pivot = new Vec2();
        this._contentRect = new Rect();
        this._alpha = 1;
        this._touchable = true;
        this._visible = true;
        this._opaque = true;
    }

    public get name(): string {
        return this.id;
    }
    public set name(value: string) {
        this.id = value;
    }

    public get x(): number {
        return this._pos.x;
    }
    public set x(value: number) {
        this.setPosition(value, this._pos.y);
    }

    public get y(): number {
        return this._pos.y;
    }
    public set y(value: number) {
        this.setPosition(this._pos.x, value);
    }

    public setPosition(x: number, y: number): void {
        if (this._pos.x != x || this._pos.y != y) {
            this._pos.set(x, y);
            this.style.left = x + "px";
            this.style.top = y + "px";
        }
    }

    public get width(): number {
        return this._contentRect.width;
    }
    public set width(value: number) {
        if (this._contentRect.width != value) {
            this._contentRect.width = value;
            this.onSizeChanged();
        }
    }

    public get height(): number {
        return this._contentRect.height;
    }
    public set height(value: number) {
        if (this._contentRect.height != value) {
            this._contentRect.height = value;
            this.onSizeChanged();
        }
    }

    public setSize(wv: number, hv: number): void {
        if (wv != this._contentRect.width || hv != this._contentRect.height) {
            this._contentRect.width = wv;
            this._contentRect.height = hv;
            this.onSizeChanged();
        }
    }

    protected onSizeChanged(): void {
        this.style.width = this._contentRect.width + "px";
        this.style.height = this._contentRect.height + "px";
    }

    public get pivotX(): number {
        return this._pivot.x;
    }
    public set pivotX(value: number) {
        this.setPivot(value, this._pivot.y);
    }

    public get pivotY(): number {
        return this._pivot.y;
    }
    public set pivotY(value: number) {
        this.setPosition(this._pivot.x, value);
    }

    public setPivot(xv: number, yv: number): void {
        if (this._pivot.x != xv || this._pivot.y != yv) {
            this._pivot.set(xv, yv);
            this.style.transformOrigin = this._pivot.x + "%," + this._pivot.y + "%";
        }
    }

    public get flip(): FlipType {
        if (this._flipX)
            return this._flipY ? FlipType.Both : FlipType.Horizontal;
        else if (this._flipY)
            return this._flipX ? FlipType.Both : FlipType.Vertical;
        else
            return FlipType.None;
    }
    public set flip(value: FlipType) {
        let a: boolean = value == FlipType.Both || value == FlipType.Horizontal;
        let b: boolean = value == FlipType.Both || value == FlipType.Vertical;
        if (a != this._flipX || b != this._flipY)
            this._flipX = a;
        this._flipY = b;

        this.updateTransform();
    }

    public get cursor(): string {
        return this._cursor;
    }

    public set cursor(value: string) {
        this._cursor = value;
    }

    private updateTransform(): void {
        if (this._timerID != 0)
            return;

        this._timerID = window.requestAnimationFrame(() => {
            this._timerID = 0;
            let str: Array<string> = [];
            if (this._scale.x != 1 || this._flipX) {
                str.push("scaleX(");
                str.push("" + this._scale.x * (this._flipX ? -1 : 1));
                str.push(") ");
            }
            if (this._scale.y != 1 || this._flipY) {
                str.push("scaleY(");
                str.push("" + this._scale.y * (this._flipY ? -1 : 1));
                str.push(") ");
            }
            if (this._rot != 0) {
                str.push("rotate(");
                str.push("" + this._rot);
                str.push("deg) ");
            }
            if (str.length > 0) {
                this.style.transform = str.join("");
                if (this._flipX || this._flipY)
                    this.style.transformOrigin = "%50 %50";
                else
                    this.style.transformOrigin = (this._pivot.x * 100) + "% " + (this._pivot.y * 100) + "%";
            }
            else
                this.style.transform = "none";
        });
    }

    protected updateFilters(): void {
        let filter = "";
        if (this._grayed)
            filter += "grayscale(100%)";

        this.style.filter = filter;
    }

    public get scaleX(): number {
        return this._scale.x;
    }
    public set scaleX(value: number) {
        this.setScale(value, this._scale.y);
    }

    public get scaleY(): number {
        return this._scale.y;
    }
    public set scaleY(value: number) {
        this.setScale(this._scale.x, value);
    }

    public setScale(xv: number, yv: number) {
        if (this._scale.x != xv || this._scale.y != yv) {
            this._scale.set(xv, yv);
            this.updateTransform();
        }
    }

    public get rotation(): number {
        return this._rot;
    }
    public set rotation(value: number) {
        if (this._rot != value) {
            this._rot = value;
            this.updateTransform();
        }
    }

    public get parent(): UIElement {
        return this._parent;
    }

    public get alpha(): number {
        return this._alpha;
    }
    public set alpha(value: number) {
        if (this._alpha != value) {
            this._alpha = value;
            this.style.opacity = this._alpha.toFixed(3);
        }
    }

    public get touchable(): boolean {
        return this._touchable;
    }
    public set touchable(value: boolean) {
        if (this._touchable != value) {
            this._touchable = value;

            this.updateTouchableFlag();
        }
    }

    public get opaque(): boolean {
        return this._opaque;
    }
    public set opaque(value: boolean) {
        if (this._opaque != value) {
            this._opaque = value;

            this.updateTouchableFlag();
        }
    }

    protected updateTouchableFlag(): void {
        let str: string;
        if (!this._touchable || !this._opaque || this._touchDisabled)
            str = "none";
        else if (this._parent && !this._parent._opaque)
            str = "auto";
        else
            str = "";

        if ((this.style.pointerEvents == null ? "" : this.style.pointerEvents) != str) {
            this.style.pointerEvents = str;

            const children = this._children;
            for (let i = 0, l = children.length; i < l; i++) {
                children[i].updateTouchableFlag();
            }
        }
    }

    public setNotInteractable(): void {
        this._touchDisabled = true;
        this.style.pointerEvents = "none";
    }

    public get visible(): boolean {
        return this._visible;
    }
    public set visible(value: boolean) {
        if (this._visible != value) {
            this._visible = value;
            if (value)
                this.style.display = "";
            else
                this.style.display = "none";
        }
    }

    public get grayed(): boolean {
        return this._grayed;
    }
    public set grayed(value: boolean) {
        if (this._grayed != value) {
            this._grayed = value;
            this.updateFilters();
        }
    }

    // public get blendMode(): Blending {
    //     return this._graphics ? this._graphics.material.blending : NormalBlending;
    // }

    // public set blendMode(value: Blending) {
    //     if (this._graphics)
    //         this._graphics.material.blending = value;
    // }

    public get focusable(): boolean {
        return !this._notFocusable;
    }

    public set focusable(value: boolean) {
        this._notFocusable = !value;
    }

    public get focused(): boolean {
        return this.stage.focusedElement == this || this.isAncestorOf(this.stage.focusedElement);
    }

    public get tabStop(): boolean {
        return this._tabStop;
    }

    public set tabStop(value: boolean) {
        if (this._tabStop != value) {
            this._tabStop = value;
            if (value) {
                this.tabIndex = 0;
                this.addEventListener("focus", () => { if (this._tabStop) this.stage.setFocus(this, true); });
            }
            else
                this.tabIndex = null;
        }
    }

    public get tabStopChildren(): boolean {
        return this._tabStopChildren;
    }

    public set tabStopChildren(value: boolean) {
        this._tabStopChildren = value;
    }

    public get onStage(): boolean {
        return this.getRootNode() == this.ownerDocument;
    }

    public get stage(): IStage {
        let p: HTMLElement = this;
        while (p) {
            if ((<any>p).is_stage)
                return <IStage><any>p;

            p = p.parentElement;
        }

        return window.fguiStage;
    }

    public globalToLocal(x: number, y: number, result?: Vec2): Vec2 {
        let rect = this.getBoundingClientRect();
        let sx = this._contentRect.width > 0 ? (rect.width / this._contentRect.width) : 1;
        let sy = this._contentRect.height > 0 ? (rect.height / this._contentRect.height) : 1;

        if (!result)
            result = new Vec2();
        result.x = (x - rect.x) / sx;
        result.y = (y - rect.y) / sy;

        return result;
    }

    public localToGlobal(x: number, y: number, result?: Vec2): Vec2 {
        let rect = this.getBoundingClientRect();
        let sx = this._contentRect.width > 0 ? (rect.width / this._contentRect.width) : 1;
        let sy = this._contentRect.height > 0 ? (rect.height / this._contentRect.height) : 1;

        if (!result)
            result = new Vec2();
        result.x = x * sx + rect.x;
        result.y = y * sy + rect.y;

        return result;
    }

    public addChild(child: UIElement): void {
        this.addChildAt(child, Number.POSITIVE_INFINITY);
    }

    public addChildAt(child: UIElement, index: number) {
        if (child._parent == this)
            this.setChildIndex(child, index);
        else {
            if (index > this._children.length - 1) {
                this.appendChild(child);
            }
            else {
                let refNode = this._children[index];
                this.insertBefore(child, refNode);
            }
            this._children.splice(index, 0, child);
            child._parent = this;
            child.updateTouchableFlag();
        }

        if (this.getRootNode() == this.ownerDocument)
            child.broadcastEvent("added_to_stage");
    }

    public removeChild<T extends UIElement | Node>(child: T): T {
        if (child instanceof UIElement) {
            let index = this._children.indexOf(child);
            if (index == -1)
                throw 'not a child';

            this.removeChildAt(index);
        }
        else
            super.removeChild(child);
        return child;
    }

    public removeChildAt(index: number) {
        let child: UIElement = this._children[index];
        if (this.getRootNode() == this.ownerDocument) {
            child.broadcastEvent("removed_from_stage");
            this.stage.validateFocus(this, child);
        }

        this._children.splice(index, 1);
        super.removeChild(child);
        child._parent = null;
    }

    public setChildIndex(child: UIElement, index: number) {
        let oldIndex = this._children.indexOf(child);
        if (oldIndex == index) return;
        if (oldIndex == -1) throw 'Not a child';
        this._children.splice(oldIndex, 1);
        if (index >= this._children.length) {
            this._children.push(child);
            this.appendChild(child);
        }
        else {
            this._children.splice(index, 0, child);
            if (index < oldIndex)
                index++;
            let refNode = this._children[index];
            this.insertBefore(child, refNode);
        }
    }

    public getIndex(child: UIElement): number {
        return this._children.indexOf(child);
    }

    public get numChildren(): number {
        return this._children.length;
    }

    public isAncestorOf(child: UIElement): boolean {
        if (child == null)
            return false;

        var p: UIElement = child.parent;
        while (p) {
            if (p == this)
                return true;

            p = p.parent;
        }
        return false;
    }

    public get clipping(): boolean {
        return this._clipping;
    }

    public set clipping(value: boolean) {
        if (this._clipping != value) {
            this._clipping = value;

            if (this._clipping)
                this.style.overflow = "hidden";
            else
                this.style.overflow = "visible";
        }
    }

    public init() {
    }

    public dispose() {

    }

    public traverseChildren(callback: (obj: UIElement) => void): void {
        callback(this);

        const children = this._children;
        for (let i = 0, l = children.length; i < l; i++) {
            children[i].traverseChildren(callback);
        }
    }

    public traverseAncestors(callback: (obj: UIElement) => void): void {
        const parent = this._parent;

        if (parent) {
            callback(parent);
            parent.traverseAncestors(callback);
        }
    }

    public broadcastEvent(type: string, data?: any): void {
        let ev = EventPool.borrow();
        ev._type = type;
        ev.data = data;
        ev._initiator = this;
        let arr = ev._callChain;

        this.traverseChildren(obj => {
            if (obj.$owner && !obj.$owner.isDisposed)
                arr.push(obj.$owner);
        });

        arr.forEach(obj => {
            obj._dispatchDirect(type, ev);
        });

        arr.length = 0;
        EventPool.returns(ev);
    }

    public bubbleEvent(initiator: HTMLElement, type: string, data?: any, addChain?: Array<EventDispatcher>): void {
        let ev = EventPool.borrow();
        ev._type = type;
        ev.data = data;
        ev._initiator = initiator;
        let arr = ev._callChain;

        if (this.$owner)
            arr.push(this.$owner);
        this.traverseAncestors(obj => {
            if (obj.$owner)
                arr.push(obj.$owner);
        });

        let stage = this.stage;

        for (let i = arr.length - 1; i >= 0; i--) {
            let obj = arr[i];
            let col = obj._listeners[type];
            if (col && col.captures.length > 0) {
                obj._dispatch(col, ev, true);
                if (ev._pointerCapture) {
                    ev._pointerCapture = false;
                    if (type == "pointer_down")
                        stage.addPointerMonitor(ev.input.pointerId, obj);
                }
            }
        }

        if (!ev._stopsPropagation) {
            for (let i = 0; i < arr.length; i++) {
                let obj = arr[i];
                let col = obj._listeners[type];
                if (col && col.callbacks.length > 0) {
                    obj._dispatch(col, ev, false);
                    if (ev._pointerCapture) {
                        ev._pointerCapture = false;
                        if (type == "pointer_down")
                            stage.addPointerMonitor(ev.input.pointerId, obj);
                    }

                    if (ev._stopsPropagation)
                        break;
                }
            }

            if (addChain) {
                for (let i = 0; i < addChain.length; i++) {
                    let obj = addChain[i];
                    if (obj && arr.indexOf(obj) == -1) {
                        obj._dispatchDirect(type, ev);
                    }
                }
            }
        }

        arr.length = 0;
        EventPool.returns(ev);
    }
}