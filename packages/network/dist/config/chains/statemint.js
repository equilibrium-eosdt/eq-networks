"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getBalance = (context, pub) => ({
    section: "assets",
    method: "account",
    args: [context === null || context === void 0 ? void 0 : context.asset, pub],
});
const getNativeBalance = (context, pub) => ({
    section: "system",
    method: "account",
    args: [pub],
});
const parseBalance = (context, data) => {
    var _a, _b, _c;
    return {
        value: BigInt((_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.balance) === null || _a === void 0 ? void 0 : _a.toString) === null || _b === void 0 ? void 0 : _b.call(_a, 10)) !== null && _c !== void 0 ? _c : 0),
        decimals: context === null || context === void 0 ? void 0 : context.decimals,
    };
};
const parseNativeBalance = (context, data) => {
    var _a, _b, _c, _d;
    return {
        value: BigInt((_d = (_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.free) === null || _b === void 0 ? void 0 : _b.toString) === null || _c === void 0 ? void 0 : _c.call(_b, 10)) !== null && _d !== void 0 ? _d : 0),
        decimals: 10,
    };
};
const getTransferArgs = (context, amount, pub) => {
    return {
        section: "polkadotXcm",
        method: "limitedReserveTransferAssets",
        args: [
            {
                V2: { parents: "1", interior: { X1: { Parachain: "2011" } } },
            },
            {
                V2: {
                    parents: 0,
                    interior: {
                        X1: { AccountId32: { id: pub, network: "Any" } },
                    },
                },
            },
            {
                V2: [
                    {
                        id: {
                            Concrete: {
                                parents: 0,
                                interior: {
                                    X2: [
                                        { PalletInstance: 50 },
                                        { GeneralIndex: context === null || context === void 0 ? void 0 : context.asset },
                                    ],
                                },
                            },
                        },
                        fun: {
                            Fungible: amount,
                        },
                    },
                ],
            },
            0,
            { Unlimited: null },
        ],
    };
};
const fns = {
    // balances
    getBalance,
    parseBalance,
    // native balance
    getNativeBalance,
    parseNativeBalance,
    // transfer
    getTransferArgs,
};
const chainDef = Object.assign({ name: "statemint", title: "Statemint", nativeToken: "dot", type: "substrate", logo: null, withdraw: "parachain", nodes: [
        "wss://statemint-rpc.polkadot.io",
        "wss://statemint.api.onfinality.io/public-ws",
        "wss://statemint-rpc.dwellir.com;wss://public-rpc.pinknode.io/statemint;wss://statemint.public.curie.radiumblock.co/ws",
    ], paraId: 1000 }, fns);
exports.default = chainDef;
