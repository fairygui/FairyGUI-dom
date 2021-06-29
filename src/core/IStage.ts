import { EventDispatcher } from "../event/EventDispatcher";
import { Vec2 } from "../math/Vec2";
import { UIElement } from "./UIElement";

export interface IStage extends UIElement {
    readonly window: Window;
    readonly pointerPos: Vec2;
    readonly touchScreen: boolean;
    readonly touchTarget: UIElement;
    readonly touchCount: number;
    getPointerPos(pointerId?: number, ret?: Vec2): Vec2;
    addPointerMonitor(pointerId: number, target: EventDispatcher): void;
    removePointerMonitor(target: EventDispatcher): void;
    cancelClick(pointerId: number): void;

    validateFocus(container: UIElement, child: UIElement): void;
    focusedElement: UIElement;
    setFocus(value: UIElement, byKey?: boolean): void;
}

declare global {
    interface Window {
        fguiStage: IStage;
    }
}