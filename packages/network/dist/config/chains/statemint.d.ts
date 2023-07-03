import type { DefaultContext, SubstrateChain } from "../../types/v1";
export interface StatemintContext extends DefaultContext {
    prices?: Record<string, number>;
    asset?: number;
    decimals?: number;
    resourceId?: string;
}
declare const chainDef: SubstrateChain<StatemintContext>;
export default chainDef;
