import { FillMethod } from "../ui/FieldTypes";
import { UIElement } from "./UIElement";
import { Vec2 } from "../math/Vec2";
import { Margin } from "../math/Margin";

export class Image extends UIElement {
    protected _src: string;
    protected _color: number;
    protected _scaleByTile: boolean;
    protected _scale9Grid: Margin;
    protected _textureScale: Vec2;
    protected _tileGridIndice: number = 0;

    private _timerID_1: number = 0;

    constructor() {
        super();

        this._color = 0xFFFFFF;
        this._textureScale = new Vec2(1, 1);
    }

    public get src(): string {
        return this._src;
    }

    public set src(value: string) {
        if (this._src != value) {
            this._src = value;
            this._textureScale.set(1, 1);
            this.refresh();
        }
    }

    public get color(): number {
        return this._color;
    }
    public set color(value: number) {
        if (this._color != value) {
            this._color = value;
            this.updateFilters();
        }
    }

    public get textureScale(): Vec2 {
        return this._textureScale;
    }

    public set textureScale(value: Vec2) {
        if (!this._textureScale.equals(value)) {
            this._textureScale.copy(value);
            this.refresh();
        }
    }

    public get scale9Grid(): Margin {
        return this._scale9Grid;
    }

    public set scale9Grid(value: Margin) {
        if (this._scale9Grid != value) {
            this._scale9Grid = value;
            this.refresh();
        }
    }

    public get scaleByTile(): boolean {
        return this._scaleByTile;
    }

    public set scaleByTile(value: boolean) {
        if (this._scaleByTile != value) {
            this._scaleByTile = value;
            this.refresh();
        }
    }

    public get tileGridIndice(): number {
        return this._tileGridIndice;
    }

    public set tileGridIndice(value: number) {
        if (this._tileGridIndice != value) {
            this._tileGridIndice = value;
            this.refresh();
        }
    }

    public get fillMethod(): number {
        return FillMethod.None;
    }

    public set fillMethod(value: number) {

    }

    public get fillOrigin(): number {
        return 0;
    }

    public set fillOrigin(value: number) {
    }

    public get fillClockwise(): boolean {
        return true;
    }

    public set fillClockwise(value: boolean) {
    }

    public get fillAmount(): number {
        return 0;
    }

    public set fillAmount(value: number) {
    }

    protected updateFilters(): void {
        let filter = "";
        if (this._grayed)
            filter += "grayscale(100%)";

        if (this._color != 0xFFFFFF) {
            let mr = ((this._color & 0xFF0000) >> 16) / 0xFF;
            let mg = ((this._color & 0x00FF00) >> 8) / 0xFF;
            let mb = (this._color & 0x0000FF) / 0xFF;
            filter += " url('data:image/svg+xml,\
            <svg xmlns=\"http://www.w3.org/2000/svg\">\
              <filter id=\"color\">\
              <feColorMatrix type=\"matrix\" values=\"\
                " + mr + " 0 0 0 0\
                0 " + mg + " 0 0 0\
                0 0 " + mb + " 0 0 \
                0 0 0 1 0\" />\
              </filter>\
            </svg>#color')";
        }

        this.style.filter = filter;
    }

    protected refresh(): void {
        if (this._timerID_1 != 0)
            return;
        this._timerID_1 = window.requestAnimationFrame(() => {
            this._timerID_1 = 0;

            if (!this._src) {
                this.style.backgroundImage = "none";
                return;
            }

            if (this._scaleByTile) {
                this.style.backgroundImage = "url('" + this._src + "')";
                if (this._textureScale.x != 1 || this._textureScale.y != 1)
                    this.style.backgroundSize = this._textureScale.x + "px " + this._textureScale.y + "px";
                else
                    this.style.backgroundSize = "auto";
                this.style.backgroundRepeat = "repeat";
            }
            else if (this._scale9Grid) {
                this.style.boxSizing = "border-box";
                this.style.backgroundImage = "none";
                this.style.borderImage = "url('" + this._src + "')";

                if (this._textureScale.x != 1 || this._textureScale.y != 1)
                    this.style.borderImageWidth = Math.floor(this._scale9Grid.top / this._textureScale.y) + "px " + Math.floor(this._scale9Grid.right / this._textureScale.x) + "px " + Math.floor(this._scale9Grid.bottom / this._textureScale.y) + "px " + Math.floor(this._scale9Grid.left / this._textureScale.x) + "px"
                else
                    this.style.borderImageWidth = "auto";
                this.style.borderImageSlice = this._scale9Grid.top + " " + this._scale9Grid.right + " " + this._scale9Grid.bottom + " " + this._scale9Grid.left + " fill";

                if ((this._tileGridIndice & 0xF) != 0)
                    this.style.borderImageRepeat = "repeat";
                else
                    this.style.borderImageRepeat = "";
            }
            else {
                this.style.backgroundImage = "url('" + this._src + "')";
                this.style.backgroundSize = "100% 100%";
                this.style.backgroundRepeat = "no-repeat";
            }
        });
    }
}