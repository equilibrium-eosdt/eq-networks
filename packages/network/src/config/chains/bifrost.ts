import type { DefaultContext, SubstrateChain } from "../../types/v1";

export interface BifrostContext extends DefaultContext {
  assetId?: { VToken2: 0 } | `0x${string}`;
  decimals?: number;
}

const chainDef: SubstrateChain<BifrostContext> = {
  name: "bifrost",
  title: "Bifrost",
  nativeToken: "bnc",
  type: "substrate",
  nodes: [
    "wss://hk.p.bifrost-rpc.liebi.com/ws",
    "wss://bifrost-polkadot.api.onfinality.io/public-ws",
  ],
  logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDUwQzAgMjIuMzg1OCAyMi4zODU4IDAgNTAgMFYwQzc3LjYxNDIgMCAxMDAgMjIuMzg1OCAxMDAgNTBWNTBDMTAwIDc3LjYxNDIgNzcuNjE0MiAxMDAgNTAgMTAwVjEwMEMyMi4zODU4IDEwMCAwIDc3LjYxNDIgMCA1MFY1MFoiIGZpbGw9ImJsYWNrIi8+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8cGF0aCBkPSJNNTAgNzIuMzY4NEgxOS43MzY4TDY1LjEzMTYgMjYuOTczNkg4MC4yNjMxTDUwIDcyLjM2ODRaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjUwIiB5MT0iMjYuOTczNiIgeDI9IjUwIiB5Mj0iNzIuMzY4NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjN0FFRENGIi8+CjxzdG9wIG9mZnNldD0iMC4yMDEzMzMiIHN0b3AtY29sb3I9IiM2OENFRkEiLz4KPHN0b3Agb2Zmc2V0PSIwLjQwMzI0NCIgc3RvcC1jb2xvcj0iIzY4OUNGOCIvPgo8c3RvcCBvZmZzZXQ9IjAuNjAyMDc2IiBzdG9wLWNvbG9yPSIjQUM1N0MwIi8+CjxzdG9wIG9mZnNldD0iMC44MDE4NjciIHN0b3AtY29sb3I9IiNFNjU2NTkiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjJDMjQxIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iNjAuNTI2MyIgaGVpZ2h0PSI0NS4zOTQ3IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkuNzM2OCAyNi45NzM2KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
  paraId: 2030,

  getBalance: (context, pub) => ({
    section: "tokens",
    method: "accounts",
    args: [pub, context?.assetId],
  }),

  getNativeBalance: (_, pub) => ({
    section: "system",
    method: "account",
    args: [pub],
  }),

  parseBalance: (context, assetAccount) => ({
    value: BigInt(assetAccount?.free?.toString?.(10) ?? 0),
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
        V2: {
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
