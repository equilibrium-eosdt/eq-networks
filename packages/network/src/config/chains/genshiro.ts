import type { DefaultContext, SubstrateChain } from "../../types/v1";
import type { BigDecimals } from "../../util/math";

export interface GenshiroContext extends DefaultContext {
  prices?: Record<string, number>;
  asset?: number;
  decimals?: number;
  resourceId?: string;
}

const getBalance = (context?: GenshiroContext, pub?: `0x${string}`) =>
  ({
    section: "system",
    method: "account",
    args: [pub],
  } as const);

const getNativeBalance = getBalance;

const parseBalance = (context?: GenshiroContext, data?: any) => {
  const { decimals, asset } = context ?? {};
  const balances = data?.data?.isV0 ? data.data.asV0.balance : undefined;

  const [, balance] =
    balances?.find(
      ([assetId]: [{ toString: (radix?: number) => `${number}` }]) =>
        assetId.toString(10) === asset?.toString(10),
    ) ?? [];

  const sign = balance?.isPositive ? "" : "-";

  const value =
    sign +
    ((!sign ? balance?.asPositive : balance?.asNegative) ?? 0).toString?.(10);

  return {
    value: BigInt(value),
    decimals,
  } as BigDecimals;
};

const parseNativeBalance = (context?: GenshiroContext, data?: any) => {
  const { decimals, asset } = { decimals: 9, asset: 1734700659 };
  const balances = data?.data?.isV0 ? data.data.asV0.balance : undefined;

  const [, balance] =
    balances?.find(
      ([assetId]: [{ toString: (radix?: number) => `${number}` }]) =>
        assetId.toString(10) === asset?.toString(10),
    ) ?? [];

  const sign = balance?.isPositive ? "" : "-";

  const value =
    sign +
    ((!sign ? balance?.asPositive : balance?.asNegative) ?? 0).toString?.(10);

  return {
    value: BigInt(value),
    decimals,
  } as BigDecimals;
};

const getTransferArgs = (
  context?: GenshiroContext,
  amount?: `${number}`,
  pub?: `0x${string}`,
) => {
  return {
    section: "eqBridge",
    method: "transferNative",
    args: [amount, pub, 7, context?.resourceId],
  } as const;
};

const fns = {
  // balances
  getBalance,
  parseBalance,
  // native balance
  getNativeBalance,
  parseNativeBalance,
  // transfer
  getTransferArgs,
} as const;

const chainDef: SubstrateChain = {
  name: "genshiro",
  title: "Genshiro",
  nativeToken: "gens",
  type: "substrate",
  logo: "https://contentv2.equilibrium.io/uploads/gens_1f06723045.svg",
  nodes: ["wss://node.ksm.genshiro.io"],
  ...fns,
};

export default chainDef;
