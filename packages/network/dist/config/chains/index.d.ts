declare const _default: {
    readonly acala: import("../../types/v1").SubstrateChain<import("./acala").AcalaContext>;
    readonly astar: import("../../types/v1").SubstrateChain<import("./astar").AstarContext>;
    readonly bifrost: import("../../types/v1").SubstrateChain<import("./bifrost").BifrostContext>;
    readonly ethereum: {
        info: {
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "destinationChainID";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "resourceID";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "data";
                    readonly type: "bytes";
                }];
                readonly name: "deposit";
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
            }];
            readonly address: "0x267c4d894db79a3023e266B84401e58f7434e1F1";
            readonly spender: "0xe2a1D7C0c2ED4d3937bd6f93d9aCeA7498232F2F";
            readonly nodes: readonly ["https://eth.llamarpc.com"];
            readonly getTransferArgs: (context: import("./ethereum").EthereumContext, amount: `0x${number}`, pub: `0x${string}`) => {
                readonly functionName: "deposit";
                readonly args: readonly [7, `0x${string}`, `0x${string}`];
                readonly value: bigint;
            };
        };
        type: "evm";
        name: string;
        title: string;
        nativeToken: string;
        logo?: string | null | undefined;
        paraId?: number | undefined;
    };
    readonly genshiro: import("../../types/v1").SubstrateChain<import("./genshiro").GenshiroContext>;
    readonly interlay: import("../../types/v1").SubstrateChain<import("./interlay").InterlayContext>;
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
            readonly getTransferArgs: (context: import("./moonbeam").MoonbeamContext, amount: `0x${number}`, pub: `0x${string}`) => {
                readonly functionName: "transfer";
                readonly args: readonly [`0x${string}`, bigint, {
                    readonly parents: 1;
                    readonly interior: `0x${string}`[];
                }, bigint];
            };
        };
        type: "evm";
        name: string;
        title: string;
        nativeToken: string;
        logo?: string | null | undefined;
        paraId?: number | undefined;
    };
    readonly parallel: import("../../types/v1").SubstrateChain<import("./parallel").ParallelContext>;
    readonly polkadot: import("../../types/v1").SubstrateChain<import("./polkadot").PolkadotContext>;
    readonly statemint: import("../../types/v1").SubstrateChain<import("./statemint").StatemintContext>;
};
export default _default;
