"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sdot = exports.para = exports.cd815 = exports.cd714 = void 0;
/*
export const cd613: CrosschainTokenConf<ParallelContext> = {
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
*/
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
    withdrawFee: 0.004,
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
    withdrawFee: 0.004,
};
exports.para = {
    token: "para",
    isNative: true,
    // fixme check isNative first
    isFeeToken: false,
    context: {
        assetId: 1,
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
exports.sdot = {
    token: "sdot",
    isNative: false,
    isFeeToken: false,
    context: {
        assetId: 1001,
        decimals: 10,
    },
    fees: [
        {
            convert: true,
            amount: 0.1,
            name: "xcm",
            token: "sdot",
        },
    ],
    withdraw: "parachain",
    withdrawFee: 0.004,
};
