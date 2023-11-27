import type { DefaultContext } from "../../types/v1";
export interface MoonbeamContext extends DefaultContext {
    address?: `0x${string}`;
}
declare const _default: {
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
export default _default;
