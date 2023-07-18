/**
 * Distributes items over layout lines.
 */
export default class LineLayouter {
    constructor(layout: any);
    _layout: any;
    _mainAxisMinSize: number;
    _crossAxisMinSize: number;
    _mainAxisContentSize: number;
    get lines(): any[] | undefined;
    get mainAxisMinSize(): number;
    get crossAxisMinSize(): number;
    get mainAxisContentSize(): number;
    layoutLines(): void;
    _curMainAxisPos: number | undefined;
    _layoutFlexItem(item: any): void;
    _setup(): void;
    _mainAxisSize: any;
    _maxMainAxisPos: number | undefined;
    _lines: any[] | undefined;
    _addToMainAxisPos(itemMainAxisSize: any): void;
    _layoutLine(startIndex: any, endIndex: any): void;
    _getAvailableMainAxisLayoutSpace(): number;
    _getCrossAxisMinSize(): number;
    _getMainAxisMinSize(): any;
}
//# sourceMappingURL=LineLayouter.d.mts.map