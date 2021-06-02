import { GObject } from "./GObject";
import { PackageItem } from "./PackageItem";

export interface IObjectFactoryStatic {
    resolveExtension(pi: PackageItem): void;
    newObject(type: number | PackageItem, userClass?: new () => GObject): GObject;
}

declare global {
    var UIObjectFactory: IObjectFactoryStatic;
}