"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.para = exports.cd815 = exports.cd714 = exports.cd613 = void 0;
exports.cd613 = {
    token: "cd613",
    isNative: false,
    isFeeToken: false,
    context: {
        assetId: 200060013,
        decimals: 10,
    },
    fees: [
        {
            convert: true,
            amount: 0.1,
            name: "xcm",
            token: "cd613",
        },
    ],
    withdraw: "parachain",
    withdrawFee: 0.003222687,
};
exports.cd714 = {
    token: "cd714",
    isNative: false,
    isFeeToken: false,
    context: {
        assetId: 200070014,
        decimals: 10,
    },
    fees: [
        {
            convert: true,
            amount: 0.1,
            name: "xcm",
            token: "cd714",
        },
    ],
    withdraw: "parachain",
    withdrawFee: 0.003222687,
};
exports.cd815 = {
    token: "cd815",
    isNative: false,
    isFeeToken: false,
    context: {
        assetId: 200080015,
        decimals: 10,
    },
    fees: [
        {
            convert: true,
            amount: 0.1,
            name: "xcm",
            token: "cd815",
        },
    ],
    withdraw: "parachain",
    withdrawFee: 0.003222687,
};
exports.para = {
    token: "para",
    isNative: true,
    // fixme check isNative first
    isFeeToken: false,
    context: {
        decimals: 12,
    },
    fees: [
        {
            convert: true,
            amount: 0.1,
            name: "xcm",
            token: "para",
        },
    ],
    withdraw: "parachain",
    withdrawFee: 1.1294943503,
    existentialDeposit: 0.1,
};
