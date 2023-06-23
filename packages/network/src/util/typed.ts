export const getEntries = <T extends {}, K extends keyof T>(
  obj?: T,
): Array<[K, T[K]]> => {
  return Object.entries(obj ?? {}) as unknown as Array<[K, T[K]]>;
};
