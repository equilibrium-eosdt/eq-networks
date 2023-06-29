import type chains from "../../config/chains";
import type crosschain from "../../config/tokens/crosschain";
import type { BigDecimals } from "../../util/math";
export declare const _NOT_IMPLEMENTED = true;
export type ChainType = "substrate" | "evm";
export type SubstrateWithdrawType = "relay" | "parachain" | "parachain-evm" | "eq-bridge";
interface BaseChain<T extends ChainType> {
    type: T;
    name: string;
    title: string;
    nativeToken: string;
    logo?: string | null;
}
export type DefaultContext = Record<string, any>;
type Parser<C extends DefaultContext = DefaultContext, T extends {} = any> = (context?: C, data?: T) => BigDecimals;
type Getter<A extends any[], C extends DefaultContext = DefaultContext, T extends {} = any> = (context?: C, ...args: A) => T;
export interface SubstrateChain<C extends DefaultContext = DefaultContext> extends BaseChain<"substrate"> {
    nodes: string[];
    paraId?: number;
    withdraw?: SubstrateWithdrawType;
    getBalance: Getter<[`0x${string}`], C>;
    getNativeBalance: Getter<[`0x${string}`, C]>;
    getTransferArgs: Getter<[`${number}`, `0x${string}`, C]>;
    parseBalance: Parser<C>;
    parseNativeBalance: Parser<C>;
}
export interface EVMChain extends BaseChain<"evm"> {
}
export interface CrosschainTokenConf<C extends DefaultContext = DefaultContext> {
    token: string;
    context?: C;
    isNative?: boolean;
    isFeeToken?: boolean;
    fees?: {
        amount: number;
        convert?: boolean;
        name: string;
        token: string;
    }[];
    existentialDeposit?: number;
}
/** @deprecated still hacks */
export interface TypeMap {
    chains: typeof chains;
    crosschain: typeof crosschain;
}
export {};
