export default class LineLayout {
    constructor(layout: any, startIndex: any, endIndex: any, availableSpace: any);
    _layout: any;
    items: any;
    startIndex: any;
    endIndex: any;
    _availableSpace: any;
    performLayout(): void;
    _setItemSizes(): void;
    _growItemSizes(amount: any): void;
    _shrinkItemSizes(amount: any): void;
    setItemPositions(): void;
    createItemAligner(): ItemAligner;
    _calcLayoutInfo(): void;
    getMainAxisMinSize(): number;
    get numberOfItems(): number;
    get crossAxisLayoutSize(): any;
    _calcCrossAxisMaxLayoutSize(): void;
    _crossAxisMaxLayoutSize: number | undefined;
    _getCrossAxisMaxLayoutSize(): number;
}
import ItemAligner from "./ItemAligner.mjs";
//# sourceMappingURL=LineLayout.d.mts.map