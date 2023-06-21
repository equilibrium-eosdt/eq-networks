export const _NOT_IMPLEMENTED = true;

export type ChainType = "substrate" | "evm";
export interface ChainConfig<T extends ChainType> {
  type: T;
  types: string[];
  args: unknown[];
  callIndex: string;
}
