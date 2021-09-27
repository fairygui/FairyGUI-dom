var ButtonMode;
(function (ButtonMode) {
    ButtonMode[ButtonMode["Common"] = 0] = "Common";
    ButtonMode[ButtonMode["Check"] = 1] = "Check";
    ButtonMode[ButtonMode["Radio"] = 2] = "Radio";
})(ButtonMode || (ButtonMode = {}));
var AutoSizeType;
(function (AutoSizeType) {
    AutoSizeType[AutoSizeType["None"] = 0] = "None";
    AutoSizeType[AutoSizeType["Both"] = 1] = "Both";
    AutoSizeType[AutoSizeType["Height"] = 2] = "Height";
    AutoSizeType[AutoSizeType["Shrink"] = 3] = "Shrink";
    AutoSizeType[AutoSizeType["Ellipsis"] = 4] = "Ellipsis";
})(AutoSizeType || (AutoSizeType = {}));
var LoaderFillType;
(function (LoaderFillType) {
    LoaderFillType[LoaderFillType["None"] = 0] = "None";
    LoaderFillType[LoaderFillType["Scale"] = 1] = "Scale";
    LoaderFillType[LoaderFillType["ScaleMatchHeight"] = 2] = "ScaleMatchHeight";
    LoaderFillType[LoaderFillType["ScaleMatchWidth"] = 3] = "ScaleMatchWidth";
    LoaderFillType[LoaderFillType["ScaleFree"] = 4] = "ScaleFree";
    LoaderFillType[LoaderFillType["ScaleNoBorder"] = 5] = "ScaleNoBorder";
})(LoaderFillType || (LoaderFillType = {}));
var ListLayoutType;
(function (ListLayoutType) {
    ListLayoutType[ListLayoutType["SingleColumn"] = 0] = "SingleColumn";
    ListLayoutType[ListLayoutType["SingleRow"] = 1] = "SingleRow";
    ListLayoutType[ListLayoutType["FlowHorizontal"] = 2] = "FlowHorizontal";
    ListLayoutType[ListLayoutType["FlowVertical"] = 3] = "FlowVertical";
    ListLayoutType[ListLayoutType["Pagination"] = 4] = "Pagination";
})(ListLayoutType || (ListLayoutType = {}));
var ListSelectionMode;
(function (ListSelectionMode) {
    ListSelectionMode[ListSelectionMode["Single"] = 0] = "Single";
    ListSelectionMode[ListSelectionMode["Multiple"] = 1] = "Multiple";
    ListSelectionMode[ListSelectionMode["Multiple_SingleClick"] = 2] = "Multiple_SingleClick";
    ListSelectionMode[ListSelectionMode["None"] = 3] = "None";
})(ListSelectionMode || (ListSelectionMode = {}));
var OverflowType;
(function (OverflowType) {
    OverflowType[OverflowType["Visible"] = 0] = "Visible";
    OverflowType[OverflowType["Hidden"] = 1] = "Hidden";
    OverflowType[OverflowType["Scroll"] = 2] = "Scroll";
})(OverflowType || (OverflowType = {}));
var PackageItemType;
(function (PackageItemType) {
    PackageItemType[PackageItemType["Image"] = 0] = "Image";
    PackageItemType[PackageItemType["MovieClip"] = 1] = "MovieClip";
    PackageItemType[PackageItemType["Sound"] = 2] = "Sound";
    PackageItemType[PackageItemType["Component"] = 3] = "Component";
    PackageItemType[PackageItemType["Atlas"] = 4] = "Atlas";
    PackageItemType[PackageItemType["Font"] = 5] = "Font";
    PackageItemType[PackageItemType["Swf"] = 6] = "Swf";
    PackageItemType[PackageItemType["Misc"] = 7] = "Misc";
    PackageItemType[PackageItemType["Unknown"] = 8] = "Unknown";
    PackageItemType[PackageItemType["Spine"] = 9] = "Spine";
    PackageItemType[PackageItemType["DragonBones"] = 10] = "DragonBones";
})(PackageItemType || (PackageItemType = {}));
var ObjectType;
(function (ObjectType) {
    ObjectType[ObjectType["Image"] = 0] = "Image";
    ObjectType[ObjectType["MovieClip"] = 1] = "MovieClip";
    ObjectType[ObjectType["Swf"] = 2] = "Swf";
    ObjectType[ObjectType["Graph"] = 3] = "Graph";
    ObjectType[ObjectType["Loader"] = 4] = "Loader";
    ObjectType[ObjectType["Group"] = 5] = "Group";
    ObjectType[ObjectType["Text"] = 6] = "Text";
    ObjectType[ObjectType["RichText"] = 7] = "RichText";
    ObjectType[ObjectType["InputText"] = 8] = "InputText";
    ObjectType[ObjectType["Component"] = 9] = "Component";
    ObjectType[ObjectType["List"] = 10] = "List";
    ObjectType[ObjectType["Label"] = 11] = "Label";
    ObjectType[ObjectType["Button"] = 12] = "Button";
    ObjectType[ObjectType["ComboBox"] = 13] = "ComboBox";
    ObjectType[ObjectType["ProgressBar"] = 14] = "ProgressBar";
    ObjectType[ObjectType["Slider"] = 15] = "Slider";
    ObjectType[ObjectType["ScrollBar"] = 16] = "ScrollBar";
    ObjectType[ObjectType["Tree"] = 17] = "Tree";
    ObjectType[ObjectType["Loader3D"] = 18] = "Loader3D";
})(ObjectType || (ObjectType = {}));
var ProgressTitleType;
(function (ProgressTitleType) {
    ProgressTitleType[ProgressTitleType["Percent"] = 0] = "Percent";
    ProgressTitleType[ProgressTitleType["ValueAndMax"] = 1] = "ValueAndMax";
    ProgressTitleType[ProgressTitleType["Value"] = 2] = "Value";
    ProgressTitleType[ProgressTitleType["Max"] = 3] = "Max";
})(ProgressTitleType || (ProgressTitleType = {}));
var ScrollBarDisplayType;
(function (ScrollBarDisplayType) {
    ScrollBarDisplayType[ScrollBarDisplayType["Default"] = 0] = "Default";
    ScrollBarDisplayType[ScrollBarDisplayType["Visible"] = 1] = "Visible";
    ScrollBarDisplayType[ScrollBarDisplayType["Auto"] = 2] = "Auto";
    ScrollBarDisplayType[ScrollBarDisplayType["Hidden"] = 3] = "Hidden";
})(ScrollBarDisplayType || (ScrollBarDisplayType = {}));
var ScrollType;
(function (ScrollType) {
    ScrollType[ScrollType["Horizontal"] = 0] = "Horizontal";
    ScrollType[ScrollType["Vertical"] = 1] = "Vertical";
    ScrollType[ScrollType["Both"] = 2] = "Both";
})(ScrollType || (ScrollType = {}));
var FlipType;
(function (FlipType) {
    FlipType[FlipType["None"] = 0] = "None";
    FlipType[FlipType["Horizontal"] = 1] = "Horizontal";
    FlipType[FlipType["Vertical"] = 2] = "Vertical";
    FlipType[FlipType["Both"] = 3] = "Both";
})(FlipType || (FlipType = {}));
var ChildrenRenderOrder;
(function (ChildrenRenderOrder) {
    ChildrenRenderOrder[ChildrenRenderOrder["Ascent"] = 0] = "Ascent";
    ChildrenRenderOrder[ChildrenRenderOrder["Descent"] = 1] = "Descent";
    ChildrenRenderOrder[ChildrenRenderOrder["Arch"] = 2] = "Arch";
})(ChildrenRenderOrder || (ChildrenRenderOrder = {}));
var GroupLayoutType;
(function (GroupLayoutType) {
    GroupLayoutType[GroupLayoutType["None"] = 0] = "None";
    GroupLayoutType[GroupLayoutType["Horizontal"] = 1] = "Horizontal";
    GroupLayoutType[GroupLayoutType["Vertical"] = 2] = "Vertical";
})(GroupLayoutType || (GroupLayoutType = {}));
var PopupDirection;
(function (PopupDirection) {
    PopupDirection[PopupDirection["Auto"] = 0] = "Auto";
    PopupDirection[PopupDirection["Up"] = 1] = "Up";
    PopupDirection[PopupDirection["Down"] = 2] = "Down";
})(PopupDirection || (PopupDirection = {}));
var RelationType;
(function (RelationType) {
    RelationType[RelationType["Left_Left"] = 0] = "Left_Left";
    RelationType[RelationType["Left_Center"] = 1] = "Left_Center";
    RelationType[RelationType["Left_Right"] = 2] = "Left_Right";
    RelationType[RelationType["Center_Center"] = 3] = "Center_Center";
    RelationType[RelationType["Right_Left"] = 4] = "Right_Left";
    RelationType[RelationType["Right_Center"] = 5] = "Right_Center";
    RelationType[RelationType["Right_Right"] = 6] = "Right_Right";
    RelationType[RelationType["Top_Top"] = 7] = "Top_Top";
    RelationType[RelationType["Top_Middle"] = 8] = "Top_Middle";
    RelationType[RelationType["Top_Bottom"] = 9] = "Top_Bottom";
    RelationType[RelationType["Middle_Middle"] = 10] = "Middle_Middle";
    RelationType[RelationType["Bottom_Top"] = 11] = "Bottom_Top";
    RelationType[RelationType["Bottom_Middle"] = 12] = "Bottom_Middle";
    RelationType[RelationType["Bottom_Bottom"] = 13] = "Bottom_Bottom";
    RelationType[RelationType["Width"] = 14] = "Width";
    RelationType[RelationType["Height"] = 15] = "Height";
    RelationType[RelationType["LeftExt_Left"] = 16] = "LeftExt_Left";
    RelationType[RelationType["LeftExt_Right"] = 17] = "LeftExt_Right";
    RelationType[RelationType["RightExt_Left"] = 18] = "RightExt_Left";
    RelationType[RelationType["RightExt_Right"] = 19] = "RightExt_Right";
    RelationType[RelationType["TopExt_Top"] = 20] = "TopExt_Top";
    RelationType[RelationType["TopExt_Bottom"] = 21] = "TopExt_Bottom";
    RelationType[RelationType["BottomExt_Top"] = 22] = "BottomExt_Top";
    RelationType[RelationType["BottomExt_Bottom"] = 23] = "BottomExt_Bottom";
    RelationType[RelationType["Size"] = 24] = "Size";
})(RelationType || (RelationType = {}));
var FillMethod;
(function (FillMethod) {
    FillMethod[FillMethod["None"] = 0] = "None";
    FillMethod[FillMethod["Horizontal"] = 1] = "Horizontal";
    FillMethod[FillMethod["Vertical"] = 2] = "Vertical";
    FillMethod[FillMethod["Radial90"] = 3] = "Radial90";
    FillMethod[FillMethod["Radial180"] = 4] = "Radial180";
    FillMethod[FillMethod["Radial360"] = 5] = "Radial360";
})(FillMethod || (FillMethod = {}));
var FillOrigin;
(function (FillOrigin) {
    FillOrigin[FillOrigin["Top"] = 0] = "Top";
    FillOrigin[FillOrigin["Bottom"] = 1] = "Bottom";
    FillOrigin[FillOrigin["Left"] = 2] = "Left";
    FillOrigin[FillOrigin["Right"] = 3] = "Right";
    FillOrigin[FillOrigin["TopLeft"] = 0] = "TopLeft";
    FillOrigin[FillOrigin["TopRight"] = 1] = "TopRight";
    FillOrigin[FillOrigin["BottomLeft"] = 2] = "BottomLeft";
    FillOrigin[FillOrigin["BottomRight"] = 3] = "BottomRight";
})(FillOrigin || (FillOrigin = {}));
var FillOrigin90;
(function (FillOrigin90) {
    FillOrigin90[FillOrigin90["TopLeft"] = 0] = "TopLeft";
    FillOrigin90[FillOrigin90["TopRight"] = 1] = "TopRight";
    FillOrigin90[FillOrigin90["BottomLeft"] = 2] = "BottomLeft";
    FillOrigin90[FillOrigin90["BottomRight"] = 3] = "BottomRight";
})(FillOrigin90 || (FillOrigin90 = {}));
var ObjectPropID;
(function (ObjectPropID) {
    ObjectPropID[ObjectPropID["Text"] = 0] = "Text";
    ObjectPropID[ObjectPropID["Icon"] = 1] = "Icon";
    ObjectPropID[ObjectPropID["Color"] = 2] = "Color";
    ObjectPropID[ObjectPropID["OutlineColor"] = 3] = "OutlineColor";
    ObjectPropID[ObjectPropID["Playing"] = 4] = "Playing";
    ObjectPropID[ObjectPropID["Frame"] = 5] = "Frame";
    ObjectPropID[ObjectPropID["DeltaTime"] = 6] = "DeltaTime";
    ObjectPropID[ObjectPropID["TimeScale"] = 7] = "TimeScale";
    ObjectPropID[ObjectPropID["FontSize"] = 8] = "FontSize";
    ObjectPropID[ObjectPropID["Selected"] = 9] = "Selected";
})(ObjectPropID || (ObjectPropID = {}));

class Pool {
    constructor(type, init, reset) {
        this._init = init;
        this._reset = reset;
        this._ct = type;
        this.pool = [];
    }
    borrow(...argArray) {
        let ret;
        if (this.pool.length > 0)
            ret = this.pool.pop();
        else
            ret = new this._ct();
        if (this._init)
            this._init(ret, ...argArray);
        return ret;
    }
    returns(element) {
        if (Array.isArray(element)) {
            let count = element.length;
            for (let i = 0; i < count; i++) {
                let element2 = element[i];
                if (this._reset)
                    this._reset(element2);
                this.pool.push(element2);
            }
            element.length = 0;
        }
        else {
            if (this._reset)
                this._reset(element);
            this.pool.push(element);
        }
    }
}

const lastInput = {
    x: 0,
    y: 0,
    mouseWheelDelta: 0,
    pointerId: 0,
    button: 0,
    clickCount: 0,
    holdTime: 0,
    altKey: false,
    shiftKey: false,
    ctrlKey: false,
    commandKey: false,
    keyCode: "",
    key: "",
    get isDblClick() {
        return this.clickCount == 2;
    },
    get isRightButton() {
        return this.button == 2;
    },
    get ctrlOrCmdKey() {
        return this.ctrlKey || this.commandKey;
    }
};
class Event {
    constructor() {
        this.data = null;
        /** @internal */
        this._callChain = [];
    }
    get type() {
        return this._type;
    }
    get target() {
        return this._target;
    }
    get sender() {
        return this._target;
    }
    get initiator() {
        return this._initiator;
    }
    get input() {
        return lastInput;
    }
    stopPropagation() {
        this._stopsPropagation = true;
    }
    preventDefault() {
        this._defaultPrevented = true;
    }
    capturePointer() {
        this._pointerCapture = true;
    }
    get isDefaultPrevented() {
        return this._defaultPrevented;
    }
}
var EventPool = new Pool(Event, obj => {
    obj._stopsPropagation = false;
    obj._defaultPrevented = false;
    obj._pointerCapture = false;
    obj._callChain.length = 0;
}, obj => {
    obj.data = null;
    obj._initiator = null;
    obj._target = null;
    obj._callChain.length = 0;
});

class EventDispatcher {
    constructor() {
        this._listeners = {};
    }
    on(type, callback, target, capture) {
        let col = this._listeners[type];
        if (!col) {
            col = { dispatching: 0, callbacks: [], captures: [] };
            this._listeners[type] = col;
        }
        let arr = capture ? col.captures : col.callbacks;
        let index = arr.findIndex((value, index, arr) => value == callback && arr[index + 1] == target);
        if (index != -1)
            arr[index + 2] = false;
        else
            arr.push(callback, target, false);
    }
    off(type, callback, target, capture) {
        let col = this._listeners[type];
        if (!col)
            return;
        let arr = capture ? col.captures : col.callbacks;
        let index = arr.findIndex((value, index, arr) => value == callback && arr[index + 1] == target);
        if (index != -1) {
            if (col.dispatching != 0) {
                arr[index + 2] = true;
                col.dispatching = 2;
            }
            else
                arr.splice(index, 3);
        }
    }
    offAll(type) {
        if (type) {
            let col = this._listeners[type];
            if (col) {
                if (col.dispatching != 0) {
                    col.callbacks.forEach((value, index, arr) => { if (index % 3 == 2)
                        arr[index] = true; });
                    col.captures.forEach((value, index, arr) => { if (index % 3 == 2)
                        arr[index] = true; });
                    col.dispatching = 2;
                }
                else {
                    col.callbacks.length = 0;
                    col.captures.length = 0;
                }
            }
        }
        else {
            for (var key in this._listeners) {
                delete this._listeners[key];
            }
        }
    }
    hasListener(type, callback, target, capture) {
        let col = this._listeners[type];
        if (!col)
            return false;
        let arr = capture ? col.captures : col.callbacks;
        if (!callback)
            return arr.length > 0;
        else
            arr.findIndex((value, index, arr) => value == callback && arr[index + 1] == target) != -1;
    }
    emit(type, data) {
        let col = this._listeners[type];
        if (!col || col.callbacks.length == 0 && col.captures.length == 0)
            return;
        let ev = EventPool.borrow(type);
        ev._type = type;
        ev.data = data;
        this._dispatch(col, ev, true);
        this._dispatch(col, ev, false);
        EventPool.returns(ev);
        return ev._defaultPrevented;
    }
    /** @internal */
    _dispatch(col, ev, capture) {
        if (col.dispatching != 0)
            return;
        col.dispatching = 1;
        ev._target = this;
        let arr = capture ? col.captures : col.callbacks;
        let cnt = arr.length;
        for (let i = 0; i < cnt; i += 3) {
            arr[i].call(arr[i + 1], ev);
        }
        if (col.dispatching == 2) {
            let cnt = arr.length;
            let i = 0;
            while (i < cnt) {
                if (arr[i + 2]) {
                    arr.splice(i, 3);
                    cnt -= 3;
                    continue;
                }
                else
                    i += 3;
            }
        }
        col.dispatching = 0;
    }
    /** @internal */
    _dispatchDirect(type, ev) {
        let col = this._listeners[type];
        if (col) {
            if (col.captures.length > 0)
                this._dispatch(col, ev, true);
            if (col.callbacks.length > 0)
                this._dispatch(col, ev, false);
        }
    }
}

var EaseType;
(function (EaseType) {
    EaseType[EaseType["Linear"] = 0] = "Linear";
    EaseType[EaseType["SineIn"] = 1] = "SineIn";
    EaseType[EaseType["SineOut"] = 2] = "SineOut";
    EaseType[EaseType["SineInOut"] = 3] = "SineInOut";
    EaseType[EaseType["QuadIn"] = 4] = "QuadIn";
    EaseType[EaseType["QuadOut"] = 5] = "QuadOut";
    EaseType[EaseType["QuadInOut"] = 6] = "QuadInOut";
    EaseType[EaseType["CubicIn"] = 7] = "CubicIn";
    EaseType[EaseType["CubicOut"] = 8] = "CubicOut";
    EaseType[EaseType["CubicInOut"] = 9] = "CubicInOut";
    EaseType[EaseType["QuartIn"] = 10] = "QuartIn";
    EaseType[EaseType["QuartOut"] = 11] = "QuartOut";
    EaseType[EaseType["QuartInOut"] = 12] = "QuartInOut";
    EaseType[EaseType["QuintIn"] = 13] = "QuintIn";
    EaseType[EaseType["QuintOut"] = 14] = "QuintOut";
    EaseType[EaseType["QuintInOut"] = 15] = "QuintInOut";
    EaseType[EaseType["ExpoIn"] = 16] = "ExpoIn";
    EaseType[EaseType["ExpoOut"] = 17] = "ExpoOut";
    EaseType[EaseType["ExpoInOut"] = 18] = "ExpoInOut";
    EaseType[EaseType["CircIn"] = 19] = "CircIn";
    EaseType[EaseType["CircOut"] = 20] = "CircOut";
    EaseType[EaseType["CircInOut"] = 21] = "CircInOut";
    EaseType[EaseType["ElasticIn"] = 22] = "ElasticIn";
    EaseType[EaseType["ElasticOut"] = 23] = "ElasticOut";
    EaseType[EaseType["ElasticInOut"] = 24] = "ElasticInOut";
    EaseType[EaseType["BackIn"] = 25] = "BackIn";
    EaseType[EaseType["BackOut"] = 26] = "BackOut";
    EaseType[EaseType["BackInOut"] = 27] = "BackInOut";
    EaseType[EaseType["BounceIn"] = 28] = "BounceIn";
    EaseType[EaseType["BounceOut"] = 29] = "BounceOut";
    EaseType[EaseType["BounceInOut"] = 30] = "BounceInOut";
    EaseType[EaseType["Custom"] = 31] = "Custom";
})(EaseType || (EaseType = {}));

class GearBase {
    dispose() {
        if (this._tweenConfig && this._tweenConfig._tweener) {
            this._tweenConfig._tweener.kill();
            this._tweenConfig._tweener = null;
        }
    }
    get controller() {
        return this._controller;
    }
    set controller(val) {
        if (val != this._controller) {
            this._controller = val;
            if (this._controller)
                this.init();
        }
    }
    get tweenConfig() {
        if (!this._tweenConfig)
            this._tweenConfig = new GearTweenConfig();
        return this._tweenConfig;
    }
    get allowTween() {
        return this._tweenConfig && this._tweenConfig.tween && constructingDepth.n == 0 && !GearBase.disableAllTweenEffect;
    }
    setup(buffer) {
        this._controller = this._owner.parent.getControllerAt(buffer.readShort());
        this.init();
        var i;
        var page;
        var cnt = buffer.readShort();
        if ("pages" in this) {
            this.pages = buffer.readSArray(cnt);
        }
        else {
            for (i = 0; i < cnt; i++) {
                page = buffer.readS();
                if (page == null)
                    continue;
                this.addStatus(page, buffer);
            }
            if (buffer.readBool())
                this.addStatus(null, buffer);
        }
        if (buffer.readBool()) {
            this._tweenConfig = new GearTweenConfig();
            this._tweenConfig.easeType = buffer.readByte();
            this._tweenConfig.duration = buffer.readFloat();
            this._tweenConfig.delay = buffer.readFloat();
        }
        if (buffer.version >= 2) {
            if ("positionsInPercent" in this) {
                if (buffer.readBool()) {
                    this.positionsInPercent = true;
                    for (i = 0; i < cnt; i++) {
                        page = buffer.readS();
                        if (page == null)
                            continue;
                        this.addExtStatus(page, buffer);
                    }
                    if (buffer.readBool())
                        this.addExtStatus(null, buffer);
                }
            }
            else if ("condition" in this)
                this.condition = buffer.readByte();
        }
    }
    updateFromRelations(dx, dy) {
    }
    addStatus(pageId, buffer) {
    }
    init() {
    }
    apply() {
    }
    updateState() {
    }
}
class GearTweenConfig {
    constructor() {
        this.tween = true;
        this.easeType = EaseType.QuadOut;
        this.duration = 0.3;
        this.delay = 0;
    }
}

class GearAnimation extends GearBase {
    init() {
        this._default = {
            playing: this._owner.getProp(ObjectPropID.Playing),
            frame: this._owner.getProp(ObjectPropID.Frame)
        };
        this._storage = {};
    }
    addStatus(pageId, buffer) {
        var gv;
        if (!pageId)
            gv = this._default;
        else {
            gv = {};
            this._storage[pageId] = gv;
        }
        gv.playing = buffer.readBool();
        gv.frame = buffer.readInt();
    }
    apply() {
        this._owner._gearLocked = true;
        var gv = this._storage[this._controller.selectedPageId] || this._default;
        this._owner.setProp(ObjectPropID.Playing, gv.playing);
        this._owner.setProp(ObjectPropID.Frame, gv.frame);
        this._owner._gearLocked = false;
    }
    updateState() {
        var gv = this._storage[this._controller.selectedPageId];
        if (!gv) {
            gv = {};
            this._storage[this._controller.selectedPageId] = gv;
        }
        gv.playing = this._owner.getProp(ObjectPropID.Playing);
        gv.frame = this._owner.getProp(ObjectPropID.Frame);
    }
}

class GearColor extends GearBase {
    init() {
        this._default = {
            color: this._owner.getProp(ObjectPropID.Color),
            strokeColor: this._owner.getProp(ObjectPropID.OutlineColor)
        };
        this._storage = {};
    }
    addStatus(pageId, buffer) {
        var gv;
        if (!pageId)
            gv = this._default;
        else {
            gv = {};
            this._storage[pageId] = gv;
        }
        gv.color = buffer.readColor();
        gv.strokeColor = buffer.readColor();
    }
    apply() {
        this._owner._gearLocked = true;
        var gv = this._storage[this._controller.selectedPageId] || this._default;
        this._owner.setProp(ObjectPropID.Color, gv.color);
        this._owner.setProp(ObjectPropID.OutlineColor, gv.strokeColor);
        this._owner._gearLocked = false;
    }
    updateState() {
        var gv = this._storage[this._controller.selectedPageId];
        if (!gv) {
            gv = {};
            this._storage[this._controller.selectedPageId] = gv;
        }
        gv.color = this._owner.getProp(ObjectPropID.Color);
        gv.strokeColor = this._owner.getProp(ObjectPropID.OutlineColor);
    }
}

class GearDisplay extends GearBase {
    constructor() {
        super(...arguments);
        this.pages = null;
        this._visible = 0;
        this._displayLockToken = 1;
    }
    init() {
        this.pages = null;
    }
    addLock() {
        this._visible++;
        return this._displayLockToken;
    }
    releaseLock(token) {
        if (token == this._displayLockToken)
            this._visible--;
    }
    get connected() {
        return this._controller == null || this._visible > 0;
    }
    apply() {
        this._displayLockToken++;
        if (this._displayLockToken <= 0)
            this._displayLockToken = 1;
        if (this.pages == null || this.pages.length == 0
            || this.pages.indexOf(this._controller.selectedPageId) != -1)
            this._visible = 1;
        else
            this._visible = 0;
    }
}

class GearDisplay2 extends GearBase {
    constructor() {
        super(...arguments);
        this.pages = null;
        this.condition = 0;
        this._visible = 0;
    }
    init() {
        this.pages = null;
    }
    apply() {
        if (this.pages == null || this.pages.length == 0
            || this.pages.indexOf(this._controller.selectedPageId) != -1)
            this._visible = 1;
        else
            this._visible = 0;
    }
    evaluate(connected) {
        var v = this._controller == null || this._visible > 0;
        if (this.condition == 0)
            v = v && connected;
        else
            v = v || connected;
        return v;
    }
}

class GearFontSize extends GearBase {
    constructor() {
        super(...arguments);
        this._default = 0;
    }
    init() {
        this._default = this._owner.getProp(ObjectPropID.FontSize);
        this._storage = {};
    }
    addStatus(pageId, buffer) {
        if (!pageId)
            this._default = buffer.readInt();
        else
            this._storage[pageId] = buffer.readInt();
    }
    apply() {
        this._owner._gearLocked = true;
        var data = this._storage[this._controller.selectedPageId];
        if (data !== undefined)
            this._owner.setProp(ObjectPropID.FontSize, data);
        else
            this._owner.setProp(ObjectPropID.FontSize, this._default);
        this._owner._gearLocked = false;
    }
    updateState() {
        this._storage[this._controller.selectedPageId] = this._owner.getProp(ObjectPropID.FontSize);
    }
}

class GearIcon extends GearBase {
    init() {
        this._default = this._owner.icon;
        this._storage = {};
    }
    addStatus(pageId, buffer) {
        if (!pageId)
            this._default = buffer.readS();
        else
            this._storage[pageId] = buffer.readS();
    }
    apply() {
        this._owner._gearLocked = true;
        var data = this._storage[this._controller.selectedPageId];
        if (data !== undefined)
            this._owner.icon = data;
        else
            this._owner.icon = this._default;
        this._owner._gearLocked = false;
    }
    updateState() {
        this._storage[this._controller.selectedPageId] = this._owner.icon;
    }
}

class Timers {
    static add(delayInMiniseconds, repeat, callback, target, callbackParam) {
        let item;
        let index = _items.findIndex(e => e.target == target && e.callback == callback);
        if (index != -1)
            item = _items[index];
        else {
            item = _pool.borrow();
            item.callback = callback;
            item.target = target;
            _items.push(item);
        }
        item.delay = delayInMiniseconds;
        item.counter = 0;
        item.repeat = repeat;
        item.param = callbackParam;
        item.end = false;
    }
    static callLater(callback, target, callbackParam) {
        this.add(0, 1, callback, target, callbackParam);
    }
    static callDelay(delay, callback, target, callbackParam) {
        this.add(delay, 1, callback, target, callbackParam);
    }
    static addUpdate(callback, target, callbackParam) {
        this.add(0, 0, callback, target, callbackParam);
    }
    static exists(callback, target) {
        return _items.findIndex(e => e.target == target && e.callback == callback) != -1;
    }
    static remove(callback, target) {
        let index = _items.findIndex(e => e.target == target && e.callback == callback);
        if (index != -1) {
            let item = _items[index];
            _items.splice(index, 1);
            if (index < _enumI)
                _enumI--;
            _enumCount--;
            _pool.returns(item);
        }
    }
}
Timers.deltaTime = 0;
Timers.time = 0;
Timers.frameCount = 0;
class TimerItem {
    constructor() {
        this.delay = 0;
        this.counter = 0;
        this.repeat = 0;
    }
    advance(elapsed) {
        this.counter += elapsed;
        if (this.counter >= this.delay) {
            this.counter -= this.delay;
            if (this.counter > this.delay)
                this.counter = this.delay;
            if (this.repeat > 0) {
                this.repeat--;
                if (this.repeat == 0)
                    this.end = true;
            }
            return true;
        }
        else
            return false;
    }
    reset() {
        this.callback = null;
        this.target = null;
        this.param = null;
    }
}
var _items = new Array();
var _pool = new Pool(TimerItem, e => e.reset());
var _enumI = 0;
var _enumCount = 0;
var _lastTime = 0;
requestAnimationFrame(__timer);
function __timer(timeStamp) {
    requestAnimationFrame(__timer);
    Timers.frameCount++;
    Timers.time = timeStamp;
    let deltaTime = timeStamp - _lastTime;
    Timers.deltaTime = deltaTime;
    _lastTime = timeStamp;
    _enumI = 0;
    _enumCount = _items.length;
    while (_enumI < _enumCount) {
        var item = _items[_enumI];
        _enumI++;
        if (item.advance(deltaTime)) {
            if (item.end) {
                _enumI--;
                _enumCount--;
                _items.splice(_enumI, 1);
            }
            item.callback.call(item.target, item.param);
            if (item.end)
                _pool.returns(item);
        }
    }
    return false;
}

class TweenValue {
    constructor() {
        this.x = this.y = this.z = this.w = 0;
    }
    get color() {
        return (this.w << 24) + (this.x << 16) + (this.y << 8) + this.z;
    }
    set color(value) {
        this.x = (value & 0xFF0000) >> 16;
        this.y = (value & 0x00FF00) >> 8;
        this.z = (value & 0x0000FF);
        this.w = (value & 0xFF000000) >> 24;
    }
    getField(index) {
        switch (index) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error("Index out of bounds: " + index);
        }
    }
    setField(index, value) {
        switch (index) {
            case 0:
                this.x = value;
                break;
            case 1:
                this.y = value;
                break;
            case 2:
                this.z = value;
                break;
            case 3:
                this.w = value;
                break;
            default:
                throw new Error("Index out of bounds: " + index);
        }
    }
    setZero() {
        this.x = this.y = this.z = this.w = 0;
    }
}

// Author: Daniele Giardini - http://www.demigiant.com
const _PiOver2 = Math.PI * 0.5;
const _TwoPi = Math.PI * 2;
function evaluateEase(easeType, time, duration, overshootOrAmplitude, period) {
    switch (easeType) {
        case EaseType.Linear:
            return time / duration;
        case EaseType.SineIn:
            return -Math.cos(time / duration * _PiOver2) + 1;
        case EaseType.SineOut:
            return Math.sin(time / duration * _PiOver2);
        case EaseType.SineInOut:
            return -0.5 * (Math.cos(Math.PI * time / duration) - 1);
        case EaseType.QuadIn:
            return (time /= duration) * time;
        case EaseType.QuadOut:
            return -(time /= duration) * (time - 2);
        case EaseType.QuadInOut:
            if ((time /= duration * 0.5) < 1)
                return 0.5 * time * time;
            return -0.5 * ((--time) * (time - 2) - 1);
        case EaseType.CubicIn:
            return (time /= duration) * time * time;
        case EaseType.CubicOut:
            return ((time = time / duration - 1) * time * time + 1);
        case EaseType.CubicInOut:
            if ((time /= duration * 0.5) < 1)
                return 0.5 * time * time * time;
            return 0.5 * ((time -= 2) * time * time + 2);
        case EaseType.QuartIn:
            return (time /= duration) * time * time * time;
        case EaseType.QuartOut:
            return -((time = time / duration - 1) * time * time * time - 1);
        case EaseType.QuartInOut:
            if ((time /= duration * 0.5) < 1)
                return 0.5 * time * time * time * time;
            return -0.5 * ((time -= 2) * time * time * time - 2);
        case EaseType.QuintIn:
            return (time /= duration) * time * time * time * time;
        case EaseType.QuintOut:
            return ((time = time / duration - 1) * time * time * time * time + 1);
        case EaseType.QuintInOut:
            if ((time /= duration * 0.5) < 1)
                return 0.5 * time * time * time * time * time;
            return 0.5 * ((time -= 2) * time * time * time * time + 2);
        case EaseType.ExpoIn:
            return (time == 0) ? 0 : Math.pow(2, 10 * (time / duration - 1));
        case EaseType.ExpoOut:
            if (time == duration)
                return 1;
            return (-Math.pow(2, -10 * time / duration) + 1);
        case EaseType.ExpoInOut:
            if (time == 0)
                return 0;
            if (time == duration)
                return 1;
            if ((time /= duration * 0.5) < 1)
                return 0.5 * Math.pow(2, 10 * (time - 1));
            return 0.5 * (-Math.pow(2, -10 * --time) + 2);
        case EaseType.CircIn:
            return -(Math.sqrt(1 - (time /= duration) * time) - 1);
        case EaseType.CircOut:
            return Math.sqrt(1 - (time = time / duration - 1) * time);
        case EaseType.CircInOut:
            if ((time /= duration * 0.5) < 1)
                return -0.5 * (Math.sqrt(1 - time * time) - 1);
            return 0.5 * (Math.sqrt(1 - (time -= 2) * time) + 1);
        case EaseType.ElasticIn:
            var s0;
            if (time == 0)
                return 0;
            if ((time /= duration) == 1)
                return 1;
            if (period == 0)
                period = duration * 0.3;
            if (overshootOrAmplitude < 1) {
                overshootOrAmplitude = 1;
                s0 = period / 4;
            }
            else
                s0 = period / _TwoPi * Math.asin(1 / overshootOrAmplitude);
            return -(overshootOrAmplitude * Math.pow(2, 10 * (time -= 1)) * Math.sin((time * duration - s0) * _TwoPi / period));
        case EaseType.ElasticOut:
            var s1;
            if (time == 0)
                return 0;
            if ((time /= duration) == 1)
                return 1;
            if (period == 0)
                period = duration * 0.3;
            if (overshootOrAmplitude < 1) {
                overshootOrAmplitude = 1;
                s1 = period / 4;
            }
            else
                s1 = period / _TwoPi * Math.asin(1 / overshootOrAmplitude);
            return (overshootOrAmplitude * Math.pow(2, -10 * time) * Math.sin((time * duration - s1) * _TwoPi / period) + 1);
        case EaseType.ElasticInOut:
            var s;
            if (time == 0)
                return 0;
            if ((time /= duration * 0.5) == 2)
                return 1;
            if (period == 0)
                period = duration * (0.3 * 1.5);
            if (overshootOrAmplitude < 1) {
                overshootOrAmplitude = 1;
                s = period / 4;
            }
            else
                s = period / _TwoPi * Math.asin(1 / overshootOrAmplitude);
            if (time < 1)
                return -0.5 * (overshootOrAmplitude * Math.pow(2, 10 * (time -= 1)) * Math.sin((time * duration - s) * _TwoPi / period));
            return overshootOrAmplitude * Math.pow(2, -10 * (time -= 1)) * Math.sin((time * duration - s) * _TwoPi / period) * 0.5 + 1;
        case EaseType.BackIn:
            return (time /= duration) * time * ((overshootOrAmplitude + 1) * time - overshootOrAmplitude);
        case EaseType.BackOut:
            return ((time = time / duration - 1) * time * ((overshootOrAmplitude + 1) * time + overshootOrAmplitude) + 1);
        case EaseType.BackInOut:
            if ((time /= duration * 0.5) < 1)
                return 0.5 * (time * time * (((overshootOrAmplitude *= (1.525)) + 1) * time - overshootOrAmplitude));
            return 0.5 * ((time -= 2) * time * (((overshootOrAmplitude *= (1.525)) + 1) * time + overshootOrAmplitude) + 2);
        case EaseType.BounceIn:
            return bounce_easeIn(time, duration);
        case EaseType.BounceOut:
            return bounce_easeOut(time, duration);
        case EaseType.BounceInOut:
            return bounce_easeInOut(time, duration);
        default:
            return -(time /= duration) * (time - 2);
    }
}
function bounce_easeIn(time, duration) {
    return 1 - bounce_easeOut(duration - time, duration);
}
function bounce_easeOut(time, duration) {
    if ((time /= duration) < (1 / 2.75)) {
        return (7.5625 * time * time);
    }
    if (time < (2 / 2.75)) {
        return (7.5625 * (time -= (1.5 / 2.75)) * time + 0.75);
    }
    if (time < (2.5 / 2.75)) {
        return (7.5625 * (time -= (2.25 / 2.75)) * time + 0.9375);
    }
    return (7.5625 * (time -= (2.625 / 2.75)) * time + 0.984375);
}
function bounce_easeInOut(time, duration) {
    if (time < duration * 0.5) {
        return bounce_easeIn(time * 2, duration) * 0.5;
    }
    return bounce_easeOut(time * 2 - duration, duration) * 0.5 + 0.5;
}

class Vec2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    reset() {
        this.x = this.y = 0;
        return this;
    }
    distance(x, y) {
        return Math.sqrt((this.x - x) * (this.x - x) + (this.y - y) * (this.y - y));
    }
    toString() {
        return this.x + "," + this.y;
    }
    normalize() {
        var d = Math.sqrt(this.x * this.x + this.y * this.y);
        if (d > 0) {
            var id = 1.0 / d;
            this.x *= id;
            this.y *= id;
        }
    }
    copy(Vec2) {
        return this.set(Vec2.x, Vec2.y);
    }
    clone() {
        return new Vec2(this.x, this.y);
    }
    equals(another) {
        return this.x == another.x && this.y == another.y;
    }
}

var s_vec2 = new Vec2();
class GTweener {
    constructor() {
        this._startValue = new TweenValue();
        this._endValue = new TweenValue();
        this._value = new TweenValue();
        this._deltaValue = new TweenValue();
        this._reset();
    }
    setDelay(value) {
        this._delay = value;
        return this;
    }
    get delay() {
        return this._delay;
    }
    setDuration(value) {
        this._duration = value;
        return this;
    }
    get duration() {
        return this._duration;
    }
    setBreakpoint(value) {
        this._breakpoint = value;
        return this;
    }
    setEase(value) {
        this._easeType = value;
        return this;
    }
    setEasePeriod(value) {
        this._easePeriod = value;
        return this;
    }
    setEaseOvershootOrAmplitude(value) {
        this._easeOvershootOrAmplitude = value;
        return this;
    }
    setRepeat(repeat, yoyo) {
        this._repeat = repeat;
        this._yoyo = yoyo;
        return this;
    }
    get repeat() {
        return this._repeat;
    }
    setTimeScale(value) {
        this._timeScale = value;
        return this;
    }
    setSnapping(value) {
        this._snapping = value;
        return this;
    }
    setTarget(value, propType) {
        this._target = value;
        this._propType = propType;
        return this;
    }
    get target() {
        return this._target;
    }
    setPath(value) {
        this._path = value;
        return this;
    }
    setUserData(value) {
        this._userData = value;
        return this;
    }
    get userData() {
        return this._userData;
    }
    onUpdate(callback, target) {
        this._onUpdate = callback;
        this._onUpdateCaller = target;
        return this;
    }
    onStart(callback, target) {
        this._onStart = callback;
        this._onStartCaller = target;
        return this;
    }
    onComplete(callback, target) {
        this._onComplete = callback;
        this._onCompleteCaller = target;
        return this;
    }
    get startValue() {
        return this._startValue;
    }
    get endValue() {
        return this._endValue;
    }
    get value() {
        return this._value;
    }
    get deltaValue() {
        return this._deltaValue;
    }
    get normalizedTime() {
        return this._normalizedTime;
    }
    get completed() {
        return this._ended != 0;
    }
    get allCompleted() {
        return this._ended == 1;
    }
    setPaused(paused) {
        this._paused = paused;
        return this;
    }
    /**
     * seek position of the tween, in seconds.
     */
    seek(time) {
        if (this._killed)
            return;
        this._elapsedTime = time;
        if (this._elapsedTime < this._delay) {
            if (this._started)
                this._elapsedTime = this._delay;
            else
                return;
        }
        this.update();
    }
    kill(complete) {
        if (this._killed)
            return;
        if (complete) {
            if (this._ended == 0) {
                if (this._breakpoint >= 0)
                    this._elapsedTime = this._delay + this._breakpoint;
                else if (this._repeat >= 0)
                    this._elapsedTime = this._delay + this._duration * (this._repeat + 1);
                else
                    this._elapsedTime = this._delay + this._duration * 2;
                this.update();
            }
            this.callCompleteCallback();
        }
        this._killed = true;
    }
    _to(start, end, duration) {
        this._valueSize = 1;
        this._startValue.x = start;
        this._endValue.x = end;
        this._value.x = start;
        this._duration = duration;
        return this;
    }
    _to2(start, start2, end, end2, duration) {
        this._valueSize = 2;
        this._startValue.x = start;
        this._endValue.x = end;
        this._startValue.y = start2;
        this._endValue.y = end2;
        this._value.x = start;
        this._value.y = start2;
        this._duration = duration;
        return this;
    }
    _to3(start, start2, start3, end, end2, end3, duration) {
        this._valueSize = 3;
        this._startValue.x = start;
        this._endValue.x = end;
        this._startValue.y = start2;
        this._endValue.y = end2;
        this._startValue.z = start3;
        this._endValue.z = end3;
        this._value.x = start;
        this._value.y = start2;
        this._value.z = start3;
        this._duration = duration;
        return this;
    }
    _to4(start, start2, start3, start4, end, end2, end3, end4, duration) {
        this._valueSize = 4;
        this._startValue.x = start;
        this._endValue.x = end;
        this._startValue.y = start2;
        this._endValue.y = end2;
        this._startValue.z = start3;
        this._endValue.z = end3;
        this._startValue.w = start4;
        this._endValue.w = end4;
        this._value.x = start;
        this._value.y = start2;
        this._value.z = start3;
        this._value.w = start4;
        this._duration = duration;
        return this;
    }
    _toColor(start, end, duration) {
        this._valueSize = 4;
        this._startValue.color = start;
        this._endValue.color = end;
        this._value.color = start;
        this._duration = duration;
        return this;
    }
    _shake(startX, startY, amplitude, duration) {
        this._valueSize = 5;
        this._startValue.x = startX;
        this._startValue.y = startY;
        this._startValue.w = amplitude;
        this._duration = duration;
        return this;
    }
    _init() {
        this._delay = 0;
        this._duration = 0;
        this._breakpoint = -1;
        this._easeType = EaseType.QuadOut;
        this._timeScale = 1;
        this._easePeriod = 0;
        this._easeOvershootOrAmplitude = 1.70158;
        this._snapping = false;
        this._repeat = 0;
        this._yoyo = false;
        this._valueSize = 0;
        this._started = false;
        this._paused = false;
        this._killed = false;
        this._elapsedTime = 0;
        this._normalizedTime = 0;
        this._ended = 0;
    }
    _reset() {
        this._target = null;
        this._propType = null;
        this._userData = null;
        this._path = null;
        this._onStart = this._onUpdate = this._onComplete = null;
        this._onStartCaller = this._onUpdateCaller = this._onCompleteCaller = null;
    }
    _update(dt) {
        if (this._timeScale != 1)
            dt *= this._timeScale;
        if (dt == 0)
            return;
        if (this._ended != 0) //Maybe completed by seek
         {
            this.callCompleteCallback();
            this._killed = true;
            return;
        }
        this._elapsedTime += dt;
        this.update();
        if (this._ended != 0) {
            if (!this._killed) {
                this.callCompleteCallback();
                this._killed = true;
            }
        }
    }
    update() {
        this._ended = 0;
        if (this._valueSize == 0) //DelayedCall
         {
            if (this._elapsedTime >= this._delay + this._duration)
                this._ended = 1;
            return;
        }
        if (!this._started) {
            if (this._elapsedTime < this._delay)
                return;
            this._started = true;
            this.callStartCallback();
            if (this._killed)
                return;
        }
        var reversed = false;
        var tt = this._elapsedTime - this._delay;
        if (this._breakpoint >= 0 && tt >= this._breakpoint) {
            tt = this._breakpoint;
            this._ended = 2;
        }
        if (this._repeat != 0) {
            var round = Math.floor(tt / this._duration);
            tt -= this._duration * round;
            if (this._yoyo)
                reversed = round % 2 == 1;
            if (this._repeat > 0 && this._repeat - round < 0) {
                if (this._yoyo)
                    reversed = this._repeat % 2 == 1;
                tt = this._duration;
                this._ended = 1;
            }
        }
        else if (tt >= this._duration) {
            tt = this._duration;
            this._ended = 1;
        }
        this._normalizedTime = evaluateEase(this._easeType, reversed ? (this._duration - tt) : tt, this._duration, this._easeOvershootOrAmplitude, this._easePeriod);
        this._value.setZero();
        this._deltaValue.setZero();
        if (this._valueSize == 5) {
            if (this._ended == 0) {
                var r = this._startValue.w * (1 - this._normalizedTime);
                var rx = r * (Math.random() > 0.5 ? 1 : -1);
                var ry = r * (Math.random() > 0.5 ? 1 : -1);
                this._deltaValue.x = rx;
                this._deltaValue.y = ry;
                this._value.x = this._startValue.x + rx;
                this._value.y = this._startValue.y + ry;
            }
            else {
                this._value.x = this._startValue.x;
                this._value.y = this._startValue.y;
            }
        }
        else if (this._path) {
            let pt = this._path.getPointAt(this._normalizedTime, s_vec2);
            if (this._snapping) {
                pt.x = Math.round(pt.x);
                pt.y = Math.round(pt.y);
            }
            this._deltaValue.x = pt.x - this._value.x;
            this._deltaValue.y = pt.y - this._value.y;
            this._value.x = pt.x;
            this._value.y = pt.y;
        }
        else {
            for (var i = 0; i < this._valueSize; i++) {
                var n1 = this._startValue.getField(i);
                var n2 = this._endValue.getField(i);
                var f = n1 + (n2 - n1) * this._normalizedTime;
                if (this._snapping)
                    f = Math.round(f);
                this._deltaValue.setField(i, f - this._value.getField(i));
                this._value.setField(i, f);
            }
        }
        if (this._target && this._propType) {
            if (this._propType instanceof Function) {
                switch (this._valueSize) {
                    case 1:
                        this._propType.call(this._target, this._value.x);
                        break;
                    case 2:
                        this._propType.call(this._target, this._value.x, this._value.y);
                        break;
                    case 3:
                        this._propType.call(this._target, this._value.x, this._value.y, this._value.z);
                        break;
                    case 4:
                        this._propType.call(this._target, this._value.x, this._value.y, this._value.z, this._value.w);
                        break;
                    case 5:
                        this._propType.call(this._target, this._value.color);
                        break;
                    case 6:
                        this._propType.call(this._target, this._value.x, this._value.y);
                        break;
                }
            }
            else {
                if (this._valueSize == 5)
                    this._target[this._propType] = this._value.color;
                else
                    this._target[this._propType] = this._value.x;
            }
        }
        this.callUpdateCallback();
    }
    callStartCallback() {
        if (this._onStart) {
            try {
                this._onStart.call(this._onStartCaller, this);
            }
            catch (err) {
                console.log("error in start callback > " + err);
            }
        }
    }
    callUpdateCallback() {
        if (this._onUpdate) {
            try {
                this._onUpdate.call(this._onUpdateCaller, this);
            }
            catch (err) {
                console.log("error in update callback > " + err);
            }
        }
    }
    callCompleteCallback() {
        if (this._onComplete) {
            try {
                this._onComplete.call(this._onCompleteCaller, this);
            }
            catch (err) {
                console.log("error in complete callback > " + err);
            }
        }
    }
}

class TweenManager {
    static createTween() {
        if (!_inited) {
            Timers.addUpdate(TweenManager.update);
            _inited = true;
        }
        var tweener = _tweenerPool.borrow();
        _activeTweens[_totalActiveTweens++] = tweener;
        return tweener;
    }
    static isTweening(target, propType) {
        if (target == null)
            return false;
        var anyType = !propType;
        for (var i = 0; i < _totalActiveTweens; i++) {
            var tweener = _activeTweens[i];
            if (tweener && tweener.target == target && !tweener._killed
                && (anyType || tweener._propType == propType))
                return true;
        }
        return false;
    }
    static killTweens(target, completed, propType) {
        if (target == null)
            return false;
        var flag = false;
        var cnt = _totalActiveTweens;
        var anyType = !propType;
        for (var i = 0; i < cnt; i++) {
            var tweener = _activeTweens[i];
            if (tweener && tweener.target == target && !tweener._killed
                && (anyType || tweener._propType == propType)) {
                tweener.kill(completed);
                flag = true;
            }
        }
        return flag;
    }
    static getTween(target, propType) {
        if (target == null)
            return null;
        var cnt = _totalActiveTweens;
        var anyType = !propType;
        for (var i = 0; i < cnt; i++) {
            var tweener = _activeTweens[i];
            if (tweener && tweener.target == target && !tweener._killed
                && (anyType || tweener._propType == propType)) {
                return tweener;
            }
        }
        return null;
    }
    static update() {
        var dt = Timers.deltaTime / 1000;
        var cnt = _totalActiveTweens;
        var freePosStart = -1;
        for (var i = 0; i < cnt; i++) {
            var tweener = _activeTweens[i];
            if (tweener == null) {
                if (freePosStart == -1)
                    freePosStart = i;
            }
            else if (tweener._killed) {
                _tweenerPool.returns(tweener);
                _activeTweens[i] = null;
                if (freePosStart == -1)
                    freePosStart = i;
            }
            else {
                if (tweener._target && ('isDisposed' in tweener._target) && tweener._target.isDisposed)
                    tweener._killed = true;
                else if (!tweener._paused)
                    tweener._update(dt);
                if (freePosStart != -1) {
                    _activeTweens[freePosStart] = tweener;
                    _activeTweens[i] = null;
                    freePosStart++;
                }
            }
        }
        if (freePosStart >= 0) {
            if (_totalActiveTweens != cnt) //new tweens added
             {
                var j = cnt;
                cnt = _totalActiveTweens - cnt;
                for (i = 0; i < cnt; i++)
                    _activeTweens[freePosStart++] = _activeTweens[j++];
            }
            _totalActiveTweens = freePosStart;
        }
    }
}
var _activeTweens = new Array();
var _tweenerPool = new Pool(GTweener, e => e._init(), e => e._reset());
var _totalActiveTweens = 0;
var _inited = false;

class GTween {
    static to(start, end, duration) {
        return TweenManager.createTween()._to(start, end, duration);
    }
    static to2(start, start2, end, end2, duration) {
        return TweenManager.createTween()._to2(start, start2, end, end2, duration);
    }
    static to3(start, start2, start3, end, end2, end3, duration) {
        return TweenManager.createTween()._to3(start, start2, start3, end, end2, end3, duration);
    }
    static to4(start, start2, start3, start4, end, end2, end3, end4, duration) {
        return TweenManager.createTween()._to4(start, start2, start3, start4, end, end2, end3, end4, duration);
    }
    static toColor(start, end, duration) {
        return TweenManager.createTween()._toColor(start, end, duration);
    }
    static delayedCall(delay) {
        return TweenManager.createTween().setDelay(delay);
    }
    static shake(startX, startY, amplitude, duration) {
        return TweenManager.createTween()._shake(startX, startY, amplitude, duration);
    }
    static isTweening(target, propType) {
        return TweenManager.isTweening(target, propType);
    }
    static kill(target, complete, propType) {
        TweenManager.killTweens(target, complete, propType);
    }
    static getTween(target, propType) {
        return TweenManager.getTween(target, propType);
    }
}
GTween.catchCallbackExceptions = true;

class GearLook extends GearBase {
    init() {
        this._default = {
            alpha: this._owner.alpha,
            rotation: this._owner.rotation,
            grayed: this._owner.grayed,
            touchable: this._owner.touchable
        };
        this._storage = {};
    }
    addStatus(pageId, buffer) {
        var gv;
        if (!pageId)
            gv = this._default;
        else {
            gv = {};
            this._storage[pageId] = gv;
        }
        gv.alpha = buffer.readFloat();
        gv.rotation = buffer.readFloat();
        gv.grayed = buffer.readBool();
        gv.touchable = buffer.readBool();
    }
    apply() {
        var gv = this._storage[this._controller.selectedPageId] || this._default;
        if (this.allowTween) {
            this._owner._gearLocked = true;
            this._owner.grayed = gv.grayed;
            this._owner.touchable = gv.touchable;
            this._owner._gearLocked = false;
            if (this._tweenConfig._tweener) {
                if (this._tweenConfig._tweener.endValue.x != gv.alpha || this._tweenConfig._tweener.endValue.y != gv.rotation) {
                    this._tweenConfig._tweener.kill(true);
                    this._tweenConfig._tweener = null;
                }
                else
                    return;
            }
            var a = gv.alpha != this._owner.alpha;
            var b = gv.rotation != this._owner.rotation;
            if (a || b) {
                if (this._owner.checkGearController(0, this._controller))
                    this._tweenConfig._displayLockToken = this._owner.addDisplayLock();
                this._tweenConfig._tweener = GTween.to2(this._owner.alpha, this._owner.rotation, gv.alpha, gv.rotation, this._tweenConfig.duration)
                    .setDelay(this._tweenConfig.delay)
                    .setEase(this._tweenConfig.easeType)
                    .setUserData((a ? 1 : 0) + (b ? 2 : 0))
                    .setTarget(this)
                    .onUpdate(this.__tweenUpdate, this)
                    .onComplete(this.__tweenComplete, this);
            }
        }
        else {
            this._owner._gearLocked = true;
            this._owner.grayed = gv.grayed;
            this._owner.alpha = gv.alpha;
            this._owner.rotation = gv.rotation;
            this._owner.touchable = gv.touchable;
            this._owner._gearLocked = false;
        }
    }
    __tweenUpdate(tweener) {
        var flag = tweener.userData;
        this._owner._gearLocked = true;
        if ((flag & 1) != 0)
            this._owner.alpha = tweener.value.x;
        if ((flag & 2) != 0)
            this._owner.rotation = tweener.value.y;
        this._owner._gearLocked = false;
    }
    __tweenComplete() {
        if (this._tweenConfig._displayLockToken != 0) {
            this._owner.releaseDisplayLock(this._tweenConfig._displayLockToken);
            this._tweenConfig._displayLockToken = 0;
        }
        this._tweenConfig._tweener = null;
    }
    updateState() {
        var gv = this._storage[this._controller.selectedPageId];
        if (!gv) {
            gv = {};
            this._storage[this._controller.selectedPageId] = gv;
        }
        gv.alpha = this._owner.alpha;
        gv.rotation = this._owner.rotation;
        gv.grayed = this._owner.grayed;
        gv.touchable = this._owner.touchable;
    }
}

class GearSize extends GearBase {
    init() {
        this._default = {
            width: this._owner.width,
            height: this._owner.height,
            scaleX: this._owner.scaleX,
            scaleY: this._owner.scaleY
        };
        this._storage = {};
    }
    addStatus(pageId, buffer) {
        var gv;
        if (!pageId)
            gv = this._default;
        else {
            gv = {};
            this._storage[pageId] = gv;
        }
        gv.width = buffer.readInt();
        gv.height = buffer.readInt();
        gv.scaleX = buffer.readFloat();
        gv.scaleY = buffer.readFloat();
    }
    apply() {
        var gv = this._storage[this._controller.selectedPageId] || this._default;
        if (this.allowTween) {
            if (this._tweenConfig._tweener) {
                if (this._tweenConfig._tweener.endValue.x != gv.width || this._tweenConfig._tweener.endValue.y != gv.height
                    || this._tweenConfig._tweener.endValue.z != gv.scaleX || this._tweenConfig._tweener.endValue.w != gv.scaleY) {
                    this._tweenConfig._tweener.kill(true);
                    this._tweenConfig._tweener = null;
                }
                else
                    return;
            }
            var a = gv.width != this._owner.width || gv.height != this._owner.height;
            var b = gv.scaleX != this._owner.scaleX || gv.scaleY != this._owner.scaleY;
            if (a || b) {
                if (this._owner.checkGearController(0, this._controller))
                    this._tweenConfig._displayLockToken = this._owner.addDisplayLock();
                this._tweenConfig._tweener = GTween.to4(this._owner.width, this._owner.height, this._owner.scaleX, this._owner.scaleY, gv.width, gv.height, gv.scaleX, gv.scaleY, this._tweenConfig.duration)
                    .setDelay(this._tweenConfig.delay)
                    .setEase(this._tweenConfig.easeType)
                    .setUserData((a ? 1 : 0) + (b ? 2 : 0))
                    .setTarget(this)
                    .onUpdate(this.__tweenUpdate, this)
                    .onComplete(this.__tweenComplete, this);
            }
        }
        else {
            this._owner._gearLocked = true;
            this._owner.setSize(gv.width, gv.height, this._owner.checkGearController(1, this._controller));
            this._owner.setScale(gv.scaleX, gv.scaleY);
            this._owner._gearLocked = false;
        }
    }
    __tweenUpdate(tweener) {
        var flag = tweener.userData;
        this._owner._gearLocked = true;
        if ((flag & 1) != 0)
            this._owner.setSize(tweener.value.x, tweener.value.y, this._owner.checkGearController(1, this._controller));
        if ((flag & 2) != 0)
            this._owner.setScale(tweener.value.z, tweener.value.w);
        this._owner._gearLocked = false;
    }
    __tweenComplete() {
        if (this._tweenConfig._displayLockToken != 0) {
            this._owner.releaseDisplayLock(this._tweenConfig._displayLockToken);
            this._tweenConfig._displayLockToken = 0;
        }
        this._tweenConfig._tweener = null;
    }
    updateState() {
        var gv = this._storage[this._controller.selectedPageId];
        if (!gv) {
            gv = {};
            this._storage[this._controller.selectedPageId] = gv;
        }
        gv.width = this._owner.width;
        gv.height = this._owner.height;
        gv.scaleX = this._owner.scaleX;
        gv.scaleY = this._owner.scaleY;
    }
    updateFromRelations(dx, dy) {
        if (this._controller == null || this._storage == null)
            return;
        for (var key in this._storage) {
            var gv = this._storage[key];
            gv.width += dx;
            gv.height += dy;
        }
        this._default.width += dx;
        this._default.height += dy;
        this.updateState();
    }
}

class GearText extends GearBase {
    init() {
        this._default = this._owner.text;
        this._storage = {};
    }
    addStatus(pageId, buffer) {
        if (pageId == null)
            this._default = buffer.readS();
        else
            this._storage[pageId] = buffer.readS();
    }
    apply() {
        this._owner._gearLocked = true;
        var data = this._storage[this._controller.selectedPageId];
        if (data !== undefined)
            this._owner.text = data;
        else
            this._owner.text = this._default;
        this._owner._gearLocked = false;
    }
    updateState() {
        this._storage[this._controller.selectedPageId] = this._owner.text;
    }
}

class GearXY extends GearBase {
    init() {
        this._default = {
            x: this._owner.x,
            y: this._owner.y,
            px: this._owner.x / this._owner.parent.width,
            py: this._owner.y / this._owner.parent.height
        };
        this._storage = {};
    }
    addStatus(pageId, buffer) {
        var gv;
        if (!pageId)
            gv = this._default;
        else {
            gv = {};
            this._storage[pageId] = gv;
        }
        gv.x = buffer.readInt();
        gv.y = buffer.readInt();
    }
    addExtStatus(pageId, buffer) {
        var gv;
        if (!pageId)
            gv = this._default;
        else
            gv = this._storage[pageId];
        gv.px = buffer.readFloat();
        gv.py = buffer.readFloat();
    }
    apply() {
        var pt = this._storage[this._controller.selectedPageId] || this._default;
        var ex;
        var ey;
        if (this.positionsInPercent && this._owner.parent) {
            ex = pt.px * this._owner.parent.width;
            ey = pt.py * this._owner.parent.height;
        }
        else {
            ex = pt.x;
            ey = pt.y;
        }
        if (this.allowTween) {
            if (this._tweenConfig._tweener) {
                if (this._tweenConfig._tweener.endValue.x != ex || this._tweenConfig._tweener.endValue.y != ey) {
                    this._tweenConfig._tweener.kill(true);
                    this._tweenConfig._tweener = null;
                }
                else
                    return;
            }
            var ox = this._owner.x;
            var oy = this._owner.y;
            if (ox != ex || oy != ey) {
                if (this._owner.checkGearController(0, this._controller))
                    this._tweenConfig._displayLockToken = this._owner.addDisplayLock();
                this._tweenConfig._tweener = GTween.to2(ox, oy, ex, ey, this._tweenConfig.duration)
                    .setDelay(this._tweenConfig.delay)
                    .setEase(this._tweenConfig.easeType)
                    .setTarget(this)
                    .onUpdate(this.__tweenUpdate, this)
                    .onComplete(this.__tweenComplete, this);
            }
        }
        else {
            this._owner._gearLocked = true;
            this._owner.setPosition(ex, ey);
            this._owner._gearLocked = false;
        }
    }
    __tweenUpdate(tweener) {
        this._owner._gearLocked = true;
        this._owner.setPosition(tweener.value.x, tweener.value.y);
        this._owner._gearLocked = false;
    }
    __tweenComplete() {
        if (this._tweenConfig._displayLockToken != 0) {
            this._owner.releaseDisplayLock(this._tweenConfig._displayLockToken);
            this._tweenConfig._displayLockToken = 0;
        }
        this._tweenConfig._tweener = null;
    }
    updateState() {
        var pt = this._storage[this._controller.selectedPageId];
        if (!pt) {
            pt = {};
            this._storage[this._controller.selectedPageId] = pt;
        }
        pt.x = this._owner.x;
        pt.y = this._owner.y;
        pt.px = this._owner.x / this._owner.parent.width;
        pt.py = this._owner.y / this._owner.parent.height;
    }
    updateFromRelations(dx, dy) {
        if (this._controller == null || this._storage == null || this.positionsInPercent)
            return;
        for (var key in this._storage) {
            var pt = this._storage[key];
            pt.x += dx;
            pt.y += dy;
        }
        this._default.x += dx;
        this._default.y += dy;
        this.updateState();
    }
}

class Rect {
    constructor(x, y, width, height) {
        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 0;
        this.height = height || 0;
    }
    set(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    setMinMax(xMin, yMin, xMax, yMax) {
        this.x = xMin;
        this.y = yMin;
        this.width = xMax - xMin;
        this.height = yMax - yMin;
    }
    get position() {
        return new Vec2(this.x, this.y);
    }
    get size() {
        return new Vec2(this.width, this.height);
    }
    get xMin() {
        return this.x;
    }
    set xMin(value) {
        let d = value - this.x;
        this.x = value;
        this.width -= d;
    }
    get xMax() {
        return this.x + this.width;
    }
    set xMax(value) {
        this.width = value - this.x;
    }
    get yMin() {
        return this.y;
    }
    set yMin(value) {
        let d = value - this.y;
        this.y = value;
        this.height -= d;
    }
    get yMax() {
        return this.y + this.height;
    }
    set yMax(value) {
        this.height = value - this.y;
    }
    intersection(another) {
        if (this.width == 0 || this.height == 0 || another.width == 0 || another.height == 0)
            return new Rect(0, 0, 0, 0);
        let left = this.x > another.x ? this.x : another.x;
        let right = this.xMax < another.xMax ? this.xMax : another.xMax;
        let top = this.y > another.y ? this.y : another.y;
        let bottom = this.yMax < another.yMax ? this.yMax : another.yMax;
        if (left > right || top > bottom)
            this.set(0, 0, 0, 0);
        else
            this.setMinMax(left, top, right, bottom);
        return this;
    }
    union(another) {
        if (another.width == 0 || another.height == 0)
            return this;
        if (this.width == 0 || this.height == 0) {
            this.copy(another);
            return this;
        }
        let x = Math.min(this.x, another.x);
        let y = Math.min(this.y, another.y);
        this.setMinMax(x, y, Math.max(this.xMax, another.xMax), Math.max(this.yMax, another.yMax));
        return this;
    }
    extend(x, y) {
        this.x -= x;
        this.y -= y;
        this.width += x * 2;
        this.height += y * 2;
    }
    contains(x, y) {
        if (x instanceof Vec2) {
            y = x.y;
            x = x.x;
        }
        return x >= this.x && x < this.x + this.width && y >= this.y && y < this.y + this.height;
    }
    copy(source) {
        this.set(source.x, source.y, source.width, source.height);
    }
    clone() {
        return new Rect(this.x, this.y, this.width, this.height);
    }
    equals(another) {
        return this.x == another.x && this.y == another.y && this.width == another.width && this.height == another.height;
    }
}

class RelationItem {
    constructor(owner) {
        this._owner = owner;
        this._defs = new Array();
    }
    get owner() {
        return this._owner;
    }
    set target(value) {
        if (this._target != value) {
            if (this._target)
                this.releaseRefTarget();
            this._target = value;
            if (this._target)
                this.addRefTarget();
        }
    }
    get target() {
        return this._target;
    }
    add(relationType, usePercent) {
        if (relationType == RelationType.Size) {
            this.add(RelationType.Width, usePercent);
            this.add(RelationType.Height, usePercent);
            return;
        }
        var cnt = this._defs.length;
        for (var i = 0; i < cnt; i++) {
            if (this._defs[i].type == relationType)
                return;
        }
        this.internalAdd(relationType, usePercent);
    }
    internalAdd(relationType, usePercent) {
        if (relationType == RelationType.Size) {
            this.internalAdd(RelationType.Width, usePercent);
            this.internalAdd(RelationType.Height, usePercent);
            return;
        }
        var info = new RelationDef();
        info.percent = usePercent;
        info.type = relationType;
        info.axis = (relationType <= RelationType.Right_Right || relationType == RelationType.Width || relationType >= RelationType.LeftExt_Left && relationType <= RelationType.RightExt_Right) ? 0 : 1;
        this._defs.push(info);
    }
    remove(relationType) {
        if (relationType == RelationType.Size) {
            this.remove(RelationType.Width);
            this.remove(RelationType.Height);
            return;
        }
        var dc = this._defs.length;
        for (var k = 0; k < dc; k++) {
            if (this._defs[k].type == relationType) {
                this._defs.splice(k, 1);
                break;
            }
        }
    }
    copy(source) {
        this.target = source.target;
        this._defs.length = 0;
        var cnt = source._defs.length;
        for (var i = 0; i < cnt; i++) {
            var info = source._defs[i];
            var info2 = new RelationDef();
            info2.copy(info);
            this._defs.push(info2);
        }
    }
    dispose() {
        if (this._target) {
            this.releaseRefTarget();
            this._target = null;
        }
    }
    get isEmpty() {
        return this._defs.length == 0;
    }
    applyOnSelfResized(dWidth, dHeight, applyPivot) {
        var cnt = this._defs.length;
        if (cnt == 0)
            return;
        var ox = this._owner.x;
        var oy = this._owner.y;
        for (var i = 0; i < cnt; i++) {
            var info = this._defs[i];
            switch (info.type) {
                case RelationType.Center_Center:
                    this._owner.x -= (0.5 - (applyPivot ? this._owner.pivotX : 0)) * dWidth;
                    break;
                case RelationType.Right_Center:
                case RelationType.Right_Left:
                case RelationType.Right_Right:
                    this._owner.x -= (1 - (applyPivot ? this._owner.pivotX : 0)) * dWidth;
                    break;
                case RelationType.Middle_Middle:
                    this._owner.y -= (0.5 - (applyPivot ? this._owner.pivotY : 0)) * dHeight;
                    break;
                case RelationType.Bottom_Middle:
                case RelationType.Bottom_Top:
                case RelationType.Bottom_Bottom:
                    this._owner.y -= (1 - (applyPivot ? this._owner.pivotY : 0)) * dHeight;
                    break;
            }
        }
        if (ox != this._owner.x || oy != this._owner.y) {
            ox = this._owner.x - ox;
            oy = this._owner.y - oy;
            this._owner.updateGearFromRelations(1, ox, oy);
            if (this._owner.parent && this._owner.parent._transitions.length > 0) {
                cnt = this._owner.parent._transitions.length;
                for (var j = 0; j < cnt; j++) {
                    var trans = this._owner.parent._transitions[j];
                    trans.updateFromRelations(this._owner.id, ox, oy);
                }
            }
        }
    }
    applyOnXYChanged(info, dx, dy) {
        var tmp;
        switch (info.type) {
            case RelationType.Left_Left:
            case RelationType.Left_Center:
            case RelationType.Left_Right:
            case RelationType.Center_Center:
            case RelationType.Right_Left:
            case RelationType.Right_Center:
            case RelationType.Right_Right:
                this._owner.x += dx;
                break;
            case RelationType.Top_Top:
            case RelationType.Top_Middle:
            case RelationType.Top_Bottom:
            case RelationType.Middle_Middle:
            case RelationType.Bottom_Top:
            case RelationType.Bottom_Middle:
            case RelationType.Bottom_Bottom:
                this._owner.y += dy;
                break;
            case RelationType.Width:
            case RelationType.Height:
                break;
            case RelationType.LeftExt_Left:
            case RelationType.LeftExt_Right:
                if (this._owner != this._target.parent) {
                    tmp = this._owner.xMin;
                    this._owner.width = this._owner._rawWidth - dx;
                    this._owner.xMin = tmp + dx;
                }
                else
                    this._owner.width = this._owner._rawWidth - dx;
                break;
            case RelationType.RightExt_Left:
            case RelationType.RightExt_Right:
                if (this._owner != this._target.parent) {
                    tmp = this._owner.xMin;
                    this._owner.width = this._owner._rawWidth + dx;
                    this._owner.xMin = tmp;
                }
                else
                    this._owner.width = this._owner._rawWidth + dx;
                break;
            case RelationType.TopExt_Top:
            case RelationType.TopExt_Bottom:
                if (this._owner != this._target.parent) {
                    tmp = this._owner.yMin;
                    this._owner.height = this._owner._rawHeight - dy;
                    this._owner.yMin = tmp + dy;
                }
                else
                    this._owner.height = this._owner._rawHeight - dy;
                break;
            case RelationType.BottomExt_Top:
            case RelationType.BottomExt_Bottom:
                if (this._owner != this._target.parent) {
                    tmp = this._owner.yMin;
                    this._owner.height = this._owner._rawHeight + dy;
                    this._owner.yMin = tmp;
                }
                else
                    this._owner.height = this._owner._rawHeight + dy;
                break;
        }
    }
    applyOnSizeChanged(info) {
        var pos = 0, pivot = 0, delta = 0;
        var v, tmp;
        if (info.axis == 0) {
            if (this._target != this._owner.parent) {
                pos = this._target.x;
                if (this._target.pivotAsAnchor)
                    pivot = this._target.pivotX;
            }
            if (info.percent) {
                if (this._targetWidth != 0)
                    delta = this._target._width / this._targetWidth;
            }
            else
                delta = this._target._width - this._targetWidth;
        }
        else {
            if (this._target != this._owner.parent) {
                pos = this._target.y;
                if (this._target.pivotAsAnchor)
                    pivot = this._target.pivotY;
            }
            if (info.percent) {
                if (this._targetHeight != 0)
                    delta = this._target._height / this._targetHeight;
            }
            else
                delta = this._target._height - this._targetHeight;
        }
        switch (info.type) {
            case RelationType.Left_Left:
                if (info.percent)
                    this._owner.xMin = pos + (this._owner.xMin - pos) * delta;
                else if (pivot != 0)
                    this._owner.x += delta * (-pivot);
                break;
            case RelationType.Left_Center:
                if (info.percent)
                    this._owner.xMin = pos + (this._owner.xMin - pos) * delta;
                else
                    this._owner.x += delta * (0.5 - pivot);
                break;
            case RelationType.Left_Right:
                if (info.percent)
                    this._owner.xMin = pos + (this._owner.xMin - pos) * delta;
                else
                    this._owner.x += delta * (1 - pivot);
                break;
            case RelationType.Center_Center:
                if (info.percent)
                    this._owner.xMin = pos + (this._owner.xMin + this._owner._rawWidth * 0.5 - pos) * delta - this._owner._rawWidth * 0.5;
                else
                    this._owner.x += delta * (0.5 - pivot);
                break;
            case RelationType.Right_Left:
                if (info.percent)
                    this._owner.xMin = pos + (this._owner.xMin + this._owner._rawWidth - pos) * delta - this._owner._rawWidth;
                else if (pivot != 0)
                    this._owner.x += delta * (-pivot);
                break;
            case RelationType.Right_Center:
                if (info.percent)
                    this._owner.xMin = pos + (this._owner.xMin + this._owner._rawWidth - pos) * delta - this._owner._rawWidth;
                else
                    this._owner.x += delta * (0.5 - pivot);
                break;
            case RelationType.Right_Right:
                if (info.percent)
                    this._owner.xMin = pos + (this._owner.xMin + this._owner._rawWidth - pos) * delta - this._owner._rawWidth;
                else
                    this._owner.x += delta * (1 - pivot);
                break;
            case RelationType.Top_Top:
                if (info.percent)
                    this._owner.yMin = pos + (this._owner.yMin - pos) * delta;
                else if (pivot != 0)
                    this._owner.y += delta * (-pivot);
                break;
            case RelationType.Top_Middle:
                if (info.percent)
                    this._owner.yMin = pos + (this._owner.yMin - pos) * delta;
                else
                    this._owner.y += delta * (0.5 - pivot);
                break;
            case RelationType.Top_Bottom:
                if (info.percent)
                    this._owner.yMin = pos + (this._owner.yMin - pos) * delta;
                else
                    this._owner.y += delta * (1 - pivot);
                break;
            case RelationType.Middle_Middle:
                if (info.percent)
                    this._owner.yMin = pos + (this._owner.yMin + this._owner._rawHeight * 0.5 - pos) * delta - this._owner._rawHeight * 0.5;
                else
                    this._owner.y += delta * (0.5 - pivot);
                break;
            case RelationType.Bottom_Top:
                if (info.percent)
                    this._owner.yMin = pos + (this._owner.yMin + this._owner._rawHeight - pos) * delta - this._owner._rawHeight;
                else if (pivot != 0)
                    this._owner.y += delta * (-pivot);
                break;
            case RelationType.Bottom_Middle:
                if (info.percent)
                    this._owner.yMin = pos + (this._owner.yMin + this._owner._rawHeight - pos) * delta - this._owner._rawHeight;
                else
                    this._owner.y += delta * (0.5 - pivot);
                break;
            case RelationType.Bottom_Bottom:
                if (info.percent)
                    this._owner.yMin = pos + (this._owner.yMin + this._owner._rawHeight - pos) * delta - this._owner._rawHeight;
                else
                    this._owner.y += delta * (1 - pivot);
                break;
            case RelationType.Width:
                if (this._owner._underConstruct && this._owner == this._target.parent)
                    v = this._owner.sourceWidth - this._target.initWidth;
                else
                    v = this._owner._rawWidth - this._targetWidth;
                if (info.percent)
                    v = v * delta;
                if (this._target == this._owner.parent) {
                    if (this._owner.pivotAsAnchor) {
                        tmp = this._owner.xMin;
                        this._owner.setSize(this._target._width + v, this._owner._rawHeight, true);
                        this._owner.xMin = tmp;
                    }
                    else
                        this._owner.setSize(this._target._width + v, this._owner._rawHeight, true);
                }
                else
                    this._owner.width = this._target._width + v;
                break;
            case RelationType.Height:
                if (this._owner._underConstruct && this._owner == this._target.parent)
                    v = this._owner.sourceHeight - this._target.initHeight;
                else
                    v = this._owner._rawHeight - this._targetHeight;
                if (info.percent)
                    v = v * delta;
                if (this._target == this._owner.parent) {
                    if (this._owner.pivotAsAnchor) {
                        tmp = this._owner.yMin;
                        this._owner.setSize(this._owner._rawWidth, this._target._height + v, true);
                        this._owner.yMin = tmp;
                    }
                    else
                        this._owner.setSize(this._owner._rawWidth, this._target._height + v, true);
                }
                else
                    this._owner.height = this._target._height + v;
                break;
            case RelationType.LeftExt_Left:
                tmp = this._owner.xMin;
                if (info.percent)
                    v = pos + (tmp - pos) * delta - tmp;
                else
                    v = delta * (-pivot);
                this._owner.width = this._owner._rawWidth - v;
                this._owner.xMin = tmp + v;
                break;
            case RelationType.LeftExt_Right:
                tmp = this._owner.xMin;
                if (info.percent)
                    v = pos + (tmp - pos) * delta - tmp;
                else
                    v = delta * (1 - pivot);
                this._owner.width = this._owner._rawWidth - v;
                this._owner.xMin = tmp + v;
                break;
            case RelationType.RightExt_Left:
                tmp = this._owner.xMin;
                if (info.percent)
                    v = pos + (tmp + this._owner._rawWidth - pos) * delta - (tmp + this._owner._rawWidth);
                else
                    v = delta * (-pivot);
                this._owner.width = this._owner._rawWidth + v;
                this._owner.xMin = tmp;
                break;
            case RelationType.RightExt_Right:
                tmp = this._owner.xMin;
                if (info.percent) {
                    if (this._owner == this._target.parent) {
                        if (this._owner._underConstruct)
                            this._owner.width = pos + this._target._width - this._target._width * pivot +
                                (this._owner.sourceWidth - pos - this._target.initWidth + this._target.initWidth * pivot) * delta;
                        else
                            this._owner.width = pos + (this._owner._rawWidth - pos) * delta;
                    }
                    else {
                        v = pos + (tmp + this._owner._rawWidth - pos) * delta - (tmp + this._owner._rawWidth);
                        this._owner.width = this._owner._rawWidth + v;
                        this._owner.xMin = tmp;
                    }
                }
                else {
                    if (this._owner == this._target.parent) {
                        if (this._owner._underConstruct)
                            this._owner.width = this._owner.sourceWidth + (this._target._width - this._target.initWidth) * (1 - pivot);
                        else
                            this._owner.width = this._owner._rawWidth + delta * (1 - pivot);
                    }
                    else {
                        v = delta * (1 - pivot);
                        this._owner.width = this._owner._rawWidth + v;
                        this._owner.xMin = tmp;
                    }
                }
                break;
            case RelationType.TopExt_Top:
                tmp = this._owner.yMin;
                if (info.percent)
                    v = pos + (tmp - pos) * delta - tmp;
                else
                    v = delta * (-pivot);
                this._owner.height = this._owner._rawHeight - v;
                this._owner.yMin = tmp + v;
                break;
            case RelationType.TopExt_Bottom:
                tmp = this._owner.yMin;
                if (info.percent)
                    v = pos + (tmp - pos) * delta - tmp;
                else
                    v = delta * (1 - pivot);
                this._owner.height = this._owner._rawHeight - v;
                this._owner.yMin = tmp + v;
                break;
            case RelationType.BottomExt_Top:
                tmp = this._owner.yMin;
                if (info.percent)
                    v = pos + (tmp + this._owner._rawHeight - pos) * delta - (tmp + this._owner._rawHeight);
                else
                    v = delta * (-pivot);
                this._owner.height = this._owner._rawHeight + v;
                this._owner.yMin = tmp;
                break;
            case RelationType.BottomExt_Bottom:
                tmp = this._owner.yMin;
                if (info.percent) {
                    if (this._owner == this._target.parent) {
                        if (this._owner._underConstruct)
                            this._owner.height = pos + this._target._height - this._target._height * pivot +
                                (this._owner.sourceHeight - pos - this._target.initHeight + this._target.initHeight * pivot) * delta;
                        else
                            this._owner.height = pos + (this._owner._rawHeight - pos) * delta;
                    }
                    else {
                        v = pos + (tmp + this._owner._rawHeight - pos) * delta - (tmp + this._owner._rawHeight);
                        this._owner.height = this._owner._rawHeight + v;
                        this._owner.yMin = tmp;
                    }
                }
                else {
                    if (this._owner == this._target.parent) {
                        if (this._owner._underConstruct)
                            this._owner.height = this._owner.sourceHeight + (this._target._height - this._target.initHeight) * (1 - pivot);
                        else
                            this._owner.height = this._owner._rawHeight + delta * (1 - pivot);
                    }
                    else {
                        v = delta * (1 - pivot);
                        this._owner.height = this._owner._rawHeight + v;
                        this._owner.yMin = tmp;
                    }
                }
                break;
        }
    }
    addRefTarget() {
        if (this._target != this._owner.parent)
            this._target.on("pos_changed", this.__targetXYChanged, this);
        this._target.on("size_changed", this.__targetSizeChanged, this);
        this._targetX = this._target.x;
        this._targetY = this._target.y;
        this._targetWidth = this._target._width;
        this._targetHeight = this._target._height;
    }
    releaseRefTarget() {
        if (this._target.element == null)
            return;
        this._target.off("pos_changed", this.__targetXYChanged, this);
        this._target.off("size_changed", this.__targetSizeChanged, this);
    }
    __targetXYChanged() {
        if (this._owner.relations.handling || this._owner.group && this._owner.group._updating) {
            this._targetX = this._target.x;
            this._targetY = this._target.y;
            return;
        }
        this._owner.relations.handling = this._target;
        var ox = this._owner.x;
        var oy = this._owner.y;
        var dx = this._target.x - this._targetX;
        var dy = this._target.y - this._targetY;
        var cnt = this._defs.length;
        for (var i = 0; i < cnt; i++) {
            this.applyOnXYChanged(this._defs[i], dx, dy);
        }
        this._targetX = this._target.x;
        this._targetY = this._target.y;
        if (ox != this._owner.x || oy != this._owner.y) {
            ox = this._owner.x - ox;
            oy = this._owner.y - oy;
            this._owner.updateGearFromRelations(1, ox, oy);
            if (this._owner.parent && this._owner.parent._transitions.length > 0) {
                cnt = this._owner.parent._transitions.length;
                for (var j = 0; j < cnt; j++) {
                    var trans = this._owner.parent._transitions[j];
                    trans.updateFromRelations(this._owner.id, ox, oy);
                }
            }
        }
        this._owner.relations.handling = null;
    }
    __targetSizeChanged() {
        if (this._owner.relations.handling) {
            this._targetWidth = this._target._width;
            this._targetHeight = this._target._height;
            return;
        }
        this._owner.relations.handling = this._target;
        var ox = this._owner.x;
        var oy = this._owner.y;
        var ow = this._owner._rawWidth;
        var oh = this._owner._rawHeight;
        var cnt = this._defs.length;
        for (var i = 0; i < cnt; i++) {
            this.applyOnSizeChanged(this._defs[i]);
        }
        this._targetWidth = this._target._width;
        this._targetHeight = this._target._height;
        if (ox != this._owner.x || oy != this._owner.y) {
            ox = this._owner.x - ox;
            oy = this._owner.y - oy;
            this._owner.updateGearFromRelations(1, ox, oy);
            if (this._owner.parent && this._owner.parent._transitions.length > 0) {
                cnt = this._owner.parent._transitions.length;
                for (var j = 0; j < cnt; j++) {
                    var trans = this._owner.parent._transitions[j];
                    trans.updateFromRelations(this._owner.id, ox, oy);
                }
            }
        }
        if (ow != this._owner._rawWidth || oh != this._owner._rawHeight) {
            ow = this._owner._rawWidth - ow;
            oh = this._owner._rawHeight - oh;
            this._owner.updateGearFromRelations(2, ow, oh);
        }
        this._owner.relations.handling = null;
    }
}
class RelationDef {
    constructor() {
    }
    copy(source) {
        this.percent = source.percent;
        this.type = source.type;
        this.axis = source.axis;
    }
}

class Relations {
    constructor(owner) {
        this._owner = owner;
        this._items = [];
    }
    add(target, relationType, usePercent) {
        var length = this._items.length;
        for (var i = 0; i < length; i++) {
            var item = this._items[i];
            if (item.target == target) {
                item.add(relationType, usePercent);
                return;
            }
        }
        var newItem = new RelationItem(this._owner);
        newItem.target = target;
        newItem.add(relationType, usePercent);
        this._items.push(newItem);
    }
    remove(target, relationType) {
        relationType = relationType || 0;
        var cnt = this._items.length;
        var i = 0;
        while (i < cnt) {
            var item = this._items[i];
            if (item.target == target) {
                item.remove(relationType);
                if (item.isEmpty) {
                    item.dispose();
                    this._items.splice(i, 1);
                    cnt--;
                }
                else
                    i++;
            }
            else
                i++;
        }
    }
    contains(target) {
        var length = this._items.length;
        for (var i = 0; i < length; i++) {
            var item = this._items[i];
            if (item.target == target)
                return true;
        }
        return false;
    }
    clearFor(target) {
        var cnt = this._items.length;
        var i = 0;
        while (i < cnt) {
            var item = this._items[i];
            if (item.target == target) {
                item.dispose();
                this._items.splice(i, 1);
                cnt--;
            }
            else
                i++;
        }
    }
    clearAll() {
        var length = this._items.length;
        for (var i = 0; i < length; i++) {
            var item = this._items[i];
            item.dispose();
        }
        this._items.length = 0;
    }
    copyFrom(source) {
        this.clearAll();
        var arr = source._items;
        var length = arr.length;
        for (var i = 0; i < length; i++) {
            var ri = arr[i];
            var item = new RelationItem(this._owner);
            item.copy(ri);
            this._items.push(item);
        }
    }
    dispose() {
        this.clearAll();
    }
    onOwnerSizeChanged(dWidth, dHeight, applyPivot) {
        if (this._items.length == 0)
            return;
        var length = this._items.length;
        for (var i = 0; i < length; i++) {
            var item = this._items[i];
            item.applyOnSelfResized(dWidth, dHeight, applyPivot);
        }
    }
    get empty() {
        return this._items.length == 0;
    }
    setup(buffer, parentToChild) {
        var cnt = buffer.readByte();
        var target;
        for (var i = 0; i < cnt; i++) {
            var targetIndex = buffer.readShort();
            if (targetIndex == -1)
                target = this._owner.parent;
            else if (parentToChild)
                target = (this._owner).getChildAt(targetIndex);
            else
                target = this._owner.parent.getChildAt(targetIndex);
            var newItem = new RelationItem(this._owner);
            newItem.target = target;
            this._items.push(newItem);
            var cnt2 = buffer.readByte();
            for (var j = 0; j < cnt2; j++) {
                var rt = buffer.readByte();
                var usePercent = buffer.readBool();
                newItem.internalAdd(rt, usePercent);
            }
        }
    }
}

class Color {
    constructor(r = 1, g = 1, b = 1, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    setRGB(rgb) {
        this.r = ((rgb >> 16) & 0xFF) / 255;
        this.g = ((rgb >> 8) & 0xFF) / 255;
        this.b = (rgb & 0xFF) / 255;
    }
    copyTo(destObject) {
        var destColor = destObject;
        destColor.r = this.r;
        destColor.g = this.g;
        destColor.b = this.b;
        destColor.a = this.a;
    }
    clone() {
        var dest = new Color();
        this.copyTo(dest);
        return dest;
    }
    getHex() {
        return (Math.round(this.r * 255) << 16) + (Math.round(this.g * 255) << 8) + Math.round(this.b * 255);
    }
    toHexString() {
        return "#" + ('000000' + this.getHex().toString(16)).slice(-6);
    }
    toStyleString() {
        if (this.a == 1)
            return this.toHexString();
        else
            return "rgba(" + Math.round(this.r * 255) + "," + Math.round(this.g * 255) + "," + Math.round(this.b * 255) + "," + this.a + ")";
    }
    parseHexString(str) {
        if (str.length < 1)
            return Color.BLACK;
        if (str.charAt(0) == "#")
            str = str.substr(1);
        let rgb;
        let a = 255;
        if (str.length == 8) {
            a = parseInt(str.substr(0, 2), 16);
            rgb = parseInt(str.substr(2), 16);
        }
        else
            rgb = parseInt(str, 16);
        this.r = ((rgb >> 16) & 0xFF) / 255;
        this.g = ((rgb >> 8) & 0xFF) / 255;
        this.b = (rgb & 0xFF) / 255;
        this.a = a / 255;
    }
    static fromHexString(str) {
        let c = new Color();
        c.parseHexString(str);
        return c;
    }
}
Color.CLEAR = new Color(0, 0, 0, 0);
Color.RED = new Color(1, 0, 0, 1);
Color.GREEN = new Color(0, 1, 0, 1);
Color.BLUE = new Color(0, 0, 1, 1);
Color.YELLOW = new Color(1, 1, 0, 1);
Color.GRAY = new Color(0.5, 0.5, 0.5, 1);
Color.BLACK = new Color(0, 0, 0, 1);
Color.WHITE = new Color(1, 1, 1, 1);

class UIConfig {
}
//When a modal window is in front, the background becomes dark.
UIConfig.modalLayerColor = new Color(0.2, 0.2, 0.2, 0.2);
//Default button click sound
UIConfig.buttonSound = null;
UIConfig.buttonSoundVolumeScale = 1;
//Default button click sound
UIConfig.horizontalScrollBar = null;
UIConfig.verticalScrollBar = null;
//Scrolling step in pixels
UIConfig.defaultScrollStep = 25;
//Deceleration ratio of scrollpane when its in touch dragging.
UIConfig.defaultScrollDecelerationRate = 0.967;
//Default scrollbar display mode. Recommened visible for Desktop and Auto for mobile.
UIConfig.defaultScrollBarDisplay = ScrollBarDisplayType.Visible;
//Allow dragging the content to scroll. Recommeded true for mobile.
UIConfig.defaultScrollTouchEffect = true;
//The "rebound" effect in the scolling container. Recommeded true for mobile.
UIConfig.defaultScrollBounceEffect = true;
/**
* 当滚动容器设置为“贴近ITEM”时，判定贴近到哪一个ITEM的滚动距离阀值。
*/
UIConfig.defaultScrollSnappingThreshold = 0.1;
/**
* 当滚动容器设置为“页面模式”时，判定翻到哪一页的滚动距离阀值。
*/
UIConfig.defaultScrollPagingThreshold = 0.3;
//Resources for PopupMenu.
UIConfig.popupMenu = null;
//Resources for seperator of PopupMenu.
UIConfig.popupMenu_seperator = null;
//In case of failure of loading content for GLoader, use this sign to indicate an error.
UIConfig.loaderErrorSign = null;
//Resources for tooltips.
UIConfig.tooltipsWin = null;
//Max items displayed in combobox without scrolling.
UIConfig.defaultComboBoxVisibleItemCount = 10;
// Pixel offsets of finger to trigger scrolling.
UIConfig.touchScrollSensitivity = 20;
// Pixel offsets of finger to trigger dragging.
UIConfig.touchDragSensitivity = 10;
// Pixel offsets of mouse pointer to trigger dragging.
UIConfig.clickDragSensitivity = 2;
// When click the window, brings to front automatically.
UIConfig.bringWindowToFrontOnClick = true;
UIConfig.frameTimeForAsyncUIConstruction = 2;
UIConfig.defaultLinkClass = "fgui-link";
UIConfig.scaleLevel = 0;
let dpr = window.devicePixelRatio;
if (dpr > 3)
    UIConfig.scaleLevel = 3; //x4
else if (dpr > 2)
    UIConfig.scaleLevel = 2; //x3
else if (dpr > 1)
    UIConfig.scaleLevel = 1; //x2
else
    UIConfig.scaleLevel = 0;

class GObject extends EventDispatcher {
    constructor() {
        super();
        this._x = 0;
        this._y = 0;
        this._z = 0;
        this._alpha = 1;
        this._visible = true;
        this._touchable = true;
        this._scaleX = 1;
        this._scaleY = 1;
        this._skewX = 0;
        this._skewY = 0;
        this._pivotX = 0;
        this._pivotY = 0;
        this._sortingOrder = 0;
        this._internalVisible = true;
        this.minWidth = 0;
        this.minHeight = 0;
        this.maxWidth = 0;
        this.maxHeight = 0;
        this.sourceWidth = 0;
        this.sourceHeight = 0;
        this.initWidth = 0;
        this.initHeight = 0;
        /** @internal */
        this._width = 0;
        /** @internal */
        this._height = 0;
        /** @internal */
        this._rawWidth = 0;
        /** @internal */
        this._rawHeight = 0;
        /** @internal */
        this._sizePercentInGroup = 0;
        //drag support
        //-------------------------------------------------------------------
        this._dragStartPos = new Vec2();
        this._dragTesting = false;
        this._id = "" + gInstanceCounter++;
        this._name = "";
        this.createElement();
        this._element.$owner = this;
        this._relations = new Relations(this);
        this._gears = new Array(10);
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this.setPosition(value, this._y);
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this.setPosition(this._x, value);
    }
    get z() {
        return this._z;
    }
    set z(value) {
        this.setPosition(this._x, this._y, value);
    }
    setPosition(xv, yv, zv) {
        if (this._x != xv || this._y != yv) {
            var dx = xv - this._x;
            var dy = yv - this._y;
            this._x = xv;
            this._y = yv;
            if (zv != null)
                this._z = zv;
            this.handlePositionChanged();
            if (this instanceof GGroup)
                this.moveChildren(dx, dy);
            this.updateGear(1);
            if (this._parent && !("setVirtual" in this._parent) /*not list*/) {
                this._parent.setBoundsChangedFlag();
                if (this._group)
                    this._group.setBoundsChangedFlag(true);
                this.emit("pos_changed");
            }
            if (GObject.draggingObject == this && !s_dragging)
                this.localToGlobalRect(0, 0, this.width, this.height, sGlobalRect);
        }
    }
    get xMin() {
        return this._pivotAsAnchor ? (this._x - this._width * this._pivotX) : this._x;
    }
    set xMin(value) {
        if (this._pivotAsAnchor)
            this.setPosition(value + this._width * this._pivotX, this._y);
        else
            this.setPosition(value, this._y);
    }
    get yMin() {
        return this._pivotAsAnchor ? (this._y - this._height * this._pivotY) : this._y;
    }
    set yMin(value) {
        if (this._pivotAsAnchor)
            this.setPosition(this._x, value + this._height * this._pivotY);
        else
            this.setPosition(this._x, value);
    }
    center(restraint) {
        var r;
        if (this._parent)
            r = this.parent;
        else
            r = GRoot.getInst(this);
        this.setPosition(Math.floor((r.width - this.width) / 2), Math.floor((r.height - this.height) / 2));
        if (restraint) {
            this.addRelation(r, RelationType.Center_Center);
            this.addRelation(r, RelationType.Middle_Middle);
        }
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this.setSize(value, this._rawHeight);
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this.setSize(this._rawWidth, value);
    }
    setSize(wv, hv, ignorePivot) {
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
            var dWidth = wv - this._width;
            var dHeight = hv - this._height;
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
    setSizeDirectly(wv, hv) {
        this._rawWidth = wv;
        this._rawHeight = hv;
        if (wv < 0)
            wv = 0;
        if (hv < 0)
            hv = 0;
        this._width = wv;
        this._height = hv;
    }
    makeFullScreen() {
        let groot = GRoot.getInst(this);
        this.setSize(groot.width, groot.height);
    }
    get actualWidth() {
        return this.width * Math.abs(this._scaleX);
    }
    get actualHeight() {
        return this.height * Math.abs(this._scaleY);
    }
    get scaleX() {
        return this._scaleX;
    }
    set scaleX(value) {
        this.setScale(value, this._scaleY);
    }
    get scaleY() {
        return this._scaleY;
    }
    set scaleY(value) {
        this.setScale(this._scaleX, value);
    }
    setScale(sx, sy) {
        if (this._scaleX != sx || this._scaleY != sy) {
            this._scaleX = sx;
            this._scaleY = sy;
            this.handleScaleChanged();
            this.updateGear(2);
        }
    }
    get skewX() {
        return this._skewX;
    }
    set skewX(value) {
        this.setSkew(value, this._skewY);
    }
    get skewY() {
        return this._skewY;
    }
    set skewY(value) {
        this.setSkew(this._skewX, value);
    }
    setSkew(sx, sy) {
        if (this._skewX != sx || this._skewY != sy) {
            this._skewX = sx;
            this._skewY = sy;
            //todo skew
        }
    }
    get pivotX() {
        return this._pivotX;
    }
    set pivotX(value) {
        this.setPivot(value, this._pivotY);
    }
    get pivotY() {
        return this._pivotY;
    }
    set pivotY(value) {
        this.setPivot(this._pivotX, value);
    }
    setPivot(xv, yv, asAnchor) {
        asAnchor = asAnchor || false;
        if (this._pivotX != xv || this._pivotY != yv || this._pivotAsAnchor != asAnchor) {
            this._pivotX = xv;
            this._pivotY = yv;
            this._pivotAsAnchor = asAnchor;
            this._element.setPivot(xv, yv);
            this.handlePositionChanged();
        }
    }
    get pivotAsAnchor() {
        return this._pivotAsAnchor;
    }
    get touchable() {
        return this._touchable;
    }
    set touchable(value) {
        if (this._touchable != value) {
            this._touchable = value;
            this.updateGear(3);
            this._element.touchable = this._touchable;
        }
    }
    get grayed() {
        return this._grayed;
    }
    set grayed(value) {
        if (this._grayed != value) {
            this._grayed = value;
            this.handleGrayedChanged();
            this.updateGear(3);
        }
    }
    get enabled() {
        return !this._grayed && this._touchable;
    }
    set enabled(value) {
        this.grayed = !value;
        this.touchable = value;
    }
    get rotation() {
        return this._element.rotation;
    }
    set rotation(value) {
        if (this._element.rotation != value) {
            this._element.rotation = value;
            this.updateGear(3);
        }
    }
    get alpha() {
        return this._alpha;
    }
    set alpha(value) {
        if (this._alpha != value) {
            this._alpha = value;
            this.handleAlphaChanged();
            this.updateGear(3);
        }
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        if (this._visible != value) {
            this._visible = value;
            this.handleVisibleChanged();
            if (this._parent)
                this._parent.setBoundsChangedFlag();
            if (this._group && this._group.excludeInvisibles)
                this._group.setBoundsChangedFlag();
        }
    }
    get internalVisible() {
        return this._internalVisible && (!this._group || this._group.internalVisible);
    }
    get internalVisible2() {
        return this._visible && (!this._group || this._group.internalVisible2);
    }
    get internalVisible3() {
        return this._internalVisible && this._visible;
    }
    get sortingOrder() {
        return this._sortingOrder;
    }
    set sortingOrder(value) {
        if (value < 0)
            value = 0;
        if (this._sortingOrder != value) {
            var old = this._sortingOrder;
            this._sortingOrder = value;
            if (this._parent)
                this._parent.childSortingOrderChanged(this, old, this._sortingOrder);
        }
    }
    get tooltips() {
        return this._tooltips;
    }
    set tooltips(value) {
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
    __rollOver() {
        Timers.callDelay(100, this.__doShowTooltips, this);
    }
    __doShowTooltips() {
        GRoot.getInst(this).showTooltips(this._tooltips);
    }
    __rollOut() {
        Timers.remove(this.__doShowTooltips, this);
        GRoot.getInst(this).hideTooltips();
    }
    // public get blendMode(): Blending {
    //     return this._element.blendMode;
    // }
    // public set blendMode(value: Blending) {
    //     this._element.blendMode = value;
    // }
    get focusable() {
        return this._element.focusable;
    }
    set focusable(value) {
        this._element.focusable = value;
    }
    get tabStop() {
        return this._element.tabStop;
    }
    set tabStop(value) {
        this._element.tabStop = value;
    }
    get focused() {
        return this._element.focused;
    }
    requestFocus(byKey) {
        if (this.onStage)
            this._element.stage.setFocus(this._element, byKey);
    }
    get cursor() {
        return this._element.cursor;
    }
    set cursor(value) {
        this._element.cursor = value;
    }
    get onStage() {
        return this._element.onStage;
    }
    get resourceURL() {
        if (this.packageItem)
            return "ui://" + this.packageItem.owner.id + this.packageItem.id;
        else
            return null;
    }
    set group(value) {
        if (this._group != value) {
            if (this._group)
                this._group.setBoundsChangedFlag();
            this._group = value;
            if (this._group)
                this._group.setBoundsChangedFlag();
        }
    }
    get group() {
        return this._group;
    }
    getGear(index) {
        var gear = this._gears[index];
        if (gear == null)
            this._gears[index] = gear = createGear(this, index);
        return gear;
    }
    updateGear(index) {
        if (this._underConstruct || this._gearLocked)
            return;
        var gear = this._gears[index];
        if (gear && gear.controller)
            gear.updateState();
    }
    checkGearController(index, c) {
        return this._gears[index] && this._gears[index].controller == c;
    }
    updateGearFromRelations(index, dx, dy) {
        if (this._gears[index])
            this._gears[index].updateFromRelations(dx, dy);
    }
    addDisplayLock() {
        var gearDisplay = (this._gears[0]);
        if (gearDisplay && gearDisplay.controller) {
            var ret = gearDisplay.addLock();
            this.checkGearDisplay();
            return ret;
        }
        else
            return 0;
    }
    releaseDisplayLock(token) {
        var gearDisplay = (this._gears[0]);
        if (gearDisplay && gearDisplay.controller) {
            gearDisplay.releaseLock(token);
            this.checkGearDisplay();
        }
    }
    checkGearDisplay() {
        if (this._handlingController)
            return;
        var connected = this._gears[0] == null || (this._gears[0]).connected;
        if (this._gears[8])
            connected = this._gears[8].evaluate(connected);
        if (connected != this._internalVisible) {
            this._internalVisible = connected;
            if (this._parent) {
                this._parent.childStateChanged(this);
                if (this._group && this._group.excludeInvisibles)
                    this._group.setBoundsChangedFlag();
            }
        }
    }
    get relations() {
        return this._relations;
    }
    addRelation(target, relationType, usePercent) {
        this._relations.add(target, relationType, usePercent);
    }
    removeRelation(target, relationType) {
        this._relations.remove(target, relationType);
    }
    get element() {
        return this._element;
    }
    get parent() {
        return this._parent;
    }
    set parent(val) {
        this._parent = val;
    }
    removeFromParent() {
        if (this._parent)
            this._parent.removeChild(this);
    }
    get asCom() {
        return this;
    }
    get text() {
        return null;
    }
    set text(value) {
    }
    get icon() {
        return null;
    }
    set icon(value) {
    }
    get treeNode() {
        return this._treeNode;
    }
    get isDisposed() {
        return this._element == null;
    }
    dispose() {
        this.removeFromParent();
        this._relations.dispose();
        this._element.dispose();
        this._element = null;
        for (let i = 0; i < 10; i++) {
            let gear = this._gears[i];
            if (gear)
                gear.dispose();
        }
    }
    onClick(listener, target) {
        this.on("click", listener, target);
    }
    offClick(listener, target) {
        this.off("click", listener, target);
    }
    hasClickListener() {
        return this.hasListener("click");
    }
    bubbleEvent(type, data) {
        this._element.bubbleEvent(this._element, type, data);
    }
    get draggable() {
        return this._draggable;
    }
    set draggable(value) {
        if (this._draggable != value) {
            this._draggable = value;
            this.initDrag();
        }
    }
    get dragBounds() {
        return this._dragBounds;
    }
    set dragBounds(value) {
        this._dragBounds = value;
    }
    startDrag(pointerId) {
        if (!this._element.onStage)
            return;
        if (pointerId == null)
            pointerId = -1;
        this.dragBegin(pointerId);
    }
    stopDrag() {
        this.dragEnd();
    }
    get dragging() {
        return GObject.draggingObject == this;
    }
    localToGlobal(ax, ay, result) {
        ax = ax || 0;
        ay = ay || 0;
        if (this._pivotAsAnchor) {
            ax += this._pivotX * this._width;
            ay += this._pivotY * this._height;
        }
        return this._element.localToGlobal(ax, ay, result);
    }
    globalToLocal(ax, ay, result) {
        ax = ax || 0;
        ay = ay || 0;
        result = this._element.globalToLocal(ax, ay, result);
        if (this._pivotAsAnchor) {
            result.x -= this._pivotX * this._width;
            result.y -= this._pivotY * this._height;
        }
        return result;
    }
    localToRoot(ax, ay, result) {
        let groot = GRoot.getInst(this);
        let pt = this.localToGlobal(ax, ay, result);
        return groot.globalToLocal(pt.x, pt.y, pt);
    }
    rootToLocal(ax, ay, result) {
        let groot = GRoot.getInst(this);
        let pt = groot.localToGlobal(ax, ay, result);
        return this.globalToLocal(pt.x, pt.y, pt);
    }
    localToGlobalRect(ax, ay, aWidth, aHeight, result) {
        if (!result)
            result = new Rect();
        this.localToGlobal(ax, ay, s_vec2$1);
        result.x = s_vec2$1.x;
        result.y = s_vec2$1.y;
        this.localToGlobal(ax + aWidth, ay + aHeight, s_vec2$1);
        result.xMax = s_vec2$1.x;
        result.yMax = s_vec2$1.y;
        return result;
    }
    globalToLocalRect(ax, ay, aWidth, aHeight, result) {
        if (!result)
            result = new Rect();
        this.globalToLocal(ax, ay, s_vec2$1);
        result.x = s_vec2$1.x;
        result.y = s_vec2$1.y;
        this.globalToLocal(ax + aWidth, ay + aHeight, s_vec2$1);
        result.xMax = s_vec2$1.x;
        result.yMax = s_vec2$1.y;
        return result;
    }
    transformRect(ax, ay, aWidth, aHeight, targetSpace, result) {
        if (!result)
            result = new Rect();
        this.localToGlobal(ax, ay, s_vec2$1);
        targetSpace.globalToLocal(s_vec2$1.x, s_vec2$1.y, s_vec2$1);
        result.x = s_vec2$1.x;
        result.y = s_vec2$1.y;
        this.localToGlobal(ax + aWidth, ay + aHeight, s_vec2$1);
        targetSpace.globalToLocal(s_vec2$1.x, s_vec2$1.y, s_vec2$1);
        result.xMax = s_vec2$1.x;
        result.yMax = s_vec2$1.y;
        return result;
    }
    handleControllerChanged(c) {
        this._handlingController = true;
        for (var i = 0; i < 10; i++) {
            var gear = this._gears[i];
            if (gear && gear.controller == c)
                gear.apply();
        }
        this._handlingController = false;
        this.checkGearDisplay();
    }
    createElement() {
        this._element = createUIElement("fgui-div", this);
    }
    handlePositionChanged() {
        var xv = this._x;
        var yv = this._y;
        if (this._pivotAsAnchor) {
            xv -= this._pivotX * this._width;
            yv -= this._pivotY * this._height;
        }
        this._element.setPosition(xv, yv);
    }
    handleSizeChanged() {
        this._element.setSize(this._width, this._height);
    }
    handleScaleChanged() {
        this._element.setScale(this._scaleX, this._scaleY);
    }
    handleGrayedChanged() {
        this._element.grayed = this._grayed;
    }
    handleAlphaChanged() {
        this._element.alpha = this._alpha;
    }
    handleVisibleChanged() {
        this._element.visible = this.internalVisible2;
    }
    getProp(index) {
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
    setProp(index, value) {
        switch (index) {
            case ObjectPropID.Text:
                this.text = value;
                break;
            case ObjectPropID.Icon:
                this.icon = value;
                break;
        }
    }
    constructFromResource() {
    }
    setup_beforeAdd(buffer, beginPos) {
        buffer.seek(beginPos, 0);
        buffer.skip(5);
        var f1;
        var f2;
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
        var bm = buffer.readByte();
        //this.blendMode = BlendModeTranslate[bm] || NormalBlending;
        var filter = buffer.readByte();
        var str = buffer.readS();
        if (str != null)
            this.data = str;
    }
    setup_afterAdd(buffer, beginPos) {
        buffer.seek(beginPos, 1);
        var str = buffer.readS();
        if (str)
            this.tooltips = str;
        var groupId = buffer.readShort();
        if (groupId >= 0)
            this.group = this.parent.getChildAt(groupId);
        buffer.seek(beginPos, 2);
        var cnt = buffer.readShort();
        for (var i = 0; i < cnt; i++) {
            var nextPos = buffer.readShort();
            nextPos += buffer.pos;
            var gear = this.getGear(buffer.readByte());
            gear.setup(buffer);
            buffer.pos = nextPos;
        }
    }
    initDrag() {
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
    dragBegin(pointerId) {
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
    dragEnd() {
        if (GObject.draggingObject == this) {
            this._dragTesting = false;
            GObject.draggingObject = null;
        }
    }
    __touchBegin(evt) {
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
    __touchMove(evt) {
        if (this._dragTesting && GObject.draggingObject != this) {
            let sensitivity;
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
                let rect = GRoot.getInst(this).localToGlobalRect(this._dragBounds.x, this._dragBounds.y, this._dragBounds.width, this._dragBounds.height, s_rect);
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
            let pt = this.parent.globalToLocal(xx, yy, s_vec2$1);
            s_dragging = true;
            this.setPosition(Math.round(pt.x), Math.round(pt.y));
            s_dragging = false;
            this.emit("drag_move");
        }
    }
    __touchEnd() {
        if (GObject.draggingObject == this) {
            GObject.draggingObject = null;
            this.emit("drag_end");
        }
    }
}
let GearClasses = [
    GearDisplay, GearXY, GearSize, GearLook, GearColor,
    GearAnimation, GearText, GearIcon, GearDisplay2, GearFontSize
];
function createGear(owner, index) {
    let ret = new (GearClasses[index])();
    ret._owner = owner;
    return ret;
}
var s_vec2$1 = new Vec2();
var s_rect = new Rect();
var sGlobalDragStart = new Vec2();
var sGlobalRect = new Rect();
var s_dragging;
var gInstanceCounter = 0;
var constructingDepth = { n: 0 };

class GGroup extends GObject {
    constructor() {
        super();
        this._layout = 0;
        this._lineGap = 0;
        this._columnGap = 0;
        this._mainGridIndex = -1;
        this._mainGridMinSize = 50;
        this._mainChildIndex = -1;
        this._totalSize = 0;
        this._numChildren = 0;
        /** @internal */
        this._updating = 0;
    }
    createElement() {
        super.createElement();
        this._element.setNotInteractable();
    }
    dispose() {
        this._boundsChanged = false;
        super.dispose();
    }
    get layout() {
        return this._layout;
    }
    set layout(value) {
        if (this._layout != value) {
            this._layout = value;
            this.setBoundsChangedFlag();
        }
    }
    get lineGap() {
        return this._lineGap;
    }
    set lineGap(value) {
        if (this._lineGap != value) {
            this._lineGap = value;
            this.setBoundsChangedFlag(true);
        }
    }
    get columnGap() {
        return this._columnGap;
    }
    set columnGap(value) {
        if (this._columnGap != value) {
            this._columnGap = value;
            this.setBoundsChangedFlag(true);
        }
    }
    get excludeInvisibles() {
        return this._excludeInvisibles;
    }
    set excludeInvisibles(value) {
        if (this._excludeInvisibles != value) {
            this._excludeInvisibles = value;
            this.setBoundsChangedFlag();
        }
    }
    get autoSizeDisabled() {
        return this._autoSizeDisabled;
    }
    set autoSizeDisabled(value) {
        this._autoSizeDisabled = value;
    }
    get mainGridMinSize() {
        return this._mainGridMinSize;
    }
    set mainGridMinSize(value) {
        if (this._mainGridMinSize != value) {
            this._mainGridMinSize = value;
            this.setBoundsChangedFlag();
        }
    }
    get mainGridIndex() {
        return this._mainGridIndex;
    }
    set mainGridIndex(value) {
        if (this._mainGridIndex != value) {
            this._mainGridIndex = value;
            this.setBoundsChangedFlag();
        }
    }
    setBoundsChangedFlag(positionChangedOnly) {
        if (this._updating == 0 && this._parent) {
            if (!positionChangedOnly)
                this._percentReady = false;
            if (!this._boundsChanged) {
                this._boundsChanged = true;
                if (this._layout != GroupLayoutType.None)
                    Timers.callLater(this.ensureBoundsCorrect, this);
            }
        }
    }
    ensureBoundsCorrect() {
        if (this._parent == null || !this._boundsChanged)
            return;
        this._boundsChanged = false;
        if (this._layout == 0)
            this.updateBounds();
        else {
            if (this._autoSizeDisabled)
                this.resizeChildren(0, 0);
            else {
                this.handleLayout();
                this.updateBounds();
            }
        }
    }
    updateBounds() {
        Timers.remove(this.ensureBoundsCorrect, this);
        var cnt = this._parent.numChildren;
        var i;
        var child;
        var ax = Number.POSITIVE_INFINITY, ay = Number.POSITIVE_INFINITY;
        var ar = Number.NEGATIVE_INFINITY, ab = Number.NEGATIVE_INFINITY;
        var tmp;
        var empty = true;
        for (i = 0; i < cnt; i++) {
            child = this._parent.getChildAt(i);
            if (child.group != this || this._excludeInvisibles && !child.internalVisible3)
                continue;
            tmp = child.xMin;
            if (tmp < ax)
                ax = tmp;
            tmp = child.yMin;
            if (tmp < ay)
                ay = tmp;
            tmp = child.xMin + child.width;
            if (tmp > ar)
                ar = tmp;
            tmp = child.yMin + child.height;
            if (tmp > ab)
                ab = tmp;
            empty = false;
        }
        var w = 0, h = 0;
        if (!empty) {
            this._updating |= 1;
            this.setPosition(ax, ay);
            this._updating &= 2;
            w = ar - ax;
            h = ab - ay;
        }
        if ((this._updating & 2) == 0) {
            this._updating |= 2;
            this.setSize(w, h);
            this._updating &= 1;
        }
        else {
            this._updating &= 1;
            this.resizeChildren(this._width - w, this._height - h);
        }
    }
    handleLayout() {
        this._updating |= 1;
        var child;
        var i;
        var cnt;
        if (this._layout == GroupLayoutType.Horizontal) {
            var curX = this.x;
            cnt = this._parent.numChildren;
            for (i = 0; i < cnt; i++) {
                child = this._parent.getChildAt(i);
                if (child.group != this)
                    continue;
                if (this._excludeInvisibles && !child.internalVisible3)
                    continue;
                child.xMin = curX;
                if (child.width != 0)
                    curX += child.width + this._columnGap;
            }
        }
        else if (this._layout == GroupLayoutType.Vertical) {
            var curY = this.y;
            cnt = this._parent.numChildren;
            for (i = 0; i < cnt; i++) {
                child = this._parent.getChildAt(i);
                if (child.group != this)
                    continue;
                if (this._excludeInvisibles && !child.internalVisible3)
                    continue;
                child.yMin = curY;
                if (child.height != 0)
                    curY += child.height + this._lineGap;
            }
        }
        this._updating &= 2;
    }
    moveChildren(dx, dy) {
        if ((this._updating & 1) != 0 || this._parent == null)
            return;
        this._updating |= 1;
        var cnt = this._parent.numChildren;
        var i;
        var child;
        for (i = 0; i < cnt; i++) {
            child = this._parent.getChildAt(i);
            if (child.group == this) {
                child.setPosition(child.x + dx, child.y + dy);
            }
        }
        this._updating &= 2;
    }
    resizeChildren(dw, dh) {
        if (this._layout == GroupLayoutType.None || (this._updating & 2) != 0 || this._parent == null)
            return;
        this._updating |= 2;
        if (this._boundsChanged) {
            this._boundsChanged = false;
            if (!this._autoSizeDisabled) {
                this.updateBounds();
                return;
            }
        }
        var cnt = this._parent.numChildren;
        var i;
        var child;
        if (!this._percentReady) {
            this._percentReady = true;
            this._numChildren = 0;
            this._totalSize = 0;
            this._mainChildIndex = -1;
            var j = 0;
            for (i = 0; i < cnt; i++) {
                child = this._parent.getChildAt(i);
                if (child.group != this)
                    continue;
                if (!this._excludeInvisibles || child.internalVisible3) {
                    if (j == this._mainGridIndex)
                        this._mainChildIndex = i;
                    this._numChildren++;
                    if (this._layout == 1)
                        this._totalSize += child.width;
                    else
                        this._totalSize += child.height;
                }
                j++;
            }
            if (this._mainChildIndex != -1) {
                if (this._layout == 1) {
                    child = this._parent.getChildAt(this._mainChildIndex);
                    this._totalSize += this._mainGridMinSize - child.width;
                    child._sizePercentInGroup = this._mainGridMinSize / this._totalSize;
                }
                else {
                    child = this._parent.getChildAt(this._mainChildIndex);
                    this._totalSize += this._mainGridMinSize - child.height;
                    child._sizePercentInGroup = this._mainGridMinSize / this._totalSize;
                }
            }
            for (i = 0; i < cnt; i++) {
                child = this._parent.getChildAt(i);
                if (child.group != this)
                    continue;
                if (i == this._mainChildIndex)
                    continue;
                if (this._totalSize > 0)
                    child._sizePercentInGroup = (this._layout == 1 ? child.width : child.height) / this._totalSize;
                else
                    child._sizePercentInGroup = 0;
            }
        }
        var remainSize = 0;
        var remainPercent = 1;
        var priorHandled = false;
        if (this._layout == 1) {
            remainSize = this.width - (this._numChildren - 1) * this._columnGap;
            if (this._mainChildIndex != -1 && remainSize >= this._totalSize) {
                child = this._parent.getChildAt(this._mainChildIndex);
                child.setSize(remainSize - (this._totalSize - this._mainGridMinSize), child._rawHeight + dh, true);
                remainSize -= child.width;
                remainPercent -= child._sizePercentInGroup;
                priorHandled = true;
            }
            var curX = this.x;
            for (i = 0; i < cnt; i++) {
                child = this._parent.getChildAt(i);
                if (child.group != this)
                    continue;
                if (this._excludeInvisibles && !child.internalVisible3) {
                    child.setSize(child._rawWidth, child._rawHeight + dh, true);
                    continue;
                }
                if (!priorHandled || i != this._mainChildIndex) {
                    child.setSize(Math.round(child._sizePercentInGroup / remainPercent * remainSize), child._rawHeight + dh, true);
                    remainPercent -= child._sizePercentInGroup;
                    remainSize -= child.width;
                }
                child.xMin = curX;
                if (child.width != 0)
                    curX += child.width + this._columnGap;
            }
        }
        else {
            remainSize = this.height - (this._numChildren - 1) * this._lineGap;
            if (this._mainChildIndex != -1 && remainSize >= this._totalSize) {
                child = this._parent.getChildAt(this._mainChildIndex);
                child.setSize(child._rawWidth + dw, remainSize - (this._totalSize - this._mainGridMinSize), true);
                remainSize -= child.height;
                remainPercent -= child._sizePercentInGroup;
                priorHandled = true;
            }
            var curY = this.y;
            for (i = 0; i < cnt; i++) {
                child = this._parent.getChildAt(i);
                if (child.group != this)
                    continue;
                if (this._excludeInvisibles && !child.internalVisible3) {
                    child.setSize(child._rawWidth + dw, child._rawHeight, true);
                    continue;
                }
                if (!priorHandled || i != this._mainChildIndex) {
                    child.setSize(child._rawWidth + dw, Math.round(child._sizePercentInGroup / remainPercent * remainSize), true);
                    remainPercent -= child._sizePercentInGroup;
                    remainSize -= child.height;
                }
                child.yMin = curY;
                if (child.height != 0)
                    curY += child.height + this._lineGap;
            }
        }
        this._updating &= 1;
    }
    handleAlphaChanged() {
        if (this._underConstruct)
            return;
        var cnt = this._parent.numChildren;
        for (var i = 0; i < cnt; i++) {
            var child = this._parent.getChildAt(i);
            if (child.group == this)
                child.alpha = this.alpha;
        }
    }
    handleVisibleChanged() {
        if (!this._parent)
            return;
        var cnt = this._parent.numChildren;
        for (var i = 0; i < cnt; i++) {
            var child = this._parent.getChildAt(i);
            if (child.group == this)
                child.handleVisibleChanged();
        }
    }
    setup_beforeAdd(buffer, beginPos) {
        super.setup_beforeAdd(buffer, beginPos);
        buffer.seek(beginPos, 5);
        this._layout = buffer.readByte();
        this._lineGap = buffer.readInt();
        this._columnGap = buffer.readInt();
        if (buffer.version >= 2) {
            this._excludeInvisibles = buffer.readBool();
            this._autoSizeDisabled = buffer.readBool();
            this._mainGridIndex = buffer.readShort();
        }
    }
    setup_afterAdd(buffer, beginPos) {
        super.setup_afterAdd(buffer, beginPos);
        if (!this.visible)
            this.handleVisibleChanged();
    }
}

class GGraph extends GObject {
    constructor() {
        super();
    }
    createElement() {
        this._element = createUIElement("fgui-shape", this);
    }
    get color() {
        return this._element.color;
    }
    set color(value) {
        if (this._element.color != value) {
            this._element.color = value;
            this.updateGear(4);
        }
    }
    get element() {
        return this._element;
    }
    replaceMe(target) {
        if (this.parent == null)
            throw new Error("parent not set");
        target.name = this.name;
        target.alpha = this.alpha;
        target.rotation = this.rotation;
        target.visible = this.visible;
        target.touchable = this.touchable;
        target.grayed = this.grayed;
        target.setPosition(this.x, this.y);
        target.setSize(this.width, this.height);
        let index = this.parent.getChildIndex(this);
        this.parent.addChildAt(target, index);
        target.relations.copyFrom(this.relations);
        this.parent.removeChild(this, true);
    }
    setNativeObject(obj) {
        if (this._element == obj)
            return;
        this._element.$owner = null;
        this.offAll();
        if (this._element.parent)
            this._element.parent.removeChild(this._element);
        this._element = obj;
        obj.$owner = this;
        obj.alpha = this.alpha;
        obj.rotation = this.rotation;
        obj.visible = this.visible;
        obj.touchable = this.touchable;
        this.handleSizeChanged();
        this.handlePositionChanged();
        if (this.parent != null)
            this.parent.childStateChanged(this);
    }
    getProp(index) {
        if (index == ObjectPropID.Color)
            return this.color;
        else
            return super.getProp(index);
    }
    setProp(index, value) {
        if (index == ObjectPropID.Color)
            this.color = value;
        else
            super.setProp(index, value);
    }
    setup_beforeAdd(buffer, beginPos) {
        super.setup_beforeAdd(buffer, beginPos);
        buffer.seek(beginPos, 5);
        let type = buffer.readByte();
        if (type != 0) {
            let i;
            let cnt;
            let lineSize = buffer.readInt();
            let lineColor = buffer.readFullColor();
            let fillColor = buffer.readFullColor();
            let roundedRect = buffer.readBool();
            let cornerRadius;
            if (roundedRect) {
                cornerRadius = [];
                for (i = 0; i < 4; i++)
                    cornerRadius[i] = buffer.readFloat();
            }
            if (type == 1) {
                if (roundedRect)
                    this._element.drawRoundRect(lineSize, lineColor, fillColor, cornerRadius[0], cornerRadius[1], cornerRadius[2], cornerRadius[3]);
                else
                    this._element.drawRect(lineSize, lineColor, fillColor);
            }
            else if (type == 2) {
                this._element.drawEllipse(lineSize, lineColor, fillColor, 0, 360);
            }
            else if (type == 3) {
                cnt = buffer.readShort();
                let points = [];
                points.length = cnt;
                for (i = 0; i < cnt; i++)
                    points[i] = buffer.readFloat();
                this._element.drawPolygon(points, fillColor, lineSize, lineColor);
            }
            else if (type == 4) {
                let sides = buffer.readShort();
                let startAngle = buffer.readFloat();
                cnt = buffer.readShort();
                let distances;
                if (cnt > 0) {
                    distances = [];
                    for (i = 0; i < cnt; i++)
                        distances[i] = buffer.readFloat();
                }
                this._element.drawRegularPolygon(sides, lineSize, fillColor, lineColor, fillColor, startAngle, distances);
            }
        }
    }
}

class GImage extends GObject {
    constructor() {
        super();
    }
    get color() {
        return this._element.color;
    }
    set color(value) {
        if (this._element.color != value) {
            this._element.color = value;
            this.updateGear(4);
        }
    }
    get flip() {
        return this._element.flip;
    }
    set flip(value) {
        this._element.flip = value;
    }
    get fillMethod() {
        return this._element.fillMethod;
    }
    set fillMethod(value) {
        this._element.fillMethod = value;
    }
    get fillOrigin() {
        return this._element.fillOrigin;
    }
    set fillOrigin(value) {
        this._element.fillOrigin = value;
    }
    get fillClockwise() {
        return this._element.fillClockwise;
    }
    set fillClockwise(value) {
        this._element.fillClockwise = value;
    }
    get fillAmount() {
        return this._element.fillAmount;
    }
    set fillAmount(value) {
        this._element.fillAmount = value;
    }
    createElement() {
        this._element = createUIElement("fgui-img", this);
        this._element.setNotInteractable();
    }
    handleSizeChanged() {
        this._element.width = this._width;
        this._element.height = this._height;
    }
    constructFromResource() {
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
    getProp(index) {
        if (index == ObjectPropID.Color)
            return this.color;
        else
            return super.getProp(index);
    }
    setProp(index, value) {
        if (index == ObjectPropID.Color)
            this.color = value;
        else
            super.setProp(index, value);
    }
    setup_beforeAdd(buffer, beginPos) {
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

class GMovieClip extends GObject {
    constructor() {
        super();
    }
    get color() {
        return this._element.color;
    }
    set color(value) {
        this._element.color = value;
    }
    createElement() {
        this._element = createUIElement("fgui-movieclip", this);
        this._element.setNotInteractable();
    }
    get playing() {
        return this._element.playing;
    }
    set playing(value) {
        if (this._element.playing != value) {
            this._element.playing = value;
            this.updateGear(5);
        }
    }
    get frame() {
        return this._element.frame;
    }
    set frame(value) {
        if (this._element.frame != value) {
            this._element.frame = value;
            this.updateGear(5);
        }
    }
    get timeScale() {
        return this._element.timeScale;
    }
    set timeScale(value) {
        this._element.timeScale = value;
    }
    rewind() {
        this._element.rewind();
    }
    syncStatus(anotherMc) {
        this._element.syncStatus(anotherMc._element);
    }
    advance(timeInMiniseconds) {
        this._element.advance(timeInMiniseconds);
    }
    //从start帧开始，播放到end帧（-1表示结尾），重复times次（0表示无限循环），循环结束后，停止在endAt帧（-1表示参数end）
    setPlaySettings(start, end, times, endAt) {
        this._element.setPlaySettings(start, end, times, endAt);
    }
    getProp(index) {
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
    setProp(index, value) {
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
    constructFromResource() {
        var displayItem = this.packageItem.getBranch();
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
    setup_beforeAdd(buffer, beginPos) {
        super.setup_beforeAdd(buffer, beginPos);
        buffer.seek(beginPos, 5);
        if (buffer.readBool())
            this.color = buffer.readColor();
        this._element.flip = buffer.readByte(); //flip
        this._element.frame = buffer.readInt();
        this._element.playing = buffer.readBool();
    }
}

const s_color = new Color();
function convertToHtmlColor(rgb) {
    s_color.setRGB(rgb);
    return s_color.toStyleString();
}
function clamp(value, min, max) {
    if (value < min)
        value = min;
    else if (value > max)
        value = max;
    return value;
}
function clamp01(value) {
    if (isNaN(value))
        value = 0;
    else if (value > 1)
        value = 1;
    else if (value < 0)
        value = 0;
    return value;
}
function lerp(start, end, percent) {
    return (start + percent * (end - start));
}
function repeat(t, length) {
    return t - Math.floor(t / length) * length;
}
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

class PackageItem {
    constructor() {
        this.width = 0;
        this.height = 0;
    }
    getBranch() {
        if (this.branches && this.owner._branchIndex != -1) {
            var itemId = this.branches[this.owner._branchIndex];
            if (itemId)
                return this.owner.getItemById(itemId);
        }
        return this;
    }
    getHighResolution() {
        if (this.highResolution && UIConfig.scaleLevel > 0) {
            var itemId = this.highResolution[UIConfig.scaleLevel - 1];
            if (itemId)
                return this.owner.getItemById(itemId);
        }
        return this;
    }
}

class ByteBuffer {
    constructor(buffer, offset, length) {
        this.version = 0;
        offset = offset || 0;
        if (length == null || length == -1)
            length = buffer.byteLength - offset;
        this._buffer = buffer;
        this._view = new DataView(this._buffer, offset, length);
        this._pos = 0;
        this._length = length;
    }
    get data() {
        return this._buffer;
    }
    get pos() {
        return this._pos;
    }
    set pos(value) {
        if (value > this._length)
            throw "Out of bounds";
        this._pos = value;
    }
    get length() {
        return this._length;
    }
    get end() {
        return this._pos >= this._length;
    }
    skip(count) {
        this._pos += count;
    }
    validate(forward) {
        if (this._pos + forward > this._length)
            throw "Out of bounds";
    }
    readByte() {
        this.validate(1);
        let ret = this._view.getUint8(this._pos);
        this._pos++;
        return ret;
    }
    readBool() {
        return this.readByte() == 1;
    }
    readShort() {
        this.validate(2);
        let ret = this._view.getInt16(this._pos, this.littleEndian);
        this._pos += 2;
        return ret;
    }
    readUshort() {
        this.validate(2);
        let ret = this._view.getUint16(this._pos, this.littleEndian);
        this._pos += 2;
        return ret;
    }
    readInt() {
        this.validate(4);
        let ret = this._view.getInt32(this._pos, this.littleEndian);
        this._pos += 4;
        return ret;
    }
    readUint() {
        this.validate(4);
        let ret = this._view.getUint32(this._pos, this.littleEndian);
        this._pos += 4;
        return ret;
    }
    readFloat() {
        this.validate(4);
        let ret = this._view.getFloat32(this._pos, this.littleEndian);
        this._pos += 4;
        return ret;
    }
    readString(len) {
        if (len == undefined)
            len = this.readUshort();
        this.validate(len);
        let decoder = new TextDecoder();
        let ret = decoder.decode(new DataView(this._buffer, this._view.byteOffset + this._pos, len));
        this._pos += len;
        return ret;
    }
    readS() {
        var index = this.readUshort();
        if (index == 65534) //null
            return null;
        else if (index == 65533)
            return "";
        else
            return this.stringTable[index];
    }
    readSArray(cnt) {
        var ret = new Array(cnt);
        for (var i = 0; i < cnt; i++)
            ret[i] = this.readS();
        return ret;
    }
    writeS(value) {
        var index = this.readUshort();
        if (index != 65534 && index != 65533)
            this.stringTable[index] = value;
    }
    readColor() {
        var r = this.readByte();
        var g = this.readByte();
        var b = this.readByte();
        this.readByte(); //a
        return (r << 16) + (g << 8) + b;
    }
    readFullColor() {
        var r = this.readByte();
        var g = this.readByte();
        var b = this.readByte();
        var a = this.readByte();
        return new Color(r / 255, g / 255, b / 255, a / 255);
    }
    readChar() {
        var i = this.readUshort();
        return String.fromCharCode(i);
    }
    readBuffer() {
        var count = this.readUint();
        this.validate(count);
        var ba = new ByteBuffer(this._buffer, this._view.byteOffset + this._pos, count);
        ba.stringTable = this.stringTable;
        ba.version = this.version;
        this._pos += count;
        return ba;
    }
    seek(indexTablePos, blockIndex) {
        var tmp = this._pos;
        this._pos = indexTablePos;
        var segCount = this.readByte();
        if (blockIndex < segCount) {
            var useShort = this.readByte() == 1;
            var newPos;
            if (useShort) {
                this._pos += 2 * blockIndex;
                newPos = this.readUshort();
            }
            else {
                this._pos += 4 * blockIndex;
                newPos = this.readUint();
            }
            if (newPos > 0) {
                this._pos = indexTablePos + newPos;
                return true;
            }
            else {
                this._pos = tmp;
                return false;
            }
        }
        else {
            this._pos = tmp;
            return false;
        }
    }
}

class HttpRequest extends EventDispatcher {
    constructor() {
        super(...arguments);
        this._http = new XMLHttpRequest();
    }
    send(url, data = null, method = "get", responseType = "text", headers = null) {
        this._responseType = responseType;
        this._data = null;
        this._url = url;
        var _this = this;
        var http = this._http;
        http.open(method, url, true);
        let isJson = false;
        if (headers) {
            for (var i = 0; i < headers.length; i++) {
                http.setRequestHeader(headers[i++], headers[i]);
            }
        }
        else if (!(window.conch)) {
            if (!data || typeof (data) == 'string')
                http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            else {
                http.setRequestHeader("Content-Type", "application/json");
                if (!(data instanceof ArrayBuffer) && typeof data !== "string") {
                    isJson = true;
                }
            }
        }
        let restype = responseType !== "arraybuffer" ? "text" : "arraybuffer";
        http.responseType = restype;
        if (http.dataType) { //for Ali
            http.dataType = restype;
        }
        http.onerror = function (e) {
            _this._onError(e);
        };
        http.onabort = function (e) {
            _this._onAbort(e);
        };
        http.onprogress = function (e) {
            _this._onProgress(e);
        };
        http.onload = function (e) {
            _this._onLoad(e);
        };
        http.send(isJson ? JSON.stringify(data) : data);
    }
    _onProgress(e) {
        if (e && e.lengthComputable)
            this.emit("progress", e.loaded / e.total);
    }
    _onAbort(e) {
        this.error("Request was aborted by user");
    }
    _onError(e) {
        this.error("Request failed Status:" + this._http.status + " text:" + this._http.statusText);
    }
    _onLoad(e) {
        var http = this._http;
        var status = http.status !== undefined ? http.status : 200;
        if (status === 200 || status === 204 || status === 0) {
            this.complete();
        }
        else {
            this.error("[" + http.status + "]" + http.statusText + ":" + http.responseURL);
        }
    }
    error(message) {
        this.clear();
        console.warn(this.url, message);
        this.emit("error", message);
    }
    complete() {
        this.clear();
        this._data = this._http.response || this._http.responseText;
        this.emit("complete", this._data);
    }
    clear() {
        var http = this._http;
        http.onerror = http.onabort = http.onprogress = http.onload = null;
    }
    get url() {
        return this._url;
    }
    get data() {
        return this._data;
    }
    get http() {
        return this._http;
    }
}

class Margin {
    constructor() {
        this.left = 0;
        this.right = 0;
        this.top = 0;
        this.bottom = 0;
    }
    copy(source) {
        this.top = source.top;
        this.bottom = source.bottom;
        this.left = source.left;
        this.right = source.right;
    }
}

class UIPackage {
    constructor() {
        this._items = [];
        this._itemsById = {};
        this._itemsByName = {};
        this._dependencies = [];
        this._branches = [];
        this._branchIndex = -1;
    }
    static get branch() {
        return _branch;
    }
    static set branch(value) {
        _branch = value;
        for (var pkgId in _instById) {
            var pkg = _instById[pkgId];
            if (pkg._branches) {
                pkg._branchIndex = pkg._branches.indexOf(value);
            }
        }
    }
    static getVar(key) {
        return _vars[key];
    }
    static setVar(key, value) {
        _vars[key] = value;
    }
    static getById(id) {
        return _instById[id];
    }
    static getByName(name) {
        return _instByName[name];
    }
    static loadPackage(url) {
        if (!url.endsWith("/"))
            url += "/";
        return new Promise(resolve => {
            let pkg = _instById[url];
            if (pkg) {
                resolve(pkg);
                return;
            }
            let request = new HttpRequest();
            request.send(url + "package.xml", null, "get", "arraybuffer");
            request.on("complete", (evt) => {
                let pkg = new UIPackage();
                pkg.loadPackage(new ByteBuffer(evt.data), url);
                _instById[pkg.id] = pkg;
                _instByName[pkg.name] = pkg;
                _instById[pkg.path] = pkg;
                resolve(pkg);
            });
        });
    }
    static removePackage(packageIdOrName) {
        var pkg = _instById[packageIdOrName];
        if (!pkg)
            pkg = _instByName[packageIdOrName];
        if (!pkg)
            throw "No package found: " + packageIdOrName;
        pkg.dispose();
        delete _instById[pkg.id];
        delete _instByName[pkg.name];
        if (pkg._path)
            delete _instById[pkg._path];
    }
    static createObject(pkgName, resName, userClass) {
        var pkg = UIPackage.getByName(pkgName);
        if (pkg)
            return pkg.createObject(resName, userClass);
        else
            return null;
    }
    static createObjectFromURL(url, userClass) {
        var pi = UIPackage.getItemByURL(url);
        if (pi)
            return pi.owner.internalCreateObject(pi, userClass);
        else
            return null;
    }
    static getItemURL(pkgName, resName) {
        var pkg = UIPackage.getByName(pkgName);
        if (!pkg)
            return null;
        var pi = pkg._itemsByName[resName];
        if (!pi)
            return null;
        return "ui://" + pkg.id + pi.id;
    }
    static getItemByURL(url) {
        var pos1 = url.indexOf("//");
        if (pos1 == -1)
            return null;
        var pos2 = url.indexOf("/", pos1 + 2);
        if (pos2 == -1) {
            if (url.length > 13) {
                var pkgId = url.substr(5, 8);
                var pkg = UIPackage.getById(pkgId);
                if (pkg != null) {
                    var srcId = url.substr(13);
                    return pkg.getItemById(srcId);
                }
            }
        }
        else {
            var pkgName = url.substr(pos1 + 2, pos2 - pos1 - 2);
            pkg = UIPackage.getByName(pkgName);
            if (pkg != null) {
                var srcName = url.substr(pos2 + 1);
                return pkg.getItemByName(srcName);
            }
        }
        return null;
    }
    static normalizeURL(url) {
        if (url == null)
            return null;
        var pos1 = url.indexOf("//");
        if (pos1 == -1)
            return null;
        var pos2 = url.indexOf("/", pos1 + 2);
        if (pos2 == -1)
            return url;
        var pkgName = url.substr(pos1 + 2, pos2 - pos1 - 2);
        var srcName = url.substr(pos2 + 1);
        return UIPackage.getItemURL(pkgName, srcName);
    }
    loadPackage(buffer, path) {
        if (buffer.readUint() != 0x46475549)
            throw "FairyGUI: old package format found in '" + path + "'";
        this._path = path;
        buffer.version = buffer.readInt();
        var ver2 = buffer.version >= 2;
        buffer.readBool(); //compressed
        this._id = buffer.readString();
        this._name = buffer.readString();
        buffer.skip(20);
        var indexTablePos = buffer.pos;
        var cnt;
        var i;
        var nextPos;
        var str;
        var branchIncluded;
        buffer.seek(indexTablePos, 4);
        cnt = buffer.readInt();
        var stringTable = new Array(cnt);
        buffer.stringTable = stringTable;
        for (i = 0; i < cnt; i++)
            stringTable[i] = buffer.readString();
        if (buffer.seek(indexTablePos, 5)) {
            cnt = buffer.readInt();
            for (i = 0; i < cnt; i++) {
                let index = buffer.readUshort();
                let len = buffer.readInt();
                stringTable[index] = buffer.readString(len);
            }
        }
        buffer.seek(indexTablePos, 0);
        cnt = buffer.readShort();
        for (i = 0; i < cnt; i++)
            this._dependencies.push({ id: buffer.readS(), name: buffer.readS() });
        if (ver2) {
            cnt = buffer.readShort();
            if (cnt > 0) {
                this._branches = buffer.readSArray(cnt);
                if (_branch)
                    this._branchIndex = this._branches.indexOf(_branch);
            }
            branchIncluded = cnt > 0;
        }
        buffer.seek(indexTablePos, 1);
        var pi;
        cnt = buffer.readShort();
        for (i = 0; i < cnt; i++) {
            nextPos = buffer.readInt();
            nextPos += buffer.pos;
            pi = new PackageItem();
            pi.owner = this;
            pi.type = buffer.readByte();
            pi.id = buffer.readS();
            pi.name = buffer.readS();
            buffer.readS(); //path
            pi.file = path + buffer.readS();
            buffer.readBool(); //exported
            pi.width = buffer.readInt();
            pi.height = buffer.readInt();
            switch (pi.type) {
                case PackageItemType.Image:
                    {
                        pi.objectType = ObjectType.Image;
                        var scaleOption = buffer.readByte();
                        if (scaleOption == 1) {
                            let sx = buffer.readInt();
                            let sy = buffer.readInt();
                            let sw = buffer.readInt();
                            let sh = buffer.readInt();
                            pi.scale9Grid = new Margin();
                            pi.scale9Grid.left = sx;
                            pi.scale9Grid.top = sy;
                            pi.scale9Grid.right = pi.width - sx - sw;
                            pi.scale9Grid.bottom = pi.height - sy - sh;
                            pi.tileGridIndice = buffer.readInt();
                        }
                        else if (scaleOption == 2)
                            pi.scaleByTile = true;
                        pi.smoothing = buffer.readBool();
                        break;
                    }
                case PackageItemType.MovieClip:
                    {
                        pi.smoothing = buffer.readBool();
                        pi.objectType = ObjectType.MovieClip;
                        pi.rawData = buffer.readBuffer();
                        break;
                    }
                case PackageItemType.Font:
                    {
                        pi.rawData = buffer.readBuffer();
                        break;
                    }
                case PackageItemType.Component:
                    {
                        var extension = buffer.readByte();
                        if (extension > 0)
                            pi.objectType = extension;
                        else
                            pi.objectType = ObjectType.Component;
                        pi.rawData = buffer.readBuffer();
                        UIObjectFactory.resolveExtension(pi);
                        break;
                    }
                case PackageItemType.Spine:
                case PackageItemType.DragonBones:
                    {
                        buffer.readFloat();
                        buffer.readFloat();
                        break;
                    }
            }
            if (ver2) {
                str = buffer.readS(); //branch
                if (str)
                    pi.name = str + "/" + pi.name;
                var branchCnt = buffer.readByte();
                if (branchCnt > 0) {
                    if (branchIncluded)
                        pi.branches = buffer.readSArray(branchCnt);
                    else
                        this._itemsById[buffer.readS()] = pi;
                }
                var highResCnt = buffer.readByte();
                if (highResCnt > 0)
                    pi.highResolution = buffer.readSArray(highResCnt);
            }
            this._items.push(pi);
            this._itemsById[pi.id] = pi;
            if (pi.name != null)
                this._itemsByName[pi.name] = pi;
            buffer.pos = nextPos;
        }
    }
    dispose() {
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get path() {
        return this._path;
    }
    get dependencies() {
        return this._dependencies;
    }
    createObject(resName, userClass) {
        var pi = this._itemsByName[resName];
        if (pi)
            return this.internalCreateObject(pi, userClass);
        else
            return null;
    }
    internalCreateObject(item, userClass) {
        var g = UIObjectFactory.newObject(item, userClass);
        if (g == null)
            return null;
        constructingDepth.n++;
        g.constructFromResource();
        constructingDepth.n--;
        return g;
    }
    getItemById(itemId) {
        return this._itemsById[itemId];
    }
    getItemByName(resName) {
        return this._itemsByName[resName];
    }
    getItemAssetURL(item) {
        return item.file;
    }
}
var _instById = {};
var _instByName = {};
var _branch = "";
var _vars = {};

class ControllerAction {
    constructor() {
    }
    run(controller, prevPage, curPage) {
        if ((!this.fromPage || this.fromPage.length == 0 || this.fromPage.indexOf(prevPage) != -1)
            && (!this.toPage || this.toPage.length == 0 || this.toPage.indexOf(curPage) != -1))
            this.enter(controller);
        else
            this.leave(controller);
    }
    enter(controller) {
    }
    leave(controller) {
    }
    setup(buffer) {
        var cnt;
        var i;
        cnt = buffer.readShort();
        this.fromPage = [];
        for (i = 0; i < cnt; i++)
            this.fromPage[i] = buffer.readS();
        cnt = buffer.readShort();
        this.toPage = [];
        for (i = 0; i < cnt; i++)
            this.toPage[i] = buffer.readS();
    }
}

class PlayTransitionAction extends ControllerAction {
    constructor() {
        super();
        this.playTimes = 1;
        this.delay = 0;
    }
    enter(controller) {
        var trans = controller.parent.getTransition(this.transitionName);
        if (trans) {
            if (this._currentTransition && this._currentTransition.playing)
                trans.changePlayTimes(this.playTimes);
            else
                trans.play(null, this.playTimes, this.delay);
            this._currentTransition = trans;
        }
    }
    leave(controller) {
        if (this.stopOnExit && this._currentTransition) {
            this._currentTransition.stop();
            this._currentTransition = null;
        }
    }
    setup(buffer) {
        super.setup(buffer);
        this.transitionName = buffer.readS();
        this.playTimes = buffer.readInt();
        this.delay = buffer.readFloat();
        this.stopOnExit = buffer.readBool();
    }
}

class ChangePageAction extends ControllerAction {
    constructor() {
        super();
    }
    enter(controller) {
        if (!this.controllerName)
            return;
        var gcom;
        if (this.objectId)
            gcom = controller.parent.getChildById(this.objectId);
        else
            gcom = controller.parent;
        if (gcom) {
            var cc = gcom.getController(this.controllerName);
            if (cc && cc != controller && !cc.changing) {
                if (this.targetPage == "~1") {
                    if (controller.selectedIndex < cc.pageCount)
                        cc.selectedIndex = controller.selectedIndex;
                }
                else if (this.targetPage == "~2")
                    cc.selectedPage = controller.selectedPage;
                else
                    cc.selectedPageId = this.targetPage;
            }
        }
    }
    setup(buffer) {
        super.setup(buffer);
        this.objectId = buffer.readS();
        this.controllerName = buffer.readS();
        this.targetPage = buffer.readS();
    }
}

var _nextPageId = 0;
class Controller extends EventDispatcher {
    constructor() {
        super();
        this.changing = false;
        this._pageIds = [];
        this._pageNames = [];
        this._selectedIndex = -1;
        this._previousIndex = -1;
    }
    dispose() {
        this.offAll();
    }
    get selectedIndex() {
        return this._selectedIndex;
    }
    set selectedIndex(value) {
        if (this._selectedIndex != value) {
            if (value > this._pageIds.length - 1)
                throw "index out of bounds: " + value;
            this.changing = true;
            this._previousIndex = this._selectedIndex;
            this._selectedIndex = value;
            this.parent.applyController(this);
            this.emit("status_changed");
            this.changing = false;
        }
    }
    //功能和设置selectedIndex一样，但不会触发事件
    setSelectedIndex(value) {
        if (this._selectedIndex != value) {
            if (value > this._pageIds.length - 1)
                throw "index out of bounds: " + value;
            this.changing = true;
            this._previousIndex = this._selectedIndex;
            this._selectedIndex = value;
            this.parent.applyController(this);
            this.changing = false;
        }
    }
    get previsousIndex() {
        return this._previousIndex;
    }
    get selectedPage() {
        if (this._selectedIndex == -1)
            return null;
        else
            return this._pageNames[this._selectedIndex];
    }
    set selectedPage(val) {
        var i = this._pageNames.indexOf(val);
        if (i == -1)
            i = 0;
        this.selectedIndex = i;
    }
    //功能和设置selectedPage一样，但不会触发事件
    setSelectedPage(value) {
        var i = this._pageNames.indexOf(value);
        if (i == -1)
            i = 0;
        this.setSelectedIndex(i);
    }
    get previousPage() {
        if (this._previousIndex == -1)
            return null;
        else
            return this._pageNames[this._previousIndex];
    }
    get pageCount() {
        return this._pageIds.length;
    }
    getPageName(index) {
        return this._pageNames[index];
    }
    addPage(name) {
        name = name || "";
        this.addPageAt(name, this._pageIds.length);
    }
    addPageAt(name, index) {
        name = name || "";
        var nid = "" + (_nextPageId++);
        if (index == null || index == this._pageIds.length) {
            this._pageIds.push(nid);
            this._pageNames.push(name);
        }
        else {
            this._pageIds.splice(index, 0, nid);
            this._pageNames.splice(index, 0, name);
        }
    }
    removePage(name) {
        var i = this._pageNames.indexOf(name);
        if (i != -1) {
            this._pageIds.splice(i, 1);
            this._pageNames.splice(i, 1);
            if (this._selectedIndex >= this._pageIds.length)
                this.selectedIndex = this._selectedIndex - 1;
            else
                this.parent.applyController(this);
        }
    }
    removePageAt(index) {
        this._pageIds.splice(index, 1);
        this._pageNames.splice(index, 1);
        if (this._selectedIndex >= this._pageIds.length)
            this.selectedIndex = this._selectedIndex - 1;
        else
            this.parent.applyController(this);
    }
    clearPages() {
        this._pageIds.length = 0;
        this._pageNames.length = 0;
        if (this._selectedIndex != -1)
            this.selectedIndex = -1;
        else
            this.parent.applyController(this);
    }
    hasPage(aName) {
        return this._pageNames.indexOf(aName) != -1;
    }
    getPageIndexById(aId) {
        return this._pageIds.indexOf(aId);
    }
    getPageIdByName(aName) {
        var i = this._pageNames.indexOf(aName);
        if (i != -1)
            return this._pageIds[i];
        else
            return null;
    }
    getPageNameById(aId) {
        var i = this._pageIds.indexOf(aId);
        if (i != -1)
            return this._pageNames[i];
        else
            return null;
    }
    getPageId(index) {
        return this._pageIds[index];
    }
    get selectedPageId() {
        if (this._selectedIndex == -1)
            return null;
        else
            return this._pageIds[this._selectedIndex];
    }
    set selectedPageId(val) {
        var i = this._pageIds.indexOf(val);
        this.selectedIndex = i;
    }
    set oppositePageId(val) {
        var i = this._pageIds.indexOf(val);
        if (i > 0)
            this.selectedIndex = 0;
        else if (this._pageIds.length > 1)
            this.selectedIndex = 1;
    }
    get previousPageId() {
        if (this._previousIndex == -1)
            return null;
        else
            return this._pageIds[this._previousIndex];
    }
    runActions() {
        if (this._actions) {
            var cnt = this._actions.length;
            for (var i = 0; i < cnt; i++) {
                this._actions[i].run(this, this.previousPageId, this.selectedPageId);
            }
        }
    }
    setup(buffer) {
        var beginPos = buffer.pos;
        buffer.seek(beginPos, 0);
        this.name = buffer.readS();
        if (buffer.readBool())
            this.autoRadioGroupDepth = true;
        buffer.seek(beginPos, 1);
        var i;
        var nextPos;
        var cnt = buffer.readShort();
        for (i = 0; i < cnt; i++) {
            this._pageIds.push(buffer.readS());
            this._pageNames.push(buffer.readS());
        }
        var homePageIndex = 0;
        if (buffer.version >= 2) {
            var homePageType = buffer.readByte();
            switch (homePageType) {
                case 1:
                    homePageIndex = buffer.readShort();
                    break;
                case 2:
                    homePageIndex = this._pageNames.indexOf(UIPackage.branch);
                    if (homePageIndex == -1)
                        homePageIndex = 0;
                    break;
                case 3:
                    homePageIndex = this._pageNames.indexOf(UIPackage.getVar(buffer.readS()));
                    if (homePageIndex == -1)
                        homePageIndex = 0;
                    break;
            }
        }
        buffer.seek(beginPos, 2);
        cnt = buffer.readShort();
        if (cnt > 0) {
            if (this._actions == null)
                this._actions = [];
            for (i = 0; i < cnt; i++) {
                nextPos = buffer.readShort();
                nextPos += buffer.pos;
                var action = createAction(buffer.readByte());
                action.setup(buffer);
                this._actions.push(action);
                buffer.pos = nextPos;
            }
        }
        if (this.parent && this._pageIds.length > 0)
            this._selectedIndex = homePageIndex;
        else
            this._selectedIndex = -1;
    }
}
function createAction(type) {
    switch (type) {
        case 0:
            return new PlayTransitionAction();
        case 1:
            return new ChangePageAction();
    }
    return null;
}

var s_vec2$2 = new Vec2();
var s_rect$1 = new Rect();
var s_endPos = new Vec2();
var s_oldChange = new Vec2();
var s_gestureFlag = 0;
const TWEEN_TIME_GO = 0.5; //调用SetPos(ani)时使用的缓动时间
const TWEEN_TIME_DEFAULT = 0.3; //惯性滚动的最小缓动时间
const PULL_RATIO = 0.5; //下拉过顶或者上拉过底时允许超过的距离占显示区域的比例
class ScrollPane {
    constructor(owner) {
        this._owner = owner;
        this._maskContainer = createUIElement("fgui-div");
        this._owner.element.addChild(this._maskContainer);
        this._container = this._owner._container;
        this._container.setPosition(0, 0);
        this._maskContainer.addChild(this._container);
        this._mouseWheelEnabled = true;
        this._xPos = 0;
        this._yPos = 0;
        this._aniFlag = 0;
        this._tweening = 0;
        this._loop = 0;
        this._footerLockedSize = 0;
        this._headerLockedSize = 0;
        this._scrollBarMargin = new Margin();
        this._viewSize = new Vec2();
        this._contentSize = new Vec2();
        this._pageSize = new Vec2(1, 1);
        this._overlapSize = new Vec2();
        this._tweenTime = new Vec2();
        this._tweenStart = new Vec2();
        this._tweenDuration = new Vec2();
        this._tweenChange = new Vec2();
        this._velocity = new Vec2();
        this._containerPos = new Vec2();
        this._beginTouchPos = new Vec2();
        this._lastTouchPos = new Vec2();
        this._lastTouchGlobalPos = new Vec2();
        this._scrollStep = UIConfig.defaultScrollStep;
        this._decelerationRate = UIConfig.defaultScrollDecelerationRate;
        this._owner.on("pointer_down", this.__touchBegin, this);
        this._owner.on("pointer_move", this.__touchMove, this);
        this._owner.on("pointer_up", this.__touchEnd, this);
        this._owner.on("mouse_wheel", this.__mouseWheel, this);
    }
    setup(buffer) {
        this._scrollType = buffer.readByte();
        var scrollBarDisplay = buffer.readByte();
        var flags = buffer.readInt();
        if (buffer.readBool()) {
            this._scrollBarMargin.top = buffer.readInt();
            this._scrollBarMargin.bottom = buffer.readInt();
            this._scrollBarMargin.left = buffer.readInt();
            this._scrollBarMargin.right = buffer.readInt();
        }
        var vtScrollBarRes = buffer.readS();
        var hzScrollBarRes = buffer.readS();
        var headerRes = buffer.readS();
        var footerRes = buffer.readS();
        if ((flags & 1) != 0)
            this._displayOnLeft = true;
        if ((flags & 2) != 0)
            this._snapToItem = true;
        if ((flags & 4) != 0)
            this._displayInDemand = true;
        if ((flags & 8) != 0)
            this._pageMode = true;
        if (flags & 16)
            this._touchEffect = true;
        else if (flags & 32)
            this._touchEffect = false;
        else
            this._touchEffect = UIConfig.defaultScrollTouchEffect;
        if (flags & 64)
            this._bouncebackEffect = true;
        else if (flags & 128)
            this._bouncebackEffect = false;
        else
            this._bouncebackEffect = UIConfig.defaultScrollBounceEffect;
        if ((flags & 256) != 0)
            this._inertiaDisabled = true;
        if ((flags & 512) == 0)
            this._owner.element.clipping = true; //dont clip flag
        if ((flags & 1024) != 0)
            this._floating = true;
        if ((flags & 2048) == 0)
            this._maskContainer.clipping = true; //dont clip margin flag
        if (scrollBarDisplay == ScrollBarDisplayType.Default)
            scrollBarDisplay = UIConfig.defaultScrollBarDisplay;
        if (scrollBarDisplay != ScrollBarDisplayType.Hidden) {
            if (this._scrollType == ScrollType.Both || this._scrollType == ScrollType.Vertical) {
                var res = vtScrollBarRes ? vtScrollBarRes : UIConfig.verticalScrollBar;
                if (res) {
                    this._vtScrollBar = (UIPackage.createObjectFromURL(res));
                    if (!this._vtScrollBar)
                        throw "cannot create scrollbar} from " + res;
                    this._vtScrollBar.setScrollPane(this, true);
                    this._owner.element.addChild(this._vtScrollBar.element);
                }
            }
            if (this._scrollType == ScrollType.Both || this._scrollType == ScrollType.Horizontal) {
                res = hzScrollBarRes ? hzScrollBarRes : UIConfig.horizontalScrollBar;
                if (res) {
                    this._hzScrollBar = (UIPackage.createObjectFromURL(res));
                    if (!this._hzScrollBar)
                        throw "cannot create scrollbar} from " + res;
                    this._hzScrollBar.setScrollPane(this, false);
                    this._owner.element.addChild(this._hzScrollBar.element);
                }
            }
            if (scrollBarDisplay == ScrollBarDisplayType.Auto)
                this._scrollBarDisplayAuto = true;
            if (this._scrollBarDisplayAuto) {
                if (this._vtScrollBar)
                    this._vtScrollBar.element.visible = false;
                if (this._hzScrollBar)
                    this._hzScrollBar.element.visible = false;
            }
        }
        else
            this._mouseWheelEnabled = false;
        if (headerRes) {
            this._header = UIPackage.createObjectFromURL(headerRes);
            if (!this._header)
                throw new Error("cannot create scrollPane header from " + headerRes);
        }
        if (footerRes) {
            this._footer = UIPackage.createObjectFromURL(footerRes);
            if (!this._footer)
                throw new Error("cannot create scrollPane footer from " + footerRes);
        }
        if (this._header || this._footer)
            this._refreshBarAxis = (this._scrollType == ScrollType.Both || this._scrollType == ScrollType.Vertical) ? "y" : "x";
        this.setSize(this.owner.width, this.owner.height);
    }
    dispose() {
        if (this._tweening != 0)
            Timers.remove(this.tweenUpdate, this);
        delete this._pageController;
        if (this._hzScrollBar)
            this._hzScrollBar.dispose();
        if (this._vtScrollBar)
            this._vtScrollBar.dispose();
        if (this._header)
            this._header.dispose();
        if (this._footer)
            this._footer.dispose();
    }
    get owner() {
        return this._owner;
    }
    get hzScrollBar() {
        return this._hzScrollBar;
    }
    get vtScrollBar() {
        return this._vtScrollBar;
    }
    get header() {
        return this._header;
    }
    get footer() {
        return this._footer;
    }
    get bouncebackEffect() {
        return this._bouncebackEffect;
    }
    set bouncebackEffect(sc) {
        this._bouncebackEffect = sc;
    }
    get touchEffect() {
        return this._touchEffect;
    }
    set touchEffect(sc) {
        this._touchEffect = sc;
    }
    set scrollStep(val) {
        this._scrollStep = val;
        if (this._scrollStep == 0)
            this._scrollStep = UIConfig.defaultScrollStep;
    }
    get scrollStep() {
        return this._scrollStep;
    }
    get snapToItem() {
        return this._snapToItem;
    }
    set snapToItem(value) {
        this._snapToItem = value;
    }
    get mouseWheelEnabled() {
        return this._mouseWheelEnabled;
    }
    set mouseWheelEnabled(value) {
        this._mouseWheelEnabled = value;
    }
    get decelerationRate() {
        return this._decelerationRate;
    }
    set decelerationRate(value) {
        this._decelerationRate = value;
    }
    get isDragged() {
        return this._dragged;
    }
    get percX() {
        return this._overlapSize.x == 0 ? 0 : this._xPos / this._overlapSize.x;
    }
    set percX(value) {
        this.setPercX(value, false);
    }
    setPercX(value, ani) {
        this._owner.ensureBoundsCorrect();
        this.setPosX(this._overlapSize.x * clamp01(value), ani);
    }
    get percY() {
        return this._overlapSize.y == 0 ? 0 : this._yPos / this._overlapSize.y;
    }
    set percY(value) {
        this.setPercY(value, false);
    }
    setPercY(value, ani) {
        this._owner.ensureBoundsCorrect();
        this.setPosY(this._overlapSize.y * clamp01(value), ani);
    }
    get posX() {
        return this._xPos;
    }
    set posX(value) {
        this.setPosX(value, false);
    }
    setPosX(value, ani) {
        this._owner.ensureBoundsCorrect();
        if (this._loop == 1)
            value = this.loopCheckingNewPos(value, "x");
        value = clamp(value, 0, this._overlapSize.x);
        if (value != this._xPos) {
            this._xPos = value;
            this.posChanged(ani);
        }
    }
    get posY() {
        return this._yPos;
    }
    set posY(value) {
        this.setPosY(value, false);
    }
    setPosY(value, ani) {
        this._owner.ensureBoundsCorrect();
        if (this._loop == 1)
            value = this.loopCheckingNewPos(value, "y");
        value = clamp(value, 0, this._overlapSize.y);
        if (value != this._yPos) {
            this._yPos = value;
            this.posChanged(ani);
        }
    }
    get contentWidth() {
        return this._contentSize.x;
    }
    get contentHeight() {
        return this._contentSize.y;
    }
    get viewWidth() {
        return this._viewSize.x;
    }
    set viewWidth(value) {
        value = value + this._owner.margin.left + this._owner.margin.right;
        if (this._vtScrollBar && !this._floating)
            value += this._vtScrollBar.width;
        this._owner.width = value;
    }
    get viewHeight() {
        return this._viewSize.y;
    }
    set viewHeight(value) {
        value = value + this._owner.margin.top + this._owner.margin.bottom;
        if (this._hzScrollBar && !this._floating)
            value += this._hzScrollBar.height;
        this._owner.height = value;
    }
    get currentPageX() {
        if (!this._pageMode)
            return 0;
        var page = Math.floor(this._xPos / this._pageSize.x);
        if (this._xPos - page * this._pageSize.x > this._pageSize.x * 0.5)
            page++;
        return page;
    }
    set currentPageX(value) {
        this.setCurrentPageX(value, false);
    }
    get currentPageY() {
        if (!this._pageMode)
            return 0;
        var page = Math.floor(this._yPos / this._pageSize.y);
        if (this._yPos - page * this._pageSize.y > this._pageSize.y * 0.5)
            page++;
        return page;
    }
    set currentPageY(value) {
        this.setCurrentPageY(value, false);
    }
    setCurrentPageX(value, ani) {
        if (!this._pageMode)
            return;
        this._owner.ensureBoundsCorrect();
        if (this._overlapSize.x > 0)
            this.setPosX(value * this._pageSize.x, ani);
    }
    setCurrentPageY(value, ani) {
        if (!this._pageMode)
            return;
        this._owner.ensureBoundsCorrect();
        if (this._overlapSize.y > 0)
            this.setPosY(value * this._pageSize.y, ani);
    }
    get isBottomMost() {
        return this._yPos == this._overlapSize.y || this._overlapSize.y == 0;
    }
    get isRightMost() {
        return this._xPos == this._overlapSize.x || this._overlapSize.x == 0;
    }
    get pageController() {
        return this._pageController;
    }
    set pageController(value) {
        this._pageController = value;
    }
    get scrollingPosX() {
        return clamp(-this._container.x, 0, this._overlapSize.x);
    }
    get scrollingPosY() {
        return clamp(-this._container.y, 0, this._overlapSize.y);
    }
    scrollTop(ani) {
        this.setPercY(0, ani);
    }
    scrollBottom(ani) {
        this.setPercY(1, ani);
    }
    scrollUp(ratio, ani) {
        ratio = ratio || 1;
        if (this._pageMode)
            this.setPosY(this._yPos - this._pageSize.y * ratio, ani);
        else
            this.setPosY(this._yPos - this._scrollStep * ratio, ani);
    }
    scrollDown(ratio, ani) {
        ratio = ratio || 1;
        if (this._pageMode)
            this.setPosY(this._yPos + this._pageSize.y * ratio, ani);
        else
            this.setPosY(this._yPos + this._scrollStep * ratio, ani);
    }
    scrollLeft(ratio, ani) {
        ratio = ratio || 1;
        if (this._pageMode)
            this.setPosX(this._xPos - this._pageSize.x * ratio, ani);
        else
            this.setPosX(this._xPos - this._scrollStep * ratio, ani);
    }
    scrollRight(ratio, ani) {
        ratio = ratio || 1;
        if (this._pageMode)
            this.setPosX(this._xPos + this._pageSize.x * ratio, ani);
        else
            this.setPosX(this._xPos + this._scrollStep * ratio, ani);
    }
    scrollToView(target, ani, setFirst) {
        this._owner.ensureBoundsCorrect();
        if (this._needRefresh)
            this.refresh();
        var rect;
        if (target instanceof GObject) {
            if (target.parent != this._owner) {
                target.parent.localToGlobalRect(target.x, target.y, target.width, target.height, s_rect$1);
                rect = this._owner.globalToLocalRect(s_rect$1.x, s_rect$1.y, s_rect$1.width, s_rect$1.height, s_rect$1);
            }
            else {
                rect = s_rect$1;
                rect.set(target.x, target.y, target.width, target.height);
            }
        }
        else
            rect = target;
        if (this._overlapSize.y > 0) {
            var bottom = this._yPos + this._viewSize.y;
            if (setFirst || rect.y <= this._yPos || rect.height >= this._viewSize.y) {
                if (this._pageMode)
                    this.setPosY(Math.floor(rect.y / this._pageSize.y) * this._pageSize.y, ani);
                else
                    this.setPosY(rect.y, ani);
            }
            else if (rect.y + rect.height > bottom) {
                if (this._pageMode)
                    this.setPosY(Math.floor(rect.y / this._pageSize.y) * this._pageSize.y, ani);
                else if (rect.height <= this._viewSize.y / 2)
                    this.setPosY(rect.y + rect.height * 2 - this._viewSize.y, ani);
                else
                    this.setPosY(rect.y + rect.height - this._viewSize.y, ani);
            }
        }
        if (this._overlapSize.x > 0) {
            var right = this._xPos + this._viewSize.x;
            if (setFirst || rect.x <= this._xPos || rect.width >= this._viewSize.x) {
                if (this._pageMode)
                    this.setPosX(Math.floor(rect.x / this._pageSize.x) * this._pageSize.x, ani);
                else
                    this.setPosX(rect.x, ani);
            }
            else if (rect.x + rect.width > right) {
                if (this._pageMode)
                    this.setPosX(Math.floor(rect.x / this._pageSize.x) * this._pageSize.x, ani);
                else if (rect.width <= this._viewSize.x / 2)
                    this.setPosX(rect.x + rect.width * 2 - this._viewSize.x, ani);
                else
                    this.setPosX(rect.x + rect.width - this._viewSize.x, ani);
            }
        }
        if (!ani && this._needRefresh)
            this.refresh();
    }
    isChildInView(obj) {
        if (this._overlapSize.y > 0) {
            var dist = obj.y + this._container.y;
            if (dist < -obj.height || dist > this._viewSize.y)
                return false;
        }
        if (this._overlapSize.x > 0) {
            dist = obj.x + this._container.x;
            if (dist < -obj.width || dist > this._viewSize.x)
                return false;
        }
        return true;
    }
    cancelDragging() {
        this._owner.element.stage.removePointerMonitor(this._owner);
        if (ScrollPane.draggingPane == this)
            ScrollPane.draggingPane = null;
        s_gestureFlag = 0;
        this._dragged = false;
    }
    lockHeader(size) {
        if (this._headerLockedSize == size)
            return;
        this._headerLockedSize = size;
        if (!this._refreshEventDispatching && this._container[this._refreshBarAxis] >= 0) {
            this._tweenStart.set(this._container.x, this._container.y);
            this._tweenChange.set(0, 0);
            this._tweenChange[this._refreshBarAxis] = this._headerLockedSize - this._tweenStart[this._refreshBarAxis];
            this._tweenDuration.set(TWEEN_TIME_DEFAULT, TWEEN_TIME_DEFAULT);
            this.startTween(2);
        }
    }
    lockFooter(size) {
        if (this._footerLockedSize == size)
            return;
        this._footerLockedSize = size;
        if (!this._refreshEventDispatching && this._container[this._refreshBarAxis] <= -this._overlapSize[this._refreshBarAxis]) {
            this._tweenStart.set(this._container.x, this._container.y);
            this._tweenChange.set(0, 0);
            var max = this._overlapSize[this._refreshBarAxis];
            if (max == 0)
                max = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0);
            else
                max += this._footerLockedSize;
            this._tweenChange[this._refreshBarAxis] = -max - this._tweenStart[this._refreshBarAxis];
            this._tweenDuration.set(TWEEN_TIME_DEFAULT, TWEEN_TIME_DEFAULT);
            this.startTween(2);
        }
    }
    onOwnerSizeChanged() {
        this.setSize(this._owner.width, this._owner.height);
        this.posChanged(false);
    }
    handleControllerChanged(c) {
        if (this._pageController == c) {
            if (this._scrollType == ScrollType.Horizontal)
                this.setCurrentPageX(c.selectedIndex, true);
            else
                this.setCurrentPageY(c.selectedIndex, true);
        }
    }
    updatePageController() {
        if (this._pageController && !this._pageController.changing) {
            var index;
            if (this._scrollType == ScrollType.Horizontal)
                index = this.currentPageX;
            else
                index = this.currentPageY;
            if (index < this._pageController.pageCount) {
                var c = this._pageController;
                this._pageController = null; //防止HandleControllerChanged的调用
                c.selectedIndex = index;
                this._pageController = c;
            }
        }
    }
    adjustMaskContainer() {
        var mx, my;
        if (this._displayOnLeft && this._vtScrollBar && !this._floating)
            mx = Math.floor(this._owner.margin.left + this._vtScrollBar.width);
        else
            mx = Math.floor(this._owner.margin.left);
        my = Math.floor(this._owner.margin.top);
        mx += this._owner._alignOffset.x;
        my += this._owner._alignOffset.y;
        this._maskContainer.setPosition(mx, my);
    }
    setSize(aWidth, aHeight) {
        this.adjustMaskContainer();
        if (this._hzScrollBar) {
            this._hzScrollBar.y = aHeight - this._hzScrollBar.height;
            if (this._vtScrollBar) {
                this._hzScrollBar.width = aWidth - this._vtScrollBar.width - this._scrollBarMargin.left - this._scrollBarMargin.right;
                if (this._displayOnLeft)
                    this._hzScrollBar.x = this._scrollBarMargin.left + this._vtScrollBar.width;
                else
                    this._hzScrollBar.x = this._scrollBarMargin.left;
            }
            else {
                this._hzScrollBar.width = aWidth - this._scrollBarMargin.left - this._scrollBarMargin.right;
                this._hzScrollBar.x = this._scrollBarMargin.left;
            }
        }
        if (this._vtScrollBar) {
            if (!this._displayOnLeft)
                this._vtScrollBar.x = aWidth - this._vtScrollBar.width;
            if (this._hzScrollBar)
                this._vtScrollBar.height = aHeight - this._hzScrollBar.height - this._scrollBarMargin.top - this._scrollBarMargin.bottom;
            else
                this._vtScrollBar.height = aHeight - this._scrollBarMargin.top - this._scrollBarMargin.bottom;
            this._vtScrollBar.y = this._scrollBarMargin.top;
        }
        this._viewSize.x = aWidth;
        this._viewSize.y = aHeight;
        if (this._hzScrollBar && !this._floating)
            this._viewSize.y -= this._hzScrollBar.height;
        if (this._vtScrollBar && !this._floating)
            this._viewSize.x -= this._vtScrollBar.width;
        this._viewSize.x -= (this._owner.margin.left + this._owner.margin.right);
        this._viewSize.y -= (this._owner.margin.top + this._owner.margin.bottom);
        this._viewSize.x = Math.max(1, this._viewSize.x);
        this._viewSize.y = Math.max(1, this._viewSize.y);
        this._pageSize.x = this._viewSize.x;
        this._pageSize.y = this._viewSize.y;
        this.handleSizeChanged();
    }
    setContentSize(aWidth, aHeight) {
        if (this._contentSize.x == aWidth && this._contentSize.y == aHeight)
            return;
        this._contentSize.x = aWidth;
        this._contentSize.y = aHeight;
        this.handleSizeChanged();
    }
    changeContentSizeOnScrolling(deltaWidth, deltaHeight, deltaPosX, deltaPosY) {
        var isRightmost = this._xPos == this._overlapSize.x;
        var isBottom = this._yPos == this._overlapSize.y;
        this._contentSize.x += deltaWidth;
        this._contentSize.y += deltaHeight;
        this.handleSizeChanged();
        if (this._tweening == 1) {
            //如果原来滚动位置是贴边，加入处理继续贴边。
            if (deltaWidth != 0 && isRightmost && this._tweenChange.x < 0) {
                this._xPos = this._overlapSize.x;
                this._tweenChange.x = -this._xPos - this._tweenStart.x;
            }
            if (deltaHeight != 0 && isBottom && this._tweenChange.y < 0) {
                this._yPos = this._overlapSize.y;
                this._tweenChange.y = -this._yPos - this._tweenStart.y;
            }
        }
        else if (this._tweening == 2) {
            //重新调整起始位置，确保能够顺滑滚下去
            if (deltaPosX != 0) {
                this._container.x -= deltaPosX;
                this._tweenStart.x -= deltaPosX;
                this._xPos = -this._container.x;
            }
            if (deltaPosY != 0) {
                this._container.y -= deltaPosY;
                this._tweenStart.y -= deltaPosY;
                this._yPos = -this._container.y;
            }
        }
        else if (this._dragged) {
            if (deltaPosX != 0) {
                this._container.x -= deltaPosX;
                this._containerPos.x -= deltaPosX;
                this._xPos = -this._container.x;
            }
            if (deltaPosY != 0) {
                this._container.y -= deltaPosY;
                this._containerPos.y -= deltaPosY;
                this._yPos = -this._container.y;
            }
        }
        else {
            //如果原来滚动位置是贴边，加入处理继续贴边。
            if (deltaWidth != 0 && isRightmost) {
                this._xPos = this._overlapSize.x;
                this._container.x = -this._xPos;
            }
            if (deltaHeight != 0 && isBottom) {
                this._yPos = this._overlapSize.y;
                this._container.y = -this._yPos;
            }
        }
        if (this._pageMode)
            this.updatePageController();
    }
    handleSizeChanged() {
        if (this._displayInDemand) {
            this._vScrollNone = this._contentSize.y <= this._viewSize.y;
            this._hScrollNone = this._contentSize.x <= this._viewSize.x;
        }
        if (this._vtScrollBar) {
            if (this._contentSize.y == 0)
                this._vtScrollBar.setDisplayPerc(0);
            else
                this._vtScrollBar.setDisplayPerc(Math.min(1, this._viewSize.y / this._contentSize.y));
        }
        if (this._hzScrollBar) {
            if (this._contentSize.x == 0)
                this._hzScrollBar.setDisplayPerc(0);
            else
                this._hzScrollBar.setDisplayPerc(Math.min(1, this._viewSize.x / this._contentSize.x));
        }
        this.updateScrollBarVisible();
        let mw = this._viewSize.x;
        let mh = this._viewSize.y;
        if (this._vScrollNone && this._vtScrollBar != null)
            mw += this._vtScrollBar.width;
        if (this._hScrollNone && this._hzScrollBar != null)
            mh += this._hzScrollBar.height;
        this._maskContainer.setSize(mw, mh);
        if (this._scrollType == ScrollType.Horizontal || this._scrollType == ScrollType.Both)
            this._overlapSize.x = Math.ceil(Math.max(0, this._contentSize.x - this._viewSize.x));
        else
            this._overlapSize.x = 0;
        if (this._scrollType == ScrollType.Vertical || this._scrollType == ScrollType.Both)
            this._overlapSize.y = Math.ceil(Math.max(0, this._contentSize.y - this._viewSize.y));
        else
            this._overlapSize.y = 0;
        //边界检查
        this._xPos = clamp(this._xPos, 0, this._overlapSize.x);
        this._yPos = clamp(this._yPos, 0, this._overlapSize.y);
        if (this._refreshBarAxis) {
            var max = this._overlapSize[this._refreshBarAxis];
            if (max == 0)
                max = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0);
            else
                max += this._footerLockedSize;
            if (this._refreshBarAxis == "x") {
                this._container.setPosition(clamp(this._container.x, -max, this._headerLockedSize), clamp(this._container.y, -this._overlapSize.y, 0));
            }
            else {
                this._container.setPosition(clamp(this._container.x, -this._overlapSize.x, 0), clamp(this._container.y, -max, this._headerLockedSize));
            }
            if (this._header) {
                if (this._refreshBarAxis == "x")
                    this._header.height = this._viewSize.y;
                else
                    this._header.width = this._viewSize.x;
            }
            if (this._footer) {
                if (this._refreshBarAxis == "y")
                    this._footer.height = this._viewSize.y;
                else
                    this._footer.width = this._viewSize.x;
            }
        }
        else {
            this._container.setPosition(clamp(this._container.x, -this._overlapSize.x, 0), clamp(this._container.y, -this._overlapSize.y, 0));
        }
        this.updateScrollBarPos();
        if (this._pageMode)
            this.updatePageController();
    }
    posChanged(ani) {
        if (this._aniFlag == 0)
            this._aniFlag = ani ? 1 : -1;
        else if (this._aniFlag == 1 && !ani)
            this._aniFlag = -1;
        this._needRefresh = true;
        Timers.callLater(this.refresh, this);
    }
    refresh() {
        if (this._owner.element == null) {
            return;
        }
        this._needRefresh = false;
        Timers.remove(this.refresh, this);
        if (this._pageMode || this._snapToItem) {
            s_endPos.set(-this._xPos, -this._yPos);
            this.alignPosition(s_endPos, false);
            this._xPos = -s_endPos.x;
            this._yPos = -s_endPos.y;
        }
        this.refresh2();
        this._owner.emit("scroll");
        if (this._needRefresh) //在onScroll事件里开发者可能修改位置，这里再刷新一次，避免闪烁
         {
            this._needRefresh = false;
            Timers.remove(this.refresh, this);
            this.refresh2();
        }
        this.updateScrollBarPos();
        this._aniFlag = 0;
    }
    refresh2() {
        if (this._aniFlag == 1 && !this._dragged) {
            var posX;
            var posY;
            if (this._overlapSize.x > 0)
                posX = -Math.floor(this._xPos);
            else {
                if (this._container.x != 0)
                    this._container.x = 0;
                posX = 0;
            }
            if (this._overlapSize.y > 0)
                posY = -Math.floor(this._yPos);
            else {
                if (this._container.y != 0)
                    this._container.y = 0;
                posY = 0;
            }
            if (posX != this._container.x || posY != this._container.y) {
                this._tweenDuration.set(TWEEN_TIME_GO, TWEEN_TIME_GO);
                this._tweenStart.set(this._container.x, this._container.y);
                this._tweenChange.set(posX - this._tweenStart.x, posY - this._tweenStart.y);
                this.startTween(1);
            }
            else if (this._tweening != 0)
                this.killTween();
        }
        else {
            if (this._tweening != 0)
                this.killTween();
            this._container.setPosition(Math.floor(-this._xPos), Math.floor(-this._yPos));
            this.loopCheckingCurrent();
        }
        if (this._pageMode)
            this.updatePageController();
    }
    __touchBegin(evt) {
        if (!this._touchEffect)
            return;
        if (evt.input.button != 0)
            return;
        evt.capturePointer();
        if (this._tweening != 0) {
            this.killTween();
            this._owner.element.stage.cancelClick(evt.input.pointerId);
            this._dragged = true;
        }
        else
            this._dragged = false;
        var pt = this._owner.globalToLocal(evt.input.x, evt.input.y, s_vec2$2);
        this._containerPos.set(this._container.x, this._container.y);
        this._beginTouchPos.set(pt.x, pt.y);
        this._lastTouchPos.set(pt.x, pt.y);
        this._lastTouchGlobalPos.set(evt.input.x, evt.input.y);
        this._isHoldAreaDone = false;
        this._velocity.set(0, 0);
        this._velocityScale = 1;
        this._lastMoveTime = performance.now() / 1000;
    }
    __touchMove(evt) {
        if (!this._touchEffect || this.owner.isDisposed)
            return;
        if (ScrollPane.draggingPane && ScrollPane.draggingPane != this || GObject.draggingObject) //已经有其他拖动
            return;
        var sensitivity = UIConfig.touchScrollSensitivity;
        var pt = this._owner.globalToLocal(evt.input.x, evt.input.y);
        var diff;
        var sv, sh;
        if (this._scrollType == ScrollType.Vertical) {
            if (!this._isHoldAreaDone) {
                //表示正在监测垂直方向的手势
                s_gestureFlag |= 1;
                diff = Math.abs(this._beginTouchPos.y - pt.y);
                if (diff < sensitivity)
                    return;
                if ((s_gestureFlag & 2) != 0) //已经有水平方向的手势在监测，那么我们用严格的方式检查是不是按垂直方向移动，避免冲突
                 {
                    let diff2 = Math.abs(this._beginTouchPos.x - pt.x);
                    if (diff < diff2) //不通过则不允许滚动了
                        return;
                }
            }
            sv = true;
        }
        else if (this._scrollType == ScrollType.Horizontal) {
            if (!this._isHoldAreaDone) {
                s_gestureFlag |= 2;
                diff = Math.abs(this._beginTouchPos.x - pt.x);
                if (diff < sensitivity)
                    return;
                if ((s_gestureFlag & 1) != 0) {
                    let diff2 = Math.abs(this._beginTouchPos.y - pt.y);
                    if (diff < diff2)
                        return;
                }
            }
            sh = true;
        }
        else {
            s_gestureFlag = 3;
            if (!this._isHoldAreaDone) {
                diff = Math.abs(this._beginTouchPos.y - pt.y);
                if (diff < sensitivity) {
                    diff = Math.abs(this._beginTouchPos.x - pt.x);
                    if (diff < sensitivity)
                        return;
                }
            }
            sv = sh = true;
        }
        var newPosX = Math.floor(this._containerPos.x + pt.x - this._beginTouchPos.x);
        var newPosY = Math.floor(this._containerPos.y + pt.y - this._beginTouchPos.y);
        if (sv) {
            if (newPosY > 0) {
                if (!this._bouncebackEffect)
                    this._container.y = 0;
                else if (this._header && this._header.maxHeight != 0)
                    this._container.y = Math.floor(Math.min(newPosY * 0.5, this._header.maxHeight));
                else
                    this._container.y = Math.floor(Math.min(newPosY * 0.5, this._viewSize.y * PULL_RATIO));
            }
            else if (newPosY < -this._overlapSize.y) {
                if (!this._bouncebackEffect)
                    this._container.y = -this._overlapSize.y;
                else if (this._footer && this._footer.maxHeight > 0)
                    this._container.y = Math.floor(Math.max((newPosY + this._overlapSize.y) * 0.5, -this._footer.maxHeight) - this._overlapSize.y);
                else
                    this._container.y = Math.floor(Math.max((newPosY + this._overlapSize.y) * 0.5, -this._viewSize.y * PULL_RATIO) - this._overlapSize.y);
            }
            else
                this._container.y = newPosY;
        }
        if (sh) {
            if (newPosX > 0) {
                if (!this._bouncebackEffect)
                    this._container.x = 0;
                else if (this._header && this._header.maxWidth != 0)
                    this._container.x = Math.floor(Math.min(newPosX * 0.5, this._header.maxWidth));
                else
                    this._container.x = Math.floor(Math.min(newPosX * 0.5, this._viewSize.x * PULL_RATIO));
            }
            else if (newPosX < 0 - this._overlapSize.x) {
                if (!this._bouncebackEffect)
                    this._container.x = -this._overlapSize.x;
                else if (this._footer && this._footer.maxWidth > 0)
                    this._container.x = Math.floor(Math.max((newPosX + this._overlapSize.x) * 0.5, -this._footer.maxWidth) - this._overlapSize.x);
                else
                    this._container.x = Math.floor(Math.max((newPosX + this._overlapSize.x) * 0.5, -this._viewSize.x * PULL_RATIO) - this._overlapSize.x);
            }
            else
                this._container.x = newPosX;
        }
        //更新速度
        var frameRate = 60;
        var now = performance.now() / 1000;
        var deltaTime = Math.max(now - this._lastMoveTime, 1 / frameRate);
        var deltaPositionX = pt.x - this._lastTouchPos.x;
        var deltaPositionY = pt.y - this._lastTouchPos.y;
        if (!sh)
            deltaPositionX = 0;
        if (!sv)
            deltaPositionY = 0;
        if (deltaTime != 0) {
            var elapsed = deltaTime * frameRate - 1;
            if (elapsed > 1) //速度衰减
             {
                var factor = Math.pow(0.833, elapsed);
                this._velocity.x = this._velocity.x * factor;
                this._velocity.y = this._velocity.y * factor;
            }
            this._velocity.x = lerp(this._velocity.x, deltaPositionX * 60 / frameRate / deltaTime, deltaTime * 10);
            this._velocity.y = lerp(this._velocity.y, deltaPositionY * 60 / frameRate / deltaTime, deltaTime * 10);
        }
        /*速度计算使用的是本地位移，但在后续的惯性滚动判断中需要用到屏幕位移，所以这里要记录一个位移的比例。
        */
        var deltaGlobalPositionX = this._lastTouchGlobalPos.x - evt.input.x;
        var deltaGlobalPositionY = this._lastTouchGlobalPos.y - evt.input.y;
        if (deltaPositionX != 0)
            this._velocityScale = Math.abs(deltaGlobalPositionX / deltaPositionX);
        else if (deltaPositionY != 0)
            this._velocityScale = Math.abs(deltaGlobalPositionY / deltaPositionY);
        this._lastTouchPos.set(pt.x, pt.y);
        this._lastTouchGlobalPos.set(evt.input.x, evt.input.y);
        this._lastMoveTime = now;
        //同步更新pos值
        if (this._overlapSize.x > 0)
            this._xPos = clamp(-this._container.x, 0, this._overlapSize.x);
        if (this._overlapSize.y > 0)
            this._yPos = clamp(-this._container.y, 0, this._overlapSize.y);
        //循环滚动特别检查
        if (this._loop != 0) {
            newPosX = this._container.x;
            newPosY = this._container.y;
            if (this.loopCheckingCurrent()) {
                this._containerPos.x += this._container.x - newPosX;
                this._containerPos.y += this._container.y - newPosY;
            }
        }
        ScrollPane.draggingPane = this;
        this._isHoldAreaDone = true;
        this._dragged = true;
        this.updateScrollBarPos();
        this.updateScrollBarVisible();
        if (this._pageMode)
            this.updatePageController();
        this._owner.emit("scroll");
    }
    __touchEnd() {
        if (ScrollPane.draggingPane == this)
            ScrollPane.draggingPane = null;
        s_gestureFlag = 0;
        if (!this._dragged || !this._touchEffect) {
            this._dragged = false;
            return;
        }
        this._dragged = false;
        this._tweenStart.set(this._container.x, this._container.y);
        s_endPos.set(this._tweenStart.x, this._tweenStart.y);
        var flag = false;
        if (this._container.x > 0) {
            s_endPos.x = 0;
            flag = true;
        }
        else if (this._container.x < -this._overlapSize.x) {
            s_endPos.x = -this._overlapSize.x;
            flag = true;
        }
        if (this._container.y > 0) {
            s_endPos.y = 0;
            flag = true;
        }
        else if (this._container.y < -this._overlapSize.y) {
            s_endPos.y = -this._overlapSize.y;
            flag = true;
        }
        if (flag) {
            this._tweenChange.set(s_endPos.x - this._tweenStart.x, s_endPos.y - this._tweenStart.y);
            if (this._tweenChange.x < -UIConfig.touchDragSensitivity || this._tweenChange.y < -UIConfig.touchDragSensitivity) {
                this._refreshEventDispatching = true;
                this._owner.emit("pull_down_release");
                this._refreshEventDispatching = false;
            }
            else if (this._tweenChange.x > UIConfig.touchDragSensitivity || this._tweenChange.y > UIConfig.touchDragSensitivity) {
                this._refreshEventDispatching = true;
                this._owner.emit("pull_up_release");
                this._refreshEventDispatching = false;
            }
            if (this._headerLockedSize > 0 && s_endPos[this._refreshBarAxis] == 0) {
                s_endPos[this._refreshBarAxis] = this._headerLockedSize;
                this._tweenChange.x = s_endPos.x - this._tweenStart.x;
                this._tweenChange.y = s_endPos.y - this._tweenStart.y;
            }
            else if (this._footerLockedSize > 0 && s_endPos[this._refreshBarAxis] == -this._overlapSize[this._refreshBarAxis]) {
                var max = this._overlapSize[this._refreshBarAxis];
                if (max == 0)
                    max = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0);
                else
                    max += this._footerLockedSize;
                s_endPos[this._refreshBarAxis] = -max;
                this._tweenChange.x = s_endPos.x - this._tweenStart.x;
                this._tweenChange.y = s_endPos.y - this._tweenStart.y;
            }
            this._tweenDuration.set(TWEEN_TIME_DEFAULT, TWEEN_TIME_DEFAULT);
        }
        else {
            //更新速度
            if (!this._inertiaDisabled) {
                var frameRate = 60;
                var elapsed = (performance.now() / 1000 - this._lastMoveTime) * frameRate - 1;
                if (elapsed > 1) {
                    var factor = Math.pow(0.833, elapsed);
                    this._velocity.x = this._velocity.x * factor;
                    this._velocity.y = this._velocity.y * factor;
                }
                //根据速度计算目标位置和需要时间
                this.updateTargetAndDuration(this._tweenStart, s_endPos);
            }
            else
                this._tweenDuration.set(TWEEN_TIME_DEFAULT, TWEEN_TIME_DEFAULT);
            s_oldChange.set(s_endPos.x - this._tweenStart.x, s_endPos.y - this._tweenStart.y);
            //调整目标位置
            this.loopCheckingTarget(s_endPos);
            if (this._pageMode || this._snapToItem)
                this.alignPosition(s_endPos, true);
            this._tweenChange.x = s_endPos.x - this._tweenStart.x;
            this._tweenChange.y = s_endPos.y - this._tweenStart.y;
            if (this._tweenChange.x == 0 && this._tweenChange.y == 0) {
                this.updateScrollBarVisible();
                return;
            }
            //如果目标位置已调整，随之调整需要时间
            if (this._pageMode || this._snapToItem) {
                this.fixDuration("x", s_oldChange.x);
                this.fixDuration("y", s_oldChange.y);
            }
        }
        this.startTween(2);
    }
    __mouseWheel(evt) {
        if (!this._mouseWheelEnabled)
            return;
        var delta = evt.input.mouseWheelDelta;
        if (this._snapToItem && Math.abs(delta) < 1)
            delta = Math.sign(delta);
        if (this._overlapSize.x > 0 && this._overlapSize.y == 0) {
            let step = this._pageMode ? this._pageSize.x : this._scrollStep;
            this.setPosX(this._xPos + step * delta, false);
        }
        else {
            let step = this._pageMode ? this._pageSize.y : this._scrollStep;
            this.setPosY(this._yPos + step * delta, false);
        }
    }
    updateScrollBarPos() {
        if (this._vtScrollBar)
            this._vtScrollBar.setScrollPerc(this._overlapSize.y == 0 ? 0 : clamp(-this._container.y, 0, this._overlapSize.y) / this._overlapSize.y);
        if (this._hzScrollBar)
            this._hzScrollBar.setScrollPerc(this._overlapSize.x == 0 ? 0 : clamp(-this._container.x, 0, this._overlapSize.x) / this._overlapSize.x);
        this.checkRefreshBar();
    }
    updateScrollBarVisible() {
        if (this._vtScrollBar) {
            if (this._viewSize.y <= this._vtScrollBar.minSize || this._vScrollNone)
                this._vtScrollBar.element.visible = false;
            else
                this.updateScrollBarVisible2(this._vtScrollBar);
        }
        if (this._hzScrollBar) {
            if (this._viewSize.x <= this._hzScrollBar.minSize || this._hScrollNone)
                this._hzScrollBar.element.visible = false;
            else
                this.updateScrollBarVisible2(this._hzScrollBar);
        }
    }
    updateScrollBarVisible2(bar) {
        if (this._scrollBarDisplayAuto)
            GTween.kill(bar, false, "alpha");
        if (this._scrollBarDisplayAuto && this._tweening == 0 && !this._dragged && !bar.gripDragging) {
            if (bar.element.visible)
                GTween.to(1, 0, 0.5).setDelay(0.5).onComplete(this.__barTweenComplete, this).setTarget(bar, "alpha");
        }
        else {
            bar.alpha = 1;
            bar.element.visible = true;
        }
    }
    __barTweenComplete(tweener) {
        var bar = (tweener.target);
        bar.alpha = 1;
        bar.element.visible = false;
    }
    getLoopPartSize(division, axis) {
        return (this._contentSize[axis] + (axis == "x" ? (this._owner).columnGap : (this._owner).lineGap)) / division;
    }
    loopCheckingCurrent() {
        var changed = false;
        if (this._loop == 1 && this._overlapSize.x > 0) {
            if (this._xPos < 0.001) {
                this._xPos += this.getLoopPartSize(2, "x");
                changed = true;
            }
            else if (this._xPos >= this._overlapSize.x) {
                this._xPos -= this.getLoopPartSize(2, "x");
                changed = true;
            }
        }
        else if (this._loop == 2 && this._overlapSize.y > 0) {
            if (this._yPos < 0.001) {
                this._yPos += this.getLoopPartSize(2, "y");
                changed = true;
            }
            else if (this._yPos >= this._overlapSize.y) {
                this._yPos -= this.getLoopPartSize(2, "y");
                changed = true;
            }
        }
        if (changed)
            this._container.setPosition(Math.floor(-this._xPos), Math.floor(-this._yPos));
        return changed;
    }
    loopCheckingTarget(endPos) {
        if (this._loop == 1)
            this.loopCheckingTarget2(endPos, "x");
        if (this._loop == 2)
            this.loopCheckingTarget2(endPos, "y");
    }
    loopCheckingTarget2(endPos, axis) {
        var halfSize;
        var tmp;
        if (endPos[axis] > 0) {
            halfSize = this.getLoopPartSize(2, axis);
            tmp = this._tweenStart[axis] - halfSize;
            if (tmp <= 0 && tmp >= -this._overlapSize[axis]) {
                endPos[axis] -= halfSize;
                this._tweenStart[axis] = tmp;
            }
        }
        else if (endPos[axis] < -this._overlapSize[axis]) {
            halfSize = this.getLoopPartSize(2, axis);
            tmp = this._tweenStart[axis] + halfSize;
            if (tmp <= 0 && tmp >= -this._overlapSize[axis]) {
                endPos[axis] += halfSize;
                this._tweenStart[axis] = tmp;
            }
        }
    }
    loopCheckingNewPos(value, axis) {
        if (this._overlapSize[axis] == 0)
            return value;
        var pos = axis == "x" ? this._xPos : this._yPos;
        var changed = false;
        var v;
        if (value < 0.001) {
            value += this.getLoopPartSize(2, axis);
            if (value > pos) {
                v = this.getLoopPartSize(6, axis);
                v = Math.ceil((value - pos) / v) * v;
                pos = clamp(pos + v, 0, this._overlapSize[axis]);
                changed = true;
            }
        }
        else if (value >= this._overlapSize[axis]) {
            value -= this.getLoopPartSize(2, axis);
            if (value < pos) {
                v = this.getLoopPartSize(6, axis);
                v = Math.ceil((pos - value) / v) * v;
                pos = clamp(pos - v, 0, this._overlapSize[axis]);
                changed = true;
            }
        }
        if (changed) {
            if (axis == "x")
                this._container.x = -Math.floor(pos);
            else
                this._container.y = -Math.floor(pos);
        }
        return value;
    }
    alignPosition(pos, inertialScrolling) {
        if (this._pageMode) {
            pos.x = this.alignByPage(pos.x, "x", inertialScrolling);
            pos.y = this.alignByPage(pos.y, "y", inertialScrolling);
        }
        else if (this._snapToItem) {
            var xDir = 0;
            var yDir = 0;
            if (inertialScrolling) {
                xDir = pos.x - this._containerPos.x;
                yDir = pos.y - this._containerPos.y;
            }
            var pt = this._owner.getSnappingPositionWithDir(-pos.x, -pos.y, xDir, yDir, s_vec2$2);
            if (pos.x < 0 && pos.x > -this._overlapSize.x)
                pos.x = -pt.x;
            if (pos.y < 0 && pos.y > -this._overlapSize.y)
                pos.y = -pt.y;
        }
    }
    alignByPage(pos, axis, inertialScrolling) {
        var page;
        if (pos > 0)
            page = 0;
        else if (pos < -this._overlapSize[axis])
            page = Math.ceil(this._contentSize[axis] / this._pageSize[axis]) - 1;
        else {
            page = Math.floor(-pos / this._pageSize[axis]);
            var change = inertialScrolling ? (pos - this._containerPos[axis]) : (pos - this._container[axis]);
            var testPageSize = Math.min(this._pageSize[axis], this._contentSize[axis] - (page + 1) * this._pageSize[axis]);
            var delta = -pos - page * this._pageSize[axis];
            //页面吸附策略
            if (Math.abs(change) > this._pageSize[axis]) //如果滚动距离超过1页,则需要超过页面的一半，才能到更下一页
             {
                if (delta > testPageSize * 0.5)
                    page++;
            }
            else //否则只需要页面的1/3，当然，需要考虑到左移和右移的情况
             {
                if (delta > testPageSize * (change < 0 ? UIConfig.defaultScrollPagingThreshold : (1 - UIConfig.defaultScrollPagingThreshold)))
                    page++;
            }
            //重新计算终点
            pos = -page * this._pageSize[axis];
            if (pos < -this._overlapSize[axis]) //最后一页未必有pageSize那么大
                pos = -this._overlapSize[axis];
        }
        //惯性滚动模式下，会增加判断尽量不要滚动超过一页
        if (inertialScrolling) {
            var oldPos = this._tweenStart[axis];
            var oldPage;
            if (oldPos > 0)
                oldPage = 0;
            else if (oldPos < -this._overlapSize[axis])
                oldPage = Math.ceil(this._contentSize[axis] / this._pageSize[axis]) - 1;
            else
                oldPage = Math.floor(-oldPos / this._pageSize[axis]);
            var startPage = Math.floor(-this._containerPos[axis] / this._pageSize[axis]);
            if (Math.abs(page - startPage) > 1 && Math.abs(oldPage - startPage) <= 1) {
                if (page > startPage)
                    page = startPage + 1;
                else
                    page = startPage - 1;
                pos = -page * this._pageSize[axis];
            }
        }
        return pos;
    }
    updateTargetAndDuration(orignPos, resultPos) {
        resultPos.x = this.updateTargetAndDuration2(orignPos.x, "x");
        resultPos.y = this.updateTargetAndDuration2(orignPos.y, "y");
    }
    updateTargetAndDuration2(pos, axis) {
        var v = this._velocity[axis];
        var duration = 0;
        if (pos > 0)
            pos = 0;
        else if (pos < -this._overlapSize[axis])
            pos = -this._overlapSize[axis];
        else {
            //以屏幕像素为基准
            var v2 = Math.abs(v) * this._velocityScale;
            //在移动设备上，需要对不同分辨率做一个适配，我们的速度判断以1136分辨率为基准
            let touchScreen = this._owner.element.stage.touchScreen;
            if (touchScreen)
                v2 *= 1136 / Math.max(window.screen.width, window.screen.height);
            //这里有一些阈值的处理，因为在低速内，不希望产生较大的滚动（甚至不滚动）
            var ratio = 0;
            if (this._pageMode || !touchScreen) {
                if (v2 > 500)
                    ratio = Math.pow((v2 - 500) / 500, 2);
            }
            else {
                if (v2 > 1000)
                    ratio = Math.pow((v2 - 1000) / 1000, 2);
            }
            if (ratio != 0) {
                if (ratio > 1)
                    ratio = 1;
                v2 *= ratio;
                v *= ratio;
                this._velocity[axis] = v;
                //算法：v*（_decelerationRate的n次幂）= 60，即在n帧后速度降为60（假设每秒60帧）。
                duration = Math.log(60 / v2) / Math.log(this._decelerationRate) / 60;
                //计算距离要使用本地速度
                //理论公式貌似滚动的距离不够，改为经验公式
                //var change:number = (v/ 60 - 1) / (1 - this._decelerationRate);
                var change = Math.floor(v * duration * 0.4);
                pos += change;
            }
        }
        if (duration < TWEEN_TIME_DEFAULT)
            duration = TWEEN_TIME_DEFAULT;
        this._tweenDuration[axis] = duration;
        return pos;
    }
    fixDuration(axis, oldChange) {
        if (this._tweenChange[axis] == 0 || Math.abs(this._tweenChange[axis]) >= Math.abs(oldChange))
            return;
        var newDuration = Math.abs(this._tweenChange[axis] / oldChange) * this._tweenDuration[axis];
        if (newDuration < TWEEN_TIME_DEFAULT)
            newDuration = TWEEN_TIME_DEFAULT;
        this._tweenDuration[axis] = newDuration;
    }
    startTween(type) {
        this._tweenTime.set(0, 0);
        this._tweening = type;
        Timers.addUpdate(this.tweenUpdate, this);
        this.updateScrollBarVisible();
    }
    killTween() {
        if (this._tweening == 1) //取消类型为1的tween需立刻设置到终点
         {
            this._container.setPosition(this._tweenStart.x + this._tweenChange.x, this._tweenStart.y + this._tweenChange.y);
            this._owner.emit("scroll");
        }
        this._tweening = 0;
        Timers.remove(this.tweenUpdate, this);
        this.updateScrollBarVisible();
        this._owner.emit("scroll_end");
    }
    checkRefreshBar() {
        if (this._header == null && this._footer == null)
            return;
        var pos = this._container[this._refreshBarAxis];
        if (this._header) {
            if (pos > 0) {
                if (this._header.element.parent == null)
                    this._maskContainer.addChildAt(this._header.element, 0);
                var pt = s_vec2$2;
                pt.set(this._header.width, this._header.height);
                pt[this._refreshBarAxis] = pos;
                this._header.setSize(pt.x, pt.y);
            }
            else {
                if (this._header.element.parent)
                    this._maskContainer.removeChild(this._header.element);
            }
        }
        if (this._footer) {
            var max = this._overlapSize[this._refreshBarAxis];
            if (pos < -max || max == 0 && this._footerLockedSize > 0) {
                if (this._footer.element.parent == null)
                    this._maskContainer.addChildAt(this._footer.element, 0);
                pt = s_vec2$2;
                pt.set(this._footer.x, this._footer.y);
                if (max > 0)
                    pt[this._refreshBarAxis] = pos + this._contentSize[this._refreshBarAxis];
                else
                    pt[this._refreshBarAxis] = Math.max(Math.min(pos + this._viewSize[this._refreshBarAxis], this._viewSize[this._refreshBarAxis] - this._footerLockedSize), this._viewSize[this._refreshBarAxis] - this._contentSize[this._refreshBarAxis]);
                this._footer.setPosition(pt.x, pt.y);
                pt.set(this._footer.width, this._footer.height);
                if (max > 0)
                    pt[this._refreshBarAxis] = -max - pos;
                else
                    pt[this._refreshBarAxis] = this._viewSize[this._refreshBarAxis] - this._footer[this._refreshBarAxis];
                this._footer.setSize(pt.x, pt.y);
            }
            else {
                if (this._footer.element.parent)
                    this._maskContainer.removeChild(this._footer.element);
            }
        }
    }
    tweenUpdate() {
        var nx = this.runTween("x");
        var ny = this.runTween("y");
        this._container.setPosition(nx, ny);
        if (this._tweening == 2) {
            if (this._overlapSize.x > 0)
                this._xPos = clamp(-nx, 0, this._overlapSize.x);
            if (this._overlapSize.y > 0)
                this._yPos = clamp(-ny, 0, this._overlapSize.y);
            if (this._pageMode)
                this.updatePageController();
        }
        if (this._tweenChange.x == 0 && this._tweenChange.y == 0) {
            this._tweening = 0;
            Timers.remove(this.tweenUpdate, this);
            this.loopCheckingCurrent();
            this.updateScrollBarPos();
            this.updateScrollBarVisible();
            this._owner.emit("scroll");
            this._owner.emit("scroll_end");
        }
        else {
            this.updateScrollBarPos();
            this._owner.emit("scroll");
        }
    }
    runTween(axis) {
        var newValue;
        if (this._tweenChange[axis] != 0) {
            this._tweenTime[axis] += Timers.deltaTime / 1000;
            if (this._tweenTime[axis] >= this._tweenDuration[axis]) {
                newValue = this._tweenStart[axis] + this._tweenChange[axis];
                this._tweenChange[axis] = 0;
            }
            else {
                var ratio = easeFunc(this._tweenTime[axis], this._tweenDuration[axis]);
                newValue = this._tweenStart[axis] + Math.floor(this._tweenChange[axis] * ratio);
            }
            var threshold1 = 0;
            var threshold2 = -this._overlapSize[axis];
            if (this._headerLockedSize > 0 && this._refreshBarAxis == axis)
                threshold1 = this._headerLockedSize;
            if (this._footerLockedSize > 0 && this._refreshBarAxis == axis) {
                var max = this._overlapSize[this._refreshBarAxis];
                if (max == 0)
                    max = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0);
                else
                    max += this._footerLockedSize;
                threshold2 = -max;
            }
            if (this._tweening == 2 && this._bouncebackEffect) {
                if (newValue > 20 + threshold1 && this._tweenChange[axis] > 0
                    || newValue > threshold1 && this._tweenChange[axis] == 0) //开始回弹
                 {
                    this._tweenTime[axis] = 0;
                    this._tweenDuration[axis] = TWEEN_TIME_DEFAULT;
                    this._tweenChange[axis] = -newValue + threshold1;
                    this._tweenStart[axis] = newValue;
                }
                else if (newValue < threshold2 - 20 && this._tweenChange[axis] < 0
                    || newValue < threshold2 && this._tweenChange[axis] == 0) //开始回弹
                 {
                    this._tweenTime[axis] = 0;
                    this._tweenDuration[axis] = TWEEN_TIME_DEFAULT;
                    this._tweenChange[axis] = threshold2 - newValue;
                    this._tweenStart[axis] = newValue;
                }
            }
            else {
                if (newValue > threshold1) {
                    newValue = threshold1;
                    this._tweenChange[axis] = 0;
                }
                else if (newValue < threshold2) {
                    newValue = threshold2;
                    this._tweenChange[axis] = 0;
                }
            }
        }
        else
            newValue = this._container[axis];
        return newValue;
    }
}
function easeFunc(t, d) {
    return (t = t / d - 1) * t * t + 1; //cubicOut
}

var CurveType;
(function (CurveType) {
    CurveType[CurveType["CRSpline"] = 0] = "CRSpline";
    CurveType[CurveType["Bezier"] = 1] = "Bezier";
    CurveType[CurveType["CubicBezier"] = 2] = "CubicBezier";
    CurveType[CurveType["Straight"] = 3] = "Straight";
})(CurveType || (CurveType = {}));
class GPathPoint {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.control1_x = 0;
        this.control1_y = 0;
        this.control2_x = 0;
        this.control2_y = 0;
        this.curveType = 0;
    }
    static newPoint(x, y, curveType) {
        var pt = new GPathPoint();
        pt.x = x || 0;
        pt.y = y || 0;
        pt.control1_x = 0;
        pt.control1_y = 0;
        pt.control2_x = 0;
        pt.control2_y = 0;
        pt.curveType = curveType || CurveType.CRSpline;
        return pt;
    }
    static newBezierPoint(x, y, control1_x, control1_y) {
        var pt = new GPathPoint();
        pt.x = x || 0;
        pt.y = y || 0;
        pt.control1_x = control1_x || 0;
        pt.control1_y = control1_y || 0;
        pt.control2_x = 0;
        pt.control2_y = 0;
        pt.curveType = CurveType.Bezier;
        return pt;
    }
    static newCubicBezierPoint(x, y, control1_x, control1_y, control2_x, control2_y) {
        var pt = new GPathPoint();
        pt.x = x || 0;
        pt.y = y || 0;
        pt.control1_x = control1_x || 0;
        pt.control1_y = control1_y || 0;
        pt.control2_x = control2_x || 0;
        pt.control2_y = control2_y || 0;
        pt.curveType = CurveType.CubicBezier;
        return pt;
    }
    clone() {
        var ret = new GPathPoint();
        ret.x = this.x;
        ret.y = this.y;
        ret.control1_x = this.control1_x;
        ret.control1_y = this.control1_y;
        ret.control2_x = this.control2_x;
        ret.control2_y = this.control2_y;
        ret.curveType = this.curveType;
        return ret;
    }
}

class GPath {
    constructor() {
        this._segments = new Array();
        this._points = new Array();
    }
    get length() {
        return this._fullLength;
    }
    create2(pt1, pt2, pt3, pt4) {
        var points = new Array();
        points.push(pt1);
        points.push(pt2);
        if (pt3)
            points.push(pt3);
        if (pt4)
            points.push(pt4);
        this.create(points);
    }
    create(points) {
        this._segments.length = 0;
        this._points.length = 0;
        this._fullLength = 0;
        var cnt = points.length;
        if (cnt == 0)
            return;
        var splinePoints = [];
        var prev = points[0];
        if (prev.curveType == CurveType.CRSpline)
            splinePoints.push(new Vec2(prev.x, prev.y));
        for (var i = 1; i < cnt; i++) {
            var current = points[i];
            if (prev.curveType != CurveType.CRSpline) {
                var seg = {};
                seg.type = prev.curveType;
                seg.ptStart = this._points.length;
                if (prev.curveType == CurveType.Straight) {
                    seg.ptCount = 2;
                    this._points.push(new Vec2(prev.x, prev.y));
                    this._points.push(new Vec2(current.x, current.y));
                }
                else if (prev.curveType == CurveType.Bezier) {
                    seg.ptCount = 3;
                    this._points.push(new Vec2(prev.x, prev.y));
                    this._points.push(new Vec2(current.x, current.y));
                    this._points.push(new Vec2(prev.control1_x, prev.control1_y));
                }
                else if (prev.curveType == CurveType.CubicBezier) {
                    seg.ptCount = 4;
                    this._points.push(new Vec2(prev.x, prev.y));
                    this._points.push(new Vec2(current.x, current.y));
                    this._points.push(new Vec2(prev.control1_x, prev.control1_y));
                    this._points.push(new Vec2(prev.control2_x, prev.control2_y));
                }
                seg.length = distance(prev.x, prev.y, current.x, current.y);
                this._fullLength += seg.length;
                this._segments.push(seg);
            }
            if (current.curveType != CurveType.CRSpline) {
                if (splinePoints.length > 0) {
                    splinePoints.push(new Vec2(current.x, current.y));
                    this.createSplineSegment(splinePoints);
                }
            }
            else
                splinePoints.push(new Vec2(current.x, current.y));
            prev = current;
        }
        if (splinePoints.length > 1)
            this.createSplineSegment(splinePoints);
    }
    createSplineSegment(splinePoints) {
        var cnt = splinePoints.length;
        splinePoints.splice(0, 0, splinePoints[0]);
        splinePoints.push(splinePoints[cnt]);
        splinePoints.push(splinePoints[cnt]);
        cnt += 3;
        var seg = {};
        seg.type = CurveType.CRSpline;
        seg.ptStart = this._points.length;
        seg.ptCount = cnt;
        this._points = this._points.concat(splinePoints);
        seg.length = 0;
        for (var i = 1; i < cnt; i++) {
            seg.length += distance(splinePoints[i - 1].x, splinePoints[i - 1].y, splinePoints[i].x, splinePoints[i].y);
        }
        this._fullLength += seg.length;
        this._segments.push(seg);
        splinePoints.length = 0;
    }
    clear() {
        this._segments.length = 0;
        this._points.length = 0;
    }
    getPointAt(t, result) {
        if (!result)
            result = new Vec2();
        else
            result.set(0, 0);
        t = clamp01(t);
        var cnt = this._segments.length;
        if (cnt == 0) {
            return result;
        }
        var seg;
        if (t == 1) {
            seg = this._segments[cnt - 1];
            if (seg.type == CurveType.Straight) {
                result.x = lerp(this._points[seg.ptStart].x, this._points[seg.ptStart + 1].x, t);
                result.y = lerp(this._points[seg.ptStart].y, this._points[seg.ptStart + 1].y, t);
                return result;
            }
            else if (seg.type == CurveType.Bezier || seg.type == CurveType.CubicBezier)
                return this.onBezierCurve(seg.ptStart, seg.ptCount, t, result);
            else
                return this.onCRSplineCurve(seg.ptStart, seg.ptCount, t, result);
        }
        var len = t * this._fullLength;
        for (var i = 0; i < cnt; i++) {
            seg = this._segments[i];
            len -= seg.length;
            if (len < 0) {
                t = 1 + len / seg.length;
                if (seg.type == CurveType.Straight) {
                    result.x = lerp(this._points[seg.ptStart].x, this._points[seg.ptStart + 1].x, t);
                    result.y = lerp(this._points[seg.ptStart].y, this._points[seg.ptStart + 1].y, t);
                }
                else if (seg.type == CurveType.Bezier || seg.type == CurveType.CubicBezier)
                    result = this.onBezierCurve(seg.ptStart, seg.ptCount, t, result);
                else
                    result = this.onCRSplineCurve(seg.ptStart, seg.ptCount, t, result);
                break;
            }
        }
        return result;
    }
    get segmentCount() {
        return this._segments.length;
    }
    getAnchorsInSegment(segmentIndex, points) {
        if (points == null)
            points = new Array();
        var seg = this._segments[segmentIndex];
        for (var i = 0; i < seg.ptCount; i++)
            points.push(new Vec2(this._points[seg.ptStart + i].x, this._points[seg.ptStart + i].y));
        return points;
    }
    getPointsInSegment(segmentIndex, t0, t1, points, ts, pointDensity) {
        if (points == null)
            points = new Array();
        if (!pointDensity || isNaN(pointDensity))
            pointDensity = 0.1;
        if (ts)
            ts.push(t0);
        var seg = this._segments[segmentIndex];
        if (seg.type == CurveType.Straight) {
            points.push(new Vec2(lerp(this._points[seg.ptStart].x, this._points[seg.ptStart + 1].x, t0), lerp(this._points[seg.ptStart].y, this._points[seg.ptStart + 1].y, t0)));
            points.push(new Vec2(lerp(this._points[seg.ptStart].x, this._points[seg.ptStart + 1].x, t1), lerp(this._points[seg.ptStart].y, this._points[seg.ptStart + 1].y, t1)));
        }
        else {
            var func;
            if (seg.type == CurveType.Bezier || seg.type == CurveType.CubicBezier)
                func = this.onBezierCurve;
            else
                func = this.onCRSplineCurve;
            points.push(func.call(this, seg.ptStart, seg.ptCount, t0, new Vec2()));
            var SmoothAmount = Math.min(seg.length * pointDensity, 50);
            for (var j = 0; j <= SmoothAmount; j++) {
                var t = j / SmoothAmount;
                if (t > t0 && t < t1) {
                    points.push(func.call(this, seg.ptStart, seg.ptCount, t, new Vec2()));
                    if (ts)
                        ts.push(t);
                }
            }
            points.push(func.call(this, seg.ptStart, seg.ptCount, t1, new Vec2()));
        }
        if (ts)
            ts.push(t1);
        return points;
    }
    getAllPoints(points, ts, pointDensity) {
        if (points == null)
            points = new Array();
        if (!pointDensity || isNaN(pointDensity))
            pointDensity = 0.1;
        var cnt = this._segments.length;
        for (var i = 0; i < cnt; i++)
            this.getPointsInSegment(i, 0, 1, points, ts, pointDensity);
        return points;
    }
    onCRSplineCurve(ptStart, ptCount, t, result) {
        var adjustedIndex = Math.floor(t * (ptCount - 4)) + ptStart; //Since the equation works with 4 points, we adjust the starting point depending on t to return a point on the specific segment
        var p0x = this._points[adjustedIndex].x;
        var p0y = this._points[adjustedIndex].y;
        var p1x = this._points[adjustedIndex + 1].x;
        var p1y = this._points[adjustedIndex + 1].y;
        var p2x = this._points[adjustedIndex + 2].x;
        var p2y = this._points[adjustedIndex + 2].y;
        var p3x = this._points[adjustedIndex + 3].x;
        var p3y = this._points[adjustedIndex + 3].y;
        var adjustedT = (t == 1) ? 1 : repeat(t * (ptCount - 4), 1); // Then we adjust t to be that value on that new piece of segment... for t == 1f don't use repeat (that would return 0f);
        var t0 = ((-adjustedT + 2) * adjustedT - 1) * adjustedT * 0.5;
        var t1 = (((3 * adjustedT - 5) * adjustedT) * adjustedT + 2) * 0.5;
        var t2 = ((-3 * adjustedT + 4) * adjustedT + 1) * adjustedT * 0.5;
        var t3 = ((adjustedT - 1) * adjustedT * adjustedT) * 0.5;
        result.x = p0x * t0 + p1x * t1 + p2x * t2 + p3x * t3;
        result.y = p0y * t0 + p1y * t1 + p2y * t2 + p3y * t3;
        return result;
    }
    onBezierCurve(ptStart, ptCount, t, result) {
        var t2 = 1 - t;
        var p0x = this._points[ptStart].x;
        var p0y = this._points[ptStart].y;
        var p1x = this._points[ptStart + 1].x;
        var p1y = this._points[ptStart + 1].y;
        var cp0x = this._points[ptStart + 2].x;
        var cp0y = this._points[ptStart + 2].y;
        if (ptCount == 4) {
            var cp1x = this._points[ptStart + 3].x;
            var cp1y = this._points[ptStart + 3].y;
            result.x = t2 * t2 * t2 * p0x + 3 * t2 * t2 * t * cp0x + 3 * t2 * t * t * cp1x + t * t * t * p1x;
            result.y = t2 * t2 * t2 * p0y + 3 * t2 * t2 * t * cp0y + 3 * t2 * t * t * cp1y + t * t * t * p1y;
        }
        else {
            result.x = t2 * t2 * p0x + 2 * t2 * t * cp0x + t * t * p1x;
            result.y = t2 * t2 * p0y + 2 * t2 * t * cp0y + t * t * p1y;
        }
        return result;
    }
}

const OPTION_IGNORE_DISPLAY_CONTROLLER = 1;
const OPTION_AUTO_STOP_DISABLED = 2;
const OPTION_AUTO_STOP_AT_END = 4;
class Transition {
    constructor(owner) {
        this._owner = owner;
        this._items = new Array();
        this._totalDuration = 0;
        this._autoPlayTimes = 1;
        this._autoPlayDelay = 0;
        this._timeScale = 1;
        this._startTime = 0;
        this._endTime = 0;
    }
    play(onComplete, times, delay, startTime, endTime) {
        this._play(onComplete, times, delay, startTime, endTime, false);
    }
    playReverse(onComplete, times, delay, startTime, endTime) {
        this._play(onComplete, times, delay, startTime, endTime, true);
    }
    changePlayTimes(value) {
        this._totalTimes = value;
    }
    setAutoPlay(value, times, delay) {
        if (this._autoPlay != value) {
            this._autoPlay = value;
            this._autoPlayTimes = times || 1;
            this._autoPlayDelay = delay || 0;
            if (this._autoPlay) {
                if (this._owner.onStage)
                    this.play(null, null, this._autoPlayTimes, this._autoPlayDelay);
            }
            else {
                if (!this._owner.onStage)
                    this.stop(false, true);
            }
        }
    }
    _play(onComplete, times, delay, startTime, endTime, reversed) {
        this.stop(true, true);
        delay = delay || 0;
        this._totalTimes = times || 1;
        this._reversed = reversed;
        this._startTime = startTime || 0;
        this._endTime = endTime || -1;
        this._playing = true;
        this._paused = false;
        this._onComplete = onComplete;
        var cnt = this._items.length;
        for (var i = 0; i < cnt; i++) {
            var item = this._items[i];
            if (item.target == null) {
                if (item.targetId)
                    item.target = this._owner.getChildById(item.targetId);
                else
                    item.target = this._owner;
            }
            else if (item.target != this._owner && item.target.parent != this._owner)
                item.target = null;
            if (item.target && item.type == ActionType.Transition) {
                var trans = item.target.getTransition(item.value.transName);
                if (trans == this)
                    trans = null;
                if (trans) {
                    if (item.value.playTimes == 0) //this.stop
                     {
                        var j;
                        for (j = i - 1; j >= 0; j--) {
                            var item2 = this._items[j];
                            if (item2.type == ActionType.Transition) {
                                if (item2.value.trans == trans) {
                                    item2.value.stopTime = item.time - item2.time;
                                    break;
                                }
                            }
                        }
                        if (j < 0)
                            item.value.stopTime = 0;
                        else
                            trans = null; //no need to handle this.stop anymore
                    }
                    else
                        item.value.stopTime = -1;
                }
                item.value.trans = trans;
            }
        }
        if (delay == 0)
            this.onDelayedPlay();
        else
            GTween.delayedCall(delay).setTarget(this).onComplete(this.onDelayedPlay, this);
    }
    stop(setToComplete, processCallback) {
        if (!this._playing)
            return;
        if (setToComplete == null)
            setToComplete = true;
        this._playing = false;
        this._totalTasks = 0;
        this._totalTimes = 0;
        var handler = this._onComplete;
        this._onComplete = null;
        GTween.kill(this); //delay start
        var cnt = this._items.length;
        if (this._reversed) {
            for (var i = cnt - 1; i >= 0; i--) {
                var item = this._items[i];
                if (item.target == null)
                    continue;
                this.stopItem(item, setToComplete);
            }
        }
        else {
            for (i = 0; i < cnt; i++) {
                item = this._items[i];
                if (item.target == null)
                    continue;
                this.stopItem(item, setToComplete);
            }
        }
        if (processCallback && handler) {
            handler();
        }
    }
    stopItem(item, setToComplete) {
        if (item.displayLockToken != 0) {
            item.target.releaseDisplayLock(item.displayLockToken);
            item.displayLockToken = 0;
        }
        if (item.tweener) {
            item.tweener.kill(setToComplete);
            item.tweener = null;
            if (item.type == ActionType.Shake && !setToComplete) //震动必须归位，否则下次就越震越远了。
             {
                item.target._gearLocked = true;
                item.target.setPosition(item.target.x - item.value.lastOffsetX, item.target.y - item.value.lastOffsetY);
                item.target._gearLocked = false;
            }
        }
        if (item.type == ActionType.Transition) {
            var trans = item.value.trans;
            if (trans)
                trans.stop(setToComplete, false);
        }
    }
    setPaused(paused) {
        if (!this._playing || this._paused == paused)
            return;
        this._paused = paused;
        var tweener = GTween.getTween(this);
        if (tweener)
            tweener.setPaused(paused);
        var cnt = this._items.length;
        for (var i = 0; i < cnt; i++) {
            var item = this._items[i];
            if (item.target == null)
                continue;
            if (item.type == ActionType.Transition) {
                if (item.value.trans)
                    item.value.trans.setPaused(paused);
            }
            else if (item.type == ActionType.Animation) {
                if (paused) {
                    item.value.flag = item.target.getProp(ObjectPropID.Playing);
                    item.target.setProp(ObjectPropID.Playing, false);
                }
                else
                    item.target.setProp(ObjectPropID.Playing, item.value.flag);
            }
            if (item.tweener)
                item.tweener.setPaused(paused);
        }
    }
    dispose() {
        if (this._playing)
            GTween.kill(this); //delay start
        var cnt = this._items.length;
        for (var i = 0; i < cnt; i++) {
            var item = this._items[i];
            if (item.tweener) {
                item.tweener.kill();
                item.tweener = null;
            }
            item.target = null;
            item.hook = null;
            if (item.tweenConfig)
                item.tweenConfig.endHook = null;
        }
        this._items.length = 0;
        this._playing = false;
        this._onComplete = null;
    }
    get playing() {
        return this._playing;
    }
    setValue(label, ...args) {
        var cnt = this._items.length;
        var found = false;
        var value;
        for (var i = 0; i < cnt; i++) {
            var item = this._items[i];
            if (item.label == label) {
                if (item.tweenConfig)
                    value = item.tweenConfig.startValue;
                else
                    value = item.value;
                found = true;
            }
            else if (item.tweenConfig && item.tweenConfig.endLabel == label) {
                value = item.tweenConfig.endValue;
                found = true;
            }
            else
                continue;
            switch (item.type) {
                case ActionType.XY:
                case ActionType.Size:
                case ActionType.Pivot:
                case ActionType.Scale:
                case ActionType.Skew:
                    value.b1 = true;
                    value.b2 = true;
                    value.f1 = parseFloat(args[0]);
                    value.f2 = parseFloat(args[1]);
                    break;
                case ActionType.Alpha:
                    value.f1 = parseFloat(args[0]);
                    break;
                case ActionType.Rotation:
                    value.f1 = parseFloat(args[0]);
                    break;
                case ActionType.Color:
                    value.f1 = parseFloat(args[0]);
                    break;
                case ActionType.Animation:
                    value.frame = parseInt(args[0]);
                    if (args.length > 1)
                        value.playing = args[1];
                    break;
                case ActionType.Visible:
                    value.visible = args[0];
                    break;
                case ActionType.Sound:
                    value.sound = args[0];
                    if (args.length > 1)
                        value.volume = parseFloat(args[1]);
                    break;
                case ActionType.Transition:
                    value.transName = args[0];
                    if (args.length > 1)
                        value.playTimes = parseInt(args[1]);
                    break;
                case ActionType.Shake:
                    value.amplitude = parseFloat(args[0]);
                    if (args.length > 1)
                        value.duration = parseFloat(args[1]);
                    break;
                case ActionType.ColorFilter:
                    value.f1 = parseFloat(args[0]);
                    value.f2 = parseFloat(args[1]);
                    value.f3 = parseFloat(args[2]);
                    value.f4 = parseFloat(args[3]);
                    break;
                case ActionType.Text:
                case ActionType.Icon:
                    value.text = args[0];
                    break;
            }
        }
        if (!found)
            throw new Error("this.label not exists");
    }
    setHook(label, callback) {
        var cnt = this._items.length;
        var found = false;
        for (var i = 0; i < cnt; i++) {
            var item = this._items[i];
            if (item.label == label) {
                item.hook = callback;
                found = true;
                break;
            }
            else if (item.tweenConfig && item.tweenConfig.endLabel == label) {
                item.tweenConfig.endHook = callback;
                found = true;
                break;
            }
        }
        if (!found)
            throw new Error("this.label not exists");
    }
    clearHooks() {
        var cnt = this._items.length;
        for (var i = 0; i < cnt; i++) {
            var item = this._items[i];
            item.hook = null;
            if (item.tweenConfig)
                item.tweenConfig.endHook = null;
        }
    }
    setTarget(label, newTarget) {
        var cnt = this._items.length;
        var found = false;
        for (var i = 0; i < cnt; i++) {
            var item = this._items[i];
            if (item.label == label) {
                item.targetId = (newTarget == this._owner || newTarget == null) ? "" : newTarget.id;
                if (this._playing) {
                    if (item.targetId.length > 0)
                        item.target = this._owner.getChildById(item.targetId);
                    else
                        item.target = this._owner;
                }
                else
                    item.target = null;
                found = true;
            }
        }
        if (!found)
            throw new Error("this.label not exists");
    }
    setDuration(label, value) {
        var cnt = this._items.length;
        var found = false;
        for (var i = 0; i < cnt; i++) {
            var item = this._items[i];
            if (item.tweenConfig && item.label == label) {
                item.tweenConfig.duration = value;
                found = true;
            }
        }
        if (!found)
            throw new Error("this.label not exists");
    }
    getLabelTime(label) {
        var cnt = this._items.length;
        for (var i = 0; i < cnt; i++) {
            var item = this._items[i];
            if (item.label == label)
                return item.time;
            else if (item.tweenConfig && item.tweenConfig.endLabel == label)
                return item.time + item.tweenConfig.duration;
        }
        return NaN;
    }
    get timeScale() {
        return this._timeScale;
    }
    set timeScale(value) {
        if (this._timeScale != value) {
            this._timeScale = value;
            if (this._playing) {
                var cnt = this._items.length;
                for (var i = 0; i < cnt; i++) {
                    var item = this._items[i];
                    if (item.tweener)
                        item.tweener.setTimeScale(value);
                    else if (item.type == ActionType.Transition) {
                        if (item.value.trans)
                            item.value.trans.timeScale = value;
                    }
                    else if (item.type == ActionType.Animation) {
                        if (item.target)
                            item.target.setProp(ObjectPropID.TimeScale, value);
                    }
                }
            }
        }
    }
    updateFromRelations(targetId, dx, dy) {
        var cnt = this._items.length;
        if (cnt == 0)
            return;
        for (var i = 0; i < cnt; i++) {
            var item = this._items[i];
            if (item.type == ActionType.XY && item.targetId == targetId) {
                if (item.tweenConfig) {
                    if (!item.tweenConfig.startValue.b3) {
                        item.tweenConfig.startValue.f1 += dx;
                        item.tweenConfig.startValue.f2 += dy;
                    }
                    if (!item.tweenConfig.endValue.b3) {
                        item.tweenConfig.endValue.f1 += dx;
                        item.tweenConfig.endValue.f2 += dy;
                    }
                }
                else {
                    if (!item.value.b3) {
                        item.value.f1 += dx;
                        item.value.f2 += dy;
                    }
                }
            }
        }
    }
    onOwnerAddedToStage() {
        if (this._autoPlay && !this._playing)
            this.play(null, this._autoPlayTimes, this._autoPlayDelay);
    }
    onOwnerRemovedFromStage() {
        if ((this._options & OPTION_AUTO_STOP_DISABLED) == 0)
            this.stop((this._options & OPTION_AUTO_STOP_AT_END) != 0 ? true : false, false);
    }
    onDelayedPlay() {
        this.internalPlay();
        this._playing = this._totalTasks > 0;
        if (this._playing) {
            if ((this._options & OPTION_IGNORE_DISPLAY_CONTROLLER) != 0) {
                var cnt = this._items.length;
                for (var i = 0; i < cnt; i++) {
                    var item = this._items[i];
                    if (item.target && item.target != this._owner)
                        item.displayLockToken = item.target.addDisplayLock();
                }
            }
        }
        else if (this._onComplete) {
            var handler = this._onComplete;
            this._onComplete = null;
            handler();
        }
    }
    internalPlay() {
        this._ownerBaseX = this._owner.x;
        this._ownerBaseY = this._owner.y;
        this._totalTasks = 1;
        var cnt = this._items.length;
        var item;
        var needSkipAnimations = false;
        if (!this._reversed) {
            for (var i = 0; i < cnt; i++) {
                item = this._items[i];
                if (item.target == null)
                    continue;
                if (item.type == ActionType.Animation && this._startTime != 0 && item.time <= this._startTime) {
                    needSkipAnimations = true;
                    item.value.flag = false;
                }
                else
                    this.playItem(item);
            }
        }
        else {
            for (i = cnt - 1; i >= 0; i--) {
                item = this._items[i];
                if (item.target == null)
                    continue;
                this.playItem(item);
            }
        }
        if (needSkipAnimations)
            this.skipAnimations();
        this._totalTasks--;
    }
    playItem(item) {
        var time;
        if (item.tweenConfig) {
            if (this._reversed)
                time = (this._totalDuration - item.time - item.tweenConfig.duration);
            else
                time = item.time;
            if (this._endTime == -1 || time <= this._endTime) {
                var startValue;
                var endValue;
                if (this._reversed) {
                    startValue = item.tweenConfig.endValue;
                    endValue = item.tweenConfig.startValue;
                }
                else {
                    startValue = item.tweenConfig.startValue;
                    endValue = item.tweenConfig.endValue;
                }
                item.value.b1 = startValue.b1 || endValue.b1;
                item.value.b2 = startValue.b2 || endValue.b2;
                switch (item.type) {
                    case ActionType.XY:
                    case ActionType.Size:
                    case ActionType.Scale:
                    case ActionType.Skew:
                        item.tweener = GTween.to2(startValue.f1, startValue.f2, endValue.f1, endValue.f2, item.tweenConfig.duration);
                        break;
                    case ActionType.Alpha:
                    case ActionType.Rotation:
                        item.tweener = GTween.to(startValue.f1, endValue.f1, item.tweenConfig.duration);
                        break;
                    case ActionType.Color:
                        item.tweener = GTween.toColor(startValue.f1, endValue.f1, item.tweenConfig.duration);
                        break;
                    case ActionType.ColorFilter:
                        item.tweener = GTween.to4(startValue.f1, startValue.f2, startValue.f3, startValue.f4, endValue.f1, endValue.f2, endValue.f3, endValue.f4, item.tweenConfig.duration);
                        break;
                }
                item.tweener.setDelay(time)
                    .setEase(item.tweenConfig.easeType)
                    .setRepeat(item.tweenConfig.repeat, item.tweenConfig.yoyo)
                    .setTimeScale(this._timeScale)
                    .setTarget(item)
                    .onStart(this.onTweenStart, this)
                    .onUpdate(this.onTweenUpdate, this)
                    .onComplete(this.onTweenComplete, this);
                if (this._endTime >= 0)
                    item.tweener.setBreakpoint(this._endTime - time);
                this._totalTasks++;
            }
        }
        else if (item.type == ActionType.Shake) {
            if (this._reversed)
                time = (this._totalDuration - item.time - item.value.duration);
            else
                time = item.time;
            item.value.offsetX = item.value.offsetY = 0;
            item.value.lastOffsetX = item.value.lastOffsetY = 0;
            item.tweener = GTween.shake(0, 0, item.value.amplitude, item.value.duration)
                .setDelay(time)
                .setTimeScale(this._timeScale)
                .setTarget(item)
                .onUpdate(this.onTweenUpdate, this)
                .onComplete(this.onTweenComplete, this);
            if (this._endTime >= 0)
                item.tweener.setBreakpoint(this._endTime - item.time);
            this._totalTasks++;
        }
        else {
            if (this._reversed)
                time = (this._totalDuration - item.time);
            else
                time = item.time;
            if (time <= this._startTime) {
                this.applyValue(item);
                this.callHook(item, false);
            }
            else if (this._endTime == -1 || time <= this._endTime) {
                this._totalTasks++;
                item.tweener = GTween.delayedCall(time)
                    .setTimeScale(this._timeScale)
                    .setTarget(item)
                    .onComplete(this.onDelayedPlayItem, this);
            }
        }
        if (item.tweener)
            item.tweener.seek(this._startTime);
    }
    skipAnimations() {
        var frame;
        var playStartTime;
        var playTotalTime;
        var value;
        var target;
        var item;
        var cnt = this._items.length;
        for (var i = 0; i < cnt; i++) {
            item = this._items[i];
            if (item.type != ActionType.Animation || item.time > this._startTime)
                continue;
            value = item.value;
            if (value.flag)
                continue;
            target = item.target;
            frame = target.getProp(ObjectPropID.Frame);
            playStartTime = target.getProp(ObjectPropID.Playing) ? 0 : -1;
            playTotalTime = 0;
            for (var j = i; j < cnt; j++) {
                item = this._items[j];
                if (item.type != ActionType.Animation || item.target != target || item.time > this._startTime)
                    continue;
                value = item.value;
                value.flag = true;
                if (value.frame != -1) {
                    frame = value.frame;
                    if (value.playing)
                        playStartTime = item.time;
                    else
                        playStartTime = -1;
                    playTotalTime = 0;
                }
                else {
                    if (value.playing) {
                        if (playStartTime < 0)
                            playStartTime = item.time;
                    }
                    else {
                        if (playStartTime >= 0)
                            playTotalTime += (item.time - playStartTime);
                        playStartTime = -1;
                    }
                }
                this.callHook(item, false);
            }
            if (playStartTime >= 0)
                playTotalTime += (this._startTime - playStartTime);
            target.setProp(ObjectPropID.Playing, playStartTime >= 0);
            target.setProp(ObjectPropID.Frame, frame);
            if (playTotalTime > 0)
                target.setProp(ObjectPropID.DeltaTime, playTotalTime * 1000);
        }
    }
    onDelayedPlayItem(tweener) {
        var item = tweener.target;
        item.tweener = null;
        this._totalTasks--;
        this.applyValue(item);
        this.callHook(item, false);
        this.checkAllComplete();
    }
    onTweenStart(tweener) {
        var item = tweener.target;
        if (item.type == ActionType.XY || item.type == ActionType.Size) //位置和大小要到start才最终确认起始值
         {
            var startValue;
            var endValue;
            if (this._reversed) {
                startValue = item.tweenConfig.endValue;
                endValue = item.tweenConfig.startValue;
            }
            else {
                startValue = item.tweenConfig.startValue;
                endValue = item.tweenConfig.endValue;
            }
            if (item.type == ActionType.XY) {
                if (item.target != this._owner) {
                    if (!startValue.b1)
                        tweener.startValue.x = item.target.x;
                    else if (startValue.b3) //percent
                        tweener.startValue.x = startValue.f1 * this._owner.width;
                    if (!startValue.b2)
                        tweener.startValue.y = item.target.y;
                    else if (startValue.b3) //percent
                        tweener.startValue.y = startValue.f2 * this._owner.height;
                    if (!endValue.b1)
                        tweener.endValue.x = tweener.startValue.x;
                    else if (endValue.b3)
                        tweener.endValue.x = endValue.f1 * this._owner.width;
                    if (!endValue.b2)
                        tweener.endValue.y = tweener.startValue.y;
                    else if (endValue.b3)
                        tweener.endValue.y = endValue.f2 * this._owner.height;
                }
                else {
                    if (!startValue.b1)
                        tweener.startValue.x = item.target.x - this._ownerBaseX;
                    if (!startValue.b2)
                        tweener.startValue.y = item.target.y - this._ownerBaseY;
                    if (!endValue.b1)
                        tweener.endValue.x = tweener.startValue.x;
                    if (!endValue.b2)
                        tweener.endValue.y = tweener.startValue.y;
                }
            }
            else {
                if (!startValue.b1)
                    tweener.startValue.x = item.target.width;
                if (!startValue.b2)
                    tweener.startValue.y = item.target.height;
                if (!endValue.b1)
                    tweener.endValue.x = tweener.startValue.x;
                if (!endValue.b2)
                    tweener.endValue.y = tweener.startValue.y;
            }
            if (item.tweenConfig.path) {
                item.value.b1 = item.value.b2 = true;
                tweener.setPath(item.tweenConfig.path);
            }
        }
        this.callHook(item, false);
    }
    onTweenUpdate(tweener) {
        var item = tweener.target;
        switch (item.type) {
            case ActionType.XY:
            case ActionType.Size:
            case ActionType.Scale:
            case ActionType.Skew:
                item.value.f1 = tweener.value.x;
                item.value.f2 = tweener.value.y;
                if (item.tweenConfig.path) {
                    item.value.f1 += tweener.startValue.x;
                    item.value.f2 += tweener.startValue.y;
                }
                break;
            case ActionType.Alpha:
            case ActionType.Rotation:
                item.value.f1 = tweener.value.x;
                break;
            case ActionType.Color:
                item.value.f1 = tweener.value.color;
                break;
            case ActionType.ColorFilter:
                item.value.f1 = tweener.value.x;
                item.value.f2 = tweener.value.y;
                item.value.f3 = tweener.value.z;
                item.value.f4 = tweener.value.w;
                break;
            case ActionType.Shake:
                item.value.offsetX = tweener.deltaValue.x;
                item.value.offsetY = tweener.deltaValue.y;
                break;
        }
        this.applyValue(item);
    }
    onTweenComplete(tweener) {
        var item = tweener.target;
        item.tweener = null;
        this._totalTasks--;
        if (tweener.allCompleted) //当整体播放结束时间在这个tween的中间时不应该调用结尾钩子
            this.callHook(item, true);
        this.checkAllComplete();
    }
    onPlayTransCompleted(item) {
        this._totalTasks--;
        this.checkAllComplete();
    }
    callHook(item, tweenEnd) {
        if (tweenEnd) {
            if (item.tweenConfig && item.tweenConfig.endHook)
                item.tweenConfig.endHook();
        }
        else {
            if (item.time >= this._startTime && item.hook)
                item.hook();
        }
    }
    checkAllComplete() {
        if (this._playing && this._totalTasks == 0) {
            if (this._totalTimes < 0) {
                this.internalPlay();
                if (this._totalTasks == 0)
                    GTween.delayedCall(0).setTarget(this).onComplete(this.checkAllComplete, this);
            }
            else {
                this._totalTimes--;
                if (this._totalTimes > 0) {
                    this.internalPlay();
                    if (this._totalTasks == 0)
                        GTween.delayedCall(0).setTarget(this).onComplete(this.checkAllComplete, this);
                }
                else {
                    this._playing = false;
                    var cnt = this._items.length;
                    for (var i = 0; i < cnt; i++) {
                        var item = this._items[i];
                        if (item.target && item.displayLockToken != 0) {
                            item.target.releaseDisplayLock(item.displayLockToken);
                            item.displayLockToken = 0;
                        }
                    }
                    if (this._onComplete) {
                        var handler = this._onComplete;
                        this._onComplete = null;
                        handler();
                    }
                }
            }
        }
    }
    applyValue(item) {
        item.target._gearLocked = true;
        var value = item.value;
        switch (item.type) {
            case ActionType.XY:
                if (item.target == this._owner) {
                    if (value.b1 && value.b2)
                        item.target.setPosition(value.f1 + this._ownerBaseX, value.f2 + this._ownerBaseY);
                    else if (value.b1)
                        item.target.x = value.f1 + this._ownerBaseX;
                    else
                        item.target.y = value.f2 + this._ownerBaseY;
                }
                else {
                    if (value.b3) //position in percent
                     {
                        if (value.b1 && value.b2)
                            item.target.setPosition(value.f1 * this._owner.width, value.f2 * this._owner.height);
                        else if (value.b1)
                            item.target.x = value.f1 * this._owner.width;
                        else if (value.b2)
                            item.target.y = value.f2 * this._owner.height;
                    }
                    else {
                        if (value.b1 && value.b2)
                            item.target.setPosition(value.f1, value.f2);
                        else if (value.b1)
                            item.target.x = value.f1;
                        else if (value.b2)
                            item.target.y = value.f2;
                    }
                }
                break;
            case ActionType.Size:
                if (!value.b1)
                    value.f1 = item.target.width;
                if (!value.b2)
                    value.f2 = item.target.height;
                item.target.setSize(value.f1, value.f2);
                break;
            case ActionType.Pivot:
                item.target.setPivot(value.f1, value.f2, item.target.pivotAsAnchor);
                break;
            case ActionType.Alpha:
                item.target.alpha = value.f1;
                break;
            case ActionType.Rotation:
                item.target.rotation = value.f1;
                break;
            case ActionType.Scale:
                item.target.setScale(value.f1, value.f2);
                break;
            case ActionType.Skew:
                item.target.setSkew(value.f1, value.f2);
                break;
            case ActionType.Color:
                item.target.setProp(ObjectPropID.Color, value.f1);
                break;
            case ActionType.Animation:
                if (value.frame >= 0)
                    item.target.setProp(ObjectPropID.Frame, value.frame);
                item.target.setProp(ObjectPropID.Playing, value.playing);
                item.target.setProp(ObjectPropID.TimeScale, this._timeScale);
                break;
            case ActionType.Visible:
                item.target.visible = value.visible;
                break;
            case ActionType.Transition:
                if (this._playing) {
                    var trans = value.trans;
                    if (trans) {
                        this._totalTasks++;
                        var startTime = this._startTime > item.time ? (this._startTime - item.time) : 0;
                        var endTime = this._endTime >= 0 ? (this._endTime - item.time) : -1;
                        if (value.stopTime >= 0 && (endTime < 0 || endTime > value.stopTime))
                            endTime = value.stopTime;
                        trans.timeScale = this._timeScale;
                        trans._play(this.onPlayTransCompleted.bind(this, item), value.playTimes, 0, startTime, endTime, this._reversed);
                    }
                }
                break;
            case ActionType.Sound:
                if (this._playing && item.time >= this._startTime) {
                    if (value.audioClip == null) {
                        var pi = UIPackage.getItemByURL(value.sound);
                        if (pi)
                            value.audioClip = pi.file;
                        else
                            value.audioClip = value.sound;
                    }
                    if (value.audioClip)
                        GRoot.playOneShotSound(value.audioClip, value.volume);
                }
                break;
            case ActionType.Shake:
                item.target.setPosition(item.target.x - value.lastOffsetX + value.offsetX, item.target.y - value.lastOffsetY + value.offsetY);
                value.lastOffsetX = value.offsetX;
                value.lastOffsetY = value.offsetY;
                break;
            case ActionType.ColorFilter:
                {
                    //todo colorFilter item.target.element, [value.f1, value.f2, value.f3, value.f4]);
                    break;
                }
            case ActionType.Text:
                item.target.text = value.text;
                break;
            case ActionType.Icon:
                item.target.icon = value.text;
                break;
        }
        item.target._gearLocked = false;
    }
    setup(buffer) {
        this.name = buffer.readS();
        this._options = buffer.readInt();
        this._autoPlay = buffer.readBool();
        this._autoPlayTimes = buffer.readInt();
        this._autoPlayDelay = buffer.readFloat();
        var cnt = buffer.readShort();
        for (var i = 0; i < cnt; i++) {
            var dataLen = buffer.readShort();
            var curPos = buffer.pos;
            buffer.seek(curPos, 0);
            var item = new Item(buffer.readByte());
            this._items[i] = item;
            item.time = buffer.readFloat();
            var targetId = buffer.readShort();
            if (targetId < 0)
                item.targetId = "";
            else
                item.targetId = this._owner.getChildAt(targetId).id;
            item.label = buffer.readS();
            if (buffer.readBool()) {
                buffer.seek(curPos, 1);
                item.tweenConfig = new TweenConfig();
                item.tweenConfig.duration = buffer.readFloat();
                if (item.time + item.tweenConfig.duration > this._totalDuration)
                    this._totalDuration = item.time + item.tweenConfig.duration;
                item.tweenConfig.easeType = buffer.readByte();
                item.tweenConfig.repeat = buffer.readInt();
                item.tweenConfig.yoyo = buffer.readBool();
                item.tweenConfig.endLabel = buffer.readS();
                buffer.seek(curPos, 2);
                this.decodeValue(item, buffer, item.tweenConfig.startValue);
                buffer.seek(curPos, 3);
                this.decodeValue(item, buffer, item.tweenConfig.endValue);
                if (buffer.version >= 2) {
                    var pathLen = buffer.readInt();
                    if (pathLen > 0) {
                        item.tweenConfig.path = new GPath();
                        var pts = new Array();
                        for (var j = 0; j < pathLen; j++) {
                            var curveType = buffer.readByte();
                            switch (curveType) {
                                case CurveType.Bezier:
                                    pts.push(GPathPoint.newBezierPoint(buffer.readFloat(), buffer.readFloat(), buffer.readFloat(), buffer.readFloat()));
                                    break;
                                case CurveType.CubicBezier:
                                    pts.push(GPathPoint.newCubicBezierPoint(buffer.readFloat(), buffer.readFloat(), buffer.readFloat(), buffer.readFloat(), buffer.readFloat(), buffer.readFloat()));
                                    break;
                                default:
                                    pts.push(GPathPoint.newPoint(buffer.readFloat(), buffer.readFloat(), curveType));
                                    break;
                            }
                        }
                        item.tweenConfig.path.create(pts);
                    }
                }
            }
            else {
                if (item.time > this._totalDuration)
                    this._totalDuration = item.time;
                buffer.seek(curPos, 2);
                this.decodeValue(item, buffer, item.value);
            }
            buffer.pos = curPos + dataLen;
        }
    }
    decodeValue(item, buffer, value) {
        switch (item.type) {
            case ActionType.XY:
            case ActionType.Size:
            case ActionType.Pivot:
            case ActionType.Skew:
                value.b1 = buffer.readBool();
                value.b2 = buffer.readBool();
                value.f1 = buffer.readFloat();
                value.f2 = buffer.readFloat();
                if (buffer.version >= 2 && item.type == ActionType.XY)
                    value.b3 = buffer.readBool(); //percent
                break;
            case ActionType.Alpha:
            case ActionType.Rotation:
                value.b1 = value.b2 = true;
                value.f1 = buffer.readFloat();
                break;
            case ActionType.Scale:
                value.b1 = value.b2 = true;
                value.f1 = buffer.readFloat();
                value.f2 = buffer.readFloat();
                break;
            case ActionType.Color:
                value.b1 = value.b2 = true;
                value.f1 = buffer.readColor();
                break;
            case ActionType.Animation:
                value.playing = buffer.readBool();
                value.frame = buffer.readInt();
                break;
            case ActionType.Visible:
                value.visible = buffer.readBool();
                break;
            case ActionType.Sound:
                value.sound = buffer.readS();
                value.volume = buffer.readFloat();
                break;
            case ActionType.Transition:
                value.transName = buffer.readS();
                value.playTimes = buffer.readInt();
                break;
            case ActionType.Shake:
                value.amplitude = buffer.readFloat();
                value.duration = buffer.readFloat();
                break;
            case ActionType.ColorFilter:
                value.b1 = value.b2 = true;
                value.f1 = buffer.readFloat();
                value.f2 = buffer.readFloat();
                value.f3 = buffer.readFloat();
                value.f4 = buffer.readFloat();
                break;
            case ActionType.Text:
            case ActionType.Icon:
                value.text = buffer.readS();
                break;
        }
    }
}
var ActionType;
(function (ActionType) {
    ActionType[ActionType["XY"] = 0] = "XY";
    ActionType[ActionType["Size"] = 1] = "Size";
    ActionType[ActionType["Scale"] = 2] = "Scale";
    ActionType[ActionType["Pivot"] = 3] = "Pivot";
    ActionType[ActionType["Alpha"] = 4] = "Alpha";
    ActionType[ActionType["Rotation"] = 5] = "Rotation";
    ActionType[ActionType["Color"] = 6] = "Color";
    ActionType[ActionType["Animation"] = 7] = "Animation";
    ActionType[ActionType["Visible"] = 8] = "Visible";
    ActionType[ActionType["Sound"] = 9] = "Sound";
    ActionType[ActionType["Transition"] = 10] = "Transition";
    ActionType[ActionType["Shake"] = 11] = "Shake";
    ActionType[ActionType["ColorFilter"] = 12] = "ColorFilter";
    ActionType[ActionType["Skew"] = 13] = "Skew";
    ActionType[ActionType["Text"] = 14] = "Text";
    ActionType[ActionType["Icon"] = 15] = "Icon";
    ActionType[ActionType["Unknown"] = 16] = "Unknown";
})(ActionType || (ActionType = {}));
class Item {
    constructor(type) {
        this.type = type;
        this.value = {};
        this.displayLockToken = 0;
    }
}
class TweenConfig {
    constructor() {
        this.easeType = EaseType.QuadOut;
        this.startValue = { b1: true, b2: true };
        this.endValue = { b1: true, b2: true };
    }
}

class TranslationHelper {
    constructor() {
    }
    static loadFromXML(source) {
        let strings = {};
        TranslationHelper.strings = strings;
        let arr = source.elements("string");
        arr.forEach(cxml => {
            let key = cxml.getAttrString("name");
            let text = cxml.text;
            let i = key.indexOf("-");
            if (i == -1)
                return;
            let key2 = key.substr(0, i);
            let key3 = key.substr(i + 1);
            let col = strings[key2];
            if (!col) {
                col = {};
                strings[key2] = col;
            }
            col[key3] = text;
        });
    }
    static translateComponent(item) {
        if (TranslationHelper.strings == null)
            return;
        var compStrings = TranslationHelper.strings[item.owner.id + item.id];
        if (!compStrings)
            return;
        var elementId, value;
        var buffer = item.rawData;
        var nextPos;
        var itemCount;
        var i, j, k;
        var dataLen;
        var curPos;
        var valueCnt;
        var page;
        buffer.seek(0, 2);
        var childCount = buffer.readShort();
        for (i = 0; i < childCount; i++) {
            dataLen = buffer.readShort();
            curPos = buffer.pos;
            buffer.seek(curPos, 0);
            var baseType = buffer.readByte();
            var type = baseType;
            buffer.skip(4);
            elementId = buffer.readS();
            if (type == ObjectType.Component) {
                if (buffer.seek(curPos, 6))
                    type = buffer.readByte();
            }
            buffer.seek(curPos, 1);
            if ((value = compStrings[elementId + "-tips"]) != null)
                buffer.writeS(value);
            buffer.seek(curPos, 2);
            var gearCnt = buffer.readShort();
            for (j = 0; j < gearCnt; j++) {
                nextPos = buffer.readShort();
                nextPos += buffer.pos;
                if (buffer.readByte() == 6) //gearText
                 {
                    buffer.skip(2); //controller
                    valueCnt = buffer.readShort();
                    for (k = 0; k < valueCnt; k++) {
                        page = buffer.readS();
                        if (page != null) {
                            if ((value = compStrings[elementId + "-texts_" + k]) != null)
                                buffer.writeS(value);
                            else
                                buffer.skip(2);
                        }
                    }
                    if (buffer.readBool() && (value = compStrings[elementId + "-texts_def"]) != null)
                        buffer.writeS(value);
                }
                buffer.pos = nextPos;
            }
            if (baseType == ObjectType.Component && buffer.version >= 2) {
                buffer.seek(curPos, 4);
                buffer.skip(2); //pageController
                buffer.skip(4 * buffer.readUshort());
                var cpCount = buffer.readUshort();
                for (var k = 0; k < cpCount; k++) {
                    var target = buffer.readS();
                    var propertyId = buffer.readUshort();
                    if (propertyId == 0 && (value = compStrings[elementId + "-cp-" + target]) != null)
                        buffer.writeS(value);
                    else
                        buffer.skip(2);
                }
            }
            switch (type) {
                case ObjectType.Text:
                case ObjectType.RichText:
                case ObjectType.InputText:
                    {
                        if ((value = compStrings[elementId]) != null) {
                            buffer.seek(curPos, 6);
                            buffer.writeS(value);
                        }
                        if ((value = compStrings[elementId + "-prompt"]) != null) {
                            buffer.seek(curPos, 4);
                            buffer.writeS(value);
                        }
                        break;
                    }
                case ObjectType.List:
                case ObjectType.Tree:
                    {
                        buffer.seek(curPos, 8);
                        buffer.skip(2);
                        itemCount = buffer.readUshort();
                        for (j = 0; j < itemCount; j++) {
                            nextPos = buffer.readUshort();
                            nextPos += buffer.pos;
                            buffer.skip(2); //url
                            if (type == ObjectType.Tree)
                                buffer.skip(2);
                            //title
                            if ((value = compStrings[elementId + "-" + j]) != null)
                                buffer.writeS(value);
                            else
                                buffer.skip(2);
                            //selected title
                            if ((value = compStrings[elementId + "-" + j + "-0"]) != null)
                                buffer.writeS(value);
                            else
                                buffer.skip(2);
                            if (buffer.version >= 2) {
                                buffer.skip(6);
                                buffer.skip(buffer.readUshort() * 4); //controllers
                                var cpCount = buffer.readUshort();
                                for (var k = 0; k < cpCount; k++) {
                                    var target = buffer.readS();
                                    var propertyId = buffer.readUshort();
                                    if (propertyId == 0 && (value = compStrings[elementId + "-" + j + "-" + target]) != null)
                                        buffer.writeS(value);
                                    else
                                        buffer.skip(2);
                                }
                            }
                            buffer.pos = nextPos;
                        }
                        break;
                    }
                case ObjectType.Label:
                    {
                        if (buffer.seek(curPos, 6) && buffer.readByte() == type) {
                            if ((value = compStrings[elementId]) != null)
                                buffer.writeS(value);
                            else
                                buffer.skip(2);
                            buffer.skip(2);
                            if (buffer.readBool())
                                buffer.skip(4);
                            buffer.skip(4);
                            if (buffer.readBool() && (value = compStrings[elementId + "-prompt"]) != null)
                                buffer.writeS(value);
                        }
                        break;
                    }
                case ObjectType.Button:
                    {
                        if (buffer.seek(curPos, 6) && buffer.readByte() == type) {
                            if ((value = compStrings[elementId]) != null)
                                buffer.writeS(value);
                            else
                                buffer.skip(2);
                            if ((value = compStrings[elementId + "-0"]) != null)
                                buffer.writeS(value);
                        }
                        break;
                    }
                case ObjectType.ComboBox:
                    {
                        if (buffer.seek(curPos, 6) && buffer.readByte() == type) {
                            itemCount = buffer.readShort();
                            for (j = 0; j < itemCount; j++) {
                                nextPos = buffer.readShort();
                                nextPos += buffer.pos;
                                if ((value = compStrings[elementId + "-" + j]) != null)
                                    buffer.writeS(value);
                                buffer.pos = nextPos;
                            }
                            if ((value = compStrings[elementId]) != null)
                                buffer.writeS(value);
                        }
                        break;
                    }
            }
            buffer.pos = curPos + dataLen;
        }
    }
}

class GComponent extends GObject {
    constructor() {
        super();
        this._sortingChildCount = 0;
        this._children = [];
        this._controllers = [];
        this._transitions = [];
        this._margin = new Margin();
        this._alignOffset = new Vec2();
        this._childrenRenderOrder = 0;
        this._apexIndex = 0;
    }
    createElement() {
        this._element = createUIElement("fgui-div", this);
        this._container = this._element;
    }
    dispose() {
        var i;
        var cnt;
        cnt = this._transitions.length;
        for (i = 0; i < cnt; ++i) {
            var trans = this._transitions[i];
            trans.dispose();
        }
        cnt = this._controllers.length;
        for (i = 0; i < cnt; ++i) {
            var cc = this._controllers[i];
            cc.dispose();
        }
        if (this.scrollPane)
            this.scrollPane.dispose();
        cnt = this._children.length;
        for (i = cnt - 1; i >= 0; --i) {
            var obj = this._children[i];
            obj.parent = null; //avoid removeFromParent call
            obj.dispose();
        }
        this._boundsChanged = false;
        super.dispose();
    }
    get displayListContainer() {
        return this._container;
    }
    get tabStopChildren() {
        return this._element.tabStopChildren;
    }
    set tabStopChildren(value) {
        this._element.tabStopChildren = value;
    }
    addChild(child) {
        this.addChildAt(child, this._children.length);
        return child;
    }
    addChildAt(child, index) {
        if (!child)
            throw "child is null";
        if (index >= 0 && index <= this._children.length) {
            if (child.parent == this) {
                this.setChildIndex(child, index);
            }
            else {
                child.removeFromParent();
                child.parent = this;
                var cnt = this._children.length;
                if (child.sortingOrder != 0) {
                    this._sortingChildCount++;
                    index = this.getInsertPosForSortingChild(child);
                }
                else if (this._sortingChildCount > 0) {
                    if (index > (cnt - this._sortingChildCount))
                        index = cnt - this._sortingChildCount;
                }
                if (index == cnt)
                    this._children.push(child);
                else
                    this._children.splice(index, 0, child);
                this.childStateChanged(child);
                this.setBoundsChangedFlag();
            }
            return child;
        }
        else {
            throw "Invalid child index";
        }
    }
    getInsertPosForSortingChild(target) {
        var cnt = this._children.length;
        for (var i = 0; i < cnt; i++) {
            var child = this._children[i];
            if (child == target)
                continue;
            if (target.sortingOrder < child.sortingOrder)
                break;
        }
        return i;
    }
    removeChild(child, dispose) {
        var childIndex = this._children.indexOf(child);
        if (childIndex != -1) {
            this.removeChildAt(childIndex, dispose);
        }
        return child;
    }
    removeChildAt(index, dispose) {
        if (index >= 0 && index < this._children.length) {
            var child = this._children[index];
            child.parent = null;
            if (child.sortingOrder != 0)
                this._sortingChildCount--;
            this._children.splice(index, 1);
            child.group = null;
            if (child.element.parent) {
                this._container.removeChild(child.element);
                if (this._childrenRenderOrder == ChildrenRenderOrder.Arch)
                    Timers.callLater(this.buildNativeDisplayList, this);
            }
            if (dispose)
                child.dispose();
            this.setBoundsChangedFlag();
            return child;
        }
        else {
            throw "Invalid child index";
        }
    }
    removeChildren(beginIndex, endIndex, dispose) {
        beginIndex = beginIndex || 0;
        if (endIndex == null)
            endIndex = -1;
        if (endIndex < 0 || endIndex >= this._children.length)
            endIndex = this._children.length - 1;
        for (var i = beginIndex; i <= endIndex; ++i)
            this.removeChildAt(beginIndex, dispose);
    }
    getChildAt(index, classType) {
        if (index >= 0 && index < this.numChildren)
            return this._children[index];
        else
            throw "Invalid child index";
    }
    getChild(name, classType) {
        var cnt = this._children.length;
        for (var i = 0; i < cnt; ++i) {
            if (this._children[i].name == name)
                return this._children[i];
        }
        return null;
    }
    getChildByPath(path, classType) {
        var arr = path.split(".");
        var cnt = arr.length;
        var gcom = this;
        var obj;
        for (var i = 0; i < cnt; ++i) {
            obj = gcom.getChild(arr[i]);
            if (!obj)
                break;
            if (i != cnt - 1) {
                if (!(obj instanceof GComponent)) {
                    obj = null;
                    break;
                }
                else
                    gcom = obj;
            }
        }
        return obj;
    }
    getVisibleChild(name) {
        var cnt = this._children.length;
        for (var i = 0; i < cnt; ++i) {
            var child = this._children[i];
            if (child.internalVisible && child.internalVisible2 && child.name == name)
                return child;
        }
        return null;
    }
    getChildInGroup(name, group) {
        var cnt = this._children.length;
        for (var i = 0; i < cnt; ++i) {
            var child = this._children[i];
            if (child.group == group && child.name == name)
                return child;
        }
        return null;
    }
    getChildById(id) {
        var cnt = this._children.length;
        for (var i = 0; i < cnt; ++i) {
            if (this._children[i]._id == id)
                return this._children[i];
        }
        return null;
    }
    getChildIndex(child) {
        return this._children.indexOf(child);
    }
    setChildIndex(child, index) {
        var oldIndex = this._children.indexOf(child);
        if (oldIndex == -1)
            throw "Not a child of this container";
        if (child.sortingOrder != 0) //no effect
            return;
        var cnt = this._children.length;
        if (this._sortingChildCount > 0) {
            if (index > (cnt - this._sortingChildCount - 1))
                index = cnt - this._sortingChildCount - 1;
        }
        this._setChildIndex(child, oldIndex, index);
    }
    setChildIndexBefore(child, index) {
        var oldIndex = this._children.indexOf(child);
        if (oldIndex == -1)
            throw "Not a child of this container";
        if (child.sortingOrder != 0) //no effect
            return oldIndex;
        var cnt = this._children.length;
        if (this._sortingChildCount > 0) {
            if (index > (cnt - this._sortingChildCount - 1))
                index = cnt - this._sortingChildCount - 1;
        }
        if (oldIndex < index)
            return this._setChildIndex(child, oldIndex, index - 1);
        else
            return this._setChildIndex(child, oldIndex, index);
    }
    _setChildIndex(child, oldIndex, index) {
        var cnt = this._children.length;
        if (index > cnt)
            index = cnt;
        if (oldIndex == index)
            return oldIndex;
        this._children.splice(oldIndex, 1);
        this._children.splice(index, 0, child);
        if (child.element.parent) {
            var displayIndex = 0;
            var g;
            var i;
            if (this._childrenRenderOrder == ChildrenRenderOrder.Ascent) {
                for (i = 0; i < index; i++) {
                    g = this._children[i];
                    if (g.element.parent)
                        displayIndex++;
                }
                if (displayIndex == this._container.numChildren)
                    displayIndex--;
                this._container.setChildIndex(child.element, displayIndex);
            }
            else if (this._childrenRenderOrder == ChildrenRenderOrder.Descent) {
                for (i = cnt - 1; i > index; i--) {
                    g = this._children[i];
                    if (g.element.parent)
                        displayIndex++;
                }
                if (displayIndex == this._container.numChildren)
                    displayIndex--;
                this._container.setChildIndex(child.element, displayIndex);
            }
            else {
                Timers.callLater(this.buildNativeDisplayList, this);
            }
            this.setBoundsChangedFlag();
        }
        return index;
    }
    swapChildren(child1, child2) {
        var index1 = this._children.indexOf(child1);
        var index2 = this._children.indexOf(child2);
        if (index1 == -1 || index2 == -1)
            throw "Not a child of this container";
        this.swapChildrenAt(index1, index2);
    }
    swapChildrenAt(index1, index2) {
        var child1 = this._children[index1];
        var child2 = this._children[index2];
        this.setChildIndex(child1, index2);
        this.setChildIndex(child2, index1);
    }
    get numChildren() {
        return this._children.length;
    }
    getChildren() {
        return this._children;
    }
    isAncestorOf(child) {
        if (child == null)
            return false;
        var p = child.parent;
        while (p) {
            if (p == this)
                return true;
            p = p.parent;
        }
        return false;
    }
    addController(controller) {
        this._controllers.push(controller);
        controller.parent = this;
        this.applyController(controller);
    }
    getControllerAt(index) {
        return this._controllers[index];
    }
    getController(name) {
        var cnt = this._controllers.length;
        for (var i = 0; i < cnt; ++i) {
            var c = this._controllers[i];
            if (c.name == name)
                return c;
        }
        return null;
    }
    removeController(c) {
        var index = this._controllers.indexOf(c);
        if (index == -1)
            throw new Error("controller not exists");
        c.parent = null;
        this._controllers.splice(index, 1);
        var length = this._children.length;
        for (var i = 0; i < length; i++) {
            var child = this._children[i];
            child.handleControllerChanged(c);
        }
    }
    get controllers() {
        return this._controllers;
    }
    childStateChanged(child) {
        if (this._buildingDisplayList)
            return;
        var cnt = this._children.length;
        if (child instanceof GGroup) {
            for (let i = 0; i < cnt; i++) {
                let g = this._children[i];
                if (g.group == child)
                    this.childStateChanged(g);
            }
            return;
        }
        if (child.internalVisible /*&& child.element != this._element.mask*/) {
            if (!child.element.parent) {
                var index = 0;
                if (this._childrenRenderOrder == ChildrenRenderOrder.Ascent) {
                    for (let i = 0; i < cnt; i++) {
                        let g = this._children[i];
                        if (g == child)
                            break;
                        if (g.element.parent)
                            index++;
                    }
                    this._container.addChildAt(child.element, index);
                }
                else if (this._childrenRenderOrder == ChildrenRenderOrder.Descent) {
                    for (let i = cnt - 1; i >= 0; i--) {
                        let g = this._children[i];
                        if (g == child)
                            break;
                        if (g.element.parent)
                            index++;
                    }
                    this._container.addChildAt(child.element, index);
                }
                else {
                    this._container.addChild(child.element);
                    Timers.callLater(this.buildNativeDisplayList, this);
                }
            }
        }
        else {
            if (child.element.parent) {
                this._container.removeChild(child.element);
                if (this._childrenRenderOrder == ChildrenRenderOrder.Arch)
                    Timers.callLater(this.buildNativeDisplayList, this);
            }
        }
    }
    buildNativeDisplayList() {
        if (!this._element)
            return;
        var cnt = this._children.length;
        if (cnt == 0)
            return;
        switch (this._childrenRenderOrder) {
            case ChildrenRenderOrder.Ascent:
                {
                    for (let i = 0; i < cnt; i++) {
                        let g = this._children[i];
                        if (g.internalVisible)
                            this._container.addChild(g.element);
                    }
                }
                break;
            case ChildrenRenderOrder.Descent:
                {
                    for (let i = cnt - 1; i >= 0; i--) {
                        let g = this._children[i];
                        if (g.internalVisible)
                            this._container.addChild(g.element);
                    }
                }
                break;
            case ChildrenRenderOrder.Arch:
                {
                    var apex = clamp(this._apexIndex, 0, cnt);
                    for (let i = 0; i < apex; i++) {
                        let g = this._children[i];
                        if (g.internalVisible)
                            this._container.addChild(g.element);
                    }
                    for (let i = cnt - 1; i >= apex; i--) {
                        let g = this._children[i];
                        if (g.internalVisible)
                            this._container.addChild(g.element);
                    }
                }
                break;
        }
    }
    applyController(c) {
        this._applyingController = c;
        var child;
        var length = this._children.length;
        for (var i = 0; i < length; i++) {
            child = this._children[i];
            child.handleControllerChanged(c);
        }
        this._applyingController = null;
        c.runActions();
    }
    applyAllControllers() {
        var cnt = this._controllers.length;
        for (var i = 0; i < cnt; ++i) {
            this.applyController(this._controllers[i]);
        }
    }
    adjustRadioGroupDepth(obj, c) {
        var cnt = this._children.length;
        var myIndex = -1, maxIndex = -1;
        for (let i = 0; i < cnt; i++) {
            let child = this._children[i];
            if (child == obj) {
                myIndex = i;
            }
            else if (("relatedController" in child) /*is button*/ && child.relatedController == c) {
                if (i > maxIndex)
                    maxIndex = i;
            }
        }
        if (myIndex < maxIndex) {
            //如果正在applyingController，此时修改显示列表是危险的，但真正排除危险只能用显示列表的副本去做，这样性能可能损耗较大，
            //这里取个巧，让可能漏过的child补一下handleControllerChanged，反正重复执行是无害的。
            if (this._applyingController)
                this._children[maxIndex].handleControllerChanged(this._applyingController);
            this.swapChildrenAt(myIndex, maxIndex);
        }
    }
    getTransitionAt(index) {
        return this._transitions[index];
    }
    getTransition(transName) {
        var cnt = this._transitions.length;
        for (var i = 0; i < cnt; ++i) {
            var trans = this._transitions[i];
            if (trans.name == transName)
                return trans;
        }
        return null;
    }
    isChildInView(child) {
        if (this._element.clipping) {
            return child.x + child._width >= 0 && child.x <= this._width
                && child.y + child._height >= 0 && child.y <= this._height;
        }
        else if (this._scrollPane) {
            return this._scrollPane.isChildInView(child);
        }
        else
            return true;
    }
    getFirstChildInView() {
        var cnt = this._children.length;
        for (var i = 0; i < cnt; ++i) {
            var child = this._children[i];
            if (this.isChildInView(child))
                return i;
        }
        return -1;
    }
    get scrollPane() {
        return this._scrollPane;
    }
    get opaque() {
        return this._element.opaque;
    }
    set opaque(value) {
        this._element.opaque = value;
    }
    get margin() {
        return this._margin;
    }
    set margin(value) {
        this._margin.copy(value);
        if (this._element.clipping) {
            this._container.setPosition(this._margin.left + this._alignOffset.x, this._margin.top + this._alignOffset.y);
        }
        this.handleSizeChanged();
    }
    get childrenRenderOrder() {
        return this._childrenRenderOrder;
    }
    set childrenRenderOrder(value) {
        if (this._childrenRenderOrder != value) {
            this._childrenRenderOrder = value;
            this.buildNativeDisplayList();
        }
    }
    get apexIndex() {
        return this._apexIndex;
    }
    set apexIndex(value) {
        if (this._apexIndex != value) {
            this._apexIndex = value;
            if (this._childrenRenderOrder == ChildrenRenderOrder.Arch)
                this.buildNativeDisplayList();
        }
    }
    get baseUserData() {
        var buffer = this.packageItem.rawData;
        buffer.seek(0, 4);
        return buffer.readS();
    }
    setupScroll(buffer) {
        if (this._element == this._container) {
            this._container = createUIElement("fgui-div");
            this._element.addChild(this._container);
        }
        this._scrollPane = new ScrollPane(this);
        this._scrollPane.setup(buffer);
    }
    setupOverflow(overflow) {
        if (overflow == OverflowType.Hidden) {
            if (this._element == this._container) {
                this._container = createUIElement("fgui-div");
                this._element.addChild(this._container);
            }
            this._element.clipping = true;
            this._container.setPosition(this._margin.left, this._margin.top);
        }
        else if (this._margin.left != 0 || this._margin.top != 0) {
            if (this._element == this._container) {
                this._container = createUIElement("fgui-div");
                this._element.addChild(this._container);
            }
            this._container.setPosition(this._margin.left, this._margin.top);
        }
    }
    handleSizeChanged() {
        super.handleSizeChanged();
        if (this._scrollPane)
            this._scrollPane.onOwnerSizeChanged();
    }
    handleGrayedChanged() {
        var c = this.getController("grayed");
        if (c) {
            c.selectedIndex = this.grayed ? 1 : 0;
            return;
        }
        var v = this.grayed;
        var cnt = this._children.length;
        for (var i = 0; i < cnt; ++i) {
            this._children[i].grayed = v;
        }
    }
    handleControllerChanged(c) {
        super.handleControllerChanged(c);
        if (this._scrollPane)
            this._scrollPane.handleControllerChanged(c);
    }
    setBoundsChangedFlag() {
        if (!this._scrollPane && !this._trackBounds)
            return;
        if (!this._boundsChanged) {
            this._boundsChanged = true;
            Timers.callLater(this.__render, this);
        }
    }
    __render() {
        if (this._boundsChanged) {
            this.updateBounds();
        }
    }
    ensureBoundsCorrect() {
        if (this._boundsChanged)
            this.updateBounds();
    }
    updateBounds() {
        var ax = 0, ay = 0, aw = 0, ah = 0;
        var len = this._children.length;
        if (len > 0) {
            ax = Number.POSITIVE_INFINITY, ay = Number.POSITIVE_INFINITY;
            var ar = Number.NEGATIVE_INFINITY, ab = Number.NEGATIVE_INFINITY;
            var tmp = 0;
            var i1 = 0;
            for (i1 = 0; i1 < len; i1++) {
                var child = this._children[i1];
                tmp = child.x;
                if (tmp < ax)
                    ax = tmp;
                tmp = child.y;
                if (tmp < ay)
                    ay = tmp;
                tmp = child.x + child.actualWidth;
                if (tmp > ar)
                    ar = tmp;
                tmp = child.y + child.actualHeight;
                if (tmp > ab)
                    ab = tmp;
            }
            aw = ar - ax;
            ah = ab - ay;
        }
        this.setBounds(ax, ay, aw, ah);
    }
    setBounds(ax, ay, aw, ah) {
        this._boundsChanged = false;
        if (this._scrollPane)
            this._scrollPane.setContentSize(Math.round(ax + aw), Math.round(ay + ah));
    }
    get viewWidth() {
        if (this._scrollPane)
            return this._scrollPane.viewWidth;
        else
            return this.width - this._margin.left - this._margin.right;
    }
    set viewWidth(value) {
        if (this._scrollPane)
            this._scrollPane.viewWidth = value;
        else
            this.width = value + this._margin.left + this._margin.right;
    }
    get viewHeight() {
        if (this._scrollPane)
            return this._scrollPane.viewHeight;
        else
            return this.height - this._margin.top - this._margin.bottom;
    }
    set viewHeight(value) {
        if (this._scrollPane)
            this._scrollPane.viewHeight = value;
        else
            this.height = value + this._margin.top + this._margin.bottom;
    }
    getSnappingPosition(xValue, yValue, resultPoint) {
        return this.getSnappingPositionWithDir(xValue, yValue, 0, 0, resultPoint);
    }
    /**
     * dir正数表示右移或者下移，负数表示左移或者上移
     */
    getSnappingPositionWithDir(xValue, yValue, xDir, yDir, resultPoint) {
        if (!resultPoint)
            resultPoint = new Vec2();
        var cnt = this._children.length;
        if (cnt == 0) {
            resultPoint.x = 0;
            resultPoint.y = 0;
            return resultPoint;
        }
        this.ensureBoundsCorrect();
        var obj = null;
        var prev = null;
        var i = 0;
        if (yValue != 0) {
            for (; i < cnt; i++) {
                obj = this._children[i];
                if (yValue < obj.y) {
                    if (i == 0) {
                        yValue = 0;
                        break;
                    }
                    else {
                        prev = this._children[i - 1];
                        if (yValue < prev.y + prev.actualHeight / 2) //top half part
                            yValue = prev.y;
                        else //bottom half part
                            yValue = obj.y;
                        break;
                    }
                }
            }
            if (i == cnt)
                yValue = obj.y;
        }
        if (xValue != 0) {
            if (i > 0)
                i--;
            for (; i < cnt; i++) {
                obj = this._children[i];
                if (xValue < obj.x) {
                    if (i == 0) {
                        xValue = 0;
                        break;
                    }
                    else {
                        prev = this._children[i - 1];
                        if (xValue < prev.x + prev.actualWidth / 2) //top half part
                            xValue = prev.x;
                        else //bottom half part
                            xValue = obj.x;
                        break;
                    }
                }
            }
            if (i == cnt)
                xValue = obj.x;
        }
        resultPoint.x = xValue;
        resultPoint.y = yValue;
        return resultPoint;
    }
    childSortingOrderChanged(child, oldValue, newValue) {
        if (newValue == 0) {
            this._sortingChildCount--;
            this.setChildIndex(child, this._children.length);
        }
        else {
            if (oldValue == 0)
                this._sortingChildCount++;
            var oldIndex = this._children.indexOf(child);
            var index = this.getInsertPosForSortingChild(child);
            if (oldIndex < index)
                this._setChildIndex(child, oldIndex, index - 1);
            else
                this._setChildIndex(child, oldIndex, index);
        }
    }
    constructFromResource() {
        this.constructFromResource2(null, 0);
    }
    constructFromResource2(objectPool, poolIndex) {
        var contentItem = this.packageItem.getBranch();
        if (!contentItem.decoded) {
            contentItem.decoded = true;
            TranslationHelper.translateComponent(contentItem);
        }
        var i;
        var dataLen;
        var curPos;
        var nextPos;
        var f1;
        var f2;
        var i1;
        var i2;
        var buffer = contentItem.rawData;
        buffer.seek(0, 0);
        this._underConstruct = true;
        this.sourceWidth = buffer.readInt();
        this.sourceHeight = buffer.readInt();
        this.initWidth = this.sourceWidth;
        this.initHeight = this.sourceHeight;
        this.setSize(this.sourceWidth, this.sourceHeight);
        if (buffer.readBool()) {
            this.minWidth = buffer.readInt();
            this.maxWidth = buffer.readInt();
            this.minHeight = buffer.readInt();
            this.maxHeight = buffer.readInt();
        }
        if (buffer.readBool()) {
            f1 = buffer.readFloat();
            f2 = buffer.readFloat();
            this.setPivot(f1, f2, buffer.readBool());
        }
        if (buffer.readBool()) {
            this._margin.top = buffer.readInt();
            this._margin.bottom = buffer.readInt();
            this._margin.left = buffer.readInt();
            this._margin.right = buffer.readInt();
        }
        var overflow = buffer.readByte();
        if (overflow == OverflowType.Scroll) {
            var savedPos = buffer.pos;
            buffer.seek(0, 7);
            this.setupScroll(buffer);
            buffer.pos = savedPos;
        }
        else
            this.setupOverflow(overflow);
        if (buffer.readBool())
            buffer.skip(8);
        this._buildingDisplayList = true;
        buffer.seek(0, 1);
        var controllerCount = buffer.readShort();
        for (i = 0; i < controllerCount; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.pos;
            var controller = new Controller();
            this._controllers.push(controller);
            controller.parent = this;
            controller.setup(buffer);
            buffer.pos = nextPos;
        }
        buffer.seek(0, 2);
        var child;
        var childCount = buffer.readShort();
        for (i = 0; i < childCount; i++) {
            dataLen = buffer.readShort();
            curPos = buffer.pos;
            if (objectPool)
                child = objectPool[poolIndex + i];
            else {
                buffer.seek(curPos, 0);
                var type = buffer.readByte();
                var src = buffer.readS();
                var pkgId = buffer.readS();
                var pi;
                if (src) {
                    var pkg;
                    if (pkgId)
                        pkg = UIPackage.getById(pkgId);
                    else
                        pkg = contentItem.owner;
                    pi = pkg ? pkg.getItemById(src) : null;
                }
                else
                    pi = null;
                if (pi) {
                    child = UIObjectFactory.newObject(pi);
                    child.constructFromResource();
                }
                else
                    child = UIObjectFactory.newObject(type);
            }
            child._underConstruct = true;
            child.setup_beforeAdd(buffer, curPos);
            child.parent = this;
            this._children.push(child);
            buffer.pos = curPos + dataLen;
        }
        buffer.seek(0, 3);
        this.relations.setup(buffer, true);
        buffer.seek(0, 2);
        buffer.skip(2);
        for (i = 0; i < childCount; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.pos;
            buffer.seek(buffer.pos, 3);
            this._children[i].relations.setup(buffer, false);
            buffer.pos = nextPos;
        }
        buffer.seek(0, 2);
        buffer.skip(2);
        for (i = 0; i < childCount; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.pos;
            child = this._children[i];
            child.setup_afterAdd(buffer, buffer.pos);
            child._underConstruct = false;
            buffer.pos = nextPos;
        }
        buffer.seek(0, 4);
        buffer.skip(2); //customData
        this.opaque = buffer.readBool();
        var maskId = buffer.readShort();
        if (maskId != -1) {
            buffer.readBool();
            //todo 
            //setMask(this.getChildAt(maskId).element, buffer.readBool())
        }
        var hitTestId = buffer.readS();
        i1 = buffer.readInt();
        i2 = buffer.readInt();
        buffer.seek(0, 5);
        var transitionCount = buffer.readShort();
        for (i = 0; i < transitionCount; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.pos;
            var trans = new Transition(this);
            trans.setup(buffer);
            this._transitions.push(trans);
            buffer.pos = nextPos;
        }
        if (this._transitions.length > 0) {
            this.on("added_to_stage", () => { this._transitions.forEach(e => e.onOwnerAddedToStage()); });
            this.on("removed_from_stage", () => { this._transitions.forEach(e => e.onOwnerRemovedFromStage()); });
        }
        this.applyAllControllers();
        this._buildingDisplayList = false;
        this._underConstruct = false;
        this.buildNativeDisplayList();
        this.setBoundsChangedFlag();
        if (contentItem.objectType != ObjectType.Component)
            this.constructExtension(buffer);
        this.onConstruct();
    }
    constructExtension(buffer) {
    }
    onConstruct() {
    }
    setup_afterAdd(buffer, beginPos) {
        super.setup_afterAdd(buffer, beginPos);
        buffer.seek(beginPos, 4);
        var pageController = buffer.readShort();
        if (pageController != -1 && this._scrollPane)
            this._scrollPane.pageController = this._parent.getControllerAt(pageController);
        var cnt;
        var i;
        cnt = buffer.readShort();
        for (i = 0; i < cnt; i++) {
            var cc = this.getController(buffer.readS());
            var pageId = buffer.readS();
            if (cc)
                cc.selectedPageId = pageId;
        }
        if (buffer.version >= 2) {
            cnt = buffer.readShort();
            for (i = 0; i < cnt; i++) {
                var target = buffer.readS();
                var propertyId = buffer.readShort();
                var value = buffer.readS();
                var obj = this.getChildByPath(target);
                if (obj)
                    obj.setProp(propertyId, value);
            }
        }
    }
}

class GWindow extends GComponent {
    constructor() {
        super();
        this._requestingCmd = 0;
        this._uiSources = [];
        this.bringToFontOnClick = UIConfig.bringWindowToFrontOnClick;
        this.on("added_to_stage", this.__onShown, this);
        this.on("removed_from_stage", this.__onHidden, this);
        this.on("pointer_down", this.__winTouchBegin, this);
    }
    addUISource(source) {
        this._uiSources.push(source);
    }
    set contentPane(val) {
        if (this._contentPane != val) {
            if (this._contentPane)
                this.removeChild(this._contentPane);
            this._contentPane = val;
            if (this._contentPane) {
                this.addChild(this._contentPane);
                this.setSize(this._contentPane.width, this._contentPane.height);
                this._contentPane.addRelation(this, RelationType.Size);
                this._frame = (this._contentPane.getChild("frame"));
                if (this._frame) {
                    this.closeButton = this._frame.getChild("closeButton");
                    this.dragArea = this._frame.getChild("dragArea");
                    this.contentArea = this._frame.getChild("contentArea");
                }
            }
        }
    }
    get contentPane() {
        return this._contentPane;
    }
    get frame() {
        return this._frame;
    }
    get closeButton() {
        return this._closeButton;
    }
    set closeButton(value) {
        if (this._closeButton)
            this._closeButton.offClick(this.closeEventHandler, this);
        this._closeButton = value;
        if (this._closeButton)
            this._closeButton.onClick(this.closeEventHandler, this);
    }
    get dragArea() {
        return this._dragArea;
    }
    set dragArea(value) {
        if (this._dragArea != value) {
            if (this._dragArea) {
                this._dragArea.draggable = false;
                this._dragArea.off("drag_start", this.__dragStart, this);
            }
            this._dragArea = value;
            if (this._dragArea) {
                if (this._dragArea instanceof GGraph)
                    this._dragArea.element.drawRect(0, Color.CLEAR, Color.CLEAR);
                this._dragArea.draggable = true;
                this._dragArea.on("drag_start", this.__dragStart, this);
            }
        }
    }
    get contentArea() {
        return this._contentArea;
    }
    set contentArea(value) {
        this._contentArea = value;
    }
    show(groot) {
        (groot !== null && groot !== void 0 ? groot : GRoot$1.inst).showWindow(this);
    }
    hide() {
        if (this.isShowing)
            this.doHideAnimation();
    }
    hideImmediately() {
        GRoot$1.getInst(this).hideWindowImmediately(this);
    }
    centerOn(r, restraint) {
        this.setPosition(Math.round((r.width - this.width) / 2), Math.round((r.height - this.height) / 2));
        if (restraint) {
            this.addRelation(r, RelationType.Center_Center);
            this.addRelation(r, RelationType.Middle_Middle);
        }
    }
    toggleStatus() {
        if (this.isTop)
            this.hide();
        else
            this.show();
    }
    get isShowing() {
        return this.parent != null;
    }
    get isTop() {
        return this.parent && this.parent.getChildIndex(this) == this.parent.numChildren - 1;
    }
    get modal() {
        return this._modal;
    }
    set modal(val) {
        this._modal = val;
    }
    bringToFront() {
        GRoot$1.getInst(this).bringToFront(this);
    }
    showModalWait(requestingCmd) {
        if (requestingCmd != null)
            this._requestingCmd = requestingCmd;
        if (UIConfig.windowModalWaiting) {
            if (!this._modalWaitPane)
                this._modalWaitPane = UIPackage.createObjectFromURL(UIConfig.windowModalWaiting);
            this.layoutModalWaitPane();
            this.addChild(this._modalWaitPane);
        }
    }
    layoutModalWaitPane() {
        if (this._contentArea) {
            var pt = this._frame.localToGlobal();
            pt = this.globalToLocal(pt.x, pt.y, pt);
            this._modalWaitPane.setPosition(pt.x + this._contentArea.x, pt.y + this._contentArea.y);
            this._modalWaitPane.setSize(this._contentArea.width, this._contentArea.height);
        }
        else
            this._modalWaitPane.setSize(this.width, this.height);
    }
    closeModalWait(requestingCmd) {
        if (requestingCmd != null) {
            if (this._requestingCmd != requestingCmd)
                return false;
        }
        this._requestingCmd = 0;
        if (this.modalWaiting)
            this.removeChild(this._modalWaitPane);
        return true;
    }
    get modalWaiting() {
        return this._modalWaitPane != null && this._modalWaitPane.parent != null;
    }
    init() {
        if (this._inited || this._loading)
            return;
        if (this._uiSources.length > 0) {
            this._loading = false;
            var cnt = this._uiSources.length;
            for (var i = 0; i < cnt; i++) {
                var lib = this._uiSources[i];
                if (!lib.loaded) {
                    lib.load(this.__uiLoadComplete, this);
                    this._loading = true;
                }
            }
            if (!this._loading)
                this._init();
        }
        else
            this._init();
    }
    onInit() {
    }
    onShown() {
    }
    onHide() {
    }
    doShowAnimation() {
        this.onShown();
    }
    doHideAnimation() {
        this.hideImmediately();
    }
    __uiLoadComplete() {
        var cnt = this._uiSources.length;
        for (var i = 0; i < cnt; i++) {
            var lib = this._uiSources[i];
            if (!lib.loaded)
                return;
        }
        this._loading = false;
        this._init();
    }
    _init() {
        this._inited = true;
        this.onInit();
        if (this.isShowing)
            this.doShowAnimation();
    }
    dispose() {
        if (this.parent)
            this.hideImmediately();
        super.dispose();
    }
    closeEventHandler() {
        this.hide();
    }
    __onShown() {
        if (!this._inited)
            this.init();
        else
            this.doShowAnimation();
    }
    __onHidden() {
        this.closeModalWait();
        this.onHide();
    }
    __winTouchBegin() {
        if (this.isShowing && this.bringToFontOnClick)
            this.bringToFront();
    }
    __dragStart(evt) {
        evt.preventDefault();
        this.startDrag(evt.input.pointerId);
    }
}

var _inst;
class GRoot$1 extends GComponent {
    constructor(ownerWindow) {
        super();
        if (!_inst)
            _inst = this;
        if (!ownerWindow)
            ownerWindow = window;
        this._element.setWindow(ownerWindow);
        this._popupStack = [];
        this._justClosedPopups = [];
        this.on("pointer_down", this.__elementTouchBegin, this, true);
        ownerWindow.addEventListener("blur", () => this.checkPopups());
        this._modalLayer = new GGraph();
        this._modalLayer.setSize(this.width, this.height);
        this._modalLayer.element.drawRect(0, Color.CLEAR, UIConfig.modalLayerColor);
        this._modalLayer.addRelation(this, RelationType.Size);
        this.setSize(this._element.window.innerWidth, this._element.window.innerHeight);
        ownerWindow.addEventListener('resize', () => {
            this.setSize(this._element.window.innerWidth, this._element.window.innerHeight);
        });
    }
    static get inst() {
        if (!_inst) {
            _inst = new GRoot$1();
        }
        return _inst;
    }
    static getInst(obj) {
        let stage = obj.element.stage;
        if (stage)
            return stage.$owner;
        else
            return GRoot$1.inst;
    }
    createElement() {
        this._element = createUIElement("fgui-stage", this);
        this._container = this._element;
    }
    get element() {
        return this._element;
    }
    get pointerPos() {
        return this._element.pointerPos;
    }
    get touchScreen() {
        return this._element.touchScreen;
    }
    get touchCount() {
        return this._element.touchCount;
    }
    getPointerPos(pointerId, ret) {
        return this._element.getPointerPos(pointerId, ret);
    }
    get touchTarget() {
        let p = this._element.touchTarget;
        while (p) {
            if (p.$owner)
                return p.$owner;
            p = p.parent;
        }
        return null;
    }
    get focusedObj() {
        let p = this._element.focusedElement;
        while (p) {
            if (p.$owner)
                return p.$owner;
            p = p.parent;
        }
        return null;
    }
    showWindow(win) {
        this.addChild(win);
        if (win.x > this.width)
            win.x = this.width - win.width;
        else if (win.x + win.width < 0)
            win.x = 0;
        if (win.y > this.height)
            win.y = this.height - win.height;
        else if (win.y + win.height < 0)
            win.y = 0;
        this.adjustModalLayer();
    }
    hideWindow(win) {
        win.hide();
    }
    hideWindowImmediately(win) {
        if (win.parent == this)
            this.removeChild(win);
        this.adjustModalLayer();
    }
    bringToFront(win) {
        var cnt = this.numChildren;
        var i;
        if (this._modalLayer.parent && !win.modal)
            i = this.getChildIndex(this._modalLayer) - 1;
        else
            i = cnt - 1;
        for (; i >= 0; i--) {
            var g = this.getChildAt(i);
            if (g == win)
                return;
            if (g instanceof GWindow)
                break;
        }
        if (i >= 0)
            this.setChildIndex(win, i);
    }
    showModalWait(msg) {
        if (UIConfig.globalModalWaiting) {
            if (this._modalWaitPane == null)
                this._modalWaitPane = UIPackage.createObjectFromURL(UIConfig.globalModalWaiting);
            this._modalWaitPane.setSize(this.width, this.height);
            this._modalWaitPane.addRelation(this, RelationType.Size);
            this.addChild(this._modalWaitPane);
            this._modalWaitPane.text = msg || "";
        }
    }
    closeModalWait() {
        if (this._modalWaitPane && this._modalWaitPane.parent)
            this.removeChild(this._modalWaitPane);
    }
    closeAllExceptModals() {
        var arr = this._children.slice();
        var cnt = arr.length;
        for (var i = 0; i < cnt; i++) {
            var g = arr[i];
            if ((g instanceof GWindow) && !g.modal)
                g.hide();
        }
    }
    closeAllWindows() {
        var arr = this._children.slice();
        var cnt = arr.length;
        for (var i = 0; i < cnt; i++) {
            var g = arr[i];
            if (g instanceof GWindow)
                g.hide();
        }
    }
    getTopWindow() {
        var cnt = this.numChildren;
        for (var i = cnt - 1; i >= 0; i--) {
            var g = this.getChildAt(i);
            if (g instanceof GWindow) {
                return g;
            }
        }
        return null;
    }
    get modalLayer() {
        return this._modalLayer;
    }
    get hasModalWindow() {
        return this._modalLayer.parent != null;
    }
    get modalWaiting() {
        return this._modalWaitPane && this._modalWaitPane.onStage;
    }
    showPopup(popup, target, dir) {
        if (this._popupStack.length > 0) {
            var k = this._popupStack.indexOf(popup);
            if (k != -1) {
                for (var i = this._popupStack.length - 1; i >= k; i--)
                    this.removeChild(this._popupStack.pop());
            }
        }
        this._popupStack.push(popup);
        if (target) {
            var p = target;
            while (p) {
                if (p.parent == this) {
                    if (popup.sortingOrder < p.sortingOrder) {
                        popup.sortingOrder = p.sortingOrder;
                    }
                    break;
                }
                p = p.parent;
            }
        }
        this.addChild(popup);
        this.adjustModalLayer();
        var pos;
        var sizeW = 0, sizeH = 0;
        if (target) {
            pos = target.localToRoot(0, 0);
            let size = target.localToRoot(target.width, target.height);
            sizeW = size.x - pos.x;
            sizeH = size.y - pos.y;
        }
        else {
            pos = this._element.getPointerPos();
            pos = this.globalToLocal(pos.x, pos.y);
        }
        var xx, yy;
        xx = pos.x;
        if (xx + popup.width > this.width)
            xx = xx + sizeW - popup.width;
        yy = pos.y + sizeH;
        if (((dir === undefined || dir === PopupDirection.Auto) && yy + popup.height > this.height)
            || dir === PopupDirection.Up) {
            yy = pos.y - popup.height - 1;
            if (yy < 0) {
                yy = 0;
                xx += sizeW / 2;
            }
        }
        popup.setPosition(xx, yy);
    }
    togglePopup(popup, target, dir) {
        if (this._justClosedPopups.indexOf(popup) != -1)
            return;
        this.showPopup(popup, target, dir);
    }
    hidePopup(popup) {
        if (popup) {
            var k = this._popupStack.indexOf(popup);
            if (k != -1) {
                for (var i = this._popupStack.length - 1; i >= k; i--)
                    this.closePopup(this._popupStack.pop());
            }
        }
        else {
            var cnt = this._popupStack.length;
            for (i = cnt - 1; i >= 0; i--)
                this.closePopup(this._popupStack[i]);
            this._popupStack.length = 0;
        }
    }
    get hasAnyPopup() {
        return this._popupStack.length != 0;
    }
    closePopup(target) {
        if (target.parent) {
            if (target instanceof GWindow)
                target.hide();
            else
                this.removeChild(target);
        }
    }
    showTooltips(msg) {
        if (this._defaultTooltipWin == null) {
            var resourceURL = UIConfig.tooltipsWin;
            if (!resourceURL) {
                console.warn("UIConfig.tooltipsWin not defined");
                return;
            }
            this._defaultTooltipWin = UIPackage.createObjectFromURL(resourceURL);
        }
        this._defaultTooltipWin.text = msg;
        this.showTooltipsWin(this._defaultTooltipWin);
    }
    showTooltipsWin(tooltipWin, xx, yy) {
        this.hideTooltips();
        this._tooltipWin = tooltipWin;
        if (xx == null || yy == null) {
            xx = this._element.pointerPos.x + 10;
            yy = this._element.pointerPos.y + 20;
        }
        var pt = this.globalToLocal(xx, yy);
        xx = pt.x;
        yy = pt.y;
        if (xx + this._tooltipWin.width > this.width) {
            xx = xx - this._tooltipWin.width - 1;
            if (xx < 0)
                xx = 10;
        }
        if (yy + this._tooltipWin.height > this.height) {
            yy = yy - this._tooltipWin.height - 1;
            if (xx - this._tooltipWin.width - 1 > 0)
                xx = xx - this._tooltipWin.width - 1;
            if (yy < 0)
                yy = 10;
        }
        this._tooltipWin.x = xx;
        this._tooltipWin.y = yy;
        this.addChild(this._tooltipWin);
    }
    hideTooltips() {
        if (this._tooltipWin) {
            if (this._tooltipWin.parent)
                this.removeChild(this._tooltipWin);
            this._tooltipWin = null;
        }
    }
    static playOneShotSound(url, volumeScale) {
        // if (!Stage.audioListener)
        //     return;
        // if (volumeScale == null) volumeScale = 1;
        // let pi = UIPackage.getItemByURL(url);
        // if (pi && pi.audioBuffer) {
        //     if (!pi.sound) {
        //         pi.sound = new Audio(Stage.audioListener);
        //         pi.sound.setBuffer(pi.audioBuffer);
        //         pi.sound.setLoop(false);
        //     }
        //     pi.sound.setVolume(volumeScale);
        //     pi.sound.play();
        // }
    }
    adjustModalLayer() {
        var cnt = this.numChildren;
        if (this._modalWaitPane && this._modalWaitPane.parent)
            this.setChildIndex(this._modalWaitPane, cnt - 1);
        for (var i = cnt - 1; i >= 0; i--) {
            var g = this.getChildAt(i);
            if ((g instanceof GWindow) && g.modal) {
                if (this._modalLayer.parent == null)
                    this.addChildAt(this._modalLayer, i);
                else
                    this.setChildIndexBefore(this._modalLayer, i);
                return;
            }
        }
        if (this._modalLayer.parent)
            this.removeChild(this._modalLayer);
    }
    checkPopups() {
        this._justClosedPopups.length = 0;
        if (this._popupStack.length > 0) {
            let mc = this._element.touchTarget;
            let handled = false;
            while (mc) {
                let gobj = mc.$owner;
                if (gobj) {
                    let k = this._popupStack.indexOf(gobj);
                    if (k != -1) {
                        for (let i = this._popupStack.length - 1; i > k; i--) {
                            let last = this._popupStack.length - 1;
                            let popup = this._popupStack[last];
                            this.closePopup(popup);
                            this._justClosedPopups.push(popup);
                            this._popupStack.splice(last, 1);
                        }
                        handled = true;
                        break;
                    }
                }
                mc = mc.parent;
            }
            if (!handled) {
                for (let i = this._popupStack.length - 1; i >= 0; i--) {
                    let popup = this._popupStack[i];
                    this.closePopup(popup);
                    this._justClosedPopups.push(popup);
                    this._popupStack.splice(i, 1);
                }
            }
        }
    }
    __elementTouchBegin() {
        if (this._tooltipWin)
            this.hideTooltips();
        this.checkPopups();
    }
}
global.GRoot = GRoot$1;

class UBBParser {
    constructor() {
        this._readPos = 0;
        this.defaultImgWidth = 0;
        this.defaultImgHeight = 0;
        this.linkClass = UIConfig.defaultLinkClass;
        this._handlers = {};
        this._handlers["url"] = this.onTag_URL;
        this._handlers["img"] = this.onTag_IMG;
        this._handlers["b"] = this.onTag_B;
        this._handlers["i"] = this.onTag_I;
        this._handlers["u"] = this.onTag_U;
        this._handlers["sup"] = this.onTag_Simple;
        this._handlers["sub"] = this.onTag_Simple;
        this._handlers["color"] = this.onTag_COLOR;
        this._handlers["font"] = this.onTag_FONT;
        this._handlers["size"] = this.onTag_SIZE;
    }
    onTag_URL(tagName, end, attr) {
        if (!end) {
            if (attr == null)
                attr = this.getTagText();
            return "<a class='" + this.linkClass + "' href=\"#\" onclick=\"stage.onClickLink(event, '" + attr + "');\">";
        }
        else
            return "</a>";
    }
    onTag_IMG(tagName, end, attr) {
        if (!end) {
            var src = this.getTagText(true);
            if (!src)
                return null;
            if (src.startsWith("ui://")) {
                let pi = UIPackage.getItemByURL(src);
                if (pi)
                    src = pi.file;
            }
            if (this.defaultImgWidth)
                return "<img src=\"" + src + "\" width=\"" + this.defaultImgWidth + "\" height=\"" + this.defaultImgHeight + "\"/>";
            else
                return "<img src=\"" + src + "\"/>";
        }
        else
            return null;
    }
    onTag_B(tagName, end, attr) {
        return end ? ("</b>") : ("<b>");
    }
    onTag_I(tagName, end, attr) {
        return end ? ("</i>") : ("<i>");
    }
    onTag_U(tagName, end, attr) {
        return end ? ("</u>") : ("<u>");
    }
    onTag_Simple(tagName, end, attr) {
        return end ? ("</" + tagName + ">") : ("<" + tagName + ">");
    }
    onTag_COLOR(tagName, end, attr) {
        if (!end) {
            this.lastColor = attr;
            return "<span style=\"color:" + attr + "\">";
        }
        else
            return "</span>";
    }
    onTag_FONT(tagName, end, attr) {
        if (!end)
            return "<span style=\"font-family:" + attr + "\">";
        else
            return "</span>";
    }
    onTag_SIZE(tagName, end, attr) {
        if (!end) {
            this.lastSize = attr;
            return "<span style=\"font-size:" + attr + "px\">";
        }
        else
            return "</span>";
    }
    getTagText(remove) {
        var pos1 = this._readPos;
        var pos2;
        var result = "";
        while ((pos2 = this._text.indexOf("[", pos1)) != -1) {
            if (this._text.charCodeAt(pos2 - 1) == 92) //\
             {
                result += this._text.substring(pos1, pos2 - 1);
                result += "[";
                pos1 = pos2 + 1;
            }
            else {
                result += this._text.substring(pos1, pos2);
                break;
            }
        }
        if (pos2 == -1)
            return null;
        if (remove)
            this._readPos = pos2;
        return result;
    }
    parse(text, remove) {
        this._text = text;
        this.lastColor = null;
        this.lastSize = null;
        var pos1 = 0, pos2, pos3;
        var end;
        var tag, attr;
        var repl;
        var func;
        var result = "";
        while ((pos2 = this._text.indexOf("[", pos1)) != -1) {
            if (pos2 > 0 && this._text.charCodeAt(pos2 - 1) == 92) //\
             {
                result += this._text.substring(pos1, pos2 - 1);
                result += "[";
                pos1 = pos2 + 1;
                continue;
            }
            result += this._text.substring(pos1, pos2);
            pos1 = pos2;
            pos2 = this._text.indexOf("]", pos1);
            if (pos2 == -1)
                break;
            end = this._text.charAt(pos1 + 1) == '/';
            tag = this._text.substring(end ? pos1 + 2 : pos1 + 1, pos2);
            this._readPos = pos2 + 1;
            attr = null;
            repl = null;
            pos3 = tag.indexOf("=");
            if (pos3 != -1) {
                attr = tag.substring(pos3 + 1);
                tag = tag.substring(0, pos3);
            }
            tag = tag.toLowerCase();
            func = this._handlers[tag];
            if (func != null) {
                if (!remove) {
                    repl = func.call(this, tag, end, attr);
                    if (repl != null)
                        result += repl;
                }
            }
            else
                result += this._text.substring(pos1, this._readPos);
            pos1 = this._readPos;
        }
        if (pos1 < this._text.length)
            result += this._text.substr(pos1);
        this._text = null;
        return result;
    }
}
var defaultParser = new UBBParser();

class XMLUtils {
    static decodeString(aSource) {
        let len = aSource.length;
        let sb = "";
        let pos1 = 0, pos2 = 0;
        while (true) {
            pos2 = aSource.indexOf('&', pos1);
            if (pos2 == -1) {
                sb += aSource.substr(pos1);
                break;
            }
            sb += aSource.substr(pos1, pos2 - pos1);
            pos1 = pos2 + 1;
            pos2 = pos1;
            let end = Math.min(len, pos2 + 10);
            for (; pos2 < end; pos2++) {
                if (aSource[pos2] == ';')
                    break;
            }
            if (pos2 < end && pos2 > pos1) {
                let entity = aSource.substr(pos1, pos2 - pos1);
                let u = 0;
                if (entity[0] == '#') {
                    if (entity.length > 1) {
                        if (entity[1] == 'x')
                            u = parseInt(entity.substr(2), 16);
                        else
                            u = parseInt(entity.substr(1));
                        sb += String.fromCharCode(u);
                        pos1 = pos2 + 1;
                    }
                    else
                        sb += '&';
                }
                else {
                    switch (entity) {
                        case "amp":
                            u = 38;
                            break;
                        case "apos":
                            u = 39;
                            break;
                        case "gt":
                            u = 62;
                            break;
                        case "lt":
                            u = 60;
                            break;
                        case "nbsp":
                            u = 32;
                            break;
                        case "quot":
                            u = 34;
                            break;
                    }
                    if (u > 0) {
                        sb += String.fromCharCode(u);
                        pos1 = pos2 + 1;
                    }
                    else
                        sb += '&';
                }
            }
            else {
                sb += '&';
            }
        }
        return sb;
    }
    static encodeString(str) {
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;")
            .replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
    }
    static getString(attrs, attrName, defValue) {
        if (attrs == null)
            return defValue == null ? null : defValue;
        let ret = attrs[attrName];
        if (ret != null)
            return "" + ret;
        else
            return defValue == null ? null : defValue;
    }
    static getInt(attrs, attrName, defValue) {
        let value = this.getString(attrs, attrName);
        if (value == null || value.length == 0)
            return defValue == null ? 0 : defValue;
        if (value[value.length - 1] == '%') {
            let ret = parseInt(value.substring(0, value.length - 1));
            return Math.ceil(ret / 100.0 * defValue);
        }
        else
            return parseInt(value);
    }
    static getFloat(attrs, attrName, defValue) {
        let value = this.getString(attrs, attrName);
        if (value == null || value.length == 0)
            return defValue == null ? 0 : defValue;
        let ret = parseFloat(value);
        if (isNaN(ret))
            return defValue == null ? 0 : defValue;
        else
            return ret;
    }
    static getBool(attrs, attrName, defValue) {
        let value = this.getString(attrs, attrName);
        if (value == null || value.length == 0)
            return defValue == null ? false : defValue;
        if (value == "true" || value == "1")
            return true;
        else if (value == "false" || value == "0")
            return false;
        else
            return defValue == null ? false : defValue;
    }
    static getColor(attrs, attrName, defValue) {
        let value = this.getString(attrs, attrName);
        if (value == null || value.length == 0)
            return defValue == null ? 0 : defValue;
        s_color$1.parseHexString(value);
        return s_color$1.getHex();
    }
}
let s_color$1 = new Color();

class GTextField extends GObject {
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
    createElement() {
        this._element = createUIElement("fgui-text", this);
        this._element.setNotInteractable();
    }
    get element() {
        return this._element;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        if (value == null)
            value = "";
        this._text = value;
        this.setText();
        this.updateSize();
        this.updateGear(6);
    }
    setText() {
        let str = this._text;
        if (this._template)
            str = this.parseTemplate(str);
        this._element.maxWidth = this.maxWidth;
        if (this._ubbEnabled)
            this._element.htmlText = defaultParser.parse(XMLUtils.encodeString(str));
        else
            this._element.text = str;
    }
    get textTemplate() {
        return this._template;
    }
    set textTemplate(value) {
        if (!this._template && !value)
            return;
        this._template = value;
        this.flushVars();
    }
    setVar(name, value) {
        if (!this._template)
            this._template = {};
        this._template[name] = value;
        return this;
    }
    flushVars() {
        this.setText();
        this.updateSize();
    }
    get textFormat() {
        return this._element.textFormat;
    }
    applyFormat() {
        this._element.applyFormat();
        if (!this._underConstruct)
            this.updateSize();
    }
    get singleLine() {
        return this._element.singleLine;
    }
    set singleLine(value) {
        this._element.singleLine = value;
    }
    set ubbEnabled(value) {
        this._ubbEnabled = value;
    }
    get ubbEnabled() {
        return this._ubbEnabled;
    }
    get autoSize() {
        return this._element.autoSize;
    }
    set autoSize(value) {
        this._element.autoSize = value;
    }
    get color() {
        return this._element.textFormat.color;
    }
    set color(value) {
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
    get textWidth() {
        return this._element.textWidth;
    }
    getProp(index) {
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
    setProp(index, value) {
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
    updateSize() {
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
    handleSizeChanged() {
        if (this._updatingSize)
            return;
        if (this._underConstruct)
            this._element.setSize(this.width, this.height);
        else if (this._element.autoSize != AutoSizeType.Both) {
            if (this._element.autoSize == AutoSizeType.Height) {
                this._element.width = this.width; //先调整宽度，让文本重排
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
    setup_beforeAdd(buffer, beginPos) {
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
    setup_afterAdd(buffer, beginPos) {
        super.setup_afterAdd(buffer, beginPos);
        buffer.seek(beginPos, 6);
        var str = buffer.readS();
        if (str != null)
            this.text = str;
    }
    parseTemplate(template) {
        var pos1 = 0, pos2, pos3;
        var tag;
        var value;
        var result = "";
        while ((pos2 = template.indexOf("{", pos1)) != -1) {
            if (pos2 > 0 && template.charCodeAt(pos2 - 1) == 92) //\
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

class GRichTextField extends GTextField {
    constructor() {
        super();
    }
    createElement() {
        this._element = createUIElement("fgui-text", this);
    }
    setText() {
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

class GTextInput extends GObject {
    constructor() {
        super();
    }
    createElement() {
        this._element = createUIElement("fgui-input", this);
    }
    get element() {
        return this._element;
    }
    get text() {
        return this._element.text;
    }
    set text(value) {
        if (value == null)
            value = "";
        this._element.text = value;
        this.updateGear(6);
    }
    get textFormat() {
        return this._element.textFormat;
    }
    applyFormat() {
        this._element.applyFormat();
    }
    get singleLine() {
        return this._element.singleLine;
    }
    set singleLine(value) {
        this._element.singleLine = value;
    }
    get color() {
        return this._element.textFormat.color;
    }
    set color(value) {
        if (this._element.textFormat.color != value) {
            this._element.textFormat.color = value;
            this._element.applyFormat();
            this.updateGear(4);
        }
    }
    get password() {
        return this._element.password;
    }
    set password(value) {
        this._element.password = value;
    }
    set editable(value) {
        this._element.editable = value;
    }
    get editable() {
        return this._element.editable;
    }
    setMaxLength(value) {
        this._element.setMaxLength(value);
    }
    setPromptText(value) {
        return this._element.setPromptText(value);
    }
    setRestrict(value) {
        this._element.setRestrict(value);
    }
    setKeyboardType(value) {
        this._element.setKeyboardType(value);
    }
    setSelection(start, end) {
        this._element.setSelection(start, end);
    }
    getProp(index) {
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
    setProp(index, value) {
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
    setup_beforeAdd(buffer, beginPos) {
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
        var str = buffer.readS();
        if (str != null)
            this.setPromptText(str);
        str = buffer.readS();
        if (str != null)
            this.setRestrict(str);
        var iv = buffer.readInt();
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
    setup_afterAdd(buffer, beginPos) {
        super.setup_afterAdd(buffer, beginPos);
        buffer.seek(beginPos, 6);
        var str = buffer.readS();
        if (str != null)
            this.text = str;
    }
}

class GLoader extends GObject {
    constructor() {
        super();
        this._url = "";
        this._fill = LoaderFillType.None;
        this._align = "left";
        this._valign = "top";
    }
    createElement() {
        this._element = createUIElement("fgui-div", this);
        this._content = createUIElement("fgui-movieclip");
        this._content.setNotInteractable();
        this._element.addChild(this._content);
    }
    dispose() {
        if (this._content2)
            this._content2.dispose();
        super.dispose();
    }
    get url() {
        return this._url;
    }
    set url(value) {
        if (this._url == value)
            return;
        this._url = value;
        this.loadContent();
        this.updateGear(7);
    }
    get icon() {
        return this._url;
    }
    set icon(value) {
        this.url = value;
    }
    get align() {
        return this._align;
    }
    set align(value) {
        if (this._align != value) {
            this._align = value;
            this.updateLayout();
        }
    }
    get verticalAlign() {
        return this._valign;
    }
    set verticalAlign(value) {
        if (this._valign != value) {
            this._valign = value;
            this.updateLayout();
        }
    }
    get fill() {
        return this._fill;
    }
    set fill(value) {
        if (this._fill != value) {
            this._fill = value;
            this.updateLayout();
        }
    }
    get shrinkOnly() {
        return this._shrinkOnly;
    }
    set shrinkOnly(value) {
        if (this._shrinkOnly != value) {
            this._shrinkOnly = value;
            this.updateLayout();
        }
    }
    get autoSize() {
        return this._autoSize;
    }
    set autoSize(value) {
        if (this._autoSize != value) {
            this._autoSize = value;
            this.updateLayout();
        }
    }
    get playing() {
        return this._content.playing;
    }
    set playing(value) {
        if (this._content.playing != value) {
            this._content.playing = value;
            this.updateGear(5);
        }
    }
    get frame() {
        return this._content.frame;
    }
    set frame(value) {
        if (this._content.frame != value) {
            this._content.frame = value;
            this.updateGear(5);
        }
    }
    get color() {
        return this._content.color;
    }
    set color(value) {
        if (this._content.color != value) {
            this._content.color = value;
            this.updateGear(4);
        }
    }
    get fillMethod() {
        return this._content.fillMethod;
    }
    set fillMethod(value) {
        this._content.fillMethod = value;
    }
    get fillOrigin() {
        return this._content.fillOrigin;
    }
    set fillOrigin(value) {
        this._content.fillOrigin = value;
    }
    get fillClockwise() {
        return this._content.fillClockwise;
    }
    set fillClockwise(value) {
        this._content.fillClockwise = value;
    }
    get fillAmount() {
        return this._content.fillAmount;
    }
    set fillAmount(value) {
        this._content.fillAmount = value;
    }
    get content() {
        return this._content;
    }
    get component() {
        return this._content2;
    }
    loadContent() {
        this.clearContent2();
        if (!this._url) {
            this.clearContent();
            return;
        }
        if (this._url.startsWith("ui://"))
            this.loadFromPackage(this._url);
        else
            this.loadExternal();
    }
    loadFromPackage(itemURL) {
        this._contentItem = UIPackage.getItemByURL(itemURL);
        if (this._contentItem) {
            this._contentItem = this._contentItem.getBranch();
            this.sourceWidth = this._contentItem.width;
            this.sourceHeight = this._contentItem.height;
            this._contentItem = this._contentItem.getHighResolution();
            if (this._autoSize)
                this.setSize(this.sourceWidth, this.sourceHeight);
            if (this._contentItem.type == PackageItemType.Image) {
                this._content.src = this._contentItem.file;
                this._content.scale9Grid = this._contentItem.scale9Grid;
                this._content.scaleByTile = this._contentItem.scaleByTile;
                this._content.tileGridIndice = this._contentItem.tileGridIndice;
                if (this._content.scaleByTile)
                    this._content.textureScale = new Vec2(this.sourceWidth, this.sourceHeight);
                else
                    this._content.textureScale = new Vec2(this._contentItem.width / this.sourceWidth, this._contentItem.height / this.sourceHeight);
                this.updateLayout();
            }
            else if (this._contentItem.type == PackageItemType.MovieClip) {
                this._content.interval = this._contentItem.interval;
                this._content.swing = this._contentItem.swing;
                this._content.repeatDelay = this._contentItem.repeatDelay;
                this._content.frames = this._contentItem.frames;
                this.updateLayout();
            }
            else if (this._contentItem.type == PackageItemType.Component) {
                this.clearContent();
                var obj = UIPackage.createObjectFromURL(itemURL);
                if (!obj)
                    this.setErrorState();
                else if (!(obj instanceof GComponent)) {
                    obj.dispose();
                    this.setErrorState();
                }
                else {
                    this._content2 = obj;
                    this._element.addChild(this._content2.element);
                    this.updateLayout();
                }
            }
            else {
                this.clearContent();
                this.setErrorState();
            }
        }
        else {
            this.clearContent();
            this.setErrorState();
        }
    }
    loadExternal() {
        if (!this._loadingImg)
            this._loadingImg = document.createElement("img");
        else {
            this._loadingImg.src = "";
            this._loadingImg.onload = null;
            this._loadingImg.onerror = null;
        }
        this._loadingImg.src = this._url;
        this._content.src = this._url;
        let s = this._url;
        this._loadingImg.onload = () => {
            if (s != this._url)
                return;
            this.sourceWidth = this._loadingImg.width;
            this.sourceHeight = this._loadingImg.height;
            this.updateLayout();
        };
    }
    setErrorState() {
    }
    clearErrorState() {
    }
    updateLayout() {
        if (!this._content2 && !this._content.src && !this._content.frames) {
            if (this._autoSize) {
                this._updatingLayout = true;
                this.setSize(50, 30);
                this._updatingLayout = false;
            }
            return;
        }
        let cw = this.sourceWidth;
        let ch = this.sourceHeight;
        if (this._autoSize) {
            this._updatingLayout = true;
            if (cw == 0)
                cw = 50;
            if (ch == 0)
                ch = 30;
            this.setSize(cw, ch);
            this._updatingLayout = false;
            if (cw == this._width && ch == this._height) {
                if (this._content2) {
                    this._content2.setPosition(0, 0);
                    this._content2.setScale(1, 1);
                }
                else {
                    this._content.setSize(cw, ch);
                    this._content.setPosition(0, 0);
                }
                return;
            }
        }
        var sx = 1, sy = 1;
        if (this._fill != LoaderFillType.None) {
            sx = this.width / this.sourceWidth;
            sy = this.height / this.sourceHeight;
            if (sx != 1 || sy != 1) {
                if (this._fill == LoaderFillType.ScaleMatchHeight)
                    sx = sy;
                else if (this._fill == LoaderFillType.ScaleMatchWidth)
                    sy = sx;
                else if (this._fill == LoaderFillType.Scale) {
                    if (sx > sy)
                        sx = sy;
                    else
                        sy = sx;
                }
                else if (this._fill == LoaderFillType.ScaleNoBorder) {
                    if (sx > sy)
                        sy = sx;
                    else
                        sx = sy;
                }
                if (this._shrinkOnly) {
                    if (sx > 1)
                        sx = 1;
                    if (sy > 1)
                        sy = 1;
                }
                cw = this.sourceWidth * sx;
                ch = this.sourceHeight * sy;
            }
        }
        if (this._content2)
            this._content2.setScale(sx, sy);
        else
            this._content.setSize(cw, ch);
        var nx, ny;
        if (this._align == "center")
            nx = Math.floor((this.width - cw) / 2);
        else if (this._align == "right")
            nx = this.width - cw;
        else
            nx = 0;
        if (this._valign == "middle")
            ny = Math.floor((this.height - ch) / 2);
        else if (this._valign == "bottom")
            ny = this.height - ch;
        else
            ny = 0;
        if (this._content2)
            this._content2.setPosition(nx, ny);
        else
            this._content.setPosition(nx, ny);
    }
    clearContent2() {
        this.clearErrorState();
        if (this._content2) {
            this._content2.dispose();
            this._content2 = null;
        }
    }
    clearContent() {
        this._content.src = null;
        this._content.frames = null;
        this._contentItem = null;
    }
    handleSizeChanged() {
        super.handleSizeChanged();
        if (!this._updatingLayout)
            this.updateLayout();
    }
    getProp(index) {
        switch (index) {
            case ObjectPropID.Color:
                return this.color;
            case ObjectPropID.Playing:
                return this.playing;
            case ObjectPropID.Frame:
                return this.frame;
            case ObjectPropID.TimeScale:
                return this._content.timeScale;
            default:
                return super.getProp(index);
        }
    }
    setProp(index, value) {
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
                this._content.timeScale = value;
                break;
            case ObjectPropID.DeltaTime:
                this._content.advance(value);
                break;
            default:
                super.setProp(index, value);
                break;
        }
    }
    setup_beforeAdd(buffer, beginPos) {
        super.setup_beforeAdd(buffer, beginPos);
        buffer.seek(beginPos, 5);
        var iv;
        this._url = buffer.readS();
        iv = buffer.readByte();
        this._align = iv == 0 ? "left" : (iv == 1 ? "center" : "right");
        iv = buffer.readByte();
        this._valign = iv == 0 ? "top" : (iv == 1 ? "middle" : "bottom");
        this._fill = buffer.readByte();
        this._shrinkOnly = buffer.readBool();
        this._autoSize = buffer.readBool();
        buffer.readBool(); //_showErrorSign
        this._content.playing = buffer.readBool();
        this._content.frame = buffer.readInt();
        if (buffer.readBool())
            this.color = buffer.readColor();
        this._content.fillMethod = buffer.readByte();
        if (this._content.fillMethod != 0) {
            this._content.fillOrigin = buffer.readByte();
            this._content.fillClockwise = buffer.readBool();
            this._content.fillAmount = buffer.readFloat();
        }
        if (this._url)
            this.loadContent();
    }
}

class GLoader3D extends GObject {
}

class GLabel extends GComponent {
    constructor() {
        super();
    }
    get icon() {
        if (this._iconObject)
            return this._iconObject.icon;
        else
            return null;
    }
    set icon(value) {
        if (this._iconObject)
            this._iconObject.icon = value;
        this.updateGear(7);
    }
    get title() {
        if (this._titleObject)
            return this._titleObject.text;
        else
            return null;
    }
    set title(value) {
        if (this._titleObject)
            this._titleObject.text = value;
        this.updateGear(6);
    }
    get text() {
        return this.title;
    }
    set text(value) {
        this.title = value;
    }
    get titleColor() {
        var tf = this.getTextField();
        if (tf)
            return tf.color;
        else
            return 0;
    }
    set titleColor(value) {
        var tf = this.getTextField();
        if (tf)
            tf.color = value;
        this.updateGear(4);
    }
    get titleFontSize() {
        var tf = this.getTextField();
        if (tf)
            return tf.textFormat.size;
        else
            return 0;
    }
    set titleFontSize(value) {
        var tf = this.getTextField();
        if (tf) {
            tf.textFormat.size = value;
            tf.applyFormat();
        }
    }
    get color() {
        return this.titleColor;
    }
    set color(value) {
        this.titleColor = value;
    }
    set editable(val) {
        if (this._titleObject instanceof GTextInput)
            this._titleObject.editable = val;
    }
    get editable() {
        if (this._titleObject instanceof GTextInput)
            return this._titleObject.editable;
        else
            return false;
    }
    getTextField() {
        if ((this._titleObject instanceof GTextField) || (this._titleObject instanceof GTextInput))
            return this._titleObject;
        else if ('getTextField' in this._titleObject)
            return this._titleObject.getTextField();
        else
            return null;
    }
    getProp(index) {
        switch (index) {
            case ObjectPropID.Color:
                return this.titleColor;
            case ObjectPropID.OutlineColor:
                {
                    let tf = this.getTextField();
                    if (tf)
                        return tf.textFormat.outlineColor;
                    else
                        return 0;
                }
            case ObjectPropID.FontSize:
                return this.titleFontSize;
            default:
                return super.getProp(index);
        }
    }
    setProp(index, value) {
        switch (index) {
            case ObjectPropID.Color:
                this.titleColor = value;
                break;
            case ObjectPropID.OutlineColor:
                {
                    let tf = this.getTextField();
                    if (tf) {
                        tf.textFormat.outlineColor = value;
                        tf.applyFormat();
                    }
                }
                break;
            case ObjectPropID.FontSize:
                this.titleFontSize = value;
                break;
            default:
                super.setProp(index, value);
                break;
        }
    }
    constructExtension(buffer) {
        this._titleObject = this.getChild("title");
        this._iconObject = this.getChild("icon");
    }
    setup_afterAdd(buffer, beginPos) {
        super.setup_afterAdd(buffer, beginPos);
        if (!buffer.seek(beginPos, 6))
            return;
        if (buffer.readByte() != this.packageItem.objectType)
            return;
        var str;
        str = buffer.readS();
        if (str != null)
            this.title = str;
        str = buffer.readS();
        if (str != null)
            this.icon = str;
        if (buffer.readBool())
            this.titleColor = buffer.readColor();
        var iv = buffer.readInt();
        if (iv != 0)
            this.titleFontSize = iv;
        if (buffer.readBool()) {
            let input = this.getTextField();
            if (input instanceof GTextInput) {
                str = buffer.readS();
                if (str != null)
                    input.setPromptText(str);
                str = buffer.readS();
                if (str != null)
                    input.setRestrict(str);
                iv = buffer.readInt();
                if (iv != 0)
                    input.setMaxLength(iv);
                iv = buffer.readInt();
                if (iv != 0) {
                    if (iv == 4)
                        input.setKeyboardType('number');
                    else if (iv == 3)
                        input.setKeyboardType('url');
                }
                if (buffer.readBool())
                    input.password = true;
            }
            else
                buffer.skip(13);
        }
    }
}

class GButton extends GComponent {
    constructor() {
        super();
        this._soundVolumeScale = 0;
        this._downEffect = 0;
        this._downEffectValue = 0;
        this._downScaled = false;
        this._mode = ButtonMode.Common;
        this._title = "";
        this._icon = "";
        this._sound = UIConfig.buttonSound;
        this._soundVolumeScale = UIConfig.buttonSoundVolumeScale;
        this._changeStateOnClick = true;
        this._downEffectValue = 0.8;
    }
    get icon() {
        return this._icon;
    }
    set icon(value) {
        this._icon = value;
        value = (this._selected && this._selectedIcon) ? this._selectedIcon : this._icon;
        if (this._iconObject)
            this._iconObject.icon = value;
        this.updateGear(7);
    }
    get selectedIcon() {
        return this._selectedIcon;
    }
    set selectedIcon(value) {
        this._selectedIcon = value;
        value = (this._selected && this._selectedIcon) ? this._selectedIcon : this._icon;
        if (this._iconObject)
            this._iconObject.icon = value;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
        if (this._titleObject)
            this._titleObject.text = (this._selected && this._selectedTitle) ? this._selectedTitle : this._title;
        this.updateGear(6);
    }
    get text() {
        return this.title;
    }
    set text(value) {
        this.title = value;
    }
    get selectedTitle() {
        return this._selectedTitle;
    }
    set selectedTitle(value) {
        this._selectedTitle = value;
        if (this._titleObject)
            this._titleObject.text = (this._selected && this._selectedTitle) ? this._selectedTitle : this._title;
    }
    get titleColor() {
        var tf = this.getTextField();
        if (tf)
            return tf.color;
        else
            return 0;
    }
    set titleColor(value) {
        var tf = this.getTextField();
        if (tf)
            tf.color = value;
        this.updateGear(4);
    }
    get titleFontSize() {
        var tf = this.getTextField();
        if (tf)
            return tf.textFormat.size;
        else
            return 0;
    }
    set titleFontSize(value) {
        var tf = this.getTextField();
        if (tf) {
            tf.textFormat.size = value;
            tf.applyFormat();
        }
    }
    get sound() {
        return this._sound;
    }
    set sound(val) {
        this._sound = val;
    }
    get soundVolumeScale() {
        return this._soundVolumeScale;
    }
    set soundVolumeScale(value) {
        this._soundVolumeScale = value;
    }
    set selected(val) {
        if (this._mode == ButtonMode.Common)
            return;
        if (this._selected != val) {
            this._selected = val;
            this.setCurrentState();
            if (this._selectedTitle && this._titleObject)
                this._titleObject.text = this._selected ? this._selectedTitle : this._title;
            if (this._selectedIcon) {
                var str = this._selected ? this._selectedIcon : this._icon;
                if (this._iconObject)
                    this._iconObject.icon = str;
            }
            if (this._relatedController
                && this._parent
                && !this._parent._buildingDisplayList) {
                if (this._selected) {
                    this._relatedController.selectedPageId = this._relatedPageId;
                    if (this._relatedController.autoRadioGroupDepth)
                        this._parent.adjustRadioGroupDepth(this, this._relatedController);
                }
                else if (this._mode == ButtonMode.Check && this._relatedController.selectedPageId == this._relatedPageId)
                    this._relatedController.oppositePageId = this._relatedPageId;
            }
        }
    }
    get selected() {
        return this._selected;
    }
    get mode() {
        return this._mode;
    }
    set mode(value) {
        if (this._mode != value) {
            if (value == ButtonMode.Common)
                this.selected = false;
            this._mode = value;
        }
    }
    get relatedController() {
        return this._relatedController;
    }
    set relatedController(val) {
        if (val != this._relatedController) {
            this._relatedController = val;
            this._relatedPageId = null;
        }
    }
    get relatedPageId() {
        return this._relatedPageId;
    }
    set relatedPageId(val) {
        this._relatedPageId = val;
    }
    get changeStateOnClick() {
        return this._changeStateOnClick;
    }
    set changeStateOnClick(value) {
        this._changeStateOnClick = value;
    }
    getTextField() {
        if ((this._titleObject instanceof GTextField) || (this._titleObject instanceof GTextInput))
            return this._titleObject;
        else if ('getTextField' in this._titleObject)
            return this._titleObject.getTextField();
        else
            return null;
    }
    fireClick(downEffect, clickCall) {
        downEffect = downEffect || false;
        if (downEffect && this._mode == ButtonMode.Common) {
            this.setState("over");
            Timers.add(100, 1, this.setState, this, "down");
            Timers.add(200, 1, this.setState, this, () => {
                this.setState("up");
                if (clickCall)
                    this.emit("click");
            });
        }
    }
    setState(val) {
        if (this._buttonController)
            this._buttonController.selectedPage = val;
        if (this._downEffect == 1) {
            var cnt = this.numChildren;
            if (val == "down" || val == "selectedOver" || val == "selectedDisabled") {
                var p = this._downEffectValue * 255;
                var r = (p << 16) + (p << 8) + p;
                for (var i = 0; i < cnt; i++) {
                    var obj = this.getChildAt(i);
                    if (!(obj instanceof GTextField))
                        obj.setProp(ObjectPropID.Color, r);
                }
            }
            else {
                for (i = 0; i < cnt; i++) {
                    obj = this.getChildAt(i);
                    if (!(obj instanceof GTextField))
                        obj.setProp(ObjectPropID.Color, 0xFFFFFF);
                }
            }
        }
        else if (this._downEffect == 2) {
            if (val == "down" || val == "selectedOver" || val == "selectedDisabled") {
                if (!this._downScaled) {
                    this.setScale(this.scaleX * this._downEffectValue, this.scaleY * this._downEffectValue);
                    this._downScaled = true;
                }
            }
            else {
                if (this._downScaled) {
                    this.setScale(this.scaleX / this._downEffectValue, this.scaleY / this._downEffectValue);
                    this._downScaled = false;
                }
            }
        }
    }
    setCurrentState() {
        if (this.grayed && this._buttonController && this._buttonController.hasPage("disabled")) {
            if (this._selected)
                this.setState("selectedDisabled");
            else
                this.setState("disabled");
        }
        else {
            if (this._selected)
                this.setState(this._over ? "selectedOver" : "down");
            else
                this.setState(this._over ? "over" : "up");
        }
    }
    handleControllerChanged(c) {
        super.handleControllerChanged(c);
        if (this._relatedController == c)
            this.selected = this._relatedPageId == c.selectedPageId;
    }
    handleGrayedChanged() {
        if (this._buttonController && this._buttonController.hasPage("disabled")) {
            if (this.grayed) {
                if (this._selected && this._buttonController.hasPage("selectedDisabled"))
                    this.setState("selectedDisabled");
                else
                    this.setState("disabled");
            }
            else if (this._selected)
                this.setState("down");
            else
                this.setState("up");
        }
        else
            super.handleGrayedChanged();
    }
    getProp(index) {
        switch (index) {
            case ObjectPropID.Color:
                return this.titleColor;
            case ObjectPropID.OutlineColor:
                {
                    var tf = this.getTextField();
                    if (tf)
                        return tf.textFormat.outlineColor;
                    else
                        return 0;
                }
            case ObjectPropID.FontSize:
                return this.titleFontSize;
            case ObjectPropID.Selected:
                return this.selected;
            default:
                return super.getProp(index);
        }
    }
    setProp(index, value) {
        switch (index) {
            case ObjectPropID.Color:
                this.titleColor = value;
                break;
            case ObjectPropID.OutlineColor:
                {
                    let tf = this.getTextField();
                    if (tf) {
                        tf.textFormat.outlineColor = value;
                        tf.applyFormat();
                    }
                }
                break;
            case ObjectPropID.FontSize:
                this.titleFontSize = value;
                break;
            case ObjectPropID.Selected:
                this.selected = value;
                break;
            default:
                super.setProp(index, value);
                break;
        }
    }
    constructExtension(buffer) {
        buffer.seek(0, 6);
        this._mode = buffer.readByte();
        var str = buffer.readS();
        if (str)
            this._sound = str;
        this._soundVolumeScale = buffer.readFloat();
        this._downEffect = buffer.readByte();
        this._downEffectValue = buffer.readFloat();
        if (this._downEffect == 2)
            this.setPivot(0.5, 0.5, this.pivotAsAnchor);
        this._buttonController = this.getController("button");
        this._titleObject = this.getChild("title");
        this._iconObject = this.getChild("icon");
        if (this._titleObject)
            this._title = this._titleObject.text;
        if (this._iconObject)
            this._icon = this._iconObject.icon;
        if (this._mode == ButtonMode.Common)
            this.setState("up");
        this.on("roll_over", this.__rollover, this);
        this.on("roll_out", this.__rollout, this);
        this.on("pointer_down", this.__btnTouchBegin, this);
        this.on("pointer_up", this.__btnTouchEnd, this);
        this.on("click", this.__click, this);
        this.on("removed_from_stage", this.__removeFromStage, this);
    }
    setup_afterAdd(buffer, beginPos) {
        super.setup_afterAdd(buffer, beginPos);
        if (!buffer.seek(beginPos, 6))
            return;
        if (buffer.readByte() != this.packageItem.objectType)
            return;
        var str;
        var iv;
        str = buffer.readS();
        if (str != null)
            this.title = str;
        str = buffer.readS();
        if (str != null)
            this.selectedTitle = str;
        str = buffer.readS();
        if (str != null)
            this.icon = str;
        str = buffer.readS();
        if (str != null)
            this.selectedIcon = str;
        if (buffer.readBool())
            this.titleColor = buffer.readColor();
        iv = buffer.readInt();
        if (iv != 0)
            this.titleFontSize = iv;
        iv = buffer.readShort();
        if (iv >= 0)
            this._relatedController = this.parent.getControllerAt(iv);
        this._relatedPageId = buffer.readS();
        str = buffer.readS();
        if (str != null)
            this._sound = str;
        if (buffer.readBool())
            this._soundVolumeScale = buffer.readFloat();
        this.selected = buffer.readBool();
    }
    __rollover() {
        if (!this._buttonController || !this._buttonController.hasPage("over"))
            return;
        this._over = true;
        if (this._down)
            return;
        if (this.grayed && this._buttonController.hasPage("disabled"))
            return;
        this.setState(this._selected ? "selectedOver" : "over");
    }
    __rollout() {
        if (!this._buttonController || !this._buttonController.hasPage("over"))
            return;
        this._over = false;
        if (this._down)
            return;
        if (this.grayed && this._buttonController.hasPage("disabled"))
            return;
        this.setState(this._selected ? "down" : "up");
    }
    __btnTouchBegin(evt) {
        if (evt.input.button != 0)
            return;
        this._down = true;
        evt.capturePointer();
        if (this._mode == ButtonMode.Common) {
            if (this.grayed && this._buttonController && this._buttonController.hasPage("disabled"))
                this.setState("selectedDisabled");
            else
                this.setState("down");
        }
    }
    __btnTouchEnd(evt) {
        if (this._down) {
            this._down = false;
            if (this._mode == ButtonMode.Common) {
                if (this.grayed && this._buttonController && this._buttonController.hasPage("disabled"))
                    this.setState("disabled");
                else if (this._over)
                    this.setState("over");
                else
                    this.setState("up");
            }
            else {
                if (!this._over
                    && this._buttonController
                    && (this._buttonController.selectedPage == "over" || this._buttonController.selectedPage == "selectedOver")) {
                    this.setCurrentState();
                }
            }
        }
    }
    __removeFromStage() {
        if (this._over)
            this.__rollout();
    }
    __click(evt) {
        if (this._sound) {
            var pi = UIPackage.getItemByURL(this._sound);
            if (pi)
                GRoot$1.playOneShotSound(pi.file);
            else
                GRoot$1.playOneShotSound(this._sound);
        }
        if (this._mode == ButtonMode.Check) {
            if (this._changeStateOnClick) {
                this.selected = !this._selected;
                this.emit("status_changed");
            }
        }
        else if (this._mode == ButtonMode.Radio) {
            if (this._changeStateOnClick && !this._selected) {
                this.selected = true;
                this.emit("status_changed");
            }
        }
        else {
            if (this._relatedController)
                this._relatedController.selectedPageId = this._relatedPageId;
        }
    }
}

class GComboBox extends GComponent {
    constructor() {
        super();
        this.visibleItemCount = UIConfig.defaultComboBoxVisibleItemCount;
        this.popupDirection = PopupDirection.Auto;
        this._itemsUpdated = true;
        this._selectedIndex = -1;
        this._items = [];
        this._values = [];
    }
    get text() {
        if (this._titleObject)
            return this._titleObject.text;
        else
            return null;
    }
    set text(value) {
        if (this._titleObject)
            this._titleObject.text = value;
        this.updateGear(6);
    }
    get titleColor() {
        var tf = this.getTextField();
        if (tf)
            return tf.color;
        else
            return 0;
    }
    set titleColor(value) {
        var tf = this.getTextField();
        if (tf)
            tf.color = value;
        this.updateGear(4);
    }
    get titleFontSize() {
        var tf = this.getTextField();
        if (tf)
            return tf.textFormat.size;
        else
            return 0;
    }
    set titleFontSize(value) {
        var tf = this.getTextField();
        if (tf) {
            tf.textFormat.size = value;
            tf.applyFormat();
        }
    }
    get icon() {
        if (this._iconObject)
            return this._iconObject.icon;
        else
            return null;
    }
    set icon(value) {
        if (this._iconObject)
            this._iconObject.icon = value;
        this.updateGear(7);
    }
    get items() {
        return this._items;
    }
    set items(value) {
        if (!value)
            this._items.length = 0;
        else
            this._items = value.concat();
        if (this._items.length > 0) {
            if (this._selectedIndex >= this._items.length)
                this._selectedIndex = this._items.length - 1;
            else if (this._selectedIndex == -1)
                this._selectedIndex = 0;
            this.text = this._items[this._selectedIndex];
            if (this._icons && this._selectedIndex < this._icons.length)
                this.icon = this._icons[this._selectedIndex];
        }
        else {
            this.text = "";
            if (this._icons)
                this.icon = null;
            this._selectedIndex = -1;
        }
        this._itemsUpdated = true;
    }
    get icons() {
        return this._icons;
    }
    set icons(value) {
        this._icons = value;
        if (this._icons && this._selectedIndex != -1 && this._selectedIndex < this._icons.length)
            this.icon = this._icons[this._selectedIndex];
    }
    get values() {
        return this._values;
    }
    set values(value) {
        if (!value)
            this._values.length = 0;
        else
            this._values = value.concat();
    }
    get selectedIndex() {
        return this._selectedIndex;
    }
    set selectedIndex(val) {
        if (this._selectedIndex == val)
            return;
        this._selectedIndex = val;
        if (this._selectedIndex >= 0 && this._selectedIndex < this._items.length) {
            this.text = this._items[this._selectedIndex];
            if (this._icons && this._selectedIndex < this._icons.length)
                this.icon = this._icons[this._selectedIndex];
        }
        else {
            this.text = "";
            if (this._icons)
                this.icon = null;
        }
        this.updateSelectionController();
    }
    get value() {
        return this._values[this._selectedIndex];
    }
    set value(val) {
        var index = this._values.indexOf(val);
        if (index == -1 && val == null)
            index = this._values.indexOf("");
        this.selectedIndex = index;
    }
    getTextField() {
        if ((this._titleObject instanceof GTextField) || (this._titleObject instanceof GTextInput))
            return this._titleObject;
        else if ('getTextField' in this._titleObject)
            return this._titleObject.getTextField();
        else
            return null;
    }
    setState(val) {
        if (this._buttonController)
            this._buttonController.selectedPage = val;
    }
    setCurrentState() {
        if (this.grayed && this._buttonController && this._buttonController.hasPage("disabled"))
            this.setState("disabled");
        else if (this.dropdown && this.dropdown.parent)
            this.setState("down");
        else
            this.setState(this._over ? "over" : "up");
    }
    get selectionController() {
        return this._selectionController;
    }
    set selectionController(value) {
        this._selectionController = value;
    }
    handleControllerChanged(c) {
        super.handleControllerChanged(c);
        if (this._selectionController == c)
            this.selectedIndex = c.selectedIndex;
    }
    updateSelectionController() {
        if (this._selectionController && !this._selectionController.changing
            && this._selectedIndex < this._selectionController.pageCount) {
            var c = this._selectionController;
            this._selectionController = null;
            c.selectedIndex = this._selectedIndex;
            this._selectionController = c;
        }
    }
    dispose() {
        if (this.dropdown) {
            this.dropdown.dispose();
            this.dropdown = null;
        }
        this._selectionController = null;
        super.dispose();
    }
    getProp(index) {
        switch (index) {
            case ObjectPropID.Color:
                return this.titleColor;
            case ObjectPropID.OutlineColor:
                {
                    let tf = this.getTextField();
                    if (tf)
                        return tf.textFormat.outlineColor;
                    else
                        return 0;
                }
            case ObjectPropID.FontSize:
                {
                    let tf = this.getTextField();
                    if (tf)
                        return tf.textFormat.size;
                    else
                        return 0;
                }
            default:
                return super.getProp(index);
        }
    }
    setProp(index, value) {
        switch (index) {
            case ObjectPropID.Color:
                this.titleColor = value;
                break;
            case ObjectPropID.OutlineColor:
                {
                    let tf = this.getTextField();
                    if (tf) {
                        tf.textFormat.outlineColor = value;
                        tf.applyFormat();
                    }
                }
                break;
            case ObjectPropID.FontSize:
                {
                    let tf = this.getTextField();
                    if (tf) {
                        tf.textFormat.size = value;
                        tf.applyFormat();
                    }
                }
                break;
            default:
                super.setProp(index, value);
                break;
        }
    }
    constructExtension(buffer) {
        this._buttonController = this.getController("button");
        this._titleObject = this.getChild("title");
        this._iconObject = this.getChild("icon");
        let str = buffer.readS();
        if (str) {
            let obj = UIPackage.createObjectFromURL(str);
            if (!(obj instanceof GComponent)) {
                console.warn(this.resourceURL + " should be a component.");
                return;
            }
            this.dropdown = obj;
            this._list = this.dropdown.getChild("list");
            if (this._list == null) {
                console.warn(this.resourceURL + ": should container a list component named list.");
                return;
            }
            this._list.on("click_item", this.__clickItem, this);
            this._list.addRelation(this.dropdown, RelationType.Width);
            this._list.removeRelation(this.dropdown, RelationType.Height);
            this.dropdown.addRelation(this._list, RelationType.Height);
            this.dropdown.removeRelation(this._list, RelationType.Width);
            this.dropdown.on("removed_from_stage", this.__popupWinClosed, this);
        }
        this.on("roll_over", this.__rollover, this);
        this.on("roll_out", this.__rollout, this);
        this.on("pointer_down", this.__mousedown, this);
        this.on("pointer_up", this.__mouseup, this);
    }
    setup_afterAdd(buffer, beginPos) {
        super.setup_afterAdd(buffer, beginPos);
        if (!buffer.seek(beginPos, 6))
            return;
        if (buffer.readByte() != this.packageItem.objectType)
            return;
        var i;
        var iv;
        var nextPos;
        var str;
        var itemCount = buffer.readShort();
        for (i = 0; i < itemCount; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.pos;
            this._items[i] = buffer.readS();
            this._values[i] = buffer.readS();
            str = buffer.readS();
            if (str != null) {
                if (this._icons == null)
                    this._icons = [];
                this._icons[i] = str;
            }
            buffer.pos = nextPos;
        }
        str = buffer.readS();
        if (str != null) {
            this.text = str;
            this._selectedIndex = this._items.indexOf(str);
        }
        else if (this._items.length > 0) {
            this._selectedIndex = 0;
            this.text = this._items[0];
        }
        else
            this._selectedIndex = -1;
        str = buffer.readS();
        if (str != null)
            this.icon = str;
        if (buffer.readBool())
            this.titleColor = buffer.readColor();
        iv = buffer.readInt();
        if (iv > 0)
            this.visibleItemCount = iv;
        this.popupDirection = buffer.readByte();
        iv = buffer.readShort();
        if (iv >= 0)
            this._selectionController = this.parent.getControllerAt(iv);
    }
    showDropdown() {
        if (this._itemsUpdated) {
            this._itemsUpdated = false;
            this._list.removeChildrenToPool();
            var cnt = this._items.length;
            for (var i = 0; i < cnt; i++) {
                var item = this._list.addItemFromPool();
                item.name = i < this._values.length ? this._values[i] : "";
                item.text = this._items[i];
                item.icon = (this._icons && i < this._icons.length) ? this._icons[i] : null;
            }
            this._list.resizeToFit(this.visibleItemCount);
        }
        this._list.selectedIndex = -1;
        this.dropdown.width = this.width;
        this._list.ensureBoundsCorrect();
        GRoot$1.getInst(this).togglePopup(this.dropdown, this, this.popupDirection);
        if (this.dropdown.parent)
            this.setState("down");
    }
    __popupWinClosed() {
        this.setCurrentState();
    }
    __clickItem(evt) {
        if (this.dropdown.parent instanceof GRoot$1)
            this.dropdown.parent.hidePopup();
        this._selectedIndex = -1;
        this.selectedIndex = this._list.getChildIndex(evt.data);
        this.emit("status_changed");
    }
    __rollover() {
        this._over = true;
        if (this._down || this.dropdown && this.dropdown.parent)
            return;
        this.setCurrentState();
    }
    __rollout() {
        this._over = false;
        if (this._down || this.dropdown && this.dropdown.parent)
            return;
        this.setCurrentState();
    }
    __mousedown(evt) {
        if (evt.initiator.tagName == "INPUT" || evt.initiator.tagName == "TEXTAREA")
            return;
        this._down = true;
        if (this.dropdown)
            this.showDropdown();
        evt.capturePointer();
    }
    __mouseup() {
        if (this._down) {
            this._down = false;
            this.setCurrentState();
        }
    }
}

let s_vec2$3 = new Vec2();
class GSlider extends GComponent {
    constructor() {
        super();
        this.changeOnClick = true;
        this.canDrag = true;
        this._min = 0;
        this._max = 0;
        this._value = 0;
        this._barMaxWidth = 0;
        this._barMaxHeight = 0;
        this._barMaxWidthDelta = 0;
        this._barMaxHeightDelta = 0;
        this._clickPercent = 0;
        this._barStartX = 0;
        this._barStartY = 0;
        this._titleType = ProgressTitleType.Percent;
        this._value = 50;
        this._max = 100;
        this._clickPos = new Vec2();
    }
    get titleType() {
        return this._titleType;
    }
    set titleType(value) {
        this._titleType = value;
    }
    get wholeNumbers() {
        return this._wholeNumbers;
    }
    set wholeNumbers(value) {
        if (this._wholeNumbers != value) {
            this._wholeNumbers = value;
            this.update();
        }
    }
    get min() {
        return this._min;
    }
    set min(value) {
        if (this._min != value) {
            this._min = value;
            this.update();
        }
    }
    get max() {
        return this._max;
    }
    set max(value) {
        if (this._max != value) {
            this._max = value;
            this.update();
        }
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (this._value != value) {
            this._value = value;
            this.update();
        }
    }
    update() {
        this.updateWithPercent((this._value - this._min) / (this._max - this._min), false);
    }
    updateWithPercent(percent, manual) {
        percent = clamp01(percent);
        if (manual) {
            var newValue = clamp(this._min + (this._max - this._min) * percent, this._min, this._max);
            if (this._wholeNumbers) {
                newValue = Math.round(newValue);
                percent = clamp01((newValue - this._min) / (this._max - this._min));
            }
            if (newValue != this._value) {
                this._value = newValue;
                if (this.emit("changed"))
                    return;
            }
        }
        if (this._titleObject) {
            switch (this._titleType) {
                case ProgressTitleType.Percent:
                    this._titleObject.text = Math.floor(percent * 100) + "%";
                    break;
                case ProgressTitleType.ValueAndMax:
                    this._titleObject.text = this._value + "/" + this._max;
                    break;
                case ProgressTitleType.Value:
                    this._titleObject.text = "" + this._value;
                    break;
                case ProgressTitleType.Max:
                    this._titleObject.text = "" + this._max;
                    break;
            }
        }
        var fullWidth = this.width - this._barMaxWidthDelta;
        var fullHeight = this.height - this._barMaxHeightDelta;
        if (!this._reverse) {
            if (this._barObjectH)
                this._barObjectH.width = Math.round(fullWidth * percent);
            if (this._barObjectV)
                this._barObjectV.height = Math.round(fullHeight * percent);
        }
        else {
            if (this._barObjectH) {
                this._barObjectH.width = Math.round(fullWidth * percent);
                this._barObjectH.x = this._barStartX + (fullWidth - this._barObjectH.width);
            }
            if (this._barObjectV) {
                this._barObjectV.height = Math.round(fullHeight * percent);
                this._barObjectV.y = this._barStartY + (fullHeight - this._barObjectV.height);
            }
        }
    }
    constructExtension(buffer) {
        buffer.seek(0, 6);
        this._titleType = buffer.readByte();
        this._reverse = buffer.readBool();
        if (buffer.version >= 2) {
            this._wholeNumbers = buffer.readBool();
            this.changeOnClick = buffer.readBool();
        }
        this._titleObject = this.getChild("title");
        this._barObjectH = this.getChild("bar");
        this._barObjectV = this.getChild("bar_v");
        this._gripObject = this.getChild("grip");
        if (this._barObjectH) {
            this._barMaxWidth = this._barObjectH.width;
            this._barMaxWidthDelta = this.width - this._barMaxWidth;
            this._barStartX = this._barObjectH.x;
        }
        if (this._barObjectV) {
            this._barMaxHeight = this._barObjectV.height;
            this._barMaxHeightDelta = this.height - this._barMaxHeight;
            this._barStartY = this._barObjectV.y;
        }
        if (this._gripObject) {
            this._gripObject.on("pointer_down", this.__gripTouchBegin, this);
            this._gripObject.on("pointer_move", this.__gripTouchMove, this);
        }
        this.on("pointer_down", this.__barTouchBegin, this);
    }
    handleSizeChanged() {
        super.handleSizeChanged();
        if (this._barObjectH)
            this._barMaxWidth = this.width - this._barMaxWidthDelta;
        if (this._barObjectV)
            this._barMaxHeight = this.height - this._barMaxHeightDelta;
        if (!this._underConstruct)
            this.update();
    }
    setup_afterAdd(buffer, beginPos) {
        super.setup_afterAdd(buffer, beginPos);
        if (!buffer.seek(beginPos, 6)) {
            this.update();
            return;
        }
        if (buffer.readByte() != this.packageItem.objectType) {
            this.update();
            return;
        }
        this._value = buffer.readInt();
        this._max = buffer.readInt();
        if (buffer.version >= 2)
            this._min = buffer.readInt();
        this.update();
    }
    __gripTouchBegin(evt) {
        if (evt.input.button != 0)
            return;
        this.canDrag = true;
        evt.stopPropagation();
        evt.capturePointer();
        this.globalToLocal(evt.input.x, evt.input.y, this._clickPos);
        this._clickPercent = clamp01((this._value - this._min) / (this._max - this._min));
    }
    __gripTouchMove(evt) {
        if (!this.canDrag)
            return;
        var pt = this.globalToLocal(evt.input.x, evt.input.y, s_vec2$3);
        var deltaX = pt.x - this._clickPos.x;
        var deltaY = pt.y - this._clickPos.y;
        if (this._reverse) {
            deltaX = -deltaX;
            deltaY = -deltaY;
        }
        var percent;
        if (this._barObjectH)
            percent = this._clickPercent + deltaX / this._barMaxWidth;
        else
            percent = this._clickPercent + deltaY / this._barMaxHeight;
        this.updateWithPercent(percent, true);
    }
    __barTouchBegin(evt) {
        if (!this.changeOnClick)
            return;
        var pt = this._gripObject.globalToLocal(evt.input.x, evt.input.y, s_vec2$3);
        var percent = clamp01((this._value - this._min) / (this._max - this._min));
        var delta = 0;
        if (this._barObjectH)
            delta = (pt.x - this._gripObject.width / 2) / this._barMaxWidth;
        if (this._barObjectV)
            delta = (pt.y - this._gripObject.height / 2) / this._barMaxHeight;
        if (this._reverse)
            percent -= delta;
        else
            percent += delta;
        this.updateWithPercent(percent, true);
    }
}

class GProgressBar extends GComponent {
    constructor() {
        super();
        this._min = 0;
        this._max = 0;
        this._value = 0;
        this._barMaxWidth = 0;
        this._barMaxHeight = 0;
        this._barMaxWidthDelta = 0;
        this._barMaxHeightDelta = 0;
        this._barStartX = 0;
        this._barStartY = 0;
        this._titleType = ProgressTitleType.Percent;
        this._value = 50;
        this._max = 100;
    }
    get titleType() {
        return this._titleType;
    }
    set titleType(value) {
        if (this._titleType != value) {
            this._titleType = value;
            this.update(value);
        }
    }
    get min() {
        return this._min;
    }
    set min(value) {
        if (this._min != value) {
            this._min = value;
            this.update(this._value);
        }
    }
    get max() {
        return this._max;
    }
    set max(value) {
        if (this._max != value) {
            this._max = value;
            this.update(this._value);
        }
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (this._value != value) {
            GTween.kill(this, false, this.update);
            this._value = value;
            this.update(value);
        }
    }
    tweenValue(value, duration) {
        var oldValule;
        var tweener = GTween.getTween(this, this.update);
        if (tweener) {
            oldValule = tweener.value.x;
            tweener.kill();
        }
        else
            oldValule = this._value;
        this._value = value;
        return GTween.to(oldValule, this._value, duration).setTarget(this, this.update).setEase(EaseType.Linear);
    }
    update(newValue) {
        var percent = clamp01((newValue - this._min) / (this._max - this._min));
        if (this._titleObject) {
            switch (this._titleType) {
                case ProgressTitleType.Percent:
                    this._titleObject.text = Math.floor(percent * 100) + "%";
                    break;
                case ProgressTitleType.ValueAndMax:
                    this._titleObject.text = Math.floor(newValue) + "/" + Math.floor(this._max);
                    break;
                case ProgressTitleType.Value:
                    this._titleObject.text = "" + Math.floor(newValue);
                    break;
                case ProgressTitleType.Max:
                    this._titleObject.text = "" + Math.floor(this._max);
                    break;
            }
        }
        var fullWidth = this.width - this._barMaxWidthDelta;
        var fullHeight = this.height - this._barMaxHeightDelta;
        if (!this._reverse) {
            if (this._barObjectH) {
                if (!this.setFillAmount(this._barObjectH, percent))
                    this._barObjectH.width = Math.round(fullWidth * percent);
            }
            if (this._barObjectV) {
                if (!this.setFillAmount(this._barObjectV, percent))
                    this._barObjectV.height = Math.round(fullHeight * percent);
            }
        }
        else {
            if (this._barObjectH) {
                if (!this.setFillAmount(this._barObjectH, 1 - percent)) {
                    this._barObjectH.width = Math.round(fullWidth * percent);
                    this._barObjectH.x = this._barStartX + (fullWidth - this._barObjectH.width);
                }
            }
            if (this._barObjectV) {
                if (!this.setFillAmount(this._barObjectV, 1 - percent)) {
                    this._barObjectV.height = Math.round(fullHeight * percent);
                    this._barObjectV.y = this._barStartY + (fullHeight - this._barObjectV.height);
                }
            }
        }
        if (this._aniObject)
            this._aniObject.setProp(ObjectPropID.Frame, Math.floor(percent * 100));
    }
    setFillAmount(bar, amount) {
        if (((bar instanceof GImage) || (bar instanceof GLoader)) && bar.fillMethod != FillMethod.None) {
            bar.fillAmount = amount;
            return true;
        }
        else
            return false;
    }
    constructExtension(buffer) {
        buffer.seek(0, 6);
        this._titleType = buffer.readByte();
        this._reverse = buffer.readBool();
        this._titleObject = this.getChild("title");
        this._barObjectH = this.getChild("bar");
        this._barObjectV = this.getChild("bar_v");
        this._aniObject = this.getChild("ani");
        if (this._barObjectH) {
            this._barMaxWidth = this._barObjectH.width;
            this._barMaxWidthDelta = this.width - this._barMaxWidth;
            this._barStartX = this._barObjectH.x;
        }
        if (this._barObjectV) {
            this._barMaxHeight = this._barObjectV.height;
            this._barMaxHeightDelta = this.height - this._barMaxHeight;
            this._barStartY = this._barObjectV.y;
        }
    }
    handleSizeChanged() {
        super.handleSizeChanged();
        if (this._barObjectH)
            this._barMaxWidth = this.width - this._barMaxWidthDelta;
        if (this._barObjectV)
            this._barMaxHeight = this.height - this._barMaxHeightDelta;
        if (!this._underConstruct)
            this.update(this._value);
    }
    setup_afterAdd(buffer, beginPos) {
        super.setup_afterAdd(buffer, beginPos);
        if (!buffer.seek(beginPos, 6)) {
            this.update(this._value);
            return;
        }
        if (buffer.readByte() != this.packageItem.objectType) {
            this.update(this._value);
            return;
        }
        this._value = buffer.readInt();
        this._max = buffer.readInt();
        if (buffer.version >= 2)
            this._min = buffer.readInt();
        this.update(this._value);
    }
}

var s_vec2$4 = new Vec2();
class GScrollBar extends GComponent {
    constructor() {
        super();
        this._dragOffset = new Vec2();
        this._scrollPerc = 0;
    }
    setScrollPane(target, vertical) {
        this._target = target;
        this._vertical = vertical;
    }
    setDisplayPerc(value) {
        if (this._vertical) {
            if (!this._fixedGripSize)
                this._grip.height = Math.floor(value * this._bar.height);
            this._grip.y = this._bar.y + (this._bar.height - this._grip.height) * this._scrollPerc;
        }
        else {
            if (!this._fixedGripSize)
                this._grip.width = Math.floor(value * this._bar.width);
            this._grip.x = this._bar.x + (this._bar.width - this._grip.width) * this._scrollPerc;
        }
        this._grip.visible = value != 0 && value != 1;
    }
    setScrollPerc(val) {
        this._scrollPerc = val;
        if (this._vertical)
            this._grip.y = this._bar.y + (this._bar.height - this._grip.height) * this._scrollPerc;
        else
            this._grip.x = this._bar.x + (this._bar.width - this._grip.width) * this._scrollPerc;
    }
    get minSize() {
        if (this._vertical)
            return (this._arrowButton1 ? this._arrowButton1.height : 0) + (this._arrowButton2 ? this._arrowButton2.height : 0);
        else
            return (this._arrowButton1 ? this._arrowButton1.width : 0) + (this._arrowButton2 ? this._arrowButton2.width : 0);
    }
    get gripDragging() {
        return this._gripDragging;
    }
    constructExtension(buffer) {
        buffer.seek(0, 6);
        this._fixedGripSize = buffer.readBool();
        this._grip = this.getChild("grip");
        if (!this._grip) {
            console.warn("需要定义grip");
            return;
        }
        this._bar = this.getChild("bar");
        if (!this._bar) {
            console.warn("需要定义bar");
            return;
        }
        this._arrowButton1 = this.getChild("arrow1");
        this._arrowButton2 = this.getChild("arrow2");
        this._grip.on("pointer_down", this.__gripTouchBegin, this);
        this._grip.on("pointer_move", this.__gripTouchMove, this);
        this._grip.on("pointer_up", this.__gripTouchEnd, this);
        this.on("pointer_down", this.__barTouchBegin, this);
        if (this._arrowButton1)
            this._arrowButton1.on("pointer_down", this.__arrowButton1Click, this);
        if (this._arrowButton2)
            this._arrowButton2.on("pointer_down", this.__arrowButton2Click, this);
    }
    __gripTouchBegin(evt) {
        if (this._bar == null)
            return;
        evt.stopPropagation();
        this._gripDragging = true;
        this._target.updateScrollBarVisible();
        this.globalToLocal(evt.input.x, evt.input.y, this._dragOffset);
        this._dragOffset.x -= this._grip.x;
        this._dragOffset.y -= this._grip.y;
    }
    __gripTouchMove(evt) {
        if (!this.onStage)
            return;
        var pt = this.globalToLocal(evt.input.x, evt.input.y, s_vec2$4);
        if (this._vertical) {
            let curY = pt.y - this._dragOffset.y;
            let diff = this._bar.height - this._grip.height;
            if (diff == 0)
                this._target.percY = 0;
            else
                this._target.percY = (curY - this._bar.y) / diff;
        }
        else {
            let curX = pt.x - this._dragOffset.x;
            let diff = this._bar.width - this._grip.width;
            if (diff == 0)
                this._target.percX = 0;
            else
                this._target.percX = (curX - this._bar.x) / (this._bar.width - this._grip.width);
        }
    }
    __gripTouchEnd(evt) {
        this._gripDragging = false;
        this._target.updateScrollBarVisible();
    }
    __arrowButton1Click(evt) {
        evt.stopPropagation();
        if (this._vertical)
            this._target.scrollUp();
        else
            this._target.scrollLeft();
    }
    __arrowButton2Click(evt) {
        evt.stopPropagation();
        if (this._vertical)
            this._target.scrollDown();
        else
            this._target.scrollRight();
    }
    __barTouchBegin(evt) {
        evt.stopPropagation();
        var pt = this._grip.globalToLocal(evt.input.x, evt.input.y, s_vec2$4);
        if (this._vertical) {
            if (pt.y < 0)
                this._target.scrollUp(4);
            else
                this._target.scrollDown(4);
        }
        else {
            if (pt.x < 0)
                this._target.scrollLeft(4);
            else
                this._target.scrollRight(4);
        }
    }
}

class GObjectPool {
    constructor() {
        this._count = 0;
        this._pool = {};
    }
    clear() {
        for (var i1 in this._pool) {
            var arr = this._pool[i1];
            arr.forEach(obj => obj.dispose());
        }
        this._pool = {};
        this._count = 0;
    }
    get count() {
        return this._count;
    }
    getObject(url) {
        url = UIPackage.normalizeURL(url);
        if (url == null)
            return null;
        var arr = this._pool[url];
        if (arr && arr.length > 0) {
            this._count--;
            return arr.shift();
        }
        return UIPackage.createObjectFromURL(url);
    }
    returnObject(obj) {
        var url = obj.resourceURL;
        if (!url)
            return;
        var arr = this._pool[url];
        if (!arr) {
            arr = [];
            this._pool[url] = arr;
        }
        this._count++;
        arr.push(obj);
    }
}

class GList extends GComponent {
    constructor() {
        super();
        this._lineCount = 0;
        this._columnCount = 0;
        this._lineGap = 0;
        this._columnGap = 0;
        this._lastSelectedIndex = 0;
        this._numItems = 0;
        this._firstIndex = 0; //the top left index
        this._curLineItemCount = 0; //item count in one line
        this._virtualListChanged = 0; //1-content changed, 2-size changed
        this.itemInfoVer = 0; //用来标志item是否在本次处理中已经被重用了
        this._trackBounds = true;
        this._pool = new GObjectPool();
        this._layout = ListLayoutType.SingleColumn;
        this._autoResizeItem = true;
        this._lastSelectedIndex = -1;
        this._selectionMode = ListSelectionMode.Single;
        this.opaque = true;
        this.scrollItemToViewOnClick = true;
        this._align = "left";
        this._valign = "top";
        this._container = createUIElement("fgui-div");
        this._element.addChild(this._container);
    }
    dispose() {
        this._pool.clear();
        super.dispose();
    }
    get layout() {
        return this._layout;
    }
    set layout(value) {
        if (this._layout != value) {
            this._layout = value;
            this.setBoundsChangedFlag();
            if (this._virtual)
                this.setVirtualListChangedFlag(true);
        }
    }
    get lineCount() {
        return this._lineCount;
    }
    set lineCount(value) {
        if (this._lineCount != value) {
            this._lineCount = value;
            if (this._layout == ListLayoutType.FlowVertical || this._layout == ListLayoutType.Pagination) {
                this.setBoundsChangedFlag();
                if (this._virtual)
                    this.setVirtualListChangedFlag(true);
            }
        }
    }
    get columnCount() {
        return this._columnCount;
    }
    set columnCount(value) {
        if (this._columnCount != value) {
            this._columnCount = value;
            if (this._layout == ListLayoutType.FlowHorizontal || this._layout == ListLayoutType.Pagination) {
                this.setBoundsChangedFlag();
                if (this._virtual)
                    this.setVirtualListChangedFlag(true);
            }
        }
    }
    get lineGap() {
        return this._lineGap;
    }
    set lineGap(value) {
        if (this._lineGap != value) {
            this._lineGap = value;
            this.setBoundsChangedFlag();
            if (this._virtual)
                this.setVirtualListChangedFlag(true);
        }
    }
    get columnGap() {
        return this._columnGap;
    }
    set columnGap(value) {
        if (this._columnGap != value) {
            this._columnGap = value;
            this.setBoundsChangedFlag();
            if (this._virtual)
                this.setVirtualListChangedFlag(true);
        }
    }
    get align() {
        return this._align;
    }
    set align(value) {
        if (this._align != value) {
            this._align = value;
            this.setBoundsChangedFlag();
            if (this._virtual)
                this.setVirtualListChangedFlag(true);
        }
    }
    get verticalAlign() {
        return this._valign;
    }
    set verticalAlign(value) {
        if (this._valign != value) {
            this._valign = value;
            this.setBoundsChangedFlag();
            if (this._virtual)
                this.setVirtualListChangedFlag(true);
        }
    }
    get virtualItemSize() {
        return this._itemSize;
    }
    set virtualItemSize(value) {
        if (this._virtual) {
            if (this._itemSize == null)
                this._itemSize = new Vec2();
            this._itemSize.set(value.x, value.y);
            this.setVirtualListChangedFlag(true);
        }
    }
    get defaultItem() {
        return this._defaultItem;
    }
    set defaultItem(val) {
        this._defaultItem = val;
    }
    get autoResizeItem() {
        return this._autoResizeItem;
    }
    set autoResizeItem(value) {
        if (this._autoResizeItem != value) {
            this._autoResizeItem = value;
            this.setBoundsChangedFlag();
            if (this._virtual)
                this.setVirtualListChangedFlag(true);
        }
    }
    get selectionMode() {
        return this._selectionMode;
    }
    set selectionMode(value) {
        this._selectionMode = value;
    }
    get selectionController() {
        return this._selectionController;
    }
    set selectionController(value) {
        this._selectionController = value;
    }
    get itemPool() {
        return this._pool;
    }
    getFromPool(url) {
        if (!url)
            url = this._defaultItem;
        var obj = this._pool.getObject(url);
        if (obj)
            obj.visible = true;
        return obj;
    }
    returnToPool(obj) {
        this._pool.returnObject(obj);
    }
    setDefaultItemSize(sizeX, sizeY) {
        this._itemSize.set(sizeX, sizeY);
        if (this._virtual) {
            if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal)
                this.scrollPane.scrollStep = this._itemSize.y;
            else
                this.scrollPane.scrollStep = this._itemSize.x;
            this.setVirtualListChangedFlag(true);
        }
    }
    addChildAt(child, index) {
        super.addChildAt(child, index);
        if (child instanceof GButton) {
            child.selected = false;
            child.changeStateOnClick = false;
        }
        child.on("click", this.__clickItem, this);
        child.on("right_click", this.__clickItem, this);
        return child;
    }
    addItem(url) {
        if (!url)
            url = this._defaultItem;
        return this.addChild(UIPackage.createObjectFromURL(url));
    }
    addItemFromPool(url) {
        return this.addChild(this.getFromPool(url));
    }
    removeChildAt(index, dispose) {
        var child = super.removeChildAt(index);
        if (dispose)
            child.dispose();
        else
            child.off("click", this.__clickItem, this);
        return child;
    }
    removeChildToPoolAt(index) {
        var child = super.removeChildAt(index);
        this.returnToPool(child);
    }
    removeChildToPool(child) {
        super.removeChild(child);
        this.returnToPool(child);
    }
    removeChildrenToPool(beginIndex, endIndex) {
        beginIndex = beginIndex || 0;
        if (endIndex == null)
            endIndex = -1;
        if (endIndex < 0 || endIndex >= this._children.length)
            endIndex = this._children.length - 1;
        for (var i = beginIndex; i <= endIndex; ++i)
            this.removeChildToPoolAt(beginIndex);
    }
    get selectedIndex() {
        var i;
        if (this._virtual) {
            for (i = 0; i < this._realNumItems; i++) {
                var ii = this._virtualItems[i];
                if ((ii.obj instanceof GButton) && ii.obj.selected || ii.obj == null && ii.selected) {
                    if (this._loop)
                        return i % this._numItems;
                    else
                        return i;
                }
            }
        }
        else {
            var cnt = this._children.length;
            for (i = 0; i < cnt; i++) {
                var obj = this._children[i];
                if ((obj instanceof GButton) && obj.selected)
                    return i;
            }
        }
        return -1;
    }
    set selectedIndex(value) {
        if (value >= 0 && value < this.numItems) {
            if (this._selectionMode != ListSelectionMode.Single)
                this.clearSelection();
            this.addSelection(value);
        }
        else
            this.clearSelection();
    }
    getSelection(result) {
        if (!result)
            result = new Array();
        var i;
        if (this._virtual) {
            for (i = 0; i < this._realNumItems; i++) {
                var ii = this._virtualItems[i];
                if ((ii.obj instanceof GButton) && ii.obj.selected
                    || ii.obj == null && ii.selected) {
                    var j = i;
                    if (this._loop) {
                        j = i % this._numItems;
                        if (result.indexOf(j) != -1)
                            continue;
                    }
                    result.push(j);
                }
            }
        }
        else {
            var cnt = this._children.length;
            for (i = 0; i < cnt; i++) {
                var obj = this._children[i];
                if ((obj instanceof GButton) && obj.selected)
                    result.push(i);
            }
        }
        return result;
    }
    addSelection(index, scrollItToView) {
        if (this._selectionMode == ListSelectionMode.None)
            return;
        this.checkVirtualList();
        if (this._selectionMode == ListSelectionMode.Single)
            this.clearSelection();
        if (scrollItToView)
            this.scrollToView(index);
        this._lastSelectedIndex = index;
        var obj;
        if (this._virtual) {
            var ii = this._virtualItems[index];
            if (ii.obj)
                obj = ii.obj;
            ii.selected = true;
        }
        else
            obj = this.getChildAt(index);
        if ((obj instanceof GButton) && !obj.selected) {
            obj.selected = true;
            this.updateSelectionController(index);
        }
    }
    removeSelection(index) {
        if (this._selectionMode == ListSelectionMode.None)
            return;
        var obj;
        if (this._virtual) {
            var ii = this._virtualItems[index];
            if (ii.obj)
                obj = ii.obj;
            ii.selected = false;
        }
        else
            obj = this.getChildAt(index);
        if (obj instanceof GButton)
            obj.selected = false;
    }
    clearSelection() {
        var i;
        if (this._virtual) {
            for (i = 0; i < this._realNumItems; i++) {
                var ii = this._virtualItems[i];
                if (ii.obj instanceof GButton)
                    ii.obj.selected = false;
                ii.selected = false;
            }
        }
        else {
            var cnt = this._children.length;
            for (i = 0; i < cnt; i++) {
                var obj = this._children[i];
                if (obj instanceof GButton)
                    obj.selected = false;
            }
        }
    }
    clearSelectionExcept(g) {
        var i;
        if (this._virtual) {
            for (i = 0; i < this._realNumItems; i++) {
                var ii = this._virtualItems[i];
                if (ii.obj != g) {
                    if ((ii.obj instanceof GButton))
                        ii.obj.selected = false;
                    ii.selected = false;
                }
            }
        }
        else {
            var cnt = this._children.length;
            for (i = 0; i < cnt; i++) {
                var obj = this._children[i];
                if ((obj instanceof GButton) && obj != g)
                    obj.selected = false;
            }
        }
    }
    selectAll() {
        this.checkVirtualList();
        var last = -1;
        var i;
        if (this._virtual) {
            for (i = 0; i < this._realNumItems; i++) {
                var ii = this._virtualItems[i];
                if ((ii.obj instanceof GButton) && !ii.obj.selected) {
                    ii.obj.selected = true;
                    last = i;
                }
                ii.selected = true;
            }
        }
        else {
            var cnt = this._children.length;
            for (i = 0; i < cnt; i++) {
                var obj = this._children[i];
                if ((obj instanceof GButton) && !obj.selected) {
                    obj.selected = true;
                    last = i;
                }
            }
        }
        if (last != -1)
            this.updateSelectionController(last);
    }
    selectNone() {
        this.clearSelection();
    }
    selectReverse() {
        this.checkVirtualList();
        var last = -1;
        var i;
        if (this._virtual) {
            for (i = 0; i < this._realNumItems; i++) {
                var ii = this._virtualItems[i];
                if (ii.obj instanceof GButton) {
                    ii.obj.selected = !ii.obj.selected;
                    if (ii.obj.selected)
                        last = i;
                }
                ii.selected = !ii.selected;
            }
        }
        else {
            var cnt = this._children.length;
            for (i = 0; i < cnt; i++) {
                var obj = this._children[i];
                if (obj instanceof GButton) {
                    obj.selected = !obj.selected;
                    if (obj.selected)
                        last = i;
                }
            }
        }
        if (last != -1)
            this.updateSelectionController(last);
    }
    enableSelectionFocusEvents(enabled) {
        if (this._triggerFocusEvents == enabled)
            return;
        this._triggerFocusEvents = enabled;
        if (enabled) {
            this.tabStopChildren = true;
            this.on("focus_in", this.notifySelection, this);
            this.on("focus_out", this.notifySelection, this);
        }
        else {
            this.off("focus_in", this.notifySelection, this);
            this.off("focus_out", this.notifySelection, this);
        }
    }
    notifySelection(evt) {
        let eventType = evt.type == "focus_in" ? "list_focus_in" : "list_focus_out";
        let cnt = this._children.length;
        for (let i = 0; i < cnt; i++) {
            let obj = this._children[i];
            if ((obj instanceof GButton) && obj.selected)
                obj.emit(eventType);
        }
    }
    enableArrowKeyNavigation(enabled) {
        if (enabled) {
            this.tabStopChildren = true;
            this.on("key_down", this.__keydown, this);
        }
        else {
            this.tabStopChildren = false;
            this.off("key_down", this.__keydown, this);
        }
    }
    __keydown(evt) {
        let index = -1;
        switch (evt.input.keyCode) {
            case "ArrowLeft":
                index = this.handleArrowKey(7);
                break;
            case "ArrowRight":
                index = this.handleArrowKey(3);
                break;
            case "ArrowUp":
                index = this.handleArrowKey(1);
                break;
            case "ArrowDown":
                index = this.handleArrowKey(5);
                break;
        }
        if (index != -1) {
            index = this.itemIndexToChildIndex(index);
            if (index != -1)
                this.dispatchItemEvent(this.getChildAt(index), evt);
            evt.stopPropagation();
        }
    }
    handleArrowKey(dir) {
        var curIndex = this.selectedIndex;
        if (curIndex == -1)
            return -1;
        let index = curIndex;
        switch (dir) {
            case 1: //up
                if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowVertical) {
                    index--;
                }
                else if (this._layout == ListLayoutType.FlowHorizontal || this._layout == ListLayoutType.Pagination) {
                    if (this._virtual) {
                        index -= this._curLineItemCount;
                    }
                    else {
                        let current = this._children[index];
                        let k = 0;
                        let i;
                        for (i = index - 1; i >= 0; i--) {
                            var obj = this._children[i];
                            if (obj.y != current.y) {
                                current = obj;
                                break;
                            }
                            k++;
                        }
                        for (; i >= 0; i--) {
                            obj = this._children[i];
                            if (obj.y != current.y) {
                                index = i + k + 1;
                                break;
                            }
                        }
                    }
                }
                break;
            case 3: //right
                if (this._layout == ListLayoutType.SingleRow || this._layout == ListLayoutType.FlowHorizontal || this._layout == ListLayoutType.Pagination) {
                    index++;
                }
                else if (this._layout == ListLayoutType.FlowVertical) {
                    if (this._virtual) {
                        index += this._curLineItemCount;
                    }
                    else {
                        let current = this._children[index];
                        let k = 0;
                        let i;
                        var cnt = this._children.length;
                        for (i = index + 1; i < cnt; i++) {
                            obj = this._children[i];
                            if (obj.x != current.x) {
                                current = obj;
                                break;
                            }
                            k++;
                        }
                        for (; i < cnt; i++) {
                            obj = this._children[i];
                            if (obj.x != current.x) {
                                index = i - k - 1;
                                break;
                            }
                        }
                    }
                }
                break;
            case 5: //down
                if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowVertical) {
                    index++;
                }
                else if (this._layout == ListLayoutType.FlowHorizontal || this._layout == ListLayoutType.Pagination) {
                    if (this._virtual) {
                        index += this._curLineItemCount;
                    }
                    else {
                        let current = this._children[index];
                        let k = 0;
                        let i;
                        cnt = this._children.length;
                        for (i = index + 1; i < cnt; i++) {
                            obj = this._children[i];
                            if (obj.y != current.y) {
                                current = obj;
                                break;
                            }
                            k++;
                        }
                        for (; i < cnt; i++) {
                            obj = this._children[i];
                            if (obj.y != current.y) {
                                index = i - k - 1;
                                break;
                            }
                        }
                    }
                }
                break;
            case 7: //left
                if (this._layout == ListLayoutType.SingleRow || this._layout == ListLayoutType.FlowHorizontal || this._layout == ListLayoutType.Pagination) {
                    index--;
                }
                else if (this._layout == ListLayoutType.FlowVertical) {
                    if (this._virtual) {
                        index -= this._curLineItemCount;
                    }
                    else {
                        let current = this._children[index];
                        let k = 0;
                        let i;
                        for (i = index - 1; i >= 0; i--) {
                            obj = this._children[i];
                            if (obj.x != current.x) {
                                current = obj;
                                break;
                            }
                            k++;
                        }
                        for (; i >= 0; i--) {
                            obj = this._children[i];
                            if (obj.x != current.x) {
                                index = i + k + 1;
                                break;
                            }
                        }
                    }
                }
                break;
        }
        if (index != curIndex && index >= 0 && index < this.numItems) {
            this.clearSelection();
            this.addSelection(index, true);
            return index;
        }
        else
            return -1;
    }
    __clickItem(evt) {
        if (this._scrollPane && this._scrollPane.isDragged)
            return;
        var item = evt.sender;
        this.setSelectionOnEvent(item, evt);
        if (this._scrollPane && this.scrollItemToViewOnClick)
            this._scrollPane.scrollToView(item, true);
        this.dispatchItemEvent(item, evt);
    }
    dispatchItemEvent(item, evt) {
        this.emit("click_item", item);
    }
    setSelectionOnEvent(item, evt) {
        if (!(item instanceof GButton) || this._selectionMode == ListSelectionMode.None)
            return;
        var dontChangeLastIndex = false;
        var index = this.childIndexToItemIndex(this.getChildIndex(item));
        if (this._selectionMode == ListSelectionMode.Single) {
            if (!item.selected) {
                this.clearSelectionExcept(item);
                item.selected = true;
            }
        }
        else {
            if (evt.input.shiftKey) {
                if (!item.selected) {
                    if (this._lastSelectedIndex != -1) {
                        var min = Math.min(this._lastSelectedIndex, index);
                        var max = Math.max(this._lastSelectedIndex, index);
                        max = Math.min(max, this.numItems - 1);
                        var i;
                        if (this._virtual) {
                            for (i = min; i <= max; i++) {
                                var ii = this._virtualItems[i];
                                if (ii.obj instanceof GButton)
                                    ii.obj.selected = true;
                                ii.selected = true;
                            }
                        }
                        else {
                            for (i = min; i <= max; i++) {
                                var obj = this.getChildAt(i);
                                if (obj instanceof GButton)
                                    obj.selected = true;
                            }
                        }
                        dontChangeLastIndex = true;
                    }
                    else {
                        item.selected = true;
                    }
                }
            }
            else if ((evt.input.ctrlKey || evt.input.commandKey) || this._selectionMode == ListSelectionMode.Multiple_SingleClick) {
                item.selected = !item.selected;
            }
            else {
                if (!item.selected) {
                    this.clearSelectionExcept(item);
                    item.selected = true;
                }
                else
                    this.clearSelectionExcept(item);
            }
        }
        if (!dontChangeLastIndex)
            this._lastSelectedIndex = index;
        if (item.selected)
            this.updateSelectionController(index);
    }
    resizeToFit(itemCount, minSize) {
        this.ensureBoundsCorrect();
        var curCount = this.numItems;
        if (itemCount == null || itemCount > curCount)
            itemCount = curCount;
        minSize = minSize || 0;
        if (this._virtual) {
            var lineCount = Math.ceil(itemCount / this._curLineItemCount);
            if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal)
                this.viewHeight = lineCount * this._itemSize.y + Math.max(0, lineCount - 1) * this._lineGap;
            else
                this.viewWidth = lineCount * this._itemSize.x + Math.max(0, lineCount - 1) * this._columnGap;
        }
        else if (itemCount == 0) {
            if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal)
                this.viewHeight = minSize;
            else
                this.viewWidth = minSize;
        }
        else {
            var i = itemCount - 1;
            var obj = null;
            while (i >= 0) {
                obj = this.getChildAt(i);
                if (!this.foldInvisibleItems || obj.visible)
                    break;
                i--;
            }
            if (i < 0) {
                if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal)
                    this.viewHeight = minSize;
                else
                    this.viewWidth = minSize;
            }
            else {
                var size = 0;
                if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal) {
                    size = obj.y + obj.height;
                    if (size < minSize)
                        size = minSize;
                    this.viewHeight = size;
                }
                else {
                    size = obj.x + obj.width;
                    if (size < minSize)
                        size = minSize;
                    this.viewWidth = size;
                }
            }
        }
    }
    getMaxItemWidth() {
        var cnt = this._children.length;
        var max = 0;
        for (var i = 0; i < cnt; i++) {
            var child = this.getChildAt(i);
            if (child.width > max)
                max = child.width;
        }
        return max;
    }
    handleSizeChanged() {
        super.handleSizeChanged();
        this.setBoundsChangedFlag();
        if (this._virtual)
            this.setVirtualListChangedFlag(true);
    }
    handleControllerChanged(c) {
        super.handleControllerChanged(c);
        if (this._selectionController == c)
            this.selectedIndex = c.selectedIndex;
    }
    updateSelectionController(index) {
        if (this._selectionController && !this._selectionController.changing
            && index < this._selectionController.pageCount) {
            var c = this._selectionController;
            this._selectionController = null;
            c.selectedIndex = index;
            this._selectionController = c;
        }
    }
    shouldSnapToNext(dir, delta, size) {
        return dir < 0 && delta > UIConfig.defaultScrollSnappingThreshold * size
            || dir > 0 && delta > (1 - UIConfig.defaultScrollSnappingThreshold) * size
            || dir == 0 && delta > size / 2;
    }
    getSnappingPositionWithDir(xValue, yValue, xDir, yDir, resultPoint) {
        if (this._virtual) {
            if (!resultPoint)
                resultPoint = new Vec2();
            var saved;
            var index;
            var size;
            if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal) {
                saved = yValue;
                s_n = yValue;
                index = this.getIndexOnPos1(false);
                yValue = s_n;
                if (index < this._virtualItems.length && index < this._realNumItems) {
                    size = this._virtualItems[index].height;
                    if (this.shouldSnapToNext(yDir, saved - yValue, size))
                        yValue += size + this._lineGap;
                }
            }
            else if (this._layout == ListLayoutType.SingleRow || this._layout == ListLayoutType.FlowVertical) {
                saved = xValue;
                s_n = xValue;
                index = this.getIndexOnPos2(false);
                xValue = s_n;
                if (index < this._virtualItems.length && index < this._realNumItems) {
                    size = this._virtualItems[index].width;
                    if (this.shouldSnapToNext(xDir, saved - xValue, size))
                        xValue += size + this._columnGap;
                }
            }
            else {
                saved = xValue;
                s_n = xValue;
                index = this.getIndexOnPos3(false);
                xValue = s_n;
                if (index < this._virtualItems.length && index < this._realNumItems) {
                    size = this._virtualItems[index].width;
                    if (this.shouldSnapToNext(xDir, saved - xValue, size))
                        xValue += size + this._columnGap;
                }
            }
            resultPoint.x = xValue;
            resultPoint.y = yValue;
            return resultPoint;
        }
        else
            return super.getSnappingPositionWithDir(xValue, yValue, xDir, yDir, resultPoint);
    }
    scrollToView(index, ani, setFirst) {
        if (this._virtual) {
            if (this._numItems == 0)
                return;
            this.checkVirtualList();
            if (index >= this._virtualItems.length)
                throw new Error("Invalid child index: " + index + ">" + this._virtualItems.length);
            if (this._loop)
                index = Math.floor(this._firstIndex / this._numItems) * this._numItems + index;
            var rect;
            var ii = this._virtualItems[index];
            var pos = 0;
            var i;
            if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal) {
                for (i = this._curLineItemCount - 1; i < index; i += this._curLineItemCount)
                    pos += this._virtualItems[i].height + this._lineGap;
                rect = new Rect(0, pos, this._itemSize.x, ii.height);
            }
            else if (this._layout == ListLayoutType.SingleRow || this._layout == ListLayoutType.FlowVertical) {
                for (i = this._curLineItemCount - 1; i < index; i += this._curLineItemCount)
                    pos += this._virtualItems[i].width + this._columnGap;
                rect = new Rect(pos, 0, ii.width, this._itemSize.y);
            }
            else {
                var page = index / (this._curLineItemCount * this._curLineItemCount2);
                rect = new Rect(page * this.viewWidth + (index % this._curLineItemCount) * (ii.width + this._columnGap), (index / this._curLineItemCount) % this._curLineItemCount2 * (ii.height + this._lineGap), ii.width, ii.height);
            }
            if (this._scrollPane)
                this._scrollPane.scrollToView(rect, ani, setFirst);
        }
        else {
            var obj = this.getChildAt(index);
            if (this._scrollPane)
                this._scrollPane.scrollToView(obj, ani, setFirst);
            else if (this._parent && this._parent.scrollPane)
                this._parent.scrollPane.scrollToView(obj, ani, setFirst);
        }
    }
    get touchItem() {
        //find out which item is under finger
        //逐层往上知道查到点击了那个item
        let obj = GRoot$1.getInst(this).touchTarget;
        if (!obj)
            return null;
        let p = obj.parent;
        while (p != null) {
            if (p == this)
                return obj;
            obj = p;
            p = p.parent;
        }
        return null;
    }
    getFirstChildInView() {
        return this.childIndexToItemIndex(super.getFirstChildInView());
    }
    childIndexToItemIndex(index) {
        if (!this._virtual)
            return index;
        if (this._layout == ListLayoutType.Pagination) {
            for (var i = this._firstIndex; i < this._realNumItems; i++) {
                if (this._virtualItems[i].obj) {
                    index--;
                    if (index < 0)
                        return i;
                }
            }
            return index;
        }
        else {
            index += this._firstIndex;
            if (this._loop && this._numItems > 0)
                index = index % this._numItems;
            return index;
        }
    }
    itemIndexToChildIndex(index) {
        if (!this._virtual)
            return index;
        if (this._layout == ListLayoutType.Pagination) {
            return this.getChildIndex(this._virtualItems[index].obj);
        }
        else {
            if (this._loop && this._numItems > 0) {
                var j = this._firstIndex % this._numItems;
                if (index >= j)
                    index = index - j;
                else
                    index = this._numItems - j + index;
            }
            else
                index -= this._firstIndex;
            return index;
        }
    }
    setVirtual() {
        this._setVirtual(false);
    }
    /**
     * Set the list to be virtual list, and has loop behavior.
     */
    setVirtualAndLoop() {
        this._setVirtual(true);
    }
    _setVirtual(loop) {
        if (!this._virtual) {
            if (this._scrollPane == null)
                throw new Error("Virtual list must be scrollable!");
            if (loop) {
                if (this._layout == ListLayoutType.FlowHorizontal || this._layout == ListLayoutType.FlowVertical)
                    throw new Error("Loop list instanceof not supported for FlowHorizontal or FlowVertical this.layout!");
                this._scrollPane.bouncebackEffect = false;
            }
            this._virtual = true;
            this._loop = loop;
            this._virtualItems = new Array();
            this.removeChildrenToPool();
            if (this._itemSize == null) {
                this._itemSize = new Vec2();
                var obj = this.getFromPool(null);
                if (obj == null) {
                    throw new Error("Virtual List must have a default list item resource.");
                }
                else {
                    this._itemSize.x = obj.width;
                    this._itemSize.y = obj.height;
                }
                this.returnToPool(obj);
            }
            if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal) {
                this._scrollPane.scrollStep = this._itemSize.y;
                if (this._loop)
                    this._scrollPane._loop = 2;
            }
            else {
                this._scrollPane.scrollStep = this._itemSize.x;
                if (this._loop)
                    this._scrollPane._loop = 1;
            }
            this.on("scroll", this.__scrolled, this);
            this.setVirtualListChangedFlag(true);
        }
    }
    get numItems() {
        if (this._virtual)
            return this._numItems;
        else
            return this._children.length;
    }
    set numItems(value) {
        var i;
        if (this._virtual) {
            if (this.itemRenderer == null)
                throw new Error("set itemRenderer first!");
            this._numItems = value;
            if (this._loop)
                this._realNumItems = this._numItems * 6; //设置6倍数量，用于循环滚动
            else
                this._realNumItems = this._numItems;
            //_virtualItems的设计是只增不减的
            var oldCount = this._virtualItems.length;
            if (this._realNumItems > oldCount) {
                for (i = oldCount; i < this._realNumItems; i++) {
                    var ii = { width: 0, height: 0, flag: 0 };
                    ii.width = this._itemSize.x;
                    ii.height = this._itemSize.y;
                    this._virtualItems.push(ii);
                }
            }
            else {
                for (i = this._realNumItems; i < oldCount; i++)
                    this._virtualItems[i].selected = false;
            }
            if (this._virtualListChanged != 0)
                Timers.remove(this._refreshVirtualList, this);
            //立即刷新
            this._refreshVirtualList();
        }
        else {
            var cnt = this._children.length;
            if (value > cnt) {
                for (i = cnt; i < value; i++) {
                    if (this.itemProvider == null)
                        this.addItemFromPool();
                    else
                        this.addItemFromPool(this.itemProvider(i));
                }
            }
            else {
                this.removeChildrenToPool(value, cnt);
            }
            if (this.itemRenderer) {
                for (i = 0; i < value; i++)
                    this.itemRenderer(i, this.getChildAt(i));
            }
        }
    }
    refreshVirtualList() {
        this.setVirtualListChangedFlag(false);
    }
    checkVirtualList() {
        if (this._virtualListChanged != 0) {
            this._refreshVirtualList();
            Timers.remove(this._refreshVirtualList, this);
        }
    }
    setVirtualListChangedFlag(layoutChanged) {
        if (layoutChanged)
            this._virtualListChanged = 2;
        else if (this._virtualListChanged == 0)
            this._virtualListChanged = 1;
        Timers.callLater(this._refreshVirtualList, this);
    }
    _refreshVirtualList() {
        if (!this._element)
            return;
        var layoutChanged = this._virtualListChanged == 2;
        this._virtualListChanged = 0;
        this._eventLocked = true;
        if (layoutChanged) {
            if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.SingleRow)
                this._curLineItemCount = 1;
            else if (this._layout == ListLayoutType.FlowHorizontal) {
                if (this._columnCount > 0)
                    this._curLineItemCount = this._columnCount;
                else {
                    this._curLineItemCount = Math.floor((this._scrollPane.viewWidth + this._columnGap) / (this._itemSize.x + this._columnGap));
                    if (this._curLineItemCount <= 0)
                        this._curLineItemCount = 1;
                }
            }
            else if (this._layout == ListLayoutType.FlowVertical) {
                if (this._lineCount > 0)
                    this._curLineItemCount = this._lineCount;
                else {
                    this._curLineItemCount = Math.floor((this._scrollPane.viewHeight + this._lineGap) / (this._itemSize.y + this._lineGap));
                    if (this._curLineItemCount <= 0)
                        this._curLineItemCount = 1;
                }
            }
            else //pagination
             {
                if (this._columnCount > 0)
                    this._curLineItemCount = this._columnCount;
                else {
                    this._curLineItemCount = Math.floor((this._scrollPane.viewWidth + this._columnGap) / (this._itemSize.x + this._columnGap));
                    if (this._curLineItemCount <= 0)
                        this._curLineItemCount = 1;
                }
                if (this._lineCount > 0)
                    this._curLineItemCount2 = this._lineCount;
                else {
                    this._curLineItemCount2 = Math.floor((this._scrollPane.viewHeight + this._lineGap) / (this._itemSize.y + this._lineGap));
                    if (this._curLineItemCount2 <= 0)
                        this._curLineItemCount2 = 1;
                }
            }
        }
        var ch = 0, cw = 0;
        if (this._realNumItems > 0) {
            var i;
            var len = Math.ceil(this._realNumItems / this._curLineItemCount) * this._curLineItemCount;
            var len2 = Math.min(this._curLineItemCount, this._realNumItems);
            if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal) {
                for (i = 0; i < len; i += this._curLineItemCount)
                    ch += this._virtualItems[i].height + this._lineGap;
                if (ch > 0)
                    ch -= this._lineGap;
                if (this._autoResizeItem)
                    cw = this._scrollPane.viewWidth;
                else {
                    for (i = 0; i < len2; i++)
                        cw += this._virtualItems[i].width + this._columnGap;
                    if (cw > 0)
                        cw -= this._columnGap;
                }
            }
            else if (this._layout == ListLayoutType.SingleRow || this._layout == ListLayoutType.FlowVertical) {
                for (i = 0; i < len; i += this._curLineItemCount)
                    cw += this._virtualItems[i].width + this._columnGap;
                if (cw > 0)
                    cw -= this._columnGap;
                if (this._autoResizeItem)
                    ch = this._scrollPane.viewHeight;
                else {
                    for (i = 0; i < len2; i++)
                        ch += this._virtualItems[i].height + this._lineGap;
                    if (ch > 0)
                        ch -= this._lineGap;
                }
            }
            else {
                var pageCount = Math.ceil(len / (this._curLineItemCount * this._curLineItemCount2));
                cw = pageCount * this.viewWidth;
                ch = this.viewHeight;
            }
        }
        this.handleAlign(cw, ch);
        this._scrollPane.setContentSize(cw, ch);
        this._eventLocked = false;
        this.handleScroll(true);
    }
    __scrolled() {
        this.handleScroll(false);
    }
    getIndexOnPos1(forceUpdate) {
        if (this._realNumItems < this._curLineItemCount) {
            s_n = 0;
            return 0;
        }
        var i;
        var pos2;
        var pos3;
        if (this.numChildren > 0 && !forceUpdate) {
            pos2 = this.getChildAt(0).y;
            if (pos2 > s_n) {
                for (i = this._firstIndex - this._curLineItemCount; i >= 0; i -= this._curLineItemCount) {
                    pos2 -= (this._virtualItems[i].height + this._lineGap);
                    if (pos2 <= s_n) {
                        s_n = pos2;
                        return i;
                    }
                }
                s_n = 0;
                return 0;
            }
            else {
                for (i = this._firstIndex; i < this._realNumItems; i += this._curLineItemCount) {
                    pos3 = pos2 + this._virtualItems[i].height + this._lineGap;
                    if (pos3 > s_n) {
                        s_n = pos2;
                        return i;
                    }
                    pos2 = pos3;
                }
                s_n = pos2;
                return this._realNumItems - this._curLineItemCount;
            }
        }
        else {
            pos2 = 0;
            for (i = 0; i < this._realNumItems; i += this._curLineItemCount) {
                pos3 = pos2 + this._virtualItems[i].height + this._lineGap;
                if (pos3 > s_n) {
                    s_n = pos2;
                    return i;
                }
                pos2 = pos3;
            }
            s_n = pos2;
            return this._realNumItems - this._curLineItemCount;
        }
    }
    getIndexOnPos2(forceUpdate) {
        if (this._realNumItems < this._curLineItemCount) {
            s_n = 0;
            return 0;
        }
        var i;
        var pos2;
        var pos3;
        if (this.numChildren > 0 && !forceUpdate) {
            pos2 = this.getChildAt(0).x;
            if (pos2 > s_n) {
                for (i = this._firstIndex - this._curLineItemCount; i >= 0; i -= this._curLineItemCount) {
                    pos2 -= (this._virtualItems[i].width + this._columnGap);
                    if (pos2 <= s_n) {
                        s_n = pos2;
                        return i;
                    }
                }
                s_n = 0;
                return 0;
            }
            else {
                for (i = this._firstIndex; i < this._realNumItems; i += this._curLineItemCount) {
                    pos3 = pos2 + this._virtualItems[i].width + this._columnGap;
                    if (pos3 > s_n) {
                        s_n = pos2;
                        return i;
                    }
                    pos2 = pos3;
                }
                s_n = pos2;
                return this._realNumItems - this._curLineItemCount;
            }
        }
        else {
            pos2 = 0;
            for (i = 0; i < this._realNumItems; i += this._curLineItemCount) {
                pos3 = pos2 + this._virtualItems[i].width + this._columnGap;
                if (pos3 > s_n) {
                    s_n = pos2;
                    return i;
                }
                pos2 = pos3;
            }
            s_n = pos2;
            return this._realNumItems - this._curLineItemCount;
        }
    }
    getIndexOnPos3(forceUpdate) {
        if (this._realNumItems < this._curLineItemCount) {
            s_n = 0;
            return 0;
        }
        var viewWidth = this.viewWidth;
        var page = Math.floor(s_n / viewWidth);
        var startIndex = page * (this._curLineItemCount * this._curLineItemCount2);
        var pos2 = page * viewWidth;
        var i;
        var pos3;
        for (i = 0; i < this._curLineItemCount; i++) {
            pos3 = pos2 + this._virtualItems[startIndex + i].width + this._columnGap;
            if (pos3 > s_n) {
                s_n = pos2;
                return startIndex + i;
            }
            pos2 = pos3;
        }
        s_n = pos2;
        return startIndex + this._curLineItemCount - 1;
    }
    handleScroll(forceUpdate) {
        if (this._eventLocked)
            return;
        if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal) {
            var enterCounter = 0;
            while (this.handleScroll1(forceUpdate)) {
                enterCounter++;
                forceUpdate = false;
                if (enterCounter > 20) {
                    console.log("list will never be <the> filled item renderer function always returns a different size.");
                    break;
                }
            }
            this.handleArchOrder1();
        }
        else if (this._layout == ListLayoutType.SingleRow || this._layout == ListLayoutType.FlowVertical) {
            enterCounter = 0;
            while (this.handleScroll2(forceUpdate)) {
                enterCounter++;
                forceUpdate = false;
                if (enterCounter > 20) {
                    console.log("list will never be <the> filled item renderer function always returns a different size.");
                    break;
                }
            }
            this.handleArchOrder2();
        }
        else {
            this.handleScroll3(forceUpdate);
        }
        this._boundsChanged = false;
    }
    handleScroll1(forceUpdate) {
        var pos = this._scrollPane.scrollingPosY;
        var max = pos + this._scrollPane.viewHeight;
        var end = max == this._scrollPane.contentHeight; //这个标志表示当前需要滚动到最末，无论内容变化大小
        //寻找当前位置的第一条项目
        s_n = pos;
        var newFirstIndex = this.getIndexOnPos1(forceUpdate);
        pos = s_n;
        if (newFirstIndex == this._firstIndex && !forceUpdate)
            return false;
        var oldFirstIndex = this._firstIndex;
        this._firstIndex = newFirstIndex;
        var curIndex = newFirstIndex;
        var forward = oldFirstIndex > newFirstIndex;
        var childCount = this.numChildren;
        var lastIndex = oldFirstIndex + childCount - 1;
        var reuseIndex = forward ? lastIndex : oldFirstIndex;
        var curX = 0, curY = pos;
        var needRender;
        var deltaSize = 0;
        var firstItemDeltaSize = 0;
        var url = this.defaultItem;
        var ii, ii2;
        var i, j;
        var partSize = (this._scrollPane.viewWidth - this._columnGap * (this._curLineItemCount - 1)) / this._curLineItemCount;
        this.itemInfoVer++;
        while (curIndex < this._realNumItems && (end || curY < max)) {
            ii = this._virtualItems[curIndex];
            if (ii.obj == null || forceUpdate) {
                if (this.itemProvider) {
                    url = this.itemProvider(curIndex % this._numItems);
                    if (url == null)
                        url = this._defaultItem;
                }
                url = UIPackage.normalizeURL(url);
                if (ii.obj && ii.obj.resourceURL != url) {
                    if (ii.obj instanceof GButton)
                        ii.selected = ii.obj.selected;
                    this.removeChildToPool(ii.obj);
                    ii.obj = null;
                }
            }
            if (ii.obj == null) {
                //搜索最适合的重用item，保证每次刷新需要新建或者重新render的item最少
                if (forward) {
                    for (j = reuseIndex; j >= oldFirstIndex; j--) {
                        ii2 = this._virtualItems[j];
                        if (ii2.obj && ii2.flag != this.itemInfoVer && ii2.obj.resourceURL == url) {
                            if (ii2.obj instanceof GButton)
                                ii2.selected = ii2.obj.selected;
                            ii.obj = ii2.obj;
                            ii2.obj = null;
                            if (j == reuseIndex)
                                reuseIndex--;
                            break;
                        }
                    }
                }
                else {
                    for (j = reuseIndex; j <= lastIndex; j++) {
                        ii2 = this._virtualItems[j];
                        if (ii2.obj && ii2.flag != this.itemInfoVer && ii2.obj.resourceURL == url) {
                            if (ii2.obj instanceof GButton)
                                ii2.selected = ii2.obj.selected;
                            ii.obj = ii2.obj;
                            ii2.obj = null;
                            if (j == reuseIndex)
                                reuseIndex++;
                            break;
                        }
                    }
                }
                if (ii.obj) {
                    this.setChildIndex(ii.obj, forward ? curIndex - newFirstIndex : this.numChildren);
                }
                else {
                    ii.obj = this._pool.getObject(url);
                    if (forward)
                        this.addChildAt(ii.obj, curIndex - newFirstIndex);
                    else
                        this.addChild(ii.obj);
                }
                if (ii.obj instanceof GButton)
                    ii.obj.selected = ii.selected;
                needRender = true;
            }
            else
                needRender = forceUpdate;
            if (needRender) {
                if (this._autoResizeItem && (this._layout == ListLayoutType.SingleColumn || this._columnCount > 0))
                    ii.obj.setSize(partSize, ii.obj.height, true);
                this.itemRenderer(curIndex % this._numItems, ii.obj);
                if (curIndex % this._curLineItemCount == 0) {
                    deltaSize += Math.ceil(ii.obj.height) - ii.height;
                    if (curIndex == newFirstIndex && oldFirstIndex > newFirstIndex) {
                        //当内容向下滚动时，如果新出现的项目大小发生变化，需要做一个位置补偿，才不会导致滚动跳动
                        firstItemDeltaSize = Math.ceil(ii.obj.height) - ii.height;
                    }
                }
                ii.width = Math.ceil(ii.obj.width);
                ii.height = Math.ceil(ii.obj.height);
            }
            ii.flag = this.itemInfoVer;
            ii.obj.setPosition(curX, curY);
            if (curIndex == newFirstIndex) //要显示多一条才不会穿帮
                max += ii.height;
            curX += ii.width + this._columnGap;
            if (curIndex % this._curLineItemCount == this._curLineItemCount - 1) {
                curX = 0;
                curY += ii.height + this._lineGap;
            }
            curIndex++;
        }
        for (i = 0; i < childCount; i++) {
            ii = this._virtualItems[oldFirstIndex + i];
            if (ii.flag != this.itemInfoVer && ii.obj) {
                if (ii.obj instanceof GButton)
                    ii.selected = ii.obj.selected;
                this.removeChildToPool(ii.obj);
                ii.obj = null;
            }
        }
        childCount = this._children.length;
        for (i = 0; i < childCount; i++) {
            var obj = this._virtualItems[newFirstIndex + i].obj;
            if (this._children[i] != obj)
                this.setChildIndex(obj, i);
        }
        if (deltaSize != 0 || firstItemDeltaSize != 0)
            this._scrollPane.changeContentSizeOnScrolling(0, deltaSize, 0, firstItemDeltaSize);
        if (curIndex > 0 && this.numChildren > 0 && this._container.y <= 0 && this.getChildAt(0).y > -this._container.y) //最后一页没填满！
            return true;
        else
            return false;
    }
    handleScroll2(forceUpdate) {
        var pos = this._scrollPane.scrollingPosX;
        var max = pos + this._scrollPane.viewWidth;
        var end = pos == this._scrollPane.contentWidth; //这个标志表示当前需要滚动到最末，无论内容变化大小
        //寻找当前位置的第一条项目
        s_n = pos;
        var newFirstIndex = this.getIndexOnPos2(forceUpdate);
        pos = s_n;
        if (newFirstIndex == this._firstIndex && !forceUpdate)
            return false;
        var oldFirstIndex = this._firstIndex;
        this._firstIndex = newFirstIndex;
        var curIndex = newFirstIndex;
        var forward = oldFirstIndex > newFirstIndex;
        var childCount = this.numChildren;
        var lastIndex = oldFirstIndex + childCount - 1;
        var reuseIndex = forward ? lastIndex : oldFirstIndex;
        var curX = pos, curY = 0;
        var needRender;
        var deltaSize = 0;
        var firstItemDeltaSize = 0;
        var url = this.defaultItem;
        var ii, ii2;
        var i, j;
        var partSize = (this._scrollPane.viewHeight - this._lineGap * (this._curLineItemCount - 1)) / this._curLineItemCount;
        this.itemInfoVer++;
        while (curIndex < this._realNumItems && (end || curX < max)) {
            ii = this._virtualItems[curIndex];
            if (ii.obj == null || forceUpdate) {
                if (this.itemProvider) {
                    url = this.itemProvider(curIndex % this._numItems);
                    if (url == null)
                        url = this._defaultItem;
                }
                url = UIPackage.normalizeURL(url);
                if (ii.obj && ii.obj.resourceURL != url) {
                    if (ii.obj instanceof GButton)
                        ii.selected = ii.obj.selected;
                    this.removeChildToPool(ii.obj);
                    ii.obj = null;
                }
            }
            if (ii.obj == null) {
                if (forward) {
                    for (j = reuseIndex; j >= oldFirstIndex; j--) {
                        ii2 = this._virtualItems[j];
                        if (ii2.obj && ii2.flag != this.itemInfoVer && ii2.obj.resourceURL == url) {
                            if (ii2.obj instanceof GButton)
                                ii2.selected = ii2.obj.selected;
                            ii.obj = ii2.obj;
                            ii2.obj = null;
                            if (j == reuseIndex)
                                reuseIndex--;
                            break;
                        }
                    }
                }
                else {
                    for (j = reuseIndex; j <= lastIndex; j++) {
                        ii2 = this._virtualItems[j];
                        if (ii2.obj && ii2.flag != this.itemInfoVer && ii2.obj.resourceURL == url) {
                            if (ii2.obj instanceof GButton)
                                ii2.selected = ii2.obj.selected;
                            ii.obj = ii2.obj;
                            ii2.obj = null;
                            if (j == reuseIndex)
                                reuseIndex++;
                            break;
                        }
                    }
                }
                if (ii.obj) {
                    this.setChildIndex(ii.obj, forward ? curIndex - newFirstIndex : this.numChildren);
                }
                else {
                    ii.obj = this._pool.getObject(url);
                    if (forward)
                        this.addChildAt(ii.obj, curIndex - newFirstIndex);
                    else
                        this.addChild(ii.obj);
                }
                if (ii.obj instanceof GButton)
                    ii.obj.selected = ii.selected;
                needRender = true;
            }
            else
                needRender = forceUpdate;
            if (needRender) {
                if (this._autoResizeItem && (this._layout == ListLayoutType.SingleRow || this._lineCount > 0))
                    ii.obj.setSize(ii.obj.width, partSize, true);
                this.itemRenderer(curIndex % this._numItems, ii.obj);
                if (curIndex % this._curLineItemCount == 0) {
                    deltaSize += Math.ceil(ii.obj.width) - ii.width;
                    if (curIndex == newFirstIndex && oldFirstIndex > newFirstIndex) {
                        //当内容向下滚动时，如果新出现的一个项目大小发生变化，需要做一个位置补偿，才不会导致滚动跳动
                        firstItemDeltaSize = Math.ceil(ii.obj.width) - ii.width;
                    }
                }
                ii.width = Math.ceil(ii.obj.width);
                ii.height = Math.ceil(ii.obj.height);
            }
            ii.flag = this.itemInfoVer;
            ii.obj.setPosition(curX, curY);
            if (curIndex == newFirstIndex) //要显示多一条才不会穿帮
                max += ii.width;
            curY += ii.height + this._lineGap;
            if (curIndex % this._curLineItemCount == this._curLineItemCount - 1) {
                curY = 0;
                curX += ii.width + this._columnGap;
            }
            curIndex++;
        }
        for (i = 0; i < childCount; i++) {
            ii = this._virtualItems[oldFirstIndex + i];
            if (ii.flag != this.itemInfoVer && ii.obj) {
                if (ii.obj instanceof GButton)
                    ii.selected = ii.obj.selected;
                this.removeChildToPool(ii.obj);
                ii.obj = null;
            }
        }
        childCount = this._children.length;
        for (i = 0; i < childCount; i++) {
            var obj = this._virtualItems[newFirstIndex + i].obj;
            if (this._children[i] != obj)
                this.setChildIndex(obj, i);
        }
        if (deltaSize != 0 || firstItemDeltaSize != 0)
            this._scrollPane.changeContentSizeOnScrolling(deltaSize, 0, firstItemDeltaSize, 0);
        if (curIndex > 0 && this.numChildren > 0 && this._container.x <= 0 && this.getChildAt(0).x > -this._container.x) //最后一页没填满！
            return true;
        else
            return false;
    }
    handleScroll3(forceUpdate) {
        var pos = this._scrollPane.scrollingPosX;
        //寻找当前位置的第一条项目
        s_n = pos;
        var newFirstIndex = this.getIndexOnPos3(forceUpdate);
        pos = s_n;
        if (newFirstIndex == this._firstIndex && !forceUpdate)
            return;
        var oldFirstIndex = this._firstIndex;
        this._firstIndex = newFirstIndex;
        //分页模式不支持不等高，所以渲染满一页就好了
        var reuseIndex = oldFirstIndex;
        var virtualItemCount = this._virtualItems.length;
        var pageSize = this._curLineItemCount * this._curLineItemCount2;
        var startCol = newFirstIndex % this._curLineItemCount;
        var viewWidth = this.viewWidth;
        var page = Math.floor(newFirstIndex / pageSize);
        var startIndex = page * pageSize;
        var lastIndex = startIndex + pageSize * 2; //测试两页
        var needRender;
        var i;
        var ii, ii2;
        var col;
        var url = this._defaultItem;
        var partWidth = (this._scrollPane.viewWidth - this._columnGap * (this._curLineItemCount - 1)) / this._curLineItemCount;
        var partHeight = (this._scrollPane.viewHeight - this._lineGap * (this._curLineItemCount2 - 1)) / this._curLineItemCount2;
        this.itemInfoVer++;
        //先标记这次要用到的项目
        for (i = startIndex; i < lastIndex; i++) {
            if (i >= this._realNumItems)
                continue;
            col = i % this._curLineItemCount;
            if (i - startIndex < pageSize) {
                if (col < startCol)
                    continue;
            }
            else {
                if (col > startCol)
                    continue;
            }
            ii = this._virtualItems[i];
            ii.flag = this.itemInfoVer;
        }
        var lastObj = null;
        var insertIndex = 0;
        for (i = startIndex; i < lastIndex; i++) {
            if (i >= this._realNumItems)
                continue;
            ii = this._virtualItems[i];
            if (ii.flag != this.itemInfoVer)
                continue;
            if (ii.obj == null) {
                //寻找看有没有可重用的
                while (reuseIndex < virtualItemCount) {
                    ii2 = this._virtualItems[reuseIndex];
                    if (ii2.obj && ii2.flag != this.itemInfoVer) {
                        if (ii2.obj instanceof GButton)
                            ii2.selected = ii2.obj.selected;
                        ii.obj = ii2.obj;
                        ii2.obj = null;
                        break;
                    }
                    reuseIndex++;
                }
                if (insertIndex == -1)
                    insertIndex = this.getChildIndex(lastObj) + 1;
                if (ii.obj == null) {
                    if (this.itemProvider) {
                        url = this.itemProvider(i % this._numItems);
                        if (url == null)
                            url = this._defaultItem;
                    }
                    ii.obj = this._pool.getObject(url);
                    this.addChildAt(ii.obj, insertIndex);
                }
                else {
                    insertIndex = this.setChildIndexBefore(ii.obj, insertIndex);
                }
                insertIndex++;
                if (ii.obj instanceof GButton)
                    ii.obj.selected = ii.selected;
                needRender = true;
            }
            else {
                needRender = forceUpdate;
                insertIndex = -1;
                lastObj = ii.obj;
            }
            if (needRender) {
                if (this._autoResizeItem) {
                    if (this._curLineItemCount == this._columnCount && this._curLineItemCount2 == this._lineCount)
                        ii.obj.setSize(partWidth, partHeight, true);
                    else if (this._curLineItemCount == this._columnCount)
                        ii.obj.setSize(partWidth, ii.obj.height, true);
                    else if (this._curLineItemCount2 == this._lineCount)
                        ii.obj.setSize(ii.obj.width, partHeight, true);
                }
                this.itemRenderer(i % this._numItems, ii.obj);
                ii.width = Math.ceil(ii.obj.width);
                ii.height = Math.ceil(ii.obj.height);
            }
        }
        //排列item
        var borderX = (startIndex / pageSize) * viewWidth;
        var xx = borderX;
        var yy = 0;
        var lineHeight = 0;
        for (i = startIndex; i < lastIndex; i++) {
            if (i >= this._realNumItems)
                continue;
            ii = this._virtualItems[i];
            if (ii.flag == this.itemInfoVer)
                ii.obj.setPosition(xx, yy);
            if (ii.height > lineHeight)
                lineHeight = ii.height;
            if (i % this._curLineItemCount == this._curLineItemCount - 1) {
                xx = borderX;
                yy += lineHeight + this._lineGap;
                lineHeight = 0;
                if (i == startIndex + pageSize - 1) {
                    borderX += viewWidth;
                    xx = borderX;
                    yy = 0;
                }
            }
            else
                xx += ii.width + this._columnGap;
        }
        //释放未使用的
        for (i = reuseIndex; i < virtualItemCount; i++) {
            ii = this._virtualItems[i];
            if (ii.flag != this.itemInfoVer && ii.obj) {
                if (ii.obj instanceof GButton)
                    ii.selected = ii.obj.selected;
                this.removeChildToPool(ii.obj);
                ii.obj = null;
            }
        }
    }
    handleArchOrder1() {
        if (this.childrenRenderOrder == ChildrenRenderOrder.Arch) {
            var mid = this._scrollPane.posY + this.viewHeight / 2;
            var minDist = Number.POSITIVE_INFINITY;
            var dist = 0;
            var apexIndex = 0;
            var cnt = this.numChildren;
            for (var i = 0; i < cnt; i++) {
                var obj = this.getChildAt(i);
                if (!this.foldInvisibleItems || obj.visible) {
                    dist = Math.abs(mid - obj.y - obj.height / 2);
                    if (dist < minDist) {
                        minDist = dist;
                        apexIndex = i;
                    }
                }
            }
            this.apexIndex = apexIndex;
        }
    }
    handleArchOrder2() {
        if (this.childrenRenderOrder == ChildrenRenderOrder.Arch) {
            var mid = this._scrollPane.posX + this.viewWidth / 2;
            var minDist = Number.POSITIVE_INFINITY;
            var dist = 0;
            var apexIndex = 0;
            var cnt = this.numChildren;
            for (var i = 0; i < cnt; i++) {
                var obj = this.getChildAt(i);
                if (!this.foldInvisibleItems || obj.visible) {
                    dist = Math.abs(mid - obj.x - obj.width / 2);
                    if (dist < minDist) {
                        minDist = dist;
                        apexIndex = i;
                    }
                }
            }
            this.apexIndex = apexIndex;
        }
    }
    handleAlign(contentWidth, contentHeight) {
        var newOffsetX = 0;
        var newOffsetY = 0;
        if (contentHeight < this.viewHeight) {
            if (this._valign == "middle")
                newOffsetY = Math.floor((this.viewHeight - contentHeight) / 2);
            else if (this._valign == "bottom")
                newOffsetY = this.viewHeight - contentHeight;
        }
        if (contentWidth < this.viewWidth) {
            if (this._align == "center")
                newOffsetX = Math.floor((this.viewWidth - contentWidth) / 2);
            else if (this._align == "right")
                newOffsetX = this.viewWidth - contentWidth;
        }
        if (newOffsetX != this._alignOffset.x || newOffsetY != this._alignOffset.y) {
            this._alignOffset.set(newOffsetX, newOffsetY);
            if (this._scrollPane)
                this._scrollPane.adjustMaskContainer();
            else
                this._container.setPosition(this._margin.left + this._alignOffset.x, this._margin.top + this._alignOffset.y);
        }
    }
    updateBounds() {
        if (this._virtual)
            return;
        var i;
        var child;
        var curX = 0;
        var curY = 0;
        var maxWidth = 0;
        var maxHeight = 0;
        var cw, ch;
        var j = 0;
        var page = 0;
        var k = 0;
        var cnt = this._children.length;
        var viewWidth = this.viewWidth;
        var viewHeight = this.viewHeight;
        var lineSize = 0;
        var lineStart = 0;
        var ratio;
        if (this._layout == ListLayoutType.SingleColumn) {
            for (i = 0; i < cnt; i++) {
                child = this.getChildAt(i);
                if (this.foldInvisibleItems && !child.visible)
                    continue;
                if (curY != 0)
                    curY += this._lineGap;
                child.y = curY;
                if (this._autoResizeItem)
                    child.setSize(viewWidth, child.height, true);
                curY += Math.ceil(child.height);
                if (child.width > maxWidth)
                    maxWidth = child.width;
            }
            ch = curY;
            if (ch <= viewHeight && this._autoResizeItem && this._scrollPane && this._scrollPane._displayInDemand && this._scrollPane.vtScrollBar) {
                viewWidth += this._scrollPane.vtScrollBar.width;
                for (i = 0; i < cnt; i++) {
                    child = this.getChildAt(i);
                    if (this.foldInvisibleItems && !child.visible)
                        continue;
                    child.setSize(viewWidth, child.height, true);
                    if (child.width > maxWidth)
                        maxWidth = child.width;
                }
            }
            cw = Math.ceil(maxWidth);
        }
        else if (this._layout == ListLayoutType.SingleRow) {
            for (i = 0; i < cnt; i++) {
                child = this.getChildAt(i);
                if (this.foldInvisibleItems && !child.visible)
                    continue;
                if (curX != 0)
                    curX += this._columnGap;
                child.x = curX;
                if (this._autoResizeItem)
                    child.setSize(child.width, viewHeight, true);
                curX += Math.ceil(child.width);
                if (child.height > maxHeight)
                    maxHeight = child.height;
            }
            cw = curX;
            if (cw <= viewWidth && this._autoResizeItem && this._scrollPane && this._scrollPane._displayInDemand && this._scrollPane.hzScrollBar) {
                viewHeight += this._scrollPane.hzScrollBar.height;
                for (i = 0; i < cnt; i++) {
                    child = this.getChildAt(i);
                    if (this.foldInvisibleItems && !child.visible)
                        continue;
                    child.setSize(child.width, viewHeight, true);
                    if (child.height > maxHeight)
                        maxHeight = child.height;
                }
            }
            ch = Math.ceil(maxHeight);
        }
        else if (this._layout == ListLayoutType.FlowHorizontal) {
            if (this._autoResizeItem && this._columnCount > 0) {
                for (i = 0; i < cnt; i++) {
                    child = this.getChildAt(i);
                    if (this.foldInvisibleItems && !child.visible)
                        continue;
                    lineSize += child.sourceWidth;
                    j++;
                    if (j == this._columnCount || i == cnt - 1) {
                        ratio = (viewWidth - lineSize - (j - 1) * this._columnGap) / lineSize;
                        curX = 0;
                        for (j = lineStart; j <= i; j++) {
                            child = this.getChildAt(j);
                            if (this.foldInvisibleItems && !child.visible)
                                continue;
                            child.setPosition(curX, curY);
                            if (j < i) {
                                child.setSize(child.sourceWidth + Math.round(child.sourceWidth * ratio), child.height, true);
                                curX += Math.ceil(child.width) + this._columnGap;
                            }
                            else {
                                child.setSize(viewWidth - curX, child.height, true);
                            }
                            if (child.height > maxHeight)
                                maxHeight = child.height;
                        }
                        //new line
                        curY += Math.ceil(maxHeight) + this._lineGap;
                        maxHeight = 0;
                        j = 0;
                        lineStart = i + 1;
                        lineSize = 0;
                    }
                }
                ch = curY + Math.ceil(maxHeight);
                cw = viewWidth;
            }
            else {
                for (i = 0; i < cnt; i++) {
                    child = this.getChildAt(i);
                    if (this.foldInvisibleItems && !child.visible)
                        continue;
                    if (curX != 0)
                        curX += this._columnGap;
                    if (this._columnCount != 0 && j >= this._columnCount
                        || this._columnCount == 0 && curX + child.width > viewWidth && maxHeight != 0) {
                        //new line
                        curX = 0;
                        curY += Math.ceil(maxHeight) + this._lineGap;
                        maxHeight = 0;
                        j = 0;
                    }
                    child.setPosition(curX, curY);
                    curX += Math.ceil(child.width);
                    if (curX > maxWidth)
                        maxWidth = curX;
                    if (child.height > maxHeight)
                        maxHeight = child.height;
                    j++;
                }
                ch = curY + Math.ceil(maxHeight);
                cw = Math.ceil(maxWidth);
            }
        }
        else if (this._layout == ListLayoutType.FlowVertical) {
            if (this._autoResizeItem && this._lineCount > 0) {
                for (i = 0; i < cnt; i++) {
                    child = this.getChildAt(i);
                    if (this.foldInvisibleItems && !child.visible)
                        continue;
                    lineSize += child.sourceHeight;
                    j++;
                    if (j == this._lineCount || i == cnt - 1) {
                        ratio = (viewHeight - lineSize - (j - 1) * this._lineGap) / lineSize;
                        curY = 0;
                        for (j = lineStart; j <= i; j++) {
                            child = this.getChildAt(j);
                            if (this.foldInvisibleItems && !child.visible)
                                continue;
                            child.setPosition(curX, curY);
                            if (j < i) {
                                child.setSize(child.width, child.sourceHeight + Math.round(child.sourceHeight * ratio), true);
                                curY += Math.ceil(child.height) + this._lineGap;
                            }
                            else {
                                child.setSize(child.width, viewHeight - curY, true);
                            }
                            if (child.width > maxWidth)
                                maxWidth = child.width;
                        }
                        //new line
                        curX += Math.ceil(maxWidth) + this._columnGap;
                        maxWidth = 0;
                        j = 0;
                        lineStart = i + 1;
                        lineSize = 0;
                    }
                }
                cw = curX + Math.ceil(maxWidth);
                ch = viewHeight;
            }
            else {
                for (i = 0; i < cnt; i++) {
                    child = this.getChildAt(i);
                    if (this.foldInvisibleItems && !child.visible)
                        continue;
                    if (curY != 0)
                        curY += this._lineGap;
                    if (this._lineCount != 0 && j >= this._lineCount
                        || this._lineCount == 0 && curY + child.height > viewHeight && maxWidth != 0) {
                        curY = 0;
                        curX += Math.ceil(maxWidth) + this._columnGap;
                        maxWidth = 0;
                        j = 0;
                    }
                    child.setPosition(curX, curY);
                    curY += Math.ceil(child.height);
                    if (curY > maxHeight)
                        maxHeight = curY;
                    if (child.width > maxWidth)
                        maxWidth = child.width;
                    j++;
                }
                cw = curX + Math.ceil(maxWidth);
                ch = Math.ceil(maxHeight);
            }
        }
        else //pagination
         {
            var eachHeight;
            if (this._autoResizeItem && this._lineCount > 0)
                eachHeight = Math.floor((viewHeight - (this._lineCount - 1) * this._lineGap) / this._lineCount);
            if (this._autoResizeItem && this._columnCount > 0) {
                for (i = 0; i < cnt; i++) {
                    child = this.getChildAt(i);
                    if (this.foldInvisibleItems && !child.visible)
                        continue;
                    if (j == 0 && (this._lineCount != 0 && k >= this._lineCount
                        || this._lineCount == 0 && curY + child.height > viewHeight)) {
                        //new page
                        page++;
                        curY = 0;
                        k = 0;
                    }
                    lineSize += child.sourceWidth;
                    j++;
                    if (j == this._columnCount || i == cnt - 1) {
                        ratio = (viewWidth - lineSize - (j - 1) * this._columnGap) / lineSize;
                        curX = 0;
                        for (j = lineStart; j <= i; j++) {
                            child = this.getChildAt(j);
                            if (this.foldInvisibleItems && !child.visible)
                                continue;
                            child.setPosition(page * viewWidth + curX, curY);
                            if (j < i) {
                                child.setSize(child.sourceWidth + Math.round(child.sourceWidth * ratio), this._lineCount > 0 ? eachHeight : child.height, true);
                                curX += Math.ceil(child.width) + this._columnGap;
                            }
                            else {
                                child.setSize(viewWidth - curX, this._lineCount > 0 ? eachHeight : child.height, true);
                            }
                            if (child.height > maxHeight)
                                maxHeight = child.height;
                        }
                        //new line
                        curY += Math.ceil(maxHeight) + this._lineGap;
                        maxHeight = 0;
                        j = 0;
                        lineStart = i + 1;
                        lineSize = 0;
                        k++;
                    }
                }
            }
            else {
                for (i = 0; i < cnt; i++) {
                    child = this.getChildAt(i);
                    if (this.foldInvisibleItems && !child.visible)
                        continue;
                    if (curX != 0)
                        curX += this._columnGap;
                    if (this._autoResizeItem && this._lineCount > 0)
                        child.setSize(child.width, eachHeight, true);
                    if (this._columnCount != 0 && j >= this._columnCount
                        || this._columnCount == 0 && curX + child.width > viewWidth && maxHeight != 0) {
                        //new line
                        curX = 0;
                        curY += Math.ceil(maxHeight) + this._lineGap;
                        maxHeight = 0;
                        j = 0;
                        k++;
                        if (this._lineCount != 0 && k >= this._lineCount
                            || this._lineCount == 0 && curY + child.height > viewHeight && maxWidth != 0) //new page
                         {
                            page++;
                            curY = 0;
                            k = 0;
                        }
                    }
                    child.setPosition(page * viewWidth + curX, curY);
                    curX += Math.ceil(child.width);
                    if (curX > maxWidth)
                        maxWidth = curX;
                    if (child.height > maxHeight)
                        maxHeight = child.height;
                    j++;
                }
            }
            ch = page > 0 ? viewHeight : curY + Math.ceil(maxHeight);
            cw = (page + 1) * viewWidth;
        }
        this.handleAlign(cw, ch);
        this.setBounds(0, 0, cw, ch);
    }
    setup_beforeAdd(buffer, beginPos) {
        super.setup_beforeAdd(buffer, beginPos);
        buffer.seek(beginPos, 5);
        var i1;
        this._layout = buffer.readByte();
        this._selectionMode = buffer.readByte();
        i1 = buffer.readByte();
        this._align = i1 == 0 ? "left" : (i1 == 1 ? "center" : "right");
        i1 = buffer.readByte();
        this._valign = i1 == 0 ? "top" : (i1 == 1 ? "middle" : "bottom");
        this._lineGap = buffer.readShort();
        this._columnGap = buffer.readShort();
        this._lineCount = buffer.readShort();
        this._columnCount = buffer.readShort();
        this._autoResizeItem = buffer.readBool();
        this._childrenRenderOrder = buffer.readByte();
        this._apexIndex = buffer.readShort();
        if (buffer.readBool()) {
            this._margin.top = buffer.readInt();
            this._margin.bottom = buffer.readInt();
            this._margin.left = buffer.readInt();
            this._margin.right = buffer.readInt();
        }
        var overflow = buffer.readByte();
        if (overflow == OverflowType.Scroll) {
            var savedPos = buffer.pos;
            buffer.seek(beginPos, 7);
            this.setupScroll(buffer);
            buffer.pos = savedPos;
        }
        else
            this.setupOverflow(overflow);
        if (buffer.readBool()) //clipSoftness
            buffer.skip(8);
        if (buffer.version >= 2) {
            this.scrollItemToViewOnClick = buffer.readBool();
            this.foldInvisibleItems = buffer.readBool();
        }
        buffer.seek(beginPos, 8);
        this._defaultItem = buffer.readS();
        this.readItems(buffer);
    }
    readItems(buffer) {
        var cnt;
        var i;
        var nextPos;
        var str;
        cnt = buffer.readShort();
        for (i = 0; i < cnt; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.pos;
            str = buffer.readS();
            if (str == null) {
                str = this.defaultItem;
                if (!str) {
                    buffer.pos = nextPos;
                    continue;
                }
            }
            var obj = this.getFromPool(str);
            if (obj) {
                this.addChild(obj);
                this.setupItem(buffer, obj);
            }
            buffer.pos = nextPos;
        }
    }
    setupItem(buffer, obj) {
        var str;
        str = buffer.readS();
        if (str != null)
            obj.text = str;
        str = buffer.readS();
        if (str != null && (obj instanceof GButton))
            obj.selectedTitle = str;
        str = buffer.readS();
        if (str != null)
            obj.icon = str;
        str = buffer.readS();
        if (str != null && (obj instanceof GButton))
            obj.selectedIcon = str;
        str = buffer.readS();
        if (str != null)
            obj.name = str;
        var cnt;
        var i;
        if (obj instanceof GComponent) {
            cnt = buffer.readShort();
            for (i = 0; i < cnt; i++) {
                var cc = obj.getController(buffer.readS());
                str = buffer.readS();
                if (cc)
                    cc.selectedPageId = str;
            }
            if (buffer.version >= 2) {
                cnt = buffer.readShort();
                for (i = 0; i < cnt; i++) {
                    var target = buffer.readS();
                    var propertyId = buffer.readShort();
                    var value = buffer.readS();
                    var obj2 = obj.getChildByPath(target);
                    if (obj2)
                        obj2.setProp(propertyId, value);
                }
            }
        }
    }
    setup_afterAdd(buffer, beginPos) {
        super.setup_afterAdd(buffer, beginPos);
        buffer.seek(beginPos, 6);
        var i = buffer.readShort();
        if (i != -1)
            this._selectionController = this._parent.getControllerAt(i);
    }
}
var s_n = 0;

class GTreeNode {
    constructor(isFolder, resURL) {
        this._expanded = false;
        this._level = 0;
        this._isFolder = isFolder;
        this._resURL = resURL;
        this._children = [];
    }
    set expanded(value) {
        if (this._expanded != value) {
            this._expanded = value;
            if (this._tree && this.isFolder) {
                if (this._expanded)
                    this._tree._afterExpanded(this);
                else
                    this._tree._afterCollapsed(this);
            }
            if (this._cell) {
                let cc = this._cell.getController("expanded");
                if (cc) {
                    cc.selectedIndex = this.expanded ? 1 : 0;
                }
            }
        }
    }
    get expanded() {
        return this._expanded;
    }
    get isFolder() {
        return this._isFolder || this._children.length > 0;
    }
    set isFolder(value) {
        if (this._isFolder != value) {
            this._isFolder = value;
            if (this._leafController)
                this._leafController.selectedIndex = this.isFolder ? 0 : 1;
        }
    }
    get parent() {
        return this._parent;
    }
    get text() {
        if (this._cell)
            return this._cell.text;
        else
            return null;
    }
    set text(value) {
        if (this._cell)
            this._cell.text = value;
    }
    get icon() {
        if (this._cell)
            return this._cell.icon;
        else
            return null;
    }
    set icon(value) {
        if (this._cell)
            this._cell.icon = value;
    }
    get cell() {
        return this._cell;
    }
    set cell(value) {
        if (this._cell)
            this._cell._treeNode = null;
        this._cell = value;
        this._cellFromPool = false;
        if (!this._cell)
            return;
        this._cell._treeNode = this;
        this._indentObj = this._cell.getChild("indent");
        if (this._tree && this._indentObj)
            this._indentObj.width = (this._level - 1) * this._tree.indent;
        var cc;
        cc = this._cell.getController("expanded");
        if (cc) {
            cc.on("status_changed", this.__expandedStateChanged, this);
            cc.selectedIndex = this.expanded ? 1 : 0;
        }
        this._leafController = this._cell.getController("leaf");
        if (this._leafController)
            this._leafController.selectedIndex = this.isFolder ? 0 : 1;
        this._cell.on("pointer_down", this.__cellMouseDown, this);
    }
    createCell() {
        if (this._cell)
            return;
        var child = this._tree.getFromPool(this._resURL ? this._resURL : this._tree.defaultItem);
        if (!child)
            throw new Error("cannot create tree node object.");
        this.cell = child;
        this._cellFromPool = true;
    }
    get level() {
        return this._level;
    }
    addChild(child) {
        this.addChildAt(child, this._children.length);
        return child;
    }
    addChildAt(child, index) {
        if (!child)
            throw new Error("child is null");
        var numChildren = this._children.length;
        if (index >= 0 && index <= numChildren) {
            if (child._parent == this) {
                this.setChildIndex(child, index);
            }
            else {
                if (child._parent)
                    child._parent.removeChild(child);
                if (index == numChildren)
                    this._children.push(child);
                else
                    this._children.splice(index, 0, child);
                if (this.isFolder && this._leafController)
                    this._leafController.selectedIndex = 0;
                child._parent = this;
                child._level = this._level + 1;
                child._setTree(this._tree);
                if (this._tree && this == this._tree.rootNode || this._cell && this._cell.parent && this._expanded)
                    this._tree._afterInserted(child);
            }
            return child;
        }
        else {
            throw new RangeError("Invalid child index");
        }
    }
    removeChild(child) {
        var childIndex = this._children.indexOf(child);
        if (childIndex != -1) {
            this.removeChildAt(childIndex);
        }
        return child;
    }
    removeChildAt(index) {
        if (index >= 0 && index < this.numChildren) {
            var child = this._children[index];
            this._children.splice(index, 1);
            if (!this.isFolder && this._leafController)
                this._leafController.selectedIndex = 1;
            child._parent = null;
            if (this._tree) {
                child._setTree(null);
                this._tree._afterRemoved(child);
            }
            return child;
        }
        else {
            throw "Invalid child index";
        }
    }
    removeChildren(beginIndex, endIndex) {
        beginIndex = beginIndex || 0;
        if (endIndex == null)
            endIndex = -1;
        if (endIndex < 0 || endIndex >= this.numChildren)
            endIndex = this.numChildren - 1;
        for (var i = beginIndex; i <= endIndex; ++i)
            this.removeChildAt(beginIndex);
    }
    getChildAt(index) {
        if (index >= 0 && index < this.numChildren)
            return this._children[index];
        else
            throw "Invalid child index";
    }
    getChildIndex(child) {
        return this._children.indexOf(child);
    }
    getPrevSibling() {
        if (this._parent == null)
            return null;
        var i = this._parent._children.indexOf(this);
        if (i <= 0)
            return null;
        return this._parent._children[i - 1];
    }
    getNextSibling() {
        if (this._parent == null)
            return null;
        var i = this._parent._children.indexOf(this);
        if (i < 0 || i >= this._parent._children.length - 1)
            return null;
        return this._parent._children[i + 1];
    }
    setChildIndex(child, index) {
        var oldIndex = this._children.indexOf(child);
        if (oldIndex == -1)
            throw "Not a child of this container";
        var cnt = this._children.length;
        if (index < 0)
            index = 0;
        else if (index > cnt)
            index = cnt;
        if (oldIndex == index)
            return;
        this._children.splice(oldIndex, 1);
        this._children.splice(index, 0, child);
        if (this._tree && this == this._tree.rootNode || this._cell && this._cell.parent && this._expanded)
            this._tree._afterMoved(child);
    }
    swapChildren(child1, child2) {
        var index1 = this._children.indexOf(child1);
        var index2 = this._children.indexOf(child2);
        if (index1 == -1 || index2 == -1)
            throw "Not a child of this container";
        this.swapChildrenAt(index1, index2);
    }
    swapChildrenAt(index1, index2) {
        var child1 = this._children[index1];
        var child2 = this._children[index2];
        this.setChildIndex(child1, index2);
        this.setChildIndex(child2, index1);
    }
    get numChildren() {
        return this._children.length;
    }
    getChildren() {
        return this._children;
    }
    expandToRoot() {
        var p = this;
        while (p) {
            p.expanded = true;
            p = p.parent;
        }
    }
    get tree() {
        return this._tree;
    }
    _setTree(value) {
        this._tree = value;
        if (this._tree && this._indentObj)
            this._indentObj.width = (this._level - 1) * this._tree.indent;
        if (this._tree && this._tree.treeNodeWillExpand && this._expanded)
            this._tree.treeNodeWillExpand(this, true);
        var cnt = this._children.length;
        for (var i = 0; i < cnt; i++) {
            var node = this._children[i];
            node._level = this._level + 1;
            node._setTree(value);
        }
    }
    __expandedStateChanged(evt) {
        let cc = evt.target;
        this.expanded = cc.selectedIndex == 1;
    }
    __cellMouseDown(evt) {
        if (this._tree && this.isFolder)
            this._tree._expandedStatusInEvt = this._expanded;
    }
}

var s_list = new Array();
class GTree extends GList {
    constructor() {
        super();
        this._indent = 15;
        this._rootNode = new GTreeNode(true);
        this._rootNode._setTree(this);
        this._rootNode.expanded = true;
    }
    get rootNode() {
        return this._rootNode;
    }
    get indent() {
        return this._indent;
    }
    set indent(value) {
        this._indent = value;
    }
    get clickToExpand() {
        return this._clickToExpand;
    }
    set clickToExpand(value) {
        this._clickToExpand = value;
    }
    getSelectedNode() {
        if (this.selectedIndex != -1)
            return this.getChildAt(this.selectedIndex)._treeNode;
        else
            return null;
    }
    getSelectedNodes(result) {
        if (!result)
            result = new Array();
        s_list.length = 0;
        super.getSelection(s_list);
        var cnt = s_list.length;
        var ret = new Array();
        for (var i = 0; i < cnt; i++) {
            var node = this.getChildAt(s_list[i])._treeNode;
            ret.push(node);
        }
        return ret;
    }
    selectNode(node, scrollItToView) {
        var parentNode = node.parent;
        while (parentNode && parentNode != this._rootNode) {
            parentNode.expanded = true;
            parentNode = parentNode.parent;
        }
        if (!node.cell)
            return;
        this.addSelection(this.getChildIndex(node.cell), scrollItToView);
    }
    unselectNode(node) {
        if (!node.cell)
            return;
        this.removeSelection(this.getChildIndex(node.cell));
    }
    expandAll(folderNode) {
        if (!folderNode)
            folderNode = this._rootNode;
        folderNode.expanded = true;
        var cnt = folderNode.numChildren;
        for (var i = 0; i < cnt; i++) {
            var node = folderNode.getChildAt(i);
            if (node.isFolder)
                this.expandAll(node);
        }
    }
    collapseAll(folderNode) {
        if (!folderNode)
            folderNode = this._rootNode;
        if (folderNode != this._rootNode)
            folderNode.expanded = false;
        var cnt = folderNode.numChildren;
        for (var i = 0; i < cnt; i++) {
            var node = folderNode.getChildAt(i);
            if (node.isFolder)
                this.collapseAll(node);
        }
    }
    createCell(node) {
        node.createCell();
        if (this.treeNodeRender)
            this.treeNodeRender(node, node.cell);
    }
    /** @internal */
    _afterInserted(node) {
        if (!node.cell)
            this.createCell(node);
        var index = this.getInsertIndexForNode(node);
        this.addChildAt(node.cell, index);
        if (this.treeNodeRender)
            this.treeNodeRender(node, node.cell);
        if (node.isFolder && node.expanded)
            this.checkChildren(node, index);
    }
    getInsertIndexForNode(node) {
        var prevNode = node.getPrevSibling();
        if (prevNode == null)
            prevNode = node.parent;
        var insertIndex = this.getChildIndex(prevNode.cell) + 1;
        var myLevel = node.level;
        var cnt = this.numChildren;
        for (var i = insertIndex; i < cnt; i++) {
            var testNode = this.getChildAt(i)._treeNode;
            if (testNode.level <= myLevel)
                break;
            insertIndex++;
        }
        return insertIndex;
    }
    /** @internal */
    _afterRemoved(node) {
        this.removeNode(node);
    }
    /** @internal */
    _afterExpanded(node) {
        if (node == this._rootNode) {
            this.checkChildren(this._rootNode, 0);
            return;
        }
        if (this.treeNodeWillExpand)
            this.treeNodeWillExpand(node, true);
        if (node.onExpanded)
            node.onExpanded();
        if (node.cell == null)
            return;
        if (this.treeNodeRender)
            this.treeNodeRender(node, node.cell);
        if (node.cell.parent)
            this.checkChildren(node, this.getChildIndex(node.cell));
    }
    /** @internal */
    _afterCollapsed(node) {
        if (node == this._rootNode) {
            this.checkChildren(this._rootNode, 0);
            return;
        }
        if (this.treeNodeWillExpand)
            this.treeNodeWillExpand(node, false);
        if (node.cell == null)
            return;
        if (this.treeNodeRender)
            this.treeNodeRender(node, node.cell);
        if (node.cell.parent)
            this.hideFolderNode(node);
    }
    /** @internal */
    _afterMoved(node) {
        var startIndex = this.getChildIndex(node.cell);
        var endIndex;
        if (node.isFolder)
            endIndex = this.getFolderEndIndex(startIndex, node.level);
        else
            endIndex = startIndex + 1;
        var insertIndex = this.getInsertIndexForNode(node);
        var i;
        var cnt = endIndex - startIndex;
        var obj;
        if (insertIndex < startIndex) {
            for (i = 0; i < cnt; i++) {
                obj = this.getChildAt(startIndex + i);
                this.setChildIndex(obj, insertIndex + i);
            }
        }
        else {
            for (i = 0; i < cnt; i++) {
                obj = this.getChildAt(startIndex);
                this.setChildIndex(obj, insertIndex);
            }
        }
    }
    getFolderEndIndex(startIndex, level) {
        var cnt = this.numChildren;
        for (var i = startIndex + 1; i < cnt; i++) {
            var node = this.getChildAt(i)._treeNode;
            if (node.level <= level)
                return i;
        }
        return cnt;
    }
    checkChildren(folderNode, index) {
        var cnt = folderNode.numChildren;
        for (var i = 0; i < cnt; i++) {
            index++;
            var node = folderNode.getChildAt(i);
            if (node.cell == null)
                this.createCell(node);
            if (!node.cell.parent)
                this.addChildAt(node.cell, index);
            if (node.isFolder && node.expanded)
                index = this.checkChildren(node, index);
        }
        return index;
    }
    hideFolderNode(folderNode) {
        var cnt = folderNode.numChildren;
        for (var i = 0; i < cnt; i++) {
            var node = folderNode.getChildAt(i);
            if (node.cell)
                this.removeChild(node.cell);
            if (node.isFolder && node.expanded)
                this.hideFolderNode(node);
        }
    }
    removeNode(node) {
        if (node.cell) {
            if (node.cell.parent)
                this.removeChild(node.cell);
            if (node._cellFromPool) {
                this.returnToPool(node.cell);
                node.cell = null;
            }
        }
        if (node.isFolder) {
            var cnt = node.numChildren;
            for (var i = 0; i < cnt; i++) {
                var node2 = node.getChildAt(i);
                this.removeNode(node2);
            }
        }
    }
    dispatchItemEvent(item, evt) {
        if (this._clickToExpand != 0) {
            var node = item._treeNode;
            if (node && node.isFolder && this._expandedStatusInEvt == node.expanded) {
                if (this._clickToExpand == 2) {
                    if (evt.input.clickCount == 2)
                        node.expanded = !node.expanded;
                }
                else
                    node.expanded = !node.expanded;
            }
        }
        super.dispatchItemEvent(item, evt);
    }
    setup_beforeAdd(buffer, beginPos) {
        super.setup_beforeAdd(buffer, beginPos);
        buffer.seek(beginPos, 9);
        this._indent = buffer.readInt();
        this._clickToExpand = buffer.readByte();
    }
    readItems(buffer) {
        var cnt;
        var i;
        var nextPos;
        var str;
        var isFolder;
        var lastNode;
        var level;
        var prevLevel = 0;
        cnt = buffer.readShort();
        for (i = 0; i < cnt; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.pos;
            str = buffer.readS();
            if (str == null) {
                str = this.defaultItem;
                if (!str) {
                    buffer.pos = nextPos;
                    continue;
                }
            }
            isFolder = buffer.readBool();
            level = buffer.readByte();
            var node = new GTreeNode(isFolder, str);
            node.expanded = true;
            if (i == 0)
                this._rootNode.addChild(node);
            else {
                if (level > prevLevel)
                    lastNode.addChild(node);
                else if (level < prevLevel) {
                    for (var j = level; j <= prevLevel; j++)
                        lastNode = lastNode.parent;
                    lastNode.addChild(node);
                }
                else
                    lastNode.parent.addChild(node);
            }
            lastNode = node;
            prevLevel = level;
            this.setupItem(buffer, node.cell);
            buffer.pos = nextPos;
        }
    }
}

const EVENT_TYPE = "PopupMenuItemClick";
class PopupMenu {
    constructor(resourceURL) {
        this.visibleItemCount = 0;
        this.hideOnClickItem = true;
        this.autoSize = false;
        if (!resourceURL) {
            resourceURL = UIConfig.popupMenu;
            if (!resourceURL)
                throw "UIConfig.popupMenu not defined";
        }
        this._contentPane = UIPackage.createObjectFromURL(resourceURL);
        this._contentPane.on("added_to_stage", this.__addedToStage, this);
        this._list = (this._contentPane.getChild("list"));
        this._list.removeChildrenToPool();
        this._list.addRelation(this._contentPane, RelationType.Width);
        this._list.removeRelation(this._contentPane, RelationType.Height);
        this._contentPane.addRelation(this._list, RelationType.Height);
        this._list.on("click_item", this.__clickItem, this);
    }
    dispose() {
        this._contentPane.dispose();
    }
    addItem(caption, handler) {
        var item = this.createItem(caption, handler);
        this._list.addChild(item);
        return item;
    }
    addItemAt(caption, index, handler) {
        var item = this.createItem(caption, handler);
        this._list.addChildAt(item, index);
        return item;
    }
    createItem(caption, handler) {
        var item = this._list.getFromPool();
        item.title = caption;
        item.data = handler;
        item.grayed = false;
        var c = item.getController("checked");
        if (c)
            c.selectedIndex = 0;
        item.on(EVENT_TYPE, handler);
        return item;
    }
    addSeperator(index) {
        if (UIConfig.popupMenu_seperator == null)
            throw "UIConfig.popupMenu_seperator not defined";
        if (index == undefined || index == -1)
            this._list.addItemFromPool(UIConfig.popupMenu_seperator);
        else {
            let item = this._list.getFromPool(UIConfig.popupMenu_seperator);
            this._list.addChildAt(item, index);
        }
    }
    getItemName(index) {
        var item = this._list.getChildAt(index);
        return item.name;
    }
    setItemText(name, caption) {
        var item = this._list.getChild(name);
        item.title = caption;
    }
    setItemVisible(name, visible) {
        var item = this._list.getChild(name);
        if (item.visible != visible) {
            item.visible = visible;
            this._list.setBoundsChangedFlag();
        }
    }
    setItemGrayed(name, grayed) {
        var item = this._list.getChild(name);
        item.grayed = grayed;
    }
    setItemCheckable(name, checkable) {
        var item = this._list.getChild(name);
        var c = item.getController("checked");
        if (c) {
            if (checkable) {
                if (c.selectedIndex == 0)
                    c.selectedIndex = 1;
            }
            else
                c.selectedIndex = 0;
        }
    }
    setItemChecked(name, checked) {
        var item = this._list.getChild(name);
        var c = item.getController("checked");
        if (c)
            c.selectedIndex = checked ? 2 : 1;
    }
    isItemChecked(name) {
        var item = this._list.getChild(name);
        var c = item.getController("checked");
        if (c)
            return c.selectedIndex == 2;
        else
            return false;
    }
    removeItem(name) {
        var item = this._list.getChild(name);
        if (item) {
            var index = this._list.getChildIndex(item);
            this._list.removeChildToPoolAt(index);
            return true;
        }
        else
            return false;
    }
    clearItems() {
        this._list.removeChildrenToPool();
    }
    get itemCount() {
        return this._list.numChildren;
    }
    get contentPane() {
        return this._contentPane;
    }
    get list() {
        return this._list;
    }
    show(target, dir, parentMenu) {
        let groot = (target instanceof GRoot$1) ? target : (target ? GRoot$1.getInst(target) : GRoot$1.inst);
        groot.showPopup(this._contentPane, (target instanceof GRoot$1) ? null : target, dir);
    }
    hide() {
        if (this._contentPane.parent)
            GRoot$1.getInst(this._contentPane).hidePopup(this._contentPane);
    }
    __clickItem(evt) {
        let item = evt.data;
        if (!(item instanceof GButton))
            return;
        if (item.grayed) {
            this._list.selectedIndex = -1;
            return;
        }
        var c = item.getController("checked");
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
    __addedToStage() {
        if (this.autoSize) {
            this._list.ensureBoundsCorrect();
            let cnt = this._list.numChildren;
            let maxDelta = -1000;
            for (let i = 0; i < cnt; i++) {
                let obj = this._list.getChildAt(i);
                if (obj == null)
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

class UIObjectFactory$1 {
    static setExtension(url, type) {
        if (url == null)
            throw new Error("Invaild url: " + url);
        var pi = UIPackage.getItemByURL(url);
        if (pi)
            pi.extensionType = type;
        UIObjectFactory$1.extensions[url] = type;
    }
    static setLoaderExtension(type) {
        UIObjectFactory$1.loaderType = type;
    }
    static resolveExtension(pi) {
        var extensionType = UIObjectFactory$1.extensions["ui://" + pi.owner.id + pi.id];
        if (!extensionType)
            extensionType = UIObjectFactory$1.extensions["ui://" + pi.owner.name + "/" + pi.name];
        if (extensionType)
            pi.extensionType = extensionType;
    }
    static newObject(type, userClass) {
        var obj;
        if (typeof type === 'number') {
            switch (type) {
                case ObjectType.Image:
                    return new GImage();
                case ObjectType.MovieClip:
                    return new GMovieClip();
                case ObjectType.Component:
                    return new GComponent();
                case ObjectType.Text:
                    return new GTextField();
                case ObjectType.RichText:
                    return new GRichTextField();
                case ObjectType.InputText:
                    return new GTextInput();
                case ObjectType.Group:
                    return new GGroup();
                case ObjectType.List:
                    return new GList();
                case ObjectType.Graph:
                    return new GGraph();
                case ObjectType.Loader:
                    if (UIObjectFactory$1.loaderType)
                        return new UIObjectFactory$1.loaderType();
                    else
                        return new GLoader();
                case ObjectType.Button:
                    return new GButton();
                case ObjectType.Label:
                    return new GLabel();
                case ObjectType.ProgressBar:
                    return new GProgressBar();
                case ObjectType.Slider:
                    return new GSlider();
                case ObjectType.ScrollBar:
                    return new GScrollBar();
                case ObjectType.ComboBox:
                    return new GComboBox();
                case ObjectType.Tree:
                    return new GTree();
                case ObjectType.Loader3D:
                    return new GLoader3D();
                default:
                    return null;
            }
        }
        else {
            if (type.type == PackageItemType.Component) {
                if (userClass)
                    obj = new userClass();
                else if (type.extensionType)
                    obj = new type.extensionType();
                else
                    obj = UIObjectFactory$1.newObject(type.objectType);
            }
            else
                obj = UIObjectFactory$1.newObject(type.objectType);
            if (obj)
                obj.packageItem = type;
        }
        return obj;
    }
}
UIObjectFactory$1.extensions = {};
global.UIObjectFactory = UIObjectFactory$1;

var _inst$1;
class DragDropManager {
    constructor() {
        let a = this._agent = new GLoader();
        a.draggable = true;
        a.touchable = false; ////important
        a.setSize(100, 100);
        a.setPivot(0.5, 0.5, true);
        a.align = "center";
        a.verticalAlign = "middle";
        a.sortingOrder = 1000000;
        a.on("drag_end", this.__dragEnd, this);
    }
    static get inst() {
        if (!_inst$1)
            _inst$1 = new DragDropManager();
        return _inst$1;
    }
    get dragAgent() {
        return this._agent;
    }
    get dragging() {
        return this._agent.parent != null;
    }
    startDrag(groot, icon, sourceData, pointerId) {
        if (this._agent.parent)
            return;
        this._sourceData = sourceData;
        this._agent.url = icon;
        groot.addChild(this._agent);
        let pt = groot.globalToLocal(groot.pointerPos.x, groot.pointerPos.y);
        this._agent.setPosition(pt.x, pt.y);
        this._agent.startDrag(pointerId != null ? pointerId : -1);
    }
    cancel() {
        if (this._agent.parent) {
            this._agent.stopDrag();
            this._agent.removeFromParent();
            this._sourceData = null;
        }
    }
    __dragEnd(evt) {
        if (this._agent.parent == null) //cancelled
            return;
        let obj = GRoot$1.getInst(this._agent).touchTarget;
        this._agent.removeFromParent();
        let sourceData = this._sourceData;
        this._sourceData = null;
        while (obj) {
            if (obj.hasListener("drop")) {
                obj.emit("drop", sourceData);
                return;
            }
            obj = obj.parent;
        }
    }
}

class AsyncOperation {
    constructor() {
        this._itemList = new Array();
        this._objectPool = [];
    }
    createObject(pkgName, resName) {
        var pkg = UIPackage.getByName(pkgName);
        if (pkg) {
            var pi = pkg.getItemByName(resName);
            if (!pi)
                throw new Error("resource not found: " + resName);
            this.internalCreateObject(pi);
        }
        else
            throw new Error("package not found: " + pkgName);
    }
    createObjectFromURL(url) {
        var pi = UIPackage.getItemByURL(url);
        if (pi)
            this.internalCreateObject(pi);
        else
            throw new Error("resource not found: " + url);
    }
    cancel() {
        Timers.remove(this.run, this);
        this._itemList.length = 0;
        if (this._objectPool.length > 0) {
            var cnt = this._objectPool.length;
            for (var i = 0; i < cnt; i++) {
                this._objectPool[i].dispose();
            }
            this._objectPool.length = 0;
        }
    }
    internalCreateObject(item) {
        this._itemList.length = 0;
        this._objectPool.length = 0;
        var di = new DisplayListItem(item, ObjectType.Component);
        di.childCount = this.collectComponentChildren(item);
        this._itemList.push(di);
        this._index = 0;
        Timers.addUpdate(this.run, this);
    }
    collectComponentChildren(item) {
        var buffer = item.rawData;
        buffer.seek(0, 2);
        var di;
        var pi;
        var i;
        var dataLen;
        var curPos;
        var pkg;
        var dcnt = buffer.readShort();
        for (i = 0; i < dcnt; i++) {
            dataLen = buffer.readShort();
            curPos = buffer.pos;
            buffer.seek(curPos, 0);
            var type = buffer.readByte();
            var src = buffer.readS();
            var pkgId = buffer.readS();
            buffer.pos = curPos;
            if (src != null) {
                if (pkgId != null)
                    pkg = UIPackage.getById(pkgId);
                else
                    pkg = item.owner;
                pi = pkg != null ? pkg.getItemById(src) : null;
                di = new DisplayListItem(pi, type);
                if (pi != null && pi.type == PackageItemType.Component)
                    di.childCount = this.collectComponentChildren(pi);
            }
            else {
                di = new DisplayListItem(null, type);
                if (type == ObjectType.List) //list
                    di.listItemCount = this.collectListChildren(buffer);
            }
            this._itemList.push(di);
            buffer.pos = curPos + dataLen;
        }
        return dcnt;
    }
    collectListChildren(buffer) {
        buffer.seek(buffer.pos, 8);
        var listItemCount = 0;
        var i;
        var nextPos;
        var url;
        var pi;
        var di;
        var defaultItem = buffer.readS();
        var itemCount = buffer.readShort();
        for (i = 0; i < itemCount; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.pos;
            url = buffer.readS();
            if (url == null)
                url = defaultItem;
            if (url) {
                pi = UIPackage.getItemByURL(url);
                if (pi != null) {
                    di = new DisplayListItem(pi, pi.objectType);
                    if (pi.type == PackageItemType.Component)
                        di.childCount = this.collectComponentChildren(pi);
                    this._itemList.push(di);
                    listItemCount++;
                }
            }
            buffer.pos = nextPos;
        }
        return listItemCount;
    }
    run() {
        var obj;
        var di;
        var poolStart;
        var k;
        var t = performance.now();
        var frameTime = UIConfig.frameTimeForAsyncUIConstruction;
        var totalItems = this._itemList.length;
        while (this._index < totalItems) {
            di = this._itemList[this._index];
            if (di.packageItem != null) {
                obj = UIObjectFactory$1.newObject(di.packageItem);
                this._objectPool.push(obj);
                constructingDepth.n++;
                if (di.packageItem.type == PackageItemType.Component) {
                    poolStart = this._objectPool.length - di.childCount - 1;
                    obj.constructFromResource2(this._objectPool, poolStart);
                    this._objectPool.splice(poolStart, di.childCount);
                }
                else {
                    obj.constructFromResource();
                }
                constructingDepth.n--;
            }
            else {
                obj = UIObjectFactory$1.newObject(di.type);
                this._objectPool.push(obj);
                if (di.type == ObjectType.List && di.listItemCount > 0) {
                    poolStart = this._objectPool.length - di.listItemCount - 1;
                    for (k = 0; k < di.listItemCount; k++) //把他们都放到pool里，这样GList在创建时就不需要创建对象了
                        obj.itemPool.returnObject(this._objectPool[k + poolStart]);
                    this._objectPool.splice(poolStart, di.listItemCount);
                }
            }
            this._index++;
            if ((this._index % 5 == 0) && performance.now() - t >= frameTime)
                return;
        }
        Timers.remove(this.run, this);
        var result = this._objectPool[0];
        this._itemList.length = 0;
        this._objectPool.length = 0;
        if (this.callback != null)
            this.callback(result);
    }
}
class DisplayListItem {
    constructor(packageItem, type) {
        this.packageItem = packageItem;
        this.type = type;
    }
}

class UIElement extends HTMLDivElement {
    constructor() {
        super();
        this._timerID = 0;
        this._children = [];
        this._pos = new Vec2();
        this._scale = new Vec2(1, 1);
        this._rot = 0;
        this._pivot = new Vec2();
        this._contentRect = new Rect();
        this._alpha = 1;
        this._touchable = true;
        this._visible = true;
        this._opaque = true;
    }
    get name() {
        return this.id;
    }
    set name(value) {
        this.id = value;
    }
    get x() {
        return this._pos.x;
    }
    set x(value) {
        this.setPosition(value, this._pos.y);
    }
    get y() {
        return this._pos.y;
    }
    set y(value) {
        this.setPosition(this._pos.x, value);
    }
    setPosition(x, y) {
        if (this._pos.x != x || this._pos.y != y) {
            this._pos.set(x, y);
            this.style.left = x + "px";
            this.style.top = y + "px";
        }
    }
    get width() {
        return this._contentRect.width;
    }
    set width(value) {
        if (this._contentRect.width != value) {
            this._contentRect.width = value;
            this.onSizeChanged();
        }
    }
    get height() {
        return this._contentRect.height;
    }
    set height(value) {
        if (this._contentRect.height != value) {
            this._contentRect.height = value;
            this.onSizeChanged();
        }
    }
    setSize(wv, hv) {
        if (wv != this._contentRect.width || hv != this._contentRect.height) {
            this._contentRect.width = wv;
            this._contentRect.height = hv;
            this.onSizeChanged();
        }
    }
    onSizeChanged() {
        this.style.width = this._contentRect.width + "px";
        this.style.height = this._contentRect.height + "px";
    }
    get pivotX() {
        return this._pivot.x;
    }
    set pivotX(value) {
        this.setPivot(value, this._pivot.y);
    }
    get pivotY() {
        return this._pivot.y;
    }
    set pivotY(value) {
        this.setPosition(this._pivot.x, value);
    }
    setPivot(xv, yv) {
        if (this._pivot.x != xv || this._pivot.y != yv) {
            this._pivot.set(xv, yv);
            this.style.transformOrigin = this._pivot.x + "%," + this._pivot.y + "%";
        }
    }
    get flip() {
        if (this._flipX)
            return this._flipY ? FlipType.Both : FlipType.Horizontal;
        else if (this._flipY)
            return this._flipX ? FlipType.Both : FlipType.Vertical;
        else
            return FlipType.None;
    }
    set flip(value) {
        let a = value == FlipType.Both || value == FlipType.Horizontal;
        let b = value == FlipType.Both || value == FlipType.Vertical;
        if (a != this._flipX || b != this._flipY)
            this._flipX = a;
        this._flipY = b;
        this.updateTransform();
    }
    get cursor() {
        return this._cursor;
    }
    set cursor(value) {
        this._cursor = value;
    }
    updateTransform() {
        if (this._timerID != 0)
            return;
        this._timerID = window.requestAnimationFrame(() => {
            this._timerID = 0;
            let str = [];
            if (this._scale.x != 1 || this._flipX) {
                str.push("scaleX(");
                str.push("" + this._scale.x * (this._flipX ? -1 : 1));
                str.push(") ");
            }
            if (this._scale.y != 1 || this._flipY) {
                str.push("scaleY(");
                str.push("" + this._scale.y * (this._flipY ? -1 : 1));
                str.push(") ");
            }
            if (this._rot != 0) {
                str.push("rotate(");
                str.push("" + this._rot);
                str.push("deg) ");
            }
            if (str.length > 0) {
                this.style.transform = str.join("");
                if (this._flipX || this._flipY)
                    this.style.transformOrigin = "%50 %50";
                else
                    this.style.transformOrigin = (this._pivot.x * 100) + "% " + (this._pivot.y * 100) + "%";
            }
            else
                this.style.transform = "none";
        });
    }
    updateFilters() {
        let filter = "";
        if (this._grayed)
            filter += "grayscale(100%)";
        this.style.filter = filter;
    }
    get scaleX() {
        return this._scale.x;
    }
    set scaleX(value) {
        this.setScale(value, this._scale.y);
    }
    get scaleY() {
        return this._scale.y;
    }
    set scaleY(value) {
        this.setScale(this._scale.x, value);
    }
    setScale(xv, yv) {
        if (this._scale.x != xv || this._scale.y != yv) {
            this._scale.set(xv, yv);
            this.updateTransform();
        }
    }
    get rotation() {
        return this._rot;
    }
    set rotation(value) {
        if (this._rot != value) {
            this._rot = value;
            this.updateTransform();
        }
    }
    get parent() {
        return this._parent;
    }
    get alpha() {
        return this._alpha;
    }
    set alpha(value) {
        if (this._alpha != value) {
            this._alpha = value;
            this.style.opacity = this._alpha.toFixed(3);
        }
    }
    get touchable() {
        return this._touchable;
    }
    set touchable(value) {
        if (this._touchable != value) {
            this._touchable = value;
            this.updateTouchableFlag();
        }
    }
    get opaque() {
        return this._opaque;
    }
    set opaque(value) {
        if (this._opaque != value) {
            this._opaque = value;
            this.updateTouchableFlag();
        }
    }
    updateTouchableFlag() {
        let str;
        if (!this._touchable || !this._opaque || this._touchDisabled)
            str = "none";
        else if (this.parent && !this.parent._opaque)
            str = "auto";
        else
            str = "";
        if ((this.style.pointerEvents == null ? "" : this.style.pointerEvents) != str) {
            this.style.pointerEvents = str;
            const children = this._children;
            for (let i = 0, l = children.length; i < l; i++) {
                children[i].updateTouchableFlag();
            }
        }
    }
    setNotInteractable() {
        this._touchDisabled = true;
        this.style.pointerEvents = "none";
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        if (this._visible != value) {
            this._visible = value;
            if (value)
                this.style.display = "";
            else
                this.style.display = "none";
        }
    }
    get grayed() {
        return this._grayed;
    }
    set grayed(value) {
        if (this._grayed != value) {
            this._grayed = value;
            this.updateFilters();
        }
    }
    // public get blendMode(): Blending {
    //     return this._graphics ? this._graphics.material.blending : NormalBlending;
    // }
    // public set blendMode(value: Blending) {
    //     if (this._graphics)
    //         this._graphics.material.blending = value;
    // }
    get focusable() {
        return !this._notFocusable;
    }
    set focusable(value) {
        this._notFocusable = !value;
    }
    get focused() {
        return this.stage.focusedElement == this || this.isAncestorOf(this.stage.focusedElement);
    }
    get tabStop() {
        return this._tabStop;
    }
    set tabStop(value) {
        if (this._tabStop != value) {
            this._tabStop = value;
            if (value) {
                this.tabIndex = 0;
                this.addEventListener("focus", () => { if (this._tabStop)
                    this.stage.setFocus(this, true); });
            }
            else
                this.tabIndex = null;
        }
    }
    get tabStopChildren() {
        return this._tabStopChildren;
    }
    set tabStopChildren(value) {
        this._tabStopChildren = value;
    }
    get onStage() {
        return this.isConnected;
    }
    get stage() {
        let p = this;
        while (p) {
            if (p.is_stage)
                return p;
            p = p.parentElement;
        }
        return window.fguiStage;
    }
    globalToLocal(x, y, result) {
        let rect = this.getBoundingClientRect();
        let sx = this._contentRect.width > 0 ? (rect.width / this._contentRect.width) : 1;
        let sy = this._contentRect.height > 0 ? (rect.height / this._contentRect.height) : 1;
        if (!result)
            result = new Vec2();
        result.x = x - rect.x / sx;
        result.y = y - rect.y / sy;
        return result;
    }
    localToGlobal(x, y, result) {
        let rect = this.getBoundingClientRect();
        let sx = this._contentRect.width > 0 ? (rect.width / this._contentRect.width) : 1;
        let sy = this._contentRect.height > 0 ? (rect.height / this._contentRect.height) : 1;
        if (!result)
            result = new Vec2();
        result.x = x * sx + rect.x;
        result.y = y * sy + rect.y;
        return result;
    }
    addChild(child) {
        this.addChildAt(child, Number.POSITIVE_INFINITY);
    }
    addChildAt(child, index) {
        if (child._parent == this)
            this.setChildIndex(child, index);
        else {
            if (index > this._children.length - 1) {
                this.appendChild(child);
            }
            else {
                let refNode = this._children[index];
                this.insertBefore(child, refNode);
            }
            this._children.splice(index, 0, child);
            child._parent = this;
            child.updateTouchableFlag();
        }
        if (this.isConnected)
            child.broadcastEvent("added_to_stage");
    }
    removeChild(child) {
        if (child instanceof UIElement) {
            let index = this._children.indexOf(child);
            if (index == -1)
                throw 'not a child';
            this.removeChildAt(index);
        }
        else
            super.removeChild(child);
        return child;
    }
    removeChildAt(index) {
        let child = this._children[index];
        if (this.isConnected) {
            child.broadcastEvent("removed_from_stage");
            this.stage.validateFocus(this, child);
        }
        this._children.splice(index, 1);
        super.removeChild(child);
        child._parent = null;
    }
    setChildIndex(child, index) {
        let oldIndex = this._children.indexOf(child);
        if (oldIndex == index)
            return;
        if (oldIndex == -1)
            throw 'Not a child';
        this._children.splice(oldIndex, 1);
        if (index >= this._children.length - 1) {
            this._children.push(child);
            this.appendChild(child);
        }
        else {
            this._children.splice(index, 0, child);
            let refNode = this._children[index + 1];
            this.insertBefore(child, refNode);
        }
    }
    getIndex(child) {
        return this._children.indexOf(child);
    }
    get numChildren() {
        return this._children.length;
    }
    isAncestorOf(child) {
        if (child == null)
            return false;
        var p = child.parent;
        while (p) {
            if (p == this)
                return true;
            p = p.parent;
        }
        return false;
    }
    get clipping() {
        return this._clipping;
    }
    set clipping(value) {
        if (this._clipping != value) {
            this._clipping = value;
            if (this._clipping)
                this.style.overflow = "hidden";
            else
                this.style.overflow = "visible";
        }
    }
    init() {
    }
    dispose() {
    }
    traverseVisible(callback) {
        if (!this._visible)
            return;
        callback(this);
        const children = this._children;
        for (let i = 0, l = children.length; i < l; i++) {
            children[i].traverseVisible(callback);
        }
    }
    traverseAncestors(callback) {
        const parent = this._parent;
        if (parent) {
            callback(parent);
            parent.traverseAncestors(callback);
        }
    }
    broadcastEvent(type, data) {
        let ev = EventPool.borrow();
        ev._type = type;
        ev.data = data;
        ev._initiator = this;
        let arr = ev._callChain;
        this.traverseVisible(obj => {
            if (obj.$owner)
                arr.push(obj.$owner);
        });
        arr.forEach(obj => {
            obj._dispatchDirect(type, ev);
        });
        arr.length = 0;
        EventPool.returns(ev);
    }
    bubbleEvent(initiator, type, data, addChain) {
        let ev = EventPool.borrow();
        ev._type = type;
        ev.data = data;
        ev._initiator = initiator;
        let arr = ev._callChain;
        if (this.$owner)
            arr.push(this.$owner);
        this.traverseAncestors(obj => {
            if (obj.$owner)
                arr.push(obj.$owner);
        });
        let stage = this.stage;
        for (let i = arr.length - 1; i >= 0; i--) {
            let obj = arr[i];
            let col = obj._listeners[type];
            if (col && col.captures.length > 0) {
                obj._dispatch(col, ev, true);
                if (ev._pointerCapture) {
                    ev._pointerCapture = false;
                    if (type == "pointer_down")
                        stage.addPointerMonitor(ev.input.pointerId, obj);
                }
            }
        }
        if (!ev._stopsPropagation) {
            for (let i = 0; i < arr.length; i++) {
                let obj = arr[i];
                let col = obj._listeners[type];
                if (col && col.callbacks.length > 0) {
                    obj._dispatch(col, ev, false);
                    if (ev._pointerCapture) {
                        ev._pointerCapture = false;
                        if (type == "pointer_down")
                            stage.addPointerMonitor(ev.input.pointerId, obj);
                    }
                    if (ev._stopsPropagation)
                        break;
                }
            }
            if (addChain) {
                for (let i = 0; i < addChain.length; i++) {
                    let obj = addChain[i];
                    if (obj && arr.indexOf(obj) == -1) {
                        obj._dispatchDirect(type, ev);
                    }
                }
            }
        }
        arr.length = 0;
        EventPool.returns(ev);
    }
}

class TextFormat {
    constructor() {
        this.size = 0;
        this.color = 0;
        this.lineSpacing = 0;
        this.letterSpacing = 0;
        this.outline = 0;
        this.outlineColor = 0;
        this.shadowOffset = new Vec2();
        this.shadowColor = 0;
    }
    copy(source) {
        this.size = source.size;
        this.font = source.font;
        this.color = source.color;
        this.lineSpacing = source.lineSpacing;
        this.letterSpacing = source.letterSpacing;
        this.bold = source.bold;
        this.underline = source.underline;
        this.italic = source.italic;
        this.strikethrough = source.strikethrough;
        this.align = source.align;
        this.outline = source.outline;
        this.outlineColor = source.outlineColor;
        this.shadowOffset.copy(source.shadowOffset);
        this.shadowColor = source.shadowColor;
    }
}

var textMeasureHelper = document.createElement("div");
textMeasureHelper.id = "text-helper";
textMeasureHelper.style.position = "absolute";
textMeasureHelper.style.left = "-10000px";
textMeasureHelper.style.top = "-10000px";
textMeasureHelper.style.pointerEvents = "none";
textMeasureHelper.style.width = "10000px";
class TextField extends UIElement {
    constructor() {
        super();
        this._maxWidth = 0;
        this._layoutStyleChanged = true;
        this._textFormat = new TextFormat();
        this._text = "";
        this._textSize = new Vec2();
    }
    init() {
        super.init();
        this._span = document.createElement("span");
        this._span.style.position = "absolute";
        this._span.style.padding = "2px";
        this._span.style.boxSizing = "border-box";
        this._span.style.whiteSpace = "pre-wrap";
        this.appendChild(this._span);
    }
    get textFormat() {
        return this._textFormat;
    }
    applyFormat() {
        let fontName = this._textFormat.font;
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
    get text() {
        return this._text;
    }
    set text(value) {
        if (!this._layoutStyleChanged && this._text.length < 20 && this._text == value && !this._html)
            return;
        this._text = value;
        this._html = false;
        this.applyText();
    }
    get htmlText() {
        return this._text;
    }
    set htmlText(value) {
        if (this._text.length < 20 && this._text == value && this._html)
            return;
        this._text = value;
        this._html = true;
        this.applyText();
    }
    applyText() {
        this._updatingSize = true;
        if (this._layoutStyleChanged)
            this.setLayoutStyle();
        if (this._autoSize == AutoSizeType.Both) {
            if (this.maxWidth > 0)
                this._span.style.width = this.maxWidth + "px";
            else
                this._span.style.width = "";
        }
        if (this._html)
            this._span.innerHTML = this._text;
        else
            this._span.innerText = this._text;
        let usingHelper;
        if (!this.isConnected || (this._text.length > 0 && this._span.clientWidth == 0)) {
            usingHelper = true;
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
    get autoSize() {
        return this._autoSize;
    }
    set autoSize(value) {
        if (this._autoSize != value) {
            this._autoSize = value;
            this._layoutStyleChanged = true;
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
    get singleLine() {
        return this._singleLine;
    }
    set singleLine(value) {
        if (this._singleLine != value) {
            this._singleLine = value;
            this._layoutStyleChanged = true;
        }
    }
    get maxWidth() {
        return this._maxWidth;
    }
    set maxWidth(value) {
        if (this._maxWidth != value) {
            this._maxWidth = value;
            this._layoutStyleChanged = true;
        }
    }
    get textWidth() {
        return this._textSize.x;
    }
    onSizeChanged() {
        super.onSizeChanged();
        if (!this._updatingSize) {
            if (this._autoSize != AutoSizeType.Both) {
                this._span.style.maxWidth = this._contentRect.width + "px";
                this._span.style.width = this._contentRect.width + "px";
            }
        }
    }
    setLayoutStyle() {
        this._layoutStyleChanged = false;
        if (this._maxWidth > 0) {
            this._span.style.maxWidth = this._maxWidth + "px";
            this._span.style.whiteSpace = "pre-wrap";
            this._span.style.wordBreak = "break-word";
        }
        else if (this._autoSize == AutoSizeType.Both || this._singleLine) {
            if (this._span.style.maxWidth)
                this._span.style.maxWidth = "";
            this._span.style.whiteSpace = "pre";
            this._span.style.wordBreak = "normal";
        }
        else {
            this._span.style.maxWidth = this._contentRect.width + "px";
            this._span.style.whiteSpace = "pre-wrap";
            this._span.style.wordBreak = "break-word";
        }
    }
}

var isAnyEditing = false;
class InputTextField extends UIElement {
    constructor() {
        super();
        this._textFormat = new TextFormat();
        this._text = "";
        this._cursor = "auto";
        this._singleLine = true;
    }
    init() {
        super.init();
        this.createElement();
        this.$owner.on("focus_in", () => {
            this._input.focus();
        });
    }
    get textFormat() {
        return this._textFormat;
    }
    applyFormat() {
        let fontName = this._textFormat.font;
        if (!fontName)
            fontName = UIConfig.defaultFont;
        this._input.style.textAlign = this._textFormat.align;
        this._input.style.verticalAlign = this._textFormat.verticalAlign;
        this._input.style.fontSize = this._textFormat.size + "px";
        this._input.style.fontFamily = fontName;
        this._input.style.color = convertToHtmlColor(this._textFormat.color);
    }
    get text() {
        this._text = this._input.value;
        return this._text;
    }
    set text(value) {
        this._text = value;
        this._input.value = this._text;
    }
    get singleLine() {
        return this._singleLine;
    }
    set singleLine(value) {
        if (this._singleLine != value) {
            this._singleLine = value;
            this.createElement();
        }
    }
    createElement() {
        let old = this._input;
        if (old)
            this.removeChild(old);
        let e;
        if (this._singleLine) {
            e = document.createElement("input");
        }
        else {
            e = document.createElement("textarea");
        }
        this._input = e;
        if (e instanceof HTMLInputElement) {
            if (this._password)
                e.type = "password";
            else
                e.type = "text";
        }
        e.value = this._text;
        e.readOnly = old ? old.readOnly : false;
        e.spellcheck = false;
        e.addEventListener("focus", (evt) => { isAnyEditing = true; this.stage.setFocus(this, true); });
        e.addEventListener("blur", () => { isAnyEditing = false; });
        e.addEventListener("input", () => { this.$owner.emit("changed"); });
        this.appendChild(this._input);
    }
    updateTouchableFlag() {
        super.updateTouchableFlag();
        if (isAnyEditing)
            this._input.setSelectionRange(0, 0);
        this._input.disabled = this.style.pointerEvents == "none";
    }
    setPromptText(value) {
        this._input.placeholder = defaultParser.parse(value, true);
    }
    setMaxLength(value) {
        if (value > 0)
            this._input.maxLength = value;
        else
            this._input.maxLength = 524288;
    }
    setKeyboardType(keyboardType) {
    }
    setRestrict(value) {
    }
    get editable() {
        return !this._input.readOnly;
    }
    set editable(value) {
        this._input.readOnly = !value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        if (this._password != value) {
            this._password = value;
            if (this._input instanceof HTMLInputElement)
                this._input.type = value ? "password" : "text";
        }
    }
    setSelection(start, end) {
        this._input.setSelectionRange(start, end);
    }
}

class Shape extends UIElement {
    constructor() {
        super();
        this._color = 0xFFFFFF;
        this._type = 0;
    }
    init() {
        super.init();
        this.style.boxSizing = "border-box";
        this.setNotInteractable();
    }
    get color() {
        return this._color;
    }
    set color(value) {
        if (this._color != value) {
            if (this._type != 0)
                this.style.backgroundColor = convertToHtmlColor(value);
        }
    }
    drawRect(lineWidth, lineColor, fillColor) {
        this.setType(1);
        if (lineColor.a != 0)
            this.style.border = lineWidth + "px solid " + lineColor.toStyleString();
        else
            this.style.border = "";
        this._color = fillColor.getHex();
        if (fillColor.a != 0)
            this.style.backgroundColor = fillColor.toStyleString();
        else
            this.style.backgroundColor = "transparent";
    }
    drawRoundRect(lineWidth, lineColor, fillColor, topLeftRadius, topRightRadius, bottomLeftRadius, bottomRightRadius) {
        this.setType(2);
        this.style.border = lineWidth + "px solid " + lineColor.toStyleString();
        this.style.borderRadius = topLeftRadius + "px " + topRightRadius + "px " + bottomRightRadius + "px " + bottomLeftRadius + "px";
        this._color = fillColor.getHex();
        if (fillColor.a != 0)
            this.style.backgroundColor = fillColor.toStyleString();
        else
            this.style.backgroundColor = "transparent";
    }
    drawEllipse(lineWidth, lineColor, fillColor, startDegree, endDegree) {
        this.setType(3);
        this.style.border = lineWidth + "px solid " + lineColor.toStyleString();
        this.style.borderRadius = this._contentRect.width + "px / " + this._contentRect.height + "px";
        this._color = fillColor.getHex();
        if (fillColor.a != 0)
            this.style.backgroundColor = fillColor.toStyleString();
        else
            this.style.backgroundColor = "transparent";
    }
    drawPolygon(points, fillColor, lineWidth, lineColor) {
        this.setType(4);
    }
    drawRegularPolygon(sides, lineWidth, centerColor, lineColor, fillColor, rotation, distances) {
        this.setType(5);
    }
    clear() {
        this.setType(0);
    }
    setType(type) {
        if (this._type == 0) {
            if (type != 0) {
                this._touchDisabled = false;
                this.updateTouchableFlag();
            }
        }
        else {
            if (type == 0) {
                this.style.backgroundColor = "transparent";
                this.style.border = "0px solid";
                this.setNotInteractable();
            }
        }
        this._type = type;
    }
    onSizeChanged() {
        this.style.width = this._contentRect.width + "px";
        this.style.height = this._contentRect.height + "px";
    }
}

class Image extends UIElement {
    constructor() {
        super();
        this._tileGridIndice = 0;
        this._timerID_1 = 0;
        this._color = 0xFFFFFF;
        this._textureScale = new Vec2(1, 1);
    }
    get src() {
        return this._src;
    }
    set src(value) {
        if (this._src != value) {
            this._src = value;
            this._textureScale.set(1, 1);
            this.refresh();
        }
    }
    get color() {
        return this._color;
    }
    set color(value) {
        if (this._color != value) {
            this._color = value;
            this.updateFilters();
        }
    }
    get textureScale() {
        return this._textureScale;
    }
    set textureScale(value) {
        if (!this._textureScale.equals(value)) {
            this._textureScale.copy(value);
            this.refresh();
        }
    }
    get scale9Grid() {
        return this._scale9Grid;
    }
    set scale9Grid(value) {
        if (this._scale9Grid != value) {
            this._scale9Grid = value;
            this.refresh();
        }
    }
    get scaleByTile() {
        return this._scaleByTile;
    }
    set scaleByTile(value) {
        if (this._scaleByTile != value) {
            this._scaleByTile = value;
            this.refresh();
        }
    }
    get tileGridIndice() {
        return this._tileGridIndice;
    }
    set tileGridIndice(value) {
        if (this._tileGridIndice != value) {
            this._tileGridIndice = value;
            this.refresh();
        }
    }
    get fillMethod() {
        return FillMethod.None;
    }
    set fillMethod(value) {
    }
    get fillOrigin() {
        return 0;
    }
    set fillOrigin(value) {
    }
    get fillClockwise() {
        return true;
    }
    set fillClockwise(value) {
    }
    get fillAmount() {
        return 0;
    }
    set fillAmount(value) {
    }
    updateFilters() {
        let filter = "";
        if (this._grayed)
            filter += "grayscale(100%)";
        if (this._color != 0xFFFFFF) {
            let mr = ((this._color & 0xFF0000) >> 16) / 0xFF;
            let mg = ((this._color & 0x00FF00) >> 8) / 0xFF;
            let mb = (this._color & 0x0000FF) / 0xFF;
            filter += " url('data:image/svg+xml,\
            <svg xmlns=\"http://www.w3.org/2000/svg\">\
              <filter id=\"color\">\
              <feColorMatrix type=\"matrix\" values=\"\
                " + mr + " 0 0 0 0\
                0 " + mg + " 0 0 0\
                0 0 " + mb + " 0 0 \
                0 0 0 1 0\" />\
              </filter>\
            </svg>#color')";
        }
        this.style.filter = filter;
    }
    refresh() {
        if (this._timerID_1 != 0)
            return;
        this._timerID_1 = window.requestAnimationFrame(() => {
            this._timerID_1 = 0;
            if (!this._src) {
                this.style.backgroundImage = "none";
                return;
            }
            if (this._scaleByTile) {
                this.style.backgroundImage = "url('" + this._src + "')";
                if (this._textureScale.x != 1 || this._textureScale.y != 1)
                    this.style.backgroundSize = this._textureScale.x + "px " + this._textureScale.y + "px";
                else
                    this.style.backgroundSize = "auto";
                this.style.backgroundRepeat = "repeat";
            }
            else if (this._scale9Grid) {
                this.style.boxSizing = "border-box";
                this.style.backgroundImage = "none";
                this.style.borderImage = "url('" + this._src + "')";
                if (this._textureScale.x != 1 || this._textureScale.y != 1)
                    this.style.borderImageWidth = Math.floor(this._scale9Grid.top / this._textureScale.y) + "px " + Math.floor(this._scale9Grid.right / this._textureScale.x) + "px " + Math.floor(this._scale9Grid.bottom / this._textureScale.y) + "px " + Math.floor(this._scale9Grid.left / this._textureScale.x) + "px";
                else
                    this.style.borderImageWidth = "auto";
                this.style.borderImageSlice = this._scale9Grid.top + " " + this._scale9Grid.right + " " + this._scale9Grid.bottom + " " + this._scale9Grid.left + " fill";
                if ((this._tileGridIndice & 0xF) != 0)
                    this.style.borderImageRepeat = "repeat";
                else
                    this.style.borderImageRepeat = "";
            }
            else {
                this.style.backgroundImage = "url('" + this._src + "')";
                this.style.backgroundSize = "100% 100%";
                this.style.backgroundRepeat = "no-repeat";
            }
        });
    }
}

class MovieClip extends Image {
    constructor() {
        super();
        this.interval = 0;
        this.swing = false;
        this.repeatDelay = 0;
        this.timeScale = 1;
        this._playing = true;
        this._frameCount = 0;
        this._frame = 0;
        this._start = 0;
        this._end = 0;
        this._times = 0;
        this._endAt = 0;
        this._status = 0; //0-none, 1-next loop, 2-ending, 3-ended
        this._frameElapsed = 0; //当前帧延迟
        this._reversed = false;
        this._repeatedCount = 0;
        this.setPlaySettings();
        // this.on("added_to_stage", this.__addToStage, this);
        // this.on("removed_from_stage", this.__removeFromStage, this);
    }
    get frames() {
        return this._frames;
    }
    set frames(value) {
        this._frames = value;
        this._scaleByTile = false;
        this._scale9Grid = null;
        if (this._frames) {
            this._frameCount = this._frames.length;
            if (this._end == -1 || this._end > this._frameCount - 1)
                this._end = this._frameCount - 1;
            if (this._endAt == -1 || this._endAt > this._frameCount - 1)
                this._endAt = this._frameCount - 1;
            if (this._frame < 0 || this._frame > this._frameCount - 1)
                this._frame = this._frameCount - 1;
            this._frameElapsed = 0;
            this._repeatedCount = 0;
            this._reversed = false;
        }
        else
            this._frameCount = 0;
        this.drawFrame();
        this.checkTimer();
    }
    get frameCount() {
        return this._frameCount;
    }
    get frame() {
        return this._frame;
    }
    set frame(value) {
        if (this._frame != value) {
            if (this._frames && value >= this._frameCount)
                value = this._frameCount - 1;
            this._frame = value;
            this._frameElapsed = 0;
            this.drawFrame();
        }
    }
    get playing() {
        return this._playing;
    }
    set playing(value) {
        if (this._playing != value) {
            this._playing = value;
            this.checkTimer();
        }
    }
    //从start帧开始，播放到end帧（-1表示结尾），重复times次（0表示无限循环），循环结束后，停止在endAt帧（-1表示参数end）
    rewind() {
        this._frame = 0;
        this._frameElapsed = 0;
        this._reversed = false;
        this._repeatedCount = 0;
        this.drawFrame();
    }
    syncStatus(anotherMc) {
        this._frame = anotherMc._frame;
        this._frameElapsed = anotherMc._frameElapsed;
        this._reversed = anotherMc._reversed;
        this._repeatedCount = anotherMc._repeatedCount;
        this.drawFrame();
    }
    advance(timeInMiniseconds) {
        var beginFrame = this._frame;
        var beginReversed = this._reversed;
        var backupTime = timeInMiniseconds;
        while (true) {
            var tt = this.interval + (this._frames[this._frame].addDelay || 0);
            if (this._frame == 0 && this._repeatedCount > 0)
                tt += this.repeatDelay;
            if (timeInMiniseconds < tt) {
                this._frameElapsed = 0;
                break;
            }
            timeInMiniseconds -= tt;
            if (this.swing) {
                if (this._reversed) {
                    this._frame--;
                    if (this._frame <= 0) {
                        this._frame = 0;
                        this._repeatedCount++;
                        this._reversed = !this._reversed;
                    }
                }
                else {
                    this._frame++;
                    if (this._frame > this._frameCount - 1) {
                        this._frame = Math.max(0, this._frameCount - 2);
                        this._repeatedCount++;
                        this._reversed = !this._reversed;
                    }
                }
            }
            else {
                this._frame++;
                if (this._frame > this._frameCount - 1) {
                    this._frame = 0;
                    this._repeatedCount++;
                }
            }
            if (this._frame == beginFrame && this._reversed == beginReversed) //走了一轮了
             {
                var roundTime = backupTime - timeInMiniseconds; //这就是一轮需要的时间
                timeInMiniseconds -= Math.floor(timeInMiniseconds / roundTime) * roundTime; //跳过
            }
        }
        this.drawFrame();
    }
    //从start帧开始，播放到end帧（-1表示结尾），重复times次（0表示无限循环），循环结束后，停止在endAt帧（-1表示参数end）
    setPlaySettings(start, end, times, endAt) {
        this._start = start || 0;
        this._end = end || -1;
        if (this._end == -1 || this._end > this._frameCount - 1)
            this._end = this._frameCount - 1;
        this._times = times || 0;
        this._endAt = endAt || -1;
        if (this._endAt == -1)
            this._endAt = this._end;
        this._status = 0;
        this.frame = this._start;
    }
    onTimer() {
        if (!this._playing || this._frameCount == 0 || this._status == 3)
            return;
        var dt = Timers.deltaTime;
        if (dt > 100)
            dt = 100;
        if (this.timeScale != 1)
            dt *= this.timeScale;
        this._frameElapsed += dt;
        var tt = this.interval + (this._frames[this._frame].addDelay || 0);
        if (this._frame == 0 && this._repeatedCount > 0)
            tt += this.repeatDelay;
        if (this._frameElapsed < tt)
            return;
        this._frameElapsed -= tt;
        if (this._frameElapsed > this.interval)
            this._frameElapsed = this.interval;
        if (this.swing) {
            if (this._reversed) {
                this._frame--;
                if (this._frame <= 0) {
                    this._frame = 0;
                    this._repeatedCount++;
                    this._reversed = !this._reversed;
                }
            }
            else {
                this._frame++;
                if (this._frame > this._frameCount - 1) {
                    this._frame = Math.max(0, this._frameCount - 2);
                    this._repeatedCount++;
                    this._reversed = !this._reversed;
                }
            }
        }
        else {
            this._frame++;
            if (this._frame > this._frameCount - 1) {
                this._frame = 0;
                this._repeatedCount++;
            }
        }
        if (this._status == 1) //new loop
         {
            this._frame = this._start;
            this._frameElapsed = 0;
            this._status = 0;
        }
        else if (this._status == 2) //ending
         {
            this._frame = this._endAt;
            this._frameElapsed = 0;
            this._status = 3; //ended
            if (this.$owner)
                this.$owner.emit("play_end");
        }
        else {
            if (this._frame == this._end) {
                if (this._times > 0) {
                    this._times--;
                    if (this._times == 0)
                        this._status = 2; //ending
                    else
                        this._status = 1; //new loop
                }
                else {
                    this._status = 1; //new loop
                }
            }
        }
        this.drawFrame();
    }
    drawFrame() {
        // if (this._frameCount > 0 && this._frame < this._frames.length) {
        //     var frame: Frame = this._frames[this._frame];
        //     this._graphics.texture = frame.texture;
        // }
        // else
        //     this._graphics.texture = null;
    }
    checkTimer() {
        if (this._playing && this._frameCount > 0 && this.onStage)
            Timers.addUpdate(this.onTimer, this);
        else
            Timers.remove(this.onTimer, this);
    }
    __addToStage() {
        if (this._playing && this._frameCount > 0)
            Timers.addUpdate(this.onTimer, this);
    }
    __removeFromStage() {
        Timers.remove(this.onTimer, this);
    }
}

const clickTestThreshold = 10;
const maxPointer = 10;
var anyPointerInput = 0;
class Stage extends UIElement {
    constructor() {
        super();
        this._pointers = [];
        this._pointerPos = new Vec2();
        this._touchCount = 0;
        this._rollOverChain = [];
        this._rollOutChain = [];
        this._focusOutChain = [];
        this._focusInChain = [];
        this._focusHistory = [];
        this.is_stage = true;
    }
    static get anyInput() {
        return anyPointerInput > 0 || isAnyEditing;
    }
    setWindow(ownerWindow) {
        this._window = ownerWindow;
        ownerWindow.fguiStage = this;
        let doc = ownerWindow.document;
        doc.body.appendChild(this);
        this._touchscreen = ('ontouchstart' in ownerWindow) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0);
        this._electron = window && window.process && window.process.versions['electron'] != undefined;
        for (let i = 0; i < maxPointer; i++)
            this._pointers.push(new PointerInfo());
        doc.addEventListener('pointerdown', ev => this.handlePointer(ev, 0), { passive: false });
        doc.addEventListener('pointerup', ev => this.handlePointer(ev, 1), { passive: false });
        doc.addEventListener('pointermove', ev => this.handlePointer(ev, 2), { passive: false });
        doc.addEventListener('pointercancel', ev => this.handlePointer(ev, 3), { passive: false });
        doc.addEventListener('contextmenu', ev => this.handleContextMenu(ev));
        doc.addEventListener('dragend', ev => this.handlePointer(ev, 1), { passive: false });
        doc.addEventListener('dragover', ev => this.handlePointer(ev, 2), { passive: false });
        doc.addEventListener('wheel', ev => this.handleWheel(ev), { passive: false });
        doc.body.insertAdjacentHTML("afterbegin", `<style>
            .fgui-link { color:#3A67CC }
            .fgui-link:hover { color:#3A67CC }

            .fgui-stage {
                -moz-user-select: none;
                -khtml-user-select: none;
                -webkit-user-select: none; 
                -ms-user-select:none;
            }

            .fgui-stage div:focus {
                outline: none;
            }

            .fgui-stage input[type=text] {
                resize : none;
                overflow : scroll;
                outline : none;
                border : 0px;
                margin : 0px;
                position : absolute;
                background : transparent;
                width : 100%;
                height : 100%;
            }

            .fgui-stage input[type=text]:focus {
                outline : none;
            }

            .fgui-stage textarea {
                resize : none;
                overflow : scroll;
                outline : none;
                border : 0px;
                padding : 0px 4px 0px 4px;
                margin : 0px;
                position : absolute;
                background : transparent;
                width : 100%;
                height : 100%;
            }

            .fgui-stage textarea:focus {
                outline: none;
            }

            .fgui-stage textarea::-webkit-scrollbar {
                display: none;
            }
        </style>`);
        this.className = "fgui-stage";
        ownerWindow.addEventListener('keydown', this.onKeydown.bind(this));
        ownerWindow.addEventListener('keyup', this.onKeyup.bind(this));
        ownerWindow.requestAnimationFrame(this.checkNextFocus.bind(this));
    }
    get window() {
        return this._window;
    }
    get pointerPos() {
        return this._pointerPos;
    }
    get touchScreen() {
        return this._touchscreen;
    }
    get touchTarget() {
        return this._touchTarget;
    }
    get touchCount() {
        return this._touchCount;
    }
    getPointerPos(pointerId, ret) {
        if (!ret)
            ret = new Vec2();
        if (pointerId == null || pointerId == -1)
            ret.copy(this._pointerPos);
        else {
            let pointer = this.getPointer(pointerId);
            if (pointer)
                ret.set(pointer.x, pointer.y);
            else
                ret.copy(this._pointerPos);
        }
        return ret;
    }
    addPointerMonitor(pointerId, target) {
        if (pointerId == null || pointerId == -1)
            pointerId = this._lastPointerId;
        let pointer = this.getPointer(pointerId);
        if (pointer.captors.indexOf(target) == -1)
            pointer.captors.push(target);
    }
    removePointerMonitor(target) {
        for (let j = 0; j < maxPointer; j++) {
            let pointer = this._pointers[j];
            let i = pointer.captors.indexOf(target);
            if (i != -1) {
                pointer.captors[i] = null;
            }
        }
    }
    cancelClick(pointerId) {
        for (let j = 0; j < maxPointer; j++) {
            let pointer = this._pointers[j];
            if (pointer.pointerId == pointerId)
                pointer.clickCancelled = true;
        }
    }
    //Key handle -----------------
    onKeydown(ev) {
        this.setLastInput(ev);
        let f = this.focusedElement;
        if (f)
            f.bubbleEvent(f, "key_down");
        else
            this.bubbleEvent(this, "key_down");
    }
    onKeyup(ev) {
        this.setLastInput(ev);
        let f = this.focusedElement;
        if (f)
            f.bubbleEvent(f, "key_up");
        else
            this.bubbleEvent(this, "key_up");
    }
    setLastInput(ev) {
        lastInput.altKey = ev.altKey;
        lastInput.ctrlKey = ev.ctrlKey;
        lastInput.shiftKey = ev.shiftKey;
        lastInput.commandKey = ev.metaKey;
        lastInput.keyCode = ev.code;
        lastInput.key = ev.key;
        lastInput.button = 0;
        lastInput.holdTime = 0;
        lastInput.clickCount = 0;
        lastInput.mouseWheelDelta = 0;
    }
    //Mouse/Touch Handle -----------------
    handlePointer(ev, type) {
        var _a;
        this._pointerPos.set(ev.pageX, ev.pageY);
        this._lastPointerId = (_a = ev.pointerId) !== null && _a !== void 0 ? _a : this._lastPointerId;
        let pointer;
        let free;
        for (let j = 0; j < maxPointer; j++) {
            if (this._pointers[j].pointerId == this._lastPointerId) {
                pointer = this._pointers[j];
                break;
            }
            if (this._pointers[j].pointerId == -1)
                free = this._pointers[j];
        }
        if (!pointer) {
            pointer = free;
            if (!pointer)
                return;
            pointer.pointerId = this._lastPointerId;
        }
        pointer.shiftKey = ev.shiftKey;
        pointer.altKey = ev.altKey;
        pointer.ctrlKey = ev.ctrlKey;
        pointer.commandKey = ev.metaKey;
        this._touchTarget = null;
        let ele = ev.target;
        while (ele) {
            if (ele.$owner) {
                this._touchTarget = ele;
                break;
            }
            ele = ele.parentElement;
        }
        if (!this._touchTarget)
            this._touchTarget = this;
        pointer.target = this._touchTarget;
        if (this._pointerPos.x != pointer.x || this._pointerPos.y != pointer.y) {
            pointer.x = this._pointerPos.x;
            pointer.y = this._pointerPos.y;
            if (pointer.began)
                pointer.holdTime = (Timers.frameCount - pointer.downFrame) == 1 ? (1 / 60) : (performance.now() - pointer.downTime) / 1000;
            this.setLastPointer(pointer);
            if (Math.abs(pointer.x - pointer.downX) > 50 || Math.abs(pointer.y - pointer.downY) > 50)
                pointer.clickCancelled = true;
            if (pointer.captors.length > 0) {
                let len = pointer.captors.length;
                for (let i = 0; i < len; i++) {
                    let e = pointer.captors[i];
                    if ((e instanceof UIElement) && !e.onStage)
                        pointer.captors[i] = null;
                }
                this.bubbleEvent(ev.target, "pointer_move", null, pointer.captors);
            }
            else
                this.$owner.emit("pointer_move");
        }
        if (pointer.lastRollOver != pointer.target)
            this.handleRollOver(pointer);
        if (type == 0) {
            if (!pointer.began) {
                this._touchCount++;
                anyPointerInput++;
                pointer.began = true;
                pointer.clickCancelled = false;
                pointer.downX = pointer.x;
                pointer.downY = pointer.y;
                pointer.downTime = performance.now();
                pointer.downFrame = Timers.frameCount;
                pointer.holdTime = 0;
                pointer.downTargets.length = 0;
                if (pointer.target) {
                    pointer.downTargets.push(pointer.target);
                    pointer.target.traverseAncestors(obj => {
                        pointer.downTargets.push(obj);
                    });
                }
                pointer.button = ev.button;
                this.setFocus(pointer.target);
                this.setLastPointer(pointer);
                pointer.target.bubbleEvent(ev.target, "pointer_down", ev.target);
            }
        }
        else if (type == 1 || type == 3) {
            if (pointer.began) {
                this._touchCount--;
                anyPointerInput--;
                pointer.began = false;
                let now = performance.now();
                if (pointer.downTargets.length == 0
                    || pointer.clickCancelled
                    || Math.abs(pointer.x - pointer.downX) > clickTestThreshold
                    || Math.abs(pointer.y - pointer.downY) > clickTestThreshold) {
                    pointer.clickCancelled = true;
                    pointer.lastClickTime = 0;
                    pointer.clickCount = 1;
                }
                else {
                    if (now - pointer.lastClickTime < 350
                        && Math.abs(pointer.x - pointer.lastClickX) < clickTestThreshold
                        && Math.abs(pointer.y - pointer.lastClickY) < clickTestThreshold
                        && pointer.lastClickButton == pointer.button) {
                        if (pointer.clickCount == 2)
                            pointer.clickCount = 1;
                        else
                            pointer.clickCount++;
                    }
                    else
                        pointer.clickCount = 1;
                    pointer.lastClickTime = now;
                    pointer.lastClickX = pointer.x;
                    pointer.lastClickY = pointer.y;
                    pointer.lastClickButton = pointer.button;
                }
                //当间隔一帧时，使用帧率计算时间，避免掉帧因素
                pointer.holdTime = (Timers.frameCount - pointer.downFrame) == 1 ? (1 / 60) : (now - pointer.downTime) / 1000;
                this.setLastPointer(pointer);
                let bubbleFrom = pointer.target ? pointer.target : this;
                if (pointer.captors.length > 0) {
                    let len = pointer.captors.length;
                    for (let i = 0; i < len; i++) {
                        let e = pointer.captors[i];
                        if (e instanceof UIElement) {
                            if (!e.onStage)
                                pointer.captors[i] = null;
                        }
                    }
                    bubbleFrom.bubbleEvent(ev.target, "pointer_up", null, pointer.captors);
                    pointer.captors.length = 0;
                }
                else
                    bubbleFrom.bubbleEvent(ev.target, "pointer_up");
                if (type != 3) {
                    let clickTarget = this.clickTest(pointer);
                    if (clickTarget) {
                        this.setLastPointer(pointer);
                        if (ev.button == 1 || ev.button == 2)
                            clickTarget.bubbleEvent(ev.target, "right_click");
                        else
                            clickTarget.bubbleEvent(ev.target, "click");
                    }
                }
                pointer.button = -1;
                //on touch device, trigger rollout on pointer up
                if (ev.pointerType != "mouse") {
                    pointer.target = null;
                    this.handleRollOver(pointer);
                    pointer.pointerId = -1;
                }
                if (this._nextCursor != null) {
                    this.style.cursor = this._nextCursor;
                    this._nextCursor = null;
                }
            }
        }
    }
    clickTest(pointer) {
        if (pointer.clickCancelled) {
            pointer.downTargets.length = 0;
            return null;
        }
        let obj = pointer.downTargets[0];
        if (obj.onStage) {
            pointer.downTargets.length = 0;
            return obj;
        }
        obj = pointer.target;
        while (obj) {
            let i = pointer.downTargets.indexOf(obj);
            if (i != -1 && obj.onStage)
                break;
            obj = obj.parent;
        }
        pointer.downTargets.length = 0;
        return obj;
    }
    handleWheel(ev) {
        this._pointerPos.set(ev.pageX, ev.pageY);
        let pointer = this._pointers[0];
        this._touchTarget = null;
        let ele = ev.target;
        while (ele) {
            if (ele.$owner) {
                this._touchTarget = ele;
                break;
            }
            ele = ele.parentElement;
        }
        if (!this._touchTarget)
            this._touchTarget = this;
        pointer.target = this._touchTarget;
        pointer.shiftKey = ev.shiftKey;
        pointer.altKey = ev.altKey;
        pointer.ctrlKey = ev.ctrlKey;
        pointer.commandKey = ev.metaKey;
        pointer.mouseWheelDelta = ev.deltaY / 20;
        this.setLastPointer(pointer);
        this._touchTarget.bubbleEvent(ev.target, "mouse_wheel");
        pointer.mouseWheelDelta = 0;
    }
    handleContextMenu(ev) {
        let isInput = (ev.target instanceof HTMLInputElement) && (ev.target.type == "text" || ev.target.type == "password")
            || (ev.target instanceof HTMLTextAreaElement);
        if (this._electron || !isInput)
            ev.preventDefault();
    }
    getPointer(pointerId) {
        for (let j = 0; j < maxPointer; j++) {
            let pointer = this._pointers[j];
            if (pointerId == -1 && pointer.pointerId != -1
                || pointerId != -1 && pointer.pointerId == pointerId)
                return pointer;
        }
        return null;
    }
    handleRollOver(pointer) {
        var _a;
        this._rollOverChain.length = 0;
        this._rollOutChain.length = 0;
        let obj = pointer.lastRollOver;
        while (obj != null) {
            this._rollOutChain.push(obj);
            obj = obj.parent;
        }
        pointer.lastRollOver = pointer.target;
        obj = pointer.target;
        while (obj) {
            let i = this._rollOutChain.indexOf(obj);
            if (i != -1) {
                this._rollOutChain.splice(i, this._rollOutChain.length - i);
                break;
            }
            this._rollOverChain.push(obj);
            obj = obj.parent;
        }
        let cnt = this._rollOutChain.length;
        if (cnt > 0) {
            for (let i = 0; i < cnt; i++) {
                let obj = this._rollOutChain[i];
                if (obj.onStage && obj.$owner)
                    obj.$owner.emit("roll_out");
            }
            this._rollOutChain.length = 0;
        }
        let cursor = null;
        cnt = this._rollOverChain.length;
        if (cnt > 0) {
            for (let i = 0; i < cnt; i++) {
                let obj = this._rollOverChain[i];
                if (obj.onStage && obj.$owner) {
                    obj.$owner.emit("roll_over");
                    if (cursor == null && obj.cursor)
                        cursor = obj.cursor;
                }
            }
            this._rollOverChain.length = 0;
        }
        let style = this.style;
        if (cursor == null)
            cursor = "";
        let oldCursor = (_a = style.cursor) !== null && _a !== void 0 ? _a : "";
        if (pointer.began) {
            if (oldCursor != cursor)
                this._nextCursor = cursor;
            else
                this._nextCursor = null;
        }
        else {
            this._nextCursor = null;
            if (oldCursor != cursor)
                style.cursor = cursor;
        }
    }
    setLastPointer(pointer) {
        lastInput.pointerId = pointer.pointerId;
        lastInput.x = pointer.x;
        lastInput.y = pointer.y;
        lastInput.clickCount = pointer.clickCount;
        lastInput.mouseWheelDelta = pointer.mouseWheelDelta;
        lastInput.button = pointer.button;
        lastInput.holdTime = pointer.holdTime;
        lastInput.altKey = pointer.altKey;
        lastInput.ctrlKey = pointer.ctrlKey;
        lastInput.shiftKey = pointer.shiftKey;
        lastInput.commandKey = pointer.commandKey;
    }
    onClickLink(event, href) {
        let e = event.currentTarget;
        while (e) {
            if (e instanceof UIElement) {
                e.bubbleEvent(e, "click_link", href);
                break;
            }
            e = e.parentElement;
        }
    }
    //Focus Manage -----------------
    get focusedElement() {
        if (this._focused != null) {
            if (!this._focused.onStage)
                this._focused = null;
        }
        else {
            this.checkNextFocus();
        }
        return this._focused;
    }
    validateFocus(container, child) {
        if (child == this._focused || child.isAncestorOf(this._focused))
            this.onFocusRemoving(container);
    }
    setFocus(newFocus, byKey) {
        if (newFocus == this)
            newFocus = null;
        this._nextFocus = null;
        if (this._focused == newFocus)
            return;
        let navRoot = null;
        let element = newFocus;
        while (element != null) {
            if (!element.focusable)
                return;
            else if (element.tabStopChildren) {
                if (navRoot == null)
                    navRoot = element;
            }
            element = element.parent;
        }
        let oldFocus = this._focused;
        this._focused = newFocus;
        if (navRoot != null) {
            navRoot._lastFocus = this._focused;
            let pos = this._focusHistory.indexOf(navRoot);
            if (pos != -1) {
                if (pos < this._focusHistory.length - 1)
                    this._focusHistory.splice(pos + 1, this._focusHistory.length - pos - 1);
            }
            else {
                this._focusHistory.push(navRoot);
                if (this._focusHistory.length > 10)
                    this._focusHistory.shift();
            }
        }
        this._focusInChain.length = 0;
        this._focusOutChain.length = 0;
        element = oldFocus;
        while (element != null) {
            if (element.focusable)
                this._focusOutChain.push(element);
            element = element.parent;
        }
        element = this._focused;
        let i;
        while (element != null) {
            i = this._focusOutChain.indexOf(element);
            if (i != -1) {
                this._focusOutChain.splice(i, this._focusOutChain.length - i);
                break;
            }
            if (element.focusable)
                this._focusInChain.push(element);
            element = element.parent;
        }
        let cnt = this._focusOutChain.length;
        if (cnt > 0) {
            for (i = 0; i < cnt; i++) {
                element = this._focusOutChain[i];
                if (element.onStage && element.$owner) {
                    element.$owner.emit("focus_out");
                    if (this._focused != newFocus) //focus changed in event
                        return;
                }
            }
            this._focusOutChain.length = 0;
        }
        cnt = this._focusInChain.length;
        if (cnt > 0) {
            for (i = 0; i < cnt; i++) {
                element = this._focusInChain[i];
                if (element.onStage && element.$owner) {
                    element.$owner.emit("focus_in", byKey ? "key" : null);
                    if (this._focused != newFocus) //focus changed in event
                        return;
                }
            }
            this._focusInChain.length = 0;
        }
        if (newFocus instanceof InputTextField)
            this.style.cursor = "auto";
    }
    onFocusRemoving(sender) {
        this._nextFocus = sender;
        if (this._focusHistory.length > 0) {
            let i = this._focusHistory.length - 1;
            let test = this._focusHistory[i];
            let element = this._focused;
            while (element != null && element != sender) {
                if (element.tabStopChildren && element == test) {
                    i--;
                    if (i < 0)
                        break;
                    test = this._focusHistory[i];
                }
                element = element.parent;
            }
            if (i != this._focusHistory.length - 1) {
                this._focusHistory.splice(i + 1, this._focusHistory.length - i - 1);
                if (this._focusHistory.length > 0)
                    this._nextFocus = this._focusHistory[this._focusHistory.length - 1];
            }
        }
        this._focused = null;
    }
    checkNextFocus() {
        if (this._nextFocus != null) {
            let nextFocus = this._nextFocus;
            this._nextFocus = null;
            if (nextFocus.onStage) {
                if (nextFocus.tabStopChildren) {
                    if (nextFocus._lastFocus != null && nextFocus.isAncestorOf(nextFocus._lastFocus))
                        this.setFocus(nextFocus._lastFocus);
                    else
                        this.setFocus(nextFocus);
                }
                else
                    this.setFocus(nextFocus);
            }
        }
    }
}
class PointerInfo {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.pointerId = -1;
        this.clickCount = 0;
        this.mouseWheelDelta = 0;
        this.button = -1;
        this.shiftKey = false;
        this.altKey = false;
        this.ctrlKey = false;
        this.commandKey = false;
        this.downX = 0;
        this.downY = 0;
        this.downTime = 0;
        this.downFrame = 0;
        this.began = false;
        this.clickCancelled = false;
        this.lastClickTime = 0;
        this.lastClickX = 0;
        this.lastClickY = 0;
        this.lastClickButton = 0;
        this.holdTime = 0;
        this.target = null;
        this.downTargets = new Array();
        this.lastRollOver = null;
        this.captors = new Array();
    }
}
global.createUIElement = function (tagName, owner) {
    if (!customElements.get("fgui-div")) {
        customElements.define("fgui-div", UIElement, { extends: "div" });
        customElements.define("fgui-img", Image, { extends: "div" });
        customElements.define("fgui-movieclip", MovieClip, { extends: "div" });
        customElements.define("fgui-text", TextField, { extends: "div" });
        customElements.define("fgui-input", InputTextField, { extends: "div" });
        customElements.define("fgui-shape", Shape, { extends: "div" });
        customElements.define("fgui-stage", Stage, { extends: "div" });
    }
    let ele = document.createElement("div", { is: tagName });
    ele.style.position = "absolute";
    ele.$owner = owner;
    ele.init();
    return ele;
};

const LUMA_R = 0.299;
const LUMA_G = 0.587;
const LUMA_B = 0.114;
const IDENTITY_MATRIX = [
    1, 0, 0, 0, 0,
    0, 1, 0, 0, 0,
    0, 0, 1, 0, 0,
    0, 0, 0, 1, 0
];
const LENGTH = IDENTITY_MATRIX.length;
class ColorMatrix {
    constructor() {
        this.matrix = new Array(LENGTH);
        this.reset();
    }
    static create(p_brightness, p_contrast, p_saturation, p_hue) {
        var ret = new ColorMatrix();
        ret.adjustColor(p_brightness, p_contrast, p_saturation, p_hue);
        return ret;
    }
    static getMatrix(p_brightness, p_contrast, p_saturation, p_hue, result) {
        if (!result)
            result = new Array(ColorMatrix.length);
        let mat = helper;
        mat.reset();
        mat.adjustColor(p_brightness, p_contrast, p_saturation, p_hue);
        var l = LENGTH;
        for (var i = 0; i < l; i++) {
            result[i] = mat.matrix[i];
        }
        return result;
    }
    reset() {
        for (var i = 0; i < LENGTH; i++) {
            this.matrix[i] = IDENTITY_MATRIX[i];
        }
    }
    invert() {
        this.multiplyMatrix([-1, 0, 0, 0, 255,
            0, -1, 0, 0, 255,
            0, 0, -1, 0, 255,
            0, 0, 0, 1, 0]);
    }
    adjustColor(p_brightness, p_contrast, p_saturation, p_hue) {
        this.adjustBrightness(p_brightness);
        this.adjustContrast(p_contrast);
        this.adjustSaturation(p_saturation);
        this.adjustHue(p_hue);
    }
    adjustBrightness(p_val) {
        p_val = this.cleanValue(p_val, 1) * 255;
        this.multiplyMatrix([
            1, 0, 0, 0, p_val,
            0, 1, 0, 0, p_val,
            0, 0, 1, 0, p_val,
            0, 0, 0, 1, 0
        ]);
    }
    adjustContrast(p_val) {
        p_val = this.cleanValue(p_val, 1);
        var s = p_val + 1;
        var o = 128 * (1 - s);
        this.multiplyMatrix([
            s, 0, 0, 0, o,
            0, s, 0, 0, o,
            0, 0, s, 0, o,
            0, 0, 0, 1, 0
        ]);
    }
    adjustSaturation(p_val) {
        p_val = this.cleanValue(p_val, 1);
        p_val += 1;
        var invSat = 1 - p_val;
        var invLumR = invSat * LUMA_R;
        var invLumG = invSat * LUMA_G;
        var invLumB = invSat * LUMA_B;
        this.multiplyMatrix([
            (invLumR + p_val), invLumG, invLumB, 0, 0,
            invLumR, (invLumG + p_val), invLumB, 0, 0,
            invLumR, invLumG, (invLumB + p_val), 0, 0,
            0, 0, 0, 1, 0
        ]);
    }
    adjustHue(p_val) {
        p_val = this.cleanValue(p_val, 1);
        p_val *= Math.PI;
        var cos = Math.cos(p_val);
        var sin = Math.sin(p_val);
        this.multiplyMatrix([
            ((LUMA_R + (cos * (1 - LUMA_R))) + (sin * -(LUMA_R))), ((LUMA_G + (cos * -(LUMA_G))) + (sin * -(LUMA_G))), ((LUMA_B + (cos * -(LUMA_B))) + (sin * (1 - LUMA_B))), 0, 0,
            ((LUMA_R + (cos * -(LUMA_R))) + (sin * 0.143)), ((LUMA_G + (cos * (1 - LUMA_G))) + (sin * 0.14)), ((LUMA_B + (cos * -(LUMA_B))) + (sin * -0.283)), 0, 0,
            ((LUMA_R + (cos * -(LUMA_R))) + (sin * -((1 - LUMA_R)))), ((LUMA_G + (cos * -(LUMA_G))) + (sin * LUMA_G)), ((LUMA_B + (cos * (1 - LUMA_B))) + (sin * LUMA_B)), 0, 0,
            0, 0, 0, 1, 0
        ]);
    }
    concat(p_matrix) {
        if (p_matrix.length != LENGTH) {
            return;
        }
        this.multiplyMatrix(p_matrix);
    }
    clone() {
        var result = new ColorMatrix();
        result.copyMatrix(this.matrix);
        return result;
    }
    copyMatrix(p_matrix) {
        var l = LENGTH;
        for (var i = 0; i < l; i++) {
            this.matrix[i] = p_matrix[i];
        }
    }
    multiplyMatrix(p_matrix) {
        var col = [];
        var i = 0;
        for (var y = 0; y < 4; ++y) {
            for (var x = 0; x < 5; ++x) {
                col[i + x] = p_matrix[i] * this.matrix[x] +
                    p_matrix[i + 1] * this.matrix[x + 5] +
                    p_matrix[i + 2] * this.matrix[x + 10] +
                    p_matrix[i + 3] * this.matrix[x + 15] +
                    (x == 4 ? p_matrix[i + 4] : 0);
            }
            i += 5;
        }
        this.copyMatrix(col);
    }
    cleanValue(p_val, p_limit) {
        return Math.min(p_limit, Math.max(-p_limit, p_val));
    }
}
let helper = new ColorMatrix();

export { AsyncOperation, AutoSizeType, ButtonMode, ByteBuffer, ChildrenRenderOrder, Color, ColorMatrix, Controller, DragDropManager, EaseType, Event, EventDispatcher, FillMethod, FillOrigin, FillOrigin90, FlipType, GButton, GComboBox, GComponent, GGraph, GGroup, GImage, GLabel, GList, GLoader, GLoader3D, GMovieClip, GObject, GObjectPool, GProgressBar, GRichTextField, GRoot$1 as GRoot, GScrollBar, GSlider, GTextField, GTextInput, GTree, GTreeNode, GTween, GTweener, GWindow, GearAnimation, GearBase, GearColor, GearDisplay, GearDisplay2, GearFontSize, GearIcon, GearLook, GearSize, GearText, GearXY, GroupLayoutType, Image, InputTextField, ListLayoutType, ListSelectionMode, LoaderFillType, Margin, MovieClip, ObjectPropID, ObjectType, OverflowType, PackageItem, PackageItemType, Pool, PopupDirection, PopupMenu, ProgressTitleType, Rect, RelationType, ScrollBarDisplayType, ScrollPane, ScrollType, Stage, TextField, TextFormat, Timers, Transition, TranslationHelper, UBBParser, UIConfig, UIElement, UIObjectFactory$1 as UIObjectFactory, UIPackage, Vec2 };
