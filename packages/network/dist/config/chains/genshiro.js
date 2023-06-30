"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getBalance = (context, pub) => ({
    section: "system",
    method: "account",
    args: [pub],
});
const getNativeBalance = getBalance;
const parseBalance = (context, data) => {
    var _a, _b, _c, _d, _e;
    const { decimals, asset } = context !== null && context !== void 0 ? context : {};
    const balances = ((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.isV0) ? data.data.asV0.balance : undefined;
    const [, balance] = (_b = balances === null || balances === void 0 ? void 0 : balances.find(([assetId]) => assetId.toString(10) === (asset === null || asset === void 0 ? void 0 : asset.toString(10)))) !== null && _b !== void 0 ? _b : [];
    const sign = (balance === null || balance === void 0 ? void 0 : balance.isPositive) ? "" : "-";
    const value = sign +
        ((_e = (_d = ((_c = (!sign ? balance === null || balance === void 0 ? void 0 : balance.asPositive : balance === null || balance === void 0 ? void 0 : balance.asNegative)) !== null && _c !== void 0 ? _c : 0)).toString) === null || _e === void 0 ? void 0 : _e.call(_d, 10));
    return {
        value: BigInt(value),
        decimals,
    };
};
const parseNativeBalance = (context, data) => {
    var _a, _b, _c, _d, _e;
    const { decimals, asset } = { decimals: 9, asset: 1734700659 };
    const balances = ((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.isV0) ? data.data.asV0.balance : undefined;
    const [, balance] = (_b = balances === null || balances === void 0 ? void 0 : balances.find(([assetId]) => assetId.toString(10) === (asset === null || asset === void 0 ? void 0 : asset.toString(10)))) !== null && _b !== void 0 ? _b : [];
    const sign = (balance === null || balance === void 0 ? void 0 : balance.isPositive) ? "" : "-";
    const value = sign +
        ((_e = (_d = ((_c = (!sign ? balance === null || balance === void 0 ? void 0 : balance.asPositive : balance === null || balance === void 0 ? void 0 : balance.asNegative)) !== null && _c !== void 0 ? _c : 0)).toString) === null || _e === void 0 ? void 0 : _e.call(_d, 10));
    return {
        value: BigInt(value),
        decimals,
    };
};
const getTransferArgs = (context, amount, pub) => {
    return {
        section: "eqBridge",
        method: "transferNative",
        args: [amount, pub, 7, context === null || context === void 0 ? void 0 : context.resourceId],
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
const chainDef = Object.assign({ name: "genshiro", title: "Genshiro", nativeToken: "gens", type: "substrate", logo: "https://contentv2.equilibrium.io/uploads/gens_1f06723045.svg", nodes: ["wss://node.ksm.genshiro.io"] }, fns);
exports.default = chainDef;
