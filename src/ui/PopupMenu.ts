import { Event } from "../event/Event";
import { Controller } from "./Controller";
import { PopupDirection, RelationType } from "./FieldTypes";
import { GButton } from "./GButton";
import { GComponent } from "./GComponent";
import { GList } from "./GList";
import { GObject } from "./GObject";
import { GRoot } from "./GRoot";
import { GTextField } from "./GTextField";
import { UIConfig } from "./UIConfig";
import { UIPackage } from "./UIPackage";

const EVENT_TYPE = "PopupMenuItemClick";

export class PopupMenu {

    public visibleItemCount: number = 0;
    public hideOnClickItem: boolean = true;
    public autoSize: boolean = false;

    protected _contentPane: GComponent;
    protected _list: GList;

    constructor(resourceURL?: string) {
        if (!resourceURL) {
            resourceURL = UIConfig.popupMenu;
            if (!resourceURL)
                throw "UIConfig.popupMenu not defined";
        }
        this._contentPane = <GComponent>UIPackage.createObjectFromURL(resourceURL);
        this._contentPane.on("added_to_stage", this.__addedToStage, this);
        this._list = <GList>(this._contentPane.getChild("list"));
        this._list.removeChildrenToPool();
        this._list.addRelation(this._contentPane, RelationType.Width);
        this._list.removeRelation(this._contentPane, RelationType.Height);
        this._contentPane.addRelation(this._list, RelationType.Height);
        this._list.on("click_item", this.__clickItem, this);
    }

    public dispose(): void {
        this._contentPane.dispose();
    }

    public addItem(caption: string, handler?: Function): GButton {
        var item: GButton = this.createItem(caption, handler);
        this._list.addChild(item);

        return item;
    }

    public addItemAt(caption: string, index: number, handler?: Function): GButton {
        var item: GButton = this.createItem(caption, handler);
        this._list.addChildAt(item, index);

        return item;
    }

    private createItem(caption: string, handler?: Function): GButton {
        var item: GButton = <GButton>this._list.getFromPool();
        item.title = caption;
        item.data = handler;
        item.grayed = false;
        var c: Controller = item.getController("checked");
        if (c)
            c.selectedIndex = 0;
        item.on(EVENT_TYPE, handler);
        return item;
    }

    public addSeperator(index?: number): void {
        if (UIConfig.popupMenu_seperator == null)
            throw "UIConfig.popupMenu_seperator not defined";

        if (index == undefined || index == -1)
            this._list.addItemFromPool(UIConfig.popupMenu_seperator);
        else {
            let item = this._list.getFromPool(UIConfig.popupMenu_seperator);
            this._list.addChildAt(item, index);
        }
    }

    public getItemName(index: number): string {
        var item: GObject = this._list.getChildAt(index);
        return item.name;
    }

    public setItemText(name: string, caption: string): void {
        var item: GButton = <GButton>this._list.getChild(name);
        item.title = caption;
    }

    public setItemVisible(name: string, visible: boolean): void {
        var item: GButton = <GButton>this._list.getChild(name);
        if (item.visible != visible) {
            item.visible = visible;
            this._list.setBoundsChangedFlag();
        }
    }

    public setItemGrayed(name: string, grayed: boolean): void {
        var item: GButton = <GButton>this._list.getChild(name);
        item.grayed = grayed;
    }

    public setItemCheckable(name: string, checkable: boolean): void {
        var item: GButton = <GButton>this._list.getChild(name);
        var c: Controller = item.getController("checked");
        if (c) {
            if (checkable) {
                if (c.selectedIndex == 0)
                    c.selectedIndex = 1;
            }
            else
                c.selectedIndex = 0;
        }
    }

    public setItemChecked(name: string, checked: boolean): void {
        var item: GButton = <GButton>this._list.getChild(name);
        var c: Controller = item.getController("checked");
        if (c)
            c.selectedIndex = checked ? 2 : 1;
    }

    public isItemChecked(name: string): boolean {
        var item: GButton = <GButton>this._list.getChild(name);
        var c: Controller = item.getController("checked");
        if (c)
            return c.selectedIndex == 2;
        else
            return false;
    }

    public removeItem(name: string): boolean {
        var item: GButton = <GButton>this._list.getChild(name);
        if (item) {
            var index: number = this._list.getChildIndex(item);
            this._list.removeChildToPoolAt(index);
            return true;
        }
        else
            return false;
    }

    public clearItems(): void {
        this._list.removeChildrenToPool();
    }

    public get itemCount(): number {
        return this._list.numChildren;
    }

    public get contentPane(): GComponent {
        return this._contentPane;
    }

    public get list(): GList {
        return this._list;
    }

    public show(target?: GObject, dir?: PopupDirection, parentMenu?: PopupMenu): void {
        let groot = (target instanceof GRoot) ? target : (target ? GRoot.getInst(target) : GRoot.inst);
        groot.showPopup(this._contentPane, (target instanceof GRoot) ? null : target, dir);
    }

    public hide() {
        if (this._contentPane.parent)
            GRoot.getInst(this._contentPane).hidePopup(this._contentPane);
    }

    private __clickItem(evt: Event): void {
        let item = evt.data;
        if (!(item instanceof GButton))
            return;

        if (item.grayed) {
            this._list.selectedIndex = -1;
            return;
        }

        var c: Controller = item.getController("checked");
        if (c && c.selectedIndex != 0) {
            if (c.selectedIndex == 1)
                c.selectedIndex = 2;
            else
                c.selectedIndex = 1;
        }

        if (this.hideOnClickItem)
            this.hide();

        item.emit(EVENT_TYPE, item);
    }

    private __addedToStage(): void {
        if (this.autoSize) {
            this._list.ensureBoundsCorrect();
            let cnt = this._list.numChildren;
            let maxDelta = -1000;
            for (let i = 0; i < cnt; i++) {
                let obj = this._list.getChildAt(i);
                if (!(obj instanceof GButton))
                    continue;
                let tf = obj.getTextField();
                if (tf instanceof GTextField) {
                    let v = tf.textWidth - tf.width;
                    if (v > maxDelta)
                        maxDelta = v;
                }
            }

            if (this._contentPane.width + maxDelta > this._contentPane.initWidth)
                this._contentPane.width += maxDelta;
            else
                this._contentPane.width = this._contentPane.initWidth;
        }

        this._list.selectedIndex = -1;
        this._list.resizeToFit(this.visibleItemCount > 0 ? this.visibleItemCount : Number.POSITIVE_INFINITY, 10);
    }
}
