export default class ImageWorker {
    constructor(options?: {});
    _items: Map<any, any>;
    _id: number;
    destroy(): void;
    _worker: Worker | null | undefined;
    _initWorker(): void;
    create(src: any): ImageWorkerImage;
    cancel(image: any): void;
    error(image: any, info: any): void;
    finish(image: any, info: any): void;
}
declare class ImageWorkerImage {
    constructor(manager: any, id: any, src: any);
    _manager: any;
    _id: any;
    _src: any;
    _onError: any;
    _onLoad: any;
    get id(): any;
    get src(): any;
    set onError(arg: any);
    set onLoad(arg: any);
    cancel(): void;
    load(info: any): void;
    error(info: any): void;
}
export {};
//# sourceMappingURL=ImageWorker.d.mts.map