declare class SparkShader extends WebGLShader {
    setupUniforms(operation: any): void;
    draw(operation: any): void;
}
declare namespace SparkShader {
    const vertexShaderSource: string;
    const fragmentShaderSource: string;
}
export default SparkShader;
import WebGLShader from "../../webgl/WebGLShader.mjs";
//# sourceMappingURL=SparkShader.d.mts.map