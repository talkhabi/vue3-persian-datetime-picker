declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    date: {
        type: ObjectConstructor;
        default: () => {};
    };
    time: {
        type: ObjectConstructor;
        default: () => {};
    };
    jumpMinute: {
        type: NumberConstructor;
        default: number;
    };
    roundMinute: {
        type: BooleanConstructor;
        default: boolean;
    };
    isDisableTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    getHighlights: {
        type: FunctionConstructor;
        default: null;
    };
    isMore: {
        type: FunctionConstructor;
        default: null;
    };
    isLower: {
        type: FunctionConstructor;
        default: null;
    };
    minDate: {
        type: (BooleanConstructor | ObjectConstructor)[];
        default: boolean;
    };
    maxDate: {
        type: (BooleanConstructor | ObjectConstructor)[];
        default: boolean;
    };
    selectedDates: {
        type: ArrayConstructor;
        default: () => never[];
    };
    convertToLocaleNumber: {
        type: FunctionConstructor;
        default: null;
    };
}>, {}, {}, {
    timeAttributes(): any;
    hourModel: {
        get(): any;
        set(val: any): void;
    };
    minuteModel: {
        get(): any;
        set(val: any): void;
    };
}, {
    setTime(v: any, k: any): void;
    focusNext(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:date" | "update:time")[], "update:date" | "update:time", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    date: {
        type: ObjectConstructor;
        default: () => {};
    };
    time: {
        type: ObjectConstructor;
        default: () => {};
    };
    jumpMinute: {
        type: NumberConstructor;
        default: number;
    };
    roundMinute: {
        type: BooleanConstructor;
        default: boolean;
    };
    isDisableTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    getHighlights: {
        type: FunctionConstructor;
        default: null;
    };
    isMore: {
        type: FunctionConstructor;
        default: null;
    };
    isLower: {
        type: FunctionConstructor;
        default: null;
    };
    minDate: {
        type: (BooleanConstructor | ObjectConstructor)[];
        default: boolean;
    };
    maxDate: {
        type: (BooleanConstructor | ObjectConstructor)[];
        default: boolean;
    };
    selectedDates: {
        type: ArrayConstructor;
        default: () => never[];
    };
    convertToLocaleNumber: {
        type: FunctionConstructor;
        default: null;
    };
}>> & Readonly<{
    "onUpdate:date"?: (...args: any[]) => any;
    "onUpdate:time"?: (...args: any[]) => any;
}>, {
    date: Record<string, any>;
    jumpMinute: number;
    roundMinute: boolean;
    isDisableTime: boolean;
    getHighlights: Function;
    isLower: Function;
    isMore: Function;
    convertToLocaleNumber: Function;
    time: Record<string, any>;
    selectedDates: unknown[];
    minDate: boolean | Record<string, any>;
    maxDate: boolean | Record<string, any>;
}, {}, {
    TimeColumn: any;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=TimeSection.vue.d.ts.map