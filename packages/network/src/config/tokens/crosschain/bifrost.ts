import type { CrosschainTokenConf } from "../../../types/v1";
import type { BifrostContext } from "../../chains/bifrost";

export const vdot: CrosschainTokenConf<BifrostContext> = {
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
