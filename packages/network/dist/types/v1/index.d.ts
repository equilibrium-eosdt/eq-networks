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
type Parser<T extends {} = any, C extends DefaultContext = DefaultContext> = (context?: C, data?: T) => BigDecimals;
type Getter<A extends any[], T extends {} = any, C extends DefaultContext = DefaultContext> = (context?: C, ...args: A) => T;
export interface SubstrateChain extends BaseChain<"substrate"> {
    nodes: string[];
    paraId?: number;
    withdraw?: SubstrateWithdrawType;
    getBalance: Getter<[`0x${string}`]>;
    getNativeBalance: Getter<[`0x${string}`]>;
    getTransferArgs: Getter<[`${number}`, `0x${string}`]>;
    parseBalance: Parser;
    parseNativeBalance: Parser;
}
export interface EVMChain extends BaseChain<"evm"> {
}
/** @deprecated still hacks */
export interface TypeMap {
    chains: typeof chains;
    crosschain: typeof crosschain;
}
export {};
