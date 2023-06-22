export declare const isNumStr: (numStr?: string) => numStr is `${number}`;
export declare const is0x: (str?: string) => str is `0x${string}`;
export declare const hasKey: <T extends string>(key: T, obj: any) => obj is Record<T, unknown>;
