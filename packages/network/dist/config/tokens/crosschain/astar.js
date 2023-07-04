"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eqd = exports.astr = void 0;
exports.astr = {
    token: "astr",
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
            token: "astr",
        },
    ],
    withdraw: "parachain",
    withdrawFee: 0.004662276,
    existentialDeposit: 0.1,
};
exports.eqd = {
    token: "eqd",
    isNative: false,
    isFeeToken: false,
    context: {
        assetId: "18446744073709551629",
        generalKey: {
            data: "0x6571640000000000000000000000000000000000000000000000000000000000",
            length: 3,
        },
        decimals: 9,
    },
    fees: [
        {
            convert: true,
            amount: 0.1,
            name: "xcm",
            token: "eqd",
        },
    ],
    withdraw: "parachain",
    withdrawFee: 0.02,
};
