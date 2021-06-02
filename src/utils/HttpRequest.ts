import { Event } from "../event/Event"
import { EventDispatcher } from "../event/EventDispatcher"

export class HttpRequest extends EventDispatcher {
    protected _http = new XMLHttpRequest();
    protected _responseType: string;
    protected _data: any;
    protected _url: string;

    send(url: string, data: any = null, method: string = "get", responseType: string = "text", headers: any[]|null = null): void {
        this._responseType = responseType;
        this._data = null;
        this._url = url;
        var _this: HttpRequest = this;
        var http = this._http;
		http.open(method, url, true);
		let isJson = false;
        if (headers) {
            for (var i: number = 0; i < headers.length; i++) {
                http.setRequestHeader(headers[i++], headers[i]);
            }
        } else if (!(((<any>window)).conch)) {
            if (!data || typeof (data) == 'string') http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			else{ 
                http.setRequestHeader("Content-Type", "application/json");
                if (!(data instanceof ArrayBuffer) && typeof data !== "string") {
                    isJson=true;
                }
			}
        }
        let restype: XMLHttpRequestResponseType = responseType !== "arraybuffer" ? "text" : "arraybuffer";
        http.responseType = restype;
        if ((http as any).dataType) {//for Ali
            (http as any).dataType = restype;
        }
        http.onerror = function (e: any): void {
            _this._onError(e);
        }
        http.onabort = function (e: any): void {
            _this._onAbort(e);
        }
        http.onprogress = function (e: any): void {
            _this._onProgress(e);
        }
        http.onload = function (e: any): void {
            _this._onLoad(e);
        }
        http.send( isJson?JSON.stringify(data):data);
    }

    protected _onProgress(e: any): void {
        if (e && e.lengthComputable) this.emit("progress", e.loaded / e.total);
    }

    protected _onAbort(e: any): void {
        this.error("Request was aborted by user");
    }

    protected _onError(e: any): void {
        this.error("Request failed Status:" + this._http.status + " text:" + this._http.statusText);
    }

    protected _onLoad(e: any): void {
        var http: any = this._http;
        var status: number = http.status !== undefined ? http.status : 200;

        if (status === 200 || status === 204 || status === 0) {
            this.complete();
        } else {
            this.error("[" + http.status + "]" + http.statusText + ":" + http.responseURL);
        }
    }

    protected error(message: string): void {
        this.clear();
        console.warn(this.url, message);
        this.emit("error", message);
    }

    protected complete(): void {
        this.clear();
        this._data = this._http.response || this._http.responseText;
        this.emit("complete", this._data);
    }

    protected clear(): void {
        var http: any = this._http;
        http.onerror = http.onabort = http.onprogress = http.onload = null;
    }

    get url(): string {
        return this._url;
    }

    get data(): any {
        return this._data;
    }

    get http(): any {
        return this._http;
    }
}

