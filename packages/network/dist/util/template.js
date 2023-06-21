"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isXcmConfig = exports.is0x = void 0;
const math_1 = require("./math");
const is0x = (str) => (str === null || str === void 0 ? void 0 : str.indexOf("0x")) === 0;
exports.is0x = is0x;
const isXcmConfig = (raw, type) => {
    if (!raw) {
        throw new Error("xcm undef");
    }
    const { callIndex, types, args } = raw;
    if (typeof callIndex !== "string") {
        throw new Error("incorrect callIndex");
    }
    if (!Array.isArray(types)) {
        throw new Error("incorrect types");
    }
    if (!Array.isArray(args)) {
        throw new Error("args");
    }
    return !raw.type ? type !== "evm" : raw.type === type;
};
exports.isXcmConfig = isXcmConfig;
const applyTemplate = (template, functions, args, params) => {
    const START = "{";
    const END = "}";
    const DELIMETER = ",";
    let result = template !== null && template !== void 0 ? template : "";
    for (;;) {
        const start = result.indexOf(START);
        if (start === -1) {
            break;
        }
        const end = result.indexOf(END);
        if (end === -1) {
            throw new Error(`incorrect template, received ${template}`);
        }
        const fnWithArgs = result.slice(start + 1, end);
        const [name, ...vars] = fnWithArgs.split(DELIMETER);
        const fn = functions[name];
        if (!fn) {
            throw new Error(`incorrect template function name(${name}), make sure that template is correct`);
        }
        const val = fn(...vars.map((name) => {
            const isNumeric = (0, math_1.isNumStr)(name);
            if (isNumeric) {
                return args[parseInt(name, 10)];
            }
            const param = params[name];
            if (typeof param === "string") {
                if (!(0, exports.is0x)(param)) {
                    throw new Error(`incorrect template param(${name}), make sure that template is correct`);
                }
                // @ts-expect-error
                return Buffer.from(param.slice(2), "hex");
            }
            return param;
        })).slice(2);
        result = result.replace(`${START}${fnWithArgs}${END}`, val);
    }
    return result;
};
