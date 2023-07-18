/**
 * Base functionality for shader setup/destroy.
 */
export default class WebGLShaderProgram {
    constructor(vertexShaderSource: any, fragmentShaderSource: any);
    vertexShaderSource: any;
    fragmentShaderSource: any;
    _program: any;
    gl: any;
    _uniformLocations: Map<any, any>;
    _attributeLocations: Map<any, any>;
    _currentUniformValues: {};
    compile(gl: any): void;
    _glCompile(type: any, src: any): any;
    getUniformLocation(name: any): any;
    getAttribLocation(name: any): any;
    destroy(): void;
    get glProgram(): any;
    get compiled(): boolean;
    _valueEquals(v1: any, v2: any): boolean;
    _valueClone(v: any): any;
    setUniformValue(name: any, value: any, glFunction: any): void;
}
//# sourceMappingURL=WebGLShaderProgram.d.mts.map