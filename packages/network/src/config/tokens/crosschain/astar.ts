import type { CrosschainTokenConf } from "../../../types/v1";
import type { AstarContext } from "../../chains/astar";

export const astr: CrosschainTokenConf<AstarContext> = {
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
  withdrawFee: 1.1,
  existentialDeposit: 0.1,
};

export const eqd: CrosschainTokenConf<AstarContext> = {
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
