import type { DefaultContext, SubstrateChain } from "../../types/v1";
export interface AstarContext extends DefaultContext {
    assetId?: string;
    generalKey?: {
        data: `0x${string}`;
        length: number;
    };
    decimals?: number;
}
declare const chainDef: SubstrateChain<AstarContext>;
export default chainDef;
