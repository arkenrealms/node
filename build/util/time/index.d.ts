import _fancyTimeFormat from './fancyTimeFormat';
export declare const date: () => string;
export declare const now: () => Date;
export declare const fancyTimeFormat: typeof _fancyTimeFormat;
export declare function removeTimezoneOffset(date: any): Date;
declare const _default: {
    date: () => string;
    now: () => Date;
    fancyTimeFormat: typeof _fancyTimeFormat;
    removeTimezoneOffset: typeof removeTimezoneOffset;
};
export default _default;
