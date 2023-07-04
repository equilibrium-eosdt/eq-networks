"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chainDef = {
    name: "astar",
    title: "Astar",
    nativeToken: "astr",
    type: "substrate",
    paraId: 2006,
    logo: "https://contentv2.equilibrium.io/uploads/astar_a053e313da.jpg",
    nodes: [
        "wss://rpc.astar.network",
        "wss://astar.public.blastapi.io",
        "wss://astar.api.onfinality.io/public-ws",
    ],
    getBalance: (context, pub) => ({
        section: "assets",
        method: "account",
        args: [context === null || context === void 0 ? void 0 : context.assetId, pub],
    }),
    getNativeBalance: (_, pub) => ({
        section: "system",
        method: "account",
        args: [pub],
    }),
    parseBalance: (context, assetAccount) => {
        var _a, _b, _c;
        return ({
            value: BigInt((_c = (_b = (_a = assetAccount === null || assetAccount === void 0 ? void 0 : assetAccount.balance) === null || _a === void 0 ? void 0 : _a.toString) === null || _b === void 0 ? void 0 : _b.call(_a, 10)) !== null && _c !== void 0 ? _c : 0),
            decimals: context === null || context === void 0 ? void 0 : context.decimals,
        });
    },
    parseNativeBalance: (_, accountInfo) => {
        var _a, _b, _c, _d;
        return ({
            value: BigInt((_d = (_c = (_b = (_a = accountInfo === null || accountInfo === void 0 ? void 0 : accountInfo.data) === null || _a === void 0 ? void 0 : _a.free) === null || _b === void 0 ? void 0 : _b.toString) === null || _c === void 0 ? void 0 : _c.call(_b, 10)) !== null && _d !== void 0 ? _d : 0),
            decimals: 18,
        });
    },
    getTransferArgs: (context, amount, pub) => ({
        section: "polkadotXcm",
        method: (context === null || context === void 0 ? void 0 : context.generalKey)
            ? "reserveWithdrawAssets"
            : "reserveTransferAssets",
        args: [
            {
                V3: {
                    parents: 1,
                    interior: {
                        X1: { Parachain: 2011 },
                    },
                },
            },
            {
                V3: {
                    parents: 0,
                    interior: {
                        X1: {
                            AccountId32: {
                                id: pub,
                                network: null,
                            },
                        },
                    },
                },
            },
            {
                V3: [
                    {
                        id: {
                            Concrete: (context === null || context === void 0 ? void 0 : context.generalKey)
                                ? {
                                    parents: 1,
                                    interior: {
                                        X2: [
                                            { Parachain: 2011 },
                                            { GeneralKey: context === null || context === void 0 ? void 0 : context.generalKey },
                                        ],
                                    },
                                }
                                : {
                                    parents: 0,
                                    interior: "Here",
                                },
                        },
                        fun: {
                            Fungible: amount,
                        },
                    },
                ],
            },
            0,
        ],
    }),
};
exports.default = chainDef;
