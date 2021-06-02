import { UIElement } from "../core/UIElement";
import { TextField } from "../core/TextField";
import { defaultParser } from "../utils/UBBParser";
import { GTextField } from "./GTextField";
import { UIConfig } from "./UIConfig";

export class GRichTextField extends GTextField {
    public linkClass: string;

    constructor() {
        super();
    }

    protected createElement(): void {
        this._element = createUIElement("fgui-text", this);
    }

    protected setText() {
        let str = this._text;
        if (this._template)
            str = this.parseTemplate(str);

        this._element.maxWidth = this.maxWidth;
        defaultParser.linkClass = this.linkClass || UIConfig.defaultLinkClass;
        if (this._ubbEnabled)
            str = defaultParser.parse(str);
        str = str.replace(/\r\n|\n/g, "<br>");
        this._element.htmlText = str;
    }
}
