"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeFunction = exports.serializeFunction = void 0;
const serializeFunction = (fn) => {
    return {
        func$: fn.toString(),
    };
};
exports.serializeFunction = serializeFunction;
const deserializeFunction = ({ func$ }) => new Function(`return ${func$}`)();
exports.deserializeFunction = deserializeFunction;
