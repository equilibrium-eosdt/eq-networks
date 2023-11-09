"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chainDef = {
    name: "bifrost",
    title: "Bifrost",
    nativeToken: "bnc",
    type: "substrate",
    nodes: [
        "wss://hk.p.bifrost-rpc.liebi.com/ws",
        "wss://bifrost-polkadot.api.onfinality.io/public-ws",
    ],
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDUwQzAgMjIuMzg1OCAyMi4zODU4IDAgNTAgMFYwQzc3LjYxNDIgMCAxMDAgMjIuMzg1OCAxMDAgNTBWNTBDMTAwIDc3LjYxNDIgNzcuNjE0MiAxMDAgNTAgMTAwVjEwMEMyMi4zODU4IDEwMCAwIDc3LjYxNDIgMCA1MFY1MFoiIGZpbGw9ImJsYWNrIi8+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8cGF0aCBkPSJNNTAgNzIuMzY4NEgxOS43MzY4TDY1LjEzMTYgMjYuOTczNkg4MC4yNjMxTDUwIDcyLjM2ODRaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjUwIiB5MT0iMjYuOTczNiIgeDI9IjUwIiB5Mj0iNzIuMzY4NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjN0FFRENGIi8+CjxzdG9wIG9mZnNldD0iMC4yMDEzMzMiIHN0b3AtY29sb3I9IiM2OENFRkEiLz4KPHN0b3Agb2Zmc2V0PSIwLjQwMzI0NCIgc3RvcC1jb2xvcj0iIzY4OUNGOCIvPgo8c3RvcCBvZmZzZXQ9IjAuNjAyMDc2IiBzdG9wLWNvbG9yPSIjQUM1N0MwIi8+CjxzdG9wIG9mZnNldD0iMC44MDE4NjciIHN0b3AtY29sb3I9IiNFNjU2NTkiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjJDMjQxIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iNjAuNTI2MyIgaGVpZ2h0PSI0NS4zOTQ3IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkuNzM2OCAyNi45NzM2KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
    paraId: 2030,
    getBalance: (context, pub) => ({
        section: "tokens",
        method: "accounts",
        args: [pub, context === null || context === void 0 ? void 0 : context.assetId],
    }),
    getNativeBalance: (_, pub) => ({
        section: "system",
        method: "account",
        args: [pub],
    }),
    parseBalance: (context, assetAccount) => {
        var _a, _b, _c;
        return ({
            value: BigInt((_c = (_b = (_a = assetAccount === null || assetAccount === void 0 ? void 0 : assetAccount.free) === null || _a === void 0 ? void 0 : _a.toString) === null || _b === void 0 ? void 0 : _b.call(_a, 10)) !== null && _c !== void 0 ? _c : 0),
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
                V2: {
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
