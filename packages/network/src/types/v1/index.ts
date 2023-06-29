import type chains from "../../config/chains";
import type crosschain from "../../config/tokens/crosschain";
export const _NOT_IMPLEMENTED = true;

export type ChainType = "substrate" | "evm";

export type SubstrateWithdrawType =
  | "relay"
  | "parachain"
  | "parachain-evm"
  | "eq-bridge";

interface BaseChain<T extends ChainType> {
  type: T;
  name: string;
  title: string;
  nativeToken: string;
  logo?: string | null;
}

export interface SubstrateChain extends BaseChain<"substrate"> {
  nodes: string[];
  paraId?: number;
  withdraw?: SubstrateWithdrawType;
}

export interface EVMChain extends BaseChain<"evm"> {}

/** @deprecated still hacks */
export interface TypeMap {
  chains: typeof chains;
  crosschain: typeof crosschain;
}
