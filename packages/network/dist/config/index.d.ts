import * as tokens from "./tokens";
declare const _default: {
    chains: {
        readonly acala: import("../types/v1").SubstrateChain<import("./chains/acala").AcalaContext>;
        readonly astar: import("../types/v1").SubstrateChain<import("./chains/astar").AstarContext>;
        readonly bifrost: import("../types/v1").SubstrateChain<import("./chains/bifrost").BifrostContext>;
        readonly genshiro: import("../types/v1").SubstrateChain<import("./chains/genshiro").GenshiroContext>;
        readonly interlay: import("../types/v1").SubstrateChain<import("./chains/interlay").InterlayContext>;
        readonly parallel: import("../types/v1").SubstrateChain<import("./chains/parallel").ParallelContext>;
        readonly statemint: import("../types/v1").SubstrateChain<import("./chains/statemint").StatemintContext>;
    };
    tokens: typeof tokens;
};
export default _default;
