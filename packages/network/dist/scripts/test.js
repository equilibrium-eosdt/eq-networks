"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const config_1 = __importDefault(require("../config"));
const check_1 = require("../util/check");
const serialize_1 = require("../util/serialize");
const typed_1 = require("../util/typed");
console.info("checking serialize -> deserialize consistency");
const BALANCE_METHOD = "getBalance";
const BALANCE_ARGS = ["0x00"];
const serializeBigIntToString = (a) => {
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
        ],
    },
};
(0, assert_1.default)((0, typed_1.getEntries)(config_1.default.tokens.crosschain)
    .filter(([chainName]) => {
    // fixme evm tests also
    return config_1.default.chains[chainName].type === "substrate";
})
    .every(([chainName, tokens]) => {
    const chain = config_1.default.chains[chainName];
    const serialized = JSON.stringify(chain, (_, v) => {
        if (typeof v === "function") {
            return (0, serialize_1.serializeFunction)(v);
        }
        return v;
    }, 2);
    const deserialized = JSON.parse(serialized, (_, v) => {
        if ((0, check_1.hasKey)("func$", v)) {
            return (0, serialize_1.deserializeFunction)({ func$: v.func$ });
        }
        return v;
    });
    return (0, typed_1.getEntries)(tokens).every(([tokenName, token]) => {
        const { context } = token;
        console.info(`chain ${chainName}, token ${tokenName}, context: ${JSON.stringify(context)}`);
        return [
            { method: BALANCE_METHOD, args: BALANCE_ARGS },
            ...(chainName in MOCK
                ? (0, typed_1.getEntries)(MOCK[chainName]).map(([method, args]) => {
                    return { method, args };
                })
                : []),
        ].every(({ method, args }) => {
            assert_1.default.deepStrictEqual(
            // @ts-ignore
            chain[method](
            // @ts-ignore
            ...args, context), deserialized[method](...args, context), `chain[${method}](...${JSON.stringify(args, serializeBigIntToString)}) !== deserialized[${method}](...${JSON.stringify(args, serializeBigIntToString)})`);
            return true;
        });
    });
}));
