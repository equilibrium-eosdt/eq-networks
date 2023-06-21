"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const config_1 = __importDefault(require("../config"));
const check_1 = require("../util/check");
const serializeFunction = (fn) => {
    return {
        func$: fn.toString(),
    };
};
console.log(JSON.stringify(config_1.default, (_, v) => {
    if (typeof v === "function") {
        return serializeFunction(v);
    }
    return v;
}, 2));
const serialized = JSON.stringify(config_1.default.chains.statemint, (_, v) => {
    if (typeof v === "function") {
        return serializeFunction(v);
    }
    return v;
}, 2);
const deserialized = JSON.parse(serialized, (_, v) => {
    if ((0, check_1.hasKey)("func$", v)) {
        return new Function(`return ${v.func$}`)();
    }
    return v;
});
assert_1.default.deepStrictEqual(deserialized.getBalance("0x00", { asset: 1984 }), {
    section: "assets",
    method: "account",
    args: [1984, "0x00"],
});
