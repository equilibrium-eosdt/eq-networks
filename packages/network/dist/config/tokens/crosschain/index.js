"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const acala = __importStar(require("./acala"));
const astar = __importStar(require("./astar"));
const bifrost = __importStar(require("./bifrost"));
const ethereum = __importStar(require("./ethereum"));
const genshiro = __importStar(require("./genshiro"));
const interlay = __importStar(require("./interlay"));
const moonbeam = __importStar(require("./moonbeam"));
const parallel = __importStar(require("./parallel"));
const polkadot = __importStar(require("./polkadot"));
const statemint = __importStar(require("./statemint"));
exports.default = {
    acala,
    astar,
    bifrost,
    ethereum,
    genshiro,
    interlay,
    parallel,
    polkadot,
    moonbeam,
    statemint,
};
