"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasKey = exports.is0x = exports.isNumStr = void 0;
const isNumStr = (numStr) => {
    const num = Number(numStr);
    return Number.isFinite(num);
};
exports.isNumStr = isNumStr;
const is0x = (str) => {
    return (str === null || str === void 0 ? void 0 : str.indexOf("0x")) === 0;
};
exports.is0x = is0x;
const hasKey = (key, obj) => !!obj && typeof (obj === null || obj === void 0 ? void 0 : obj[key]) !== "undefined";
exports.hasKey = hasKey;
