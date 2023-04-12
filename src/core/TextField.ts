import { AutoSizeType } from "../ui/FieldTypes";
import { convertToHtmlColor } from "../utils/ToolSet";
import { UIElement } from "./UIElement";
import { TextFormat } from "./TextFormat";
import { Vec2 } from "../math/Vec2";

var textMeasureHelper: HTMLDivElement = document.createElement("div");
textMeasureHelper.id = "fgui-text-helper";
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
    protected _maxWidth: number = 0;
    protected _updatingSize: boolean;
    protected _span: HTMLSpanElement;
    protected _textSize: Vec2;
    protected _selectable: boolean;

    constructor() {
        super();

        this._textFormat = new TextFormat();
        this._text = "";
        this._textSize = new Vec2();
    }

    public init() {
        super.init();

        this._span = document.createElement("span");
        this._span.className = "fgui-text";
        this.appendChild(this._span);
    }

    public get textFormat(): TextFormat {
        return this._textFormat;
    }

    public applyFormat(): void {
        this._span.style.fontSize = this._textFormat.size + "px";
        this._span.style.fontFamily = this._textFormat.font;
        this._span.style.lineHeight = (this._textFormat.size + this._textFormat.lineSpacing) + "px";
        this._span.style.color = convertToHtmlColor(this._textFormat.color);
        this._span.style.fontWeight = this._textFormat.bold ? "bold" : "";
        this._span.style.fontStyle = this._textFormat.italic ? "italic" : "";
        let str = this._textFormat.underline ? "underline" : "";
        if (this._textFormat.strikethrough) {
            if (str.length > 0) str += " ";
            str += "line-through";
        }
        this._span.style.textDecoration = str;
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

        let tmpChangWrapping: boolean;
        if (this._autoSize == AutoSizeType.Both) {
            this._span.style.width = "";

            if (this._maxWidth > 0) {
                this.updateWrapping();
                tmpChangWrapping = true;
            }
        }

        if (this._html)
            this._span.innerHTML = this._text;
        else
            this._span.innerText = this._text;

        let usingHelper: boolean;
        if (!this.isConnected || (this._text.length > 0 && this._span.clientWidth == 0)) {
            usingHelper = true;
            if (!textMeasureHelper.parentElement)
                document.body.appendChild(textMeasureHelper);
            textMeasureHelper.appendChild(this._span);
        }

        if (tmpChangWrapping && this._span.clientWidth > this._maxWidth) {
            this._span.style.width = this._maxWidth + "px";
            this.updateWrapping(true);
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

        if (usingHelper)
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
            this.updateWrapping();

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
            this.updateWrapping();
        }
    }

    public get maxWidth(): number {
        return this._maxWidth;
    }

    public set maxWidth(value: number) {
        this._maxWidth = value;
    }

    public get selectable(): boolean {
        return this._selectable;
    }

    public set selectable(value: boolean) {
        if (this._selectable != value) {
            this._selectable = value;

            if (value)
                this._span.classList.add("selectable");
            else
                this._span.classList.remove("selectable");
        }
    }

    public get textWidth(): number {
        return this._textSize.x;
    }

    protected onSizeChanged() {
        super.onSizeChanged();

        if (!this._updatingSize) {
            if (this._autoSize != AutoSizeType.Both) {
                this._span.style.width = this._contentRect.width + "px";
            }
        }
    }

    private updateWrapping(forceWrap?: boolean) {
        if ((this._autoSize == AutoSizeType.Both || this._singleLine) && !forceWrap) {
            this._span.style.whiteSpace = "pre";
            this._span.style.wordBreak = "normal";
        }
        else {
            this._span.style.whiteSpace = "pre-wrap";
            this._span.style.wordBreak = "break-word";
        }
    }
}