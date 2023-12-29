"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eq = void 0;
exports.eq = {
    token: "eq",
    isNative: false,
    isFeeToken: false,
    context: {
        isEth: true,
        asset: 25969,
        decimals: 18,
        chainId: 0,
        address: "0xa5ede2fee620ac3d68065ec01f26f9dd99850b82",
        resourceId: "0x000000000000000000000000000000681f812b3d181df0437de3f3e9ba249400",
    },
    fees: [
        {
            convert: true,
            amount: 0.1,
            name: "xcm",
            token: "eqd",
        },
    ],
    withdraw: "eq-bridge",
    withdrawFee: 940000,
};
