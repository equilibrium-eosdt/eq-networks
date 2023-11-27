"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dot = void 0;
exports.dot = {
    token: "dot",
    isNative: true,
    isFeeToken: false,
    context: {},
    fees: [
        {
            convert: true,
            amount: 0.1,
            name: "xcm",
            token: "dot",
        },
    ],
    existentialDeposit: 1,
    withdraw: "relay",
    withdrawFee: 0.003222687,
};
