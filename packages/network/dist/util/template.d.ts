import { ChainConfig, ChainType } from "../types/v1";
export declare const is0x: (str?: string) => str is `0x${string}`;
export declare const isXcmConfig: <T extends ChainType>(raw: Record<string, any>, type?: T | undefined) => raw is ChainConfig<T>;
