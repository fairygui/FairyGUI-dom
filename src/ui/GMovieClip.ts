import { MovieClip } from "../core/MovieClip";
import { GObject } from "./GObject";
import { ObjectPropID } from "./FieldTypes";
import { PackageItem } from "./PackageItem";
import { ByteBuffer } from "../utils/ByteBuffer";
import { UIElement } from "../core/UIElement";

export class GMovieClip extends GObject {
    protected _element: UIElement & MovieClip;

    constructor() {
        super();
    }

    public get color(): number {
        return this._element.color;
    }

    public set color(value: number) {
        this._element.color = value;
    }

    protected createElement(): void {
        this._element = createUIElement("fgui-movieclip", this);
        this._element.setNotInteractable();
    }

    public get playing(): boolean {
        return this._element.playing;
    }

    public set playing(value: boolean) {
        if (this._element.playing != value) {
            this._element.playing = value;
            this.updateGear(5);
        }
    }

    public get frame(): number {
        return this._element.frame;
    }

    public set frame(value: number) {
        if (this._element.frame != value) {
            this._element.frame = value;
            this.updateGear(5);
        }
    }

    public get timeScale(): number {
        return this._element.timeScale;
    }

    public set timeScale(value: number) {
        this._element.timeScale = value;
    }

    public rewind(): void {
        this._element.rewind();
    }

    public syncStatus(anotherMc: GMovieClip): void {
        this._element.syncStatus(anotherMc._element);
    }

    public advance(timeInMiniseconds: number): void {
        this._element.advance(timeInMiniseconds);
    }

    //从start帧开始，播放到end帧（-1表示结尾），重复times次（0表示无限循环），循环结束后，停止在endAt帧（-1表示参数end）
    public setPlaySettings(start?: number, end?: number, times?: number, endAt?: number): void {
        this._element.setPlaySettings(start, end, times, endAt);
    }

    public getProp(index: number): any {
        switch (index) {
            case ObjectPropID.Color:
                return this.color;
            case ObjectPropID.Playing:
                return this.playing;
            case ObjectPropID.Frame:
                return this.frame;
            case ObjectPropID.TimeScale:
                return this.timeScale;
            default:
                return super.getProp(index);
        }
    }

    public setProp(index: number, value: any): void {
        switch (index) {
            case ObjectPropID.Color:
                this.color = value;
                break;
            case ObjectPropID.Playing:
                this.playing = value;
                break;
            case ObjectPropID.Frame:
                this.frame = value;
                break;
            case ObjectPropID.TimeScale:
                this.timeScale = value;
                break;
            case ObjectPropID.DeltaTime:
                this.advance(value);
                break;
            default:
                super.setProp(index, value);
                break;
        }
    }

    public constructFromResource(): void {
        var displayItem: PackageItem = this.packageItem.getBranch();

        this.sourceWidth = displayItem.width;
        this.sourceHeight = displayItem.height;
        this.initWidth = this.sourceWidth;
        this.initHeight = this.sourceHeight;

        this.setSize(this.sourceWidth, this.sourceHeight);

        displayItem = displayItem.getHighResolution();

        this._element.interval = displayItem.interval;
        this._element.swing = displayItem.swing;
        this._element.repeatDelay = displayItem.repeatDelay;
        this._element.frames = displayItem.frames;
    }

    public setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void {
        super.setup_beforeAdd(buffer, beginPos);

        buffer.seek(beginPos, 5);

        if (buffer.readBool())
            this.color = buffer.readColor();
        this._element.flip = buffer.readByte(); //flip
        this._element.frame = buffer.readInt();
        this._element.playing = buffer.readBool();
    }
}
