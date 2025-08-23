declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
    lang: {
        type: ObjectConstructor;
        default: null;
    };
    color: {
        type: StringConstructor;
        default: null;
    };
    hasStep: {
        type: FunctionConstructor;
        default: null;
    };
    years: {
        type: ArrayConstructor;
        default: () => never[];
    };
    months: {
        type: ArrayConstructor;
        default: () => never[];
    };
    monthDays: {
        type: ArrayConstructor;
        default: () => never[];
    };
    selectedDates: {
        type: ArrayConstructor;
        default: () => never[];
    };
    formattedDate: {
        type: StringConstructor;
        default: null;
    };
    hoveredItem: {
        type: DateConstructor;
        default: null;
    };
    locales: {
        type: ArrayConstructor;
        default: () => never[];
    };
    core: {
        type: ObjectConstructor;
        default: null;
    };
    setLocale: {
        type: FunctionConstructor;
        default: null;
    };
    convertToLocaleNumber: {
        type: FunctionConstructor;
        default: null;
    };
}>, {}, {
    vm: import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        range: {
            type: BooleanConstructor;
            default: boolean;
        };
        lang: {
            type: ObjectConstructor;
            default: null;
        };
        color: {
            type: StringConstructor;
            default: null;
        };
        hasStep: {
            type: FunctionConstructor;
            default: null;
        };
        years: {
            type: ArrayConstructor;
            default: () => never[];
        };
        months: {
            type: ArrayConstructor;
            default: () => never[];
        };
        monthDays: {
            type: ArrayConstructor;
            default: () => never[];
        };
        selectedDates: {
            type: ArrayConstructor;
            default: () => never[];
        };
        formattedDate: {
            type: StringConstructor;
            default: null;
        };
        hoveredItem: {
            type: DateConstructor;
            default: null;
        };
        locales: {
            type: ArrayConstructor;
            default: () => never[];
        };
        core: {
            type: ObjectConstructor;
            default: null;
        };
        setLocale: {
            type: FunctionConstructor;
            default: null;
        };
        convertToLocaleNumber: {
            type: FunctionConstructor;
            default: null;
        };
    }>> & Readonly<{
        "onSelect-year"?: (...args: any[]) => any;
        "onSelect-month"?: (...args: any[]) => any;
        "onSelect-day"?: (...args: any[]) => any;
        "onUpdate:hovered-item"?: (...args: any[]) => any;
    }>, {}, {}, {}, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, Readonly<import("vue").ExtractPropTypes<{
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        range: {
            type: BooleanConstructor;
            default: boolean;
        };
        lang: {
            type: ObjectConstructor;
            default: null;
        };
        color: {
            type: StringConstructor;
            default: null;
        };
        hasStep: {
            type: FunctionConstructor;
            default: null;
        };
        years: {
            type: ArrayConstructor;
            default: () => never[];
        };
        months: {
            type: ArrayConstructor;
            default: () => never[];
        };
        monthDays: {
            type: ArrayConstructor;
            default: () => never[];
        };
        selectedDates: {
            type: ArrayConstructor;
            default: () => never[];
        };
        formattedDate: {
            type: StringConstructor;
            default: null;
        };
        hoveredItem: {
            type: DateConstructor;
            default: null;
        };
        locales: {
            type: ArrayConstructor;
            default: () => never[];
        };
        core: {
            type: ObjectConstructor;
            default: null;
        };
        setLocale: {
            type: FunctionConstructor;
            default: null;
        };
        convertToLocaleNumber: {
            type: FunctionConstructor;
            default: null;
        };
    }>> & Readonly<{
        "onSelect-year"?: (...args: any[]) => any;
        "onSelect-month"?: (...args: any[]) => any;
        "onSelect-day"?: (...args: any[]) => any;
        "onUpdate:hovered-item"?: (...args: any[]) => any;
    }>, {}, false, {}, {}, {}, {}, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        range: {
            type: BooleanConstructor;
            default: boolean;
        };
        lang: {
            type: ObjectConstructor;
            default: null;
        };
        color: {
            type: StringConstructor;
            default: null;
        };
        hasStep: {
            type: FunctionConstructor;
            default: null;
        };
        years: {
            type: ArrayConstructor;
            default: () => never[];
        };
        months: {
            type: ArrayConstructor;
            default: () => never[];
        };
        monthDays: {
            type: ArrayConstructor;
            default: () => never[];
        };
        selectedDates: {
            type: ArrayConstructor;
            default: () => never[];
        };
        formattedDate: {
            type: StringConstructor;
            default: null;
        };
        hoveredItem: {
            type: DateConstructor;
            default: null;
        };
        locales: {
            type: ArrayConstructor;
            default: () => never[];
        };
        core: {
            type: ObjectConstructor;
            default: null;
        };
        setLocale: {
            type: FunctionConstructor;
            default: null;
        };
        convertToLocaleNumber: {
            type: FunctionConstructor;
            default: null;
        };
    }>> & Readonly<{
        "onSelect-year"?: (...args: any[]) => any;
        "onSelect-month"?: (...args: any[]) => any;
        "onSelect-day"?: (...args: any[]) => any;
        "onUpdate:hovered-item"?: (...args: any[]) => any;
    }>, {}, {}, {}, import("vue").MethodOptions, {}>;
}, {
    days(): any[];
    selectedYear(): any;
    selectedMonth(): any;
    selectedDay(): any;
    showHeader(): number | boolean;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select-year" | "select-month" | "select-day" | "update:hovered-item")[], "select-year" | "select-month" | "select-day" | "update:hovered-item", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
    lang: {
        type: ObjectConstructor;
        default: null;
    };
    color: {
        type: StringConstructor;
        default: null;
    };
    hasStep: {
        type: FunctionConstructor;
        default: null;
    };
    years: {
        type: ArrayConstructor;
        default: () => never[];
    };
    months: {
        type: ArrayConstructor;
        default: () => never[];
    };
    monthDays: {
        type: ArrayConstructor;
        default: () => never[];
    };
    selectedDates: {
        type: ArrayConstructor;
        default: () => never[];
    };
    formattedDate: {
        type: StringConstructor;
        default: null;
    };
    hoveredItem: {
        type: DateConstructor;
        default: null;
    };
    locales: {
        type: ArrayConstructor;
        default: () => never[];
    };
    core: {
        type: ObjectConstructor;
        default: null;
    };
    setLocale: {
        type: FunctionConstructor;
        default: null;
    };
    convertToLocaleNumber: {
        type: FunctionConstructor;
        default: null;
    };
}>> & Readonly<{
    "onSelect-year"?: (...args: any[]) => any;
    "onSelect-month"?: (...args: any[]) => any;
    "onSelect-day"?: (...args: any[]) => any;
    "onUpdate:hovered-item"?: (...args: any[]) => any;
}>, {
    color: string;
    range: boolean;
    multiple: boolean;
    visible: boolean;
    formattedDate: string;
    monthDays: unknown[];
    years: unknown[];
    months: unknown[];
    lang: Record<string, any>;
    hasStep: Function;
    setLocale: Function;
    convertToLocaleNumber: Function;
    locales: unknown[];
    selectedDates: unknown[];
    core: Record<string, any>;
    hoveredItem: Date;
}, {}, {
    LocaleChange: any;
    SimpleModeColumn: any;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=SimpleMode.vue.d.ts.map