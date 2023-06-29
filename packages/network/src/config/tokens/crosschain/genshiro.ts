import type { CrosschainTokenConf } from "../../../types/v1";
import type { GenshiroContext } from "../../chains/genshiro";

export const eqd: CrosschainTokenConf<GenshiroContext> = {
  token: "eqd",
  isNative: false,
  isFeeToken: false,
  context: {
    asset: 6648164,
    decimals: 9,
    prices: {
      gens: 0.000429,
    },
    resourceId:
      "0x000000000000000000000000000000074F3176C2CFBBC7BBA48D64535E071500",
  },
  fees: [
    {
      amount: 100,
      name: "chainbridge",
      token: "gens",
    },
  ],
};

export const xdot: CrosschainTokenConf<GenshiroContext> = {
  token: "xdot",
  isNative: false,
  isFeeToken: false,
  context: {
    asset: 2019848052,
    decimals: 9,
    prices: {
      gens: 0.000429,
    },
    resourceId:
      "0x0000000000000000000000000000004AA2A8F889F4C05341980D28A0572B5500",
  },
  fees: [
    {
      amount: 100,
      name: "chainbridge",
      token: "gens",
    },
  ],
};

export const xdot2: CrosschainTokenConf<GenshiroContext> = {
  token: "xdot2",
  isNative: false,
  isFeeToken: false,
  context: {
    asset: 517081101362,
    decimals: 9,
    prices: {
      gens: 0.000429,
    },
    resourceId:
      "0x0000000000000000000000000000007E66B0F1124CB990BF90CD54BA2E18C100",
  },
  fees: [
    {
      amount: 100,
      name: "chainbridge",
      token: "gens",
    },
  ],
};

export const xdot3: CrosschainTokenConf<GenshiroContext> = {
  token: "xdot3",
  isNative: false,
  isFeeToken: false,
  context: {
    asset: 517081101363,
    decimals: 9,
    prices: {
      gens: 0.000429,
    },
    resourceId:
      "0x0000000000000000000000000000003264979835DB03D7303FA9B40C1166FA00",
  },
  fees: [
    {
      amount: 100,
      name: "chainbridge",
      token: "gens",
    },
  ],
};
