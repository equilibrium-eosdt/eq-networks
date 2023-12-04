import type { CrosschainTokenConf } from "../../../types/v1";
import type { MoonbeamContext } from "../../chains/moonbeam";

export const glmr: CrosschainTokenConf<MoonbeamContext> = {
  token: "glmr",
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
      token: "glmr",
    },
  ],

  withdraw: "parachain-evm",
  withdrawFee: 1,
};

export const eqd: CrosschainTokenConf = {
  token: "eqd",
  isNative: false,
  isFeeToken: false,

  context: {
    address: "0xFFffFfFF8cdA1707bAF23834d211B08726B1E499",
  },

  fees: [
    {
      convert: true,
      amount: 0.1,
      name: "xcm",
      token: "eqd",
    },
  ],

  withdraw: "parachain-evm",
  withdrawFee: 0.3,
};

export const eq: CrosschainTokenConf = {
  token: "eq",
  isNative: false,
  isFeeToken: false,

  context: {
    address: "0xFffFFfFf8f6267e040D8a0638C576dfBa4F0F6D6",
  },

  fees: [
    {
      convert: true,
      amount: 0.1,
      name: "xcm",
      token: "eqd",
    },
  ],

  withdraw: "parachain-evm",
  withdrawFee: 100,
};
