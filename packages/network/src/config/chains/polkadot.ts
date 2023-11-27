import type { DefaultContext, SubstrateChain } from "../../types/v1";
// import type { BigDecimals } from "../../util/math";

export interface PolkadotContext extends DefaultContext {}

const getNativeBalance = (context?: PolkadotContext, pub?: `0x${string}`) =>
  ({
    section: "system",
    method: "account",
    args: [pub],
  } as const);

const getBalance = getNativeBalance;

const parseNativeBalance = (context?: PolkadotContext, data?: any) => {
  return {
    value: BigInt(data?.data?.free?.toString?.(10) ?? 0),
    decimals: 10,
  };
};

const parseBalance = parseNativeBalance;

const getTransferArgs = (
  context?: PolkadotContext,
  amount?: `${number}`,
  pub?: `0x${string}`,
) => {
  return {
    section: "xcmPallet",
    method: "reserveTransferAssets",
    args: [
      {
        V3: { parents: "0", interior: { X1: { Parachain: "2011" } } },
      },
      {
        V3: {
          parents: 0,
          interior: {
            X1: { AccountId32: { id: pub, network: null } },
          },
        },
      },
      {
        V3: [
          {
            id: {
              Concrete: {
                parents: 0,
                interior: "Here",
              },
            },
            fun: {
              Fungible: amount,
            },
          },
        ],
      },
      0,
    ],
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

const chainDef: SubstrateChain<PolkadotContext> = {
  name: "polkadot",
  title: "Polkadot",
  nativeToken: "dot",
  type: "substrate",
  logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIiByeD0iNDAwIiBmaWxsPSIjRTYwMDdBIi8+CjxwYXRoIGQ9Ik00MDAuMDcyIDI0Ni4wMzhDNDUyLjY2NiAyNDYuMDM4IDQ5NS4zMDIgMjIxLjE4MSA0OTUuMzAyIDE5MC41MTlDNDk1LjMwMiAxNTkuODU3IDQ1Mi42NjYgMTM1IDQwMC4wNzIgMTM1QzM0Ny40NzggMTM1IDMwNC44NDMgMTU5Ljg1NyAzMDQuODQzIDE5MC41MTlDMzA0Ljg0MyAyMjEuMTgxIDM0Ny40NzggMjQ2LjAzOCA0MDAuMDcyIDI0Ni4wMzhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDAwLjA3MiA2NjQuMzY0QzQ1Mi42NjYgNjY0LjM2NCA0OTUuMzAyIDYzOS41MDcgNDk1LjMwMiA2MDguODQ1QzQ5NS4zMDIgNTc4LjE4MyA0NTIuNjY2IDU1My4zMjYgNDAwLjA3MiA1NTMuMzI2QzM0Ny40NzggNTUzLjMyNiAzMDQuODQzIDU3OC4xODMgMzA0Ljg0MyA2MDguODQ1QzMwNC44NDMgNjM5LjUwNyAzNDcuNDc4IDY2NC4zNjQgNDAwLjA3MiA2NjQuMzY0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTI2Ny4zNjMgMzIyLjg5QzI5My42NiAyNzcuMjMzIDI5My40ODkgMjI3Ljc4NSAyNjYuOTgyIDIxMi40NDNDMjQwLjQ3NSAxOTcuMTAyIDE5Ny42NjggMjIxLjY3NyAxNzEuMzcxIDI2Ny4zMzNDMTQ1LjA3NCAzMTIuOTg5IDE0NS4yNDUgMzYyLjQzOCAxNzEuNzUzIDM3Ny43NzlDMTk4LjI2IDM5My4xMjEgMjQxLjA2NiAzNjguNTQ2IDI2Ny4zNjMgMzIyLjg5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTYyOC43MzEgNTMyLjAyN0M2NTUuMDI4IDQ4Ni4zNzEgNjU0Ljg3MiA0MzYuOTMxIDYyOC4zODIgNDIxLjZDNjAxLjg5MyA0MDYuMjY5IDU1OS4xMDEgNDMwLjg1MiA1MzIuODA0IDQ3Ni41MDhDNTA2LjUwNyA1MjIuMTY1IDUwNi42NjMgNTcxLjYwNSA1MzMuMTUzIDU4Ni45MzZDNTU5LjY0MyA2MDIuMjY3IDYwMi40MzQgNTc3LjY4NCA2MjguNzMxIDUzMi4wMjdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjY2Ljk5NiA1ODYuOTIzQzI5My41MDMgNTcxLjU4MiAyOTMuNjc0IDUyMi4xMzMgMjY3LjM3NyA0NzYuNDc3QzI0MS4wOCA0MzAuODIxIDE5OC4yNzQgNDA2LjI0NiAxNzEuNzY2IDQyMS41ODdDMTQ1LjI1OSA0MzYuOTI5IDE0NS4wODggNDg2LjM3NyAxNzEuMzg1IDUzMi4wMzRDMTk3LjY4MiA1NzcuNjkgMjQwLjQ4OCA2MDIuMjY1IDI2Ni45OTYgNTg2LjkyM1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02MjguNDA1IDM3Ny43OTJDNjU0Ljg5NCAzNjIuNDYxIDY1NS4wNTEgMzEzLjAyIDYyOC43NTQgMjY3LjM2NEM2MDIuNDU3IDIyMS43MDggNTU5LjY2NSAxOTcuMTI0IDUzMy4xNzUgMjEyLjQ1NUM1MDYuNjg2IDIyNy43ODcgNTA2LjUzIDI3Ny4yMjcgNTMyLjgyNyAzMjIuODgzQzU1OS4xMjQgMzY4LjUzOSA2MDEuOTE1IDM5My4xMjMgNjI4LjQwNSAzNzcuNzkyWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==",
  nodes: ["wss://dot-rpc.stakeworld.io", "wss://rpc.polkadot.io"],
  ...fns,
};

export default chainDef;
