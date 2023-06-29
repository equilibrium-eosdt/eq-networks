import type { CrosschainTokenConf } from "../../../types/v1";
import type { StatemintContext } from "../../chains/statemint";

export const usdt: CrosschainTokenConf<StatemintContext> = {
  token: "usdt",
  isNative: false,
  isFeeToken: true,
  context: {
    asset: 1984,
    decimals: 6,
  },
  fees: [
    {
      convert: true,
      amount: 0.1,
      name: "xcm",
      token: "usdt",
    },
  ],
  existentialDeposit: 0.7,
};
