"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usdt = void 0;
exports.usdt = {
    token: "usdt",
    isNative: false,
    isFeeToken: true,
    context: {
        asset: 1984,
        decimals: 6,
    },
    fees: [
        {
            convert: true,
            amount: 0.1,
            name: "xcm",
            token: "usdt",
        },
    ],
    existentialDeposit: 0.7,
    withdraw: "parachain",
    withdrawFee: 0.7,
};
