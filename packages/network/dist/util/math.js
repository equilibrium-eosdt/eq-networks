"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBigDecimals = exports.toBigFraction = exports.toBigint = exports.createBF = void 0;
const createBF = (numStr) => {
    var _a;
    const [int, fra] = ((_a = numStr === null || numStr === void 0 ? void 0 : numStr.split(".")) !== null && _a !== void 0 ? _a : ["0", "0"]);
    return [BigInt(int !== null && int !== void 0 ? int : 0), BigInt(fra !== null && fra !== void 0 ? fra : 0)];
};
exports.createBF = createBF;
const toBigint = (bf, decimals) => {
    const [int, fra] = bf;
    const mul = BigInt(10) ** BigInt(decimals);
    return (int * mul +
        BigInt(
        // fixme change string operation to math operation
        fra.toString(10).slice(0, decimals + 1)));
};
exports.toBigint = toBigint;
const toBigFraction = ({ value: bi, decimals }) => {
    const mul = BigInt(10) ** BigInt(decimals !== null && decimals !== void 0 ? decimals : 0);
    const int = bi / mul;
    const fra = bi % mul;
    return [int, fra];
};
exports.toBigFraction = toBigFraction;
const toBigDecimals = (bf) => {
    const [int, fra] = bf;
    // fixme change string operation to math operation
    const decimals = fra.toString(10).length;
    const mul = BigInt(10) ** BigInt(decimals);
    return {
        value: int * mul + fra,
        decimals,
    };
};
exports.toBigDecimals = toBigDecimals;
