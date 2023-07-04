import type { DefaultContext, SubstrateChain } from "../../types/v1";
export interface ParallelContext extends DefaultContext {
    assetId?: number;
    decimals?: number;
}
declare const chainDef: SubstrateChain<ParallelContext>;
export default chainDef;
