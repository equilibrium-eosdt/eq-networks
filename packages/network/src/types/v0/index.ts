import type RawEvmChainResponse from "../../data/evm-chain";
import type RawEvmFlowResponse from "../../data/evm-chain";
import type RawEvmSmartContractCallResponse from "../../data/evm-chain";
import type RawEvmSmartContractResponse from "../../data/evm-chain";
import type RawSubstrateChainResponse from "../../data/evm-chain";
import type RawTokenCrosschainResponse from "../../data/evm-chain";

export type EvmChainResponse = typeof RawEvmChainResponse;
export type EvmFlowResponse = typeof RawEvmFlowResponse;
export type EvmSmartContractCallResponse =
  typeof RawEvmSmartContractCallResponse;
export type EvmSmartContractResponse = typeof RawEvmSmartContractResponse;
export type SubstrateChainResponse = typeof RawSubstrateChainResponse;
export type TokenCrosschainResponse = typeof RawTokenCrosschainResponse;

export interface TypeMap {
  "evm-chain": EvmChainResponse;
  "evm-flow": EvmFlowResponse;
  "evm-smart-contract-call": EvmSmartContractCallResponse;
  "evm-smart-contract": EvmSmartContractResponse;
  "substrate-chain": SubstrateChainResponse;
  "token-crosschain": TokenCrosschainResponse;
}
