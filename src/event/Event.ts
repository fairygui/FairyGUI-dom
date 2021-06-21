import { Pool } from "../utils/Pool";
import { UIElement } from "../core/UIElement";
import { EventDispatcher } from "./EventDispatcher";
import { GObject } from "../ui/GObject";

export type EventType =
    "pointer_down" | "pointer_up" | "pointer_move"
    | "click" | "right_click"
    | "roll_over" | "roll_out"
    | "mouse_wheel"
    | "key_down" | "key_up"
    | "added_to_stage" | "removed_from_stage"
    | "pos_changed" | "size_changed"
    | "status_changed" //controller/button
    | "changed" //slider
    | "focus_in" | "focus_out"
    | "drag_start" | "drag_move" | "drag_end" | "drop"
    | "scroll" | "scroll_end" | "pull_down_release" | "pull_up_release"
    | "click_item" | "click_link"
    | "play_end" | "gear_stop";

export interface InputInfo {
    x: number;
    y: number;
    mouseWheelDelta: number;
    pointerId: number;
    button: number;
    clickCount: number;
    holdTime: number;
    shiftKey: boolean;
    altKey: boolean;
    ctrlKey: boolean;
    commandKey: boolean;
    ctrlOrCmdKey: boolean;

    isDblClick: boolean;
    isRightButton: boolean;

    keyCode: string;
    key: string;
}

export const lastInput: InputInfo = {
    x: 0,
    y: 0,
    mouseWheelDelta: 0,
    pointerId: 0,
    button: 0,
    clickCount: 0,
    holdTime: 0,
    altKey: false,
    shiftKey: false,
    ctrlKey: false,
    commandKey: false,
    keyCode: "",
    key: "",

    get isDblClick() {
        return this.clickCount == 2;
    },

    get isRightButton() {
        return this.button == 2;
    },

    get ctrlOrCmdKey() {
        return this.ctrlKey || this.commandKey;
    }
}

export class Event {
    public data: any = null;

    /** @internal */ 
    public _defaultPrevented: boolean;
    /** @internal */ 
    public _stopsPropagation: boolean;
    /** @internal */ 
    public _pointerCapture: boolean;
    /** @internal */ 
    public _callChain: Array<EventDispatcher> = [];

    /** @internal */ 
    public _type: string;
    /** @internal */ 
    public _target: EventDispatcher;
    /** @internal */ 
    public _initiator: HTMLElement;

    public constructor() {
    }

    public get type(): string {
        return this._type;
    }

    public get target(): EventDispatcher {
        return this._target;
    }

    public get sender(): GObject {
        return <GObject>this._target;
    }

    public get initiator(): HTMLElement {
        return this._initiator;
    }

    public get input(): Readonly<InputInfo> {
        return lastInput;
    }

    public stopPropagation() {
        this._stopsPropagation = true;
    }

    public preventDefault() {
        this._defaultPrevented = true;
    }

    public capturePointer() {
        this._pointerCapture = true;
    }

    public get isDefaultPrevented(): boolean {
        return this._defaultPrevented;
    }
}

export var EventPool: Pool<Event> = new Pool<Event>(Event,
    obj => {
        obj._stopsPropagation = false;
        obj._defaultPrevented = false;
        obj._pointerCapture = false;
        obj._callChain.length = 0;
    },
    obj => {
        obj.data = null;
        obj._initiator = null;
        obj._target = null;
        obj._callChain.length = 0;
    });