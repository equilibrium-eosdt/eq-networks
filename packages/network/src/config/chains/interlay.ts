import type { DefaultContext, SubstrateChain } from "../../types/v1";

export interface InterlayContext extends DefaultContext {
  currency?: {
    Token?: string;
  };
  decimals?: number;
}

const chainDef: SubstrateChain<InterlayContext> = {
  name: "interlay",
  title: "Interlay",
  nativeToken: "intr",
  type: "substrate",
  paraId: 2032,
  logo: "https://contentv2.equilibrium.io/uploads/intr_3a63fb417c.svg",
  nodes: ["wss://interlay.api.onfinality.io/public-ws"],

  getBalance: (context, pub) => ({
    section: "tokens",
    method: "accounts",
    args: [pub, context?.currency],
  }),

  getNativeBalance: (_, pub) => ({
    section: "tokens",
    method: "accounts",
    args: [
      pub,
      {
        Token: "INTR",
      },
    ],
  }),

  parseBalance: (context, balance) => ({
    value: BigInt(balance?.free?.toString?.(10) ?? 0),
    decimals: context?.decimals,
  }),

  parseNativeBalance: (_, balance) => ({
    value: BigInt(balance?.free?.toString?.(10) ?? 0),
    decimals: 10,
  }),

  getTransferArgs: (context, amount, pub) => ({
    section: "xTokens",
    method: "transfer",
    args: [
      context?.currency,
      amount,
      {
        V3: {
          parents: 1,
          interior: {
            X2: [
              { Parachain: 2011 },
              { AccountId32: { id: pub, network: null } },
            ],
          },
        },
      },
      { Unlimited: null },
    ],
  }),
};

export default chainDef;
