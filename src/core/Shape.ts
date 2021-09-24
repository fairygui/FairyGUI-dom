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
    }

    public get color(): number {
        return this._color;
    }
    public set color(value: number) {
        if (this._color != value) {
            if (this._type != 0)
                this.style.backgroundColor = convertToHtmlColor(value);
        }
    }

    public drawRect(lineWidth: number, lineColor: Color, fillColor: Color) {
        this._type = 1;
        if (lineColor.a != 0)
            this.style.border = lineWidth + "px solid " + lineColor.toStyleString();
        else
            this.style.border = "";
        this._color = fillColor.getHex();
        if (fillColor.a != 0)
            this.style.backgroundColor = fillColor.toStyleString();
        else
            this.style.backgroundColor = "transparent";
        this.onSizeChanged();
    }

    public drawRoundRect(lineWidth: number, lineColor: Color, fillColor: Color,
        topLeftRadius: number, topRightRadius: number, bottomLeftRadius: number, bottomRightRadius: number) {
        this._type = 2;
        this.style.border = lineWidth + "px solid " + lineColor.toStyleString();
        this.style.borderRadius = topLeftRadius + "px " + topRightRadius + "px " + bottomRightRadius + "px " + bottomLeftRadius + "px";
        this._color = fillColor.getHex();
        if (fillColor.a != 0)
            this.style.backgroundColor = fillColor.toStyleString();
        else
            this.style.backgroundColor = "transparent";
        this.onSizeChanged();
    }

    public drawEllipse(lineWidth: number, lineColor: Color, fillColor: Color, startDegree?: number, endDegree?: number) {
        this._type = 3;
        this.style.border = lineWidth + "px solid " + lineColor.toStyleString();
        this.style.borderRadius = this._contentRect.width + "px / " + this._contentRect.height + "px";
        this._color = fillColor.getHex();
        if (fillColor.a != 0)
            this.style.backgroundColor = fillColor.toStyleString();
        else
            this.style.backgroundColor = "transparent";
        this.onSizeChanged();
    }

    public drawPolygon(points: Array<number>, fillColor: Color, lineWidth?: number, lineColor?: Color) {
        this._type = 4;
        this.onSizeChanged();
    }

    public drawRegularPolygon(sides: number, lineWidth: number, centerColor: Color, lineColor: Color,
        fillColor: Color, rotation: number, distances: Array<number>) {
        this._type = 5;
        this.onSizeChanged();
    }

    public clear() {
        this._type = 0;
        this.style.backgroundColor = "transparent";
        this.style.border = "0px solid";
        this.style.width = "0px";
        this.style.height = "0px";
    }

    protected onSizeChanged(): void {
        this.style.width = this._contentRect.width + "px";
        this.style.height = this._contentRect.height + "px";
    }
}