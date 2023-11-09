"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chainDef = {
    name: "acala",
    title: "Acala",
    nativeToken: "aca",
    type: "substrate",
    nodes: ["wss://acala-rpc-1.aca-api.network"],
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHZpZXdCb3g9IjAgMCA4OCA4OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQzLjY5NjUgNDkuNTY1MUM0MS45MTA4IDQ5LjU2NTEgNDAuMTc0NCA0OS43MTQgMzguNDk0NSA0OS45OTg3TDQxLjA4MTYgNDUuNTE3OEM0MS45NTQ5IDQ1LjQ2MDIgNDIuODI5MyA0NS40MzExIDQzLjY5NjUgNDUuNDMxMUM0NS43Mjc5IDQ1LjQzMTEgNDcuNzk0OSA0NS41OTg3IDQ5Ljc5MzMgNDUuOTE5M0wzOS43NDc4IDI4LjUyTDIzLjAyNTIgNTcuNDg0NUwyMC42MzUzIDUzLjM0NTFMMzkuNzEwMiAyMC4zMDY1TDM5Ljc0OTUgMjAuMzc0NkwzOS43ODcxIDIwLjMwOTRMNjIuODA2NyA2MC4xODA1SDU4LjAyNjlMNTIuNjQ2OCA1MC44NjE4QzQ5Ljg0MzYgNTAuMDE2NCA0Ni44NDY4IDQ5LjU2NTEgNDMuNjk2NSA0OS41NjUxWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8cGF0aCBkPSJNNjQuMjk0MyA1Ny41NTQyTDQyLjAwNzYgMTguOTUyNkg0Ni43ODczTDY2LjY4NDEgNTMuNDE0OUw2NC4yOTQzIDU3LjU1NDJaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxwYXRoIGQ9Ik00Mi4xNzQzIDM3Ljk5N0wzMy4wMjMxIDUzLjg0NzVDMzYuMjk3NCA1Mi44NTk2IDQwLjE1MiA1Mi40MTg1IDQzLjc4ODQgNTIuNDE4NUM0NC4wODIzIDUyLjQxODUgNDQuMzc3IDUyLjQyMiA0NC42NzIyIDUyLjQyOUM0Ni43MzgxIDUyLjQ3NzggNDguODI1IDUyLjY5NjQgNTAuODI0OCA1My4wNjk3TDUzLjg3NzkgNTguMzU3OUM1MC43NTI1IDU3LjIyMTEgNDcuMzY5NiA1Ni41NTI0IDQzLjc4ODQgNTYuNTUyNEMzOC40OTE5IDU2LjU1MjQgMzMuNjI3NyA1Ny44NjI0IDI5LjM5MTUgNjAuMTQxNEwyOS40NTgxIDYwLjAyMjFMMjkuMzY2OCA2MC4xODA0SDI0LjU4N0wzOS43ODQ1IDMzLjg1NzdMNDIuMTc0MyAzNy45OTdaIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXIpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDQgODAuODE2M0M2NC4zMzMxIDgwLjgxNjMgODAuODE2MyA2NC4zMzMxIDgwLjgxNjMgNDRDODAuODE2MyAyMy42NjY5IDY0LjMzMzEgNy4xODM2NyA0NCA3LjE4MzY3QzIzLjY2NjkgNy4xODM2NyA3LjE4MzY3IDIzLjY2NjkgNy4xODM2NyA0NEM3LjE4MzY3IDY0LjMzMzEgMjMuNjY2OSA4MC44MTYzIDQ0IDgwLjgxNjNaTTQ0LjA4OTggNzYuMzI2NUM2MS45OTI4IDc2LjMyNjUgNzYuNTA2MSA2MS44MTMyIDc2LjUwNjEgNDMuOTEwMkM3Ni41MDYxIDI2LjAwNzIgNjEuOTkyOCAxMS40OTM5IDQ0LjA4OTggMTEuNDkzOUMyNi4xODY4IDExLjQ5MzkgMTEuNjczNSAyNi4wMDcyIDExLjY3MzUgNDMuOTEwMkMxMS42NzM1IDYxLjgxMzIgMjYuMTg2OCA3Ni4zMjY1IDQ0LjA4OTggNzYuMzI2NVoiIGZpbGw9InVybCgjcGFpbnQzX2xpbmVhcikiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00NCA4OEM2OC4zMDA1IDg4IDg4IDY4LjMwMDUgODggNDRDODggMTkuNjk5NSA2OC4zMDA1IDAgNDQgMEMxOS42OTk1IDAgMCAxOS42OTk1IDAgNDRDMCA2OC4zMDA1IDE5LjY5OTUgODggNDQgODhaTTQ0LjE3OTYgODMuODY5NEM2Ni4xOTg4IDgzLjg2OTQgODQuMDQ5IDY2LjAxOTMgODQuMDQ5IDQ0Qzg0LjA0OSAyMS45ODA3IDY2LjE5ODggNC4xMzA2MSA0NC4xNzk2IDQuMTMwNjFDMjIuMTYwMyA0LjEzMDYxIDQuMzEwMiAyMS45ODA3IDQuMzEwMiA0NEM0LjMxMDIgNjYuMDE5MyAyMi4xNjAzIDgzLjg2OTQgNDQuMTc5NiA4My44Njk0WiIgZmlsbD0idXJsKCNwYWludDRfbGluZWFyKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iMTMyLjI0IiB5MT0iNTcuNTc3IiB4Mj0iNjUuMTQ1NyIgeTI9Ii0yMC45MjI3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2NDVBRkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjUyMzgiIHN0b3AtY29sb3I9IiNFNDBDNUIiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY0QzNCIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjEzMi4yNCIgeTE9IjU3LjU3NyIgeDI9IjY1LjE0NTciIHkyPSItMjAuOTIyNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNjQ1QUZGIi8+CjxzdG9wIG9mZnNldD0iMC41MjM4IiBzdG9wLWNvbG9yPSIjRTQwQzVCIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGNEMzQiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXIiIHgxPSIxMzIuMjQiIHkxPSI1Ny41NzciIHgyPSI2NS4xNDU3IiB5Mj0iLTIwLjkyMjciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzY0NUFGRiIvPgo8c3RvcCBvZmZzZXQ9IjAuNTIzOCIgc3RvcC1jb2xvcj0iI0U0MEM1QiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjRDM0IiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyIiB4MT0iMTMyLjI0IiB5MT0iNTcuNTc3IiB4Mj0iNjUuMTQ1NyIgeTI9Ii0yMC45MjI3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2NDVBRkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjUyMzgiIHN0b3AtY29sb3I9IiNFNDBDNUIiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY0QzNCIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ0X2xpbmVhciIgeDE9IjEzMi4yNCIgeTE9IjU3LjU3NyIgeDI9IjY1LjE0NTciIHkyPSItMjAuOTIyNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNjQ1QUZGIi8+CjxzdG9wIG9mZnNldD0iMC41MjM4IiBzdG9wLWNvbG9yPSIjRTQwQzVCIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGNEMzQiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=",
    paraId: 2000,
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
