declare class FlexItem {
    constructor(item: any);
    _ctr: any;
    _item: any;
    _grow: number;
    _shrink: number;
    _alignSelf: any;
    _minWidth: number;
    _minHeight: number;
    _maxWidth: number;
    _maxHeight: number;
    _marginLeft: number;
    _marginTop: number;
    _marginRight: number;
    _marginBottom: number;
    get item(): any;
    set grow(arg: number);
    get grow(): number;
    set shrink(arg: number);
    get shrink(): number;
    _getDefaultShrink(): 0 | 1;
    set alignSelf(arg: any);
    get alignSelf(): any;
    set minWidth(arg: number);
    get minWidth(): number;
    set minHeight(arg: number);
    get minHeight(): number;
    set maxWidth(arg: number);
    get maxWidth(): number;
    set maxHeight(arg: number);
    get maxHeight(): number;
    /**
     * @note margins behave slightly different than in HTML with regard to shrinking.
     * In HTML, (outer) margins can be removed when shrinking. In this engine, they will not shrink at all.
     */
    set margin(arg: number);
    get margin(): number;
    set marginLeft(arg: number);
    get marginLeft(): number;
    set marginTop(arg: number);
    get marginTop(): number;
    set marginRight(arg: number);
    get marginRight(): number;
    set marginBottom(arg: number);
    get marginBottom(): number;
    _changed(): void;
    set ctr(arg: any);
    get ctr(): any;
    patch(settings: any): void;
    _resetLayoutSize(): void;
    _resetCrossAxisLayoutSize(): void;
    _resetHorizontalAxisLayoutSize(): void;
    _resetVerticalAxisLayoutSize(): void;
    _getCrossAxisMinSizeSetting(): number;
    _getCrossAxisMaxSizeSetting(): number;
    _getMainAxisMaxSizeSetting(): number;
    _getMinSizeSetting(horizontal: any): number;
    _getMaxSizeSetting(horizontal: any): number;
    _getMainAxisMinSize(): any;
    _getCrossAxisMinSize(): any;
    _getMainAxisLayoutSize(): any;
    _getMainAxisLayoutPos(): any;
    _setMainAxisLayoutPos(pos: any): void;
    _setCrossAxisLayoutPos(pos: any): void;
    _getCrossAxisLayoutSize(): any;
    _resizeCrossAxis(size: any): void;
    _resizeMainAxis(size: any): void;
    _getMainAxisPadding(): any;
    _getCrossAxisPadding(): any;
    _getMainAxisMargin(): any;
    _getCrossAxisMargin(): any;
    _getHorizontalMarginOffset(): any;
    _getVerticalMarginOffset(): any;
    _getMainAxisMinSizeWithPaddingAndMargin(): any;
    _getCrossAxisMinSizeWithPaddingAndMargin(): any;
    _getMainAxisLayoutSizeWithPaddingAndMargin(): any;
    _getCrossAxisLayoutSizeWithPaddingAndMargin(): any;
    _hasFixedCrossAxisSize(): boolean;
    _hasRelCrossAxisSize(): boolean;
}
declare namespace FlexItem {
    const SHRINK_AUTO: number;
}
export default FlexItem;
//# sourceMappingURL=FlexItem.d.mts.map