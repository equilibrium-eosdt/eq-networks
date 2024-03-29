"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const acala_1 = __importDefault(require("./acala"));
const astar_1 = __importDefault(require("./astar"));
const bifrost_1 = __importDefault(require("./bifrost"));
const ethereum_1 = __importDefault(require("./ethereum"));
const genshiro_1 = __importDefault(require("./genshiro"));
const interlay_1 = __importDefault(require("./interlay"));
const moonbeam_1 = __importDefault(require("./moonbeam"));
const parallel_1 = __importDefault(require("./parallel"));
const polkadot_1 = __importDefault(require("./polkadot"));
const statemint_1 = __importDefault(require("./statemint"));
exports.default = {
    acala: acala_1.default,
    astar: astar_1.default,
    bifrost: bifrost_1.default,
    ethereum: ethereum_1.default,
    genshiro: genshiro_1.default,
    interlay: interlay_1.default,
    moonbeam: moonbeam_1.default,
    parallel: parallel_1.default,
    polkadot: polkadot_1.default,
    statemint: statemint_1.default,
};
