import type { DefaultContext, SubstrateChain } from "../../types/v1";

export interface AstarContext extends DefaultContext {
  assetId?: string;
  generalKey?: { data: `0x${string}`; length: number };
  decimals?: number;
}

const chainDef: SubstrateChain<AstarContext> = {
  name: "astar",
  title: "Astar",
  nativeToken: "astr",
  type: "substrate",
  paraId: 2006,
  logo: "https://contentv2.equilibrium.io/uploads/astar_a053e313da.jpg",

  nodes: [
    "wss://rpc.astar.network",
    "wss://astar.public.blastapi.io",
    "wss://astar.api.onfinality.io/public-ws",
  ],

  getBalance: (context, pub) => ({
    section: "assets",
    method: "account",
    args: [context?.assetId, pub],
  }),

  getNativeBalance: (_, pub) => ({
    section: "system",
    method: "account",
    args: [pub],
  }),

  parseBalance: (context, assetAccount) => ({
    value: BigInt(assetAccount?.balance?.toString?.(10) ?? 0),
    decimals: context?.decimals,
  }),

  parseNativeBalance: (_, accountInfo) => ({
    value: BigInt(accountInfo?.data?.free?.toString?.(10) ?? 0),
    decimals: 18,
  }),

  getTransferArgs: (context, amount, pub) => ({
    section: "xTokens",
    method: "transferMultiasset",
    args: [
      {
        V3: {
          id: {
            Concrete: context?.generalKey
              ? {
                  parents: 1,
                  interior: {
                    X2: [
                      { Parachain: 2011 },
                      { GeneralKey: context?.generalKey },
                    ],
                  },
                }
              : {
                  parents: 0,
                  interior: "Here",
                },
          },
          fun: {
            Fungible: amount,
          },
        },
      },
      {
        V3: {
          parents: 1,
          interior: {
            X2: [
              { Parachain: 2011 },
              {
                AccountId32: {
                  id: pub,
                  network: null,
                },
              },
            ],
          },
        },
      },
      { Unlimited: null },
    ],
  }),
};

export default chainDef;
