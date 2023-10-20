"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chainDef = {
    name: "parallel",
    title: "Parallel",
    nativeToken: "para",
    type: "substrate",
    nodes: ["wss://rpc.parallel.fi"],
    logo: "https://contentv2.equilibrium.io/uploads/parallel_3b34b5d6_ee793f8b57.svg",
    paraId: 2012,
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
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return ({
            value: BigInt((_d = (_c = (_b = (_a = accountInfo === null || accountInfo === void 0 ? void 0 : accountInfo.data) === null || _a === void 0 ? void 0 : _a.free) === null || _b === void 0 ? void 0 : _b.toString) === null || _c === void 0 ? void 0 : _c.call(_b, 10)) !== null && _d !== void 0 ? _d : 0) -
                BigInt((_h = (_g = (_f = (_e = accountInfo === null || accountInfo === void 0 ? void 0 : accountInfo.data) === null || _e === void 0 ? void 0 : _e.miscFrozen) === null || _f === void 0 ? void 0 : _f.toString) === null || _g === void 0 ? void 0 : _g.call(_f, 10)) !== null && _h !== void 0 ? _h : 0),
            decimals: 12,
        });
    },
    getTransferArgs: (context, amount, pub) => ({
        section: "xTokens",
        method: "transfer",
        args: [
            context === null || context === void 0 ? void 0 : context.assetId,
            amount,
            {
                V3: {
                    parents: 1,
                    interior: {
                        X2: [
                            { Parachain: 2011 },
                            {
                                AccountId32: {
                                    id: pub,
                                    network: null,
                                },
                            },
                        ],
                    },
                },
            },
            { Unlimited: null },
        ],
    }),
};
exports.default = chainDef;
