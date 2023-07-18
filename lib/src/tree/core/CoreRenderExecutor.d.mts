export default class CoreRenderExecutor {
    constructor(ctx: any);
    ctx: any;
    renderState: any;
    gl: any;
    destroy(): void;
    _reset(): void;
    execute(): void;
    _processQuadOperation(quadOperation: any): void;
    _setupQuadOperation(quadOperation: any): void;
    _execQuadOperation(op: any): void;
    _renderQuadOperation(op: any): void;
    _bindRenderTexture(renderTexture: any): void;
    _renderTexture: any;
    _clearRenderTexture(renderTexture: any): void;
    _setScissor(area: any): void;
}
//# sourceMappingURL=CoreRenderExecutor.d.mts.map