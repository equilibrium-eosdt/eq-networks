import assert from "assert";
import config from "../config";
import { hasKey } from "../util/check";
import { deserializeFunction, serializeFunction } from "../util/serialize";
import { getEntries } from "../util/typed";

console.info("checking serialize -> deserialize consistency");

const BALANCE_METHOD = "getBalance" as const;
const BALANCE_ARGS = ["0x00"] as const;

const serializeBigIntToString = (a: any) => {
  if (typeof a !== "bigint") {
    return a;
  }

  return a.toString();
};

const MOCK = {
  genshiro: {
    parseNativeBalance: [
      {
        data: {
          isV0: true,
          asV0: {
            balance: [
              [1734700659, { isPositive: true, asPositive: 10000000000 }],
              [6648164, { isPositive: true, asPositive: 10000000 }],
            ],
          },
        },
      },
      { value: BigInt(10000000000), decimals: 9 },
    ] as const,
  },
};

assert(
  getEntries(config.tokens.crosschain).every(([chainName, tokens]) => {
    const chain = config.chains[chainName];

    const serialized = JSON.stringify(
      chain,
      (_, v) => {
        if (typeof v === "function") {
          return serializeFunction(v);
        }

        return v;
      },
      2,
    );

    const deserialized = JSON.parse(serialized, (_, v) => {
      if (hasKey("func$", v)) {
        return deserializeFunction({ func$: v.func$ as string });
      }

      return v;
    });

    return getEntries(tokens).every(([tokenName, token]) => {
      const { context } = token;

      console.info(
        `chain ${chainName}, token ${tokenName}, context: ${JSON.stringify(
          context,
        )}`,
      );

      return [
        { method: BALANCE_METHOD, args: BALANCE_ARGS },
        ...(chainName in MOCK
          ? getEntries(MOCK[chainName as keyof typeof MOCK]).map(
              ([method, args]) => {
                return { method, args };
              },
            )
          : []),
      ].every(({ method, args }) => {
        assert.deepStrictEqual(
          chain[method](
            // @ts-ignore
            ...args,
            context,
          ),
          deserialized[method](...args, context),
          `chain[${method}](...${JSON.stringify(
            args,
            serializeBigIntToString,
          )}) !== deserialized[${method}](...${JSON.stringify(
            args,
            serializeBigIntToString,
          )})`,
        );

        return true;
      });
    });
  }),
);
