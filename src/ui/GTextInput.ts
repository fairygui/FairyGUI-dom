import { ByteBuffer } from "../utils/ByteBuffer";
import { InputTextField } from "../core/InputTextField";
import { GObject } from "./GObject";
import { TextFormat } from "../core/TextFormat";
import { ObjectPropID } from "./FieldTypes";

export class GTextInput extends GObject {
    protected _element: InputTextField;

    constructor() {
        super();
    }

    protected createElement(): void {
        this._element = createUIElement("fgui-input", this);
    }

    public get element(): InputTextField {
        return this._element;
    }

    public get text(): string {
        return this._element.text;
    }

    public set text(value: string) {
        if (value == null)
            value = "";

        this._element.text = value;
        this.updateGear(6);
    }

    public get textFormat(): TextFormat {
        return this._element.textFormat;
    }

    public applyFormat(): void {
        this._element.applyFormat();
    }

    public get singleLine(): boolean {
        return this._element.singleLine;
    }

    public set singleLine(value: boolean) {
        this._element.singleLine = value;
    }

    public get color(): number {
        return this._element.textFormat.color;
    }

    public set color(value: number) {
        if (this._element.textFormat.color != value) {

            this._element.textFormat.color = value;
            this._element.applyFormat();

            this.updateGear(4);
        }
    }

    public get password(): boolean {
        return this._element.password;
    }

    public set password(value: boolean) {
        this._element.password = value;
    }

    public set editable(value: boolean) {
        this._element.editable = value;
    }

    public get editable(): boolean {
        return this._element.editable;
    }

    public setMaxLength(value: number) {
        this._element.setMaxLength(value);
    }

    public setPromptText(value: string): void {
        return this._element.setPromptText(value);
    }

    public setRestrict(value: string) {
        this._element.setRestrict(value);
    }

    public setKeyboardType(value: string) {
        this._element.setKeyboardType(value);
    }

    public setSelection(start: number, end: number): void {
        this._element.setSelection(start, end);
    }

    public getProp(index: number): any {
        switch (index) {
            case ObjectPropID.Color:
                return this.color;
            case ObjectPropID.OutlineColor:
                return this._element.textFormat.outlineColor;
            case ObjectPropID.FontSize:
                return this._element.textFormat.size;
            default:
                return super.getProp(index);
        }
    }

    public setProp(index: number, value: any): void {
        switch (index) {
            case ObjectPropID.Color:
                this.color = value;
                break;
            case ObjectPropID.OutlineColor:
                this._element.textFormat.outlineColor = value;
                this._element.applyFormat();
                break;
            case ObjectPropID.FontSize:
                this._element.textFormat.size = value;
                this._element.applyFormat();
                break;
            default:
                super.setProp(index, value);
                break;
        }
    }

    public setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void {
        super.setup_beforeAdd(buffer, beginPos);

        buffer.seek(beginPos, 5);

        let tf = this._element.textFormat;

        tf.font = buffer.readS();
        tf.size = buffer.readShort();
        tf.color = buffer.readColor();
        let c = buffer.readByte();
        tf.align = c == 0 ? "left" : (c == 1 ? "center" : "right");
        c = buffer.readByte();
        tf.verticalAlign = c == 0 ? "top" : (c == 1 ? "middle" : "bottom");
        tf.lineSpacing = buffer.readShort();
        tf.letterSpacing = buffer.readShort();
        buffer.readBool(); //ubbEnabled
        buffer.readByte(); //autoSize
        tf.underline = buffer.readBool();
        tf.italic = buffer.readBool();
        tf.bold = buffer.readBool();
        this.singleLine = buffer.readBool();
        if (buffer.readBool()) {
            tf.outlineColor = buffer.readColor();
            tf.outline = buffer.readFloat() + 1;
        }

        if (buffer.readBool()) //shadow
        {
            tf.shadowColor = buffer.readColor();
            let f1 = buffer.readFloat();
            let f2 = buffer.readFloat();
            tf.shadowOffset.set(f1, f2);
        }

        buffer.readBool(); //template

        if (buffer.version >= 3)
            tf.strikethrough = buffer.readBool();

        this._element.applyFormat();

        buffer.seek(beginPos, 4);

        var str: string = buffer.readS();
        if (str != null)
            this.setPromptText(str);

        str = buffer.readS();
        if (str != null)
            this.setRestrict(str);

        var iv: number = buffer.readInt();
        if (iv != 0)
            this.setMaxLength(iv);
        iv = buffer.readInt();
        if (iv != 0) {
            if (iv == 4)
                this.setKeyboardType("number");
            else if (iv == 3)
                this.setKeyboardType("url");
        }
        if (buffer.readBool())
            this.password = true;
    }

    public setup_afterAdd(buffer: ByteBuffer, beginPos: number): void {
        super.setup_afterAdd(buffer, beginPos);

        buffer.seek(beginPos, 6);

        var str: string = buffer.readS();
        if (str != null)
            this.text = str;
    }
}
