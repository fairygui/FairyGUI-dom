import { UIElement } from "./UIElement";
import { Color } from "../math/Color";
import { convertToHtmlColor } from "../utils/ToolSet";

export class Shape extends UIElement {
    protected _color: number;
    protected _type: number;

    constructor() {
        super();

        this._color = 0xFFFFFF;
        this._type = 0;
    }

    public init() {
        super.init();

        this.style.boxSizing = "border-box";
        this.setNotInteractable();
    }

    public get color(): number {
        return this._color;
    }
    public set color(value: number) {
        if (this._color != value) {
            if (this._type != 0) {
                this._color = value;
                this.style.backgroundColor = convertToHtmlColor(value);
            }
        }
    }

    public drawRect(lineWidth: number, lineColor: Color, fillColor: Color) {
        this.setType(1);
        if (lineColor.a != 0)
            this.style.border = lineWidth + "px solid " + lineColor.toStyleString();
        else
            this.style.border = "";
        this._color = fillColor.getHex();
        if (fillColor.a != 0)
            this.style.backgroundColor = fillColor.toStyleString();
        else
            this.style.backgroundColor = "transparent";
    }

    public drawRoundRect(lineWidth: number, lineColor: Color, fillColor: Color,
        topLeftRadius: number, topRightRadius: number, bottomLeftRadius: number, bottomRightRadius: number) {
        this.setType(2);
        this.style.border = lineWidth + "px solid " + lineColor.toStyleString();
        this.style.borderRadius = topLeftRadius + "px " + topRightRadius + "px " + bottomRightRadius + "px " + bottomLeftRadius + "px";
        this._color = fillColor.getHex();
        if (fillColor.a != 0)
            this.style.backgroundColor = fillColor.toStyleString();
        else
            this.style.backgroundColor = "transparent";
    }

    public drawEllipse(lineWidth: number, lineColor: Color, fillColor: Color, startDegree?: number, endDegree?: number) {
        this.setType(3);
        this.style.border = lineWidth + "px solid " + lineColor.toStyleString();
        this.style.borderRadius = this._contentRect.width + "px / " + this._contentRect.height + "px";
        this._color = fillColor.getHex();
        if (fillColor.a != 0)
            this.style.backgroundColor = fillColor.toStyleString();
        else
            this.style.backgroundColor = "transparent";
    }

    public drawPolygon(points: Array<number>, fillColor: Color, lineWidth?: number, lineColor?: Color) {
        this.setType(4);
    }

    public drawRegularPolygon(sides: number, lineWidth: number, centerColor: Color, lineColor: Color,
        fillColor: Color, rotation: number, distances: Array<number>) {
        this.setType(5);
    }

    public clear() {
        this.setType(0);
    }

    public setType(type: number) {
        if (this._type == 0) {
            if (type != 0) {
                this._touchDisabled = false;
                this.updateTouchableFlag();
            }
        }
        else {
            if (type == 0) {
                this.style.backgroundColor = "transparent";
                this.style.border = "0px solid";
                this.setNotInteractable();
            }
        }
        this._type = type;
    }

    protected onSizeChanged(): void {
        this.style.width = this._contentRect.width + "px";
        this.style.height = this._contentRect.height + "px";
    }
}