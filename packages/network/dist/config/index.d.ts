import * as tokens from "./tokens";
declare const _default: {
    chains: {
        readonly astar: import("../types/v1").SubstrateChain<import("./chains/astar").AstarContext>;
        readonly genshiro: import("../types/v1").SubstrateChain<import("./chains/genshiro").GenshiroContext>;
        readonly interlay: import("../types/v1").SubstrateChain<import("./chains/interlay").InterlayContext>;
        readonly parallel: import("../types/v1").SubstrateChain<import("./chains/parallel").ParallelContext>;
        readonly statemint: import("../types/v1").SubstrateChain<import("./chains/statemint").StatemintContext>;
    };
    tokens: typeof tokens;
};
export default _default;
