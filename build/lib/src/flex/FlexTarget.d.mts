/**
 * This is the connection between the render tree with the layout tree of this flex container/item.
 */
export default class FlexTarget {
    constructor(target: any);
    _target: any;
    /**
     * Possible values (only in case of container):
     * bit 0: has changed or contains items with changes
     * bit 1: width changed
     * bit 2: height changed
     */
    _recalc: number;
    _enabled: boolean;
    x: number;
    y: number;
    w: number;
    h: number;
    _originalX: number;
    _originalY: number;
    _originalWidth: number;
    _originalHeight: number;
    _flex: FlexContainer | null;
    _flexItem: FlexItem | null;
    _flexItemDisabled: boolean;
    _items: any[] | null;
    get flexLayout(): import("./layout/FlexLayout.mjs").default | null;
    layoutFlexTree(): void;
    get target(): any;
    set flex(arg: FlexContainer | null);
    get flex(): FlexContainer | null;
    set flexItem(arg: false | FlexItem | null);
    get flexItem(): false | FlexItem | null;
    _enableFlex(): void;
    _disableFlex(): void;
    _enableChildrenAsFlexItems(): void;
    _disableChildrenAsFlexItems(): void;
    _enableFlexItem(): void;
    _disableFlexItem(): void;
    _resetOffsets(): void;
    _ensureFlexItem(): void;
    _checkEnabled(): void;
    _enable(): void;
    _disable(): void;
    isEnabled(): boolean;
    isFlexEnabled(): boolean;
    isFlexItemEnabled(): boolean;
    _restoreTargetToNonFlex(): void;
    _setupTargetForFlex(): void;
    setParent(from: any, to: any): void;
    get flexParent(): any;
    setVisible(v: any): void;
    get items(): any[];
    _getFlexItems(): any[];
    _changedChildren(): void;
    _clearFlexItemsCache(): void;
    setLayout(x: any, y: any, w: any, h: any): void;
    changedDimensions(changeWidth?: boolean, changeHeight?: boolean): void;
    changedContents(): void;
    forceLayout(): void;
    isChanged(): boolean;
    _updateRecalc(changeExternalWidth?: boolean, changeExternalHeight?: boolean): void;
    getNewRecalcFlags(flags: any): number;
    _updateRecalcBottomUp(childRecalc: any): void;
    _getRecalcFromChangedChildRecalc(childRecalc: any): number;
    get recalc(): number;
    clearRecalcFlag(): void;
    enableLocalRecalcFlag(): void;
    get originalX(): number;
    setOriginalXWithoutUpdatingLayout(v: any): void;
    get originalY(): number;
    setOriginalYWithoutUpdatingLayout(v: any): void;
    set originalWidth(arg: number);
    get originalWidth(): number;
    set originalHeight(arg: number);
    get originalHeight(): number;
    get funcX(): any;
    get funcY(): any;
    get funcW(): any;
    get funcH(): any;
}
import FlexContainer from "./FlexContainer.mjs";
import FlexItem from "./FlexItem.mjs";
//# sourceMappingURL=FlexTarget.d.mts.map