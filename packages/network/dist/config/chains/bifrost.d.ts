import type { DefaultContext, SubstrateChain } from "../../types/v1";
export interface BifrostContext extends DefaultContext {
    assetId?: {
        VToken2: 0;
    } | `0x${string}`;
    decimals?: number;
}
declare const chainDef: SubstrateChain<BifrostContext>;
export default chainDef;
