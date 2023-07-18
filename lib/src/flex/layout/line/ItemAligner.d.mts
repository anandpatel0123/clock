export default class ItemAligner {
    constructor(line: any);
    _line: any;
    _crossAxisLayoutSize: number;
    _crossAxisLayoutOffset: number;
    _alignItemsSetting: any;
    _recursiveResizeOccured: boolean;
    _isCrossAxisFitToContents: boolean;
    get _layout(): any;
    get _flexContainer(): any;
    setCrossAxisLayoutSize(size: any): void;
    setCrossAxisLayoutOffset(offset: any): void;
    align(): void;
    get recursiveResizeOccured(): boolean;
    _alignItem(item: any): void;
    _alignItemFlexStart(flexItem: any): void;
    _alignItemFlexEnd(flexItem: any): void;
    _alignItemFlexCenter(flexItem: any): void;
    _alignItemStretch(flexItem: any): void;
    _preventStretch(flexItem: any): any;
}
//# sourceMappingURL=ItemAligner.d.mts.map