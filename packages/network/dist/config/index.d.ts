import * as tokens from "./tokens";
declare const _default: {
    chains: {
        readonly acala: import("../types/v1").SubstrateChain<import("./chains/acala").AcalaContext>;
        readonly astar: import("../types/v1").SubstrateChain<import("./chains/astar").AstarContext>;
        readonly bifrost: import("../types/v1").SubstrateChain<import("./chains/bifrost").BifrostContext>;
        readonly ethereum: {
            info: {
                readonly nodes: readonly ["https://eth.llamarpc.com"];
            };
            type: "evm";
            name: string;
            title: string;
            nativeToken: string;
            logo?: string | null | undefined;
            paraId?: number | undefined;
        };
        readonly genshiro: import("../types/v1").SubstrateChain<import("./chains/genshiro").GenshiroContext>;
        readonly interlay: import("../types/v1").SubstrateChain<import("./chains/interlay").InterlayContext>;
        readonly moonbeam: {
            info: {
                readonly abi: readonly [{
                    readonly inputs: readonly [{
                        readonly internalType: "address";
                        readonly name: "currencyAddress";
                        readonly type: "address";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "amount";
                        readonly type: "uint256";
                    }, {
                        readonly components: readonly [{
                            readonly internalType: "uint8";
                            readonly name: "parents";
                            readonly type: "uint8";
                        }, {
                            readonly internalType: "bytes[]";
                            readonly name: "interior";
                            readonly type: "bytes[]";
                        }];
                        readonly internalType: "struct Xtokens.Multilocation";
                        readonly name: "destination";
                        readonly type: "tuple";
                    }, {
                        readonly internalType: "uint64";
                        readonly name: "weight";
                        readonly type: "uint64";
                    }];
                    readonly name: "transfer";
                    readonly outputs: readonly [];
                    readonly stateMutability: "nonpayable";
                    readonly type: "function";
                }];
                readonly address: "0x0000000000000000000000000000000000000804";
                readonly nodes: readonly ["wss://wss.api.moonbeam.network"];
            };
            type: "evm";
            name: string;
            title: string;
            nativeToken: string;
            logo?: string | null | undefined;
            paraId?: number | undefined;
        };
        readonly parallel: import("../types/v1").SubstrateChain<import("./chains/parallel").ParallelContext>;
        readonly polkadot: import("../types/v1").SubstrateChain<import("./chains/polkadot").PolkadotContext>;
        readonly statemint: import("../types/v1").SubstrateChain<import("./chains/statemint").StatemintContext>;
    };
    tokens: typeof tokens;
};
export default _default;
