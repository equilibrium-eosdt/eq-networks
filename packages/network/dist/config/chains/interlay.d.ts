import type { DefaultContext, SubstrateChain } from "../../types/v1";
export interface InterlayContext extends DefaultContext {
    currency?: {
        Token?: string;
    };
    decimals?: number;
}
declare const chainDef: SubstrateChain<InterlayContext>;
export default chainDef;
