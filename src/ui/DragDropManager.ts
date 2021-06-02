import { Stage } from "../core/Stage";
import { GLoader } from "./GLoader";
import { GObject } from "./GObject";
import { GRoot } from "./GRoot";
import { Event } from "../event/Event";
import { Vec2 } from "../math/Vec2";

var _inst: DragDropManager;

export class DragDropManager {

    private _agent: GLoader;
    private _sourceData: any;

    public static get inst(): DragDropManager {
        if (!_inst)
            _inst = new DragDropManager();
        return _inst;
    }

    constructor() {
        let a = this._agent = new GLoader();
        a.draggable = true;
        a.touchable = false;////important
        a.setSize(100, 100);
        a.setPivot(0.5, 0.5, true);
        a.align = "center";
        a.verticalAlign = "middle";
        a.sortingOrder = 1000000;
        a.on("drag_end", this.__dragEnd, this);
    }

    public get dragAgent(): GObject {
        return this._agent;
    }

    public get dragging(): boolean {
        return this._agent.parent != null;
    }

    public startDrag(groot: GRoot, icon: string, sourceData?: any, pointerId?: number): void {
        if (this._agent.parent)
            return;

        this._sourceData = sourceData;
        this._agent.url = icon;
        groot.addChild(this._agent);
        let pt: Vec2 = groot.globalToLocal(groot.pointerPos.x, groot.pointerPos.y);
        this._agent.setPosition(pt.x, pt.y);
        this._agent.startDrag(pointerId != null ? pointerId : -1);
    }

    public cancel(): void {
        if (this._agent.parent) {
            this._agent.stopDrag();
            this._agent.removeFromParent();
            this._sourceData = null;
        }
    }

    private __dragEnd(evt: Event): void {
        if (this._agent.parent == null) //cancelled
            return;

        let obj: GObject = GRoot.getInst(this._agent).touchTarget;
        this._agent.removeFromParent();

        let sourceData: any = this._sourceData;
        this._sourceData = null;

        while (obj) {
            if (obj.hasListener("drop")) {
                obj.emit("drop", sourceData);
                return;
            }

            obj = obj.parent;
        }
    }
}

