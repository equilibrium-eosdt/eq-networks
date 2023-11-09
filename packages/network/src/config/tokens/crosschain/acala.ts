import type { CrosschainTokenConf } from "../../../types/v1";
import type { AcalaContext } from "../../chains/acala";

export const ldot: CrosschainTokenConf<AcalaContext> = {
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
