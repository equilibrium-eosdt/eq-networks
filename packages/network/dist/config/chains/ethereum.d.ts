import { DefaultContext } from "../../types/v1";
export interface EthereumContext extends DefaultContext {
    /** @deprecated */
    isEth?: boolean;
    prices?: Record<string, number>;
    asset?: number;
    decimals?: number;
    resourceId?: string;
    chainId?: number;
}
declare const _default: {
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
export default _default;
