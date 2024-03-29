import type { DefaultContext, SubstrateChain } from "../../types/v1";
export interface AcalaContext extends DefaultContext {
    assetId?: {
        Token: string;
    } | {
        StableAssetPoolToken: number;
    } | `0x${string}`;
    decimals?: number;
}
declare const chainDef: SubstrateChain<AcalaContext>;
export default chainDef;
