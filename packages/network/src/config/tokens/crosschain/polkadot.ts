import type { CrosschainTokenConf } from "../../../types/v1";
import type { PolkadotContext } from "../../chains/polkadot";

export const dot: CrosschainTokenConf<PolkadotContext> = {
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
  withdrawFee: 0.004,
};
