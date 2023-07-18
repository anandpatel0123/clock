/**
 * Allows throttling of loading texture sources, keeping the app responsive.
 */
declare class TextureThrottler {
    constructor(stage: any);
    stage: any;
    genericCancelCb: (textureSource: any) => void;
    _sources: any[];
    _data: any[];
    destroy(): void;
    processSome(): void;
    _processItem(): void;
    add(textureSource: any, data: any): void;
    _remove(textureSource: any): void;
}
declare namespace TextureThrottler {
    const MAX_UPLOAD_TIME_PER_FRAME: number;
}
export default TextureThrottler;
//# sourceMappingURL=TextureThrottler.d.mts.map