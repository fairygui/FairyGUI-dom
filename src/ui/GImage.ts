import { Image } from "../core/Image";
import { ObjectPropID } from "./FieldTypes";
import { GObject } from "./GObject";
import { PackageItem } from "./PackageItem";
import { ByteBuffer } from "../utils/ByteBuffer";
import { Vec2 } from "../math/Vec2";
import { UIElement } from "../core/UIElement";

export class GImage extends GObject {
    protected _element: UIElement & Image;
    private _contentItem: PackageItem;

    constructor() {
        super();
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

    public get flip(): number {
        return this._element.flip;
    }

    public set flip(value: number) {
        this._element.flip = value;
    }

    public get fillMethod(): number {
        return this._element.fillMethod;
    }

    public set fillMethod(value: number) {
        this._element.fillMethod = value;
    }

    public get fillOrigin(): number {
        return this._element.fillOrigin;
    }

    public set fillOrigin(value: number) {
        this._element.fillOrigin = value;
    }

    public get fillClockwise(): boolean {
        return this._element.fillClockwise;
    }

    public set fillClockwise(value: boolean) {
        this._element.fillClockwise = value;
    }

    public get fillAmount(): number {
        return this._element.fillAmount;
    }

    public set fillAmount(value: number) {
        this._element.fillAmount = value;
    }

    protected createElement(): void {
        this._element = createUIElement("fgui-img", this);
        this._element.setNotInteractable();
    }

    protected handleSizeChanged(): void {
        this._element.width = this._width;
        this._element.height = this._height;
    }

    public constructFromResource(): void {
        this._contentItem = this.packageItem.getBranch();

        this.sourceWidth = this._contentItem.width;
        this.sourceHeight = this._contentItem.height;
        this.initWidth = this.sourceWidth;
        this.initHeight = this.sourceHeight;

        this._contentItem = this._contentItem.getHighResolution();

        this._element.scale9Grid = this._contentItem.scale9Grid;
        this._element.scaleByTile = this._contentItem.scaleByTile;
        this._element.tileGridIndice = this._contentItem.tileGridIndice;
        this._element.src = this._contentItem.file;
        if (this._element.scaleByTile)
            this._element.textureScale = new Vec2(this.sourceWidth, this.sourceHeight);
        else
            this._element.textureScale = new Vec2(this._contentItem.width / this.sourceWidth, this._contentItem.height / this.sourceHeight);

        this.setSize(this.sourceWidth, this.sourceHeight);
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

        if (buffer.readBool())
            this.color = buffer.readColor();
        this.flip = buffer.readByte();
        this._element.fillMethod = buffer.readByte();
        if (this._element.fillMethod != 0) {
            this._element.fillOrigin = buffer.readByte();
            this._element.fillClockwise = buffer.readBool();
            this._element.fillAmount = buffer.readFloat();
        }
    }
}
