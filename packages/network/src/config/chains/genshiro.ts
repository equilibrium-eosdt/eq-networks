import type { SubstrateChain } from "../../types/v1";
import type { BigDecimals } from "../../util/math";

const chainDef: SubstrateChain = {
  name: "genshiro",
  title: "Genshiro",
  nativeToken: "gens",
  type: "substrate",
  logo: null,
  nodes: ["wss://node.ksm.genshiro.io"],
};

const getBalance = (pub: `0x${string}`) =>
  ({
    section: "system",
    method: "account",
    args: [pub],
  } as const);

const getNativeBalance = getBalance;

const parseBalance = (data: any, context?: Record<string, any>) => {
  const { decimals, asset } = context ?? {};
  const balances = data?.data?.isV0 ? data.data.asV0.balance : undefined;

  const [, balance] =
    balances?.find(
      ([assetId]: [{ toString: (radix?: number) => `${number}` }]) =>
        assetId.toString(10) === asset?.toString(10),
    ) ?? [];

  return {
    value: BigInt(
      balance?.isPositive
        ? balance.asPositive?.toString?.(10)
        : `-${balance.asNegative?.toString?.(10)}` ?? 0,
    ),

    decimals,
  } as BigDecimals;
};

const parseNativeBalance = parseBalance;

const getTransferArgs = (
  amount: `${number}`,
  pub: `0x${string}`,
  context?: Record<string, any>,
) => {
  return {
    section: "polkadotXcm",
    method: "limitedReserveTransferAssets",
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

export const genshiro = {
  ...chainDef,
  ...fns,
};
