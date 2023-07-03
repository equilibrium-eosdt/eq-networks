"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intr = exports.ibtc = void 0;
exports.ibtc = {
    token: "ibtc",
    isNative: false,
    isFeeToken: false,
    context: {
        currency: { Token: "IBTC" },
        decimals: 8,
    },
    fees: [
        {
            convert: true,
            amount: 0.1,
            name: "xcm",
            token: "ibtc",
        },
    ],
    withdraw: "parachain",
    withdrawFee: 0.000188632,
};
exports.intr = {
    token: "intr",
    isNative: true,
    /* fixme check isNative first  */
    isFeeToken: false,
    context: {
        currency: { Token: "INTR" },
        decimals: 10,
    },
    fees: [
        {
            convert: true,
            amount: 0.1,
            name: "xcm",
            token: "intr",
        },
    ],
    existentialDeposit: 0.1,
    withdraw: "parachain",
    withdrawFee: 0.0000062,
};
