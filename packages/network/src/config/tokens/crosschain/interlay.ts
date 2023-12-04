import type { CrosschainTokenConf } from "../../../types/v1";
import type { InterlayContext } from "../../chains/interlay";

export const ibtc: CrosschainTokenConf<InterlayContext> = {
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
  withdrawFee: 0.0000007,
};

export const intr: CrosschainTokenConf<InterlayContext> = {
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
  withdrawFee: 0.0002,
};
