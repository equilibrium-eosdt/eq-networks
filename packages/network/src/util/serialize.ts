export const serializeFunction = <T extends Function>(fn: T) => {
  return {
    func$: fn.toString(),
  };
};

export const deserializeFunction = ({ func$ }: { func$: string }) =>
  new Function(`return ${func$}`)();
