export type BigFraction = [bigint, bigint];
export interface BigDecimals {
    value: bigint;
    decimals?: number;
}
export declare const createBF: (numStr?: `${number}`) => BigFraction;
export declare const toBigint: (bf: BigFraction, decimals: number) => bigint;
export declare const toBigFraction: ({ value: bi, decimals }: BigDecimals) => BigFraction;
export declare const toBigDecimals: (bf: BigFraction) => BigDecimals;
