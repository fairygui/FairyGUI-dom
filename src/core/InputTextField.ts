import { convertToHtmlColor } from "../utils/ToolSet";
import { defaultParser } from "../utils/UBBParser";
import { UIElement } from "./UIElement";
import { TextFormat } from "./TextFormat";
import { UIConfig } from "../ui/UIConfig";

type InputElement = HTMLTextAreaElement | HTMLInputElement;

export class InputTextField extends UIElement {
    protected _promptText: string;
    protected _textFormat: TextFormat;
    protected _text: string;
    protected _singleLine: boolean;
    protected _password: boolean;

    private _input: InputElement;

    constructor() {
        super();

        this._textFormat = new TextFormat();
        this._text = "";

        this._singleLine = true;
    }

    public init() {
        super.init();

        this.createElement();

        this.$owner.on("focus_in", () => {
            this._input.focus();
        });
    }

    public get textFormat(): TextFormat {
        return this._textFormat;
    }

    public applyFormat(): void {
        let fontName: string = this._textFormat.font;
        if (!fontName)
            fontName = UIConfig.defaultFont;

        this._input.style.textAlign = this._textFormat.align;
        this._input.style.verticalAlign = this._textFormat.verticalAlign;
        this._input.style.fontSize = this._textFormat.size + "px";
        this._input.style.fontFamily = fontName;
        this._input.style.color = convertToHtmlColor(this._textFormat.color);
    }

    public get text(): string {
        this._text = this._input.value;
        return this._text;
    }

    public set text(value: string) {
        this._text = value;
        this._input.value = this._text;
    }

    public get singleLine(): boolean {
        return this._singleLine;
    }

    public set singleLine(value: boolean) {
        if (this._singleLine != value) {
            this._singleLine = value;
            this.createElement();
        }
    }

    private createElement() {
        let old: InputElement = this._input;
        if (old)
            this.removeChild(old);

        let e: InputElement;
        if (this._singleLine) {
            e = document.createElement("input");
        } else {
            e = document.createElement("textarea");
        }
        this._input = e;
        e.value = this._text;
        if (this._password && (e instanceof HTMLInputElement))
            e.type = "password";
        e.readOnly = old ? old.readOnly : false;
        e.onfocus = () => { this.stage.setFocus(this); };
        this.appendChild(this._input);
    }

    public setPromptText(value: string) {
        this._input.placeholder = defaultParser.parse(value, true);
    }

    public setMaxLength(value: number) {
        if (value > 0)
            this._input.maxLength = value;
        else
            this._input.maxLength = 524288;
    }

    public setKeyboardType(keyboardType: string) {
    }

    public setRestrict(value: string) {
    }

    public get editable(): boolean {
        return !this._input.readOnly;
    }

    public set editable(value: boolean) {
        this._input.readOnly = !value;
    }

    public get password(): boolean {
        return this._password;
    }

    public set password(value: boolean) {
        if (this._password != value) {
            this._password = value;
            if (this._input instanceof HTMLInputElement)
                this._input.type = value ? "password" : "text";
        }
    }

    public setSelection(start: number, end: number): void {
        this._input.setSelectionRange(start, end);
    }
}
