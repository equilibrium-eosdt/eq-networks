"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chainDef = {
    name: "interlay",
    title: "Interlay",
    nativeToken: "intr",
    type: "substrate",
    paraId: 2032,
    logo: "https://contentv2.equilibrium.io/uploads/intr_3a63fb417c.svg",
    nodes: [
        "wss://api.interlay.io/parachain",
        "wss://rpc-interlay.luckyfriday.io",
        "wss://interlay-rpc.dwellir.com",
    ],
    getBalance: (context, pub) => ({
        section: "tokens",
        method: "accounts",
        args: [pub, context === null || context === void 0 ? void 0 : context.currency],
    }),
    getNativeBalance: (_, pub) => ({
        section: "tokens",
        method: "accounts",
        args: [
            pub,
            {
                Token: "INTR",
            },
        ],
    }),
    parseBalance: (context, balance) => {
        var _a, _b, _c;
        return ({
            value: BigInt((_c = (_b = (_a = balance === null || balance === void 0 ? void 0 : balance.free) === null || _a === void 0 ? void 0 : _a.toString) === null || _b === void 0 ? void 0 : _b.call(_a, 10)) !== null && _c !== void 0 ? _c : 0),
            decimals: context === null || context === void 0 ? void 0 : context.decimals,
        });
    },
    parseNativeBalance: (_, balance) => {
        var _a, _b, _c;
        return ({
            value: BigInt((_c = (_b = (_a = balance === null || balance === void 0 ? void 0 : balance.free) === null || _a === void 0 ? void 0 : _a.toString) === null || _b === void 0 ? void 0 : _b.call(_a, 10)) !== null && _c !== void 0 ? _c : 0),
            decimals: 10,
        });
    },
    getTransferArgs: (context, amount, pub) => ({
        section: "xTokens",
        method: "transfer",
        args: [
            context === null || context === void 0 ? void 0 : context.currency,
            amount,
            {
                V3: {
                    parents: 1,
                    interior: {
                        X2: [
                            { Parachain: 2011 },
                            { AccountId32: { id: pub, network: null } },
                        ],
                    },
                },
            },
            { Unlimited: null },
        ],
    }),
};
exports.default = chainDef;
