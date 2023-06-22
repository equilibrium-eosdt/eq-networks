"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const evm_chain_1 = __importDefault(require("../data/evm-chain"));
const evm_flow_1 = __importDefault(require("../data/evm-flow"));
const evm_smart_contract_call_1 = __importDefault(require("../data/evm-smart-contract-call"));
const evm_smart_contract_1 = __importDefault(require("../data/evm-smart-contract"));
const substrate_chain_1 = __importDefault(require("../data/substrate-chain"));
const token_crosschain_1 = __importDefault(require("../data/token-crosschain"));
const chains_1 = __importDefault(require("../config/chains"));
const tokens_1 = require("../config/tokens");
const template = (jsonStr, callbackName = "_networkInjectorCallback") => `// file is auto generated; do not edit
const data = ${jsonStr};

window.${callbackName} = () => ({
  version: "v0",
  ...data
});
`;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const outDir = process.env.OUT_DIR || path_1.default.join(process.cwd(), "..", "..", "docs");
    yield promises_1.default.writeFile(path_1.default.join(outDir, "injector.js"), template(JSON.stringify({
        v0: {
            "evm-chain": evm_chain_1.default,
            "evm-flow": evm_flow_1.default,
            "evm-smart-contract-call": evm_smart_contract_call_1.default,
            "evm-smart-contract": evm_smart_contract_1.default,
            "substrate-chain": substrate_chain_1.default,
            "token-crosschain": token_crosschain_1.default,
            "gens-tokens": tokens_1.genshiro,
        },
        v1: {
            chains: chains_1.default,
            crosschain: tokens_1.crosschain,
        },
    }, (_, v) => {
        if (typeof v === "function") {
            return {
                func$: v.toString(),
            };
        }
        return v;
    })));
});
main().catch((e) => {
    console.error(e);
    process.exit(-1);
});
