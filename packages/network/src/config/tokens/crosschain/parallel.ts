import type { CrosschainTokenConf } from "../../../types/v1";
import type { ParallelContext } from "../../chains/parallel";

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

export const cd714: CrosschainTokenConf<ParallelContext> = {
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

export const cd815: CrosschainTokenConf<ParallelContext> = {
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

export const para: CrosschainTokenConf<ParallelContext> = {
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

export const sdot: CrosschainTokenConf<ParallelContext> = {
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
