export default class WebGLCoreRenderExecutor extends CoreRenderExecutor {
    init(): void;
    _attribsBuffer: any;
    _quadsBuffer: any;
    _projection: Float32Array | undefined;
    _setupBuffers(): void;
    /**
     * @param {WebGLShader} shader;
     * @param {CoreQuadOperation} operation;
     */
    _useShaderProgram(shader: WebGLShader, operation: CoreQuadOperation): void;
    _currentShaderProgram: WebGLShader | null | undefined;
    _stopShaderProgram(): void;
    _clearRenderTexture(): void;
    _scissor: any;
}
import CoreRenderExecutor from "../../tree/core/CoreRenderExecutor.mjs";
//# sourceMappingURL=WebGLCoreRenderExecutor.d.mts.map