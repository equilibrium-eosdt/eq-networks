"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eq = exports.eqd = exports.glmr = void 0;
exports.glmr = {
    token: "glmr",
    isNative: true,
    // fixme check isNative first
    isFeeToken: false,
    context: {
        decimals: 18,
    },
    fees: [
        {
            convert: true,
            amount: 0.1,
            name: "xcm",
            token: "glmr",
        },
    ],
    withdraw: "parachain-evm",
    withdrawFee: 1,
};
exports.eqd = {
    token: "eqd",
    isNative: false,
    isFeeToken: false,
    context: {
        address: "0xFFffFfFF8cdA1707bAF23834d211B08726B1E499",
        decimals: 9,
    },
    fees: [
        {
            convert: true,
            amount: 0.1,
            name: "xcm",
            token: "eq",
        },
    ],
    withdraw: "parachain-evm",
    withdrawFee: 1.0,
};
exports.eq = {
    token: "eq",
    isNative: false,
    isFeeToken: false,
    context: {
        address: "0xFffFFfFf8f6267e040D8a0638C576dfBa4F0F6D6",
        decimals: 9,
    },
    fees: [
        {
            convert: true,
            amount: 0.1,
            name: "xcm",
            token: "eq",
        },
    ],
    withdraw: "parachain-evm",
    withdrawFee: 100,
};
