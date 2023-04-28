declare const response: {
    readonly data: readonly [{
        readonly id: 1;
        readonly attributes: {
            readonly name: "multichain-v7-router";
            readonly network: "moonbeam";
            readonly address: "0xF31778D591c558140398F46feCA42A6a2dbFFe90";
            readonly abi: readonly [{
                readonly type: "constructor";
                readonly inputs: readonly [{
                    readonly name: "_admin";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "_mpc";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "_wNATIVE";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "_anycallExecutor";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "_routerSecurity";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "ChangeAdmin";
                readonly type: "event";
                readonly inputs: readonly [{
                    readonly name: "_old";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "_new";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }];
                readonly anonymous: false;
            }, {
                readonly name: "LogAnySwapIn";
                readonly type: "event";
                readonly inputs: readonly [{
                    readonly name: "swapID";
                    readonly type: "string";
                    readonly indexed: false;
                    readonly internalType: "string";
                }, {
                    readonly name: "swapoutID";
                    readonly type: "bytes32";
                    readonly indexed: true;
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "token";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "receiver";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly indexed: false;
                    readonly internalType: "uint256";
                }, {
                    readonly name: "fromChainID";
                    readonly type: "uint256";
                    readonly indexed: false;
                    readonly internalType: "uint256";
                }];
                readonly anonymous: false;
            }, {
                readonly name: "LogAnySwapInAndExec";
                readonly type: "event";
                readonly inputs: readonly [{
                    readonly name: "swapID";
                    readonly type: "string";
                    readonly indexed: false;
                    readonly internalType: "string";
                }, {
                    readonly name: "swapoutID";
                    readonly type: "bytes32";
                    readonly indexed: true;
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "token";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "receiver";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly indexed: false;
                    readonly internalType: "uint256";
                }, {
                    readonly name: "fromChainID";
                    readonly type: "uint256";
                    readonly indexed: false;
                    readonly internalType: "uint256";
                }, {
                    readonly name: "success";
                    readonly type: "bool";
                    readonly indexed: false;
                    readonly internalType: "bool";
                }, {
                    readonly name: "result";
                    readonly type: "bytes";
                    readonly indexed: false;
                    readonly internalType: "bytes";
                }];
                readonly anonymous: false;
            }, {
                readonly name: "LogAnySwapOut";
                readonly type: "event";
                readonly inputs: readonly [{
                    readonly name: "swapoutID";
                    readonly type: "bytes32";
                    readonly indexed: true;
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "token";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "from";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "receiver";
                    readonly type: "string";
                    readonly indexed: false;
                    readonly internalType: "string";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly indexed: false;
                    readonly internalType: "uint256";
                }, {
                    readonly name: "toChainID";
                    readonly type: "uint256";
                    readonly indexed: false;
                    readonly internalType: "uint256";
                }];
                readonly anonymous: false;
            }, {
                readonly name: "LogAnySwapOutAndCall";
                readonly type: "event";
                readonly inputs: readonly [{
                    readonly name: "swapoutID";
                    readonly type: "bytes32";
                    readonly indexed: true;
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "token";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "from";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "receiver";
                    readonly type: "string";
                    readonly indexed: false;
                    readonly internalType: "string";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly indexed: false;
                    readonly internalType: "uint256";
                }, {
                    readonly name: "toChainID";
                    readonly type: "uint256";
                    readonly indexed: false;
                    readonly internalType: "uint256";
                }, {
                    readonly name: "anycallProxy";
                    readonly type: "string";
                    readonly indexed: false;
                    readonly internalType: "string";
                }, {
                    readonly name: "data";
                    readonly type: "bytes";
                    readonly indexed: false;
                    readonly internalType: "bytes";
                }];
                readonly anonymous: false;
            }, {
                readonly name: "LogApplyMPC";
                readonly type: "event";
                readonly inputs: readonly [{
                    readonly name: "oldMPC";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "newMPC";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "applyTime";
                    readonly type: "uint256";
                    readonly indexed: false;
                    readonly internalType: "uint256";
                }];
                readonly anonymous: false;
            }, {
                readonly name: "LogChangeMPC";
                readonly type: "event";
                readonly inputs: readonly [{
                    readonly name: "oldMPC";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "newMPC";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "effectiveTime";
                    readonly type: "uint256";
                    readonly indexed: false;
                    readonly internalType: "uint256";
                }];
                readonly anonymous: false;
            }, {
                readonly name: "LogRetryExecRecord";
                readonly type: "event";
                readonly inputs: readonly [{
                    readonly name: "swapID";
                    readonly type: "string";
                    readonly indexed: false;
                    readonly internalType: "string";
                }, {
                    readonly name: "swapoutID";
                    readonly type: "bytes32";
                    readonly indexed: false;
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "token";
                    readonly type: "address";
                    readonly indexed: false;
                    readonly internalType: "address";
                }, {
                    readonly name: "receiver";
                    readonly type: "address";
                    readonly indexed: false;
                    readonly internalType: "address";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly indexed: false;
                    readonly internalType: "uint256";
                }, {
                    readonly name: "fromChainID";
                    readonly type: "uint256";
                    readonly indexed: false;
                    readonly internalType: "uint256";
                }, {
                    readonly name: "anycallProxy";
                    readonly type: "address";
                    readonly indexed: false;
                    readonly internalType: "address";
                }, {
                    readonly name: "data";
                    readonly type: "bytes";
                    readonly indexed: false;
                    readonly internalType: "bytes";
                }];
                readonly anonymous: false;
            }, {
                readonly name: "LogRetrySwapInAndExec";
                readonly type: "event";
                readonly inputs: readonly [{
                    readonly name: "swapID";
                    readonly type: "string";
                    readonly indexed: false;
                    readonly internalType: "string";
                }, {
                    readonly name: "swapoutID";
                    readonly type: "bytes32";
                    readonly indexed: false;
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "token";
                    readonly type: "address";
                    readonly indexed: false;
                    readonly internalType: "address";
                }, {
                    readonly name: "receiver";
                    readonly type: "address";
                    readonly indexed: false;
                    readonly internalType: "address";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly indexed: false;
                    readonly internalType: "uint256";
                }, {
                    readonly name: "fromChainID";
                    readonly type: "uint256";
                    readonly indexed: false;
                    readonly internalType: "uint256";
                }, {
                    readonly name: "dontExec";
                    readonly type: "bool";
                    readonly indexed: false;
                    readonly internalType: "bool";
                }, {
                    readonly name: "success";
                    readonly type: "bool";
                    readonly indexed: false;
                    readonly internalType: "bool";
                }, {
                    readonly name: "result";
                    readonly type: "bytes";
                    readonly indexed: false;
                    readonly internalType: "bytes";
                }];
                readonly anonymous: false;
            }, {
                readonly name: "Paused";
                readonly type: "event";
                readonly inputs: readonly [{
                    readonly name: "role";
                    readonly type: "bytes32";
                    readonly indexed: false;
                    readonly internalType: "bytes32";
                }];
                readonly anonymous: false;
            }, {
                readonly name: "Unpaused";
                readonly type: "event";
                readonly inputs: readonly [{
                    readonly name: "role";
                    readonly type: "bytes32";
                    readonly indexed: false;
                    readonly internalType: "bytes32";
                }];
                readonly anonymous: false;
            }, {
                readonly name: "Call_Paused_ROLE";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "Exec_Paused_ROLE";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "PAUSE_ALL_ROLE";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "Retry_Paused_ROLE";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "Swapin_Paused_ROLE";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "Swapout_Paused_ROLE";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "addAnycallProxies";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "proxies";
                    readonly type: "address[]";
                    readonly internalType: "address[]";
                }, {
                    readonly name: "acceptAnyTokenFlags";
                    readonly type: "bool[]";
                    readonly internalType: "bool[]";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "admin";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "anySwapFeeTo";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "anySwapIn";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "swapID";
                    readonly type: "string";
                    readonly internalType: "string";
                }, {
                    readonly name: "swapInfo";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly name: "swapoutID";
                        readonly type: "bytes32";
                        readonly internalType: "bytes32";
                    }, {
                        readonly name: "token";
                        readonly type: "address";
                        readonly internalType: "address";
                    }, {
                        readonly name: "receiver";
                        readonly type: "address";
                        readonly internalType: "address";
                    }, {
                        readonly name: "amount";
                        readonly type: "uint256";
                        readonly internalType: "uint256";
                    }, {
                        readonly name: "fromChainID";
                        readonly type: "uint256";
                        readonly internalType: "uint256";
                    }];
                    readonly internalType: "struct SwapInfo";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "anySwapInAndExec";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "swapID";
                    readonly type: "string";
                    readonly internalType: "string";
                }, {
                    readonly name: "swapInfo";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly name: "swapoutID";
                        readonly type: "bytes32";
                        readonly internalType: "bytes32";
                    }, {
                        readonly name: "token";
                        readonly type: "address";
                        readonly internalType: "address";
                    }, {
                        readonly name: "receiver";
                        readonly type: "address";
                        readonly internalType: "address";
                    }, {
                        readonly name: "amount";
                        readonly type: "uint256";
                        readonly internalType: "uint256";
                    }, {
                        readonly name: "fromChainID";
                        readonly type: "uint256";
                        readonly internalType: "uint256";
                    }];
                    readonly internalType: "struct SwapInfo";
                }, {
                    readonly name: "anycallProxy";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "data";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "anySwapInAuto";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "swapID";
                    readonly type: "string";
                    readonly internalType: "string";
                }, {
                    readonly name: "swapInfo";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly name: "swapoutID";
                        readonly type: "bytes32";
                        readonly internalType: "bytes32";
                    }, {
                        readonly name: "token";
                        readonly type: "address";
                        readonly internalType: "address";
                    }, {
                        readonly name: "receiver";
                        readonly type: "address";
                        readonly internalType: "address";
                    }, {
                        readonly name: "amount";
                        readonly type: "uint256";
                        readonly internalType: "uint256";
                    }, {
                        readonly name: "fromChainID";
                        readonly type: "uint256";
                        readonly internalType: "uint256";
                    }];
                    readonly internalType: "struct SwapInfo";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "anySwapInNative";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "swapID";
                    readonly type: "string";
                    readonly internalType: "string";
                }, {
                    readonly name: "swapInfo";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly name: "swapoutID";
                        readonly type: "bytes32";
                        readonly internalType: "bytes32";
                    }, {
                        readonly name: "token";
                        readonly type: "address";
                        readonly internalType: "address";
                    }, {
                        readonly name: "receiver";
                        readonly type: "address";
                        readonly internalType: "address";
                    }, {
                        readonly name: "amount";
                        readonly type: "uint256";
                        readonly internalType: "uint256";
                    }, {
                        readonly name: "fromChainID";
                        readonly type: "uint256";
                        readonly internalType: "uint256";
                    }];
                    readonly internalType: "struct SwapInfo";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "anySwapInUnderlying";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "swapID";
                    readonly type: "string";
                    readonly internalType: "string";
                }, {
                    readonly name: "swapInfo";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly name: "swapoutID";
                        readonly type: "bytes32";
                        readonly internalType: "bytes32";
                    }, {
                        readonly name: "token";
                        readonly type: "address";
                        readonly internalType: "address";
                    }, {
                        readonly name: "receiver";
                        readonly type: "address";
                        readonly internalType: "address";
                    }, {
                        readonly name: "amount";
                        readonly type: "uint256";
                        readonly internalType: "uint256";
                    }, {
                        readonly name: "fromChainID";
                        readonly type: "uint256";
                        readonly internalType: "uint256";
                    }];
                    readonly internalType: "struct SwapInfo";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "anySwapInUnderlyingAndExec";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "swapID";
                    readonly type: "string";
                    readonly internalType: "string";
                }, {
                    readonly name: "swapInfo";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly name: "swapoutID";
                        readonly type: "bytes32";
                        readonly internalType: "bytes32";
                    }, {
                        readonly name: "token";
                        readonly type: "address";
                        readonly internalType: "address";
                    }, {
                        readonly name: "receiver";
                        readonly type: "address";
                        readonly internalType: "address";
                    }, {
                        readonly name: "amount";
                        readonly type: "uint256";
                        readonly internalType: "uint256";
                    }, {
                        readonly name: "fromChainID";
                        readonly type: "uint256";
                        readonly internalType: "uint256";
                    }];
                    readonly internalType: "struct SwapInfo";
                }, {
                    readonly name: "anycallProxy";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "data";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "anySwapOut";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "to";
                    readonly type: "string";
                    readonly internalType: "string";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "toChainID";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "anySwapOutAndCall";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "to";
                    readonly type: "string";
                    readonly internalType: "string";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "toChainID";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "anycallProxy";
                    readonly type: "string";
                    readonly internalType: "string";
                }, {
                    readonly name: "data";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "anySwapOutNative";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "to";
                    readonly type: "string";
                    readonly internalType: "string";
                }, {
                    readonly name: "toChainID";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
            }, {
                readonly name: "anySwapOutNativeAndCall";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "to";
                    readonly type: "string";
                    readonly internalType: "string";
                }, {
                    readonly name: "toChainID";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "anycallProxy";
                    readonly type: "string";
                    readonly internalType: "string";
                }, {
                    readonly name: "data";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
            }, {
                readonly name: "anySwapOutUnderlying";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "to";
                    readonly type: "string";
                    readonly internalType: "string";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "toChainID";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "anySwapOutUnderlyingAndCall";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "to";
                    readonly type: "string";
                    readonly internalType: "string";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "toChainID";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "anycallProxy";
                    readonly type: "string";
                    readonly internalType: "string";
                }, {
                    readonly name: "data";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "anycallExecutor";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "anycallProxyInfo";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly outputs: readonly [{
                    readonly name: "supported";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }, {
                    readonly name: "acceptAnyToken";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "applyMPC";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "changeAdmin";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "_admin";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "changeMPC";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "_mpc";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "changeVault";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "newVault";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "delay";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "delayMPC";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "mpc";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "pause";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "role";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "paused";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "role";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "pendingMPC";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "removeAnycallProxies";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "proxies";
                    readonly type: "address[]";
                    readonly internalType: "address[]";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "retryRecords";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "retrySwapinAndExec";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "swapID";
                    readonly type: "string";
                    readonly internalType: "string";
                }, {
                    readonly name: "swapInfo";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly name: "swapoutID";
                        readonly type: "bytes32";
                        readonly internalType: "bytes32";
                    }, {
                        readonly name: "token";
                        readonly type: "address";
                        readonly internalType: "address";
                    }, {
                        readonly name: "receiver";
                        readonly type: "address";
                        readonly internalType: "address";
                    }, {
                        readonly name: "amount";
                        readonly type: "uint256";
                        readonly internalType: "uint256";
                    }, {
                        readonly name: "fromChainID";
                        readonly type: "uint256";
                        readonly internalType: "uint256";
                    }];
                    readonly internalType: "struct SwapInfo";
                }, {
                    readonly name: "anycallProxy";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "data";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }, {
                    readonly name: "dontExec";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "routerSecurity";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "setRouterSecurity";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "_routerSecurity";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "unpause";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "role";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "wNATIVE";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly stateMutability: "view";
            }, {
                readonly type: "receive";
                readonly stateMutability: "payable";
            }];
            readonly createdAt: "2023-02-27T12:29:04.456Z";
            readonly updatedAt: "2023-02-27T12:29:04.456Z";
        };
    }, {
        readonly id: 2;
        readonly attributes: {
            readonly name: "eq-token";
            readonly network: "moonbeam";
            readonly address: "0xFffFFfFf8f6267e040D8a0638C576dfBa4F0F6D6";
            readonly abi: readonly [{
                readonly name: "Approval";
                readonly type: "event";
                readonly inputs: readonly [{
                    readonly name: "owner";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "spender";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly indexed: false;
                    readonly internalType: "uint256";
                }];
                readonly anonymous: false;
            }, {
                readonly name: "Transfer";
                readonly type: "event";
                readonly inputs: readonly [{
                    readonly name: "from";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "to";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly indexed: false;
                    readonly internalType: "uint256";
                }];
                readonly anonymous: false;
            }, {
                readonly name: "allowance";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "owner";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "spender";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "approve";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "spender";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "balanceOf";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "who";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "decimals";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "uint8";
                    readonly internalType: "uint8";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "name";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "string";
                    readonly internalType: "string";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "symbol";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "string";
                    readonly internalType: "string";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "totalSupply";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "transfer";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "to";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "transferFrom";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "from";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "to";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }];
                readonly stateMutability: "nonpayable";
            }];
            readonly createdAt: "2023-02-27T12:30:21.455Z";
            readonly updatedAt: "2023-02-27T12:30:21.455Z";
        };
    }, {
        readonly id: 3;
        readonly attributes: {
            readonly name: "eqd-token";
            readonly network: "moonbeam";
            readonly address: "0xFFffFfFF8cdA1707bAF23834d211B08726B1E499";
            readonly abi: readonly [{
                readonly name: "Approval";
                readonly type: "event";
                readonly inputs: readonly [{
                    readonly name: "owner";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "spender";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly indexed: false;
                    readonly internalType: "uint256";
                }];
                readonly anonymous: false;
            }, {
                readonly name: "Transfer";
                readonly type: "event";
                readonly inputs: readonly [{
                    readonly name: "from";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "to";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly indexed: false;
                    readonly internalType: "uint256";
                }];
                readonly anonymous: false;
            }, {
                readonly name: "allowance";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "owner";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "spender";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "approve";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "spender";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "balanceOf";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "who";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "decimals";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "uint8";
                    readonly internalType: "uint8";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "name";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "string";
                    readonly internalType: "string";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "symbol";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "string";
                    readonly internalType: "string";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "totalSupply";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "transfer";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "to";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "transferFrom";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "from";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "to";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }];
                readonly stateMutability: "nonpayable";
            }];
            readonly createdAt: "2023-03-07T12:55:47.479Z";
            readonly updatedAt: "2023-03-07T12:55:47.479Z";
        };
    }, {
        readonly id: 4;
        readonly attributes: {
            readonly name: "usdc-token";
            readonly network: "moonbaseAlpha";
            readonly address: "0xfffffffe47b78475160da680caef70959e027bee";
            readonly abi: readonly [{
                readonly name: "Approval";
                readonly type: "event";
                readonly inputs: readonly [{
                    readonly name: "owner";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "spender";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly indexed: false;
                    readonly internalType: "uint256";
                }];
                readonly anonymous: false;
            }, {
                readonly name: "Transfer";
                readonly type: "event";
                readonly inputs: readonly [{
                    readonly name: "from";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "to";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly indexed: false;
                    readonly internalType: "uint256";
                }];
                readonly anonymous: false;
            }, {
                readonly name: "allowance";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "owner";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "spender";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "approve";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "spender";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "balanceOf";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "who";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "decimals";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "uint8";
                    readonly internalType: "uint8";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "name";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "string";
                    readonly internalType: "string";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "symbol";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "string";
                    readonly internalType: "string";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "totalSupply";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "transfer";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "to";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "transferFrom";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "from";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "to";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }];
                readonly stateMutability: "nonpayable";
            }];
            readonly createdAt: "2023-04-18T12:54:27.779Z";
            readonly updatedAt: "2023-04-18T12:54:27.779Z";
        };
    }, {
        readonly id: 5;
        readonly attributes: {
            readonly name: "usdc-gateway";
            readonly network: "moonbaseAlpha";
            readonly address: "0x37BdC2A41837467d6C5Af9Fd69B7ED2A4B401762";
            readonly abi: readonly [{
                readonly name: "ApplyAdmin";
                readonly type: "event";
                readonly inputs: readonly [{
                    readonly name: "_old";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "_new";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }];
                readonly anonymous: false;
            }, {
                readonly name: "ChangeAdmin";
                readonly type: "event";
                readonly inputs: readonly [{
                    readonly name: "_old";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }, {
                    readonly name: "_new";
                    readonly type: "address";
                    readonly indexed: true;
                    readonly internalType: "address";
                }];
                readonly anonymous: false;
            }, {
                readonly name: "LogAnySwapOut";
                readonly type: "event";
                readonly inputs: readonly [{
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly indexed: false;
                    readonly internalType: "uint256";
                }, {
                    readonly name: "sender";
                    readonly type: "address";
                    readonly indexed: false;
                    readonly internalType: "address";
                }, {
                    readonly name: "receiver";
                    readonly type: "address";
                    readonly indexed: false;
                    readonly internalType: "address";
                }, {
                    readonly name: "toChainID";
                    readonly type: "uint256";
                    readonly indexed: false;
                    readonly internalType: "uint256";
                }, {
                    readonly name: "swapoutSeq";
                    readonly type: "uint256";
                    readonly indexed: false;
                    readonly internalType: "uint256";
                }];
                readonly anonymous: false;
            }, {
                readonly name: "Swapout";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "receiver";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "destChainID";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly stateMutability: "payable";
            }, {
                readonly name: "_updateFeeOwner";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "feeOwner";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "weight";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "addFeeOwner";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "feeOwner";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "weight";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "admin";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "anyExecute";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "data";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
                readonly outputs: readonly [{
                    readonly name: "success";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }, {
                    readonly name: "result";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "anyFallback";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "data";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
                readonly outputs: readonly [{
                    readonly name: "success";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }, {
                    readonly name: "result";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "applyAdmin";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "calcFee";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "sender";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "toChainID";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "callProxy";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "changeAdmin";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "_admin";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "clientPeers";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "convertDecimal";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "d_0";
                    readonly type: "uint8";
                    readonly internalType: "uint8";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "decimal";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "chainID";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "uint8";
                    readonly internalType: "uint8";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "decimals";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "uint8";
                    readonly internalType: "uint8";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "depositFee";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [];
                readonly stateMutability: "payable";
            }, {
                readonly name: "dfaxFeeAdmin";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "executionBudget";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "feeOwnerAccrued";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "feeOwnerWeights";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "feeOwners";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "feeScheme";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "address";
                    readonly internalType: "contract IFeeScheme";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "getFeeOwnerWeight";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "feeOwner";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "getTotalWeight";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "initAnyCallApp";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "_callProxy";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "_admin";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "initERC20Gateway";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "anyCallProxy";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "token_";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "admin";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "_safetyControl";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "dFaxFeeAdmin";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "defaultFeeScheme";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "initialized";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "pendingAdmin";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "removeFeeOwner";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "feeOwner";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "safetyControl";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "address";
                    readonly internalType: "contract ISwapInSafetyControl";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "setCallProxy";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "_callProxy";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "setClientPeers";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "_chainIds";
                    readonly type: "uint256[]";
                    readonly internalType: "uint256[]";
                }, {
                    readonly name: "_peers";
                    readonly type: "address[]";
                    readonly internalType: "address[]";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "setDFaxFeeAdmin";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "dfaxFeeAdmin";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "setDecimals";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "chainIDs";
                    readonly type: "uint256[]";
                    readonly internalType: "uint256[]";
                }, {
                    readonly name: "decimals_";
                    readonly type: "uint8[]";
                    readonly internalType: "uint8[]";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "setFeeScheme";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "feeScheme";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "swapoutSeq";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "token";
                readonly type: "function";
                readonly inputs: readonly [];
                readonly outputs: readonly [{
                    readonly name: "";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly stateMutability: "view";
            }, {
                readonly name: "updateFeeOwner";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "feeOwner";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "weight";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "withdraw";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "_to";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "_amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "withdrawAllFee";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "_pool";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "_to";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "withdrawDFaxFee";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "to";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly name: "withdrawFee";
                readonly type: "function";
                readonly inputs: readonly [{
                    readonly name: "_to";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "_amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
                readonly outputs: readonly [];
                readonly stateMutability: "nonpayable";
            }, {
                readonly type: "receive";
                readonly stateMutability: "payable";
            }];
            readonly createdAt: "2023-04-18T12:56:43.671Z";
            readonly updatedAt: "2023-04-18T12:56:55.667Z";
        };
    }];
    readonly meta: {
        readonly pagination: {
            readonly page: 1;
            readonly pageSize: 25;
            readonly pageCount: 1;
            readonly total: 5;
        };
    };
};
export default response;
