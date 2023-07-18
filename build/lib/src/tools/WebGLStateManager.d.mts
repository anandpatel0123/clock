export default WebGLStateManager;
declare class WebGLStateManager {
    /**
     * Sets up the rendering context for context sharing.
     * @param {WebGLRenderingContext} gl
     * @param {string} id
     */
    static enable(gl: WebGLRenderingContext, id?: string): WebGLRenderingContext;
    _initStateManager(id?: string): void;
    _states: {} | undefined;
    _state: any;
    _getState(id: any): any;
    switchState(id?: string): void;
    $useProgram(program: any): void;
    $bindBuffer(target: any, fb: any): void;
    $bindFramebuffer(target: any, fb: any): void;
    $bindRenderbuffer(target: any, fb: any): void;
    $enable(cap: any): void;
    $disable(cap: any): void;
    $viewport(x: any, y: any, w: any, h: any): void;
    $scissor(x: any, y: any, w: any, h: any): void;
    $disableVertexAttribArray(index: any): void;
    $enableVertexAttribArray(index: any): void;
    $vertexAttribPointer(index: any, size: any, type: any, normalized: any, stride: any, offset: any): void;
    $activeTexture(texture: any): void;
    $bindTexture(target: any, texture: any): void;
    $pixelStorei(pname: any, param: any): void;
    $stencilFuncSeparate(face: any, func: any, ref: any, mask: any): void;
    _stencilFuncSeparateFront(func: any, ref: any, mask: any): void;
    _stencilFuncSeparateBack(func: any, ref: any, mask: any): void;
    _stencilFuncSeparateFrontAndBack(func: any, ref: any, mask: any): void;
    $stencilMaskSeparate(face: any, mask: any): void;
    _stencilMaskSeparateFront(mask: any): void;
    _stencilMaskSeparateBack(mask: any): void;
    _stencilMaskSeparateFrontAndBack(mask: any): void;
    $stencilOpSeparate(face: any, fail: any, zfail: any, zpass: any): void;
    _stencilOpSeparateFront(fail: any, zfail: any, zpass: any): void;
    _stencilOpSeparateBack(fail: any, zfail: any, zpass: any): void;
    _stencilOpSeparateFrontAndBack(fail: any, zfail: any, zpass: any): void;
    $blendColor(red: any, green: any, blue: any, alpha: any): void;
    $blendEquation(mode: any): void;
    $blendEquationSeparate(modeRGB: any, modeAlpha: any): void;
    $blendFunc(sfactor: any, dfactor: any): void;
    $blendFuncSeparate(srcRGB: any, dstRGB: any, srcAlpha: any, dstAlpha: any): void;
    $clearColor(red: any, green: any, blue: any, alpha: any): void;
    $clearDepth(depth: any): void;
    $clearStencil(s: any): void;
    $colorMask(red: any, green: any, blue: any, alpha: any): void;
    $cullFace(mode: any): void;
    $depthFunc(func: any): void;
    $depthMask(flag: any): void;
    $depthRange(zNear: any, zFar: any): void;
    $frontFace(mode: any): void;
    $lineWidth(width: any): void;
    $polygonOffset(factor: any, units: any): void;
    $sampleCoverage(value: any, invert: any): void;
    $stencilFunc(func: any, ref: any, mask: any): void;
    $stencilMask(mask: any): void;
    $stencilOp(fail: any, zfail: any, zpass: any): void;
    $vertexAttrib1f(indx: any, x: any): void;
    $vertexAttrib1fv(indx: any, values: any): void;
    $vertexAttrib2f(indx: any, x: any, y: any): void;
    $vertexAttrib2fv(indx: any, values: any): void;
    $vertexAttrib3f(indx: any, x: any, y: any, z: any): void;
    $vertexAttrib3fv(indx: any, values: any): void;
    $vertexAttrib4f(indx: any, x: any, y: any, z: any, w: any): void;
    $vertexAttrib4fv(indx: any, values: any): void;
}
//# sourceMappingURL=WebGLStateManager.d.mts.map