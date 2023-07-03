import type { DefaultContext, SubstrateChain } from "../../types/v1";
export interface GenshiroContext extends DefaultContext {
    prices?: Record<string, number>;
    asset?: number;
    decimals?: number;
    resourceId?: string;
}
declare const chainDef: SubstrateChain<GenshiroContext>;
export default chainDef;
