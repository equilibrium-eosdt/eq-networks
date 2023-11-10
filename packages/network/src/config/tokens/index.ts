import crosschain from "./crosschain";
import type { SupportedExtensions } from "../../types/media";

interface TokenConfig {
  name: string;
  displayName?: string;
  title?: string;
  imageExt?: SupportedExtensions;
}

export const equilibrium: Record<string, Omit<TokenConfig, "name">> = {
  ldot: {
    displayName: "LDOT",
    title: "Liquidity for Staked DOT",
    imageExt: ".svg",
  },
  sdot: {
    displayName: "SDOT",
    title: "Parallel SDOT",
    imageExt: ".svg",
  },
  tdot: {
    displayName: "TDOT",
    title: "Taiga Protocol",
    imageExt: ".svg",
  },
  vdot: {
    displayName: "VDOT",
    title: "Bifrost vDOT",
    imageExt: ".svg",
  },
};

export const genshiro: Record<string, Omit<TokenConfig, "name">> = {
  gens: {
    displayName: "GENS",
    title: "Genshiro",
  },
  crv: {
    displayName: "CRV",
    title: "Curve DAO Token",
    imageExt: ".svg",
  },
};

export { crosschain };
