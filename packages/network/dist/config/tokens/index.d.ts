import crosschain from "./crosschain";
import type { SupportedExtensions } from "../../types/media";
interface TokenConfig {
    name: string;
    displayName?: string;
    title?: string;
    imageExt?: SupportedExtensions;
}
export declare const equilibrium: Record<string, Omit<TokenConfig, "name">>;
export declare const genshiro: Record<string, Omit<TokenConfig, "name">>;
export { crosschain };
