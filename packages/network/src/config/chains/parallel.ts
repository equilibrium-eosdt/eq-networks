import type { DefaultContext, SubstrateChain } from "../../types/v1";

export interface ParallelContext extends DefaultContext {
  assetId?: number;
  decimals?: number;
}

const chainDef: SubstrateChain<ParallelContext> = {
  name: "parallel",
  title: "Parallel",
  nativeToken: "para",
  type: "substrate",
  nodes: ["wss://parallel-rpc.dwellir.com", "wss://rpc.parallel.fi"],
  logo: "https://contentv2.equilibrium.io/uploads/parallel_3b34b5d6_ee793f8b57.svg",
  paraId: 2012,

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
    value:
      BigInt(accountInfo?.data?.free?.toString?.(10) ?? 0) -
      BigInt(accountInfo?.data?.miscFrozen?.toString?.(10) ?? 0),
    decimals: 12,
  }),

  getTransferArgs: (context, amount, pub) => ({
    section: "xTokens",
    method: "transfer",
    args: [
      context?.assetId,
      amount,
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
