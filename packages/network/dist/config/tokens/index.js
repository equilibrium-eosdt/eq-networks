"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crosschain = exports.genshiro = exports.equilibrium = void 0;
const crosschain_1 = __importDefault(require("./crosschain"));
exports.crosschain = crosschain_1.default;
exports.equilibrium = {
    ldot: {
        displayName: "LDOT",
        title: "Liquidity for Staked DOT",
        imageExt: ".svg",
    },
    sdot: {
        displayName: "SDOT",
        title: "Parallel SDOT",
        imageExt: ".svg",
    },
    tdot: {
        displayName: "TDOT",
        title: "Taiga Protocol",
        imageExt: ".svg",
    },
    vdot: {
        displayName: "VDOT",
        title: "Bifrost vDOT",
        imageExt: ".svg",
    },
};
exports.genshiro = {
    gens: {
        displayName: "GENS",
        title: "Genshiro",
    },
    crv: {
        displayName: "CRV",
        title: "Curve DAO Token",
        imageExt: ".svg",
    },
};
