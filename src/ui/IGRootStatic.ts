import { GObject } from "./GObject";

export interface IGRootStatic {
    inst: any;
    getInst(obj: GObject): any;
    playOneShotSound(url: string, volumeScale?: number): void;
}

declare global {
    var GRoot: IGRootStatic;
}