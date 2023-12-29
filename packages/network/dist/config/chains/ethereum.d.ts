import { DefaultContext } from "../../types/v1";
export interface EthereumContext extends DefaultContext {
    /** @deprecated */
    isEth?: boolean;
    prices?: Record<string, number>;
    asset?: number;
    decimals: number;
    resourceId: `0x${string}`;
    chainId?: number;
    address?: `0x${string}`;
}
declare function getTransferArgs(context: EthereumContext, amount: `0x${number}`, pub: `0x${string}`): {
    readonly functionName: "deposit";
    readonly args: readonly [7, `0x${string}`, `0x${string}`];
    readonly value: bigint;
};
declare const _default: {
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
        readonly getTransferArgs: typeof getTransferArgs;
    };
    type: "evm";
    name: string;
    title: string;
    nativeToken: string;
    logo?: string | null | undefined;
    paraId?: number | undefined;
};
export default _default;
