import * as tokens from "./tokens";
declare const _default: {
    chains: {
        readonly genshiro: import("../types/v1").SubstrateChain<import("../types/v1").DefaultContext>;
        readonly statemint: import("../types/v1").SubstrateChain<import("../types/v1").DefaultContext>;
    };
    tokens: typeof tokens;
};
export default _default;
