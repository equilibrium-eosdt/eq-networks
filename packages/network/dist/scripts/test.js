"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const config_1 = __importDefault(require("../config"));
const check_1 = require("../util/check");
const serialize_1 = require("../util/serialize");
const typed_1 = require("../util/typed");
console.info("checking serialize -> deserialize consistency");
const BALANCE_METHOD = "getBalance";
const BALANCE_ARGS = ["0x00"];
(0, assert_1.default)((0, typed_1.getEntries)(config_1.default.tokens.crosschain).every(([chainName, tokens]) => {
    const chain = config_1.default.chains[chainName];
    const serialized = JSON.stringify(chain, (_, v) => {
        if (typeof v === "function") {
            return (0, serialize_1.serializeFunction)(v);
        }
        return v;
    }, 2);
    const deserialized = JSON.parse(serialized, (_, v) => {
        if ((0, check_1.hasKey)("func$", v)) {
            return (0, serialize_1.deserializeFunction)({ func$: v.func$ });
        }
        return v;
    });
    return (0, typed_1.getEntries)(tokens).every(([tokenName, token]) => {
        const { context } = token;
        console.info(`chain ${chainName}, token ${tokenName}, context: ${JSON.stringify(context)}`);
        return [{ method: BALANCE_METHOD, args: BALANCE_ARGS }].every(({ method, args }) => {
            assert_1.default.deepStrictEqual(chain[method](...args, context), deserialized[method](...args, context), `chain[${method}](...${JSON.stringify(args)}) !== deserialized[${method}](...${JSON.stringify(args)})`);
            return true;
        });
    });
}));
