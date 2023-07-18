declare class FlexContainer {
    constructor(item: any);
    _item: any;
    _layout: Layout;
    _horizontal: boolean;
    _reverse: boolean;
    _wrap: boolean;
    _alignItems: string;
    _justifyContent: string;
    _alignContent: string;
    _paddingLeft: number;
    _paddingTop: number;
    _paddingRight: number;
    _paddingBottom: number;
    get item(): any;
    _changedDimensions(): void;
    _changedContents(): void;
    set direction(arg: string);
    get direction(): string;
    set wrap(arg: boolean);
    get wrap(): boolean;
    set alignItems(arg: string);
    get alignItems(): string;
    set alignContent(arg: string);
    get alignContent(): string;
    set justifyContent(arg: string);
    get justifyContent(): string;
    set padding(arg: number);
    get padding(): number;
    set paddingLeft(arg: number);
    get paddingLeft(): number;
    set paddingTop(arg: number);
    get paddingTop(): number;
    set paddingRight(arg: number);
    get paddingRight(): number;
    set paddingBottom(arg: number);
    get paddingBottom(): number;
    patch(settings: any): void;
}
declare namespace FlexContainer {
    const ALIGN_ITEMS: string[];
    const ALIGN_CONTENT: string[];
    const JUSTIFY_CONTENT: string[];
}
export default FlexContainer;
import Layout from "./layout/FlexLayout.mjs";
//# sourceMappingURL=FlexContainer.d.mts.map