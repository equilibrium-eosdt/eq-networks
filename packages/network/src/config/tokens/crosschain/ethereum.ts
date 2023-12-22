import type { CrosschainTokenConf } from "../../../types/v1";
import type { EthereumContext } from "../../chains/ethereum";

export const eq: CrosschainTokenConf<EthereumContext> = {
  token: "eq",
  isNative: false,
  isFeeToken: false,

  context: {
    chainId: 0,
    resourceId:
      "0x000000000000000000000000000000681f812b3d181df0437de3f3e9ba249400",
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
