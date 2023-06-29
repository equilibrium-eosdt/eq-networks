import type { BigDecimals } from "../../util/math";
export declare const genshiro: {
    getBalance: (pub: `0x${string}`) => {
        readonly section: "system";
        readonly method: "account";
        readonly args: readonly [`0x${string}`];
    };
    parseBalance: (data: any, context?: Record<string, any>) => BigDecimals;
    getNativeBalance: (pub: `0x${string}`) => {
        readonly section: "system";
        readonly method: "account";
        readonly args: readonly [`0x${string}`];
    };
    parseNativeBalance: (data: any, context?: Record<string, any>) => BigDecimals;
    getTransferArgs: (amount: `${number}`, pub: `0x${string}`, context?: Record<string, any>) => {
        readonly section: "eqBridge";
        readonly method: "transferNative";
        readonly args: readonly [`${number}`, `0x${string}`, 7, any];
    };
    nodes: string[];
    paraId?: number | undefined;
    type: "substrate";
    name: string;
    title: string;
    nativeToken: string;
    logo?: string | null | undefined;
};
