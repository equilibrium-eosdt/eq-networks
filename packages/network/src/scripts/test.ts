import assert from "assert";
import config from "../config";
import { hasKey } from "../util/check";

const serializeFunction = <T extends Function>(fn: T) => {
  return {
    func$: fn.toString(),
  };
};

console.log(
  JSON.stringify(
    config,
    (_, v) => {
      if (typeof v === "function") {
        return serializeFunction(v);
      }

      return v;
    },
    2,
  ),
);

const serialized = JSON.stringify(
  config.chains.statemint,
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
    return new Function(`return ${v.func$}`)();
  }

  return v;
});

assert.deepStrictEqual(deserialized.getBalance("0x00", { asset: 1984 }), {
  section: "assets",
  method: "account",
  args: [1984, "0x00"],
});
