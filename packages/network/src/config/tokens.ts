import type { SupportedExtensions } from "../types/media";

interface TokenConfig {
  name: string;
  displayName?: string;
  title?: string;
  imageExt?: SupportedExtensions;
}

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
