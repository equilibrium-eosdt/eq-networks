"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genshiro = void 0;
const chainDef = {
    name: "genshiro",
    title: "Genshiro",
    nativeToken: "gens",
    type: "substrate",
    logo: "https://contentv2.equilibrium.io/uploads/gens_1f06723045.svg",
    nodes: ["wss://node.ksm.genshiro.io"],
    withdraw: "eq-bridge",
};
const getBalance = (pub) => ({
    section: "system",
    method: "account",
    args: [pub],
});
const getNativeBalance = getBalance;
const parseBalance = (data, context) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const { decimals, asset } = context !== null && context !== void 0 ? context : {};
    const balances = ((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.isV0) ? data.data.asV0.balance : undefined;
    const [, balance] = (_b = balances === null || balances === void 0 ? void 0 : balances.find(([assetId]) => assetId.toString(10) === (asset === null || asset === void 0 ? void 0 : asset.toString(10)))) !== null && _b !== void 0 ? _b : [];
    return {
        value: BigInt((balance === null || balance === void 0 ? void 0 : balance.isPositive)
            ? (_d = (_c = balance.asPositive) === null || _c === void 0 ? void 0 : _c.toString) === null || _d === void 0 ? void 0 : _d.call(_c, 10)
            : (_g = `-${(_f = (_e = balance.asNegative) === null || _e === void 0 ? void 0 : _e.toString) === null || _f === void 0 ? void 0 : _f.call(_e, 10)}`) !== null && _g !== void 0 ? _g : 0),
        decimals,
    };
};
const parseNativeBalance = (data) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const { decimals, asset } = { decimals: 9, asset: 1734700659 };
    const balances = ((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.isV0) ? data.data.asV0.balance : undefined;
    const [, balance] = (_b = balances === null || balances === void 0 ? void 0 : balances.find(([assetId]) => assetId.toString(10) === (asset === null || asset === void 0 ? void 0 : asset.toString(10)))) !== null && _b !== void 0 ? _b : [];
    return {
        value: BigInt((balance === null || balance === void 0 ? void 0 : balance.isPositive)
            ? (_d = (_c = balance.asPositive) === null || _c === void 0 ? void 0 : _c.toString) === null || _d === void 0 ? void 0 : _d.call(_c, 10)
            : (_g = `-${(_f = (_e = balance.asNegative) === null || _e === void 0 ? void 0 : _e.toString) === null || _f === void 0 ? void 0 : _f.call(_e, 10)}`) !== null && _g !== void 0 ? _g : 0),
        decimals,
    };
};
const getTransferArgs = (amount, pub, context) => {
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
exports.genshiro = Object.assign(Object.assign({}, chainDef), fns);
