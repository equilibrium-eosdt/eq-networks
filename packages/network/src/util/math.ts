export type BigFraction = [bigint, bigint];

export interface BigDecimals {
  value: bigint;
  decimals?: number;
}

export const createBF = (numStr?: `${number}`): BigFraction => {
  const [int, fra]: [`${number}` | undefined, `${number}` | undefined] =
    (numStr?.split(".") ?? ["0", "0"]) as any;

  return [BigInt(int ?? 0), BigInt(fra ?? 0)];
};

export const toBigint = (bf: BigFraction, decimals: number): bigint => {
  const [int, fra] = bf;
  const mul = BigInt(10) ** BigInt(decimals);

  return (
    int * mul +
    BigInt(
      // fixme change string operation to math operation
      fra.toString(10).slice(0, decimals + 1),
    )
  );
};

export const toBigFraction = ({ value: bi, decimals }: BigDecimals) => {
  const mul = BigInt(10) ** BigInt(decimals ?? 0);
  const int = bi / mul;
  const fra = bi % mul;
  return [int, fra] as BigFraction;
};

export const toBigDecimals = (bf: BigFraction): BigDecimals => {
  const [int, fra] = bf;
  // fixme change string operation to math operation
  const decimals = fra.toString(10).length;
  const mul = BigInt(10) ** BigInt(decimals);

  return {
    value: int * mul + fra,
    decimals,
  };
};
