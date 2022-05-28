import { UIElement } from "../core/UIElement";
import { Event } from "../event/Event";
import { EventDispatcher } from "../event/EventDispatcher";
import { GearAnimation } from "../gears/GearAnimation";
import { GearBase } from "../gears/GearBase";
import { GearColor } from "../gears/GearColor";
import { GearDisplay } from "../gears/GearDisplay";
import { GearDisplay2 } from "../gears/GearDisplay2";
import { GearFontSize } from "../gears/GearFontSize";
import { GearIcon } from "../gears/GearIcon";
import { GearLook } from "../gears/GearLook";
import { GearSize } from "../gears/GearSize";
import { GearText } from "../gears/GearText";
import { GearXY } from "../gears/GearXY";
import { Rect } from "../math/Rect";
import { Vec2 } from "../math/Vec2";
import { ByteBuffer } from "../utils/ByteBuffer";
import { Timers } from "../utils/Timers";
import { Controller } from "./Controller";
import { ObjectPropID, RelationType } from "./FieldTypes";
import { GComponent } from "./GComponent";
import { GGroup } from "./GGroup";
import { GTreeNode } from "./GTreeNode";
import { PackageItem } from "./PackageItem";
import { Relations } from "./Relations";
import { UIConfig } from "./UIConfig";

export class GObject extends EventDispatcher {
    public data?: any;
    public packageItem?: PackageItem;
    public static draggingObject: GObject;

    private _x: number = 0;
    private _y: number = 0;
    private _z: number = 0;
    private _alpha: number = 1;
    private _visible: boolean = true;
    private _touchable: boolean = true;
    private _grayed: boolean;
    private _draggable: boolean;
    private _scaleX: number = 1;
    private _scaleY: number = 1;
    private _skewX: number = 0;
    private _skewY: number = 0;
    private _pivotX: number = 0;
    private _pivotY: number = 0;
    private _pivotAsAnchor: boolean;
    private _sortingOrder: number = 0;
    private _internalVisible: boolean = true;
    private _handlingController?: boolean;
    private _tooltips: string;

    private _relations: Relations;
    private _group: GGroup;
    private _gears: GearBase[];
    private _dragBounds: Rect;

    protected _element: UIElement;

    public minWidth: number = 0;
    public minHeight: number = 0;
    public maxWidth: number = 0;
    public maxHeight: number = 0;
    public sourceWidth: number = 0;
    public sourceHeight: number = 0;
    public initWidth: number = 0;
    public initHeight: number = 0;

    /** @internal */
    public _parent: GComponent;
    /** @internal */
    public _width: number = 0;
    /** @internal */
    public _height: number = 0;
    /** @internal */
    public _rawWidth: number = 0;
    /** @internal */
    public _rawHeight: number = 0;
    /** @internal */
    public _id: string;
    /** @internal */
    public _name: string;
    /** @internal */
    public _underConstruct: boolean;
    /** @internal */
    public _gearLocked: boolean;
    /** @internal */
    public _sizePercentInGroup: number = 0;
    /** @internal */
    public _treeNode?: GTreeNode;

    constructor() {
        super();

        this._id = "" + gInstanceCounter++;
        this._name = "";

        this.createElement();
        this._element.$owner = this;

        this._relations = new Relations(this);
        this._gears = new Array<GearBase>(10);
    }

    public get id(): string {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get x(): number {
        return this._x;
    }

    public set x(value: number) {
        this.setPosition(value, this._y);
    }

    public get y(): number {
        return this._y;
    }

    public set y(value: number) {
        this.setPosition(this._x, value);
    }

    public get z(): number {
        return this._z;
    }

    public set z(value: number) {
        this.setPosition(this._x, this._y, value);
    }

    public setPosition(xv: number, yv: number, zv?: number): void {
        if (this._x != xv || this._y != yv) {
            var dx: number = xv - this._x;
            var dy: number = yv - this._y;
            this._x = xv;
            this._y = yv;
            if (zv != null)
                this._z = zv;

            this.handlePositionChanged();
            if (this instanceof GGroup)
                this.moveChildren(dx, dy);

            this.updateGear(1);

            if (this._parent && !("setVirtual" in this._parent)/*not list*/) {
                this._parent.setBoundsChangedFlag();
                if (this._group)
                    this._group.setBoundsChangedFlag(true);
                this.emit("pos_changed");
            }
        }
    }

    public get xMin(): number {
        return this._pivotAsAnchor ? (this._x - this._width * this._pivotX) : this._x;
    }

    public set xMin(value: number) {
        if (this._pivotAsAnchor)
            this.setPosition(value + this._width * this._pivotX, this._y);
        else
            this.setPosition(value, this._y);
    }

    public get yMin(): number {
        return this._pivotAsAnchor ? (this._y - this._height * this._pivotY) : this._y;
    }

    public set yMin(value: number) {
        if (this._pivotAsAnchor)
            this.setPosition(this._x, value + this._height * this._pivotY);
        else
            this.setPosition(this._x, value);
    }

    public center(restraint?: boolean): void {
        var r: GComponent;
        if (this._parent)
            r = this.parent;
        else
            r = <GComponent>GRoot.getInst(this);

        this.setPosition(Math.floor((r.width - this.width) / 2), Math.floor((r.height - this.height) / 2));
        if (restraint) {
            this.addRelation(r, RelationType.Center_Center);
            this.addRelation(r, RelationType.Middle_Middle);
        }
    }

    public get width(): number {
        return this._width;
    }

    public set width(value: number) {
        this.setSize(value, this._rawHeight);
    }

    public get height(): number {
        return this._height;
    }

    public set height(value: number) {
        this.setSize(this._rawWidth, value);
    }

    public setSize(wv: number, hv: number, ignorePivot?: boolean): void {
        if (this._rawWidth != wv || this._rawHeight != hv) {
            this._rawWidth = wv;
            this._rawHeight = hv;
            if (wv < this.minWidth)
                wv = this.minWidth;
            if (hv < this.minHeight)
                hv = this.minHeight;
            if (this.maxWidth > 0 && wv > this.maxWidth)
                wv = this.maxWidth;
            if (this.maxHeight > 0 && hv > this.maxHeight)
                hv = this.maxHeight;
            var dWidth: number = wv - this._width;
            var dHeight: number = hv - this._height;
            this._width = wv;
            this._height = hv;

            this.handleSizeChanged();
            if (this._pivotX != 0 || this._pivotY != 0) {
                if (!this._pivotAsAnchor) {
                    if (!ignorePivot)
                        this.setPosition(this.x - this._pivotX * dWidth, this.y - this._pivotY * dHeight);
                    else
                        this.handlePositionChanged();
                }
                else
                    this.handlePositionChanged();
            }

            if (this instanceof GGroup)
                this.resizeChildren(dWidth, dHeight);

            this.updateGear(2);

            if (this._parent) {
                this._relations.onOwnerSizeChanged(dWidth, dHeight, this._pivotAsAnchor || !ignorePivot);
                this._parent.setBoundsChangedFlag();
                if (this._group)
                    this._group.setBoundsChangedFlag();
            }

            this.emit("size_changed");
        }
    }

    protected setSizeDirectly(wv: number, hv: number) {
        this._rawWidth = wv;
        this._rawHeight = hv;
        if (wv < 0)
            wv = 0;
        if (hv < 0)
            hv = 0;
        this._width = wv;
        this._height = hv;
    }

    public makeFullScreen(): void {
        let groot = GRoot.getInst(this);
        this.setSize(groot.width, groot.height);
    }

    public get actualWidth(): number {
        return this.width * Math.abs(this._scaleX);
    }

    public get actualHeight(): number {
        return this.height * Math.abs(this._scaleY);
    }

    public get scaleX(): number {
        return this._scaleX;
    }

    public set scaleX(value: number) {
        this.setScale(value, this._scaleY);
    }

    public get scaleY(): number {
        return this._scaleY;
    }

    public set scaleY(value: number) {
        this.setScale(this._scaleX, value);
    }

    public setScale(sx: number, sy: number): void {
        if (this._scaleX != sx || this._scaleY != sy) {
            this._scaleX = sx;
            this._scaleY = sy;
            this.handleScaleChanged();

            this.updateGear(2);
        }
    }

    public get skewX(): number {
        return this._skewX;
    }

    public set skewX(value: number) {
        this.setSkew(value, this._skewY);
    }

    public get skewY(): number {
        return this._skewY;
    }

    public set skewY(value: number) {
        this.setSkew(this._skewX, value);
    }

    public setSkew(sx: number, sy: number): void {
        if (this._skewX != sx || this._skewY != sy) {
            this._skewX = sx;
            this._skewY = sy;
            //todo skew
        }
    }

    public get pivotX(): number {
        return this._pivotX;
    }

    public set pivotX(value: number) {
        this.setPivot(value, this._pivotY);
    }

    public get pivotY(): number {
        return this._pivotY;
    }

    public set pivotY(value: number) {
        this.setPivot(this._pivotX, value);
    }

    public setPivot(xv: number, yv: number, asAnchor?: boolean): void {
        asAnchor = asAnchor || false;
        if (this._pivotX != xv || this._pivotY != yv || this._pivotAsAnchor != asAnchor) {
            this._pivotX = xv;
            this._pivotY = yv;
            this._pivotAsAnchor = asAnchor;
            this._element.setPivot(xv, yv);
            this.handlePositionChanged();
        }
    }

    public get pivotAsAnchor(): boolean {
        return this._pivotAsAnchor;
    }

    public get touchable(): boolean {
        return this._touchable;
    }

    public set touchable(value: boolean) {
        if (this._touchable != value) {
            this._touchable = value;
            this.handleTouchableChanged();
            this.updateGear(3);
        }
    }

    public get grayed(): boolean {
        return this._grayed;
    }

    public set grayed(value: boolean) {
        if (this._grayed != value) {
            this._grayed = value;
            this.handleGrayedChanged();
            this.updateGear(3);
        }
    }

    public get enabled(): boolean {
        return !this._grayed && this._touchable;
    }

    public set enabled(value: boolean) {
        this.grayed = !value;
        this.touchable = value;
    }

    public get rotation(): number {
        return this._element.rotation;
    }

    public set rotation(value: number) {
        if (this._element.rotation != value) {
            this._element.rotation = value;
            this.updateGear(3);
        }
    }

    public get alpha(): number {
        return this._alpha;
    }

    public set alpha(value: number) {
        if (this._alpha != value) {
            this._alpha = value;
            this.handleAlphaChanged();
            this.updateGear(3);
        }
    }

    public get visible(): boolean {
        return this._visible;
    }

    public set visible(value: boolean) {
        if (this._visible != value) {
            this._visible = value;
            this.handleVisibleChanged();
            if (this._parent)
                this._parent.setBoundsChangedFlag();
            if (this._group && this._group.excludeInvisibles)
                this._group.setBoundsChangedFlag();
        }
    }

    public get internalVisible(): boolean {
        return this._internalVisible && (!this._group || this._group.internalVisible);
    }

    public get internalVisible2(): boolean {
        return this._visible && (!this._group || this._group.internalVisible2);
    }

    public get internalVisible3(): boolean {
        return this._internalVisible && this._visible;
    }

    public get sortingOrder(): number {
        return this._sortingOrder;
    }

    public set sortingOrder(value: number) {
        if (value < 0)
            value = 0;
        if (this._sortingOrder != value) {
            var old: number = this._sortingOrder;
            this._sortingOrder = value;
            if (this._parent)
                this._parent.childSortingOrderChanged(this, old, this._sortingOrder);
        }
    }

    public get tooltips(): string {
        return this._tooltips;
    }

    public set tooltips(value: string) {
        if (this._tooltips) {
            this.off("roll_over", this.__rollOver, this);
            this.off("roll_out", this.__rollOut, this);
        }

        this._tooltips = value;
        if (this._tooltips) {
            this.on("roll_over", this.__rollOver, this);
            this.on("roll_out", this.__rollOut, this);
        }
    }

    private __rollOver(): void {
        Timers.callDelay(100, this.__doShowTooltips, this);
    }

    private __doShowTooltips(): void {
        GRoot.getInst(this).showTooltips(this._tooltips);
    }

    private __rollOut(): void {
        Timers.remove(this.__doShowTooltips, this);
        GRoot.getInst(this).hideTooltips();
    }

    // public get blendMode(): Blending {
    //     return this._element.blendMode;
    // }

    // public set blendMode(value: Blending) {
    //     this._element.blendMode = value;
    // }

    public get focusable(): boolean {
        return this._element.focusable;
    }

    public set focusable(value: boolean) {
        this._element.focusable = value;
    }

    public get tabStop(): boolean {
        return this._element.tabStop;
    }

    public set tabStop(value: boolean) {
        this._element.tabStop = value;
    }

    public get focused(): boolean {
        return this._element.focused;
    }

    public requestFocus(byKey?: boolean) {
        if (this.onStage)
            this._element.stage.setFocus(this._element, byKey);
    }

    public get cursor(): string {
        return this._element.cursor;
    }

    public set cursor(value: string) {
        this._element.cursor = value;
    }

    public get onStage(): boolean {
        return this._element.onStage;
    }

    public get resourceURL(): string {
        if (this.packageItem)
            return "ui://" + this.packageItem.owner.id + this.packageItem.id;
        else
            return null;
    }

    public set group(value: GGroup) {
        if (this._group != value) {
            if (this._group)
                this._group.setBoundsChangedFlag();
            this._group = value;
            if (this._group)
                this._group.setBoundsChangedFlag();
        }
    }

    public get group(): GGroup {
        return this._group;
    }

    public getGear(index: number): GearBase {
        var gear: GearBase = this._gears[index];
        if (gear == null)
            this._gears[index] = gear = createGear(this, index);
        return gear;
    }

    protected updateGear(index: number): void {
        if (this._underConstruct || this._gearLocked)
            return;

        var gear: GearBase = this._gears[index];
        if (gear && gear.controller)
            gear.updateState();
    }

    public checkGearController(index: number, c: Controller): boolean {
        return this._gears[index] && this._gears[index].controller == c;
    }

    public updateGearFromRelations(index: number, dx: number, dy: number): void {
        if (this._gears[index])
            this._gears[index].updateFromRelations(dx, dy);
    }

    public addDisplayLock(): number {
        var gearDisplay: GearDisplay = <GearDisplay>(this._gears[0]);
        if (gearDisplay && gearDisplay.controller) {
            var ret: number = gearDisplay.addLock();
            this.checkGearDisplay();

            return ret;
        }
        else
            return 0;
    }

    public releaseDisplayLock(token: number): void {
        var gearDisplay: GearDisplay = <GearDisplay>(this._gears[0]);
        if (gearDisplay && gearDisplay.controller) {
            gearDisplay.releaseLock(token);
            this.checkGearDisplay();
        }
    }

    private checkGearDisplay(): void {
        if (this._handlingController)
            return;

        var connected: boolean = this._gears[0] == null || (<GearDisplay>(this._gears[0])).connected;
        if (this._gears[8])
            connected = (<GearDisplay2>this._gears[8]).evaluate(connected);

        if (connected != this._internalVisible) {
            this._internalVisible = connected;
            if (this._parent) {
                this._parent.childStateChanged(this);
                if (this._group && this._group.excludeInvisibles)
                    this._group.setBoundsChangedFlag();
            }
        }
    }

    public get relations(): Relations {
        return this._relations;
    }

    public addRelation(target: GObject, relationType: number, usePercent?: boolean): void {
        this._relations.add(target, relationType, usePercent);
    }

    public removeRelation(target: GObject, relationType: number): void {
        this._relations.remove(target, relationType);
    }

    public get element(): UIElement {
        return this._element;
    }

    public get parent(): GComponent {
        return this._parent;
    }

    public set parent(val: GComponent) {
        this._parent = val;
    }

    public removeFromParent(): void {
        if (this._parent)
            this._parent.removeChild(this);
    }

    public get asCom(): GComponent {
        return <GComponent><any>this;
    }

    public static cast(element: HTMLElement): GObject {
        let p: UIElement = <UIElement>element;
        while (p) {
            if (p.$owner)
                return p.$owner;

            p = <UIElement>p.parentElement;
        }

        return null;
    }

    public get text(): string {
        return null;
    }

    public set text(value: string) {
    }

    public get icon(): string {
        return null;
    }

    public set icon(value: string) {
    }

    public get treeNode(): GTreeNode {
        return this._treeNode;
    }

    public get isDisposed(): boolean {
        return this._element == null;
    }

    public dispose(): void {
        this.removeFromParent();
        this._relations.dispose();
        this._element.dispose();
        this._element = null;
        for (let i: number = 0; i < 10; i++) {
            let gear: GearBase = this._gears[i];
            if (gear)
                gear.dispose();
        }
    }

    public onClick(listener: Function, target?: any): void {
        this.on("click", listener, target);
    }

    public offClick(listener: Function, target?: any): void {
        this.off("click", listener, target);
    }

    public hasClickListener(): boolean {
        return this.hasListener("click");
    }

    public bubbleEvent(type: string, data?: any): void {
        this._element.bubbleEvent(this._element, type, data);
    }

    public get draggable(): boolean {
        return this._draggable;
    }

    public set draggable(value: boolean) {
        if (this._draggable != value) {
            this._draggable = value;
            this.initDrag();
        }
    }

    public get dragBounds(): Rect {
        return this._dragBounds;
    }

    public set dragBounds(value: Rect) {
        this._dragBounds = value;
    }

    public startDrag(pointerId?: number): void {
        if (!this._element.onStage)
            return;

        if (pointerId == null)
            pointerId = -1;

        this.dragBegin(pointerId);
    }

    public stopDrag(): void {
        this.dragEnd();
    }

    public get dragging(): boolean {
        return GObject.draggingObject == this;
    }

    public localToGlobal(ax?: number, ay?: number, result?: Vec2): Vec2 {
        ax = ax || 0;
        ay = ay || 0;

        if (this._pivotAsAnchor) {
            ax += this._pivotX * this._width;
            ay += this._pivotY * this._height;
        }

        return this._element.localToGlobal(ax, ay, result);
    }

    public globalToLocal(ax?: number, ay?: number, result?: Vec2): Vec2 {
        ax = ax || 0;
        ay = ay || 0;

        result = this._element.globalToLocal(ax, ay, result);

        if (this._pivotAsAnchor) {
            result.x -= this._pivotX * this._width;
            result.y -= this._pivotY * this._height;
        }

        return result;
    }

    public localToRoot(ax: number, ay: number, result?: Vec2): Vec2 {
        let groot = GRoot.getInst(this);
        let pt = this.localToGlobal(ax, ay, result);
        return groot.globalToLocal(pt.x, pt.y, pt);
    }

    public rootToLocal(ax: number, ay: number, result?: Vec2): Vec2 {
        let groot = GRoot.getInst(this);
        let pt = groot.localToGlobal(ax, ay, result);
        return this.globalToLocal(pt.x, pt.y, pt);
    }

    public localToGlobalRect(ax: number, ay: number, aWidth: number, aHeight: number, result?: Rect): Rect {
        if (!result)
            result = new Rect();

        this.localToGlobal(ax, ay, s_vec2);
        result.x = s_vec2.x;
        result.y = s_vec2.y;
        this.localToGlobal(ax + aWidth, ay + aHeight, s_vec2);
        result.xMax = s_vec2.x;
        result.yMax = s_vec2.y;
        return result;
    }

    public globalToLocalRect(ax: number, ay: number, aWidth: number, aHeight: number, result?: Rect): Rect {
        if (!result)
            result = new Rect();

        this.globalToLocal(ax, ay, s_vec2);
        result.x = s_vec2.x;
        result.y = s_vec2.y;
        this.globalToLocal(ax + aWidth, ay + aHeight, s_vec2);
        result.xMax = s_vec2.x;
        result.yMax = s_vec2.y;
        return result;
    }

    public transformRect(ax: number, ay: number, aWidth: number, aHeight: number, targetSpace?: GObject, result?: Rect): Rect {
        if (!result)
            result = new Rect();

        this.localToGlobal(ax, ay, s_vec2);
        targetSpace.globalToLocal(s_vec2.x, s_vec2.y, s_vec2);
        result.x = s_vec2.x;
        result.y = s_vec2.y;

        this.localToGlobal(ax + aWidth, ay + aHeight, s_vec2);
        targetSpace.globalToLocal(s_vec2.x, s_vec2.y, s_vec2);
        result.xMax = s_vec2.x;
        result.yMax = s_vec2.y;

        return result;
    }

    public handleControllerChanged(c: Controller): void {
        this._handlingController = true;
        for (var i: number = 0; i < 10; i++) {
            var gear: GearBase = this._gears[i];
            if (gear && gear.controller == c)
                gear.apply();
        }
        this._handlingController = false;

        this.checkGearDisplay();
    }

    protected createElement(): void {
        this._element = createUIElement("fgui-div", this);
    }

    protected handlePositionChanged(): void {
        var xv: number = this._x;
        var yv: number = this._y;
        if (this._pivotAsAnchor) {
            xv -= this._pivotX * this._width;
            yv -= this._pivotY * this._height;
        }

        this._element.setPosition(xv, yv);
    }

    protected handleSizeChanged(): void {
        this._element.setSize(this._width, this._height);
    }

    protected handleScaleChanged(): void {
        this._element.setScale(this._scaleX, this._scaleY);
    }

    protected handleGrayedChanged(): void {
        this._element.grayed = this._grayed;
    }

    protected handleAlphaChanged(): void {
        this._element.alpha = this._alpha;
    }

    protected handleTouchableChanged(): void {
        this._element.touchable = this._touchable;
    }

    public handleVisibleChanged(): void {
        this._element.visible = this.internalVisible2;
    }

    public getProp(index: number): any {
        switch (index) {
            case ObjectPropID.Text:
                return this.text;
            case ObjectPropID.Icon:
                return this.icon;
            case ObjectPropID.Color:
                return null;
            case ObjectPropID.OutlineColor:
                return null;
            case ObjectPropID.Playing:
                return false;
            case ObjectPropID.Frame:
                return 0;
            case ObjectPropID.DeltaTime:
                return 0;
            case ObjectPropID.TimeScale:
                return 1;
            case ObjectPropID.FontSize:
                return 0;
            case ObjectPropID.Selected:
                return false;
            default:
                return undefined;
        }
    }

    public setProp(index: number, value: any): void {
        switch (index) {
            case ObjectPropID.Text:
                this.text = value;
                break;

            case ObjectPropID.Icon:
                this.icon = value;
                break;
        }
    }

    public constructFromResource(): void {

    }

    public setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void {
        buffer.seek(beginPos, 0);
        buffer.skip(5);

        var f1: number;
        var f2: number;

        this._id = buffer.readS();
        this._name = buffer.readS();
        f1 = buffer.readInt();
        f2 = buffer.readInt();
        this.setPosition(f1, f2);

        if (buffer.readBool()) {
            this.initWidth = buffer.readInt();
            this.initHeight = buffer.readInt();
            this.setSize(this.initWidth, this.initHeight, true);
        }

        if (buffer.readBool()) {
            this.minWidth = buffer.readInt();
            this.maxWidth = buffer.readInt();
            this.minHeight = buffer.readInt();
            this.maxHeight = buffer.readInt();
        }

        if (buffer.readBool()) {
            f1 = buffer.readFloat();
            f2 = buffer.readFloat();
            this.setScale(f1, f2);
        }

        if (buffer.readBool()) {
            f1 = buffer.readFloat();
            f2 = buffer.readFloat();
            this.setSkew(f1, f2);
        }

        if (buffer.readBool()) {
            f1 = buffer.readFloat();
            f2 = buffer.readFloat();
            this.setPivot(f1, f2, buffer.readBool());
        }

        f1 = buffer.readFloat();
        if (f1 != 1)
            this.alpha = f1;

        f1 = buffer.readFloat();
        if (f1 != 0)
            this.rotation = f1;

        if (!buffer.readBool())
            this.visible = false;
        if (!buffer.readBool())
            this.touchable = false;
        if (buffer.readBool())
            this.grayed = true;
        var bm: number = buffer.readByte();
        //this.blendMode = BlendModeTranslate[bm] || NormalBlending;

        var filter: number = buffer.readByte();
        if (filter == 1) {
            //todo set filter
            // ToolSet.setColorFilter(this._element,
            //     [buffer.readFloat(), buffer.readFloat(), buffer.readFloat(), buffer.readFloat()]);
        }

        var str: string = buffer.readS();
        if (str != null)
            this.data = str;
    }

    public setup_afterAdd(buffer: ByteBuffer, beginPos: number): void {
        buffer.seek(beginPos, 1);

        var str: string = buffer.readS();
        if (str)
            this.tooltips = str;

        var groupId: number = buffer.readShort();
        if (groupId >= 0)
            this.group = <GGroup>this.parent.getChildAt(groupId);

        buffer.seek(beginPos, 2);

        var cnt: number = buffer.readShort();
        for (var i: number = 0; i < cnt; i++) {
            var nextPos: number = buffer.readShort();
            nextPos += buffer.pos;

            var gear: GearBase = this.getGear(buffer.readByte());
            gear.setup(buffer);

            buffer.pos = nextPos;
        }
    }

    //drag support
    //-------------------------------------------------------------------
    private _dragStartPos: Vec2 = new Vec2();
    private _dragTesting: boolean = false;

    private initDrag(): void {
        if (this._draggable) {
            this.on("pointer_down", this.__touchBegin, this);
            this.on("pointer_move", this.__touchMove, this);
            this.on("pointer_up", this.__touchEnd, this);
        }
        else {
            this.off("pointer_down", this.__touchBegin, this);
            this.off("pointer_move", this.__touchMove, this);
            this.off("pointer_up", this.__touchEnd, this);
        }
    }

    private dragBegin(pointerId: number): void {
        if (GObject.draggingObject) {
            let tmp = GObject.draggingObject;
            GObject.draggingObject.stopDrag();
            GObject.draggingObject = null;
            tmp.emit("drag_end");
        }

        this.on("pointer_move", this.__touchMove, this);
        this.on("pointer_up", this.__touchEnd, this);

        this._element.stage.getPointerPos(pointerId, sGlobalDragStart);
        this.localToGlobalRect(0, 0, this.width, this.height, sGlobalRect);
        this._dragTesting = false;

        GObject.draggingObject = this;
        this._element.stage.addPointerMonitor(pointerId, this);
    }

    private dragEnd(): void {
        if (GObject.draggingObject == this) {
            this._dragTesting = false;
            GObject.draggingObject = null;
        }
    }

    private __touchBegin(evt: Event): void {
        let currentFocus = GRoot.inst.focus;
        if (currentFocus && ('editable' in currentFocus) && currentFocus.editable) {
            this._dragTesting = false;
            return;
        }

        if (this._dragStartPos == null)
            this._dragStartPos = new Vec2();
        this._dragStartPos.set(evt.input.x, evt.input.y);
        this._dragTesting = true;
        evt.capturePointer();
    }

    private __touchMove(evt: Event): void {
        if (this._dragTesting && GObject.draggingObject != this) {
            let sensitivity: number;
            if (this._element.stage.touchScreen)
                sensitivity = UIConfig.touchDragSensitivity;
            else
                sensitivity = UIConfig.clickDragSensitivity;
            if (this._dragStartPos
                && Math.abs(this._dragStartPos.x - evt.input.x) < sensitivity
                && Math.abs(this._dragStartPos.y - evt.input.y) < sensitivity)
                return;

            this._dragTesting = false;
            if (!this.emit("drag_start", evt.input.pointerId))
                this.dragBegin(evt.input.pointerId);
        }

        if (GObject.draggingObject == this) {
            let xx = evt.input.x - sGlobalDragStart.x + sGlobalRect.x;
            let yy = evt.input.y - sGlobalDragStart.y + sGlobalRect.y;

            if (this._dragBounds) {
                let rect: Rect = (<GObject>GRoot.getInst(this)).localToGlobalRect(this._dragBounds.x, this._dragBounds.y,
                    this._dragBounds.width, this._dragBounds.height, s_rect);
                if (xx < rect.x)
                    xx = rect.x;
                else if (xx + sGlobalRect.width > rect.xMax) {
                    xx = rect.xMax - sGlobalRect.width;
                    if (xx < rect.x)
                        xx = rect.x;
                }

                if (yy < rect.y)
                    yy = rect.y;
                else if (yy + sGlobalRect.height > rect.yMax) {
                    yy = rect.yMax - sGlobalRect.height;
                    if (yy < rect.y)
                        yy = rect.y;
                }
            }

            let pt = this.parent.globalToLocal(xx, yy, s_vec2);
            this.setPosition(Math.round(pt.x), Math.round(pt.y));

            this.emit("drag_move");
        }
    }

    private __touchEnd(): void {
        if (GObject.draggingObject == this) {
            GObject.draggingObject = null;
            this.emit("drag_end");
        }
    }
}

let GearClasses: Array<typeof GearBase> = [
    GearDisplay, GearXY, GearSize, GearLook, GearColor,
    GearAnimation, GearText, GearIcon, GearDisplay2, GearFontSize
];

function createGear(owner: GObject, index: number): GearBase {
    let ret = new (GearClasses[index])();
    ret._owner = owner;
    return ret;
}

var s_vec2: Vec2 = new Vec2();
var s_rect: Rect = new Rect();

var sGlobalDragStart: Vec2 = new Vec2();
var sGlobalRect: Rect = new Rect();

export var gInstanceCounter: number = 0;
export var constructingDepth: { n: number } = { n: 0 };