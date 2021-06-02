import { GObject } from "./GObject";
import { ObjectPropID } from "./FieldTypes";
import { ByteBuffer } from "../utils/ByteBuffer";
import { Shape } from "../core/Shape";
import { UIElement } from "../core/UIElement";

export class GGraph extends GObject {
    protected _element: Shape;

    constructor() {
        super();
    }

    protected createElement(): void {
        this._element = createUIElement("fgui-shape", this);
    }

    public get color(): number {
        return this._element.color;
    }

    public set color(value: number) {
        if (this._element.color != value) {
            this._element.color = value;
            this.updateGear(4);
        }
    }

    public get element(): Shape {
        return this._element;
    }

    public replaceMe(target: GObject): void {
        if (this.parent == null)
            throw new Error("parent not set");

        target.name = this.name;
        target.alpha = this.alpha;
        target.rotation = this.rotation;
        target.visible = this.visible;
        target.touchable = this.touchable;
        target.grayed = this.grayed;
        target.setPosition(this.x, this.y);
        target.setSize(this.width, this.height);

        let index = this.parent.getChildIndex(this);
        this.parent.addChildAt(target, index);
        target.relations.copyFrom(this.relations);

        this.parent.removeChild(this, true);
    }

    public setNativeObject(obj: UIElement): void {
        if (this._element == obj)
            return;

        this._element.$owner = null;
        this.offAll();
        if (this._element.parent)
            this._element.parent.removeChild(this._element);

        this._element = <UIElement & Shape>obj;
        obj.$owner = this;
        obj.alpha = this.alpha;
        obj.rotation = this.rotation;
        obj.visible = this.visible;
        obj.touchable = this.touchable;
        this.handleSizeChanged();
        this.handlePositionChanged();

        if (this.parent != null)
            this.parent.childStateChanged(this);
    }

    public getProp(index: number): any {
        if (index == ObjectPropID.Color)
            return this.color;
        else
            return super.getProp(index);
    }

    public setProp(index: number, value: any): void {
        if (index == ObjectPropID.Color)
            this.color = value;
        else
            super.setProp(index, value);
    }

    public setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void {
        super.setup_beforeAdd(buffer, beginPos);

        buffer.seek(beginPos, 5);

        let type = buffer.readByte();
        if (type != 0) {
            let i: number;
            let cnt: number;

            let lineSize = buffer.readInt();
            let lineColor = buffer.readFullColor();
            let fillColor = buffer.readFullColor();
            let roundedRect = buffer.readBool();
            let cornerRadius: Array<number>;
            if (roundedRect) {
                cornerRadius = [];
                for (i = 0; i < 4; i++)
                    cornerRadius[i] = buffer.readFloat();
            }

            if (type == 1) {
                if (roundedRect)
                    this._element.drawRoundRect(lineSize, lineColor, fillColor, cornerRadius[0], cornerRadius[1], cornerRadius[2], cornerRadius[3]);
                else
                    this._element.drawRect(lineSize, lineColor, fillColor);
            }
            else if (type == 2) {
                this._element.drawEllipse(lineSize, lineColor, fillColor, 0, 360);
            }
            else if (type == 3) {
                cnt = buffer.readShort();
                let points: Array<number> = [];
                points.length = cnt;
                for (i = 0; i < cnt; i++)
                    points[i] = buffer.readFloat();

                this._element.drawPolygon(points, fillColor, lineSize, lineColor);
            }
            else if (type == 4) {
                let sides = buffer.readShort();
                let startAngle = buffer.readFloat();
                cnt = buffer.readShort();
                let distances: Array<number>;
                if (cnt > 0) {
                    distances = [];
                    for (i = 0; i < cnt; i++)
                        distances[i] = buffer.readFloat();
                }

                this._element.drawRegularPolygon(sides, lineSize, fillColor, lineColor, fillColor, startAngle, distances);
            }
        }
    }
}
