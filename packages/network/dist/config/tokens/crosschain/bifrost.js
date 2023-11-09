"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vdot = void 0;
exports.vdot = {
    token: "vdot",
    isNative: false,
    isFeeToken: false,
    context: {
        assetId: { VToken2: 0 },
        decimals: 10,
    },
    fees: [
        {
            convert: true,
            amount: 0.1,
            name: "xcm",
            token: "vdot",
        },
    ],
    withdraw: "parachain",
    withdrawFee: 0.003222687,
};
