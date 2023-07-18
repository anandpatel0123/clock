/**
 * Layouts a flex container (and descendants).
 */
export default class FlexLayout {
    constructor(flexContainer: any);
    _flexContainer: any;
    _lineLayouter: LineLayouter;
    _resizingMainAxis: boolean;
    _resizingCrossAxis: boolean;
    _cachedMainAxisSizeAfterLayout: number;
    _cachedCrossAxisSizeAfterLayout: number;
    _shrunk: boolean;
    get shrunk(): boolean;
    get recalc(): any;
    layoutTree(): void;
    updateTreeLayout(): void;
    _performUpdateLayoutTree(): void;
    _refreshLayoutCache(): void;
    _performUpdateLayoutTreeFromCache(): void;
    set mainAxisSize(arg: any);
    get mainAxisSize(): any;
    set crossAxisSize(arg: any);
    get crossAxisSize(): any;
    updateItemCoords(): void;
    _updateSubTreeLayout(): void;
    _setInitialAxisSizes(): void;
    _layoutAxes(): void;
    /**
     * @pre mainAxisSize should exclude padding.
     */
    _layoutMainAxis(): void;
    _layoutLines(): void;
    get _lines(): any[] | undefined;
    _fitMainAxisSizeToContents(): void;
    /**
     * @pre crossAxisSize should exclude padding.
     */
    _layoutCrossAxis(): void;
    _totalCrossAxisSize: number | undefined;
    _fitCrossAxisSizeToContents(): void;
    isWrapping(): any;
    isAxisFitToContents(horizontal: any): boolean;
    isMainAxisFitToContents(): boolean;
    isCrossAxisFitToContents(): boolean;
    _hasFixedMainAxisBasis(): boolean;
    _hasFixedCrossAxisBasis(): boolean;
    getAxisMinSize(horizontal: any): number;
    _getMainAxisMinSize(): number;
    _getCrossAxisMinSize(): number;
    resizeMainAxis(size: any): void;
    _checkValidCacheMainAxisResize(size: any): boolean;
    performResizeMainAxis(size: any): void;
    resizeCrossAxis(size: any): void;
    performResizeCrossAxis(size: any): void;
    get targetMainAxisSize(): any;
    get targetCrossAxisSize(): any;
    getParentFlexContainer(): any;
    _getHorizontalPadding(): any;
    _getVerticalPadding(): any;
    _getHorizontalPaddingOffset(): any;
    _getVerticalPaddingOffset(): any;
    _getMainAxisBasis(): any;
    _getCrossAxisBasis(): any;
    get _horizontal(): any;
    get _reverse(): any;
    get item(): any;
    get items(): any;
    get resizingMainAxis(): boolean;
    get resizingCrossAxis(): boolean;
    get numberOfItems(): any;
}
import LineLayouter from "./LineLayouter.mjs";
//# sourceMappingURL=FlexLayout.d.mts.map