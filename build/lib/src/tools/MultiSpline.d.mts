export default class MultiSpline {
    static getRgbaComponents(argb: any): number[];
    static getSplineValueFunction(v1: any, v2: any, p1: any, p2: any, o1: any, i2: any, s1: any, s2: any): (p: any) => any;
    static getSplineRgbaValueFunction(v1: any, v2: any, p1: any, p2: any, o1: any, i2: any, s1: any, s2: any): (p: any) => any;
    /**
     * Creates helpers to be used in the spline function.
     * @param {number} v1
     *   From value.
     * @param {number} v2
     *   To value.
     * @param {number} o1
     *   From smoothness (0 = linear, 1 = smooth).
     * @param {number} s1
     *   From slope (0 = horizontal, infinite = vertical).
     * @param {number} i2
     *   To smoothness.
     * @param {number} s2
     *   To slope.
     * @returns {Number[]}
     *   The helper values to be supplied to the spline function.
     *   If the configuration is actually linear, null is returned.
     */
    static getSplineHelpers(v1: number, v2: number, o1: number, i2: number, s1: number, s2: number): number[];
    /**
     * Calculates the intermediate spline value based on the specified helpers.
     * @param {number[]} helpers
     *   Obtained from getSplineHelpers.
     * @param {number} p
     * @return {number}
     */
    static calculateSpline(helpers: number[], p: number): number;
    static mergeColors(c1: any, c2: any, p: any): number;
    static getArgbNumber(rgba: any): number;
    _clear(): void;
    _p: any[] | undefined;
    _pe: any[] | undefined;
    _idp: any[] | undefined;
    _f: any[] | undefined;
    _v: any[] | undefined;
    _lv: any[] | undefined;
    _sm: any[] | undefined;
    _s: any[] | undefined;
    _ve: any[] | undefined;
    _sme: any[] | undefined;
    _se: any[] | undefined;
    _length: number | undefined;
    parse(rgba: any, def: any): void;
    _add(item: any): void;
    _getItem(p: any): number;
    getValue(p: any): any;
    get length(): number | undefined;
}
//# sourceMappingURL=MultiSpline.d.mts.map