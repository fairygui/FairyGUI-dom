import { AutoSizeType } from "../ui/FieldTypes";
import { UIConfig } from "../ui/UIConfig";
import { convertToHtmlColor } from "../utils/ToolSet";
import { UIElement } from "./UIElement";
import { TextFormat } from "./TextFormat";
import { Vec2 } from "../math/Vec2";

var textMeasureHelper: HTMLDivElement = document.createElement("div");
textMeasureHelper.id = "text-helper";
textMeasureHelper.style.position = "absolute";
textMeasureHelper.style.left = "-10000px";
textMeasureHelper.style.top = "-10000px";
textMeasureHelper.style.pointerEvents = "none";
textMeasureHelper.style.width = "10000px";

export class TextField extends UIElement {
    protected _textFormat: TextFormat;
    protected _text: string;
    protected _autoSize: AutoSizeType;
    protected _singleLine: boolean;
    protected _html: boolean;
    protected _maxWidth: number;
    protected _updatingSize: boolean;
    protected _span: HTMLSpanElement;
    protected _textSize: Vec2;

    constructor() {
        super();

        this._textFormat = new TextFormat();
        this._text = "";
        this._textSize = new Vec2();
    }

    public init() {
        super.init();

        this._span = document.createElement("span");
        this._span.style.position = "absolute";
        this._span.style.padding = "2px";
        this._span.style.boxSizing = "border-box";
        this.appendChild(this._span);
    }

    public get textFormat(): TextFormat {
        return this._textFormat;
    }

    public applyFormat(): void {
        let fontName: string = this._textFormat.font;
        if (!fontName)
            fontName = UIConfig.defaultFont;

        this._span.style.fontSize = this._textFormat.size + "px";
        if (fontName)
            this._span.style.fontFamily = fontName;
        else
            this._span.style.fontFamily = "";
        this._span.style.lineHeight = (this._textFormat.size + this._textFormat.lineSpacing) + "px";
        this._span.style.color = convertToHtmlColor(this._textFormat.color);
        this._span.style.fontWeight = this._textFormat.bold ? "bold" : "";
        this._span.style.fontStyle = this._textFormat.italic ? "italic" : "";
        this._span.style.textDecoration = this._textFormat.underline ? "underline" : "";
        if (this._textFormat.outline > 0)
            this._span.style.webkitTextStroke = this._textFormat.outline + "px " + convertToHtmlColor(this._textFormat.outlineColor);
        else if (this._span.style.webkitTextStroke)
            this._span.style.webkitTextStroke = "unset";
        this._span.style.textAlign = this._textFormat.align;
    }

    public get text(): string {
        return this._text;
    }

    public set text(value: string) {
        if (this._text.length < 20 && this._text == value && !this._html)
            return;

        this._text = value;
        this._html = false;
        this.applyText();
    }

    public get htmlText(): string {
        return this._text;
    }

    public set htmlText(value: string) {
        if (this._text.length < 20 && this._text == value && this._html)
            return;

        this._text = value;
        this._html = true;
        this.applyText();
    }

    private applyText(): void {
        this._updatingSize = true;

        if (this._autoSize == AutoSizeType.Both)
            this._span.style.width = "";

        if (this._html)
            this._span.innerHTML = this._text;
        else
            this._span.innerText = this._text;

        if (!this.isConnected) {
            if (!textMeasureHelper.parentElement)
                document.body.appendChild(textMeasureHelper);
            textMeasureHelper.appendChild(this._span);
        }

        this._textSize.set(this._span.clientWidth, this._span.clientHeight);
        if (this._autoSize == AutoSizeType.Both) {
            this._contentRect.width = this._textSize.x;
            this._contentRect.height = this._textSize.y;
            if (this.$owner)
                this.$owner.setSize(this._textSize.x, this._textSize.y);
        }
        else if (this._autoSize == AutoSizeType.Height) {
            this._contentRect.height = this._textSize.y;
            if (this.$owner)
                this.$owner.height = this._textSize.y;
        }

        if (!this.isConnected)
            this.appendChild(this._span);

        this._span.style.width = this._contentRect.width + "px";

        if (this._textFormat.verticalAlign == "top")
            this._span.style.top = "0px";
        else if (this._textFormat.verticalAlign == "middle")
            this._span.style.top = Math.max(0, Math.floor((this._contentRect.height - this._textSize.y) * 0.5)) + "px";
        else
            this._span.style.top = Math.max(0, this._contentRect.height - this._textSize.y) + "px";

        this._updatingSize = false;
    }

    public get autoSize(): AutoSizeType {
        return this._autoSize;
    }

    public set autoSize(value: AutoSizeType) {
        if (this._autoSize != value) {
            this._autoSize = value;

            if (this._singleLine || this._autoSize == AutoSizeType.Both)
                this._span.style.whiteSpace = "nowrap";
            else
                this._span.style.whiteSpace = "";

            if (this._autoSize == AutoSizeType.Both) {
                this._span.style.width = "";
                this._span.style.overflow = "";
            }
            else if (this._autoSize == AutoSizeType.Height) {
                this._span.style.overflow = "";
            }
            else
                this._span.style.overflow = "hidden";

            if (this._autoSize == AutoSizeType.Ellipsis)
                this._span.style.textOverflow = "ellipsis";
            else
                this._span.style.textOverflow = "";
        }
    }

    public get singleLine(): boolean {
        return this._singleLine;
    }

    public set singleLine(value: boolean) {
        if (this._singleLine != value) {
            this._singleLine = value;

            if (this._singleLine || this._autoSize == AutoSizeType.Both)
                this._span.style.whiteSpace = "nowrap";
            else
                this._span.style.whiteSpace = "";
        }
    }

    public get maxWidth(): number {
        return this._maxWidth;
    }

    public set maxWidth(value: number) {
        if (this._maxWidth != value) {
            this._maxWidth = value;

            if (this._maxWidth > 0)
                this._span.style.maxWidth = this._maxWidth + "px";
            else if (this._autoSize != AutoSizeType.Both)
                this._span.style.maxWidth = this._contentRect.width + "px";
            else if (this._span.style.maxWidth)
                this._span.style.maxWidth = "";
        }
    }

    public get textWidth(): number {
        return this._textSize.x;
    }

    protected onSizeChanged() {
        super.onSizeChanged();

        if (!this._updatingSize) {
            if (this._autoSize != AutoSizeType.Both) {
                this._span.style.maxWidth = this._contentRect.width + "px";
                this._span.style.width = this._contentRect.width + "px";
            }
        }
    }
}