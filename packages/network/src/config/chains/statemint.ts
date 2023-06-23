import type { BigDecimals } from "../../util/math";

const getBalance = (pub: `0x${string}`, context?: Record<string, any>) =>
  ({
    section: "assets",
    method: "account",
    args: [context?.asset, pub],
  } as const);

const getNativeBalance = (pub: `0x${string}`) =>
  ({
    section: "system",
    method: "account",
    args: [pub],
  } as const);

const parseBalance = (data: any, context?: Record<string, any>) => {
  return {
    value: BigInt(data?.balance?.toString?.(10) ?? 0),
    decimals: context?.decimals,
  } as BigDecimals;
};

const parseNativeBalance = (data: any, options?: Record<string, any>) => {
  return {
    value: BigInt(data?.data?.free?.toString?.(10) ?? 0),
    decimals: 10,
  };
};

const getTransferArgs = (
  amount: `${number}`,
  pub: `0x${string}`,
  context?: Record<string, any>,
) => {
  return {
    section: "polkadotXcm",
    method: "limitedReserveTransferAssets",
    args: [
      {
        V2: { parents: "1", interior: { X1: { Parachain: "2011" } } },
      },
      {
        V2: {
          parents: 0,
          interior: {
            X1: { AccountId32: { id: pub, network: "Any" } },
          },
        },
      },
      {
        V2: [
          {
            id: {
              Concrete: {
                parents: 0,
                interior: {
                  X2: [{ PalletInstance: 50 }, { GeneralIndex: 1984 }],
                },
              },
            },
            fun: {
              Fungible: amount,
            },
          },
        ],
      },
      0,
      { Limited: "800000000" },
    ],
  } as const;
};

export const statemint = {
  name: "statemint",
  title: "Statemint",
  nativeToken: "dot",
  type: "substrate",
  // balances
  getBalance,
  parseBalance,
  // native balance
  getNativeBalance,
  parseNativeBalance,
  // transfer
  getTransferArgs,

  nodes: [
    "wss://statemint-rpc.polkadot.io",
    "wss://statemint.api.onfinality.io/public-ws",
    "wss://statemint-rpc.dwellir.com;wss://public-rpc.pinknode.io/statemint;wss://statemint.public.curie.radiumblock.co/ws",
  ],

  paraId: 1000,
  logo: null,
};
