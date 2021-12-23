import { TextField } from "../core/TextField";
import { TextFormat } from "../core/TextFormat";
import { AutoSizeType, ObjectPropID } from "./FieldTypes";
import { GObject } from "./GObject";
import { UIConfig } from "./UIConfig";
import { ByteBuffer } from "../utils/ByteBuffer";
import { defaultParser } from "../utils/UBBParser";
import { XMLUtils } from "../utils/xml/XMLUtils";
import { UIElement } from "../core/UIElement";

export type TextTemplate = { [index: string]: string };

export class GTextField extends GObject {
    protected _element: TextField;
    protected _text: string;
    protected _ubbEnabled: boolean;
    protected _updatingSize: boolean;
    protected _template: TextTemplate;

    constructor() {
        super();

        let tf = this._element.textFormat;
        tf.font = UIConfig.defaultFont;
        tf.size = 12;
        tf.lineSpacing = 3;
        this._element.applyFormat();

        this._text = "";
        this._element.autoSize = AutoSizeType.Both;
    }

    protected createElement(): void {
        this._element = createUIElement("fgui-text", this);
        this._element.setNotInteractable();
    }

    public get element(): TextField {
        return this._element;
    }

    public get text(): string {
        return this._text;
    }

    public set text(value: string) {
        if (value == null)
            value = "";

        this._text = value;
        this.setText();
        this.updateSize();
        this.updateGear(6);
    }

    protected setText() {
        let str = this._text;
        if (this._template)
            str = this.parseTemplate(str);

        this._element.maxWidth = this.maxWidth;
        if (this._ubbEnabled)
            this._element.htmlText = defaultParser.parse(XMLUtils.encodeString(str));
        else
            this._element.text = str;
    }

    public get textTemplate(): TextTemplate {
        return this._template;
    }

    public set textTemplate(value: TextTemplate) {
        if (!this._template && !value)
            return;

        this._template = value;
        this.flushVars();
    }

    public setVar(name: string, value: string): GTextField {
        if (!this._template)
            this._template = {};
        this._template[name] = value;

        return this;
    }

    public flushVars(): void {
        this.setText();
        this.updateSize();
    }

    public get textFormat(): TextFormat {
        return this._element.textFormat;
    }

    public applyFormat(): void {
        this._element.applyFormat();
        if (!this._underConstruct)
            this.updateSize();
    }

    public get singleLine(): boolean {
        return this._element.singleLine;
    }

    public set singleLine(value: boolean) {
        this._element.singleLine = value;
    }

    public set ubbEnabled(value: boolean) {
        this._ubbEnabled = value;
    }

    public get ubbEnabled(): boolean {
        return this._ubbEnabled;
    }

    public get autoSize(): number {
        return this._element.autoSize;
    }

    public set autoSize(value: number) {
        this._element.autoSize = value;
    }

    public get color(): number {
        return this._element.textFormat.color;
    }

    public set color(value: number) {
        if (this._element.textFormat.color != value) {
            // if (this.grayed)
            //     this._element.color = "#AAAAAA";
            // else
            //     this._element.color = this._color;
            this._element.textFormat.color = value;
            this._element.applyFormat();

            this.updateGear(4);
        }
    }

    public get textWidth(): number {
        return this._element.textWidth;
    }

    public get selectable(): boolean {
        return this._element.selectable;
    }

    public set selectable(value: boolean) {
        this._element.selectable = value;
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

    private updateSize(): void {
        if (this._updatingSize)
            return;

        this._updatingSize = true;

        if (this._element.autoSize == AutoSizeType.Both) {
            this.setSize(this._element.width, this._element.height);
        }
        else if (this._element.autoSize == AutoSizeType.Height) {
            this.height = this._element.height;
        }

        this._updatingSize = false;
    }

    protected handleSizeChanged(): void {
        if (this._updatingSize)
            return;

        if (this._underConstruct)
            this._element.setSize(this.width, this.height);
        else if (this._element.autoSize != AutoSizeType.Both) {
            if (this._element.autoSize == AutoSizeType.Height) {
                this._element.width = this.width;//先调整宽度，让文本重排
                if (this._text != "") //文本为空时，1是本来就不需要调整， 2是为了防止改掉文本为空时的默认高度，造成关联错误
                    this.setSizeDirectly(this.width, this._element.height);
            }
            else
                this._element.setSize(this.width, this.height);
        }
    }

    // protected handleGrayedChanged(): void {
    //     super.handleGrayedChanged();

    //     if (this.grayed)
    //         this._element.color = "#AAAAAA";
    //     else
    //         this._element.color = this._color;
    // }

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
        this.ubbEnabled = buffer.readBool();
        this.autoSize = buffer.readByte();
        tf.underline = buffer.readBool();
        tf.italic = buffer.readBool();
        tf.bold = buffer.readBool();
        this.singleLine = buffer.readBool();
        if (buffer.readBool()) {
            tf.outlineColor = buffer.readColor();
            tf.outline = buffer.readFloat();
        }

        if (buffer.readBool()) //shadow
        {
            tf.shadowColor = buffer.readColor();
            let f1 = buffer.readFloat();
            let f2 = buffer.readFloat();
            tf.shadowOffset.set(f1, f2);
        }

        if (buffer.readBool())
            this._template = {};

        if (buffer.version >= 3)
            tf.strikethrough = buffer.readBool();

        this._element.applyFormat();
    }

    public setup_afterAdd(buffer: ByteBuffer, beginPos: number): void {
        super.setup_afterAdd(buffer, beginPos);

        buffer.seek(beginPos, 6);

        var str: string = buffer.readS();
        if (str != null)
            this.text = str;
    }

    protected parseTemplate(template: string): string {
        var pos1: number = 0, pos2: number, pos3: number;
        var tag: string;
        var value: string;
        var result: string = "";
        while ((pos2 = template.indexOf("{", pos1)) != -1) {
            if (pos2 > 0 && template.charCodeAt(pos2 - 1) == 92)//\
            {
                result += template.substring(pos1, pos2 - 1);
                result += "{";
                pos1 = pos2 + 1;
                continue;
            }

            result += template.substring(pos1, pos2);
            pos1 = pos2;
            pos2 = template.indexOf("}", pos1);
            if (pos2 == -1)
                break;

            if (pos2 == pos1 + 1) {
                result += template.substr(pos1, 2);
                pos1 = pos2 + 1;
                continue;
            }

            tag = template.substring(pos1 + 1, pos2);
            pos3 = tag.indexOf("=");
            if (pos3 != -1) {
                value = this._template[tag.substring(0, pos3)];
                if (value == null)
                    result += tag.substring(pos3 + 1);
                else
                    result += value;
            }
            else {
                value = this._template[tag];
                if (value != null)
                    result += value;
            }
            pos1 = pos2 + 1;
        }

        if (pos1 < template.length)
            result += template.substr(pos1);

        return result;
    }
}