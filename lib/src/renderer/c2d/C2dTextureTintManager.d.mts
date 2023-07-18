export default class C2dTextureTintManager {
    constructor(stage: any);
    stage: any;
    _usedMemory: number;
    _cachedNativeTextures: Set<any>;
    destroy(): void;
    _addMemoryUsage(delta: any): void;
    delete(nativeTexture: any): void;
    getTintTexture(nativeTexture: any, color: any): any;
    _tintTexture(target: any, source: any, color: any): void;
    _hasCache(nativeTexture: any): boolean;
    _getCache(nativeTexture: any): any;
    gc(aggressive?: boolean): void;
}
//# sourceMappingURL=C2dTextureTintManager.d.mts.map