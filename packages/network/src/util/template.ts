import { ChainConfig, ChainType } from "../types/v1";
import { isNumStr } from "./math";

interface Options {
  decimals?: number;
}

export const is0x = (str?: string): str is `0x${string}` =>
  str?.indexOf("0x") === 0;

export const isXcmConfig = <T extends ChainType>(
  raw: Record<string, any>,
  type?: T,
): raw is ChainConfig<T> => {
  if (!raw) {
    throw new Error("xcm undef");
  }

  const { callIndex, types, args } = raw;

  if (typeof callIndex !== "string") {
    throw new Error("incorrect callIndex");
  }

  if (!Array.isArray(types)) {
    throw new Error("incorrect types");
  }

  if (!Array.isArray(args)) {
    throw new Error("args");
  }

  return !raw.type ? type !== "evm" : raw.type === type;
};

const applyTemplate = (
  template: string | undefined,
  functions: Record<string, (...args: Uint8Array[]) => string>,
  args: Uint8Array[],
  params: Record<string, Uint8Array>,
) => {
  const START = "{";
  const END = "}";
  const DELIMETER = ",";
  let result = template ?? "";

  for (;;) {
    const start = result.indexOf(START);

    if (start === -1) {
      break;
    }

    const end = result.indexOf(END);

    if (end === -1) {
      throw new Error(`incorrect template, received ${template}`);
    }

    const fnWithArgs = result.slice(start + 1, end);
    const [name, ...vars] = fnWithArgs.split(DELIMETER);
    const fn = functions[name];

    if (!fn) {
      throw new Error(
        `incorrect template function name(${name}), make sure that template is correct`,
      );
    }

    const val = fn(
      ...vars.map((name) => {
        const isNumeric = isNumStr(name);

        if (isNumeric) {
          return args[parseInt(name, 10)];
        }

        const param = params[name];

        if (typeof param === "string") {
          if (!is0x(param)) {
            throw new Error(
              `incorrect template param(${name}), make sure that template is correct`,
            );
          }

          // @ts-expect-error
          return Buffer.from(param.slice(2), "hex");
        }

        return param;
      }),
    ).slice(2);

    result = result.replace(`${START}${fnWithArgs}${END}`, val);
  }

  return result;
};
