import { Frame } from "../core/MovieClip";
import { ByteBuffer } from "../utils/ByteBuffer";
import { UIPackage } from "./UIPackage";
import { Margin } from "../math/Margin";
import { UIConfig } from "./UIConfig";

export class PackageItem {
    public owner: UIPackage;

    public type: number;
    public objectType: number;

    public id: string;
    public name: string;
    public width: number = 0;
    public height: number = 0;
    public file: string;
    public decoded?: boolean;
    public rawData?: ByteBuffer;

    public highResolution?: Array<string>;
    public branches?: Array<string>;

    //image
    public scale9Grid?: Margin;
    public scaleByTile?: boolean;
    public tileGridIndice?: number;
    public smoothing?: boolean;

    //movieclip
    public interval?: number;
    public repeatDelay?: number;
    public swing?: boolean;
    public frames?: Frame[];

    //componenet
    public extensionType?: any;

    constructor() {
    }

    public getBranch(): PackageItem {
        if (this.branches && this.owner._branchIndex != -1) {
            var itemId: string = this.branches[this.owner._branchIndex];
            if (itemId)
                return this.owner.getItemById(itemId);
        }

        return this;
    }

    public getHighResolution(): PackageItem {
        if (this.highResolution && UIConfig.scaleLevel > 0) {
            var itemId: string = this.highResolution[UIConfig.scaleLevel - 1];
            if (itemId)
                return this.owner.getItemById(itemId);
        }

        return this;
    }
}
