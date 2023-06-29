declare const _default: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "currencyAddress";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint8";
            readonly name: "parents";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "interior";
            readonly type: "bytes[]";
        }];
        readonly internalType: "struct Xtokens.Multilocation";
        readonly name: "destination";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint64";
        readonly name: "weight";
        readonly type: "uint64";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint8";
                readonly name: "parents";
                readonly type: "uint8";
            }, {
                readonly internalType: "bytes[]";
                readonly name: "interior";
                readonly type: "bytes[]";
            }];
            readonly internalType: "struct Xtokens.Multilocation";
            readonly name: "location";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly internalType: "struct Xtokens.MultiAsset[]";
        readonly name: "assets";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "uint32";
        readonly name: "feeItem";
        readonly type: "uint32";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint8";
            readonly name: "parents";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "interior";
            readonly type: "bytes[]";
        }];
        readonly internalType: "struct Xtokens.Multilocation";
        readonly name: "destination";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint64";
        readonly name: "weight";
        readonly type: "uint64";
    }];
    readonly name: "transferMultiAssets";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "currencyAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly internalType: "struct Xtokens.Currency[]";
        readonly name: "currencies";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "uint32";
        readonly name: "feeItem";
        readonly type: "uint32";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint8";
            readonly name: "parents";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "interior";
            readonly type: "bytes[]";
        }];
        readonly internalType: "struct Xtokens.Multilocation";
        readonly name: "destination";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint64";
        readonly name: "weight";
        readonly type: "uint64";
    }];
    readonly name: "transferMultiCurrencies";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint8";
            readonly name: "parents";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "interior";
            readonly type: "bytes[]";
        }];
        readonly internalType: "struct Xtokens.Multilocation";
        readonly name: "asset";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint8";
            readonly name: "parents";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "interior";
            readonly type: "bytes[]";
        }];
        readonly internalType: "struct Xtokens.Multilocation";
        readonly name: "destination";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint64";
        readonly name: "weight";
        readonly type: "uint64";
    }];
    readonly name: "transferMultiasset";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint8";
            readonly name: "parents";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "interior";
            readonly type: "bytes[]";
        }];
        readonly internalType: "struct Xtokens.Multilocation";
        readonly name: "asset";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "fee";
        readonly type: "uint256";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint8";
            readonly name: "parents";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "interior";
            readonly type: "bytes[]";
        }];
        readonly internalType: "struct Xtokens.Multilocation";
        readonly name: "destination";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint64";
        readonly name: "weight";
        readonly type: "uint64";
    }];
    readonly name: "transferMultiassetWithFee";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "currencyAddress";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "fee";
        readonly type: "uint256";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint8";
            readonly name: "parents";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "interior";
            readonly type: "bytes[]";
        }];
        readonly internalType: "struct Xtokens.Multilocation";
        readonly name: "destination";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint64";
        readonly name: "weight";
        readonly type: "uint64";
    }];
    readonly name: "transferWithFee";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];
export default _default;
