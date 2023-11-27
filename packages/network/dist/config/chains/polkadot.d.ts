import type { DefaultContext, SubstrateChain } from "../../types/v1";
export interface PolkadotContext extends DefaultContext {
}
declare const chainDef: SubstrateChain<PolkadotContext>;
export default chainDef;
