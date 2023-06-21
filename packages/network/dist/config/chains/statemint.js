"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statemint = void 0;
const getBalance = (pub, context) => ({
    section: "assets",
    method: "account",
    args: [context === null || context === void 0 ? void 0 : context.asset, pub],
});
const getNativeBalance = (pub) => ({
    section: "system",
    method: "account",
    args: [pub],
});
const parseBalance = (data, context) => {
    var _a, _b, _c;
    return {
        value: BigInt((_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.balance) === null || _a === void 0 ? void 0 : _a.toString) === null || _b === void 0 ? void 0 : _b.call(_a, 10)) !== null && _c !== void 0 ? _c : 0),
        decimals: context === null || context === void 0 ? void 0 : context.decimals,
    };
};
const parseNativeBalance = (data, options) => {
    var _a, _b, _c, _d;
    return {
        value: BigInt((_d = (_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.free) === null || _b === void 0 ? void 0 : _b.toString) === null || _c === void 0 ? void 0 : _c.call(_b, 10)) !== null && _d !== void 0 ? _d : 0),
        decimals: 10,
    };
};
const getTransferArgs = (amount, pub, context) => {
    return {
        section: "polkadotXcm",
        method: "limitedReserveTransferAssets",
        args: [
            {
                V1: { parents: "1", interior: { X1: { Parachain: "2011" } } },
            },
            {
                V1: {
                    parents: 0,
                    interior: {
                        X1: { AccountId32: { id: pub, network: "Any" } },
                    },
                },
            },
            {
                V1: [
                    {
                        id: {
                            Concrete: {
                                parents: 0,
                                interior: {
                                    X2: [{ PalletInstance: 50 }, { GeneralIndex: 1984 }],
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
            { Limited: "800000000" },
        ],
    };
};
exports.statemint = {
    name: "statemint",
    title: "Statemint",
    nativeToken: "dot",
    type: "substrate",
    // balances
    getBalance,
    parseBalance,
    // native balance
    getNativeBalance,
    parseNativeBalance,
    // transfer
    getTransferArgs,
    nodes: [
        "wss://statemint-rpc.polkadot.io",
        "wss://statemint.api.onfinality.io/public-ws",
        "wss://statemint-rpc.dwellir.com;wss://public-rpc.pinknode.io/statemint;wss://statemint.public.curie.radiumblock.co/ws",
    ],
    paraId: 1000,
    logo: null,
};
