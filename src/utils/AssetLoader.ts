import { Event } from "../event/Event";
import { HttpRequest } from "./HttpRequest";

export interface IAssetLoaderStatic {
    load(url: string): Promise<any>;
    getBlobURL(data:any):string;
    returnBlobURL(url: string): void;
}

declare global {
    var AssetLoader: IAssetLoaderStatic;
}

export class AssetLoader {
    private static cache = new Map<string, any>();
    private static blobURLCache = new Map<string, string>();
    private static blobURLCnt = new Map<string, number>();

    static load(url: string): Promise<any> {
        let cacheContent = this.cache.get(url);
        if(cacheContent){
            return cacheContent;
        }
        return new Promise((resolve, reject) => {
            let request = new HttpRequest();
            request.send(url, null, "get", "arraybuffer");
            request.on("complete", (evt: Event) => {
                this.cache.set(url, evt.data);
                resolve(evt.data);
            });
        });
    }

    static getBlobURL(dataURL: string): string {
        let blobURL = this.blobURLCache.get(dataURL);
        if (blobURL) {
            return blobURL;
        }
        let data = this.cache.get(dataURL);
        if(data == null){
            return null;
        }

        let blob = new Blob([data], { type: 'application/octet-binary' });
        blobURL = URL.createObjectURL(blob);

        this.blobURLCache.set(dataURL, blobURL);
        let cnt = this.blobURLCnt.get(blobURL) || 0;
        this.blobURLCnt.set(blobURL, cnt + 1);
        return blobURL;
    }

    static returnBlobURL(blobURL: string): void {
        let cnt = this.blobURLCnt.get(blobURL) || 0;
        if(cnt == 0){
            URL.revokeObjectURL(blobURL);
            this.blobURLCnt.delete(blobURL);
            return;
        }
        this.blobURLCnt.set(blobURL, cnt - 1);
    }
}

globalThis.AssetLoader = AssetLoader;