"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ldot = void 0;
exports.ldot = {
    token: "ldot",
    isNative: false,
    isFeeToken: false,
    context: {
        assetId: { Token: "LDOT" },
        decimals: 10,
    },
    fees: [
        {
            convert: true,
            amount: 0.1,
            name: "xcm",
            token: "ldot",
        },
    ],
    withdraw: "parachain",
    withdrawFee: 0.003222687,
};
