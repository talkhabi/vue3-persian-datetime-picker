declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    jump: {
        type: NumberConstructor;
        default: number;
    };
    formatter: {
        type: FunctionConstructor;
        default: null;
    };
    attributes: {
        type: ObjectConstructor;
        default: () => {};
    };
}>, {}, {
    directionClass: string;
    classFastCounter: string;
    transitionSpeed: number;
    timeout: boolean;
    lastUpdate: number;
    isInputFocused: boolean;
    inputValue: string;
}, {}, {
    update(value: any): void;
    wheelUpdate(e: any): void;
    fastUpdateCounter(e: any): void;
    setDirection(val: any, old: any): void;
    onInputSubmit(): void;
    onInputChange(event: any): void;
}, any, import("vue").ComponentOptionsMixin, "filled"[], "filled", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    jump: {
        type: NumberConstructor;
        default: number;
    };
    formatter: {
        type: FunctionConstructor;
        default: null;
    };
    attributes: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & Readonly<{
    onFilled?: (...args: any[]) => any;
}>, {
    jump: number;
    formatter: Function;
    attributes: Record<string, any>;
}, {}, {
    Btn: any;
    Arrow: any;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=TimeColumn.vue.d.ts.map