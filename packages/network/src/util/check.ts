export const isNumStr = (numStr?: string): numStr is `${number}` => {
  const num = Number(numStr);
  return Number.isFinite(num);
};

export const is0x = (str?: string): str is `0x${string}` => {
  return str?.indexOf("0x") === 0;
};

export const hasKey = <T extends string>(
  key: T,
  obj: any,
): obj is Record<T, unknown> => !!obj && typeof obj?.[key] !== "undefined";
