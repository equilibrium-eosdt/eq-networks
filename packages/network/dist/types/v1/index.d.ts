import type chains from "../../config/chains";
import type crosschain from "../../config/tokens/crosschain";
export declare const _NOT_IMPLEMENTED = true;
export type ChainType = "substrate" | "evm";
export interface ChainConfig<T extends ChainType> {
    type: T;
    types: string[];
    args: unknown[];
    callIndex: string;
}
/** @deprecated still hacks */
export interface TypeMap {
    chains: typeof chains;
    crosschain: typeof crosschain;
}
