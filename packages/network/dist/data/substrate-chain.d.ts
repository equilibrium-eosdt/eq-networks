declare const response: {
    readonly data: readonly [{
        readonly id: 1;
        readonly attributes: {
            readonly name: "heiko-testnet";
            readonly nativeToken: "hko";
            readonly balanceMethodTemplate: "0x682a59d51ab9e48a8c8cc418ff9708d2b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,asset}{Blake2_128Concat,0}";
            readonly balanceReturnType: "PalletAssetsAssetAccount";
            readonly balanceParser: "balance,12";
            readonly nodes: "wss://parachain-testnet.equilab.io/parallel/collator/node1/wss";
            readonly nativeBalanceMethodTemplate: "0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}";
            readonly nativeBalanceReturnType: "AccountInfo";
            readonly nativeBalanceParser: "data.free,12";
            readonly title: "Parallel Heiko";
            readonly xcm: {
                readonly args: readonly [{
                    readonly name: "asset";
                    readonly type: "param";
                }, {
                    readonly type: "arg";
                    readonly index: "0";
                    readonly transform: readonly ["decimals", "12"];
                }, {
                    readonly type: "template";
                    readonly template: {
                        readonly V1: {
                            readonly parents: "1";
                            readonly interior: {
                                readonly X2: readonly [{
                                    readonly Parachain: "2024";
                                }, {
                                    readonly AccountId32: {
                                        readonly id: "$1";
                                        readonly network: "Any";
                                    };
                                }];
                            };
                        };
                    };
                }, {
                    readonly type: "value";
                    readonly value: "0";
                }];
                readonly argTypes: readonly ["u32", "u128", "XcmVersionedMultiLocation", "u64"];
                readonly callIndex: "2b00";
            };
            readonly types: "{\n  \"AccountInfo\": {\n    \"nonce\": \"u32\",\n    \"consumer\": \"u32\",\n    \"providers\": \"u32\",\n    \"sufficients\": \"u32\",\n    \"data\": {\n      \"free\": \"u128\",\n      \"reserved\": \"u128\",\n      \"miscFrozen\": \"u128\",\n      \"feeFrozen\": \"u128\"\n    }\n  },\n  \"PalletAssetsAssetAccount\": {\n    \"balance\": \"u128\",\n    \"isFrozen\": \"bool\",\n    \"reason\": \"Data\",\n    \"extra\": \"Data\"\n  },\n  \"XcmV1Junction\": {\n    \"_enum\": {\n      \"Parachain\": \"Compact<u32>\",\n      \"AccountId32\": {\n        \"network\": \"NetworkId\",\n        \"id\": \"AccountId\"\n      },\n      \"GeneralIndex\": \"Compact<u128>\",\n      \"Plurality\": \"Data\",\n      \"OnlyChild\": null,\n      \"AccountKey20\": \"Data\",\n      \"PalletInstance\": \"u8\",\n      \"GeneralKey\": \"Data\"\n    }\n  },\n  \"XcmV1MultilocationJunctions\": {\n    \"_enum\": {\n      \"Here\": null,\n      \"X1\": \"XcmV1Junction\",\n      \"X2\": \"(XcmV1Junction, XcmV1Junction)\",\n      \"X3\": \"Data\",\n      \"X4\": \"Data\",\n      \"X5\": \"Data\",\n      \"X6\": \"Data\",\n      \"X7\": \"Data\"\n    }\n  },\n  \"XcmV0MultiLocation\": \"Data\",\n  \"XcmV1MultiLocation\": {\n    \"parents\": \"u8\",\n    \"interior\": \"XcmV1MultilocationJunctions\"\n  },\n  \"XcmVersionedMultiLocation\": {\n    \"_enum\": {\n      \"V0\": \"XcmV0MultiLocation\",\n      \"V1\": \"XcmV1MultiLocation\"\n    }\n  }\n}";
            readonly paraId: 2085;
            readonly createdAt: "2022-10-26T13:32:02.349Z";
            readonly updatedAt: "2022-10-26T13:32:02.349Z";
            readonly logo: {
                readonly data: {
                    readonly id: 97;
                    readonly attributes: {
                        readonly name: "favicon-32x32.png";
                        readonly alternativeText: null;
                        readonly caption: null;
                        readonly width: 32;
                        readonly height: 32;
                        readonly formats: null;
                        readonly hash: "favicon_32x32_b8a33aedb5";
                        readonly ext: ".png";
                        readonly mime: "image/png";
                        readonly size: 2.04;
                        readonly url: "/uploads/favicon_32x32_b8a33aedb5.png";
                        readonly previewUrl: null;
                        readonly provider: "local";
                        readonly provider_metadata: null;
                        readonly createdAt: "2022-10-26T13:32:01.870Z";
                        readonly updatedAt: "2022-10-26T13:32:01.870Z";
                    };
                };
            };
        };
    }, {
        readonly id: 2;
        readonly attributes: {
            readonly name: "karura-testnet";
            readonly nativeToken: "kar";
            readonly balanceMethodTemplate: "0x99971b5749ac43e0235e41b0d37869188ee7418a6531173d60d1f6a82d8f4d51{Blake2_128Concat,0}{Twox64Concat,cid}";
            readonly balanceReturnType: "OrmlTokensAccountData";
            readonly balanceParser: "free,9";
            readonly nodes: "wss://parachain-stage.equilab.io/karura/collator/node1/wss";
            readonly nativeBalanceMethodTemplate: "0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}";
            readonly nativeBalanceReturnType: "AccountInfo";
            readonly nativeBalanceParser: "data.free,12";
            readonly title: "Karura";
            readonly xcm: {
                readonly args: readonly [{
                    readonly type: "template";
                    readonly template: {
                        readonly $type: "$id";
                    };
                }, {
                    readonly type: "arg";
                    readonly index: "0";
                    readonly transform: readonly ["decimals", "12"];
                }, {
                    readonly type: "template";
                    readonly template: {
                        readonly V1: {
                            readonly parents: "1";
                            readonly interior: {
                                readonly X2: readonly [{
                                    readonly Parachain: "2024";
                                }, {
                                    readonly AccountId32: {
                                        readonly id: "$1";
                                        readonly network: "Any";
                                    };
                                }];
                            };
                        };
                    };
                }, {
                    readonly type: "value";
                    readonly value: "0";
                }];
                readonly argTypes: readonly ["AcalaPrimitivesCurrencyCurrencyId", "u128", "XcmVersionedMultiLocation", "u64"];
                readonly callIndex: "3600";
            };
            readonly types: "{\n    \"AcalaPrimitivesCurrencyTokenSymbol\": {\n      \"_enum\": {\n        \"Aca\": 0,\n        \"Ausd\": 1,\n        \"Dot\": 2,\n        \"Ldot\": 3,\n        \"Renbtc\": 20,\n        \"Cash\": 21,\n        \"Kar\": 128,\n        \"Kusd\": 129,\n        \"Ksm\": 130,\n        \"Lksm\": 131,\n        \"Tai\": 132,\n        \"Bnc\": 168,\n        \"Vsksm\": 169,\n        \"Pha\": 170,\n        \"Kint\": 171,\n        \"Kbtc\": 172\n      }\n    },\n    \"XcmV1MultilocationJunctions\": {\n      \"_enum\": {\n        \"Here\": null,\n        \"X1\": \"XcmV1Junction\",\n        \"X2\": \"(XcmV1Junction, XcmV1Junction)\",\n        \"X3\": \"Data\",\n        \"X4\": \"Data\",\n        \"X5\": \"Data\",\n        \"X6\": \"Data\",\n        \"X7\": \"Data\"\n      }\n    },\n    \"XcmV1MultiLocation\": {\n      \"parents\": \"u8\",\n      \"interior\": \"XcmV1MultilocationJunctions\"\n    },\n    \"XcmV1Junction\": {\n      \"_enum\": {\n        \"Parachain\": \"Compact<u32>\",\n        \"AccountId32\": {\n          \"network\": \"NetworkId\",\n          \"id\": \"AccountId\"\n        },\n        \"GeneralIndex\": \"Compact<u128>\",\n        \"Plurality\": \"Data\",\n        \"OnlyChild\": null,\n        \"AccountKey20\": \"Data\",\n        \"PalletInstance\": \"u8\",\n        \"GeneralKey\": \"Data\"\n      }\n    },\n    \"XcmV0MultiLocation\": \"Data\",\n    \"XcmVersionedMultiLocation\": {\n      \"_enum\": {\n        \"V0\": \"XcmV0MultiLocation\",\n        \"V1\": \"XcmV1MultiLocation\"\n      }\n    },\n    \"AccountInfo\": {\n      \"nonce\": \"u32\",\n      \"consumer\": \"u32\",\n      \"providers\": \"u32\",\n      \"sufficients\": \"u32\",\n      \"data\": {\n        \"free\": \"u128\",\n        \"reserved\": \"u128\",\n        \"miscFrozen\": \"u128\",\n        \"feeFrozen\": \"u128\"\n      }\n    },\n    \"OrmlTokensAccountData\": {\n      \"free\": \"u128\",\n      \"reserved\": \"u128\",\n      \"frozen\": \"u128\"\n    },\n    \"AcalaPrimitivesCurrencyCurrencyId\": {\n      \"_enum\": {\n        \"Token\": \"AcalaPrimitivesCurrencyTokenSymbol\",\n        \"DexShare\": \"Data\",\n        \"Erc20\": \"Data\",\n        \"StableAssetPoolToken\": \"Data\",\n        \"LiquidCrowdloan\": \"Data\",\n        \"ForeignAsset\": \"u16\"\n      }\n    }\n  }";
            readonly paraId: 2000;
            readonly createdAt: "2022-10-26T13:32:03.654Z";
            readonly updatedAt: "2022-10-26T13:32:03.654Z";
            readonly logo: {
                readonly data: {
                    readonly id: 98;
                    readonly attributes: {
                        readonly name: "icon_old (3).svg";
                        readonly alternativeText: null;
                        readonly caption: null;
                        readonly width: 30;
                        readonly height: 30;
                        readonly formats: null;
                        readonly hash: "icon_old_3_8854281aaf";
                        readonly ext: ".svg";
                        readonly mime: "image/svg+xml";
                        readonly size: 2.03;
                        readonly url: "/uploads/icon_old_3_8854281aaf.svg";
                        readonly previewUrl: null;
                        readonly provider: "local";
                        readonly provider_metadata: null;
                        readonly createdAt: "2022-10-26T13:32:03.174Z";
                        readonly updatedAt: "2022-10-26T13:32:03.174Z";
                    };
                };
            };
        };
    }, {
        readonly id: 3;
        readonly attributes: {
            readonly name: "karura";
            readonly nativeToken: "kar";
            readonly balanceMethodTemplate: "0x99971b5749ac43e0235e41b0d37869188ee7418a6531173d60d1f6a82d8f4d51{Blake2_128Concat,0}{Twox64Concat,cid}";
            readonly balanceReturnType: "OrmlTokensAccountData";
            readonly balanceParser: "free,9";
            readonly nodes: "wss://karura-rpc-0.aca-api.network,wss://karura-rpc-1.aca-api.network,wss://karura-rpc-2.aca-api.network/ws,wss://karura-rpc-3.aca-api.network/ws,wss://karura.polkawallet.io,wss://karura.api.onfinality.io/public-ws,wss://karura-rpc.dwellir.com";
            readonly nativeBalanceMethodTemplate: "0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}";
            readonly nativeBalanceReturnType: "AccountInfo";
            readonly nativeBalanceParser: "data.free,12";
            readonly title: "Karura";
            readonly xcm: {
                readonly args: readonly [{
                    readonly type: "template";
                    readonly template: {
                        readonly $type: "$id";
                    };
                }, {
                    readonly type: "arg";
                    readonly index: "0";
                    readonly transform: readonly ["decimals", "12"];
                }, {
                    readonly type: "template";
                    readonly template: {
                        readonly V1: {
                            readonly parents: "1";
                            readonly interior: {
                                readonly X2: readonly [{
                                    readonly Parachain: "2024";
                                }, {
                                    readonly AccountId32: {
                                        readonly id: "$1";
                                        readonly network: "Any";
                                    };
                                }];
                            };
                        };
                    };
                }, {
                    readonly type: "value";
                    readonly value: "0";
                }];
                readonly argTypes: readonly ["AcalaPrimitivesCurrencyCurrencyId", "u128", "XcmVersionedMultiLocation", "u64"];
                readonly callIndex: "3600";
            };
            readonly types: "{\n    \"AcalaPrimitivesCurrencyTokenSymbol\": {\n      \"_enum\": {\n        \"Aca\": 0,\n        \"Ausd\": 1,\n        \"Dot\": 2,\n        \"Ldot\": 3,\n        \"Renbtc\": 20,\n        \"Cash\": 21,\n        \"Kar\": 128,\n        \"Kusd\": 129,\n        \"Ksm\": 130,\n        \"Lksm\": 131,\n        \"Tai\": 132,\n        \"Bnc\": 168,\n        \"Vsksm\": 169,\n        \"Pha\": 170,\n        \"Kint\": 171,\n        \"Kbtc\": 172\n      }\n    },\n    \"XcmV1MultilocationJunctions\": {\n      \"_enum\": {\n        \"Here\": null,\n        \"X1\": \"XcmV1Junction\",\n        \"X2\": \"(XcmV1Junction, XcmV1Junction)\",\n        \"X3\": \"Data\",\n        \"X4\": \"Data\",\n        \"X5\": \"Data\",\n        \"X6\": \"Data\",\n        \"X7\": \"Data\"\n      }\n    },\n    \"XcmV1MultiLocation\": {\n      \"parents\": \"u8\",\n      \"interior\": \"XcmV1MultilocationJunctions\"\n    },\n    \"XcmV1Junction\": {\n      \"_enum\": {\n        \"Parachain\": \"Compact<u32>\",\n        \"AccountId32\": {\n          \"network\": \"NetworkId\",\n          \"id\": \"AccountId\"\n        },\n        \"GeneralIndex\": \"Compact<u128>\",\n        \"Plurality\": \"Data\",\n        \"OnlyChild\": null,\n        \"AccountKey20\": \"Data\",\n        \"PalletInstance\": \"u8\",\n        \"GeneralKey\": \"Data\"\n      }\n    },\n    \"XcmV0MultiLocation\": \"Data\",\n    \"XcmVersionedMultiLocation\": {\n      \"_enum\": {\n        \"V0\": \"XcmV0MultiLocation\",\n        \"V1\": \"XcmV1MultiLocation\"\n      }\n    },\n    \"AccountInfo\": {\n      \"nonce\": \"u32\",\n      \"consumer\": \"u32\",\n      \"providers\": \"u32\",\n      \"sufficients\": \"u32\",\n      \"data\": {\n        \"free\": \"u128\",\n        \"reserved\": \"u128\",\n        \"miscFrozen\": \"u128\",\n        \"feeFrozen\": \"u128\"\n      }\n    },\n    \"OrmlTokensAccountData\": {\n      \"free\": \"u128\",\n      \"reserved\": \"u128\",\n      \"frozen\": \"u128\"\n    },\n    \"AcalaPrimitivesCurrencyCurrencyId\": {\n      \"_enum\": {\n        \"Token\": \"AcalaPrimitivesCurrencyTokenSymbol\",\n        \"DexShare\": \"Data\",\n        \"Erc20\": \"Data\",\n        \"StableAssetPoolToken\": \"Data\",\n        \"LiquidCrowdloan\": \"Data\",\n        \"ForeignAsset\": \"u16\"\n      }\n    }\n  }";
            readonly paraId: 2000;
            readonly createdAt: "2022-10-26T13:32:04.967Z";
            readonly updatedAt: "2022-10-26T13:32:04.967Z";
            readonly logo: {
                readonly data: {
                    readonly id: 99;
                    readonly attributes: {
                        readonly name: "icon_old (3).svg";
                        readonly alternativeText: null;
                        readonly caption: null;
                        readonly width: 30;
                        readonly height: 30;
                        readonly formats: null;
                        readonly hash: "icon_old_3_fadda8fd86";
                        readonly ext: ".svg";
                        readonly mime: "image/svg+xml";
                        readonly size: 2.03;
                        readonly url: "/uploads/icon_old_3_fadda8fd86.svg";
                        readonly previewUrl: null;
                        readonly provider: "local";
                        readonly provider_metadata: null;
                        readonly createdAt: "2022-10-26T13:32:04.488Z";
                        readonly updatedAt: "2022-10-26T13:32:04.488Z";
                    };
                };
            };
        };
    }, {
        readonly id: 4;
        readonly attributes: {
            readonly name: "polkadot-testnet";
            readonly nativeToken: "dot";
            readonly balanceMethodTemplate: "";
            readonly balanceReturnType: "";
            readonly balanceParser: "";
            readonly nodes: "wss://testnet.equilibrium.io/eq/relay/api/wss";
            readonly nativeBalanceMethodTemplate: "0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}";
            readonly nativeBalanceReturnType: "AccountInfo";
            readonly nativeBalanceParser: "data.free,10";
            readonly title: "Relay Testnet";
            readonly xcm: {
                readonly args: readonly [{
                    readonly type: "template";
                    readonly template: {
                        readonly V1: {
                            readonly parents: "0";
                            readonly interior: {
                                readonly X1: {
                                    readonly Parachain: "2011";
                                };
                            };
                        };
                    };
                }, {
                    readonly type: "template";
                    readonly template: {
                        readonly V1: {
                            readonly parents: 0;
                            readonly interior: {
                                readonly X1: {
                                    readonly AccountId32: {
                                        readonly id: "$1";
                                        readonly network: "Any";
                                    };
                                };
                            };
                        };
                    };
                }, {
                    readonly type: "template";
                    readonly template: {
                        readonly V1: readonly [{
                            readonly id: {
                                readonly Concrete: {
                                    readonly parents: 0;
                                    readonly interior: "Here";
                                };
                            };
                            readonly fun: {
                                readonly Fungible: "$0";
                            };
                        }];
                    };
                    readonly transform: {
                        readonly "0": readonly ["decimals", "10"];
                    };
                }, {
                    readonly type: "value";
                    readonly value: "0";
                }];
                readonly argTypes: readonly ["XcmVersionedMultiLocation", "XcmVersionedMultiLocation", "XcmVersionedMultiAssets", "u32"];
                readonly callIndex: "6302";
            };
            readonly types: "{\n  \"AccountInfo\": {\n    \"nonce\": \"u32\",\n    \"consumer\": \"u32\",\n    \"providers\": \"u32\",\n    \"sufficients\": \"u32\",\n    \"data\": {\n      \"free\": \"u128\",\n      \"reserved\": \"u128\",\n      \"miscFrozen\": \"u128\",\n      \"feeFrozen\": \"u128\"\n    }\n  },\n  \"AssetInstanceV1\": {\n    \"_enum\": {\n      \"Undefined\": null,\n      \"Index\": \"Compact<u128>\",\n      \"Array4\": \"[u8; 4]\",\n      \"Array8\": \"[u8; 8]\",\n      \"Array16\": \"[u8; 16]\",\n      \"Array32\": \"[u8; 32]\",\n      \"Blob\": \"Data\"\n    }\n  },\n  \"FungibilityV1\": {\n    \"_enum\": {\n      \"Fungible\": \"Compact<u128>\",\n      \"NonFungible\": \"AssetInstanceV1\"\n    }\n  },\n  \"XcmAssetId\": {\n    \"_enum\": {\n      \"Concrete\": \"XcmV1MultiLocation\",\n      \"Abstract\": \"Data\"\n    }\n  },\n  \"XcmV1MultiAsset\": {\n    \"id\": \"XcmAssetId\",\n    \"fun\": \"FungibilityV1\"\n  },\n  \"XcmV1Junction\": {\n    \"_enum\": {\n      \"Parachain\": \"Compact<u32>\",\n      \"AccountId32\": {\n        \"network\": \"NetworkId\",\n        \"id\": \"AccountId\"\n      },\n      \"GeneralIndex\": \"Compact<u128>\",\n      \"Plurality\": \"Data\",\n      \"OnlyChild\": null,\n      \"AccountKey20\": \"Data\",\n      \"PalletInstance\": \"u8\",\n      \"GeneralKey\": \"Data\"\n    }\n  },\n  \"XcmV1MultilocationJunctions\": {\n    \"_enum\": {\n      \"Here\": null,\n      \"X1\": \"XcmV1Junction\",\n      \"X2\": \"(XcmV1Junction, XcmV1Junction)\",\n      \"X3\": \"Data\",\n      \"X4\": \"Data\",\n      \"X5\": \"Data\",\n      \"X6\": \"Data\",\n      \"X7\": \"Data\"\n    }\n  },\n  \"XcmV0MultiLocation\": \"Data\",\n  \"XcmV1MultiLocation\": {\n    \"parents\": \"u8\",\n    \"interior\": \"XcmV1MultilocationJunctions\"\n  },\n  \"XcmVersionedMultiAssets\": {\n    \"_enum\": {\n      \"V0\": \"Vec<Data>\",\n      \"V1\": \"Vec<XcmV1MultiAsset>\",\n      \"V2\": \"Vec<XcmV1MultiAsset>\"\n    }\n  },\n  \"XcmVersionedMultiLocation\": {\n    \"_enum\": {\n      \"V0\": \"XcmV0MultiLocation\",\n      \"V1\": \"XcmV1MultiLocation\"\n    }\n  }\n}\n";
            readonly paraId: 2011;
            readonly createdAt: "2022-10-26T13:32:06.293Z";
            readonly updatedAt: "2023-02-16T11:58:08.171Z";
            readonly logo: {
                readonly data: null;
            };
        };
    }, {
        readonly id: 7;
        readonly attributes: {
            readonly name: "acala-testnet";
            readonly nativeToken: "aca";
            readonly balanceMethodTemplate: "0x99971b5749ac43e0235e41b0d37869188ee7418a6531173d60d1f6a82d8f4d51{Blake2_128Concat,0}{Twox64Concat,cid}";
            readonly balanceReturnType: "OrmlTokensAccountData";
            readonly balanceParser: "free,12";
            readonly nodes: "wss://parachain-testnet.equilab.io/acala/collator/node1/wss";
            readonly nativeBalanceMethodTemplate: "0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}";
            readonly nativeBalanceReturnType: "AccountInfo";
            readonly nativeBalanceParser: "data.free,12";
            readonly title: "Acala Testnet";
            readonly xcm: {
                readonly args: readonly [{
                    readonly type: "template";
                    readonly template: {
                        readonly $type: "$id";
                    };
                }, {
                    readonly type: "arg";
                    readonly index: "0";
                    readonly transform: readonly ["decimals", "12"];
                }, {
                    readonly type: "template";
                    readonly template: {
                        readonly V1: {
                            readonly parents: "1";
                            readonly interior: {
                                readonly X2: readonly [{
                                    readonly Parachain: "2011";
                                }, {
                                    readonly AccountId32: {
                                        readonly id: "$1";
                                        readonly network: "Any";
                                    };
                                }];
                            };
                        };
                    };
                }, {
                    readonly type: "value";
                    readonly value: "0";
                }];
                readonly argTypes: readonly ["AcalaPrimitivesCurrencyCurrencyId", "u128", "XcmVersionedMultiLocation", "u64"];
                readonly callIndex: "3600";
            };
            readonly types: "{\n    \"AcalaPrimitivesCurrencyTokenSymbol\": {\n      \"_enum\": {\n        \"Aca\": 0,\n        \"Ausd\": 1,\n        \"Dot\": 2,\n        \"Ldot\": 3,\n        \"Renbtc\": 20,\n        \"Cash\": 21,\n        \"Kar\": 128,\n        \"Kusd\": 129,\n        \"Ksm\": 130,\n        \"Lksm\": 131,\n        \"Tai\": 132,\n        \"Bnc\": 168,\n        \"Vsksm\": 169,\n        \"Pha\": 170,\n        \"Kint\": 171,\n        \"Kbtc\": 172\n      }\n    },\n    \"XcmV1MultilocationJunctions\": {\n      \"_enum\": {\n        \"Here\": null,\n        \"X1\": \"XcmV1Junction\",\n        \"X2\": \"(XcmV1Junction, XcmV1Junction)\",\n        \"X3\": \"Data\",\n        \"X4\": \"Data\",\n        \"X5\": \"Data\",\n        \"X6\": \"Data\",\n        \"X7\": \"Data\"\n      }\n    },\n    \"XcmV1MultiLocation\": {\n      \"parents\": \"u8\",\n      \"interior\": \"XcmV1MultilocationJunctions\"\n    },\n    \"XcmV1Junction\": {\n      \"_enum\": {\n        \"Parachain\": \"Compact<u32>\",\n        \"AccountId32\": {\n          \"network\": \"NetworkId\",\n          \"id\": \"AccountId\"\n        },\n        \"GeneralIndex\": \"Compact<u128>\",\n        \"Plurality\": \"Data\",\n        \"OnlyChild\": null,\n        \"AccountKey20\": \"Data\",\n        \"PalletInstance\": \"u8\",\n        \"GeneralKey\": \"Data\"\n      }\n    },\n    \"XcmV0MultiLocation\": \"Data\",\n    \"XcmVersionedMultiLocation\": {\n      \"_enum\": {\n        \"V0\": \"XcmV0MultiLocation\",\n        \"V1\": \"XcmV1MultiLocation\"\n      }\n    },\n    \"AccountInfo\": {\n      \"nonce\": \"u32\",\n      \"consumer\": \"u32\",\n      \"providers\": \"u32\",\n      \"sufficients\": \"u32\",\n      \"data\": {\n        \"free\": \"u128\",\n        \"reserved\": \"u128\",\n        \"miscFrozen\": \"u128\",\n        \"feeFrozen\": \"u128\"\n      }\n    },\n    \"OrmlTokensAccountData\": {\n      \"free\": \"u128\",\n      \"reserved\": \"u128\",\n      \"frozen\": \"u128\"\n    },\n    \"AcalaPrimitivesCurrencyCurrencyId\": {\n      \"_enum\": {\n        \"Token\": \"AcalaPrimitivesCurrencyTokenSymbol\",\n        \"DexShare\": \"Data\",\n        \"Erc20\": \"Data\",\n        \"StableAssetPoolToken\": \"Data\",\n        \"LiquidCrowdloan\": \"Data\",\n        \"ForeignAsset\": \"u16\"\n      }\n    }\n  }";
            readonly paraId: 2000;
            readonly createdAt: "2022-10-26T13:32:10.422Z";
            readonly updatedAt: "2022-10-26T13:32:10.422Z";
            readonly logo: {
                readonly data: {
                    readonly id: 103;
                    readonly attributes: {
                        readonly name: "acala.png";
                        readonly alternativeText: null;
                        readonly caption: null;
                        readonly width: 128;
                        readonly height: 128;
                        readonly formats: null;
                        readonly hash: "acala_ba88e0cdaa";
                        readonly ext: ".png";
                        readonly mime: "image/png";
                        readonly size: 13.07;
                        readonly url: "/uploads/acala_ba88e0cdaa.png";
                        readonly previewUrl: null;
                        readonly provider: "local";
                        readonly provider_metadata: null;
                        readonly createdAt: "2022-10-26T13:32:09.945Z";
                        readonly updatedAt: "2022-10-26T13:32:09.945Z";
                    };
                };
            };
        };
    }, {
        readonly id: 8;
        readonly attributes: {
            readonly name: "moonbeam-eq-testnet";
            readonly nativeToken: "glmr";
            readonly balanceMethodTemplate: null;
            readonly balanceReturnType: null;
            readonly balanceParser: null;
            readonly nodes: "wss://parachain-testnet.equilab.io/moonbeam/collator/node1/wss";
            readonly nativeBalanceMethodTemplate: "0x00";
            readonly nativeBalanceReturnType: null;
            readonly nativeBalanceParser: null;
            readonly title: "Moonbeam Testnet";
            readonly xcm: {
                readonly args: readonly [{
                    readonly type: "template";
                    readonly template: {
                        readonly V1: {
                            readonly parents: "0";
                            readonly interior: {
                                readonly X1: {
                                    readonly Parachain: "2011";
                                };
                            };
                        };
                    };
                }, {
                    readonly type: "template";
                    readonly template: {
                        readonly V1: {
                            readonly parents: 0;
                            readonly interior: {
                                readonly X1: {
                                    readonly AccountId32: {
                                        readonly id: "$1";
                                        readonly network: "Any";
                                    };
                                };
                            };
                        };
                    };
                }, {
                    readonly type: "template";
                    readonly template: {
                        readonly V1: readonly [{
                            readonly id: {
                                readonly Concrete: {
                                    readonly parents: 0;
                                    readonly interior: "Here";
                                };
                            };
                            readonly fun: {
                                readonly Fungible: "$0";
                            };
                        }];
                    };
                    readonly transform: {
                        readonly "0": readonly ["decimals", "10"];
                    };
                }, {
                    readonly type: "value";
                    readonly value: "0";
                }];
                readonly argTypes: readonly ["XcmVersionedMultiLocation", "XcmVersionedMultiLocation", "XcmVersionedMultiAssets", "u32"];
                readonly callIndex: "6302";
            };
            readonly types: "{}";
            readonly paraId: 2004;
            readonly createdAt: "2022-10-26T13:32:11.727Z";
            readonly updatedAt: "2022-12-01T16:16:47.286Z";
            readonly logo: {
                readonly data: {
                    readonly id: 104;
                    readonly attributes: {
                        readonly name: "glmr.webp";
                        readonly alternativeText: null;
                        readonly caption: null;
                        readonly width: 50;
                        readonly height: 50;
                        readonly formats: null;
                        readonly hash: "glmr_d5b6aea515";
                        readonly ext: ".webp";
                        readonly mime: "image/webp";
                        readonly size: 0.87;
                        readonly url: "/uploads/glmr_d5b6aea515.webp";
                        readonly previewUrl: null;
                        readonly provider: "local";
                        readonly provider_metadata: null;
                        readonly createdAt: "2022-10-26T13:32:11.271Z";
                        readonly updatedAt: "2022-10-26T13:32:11.271Z";
                    };
                };
            };
        };
    }, {
        readonly id: 9;
        readonly attributes: {
            readonly name: "acala-mainnet";
            readonly nativeToken: "aca";
            readonly balanceMethodTemplate: "0x99971b5749ac43e0235e41b0d37869188ee7418a6531173d60d1f6a82d8f4d51{Blake2_128Concat,0}{Twox64Concat,cid}";
            readonly balanceReturnType: "OrmlTokensAccountData";
            readonly balanceParser: "free,12";
            readonly nodes: "wss://acala-rpc-3.aca-api.network/ws";
            readonly nativeBalanceMethodTemplate: "0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}";
            readonly nativeBalanceReturnType: "AccountInfo";
            readonly nativeBalanceParser: "data.free,12";
            readonly title: "Acala Mainnet";
            readonly xcm: {
                readonly args: readonly [{
                    readonly type: "template";
                    readonly template: {
                        readonly $type: "$id";
                    };
                }, {
                    readonly type: "arg";
                    readonly index: "0";
                    readonly transform: readonly ["decimals", "12"];
                }, {
                    readonly type: "template";
                    readonly template: {
                        readonly V1: {
                            readonly parents: "1";
                            readonly interior: {
                                readonly X2: readonly [{
                                    readonly Parachain: "2011";
                                }, {
                                    readonly AccountId32: {
                                        readonly id: "$1";
                                        readonly network: "Any";
                                    };
                                }];
                            };
                        };
                    };
                }, {
                    readonly type: "value";
                    readonly value: "0";
                }];
                readonly argTypes: readonly ["AcalaPrimitivesCurrencyCurrencyId", "u128", "XcmVersionedMultiLocation", "u64"];
                readonly callIndex: "3600";
            };
            readonly types: "{\n    \"AcalaPrimitivesCurrencyTokenSymbol\": {\n      \"_enum\": {\n        \"Aca\": 0,\n        \"Ausd\": 1,\n        \"Dot\": 2,\n        \"Ldot\": 3,\n        \"Renbtc\": 20,\n        \"Cash\": 21,\n        \"Kar\": 128,\n        \"Kusd\": 129,\n        \"Ksm\": 130,\n        \"Lksm\": 131,\n        \"Tai\": 132,\n        \"Bnc\": 168,\n        \"Vsksm\": 169,\n        \"Pha\": 170,\n        \"Kint\": 171,\n        \"Kbtc\": 172\n      }\n    },\n    \"XcmV1MultilocationJunctions\": {\n      \"_enum\": {\n        \"Here\": null,\n        \"X1\": \"XcmV1Junction\",\n        \"X2\": \"(XcmV1Junction, XcmV1Junction)\",\n        \"X3\": \"Data\",\n        \"X4\": \"Data\",\n        \"X5\": \"Data\",\n        \"X6\": \"Data\",\n        \"X7\": \"Data\"\n      }\n    },\n    \"XcmV1MultiLocation\": {\n      \"parents\": \"u8\",\n      \"interior\": \"XcmV1MultilocationJunctions\"\n    },\n    \"XcmV1Junction\": {\n      \"_enum\": {\n        \"Parachain\": \"Compact<u32>\",\n        \"AccountId32\": {\n          \"network\": \"NetworkId\",\n          \"id\": \"AccountId\"\n        },\n        \"GeneralIndex\": \"Compact<u128>\",\n        \"Plurality\": \"Data\",\n        \"OnlyChild\": null,\n        \"AccountKey20\": \"Data\",\n        \"PalletInstance\": \"u8\",\n        \"GeneralKey\": \"Data\"\n      }\n    },\n    \"XcmV0MultiLocation\": \"Data\",\n    \"XcmVersionedMultiLocation\": {\n      \"_enum\": {\n        \"V0\": \"XcmV0MultiLocation\",\n        \"V1\": \"XcmV1MultiLocation\"\n      }\n    },\n    \"AccountInfo\": {\n      \"nonce\": \"u32\",\n      \"consumer\": \"u32\",\n      \"providers\": \"u32\",\n      \"sufficients\": \"u32\",\n      \"data\": {\n        \"free\": \"u128\",\n        \"reserved\": \"u128\",\n        \"miscFrozen\": \"u128\",\n        \"feeFrozen\": \"u128\"\n      }\n    },\n    \"OrmlTokensAccountData\": {\n      \"free\": \"u128\",\n      \"reserved\": \"u128\",\n      \"frozen\": \"u128\"\n    },\n    \"AcalaPrimitivesCurrencyCurrencyId\": {\n      \"_enum\": {\n        \"Token\": \"AcalaPrimitivesCurrencyTokenSymbol\",\n        \"DexShare\": \"Data\",\n        \"Erc20\": \"Data\",\n        \"StableAssetPoolToken\": \"Data\",\n        \"LiquidCrowdloan\": \"Data\",\n        \"ForeignAsset\": \"u16\"\n      }\n    }\n  }";
            readonly paraId: 2000;
            readonly createdAt: "2022-10-26T13:32:13.025Z";
            readonly updatedAt: "2023-02-20T12:47:26.807Z";
            readonly logo: {
                readonly data: {
                    readonly id: 105;
                    readonly attributes: {
                        readonly name: "acala.png";
                        readonly alternativeText: null;
                        readonly caption: null;
                        readonly width: 128;
                        readonly height: 128;
                        readonly formats: null;
                        readonly hash: "acala_7254239a01";
                        readonly ext: ".png";
                        readonly mime: "image/png";
                        readonly size: 13.07;
                        readonly url: "/uploads/acala_7254239a01.png";
                        readonly previewUrl: null;
                        readonly provider: "local";
                        readonly provider_metadata: null;
                        readonly createdAt: "2022-10-26T13:32:12.561Z";
                        readonly updatedAt: "2022-10-26T13:32:12.561Z";
                    };
                };
            };
        };
    }, {
        readonly id: 11;
        readonly attributes: {
            readonly name: "polkadot";
            readonly nativeToken: "dot";
            readonly balanceMethodTemplate: "";
            readonly balanceReturnType: "";
            readonly balanceParser: "";
            readonly nodes: "wss://rpc.polkadot.io";
            readonly nativeBalanceMethodTemplate: "0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}";
            readonly nativeBalanceReturnType: "AccountInfo";
            readonly nativeBalanceParser: "data.free,10";
            readonly title: "Polkadot Relay";
            readonly xcm: {
                readonly args: readonly [{
                    readonly type: "template";
                    readonly template: {
                        readonly V1: {
                            readonly parents: "0";
                            readonly interior: {
                                readonly X1: {
                                    readonly Parachain: "2011";
                                };
                            };
                        };
                    };
                }, {
                    readonly type: "template";
                    readonly template: {
                        readonly V1: {
                            readonly parents: 0;
                            readonly interior: {
                                readonly X1: {
                                    readonly AccountId32: {
                                        readonly id: "$1";
                                        readonly network: "Any";
                                    };
                                };
                            };
                        };
                    };
                }, {
                    readonly type: "template";
                    readonly template: {
                        readonly V1: readonly [{
                            readonly id: {
                                readonly Concrete: {
                                    readonly parents: 0;
                                    readonly interior: "Here";
                                };
                            };
                            readonly fun: {
                                readonly Fungible: "$0";
                            };
                        }];
                    };
                    readonly transform: {
                        readonly "0": readonly ["decimals", "10"];
                    };
                }, {
                    readonly type: "value";
                    readonly value: "0";
                }];
                readonly argTypes: readonly ["XcmVersionedMultiLocation", "XcmVersionedMultiLocation", "XcmVersionedMultiAssets", "u32"];
                readonly callIndex: "6302";
            };
            readonly types: "{\n  \"SpWeightsWeightV2Weight\": {\n    \"refTime\": \"Compact<u64>\",\n    \"proofSize\": \"Compact<u64>\"\n  },\n  \"FrameSupportDispatchDispatchClass\": {\n    \"_enum\": [\"Normal\", \"Operational\", \"Mandatory\"]\n  },\n  \"RuntimeDispatchInfo\": {\n    \"weight\": \"SpWeightsWeightV2Weight\",\n    \"class\": \"FrameSupportDispatchDispatchClass\",\n    \"partialFee\": \"u128\"\n  },\n  \"AccountInfo\": {\n    \"nonce\": \"u32\",\n    \"consumer\": \"u32\",\n    \"providers\": \"u32\",\n    \"sufficients\": \"u32\",\n    \"data\": {\n      \"free\": \"u128\",\n      \"reserved\": \"u128\",\n      \"miscFrozen\": \"u128\",\n      \"feeFrozen\": \"u128\"\n    }\n  },\n  \"AssetInstanceV1\": {\n    \"_enum\": {\n      \"Undefined\": null,\n      \"Index\": \"Compact<u128>\",\n      \"Array4\": \"[u8; 4]\",\n      \"Array8\": \"[u8; 8]\",\n      \"Array16\": \"[u8; 16]\",\n      \"Array32\": \"[u8; 32]\",\n      \"Blob\": \"Data\"\n    }\n  },\n  \"FungibilityV1\": {\n    \"_enum\": {\n      \"Fungible\": \"Compact<u128>\",\n      \"NonFungible\": \"AssetInstanceV1\"\n    }\n  },\n  \"XcmAssetId\": {\n    \"_enum\": {\n      \"Concrete\": \"XcmV1MultiLocation\",\n      \"Abstract\": \"Data\"\n    }\n  },\n  \"XcmV1MultiAsset\": {\n    \"id\": \"XcmAssetId\",\n    \"fun\": \"FungibilityV1\"\n  },\n  \"XcmV1Junction\": {\n    \"_enum\": {\n      \"Parachain\": \"Compact<u32>\",\n      \"AccountId32\": {\n        \"network\": \"NetworkId\",\n        \"id\": \"AccountId\"\n      },\n      \"GeneralIndex\": \"Compact<u128>\",\n      \"Plurality\": \"Data\",\n      \"OnlyChild\": null,\n      \"AccountKey20\": \"Data\",\n      \"PalletInstance\": \"u8\",\n      \"GeneralKey\": \"Data\"\n    }\n  },\n  \"XcmV1MultilocationJunctions\": {\n    \"_enum\": {\n      \"Here\": null,\n      \"X1\": \"XcmV1Junction\",\n      \"X2\": \"(XcmV1Junction, XcmV1Junction)\",\n      \"X3\": \"Data\",\n      \"X4\": \"Data\",\n      \"X5\": \"Data\",\n      \"X6\": \"Data\",\n      \"X7\": \"Data\"\n    }\n  },\n  \"XcmV0MultiLocation\": \"Data\",\n  \"XcmV1MultiLocation\": {\n    \"parents\": \"u8\",\n    \"interior\": \"XcmV1MultilocationJunctions\"\n  },\n  \"XcmVersionedMultiAssets\": {\n    \"_enum\": {\n      \"V0\": \"Vec<Data>\",\n      \"V1\": \"Vec<XcmV1MultiAsset>\",\n      \"V2\": \"Vec<XcmV1MultiAsset>\"\n    }\n  },\n  \"XcmVersionedMultiLocation\": {\n    \"_enum\": {\n      \"V0\": \"XcmV0MultiLocation\",\n      \"V1\": \"XcmV1MultiLocation\"\n    }\n  }\n}\n";
            readonly paraId: 2011;
            readonly createdAt: "2022-12-07T13:27:40.679Z";
            readonly updatedAt: "2023-01-26T06:47:48.063Z";
            readonly logo: {
                readonly data: null;
            };
        };
    }, {
        readonly id: 14;
        readonly attributes: {
            readonly name: "parallel";
            readonly nativeToken: "para";
            readonly balanceMethodTemplate: "0x682a59d51ab9e48a8c8cc418ff9708d2b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,assetId}{Blake2_128Concat,0}";
            readonly balanceReturnType: "PalletAssetsAssetAccount";
            readonly balanceParser: "withDecimals(result(balance), decimals)";
            readonly nodes: "wss://rpc.parallel.fi";
            readonly nativeBalanceMethodTemplate: "0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}";
            readonly nativeBalanceReturnType: "AccountInfo";
            readonly nativeBalanceParser: "withDecimals(minus(result(data, free),result(data, miscFrozen)), 12)";
            readonly title: "Parallel";
            readonly xcm: {
                readonly args: readonly [{
                    readonly name: "assetIdReverse";
                    readonly type: "param";
                }, {
                    readonly type: "arg";
                    readonly index: "0";
                    readonly transform: readonly ["decimals", "10"];
                }, {
                    readonly type: "template";
                    readonly template: {
                        readonly V1: {
                            readonly parents: 1;
                            readonly interior: {
                                readonly X2: readonly [{
                                    readonly Parachain: "2011";
                                }, {
                                    readonly AccountId32: {
                                        readonly id: "$1";
                                        readonly network: "Any";
                                    };
                                }];
                            };
                        };
                    };
                }, {
                    readonly type: "value";
                    readonly value: "Unlimited";
                }];
                readonly argTypes: readonly ["u32", "u128", "XcmVersionedMultiLocation", "XcmV2WeightLimit"];
                readonly callIndex: "2b00";
            };
            readonly types: "{\n  \"SpWeightsWeightV2Weight\": {\n    \"refTime\": \"Compact<u64>\",\n    \"proofSize\": \"Compact<u64>\"\n  },\n  \"FrameSupportDispatchDispatchClass\": {\n    \"_enum\": [\"Normal\", \"Operational\", \"Mandatory\"]\n  },\n  \"RuntimeDispatchInfo\": {\n    \"weight\": \"SpWeightsWeightV2Weight\",\n    \"class\": \"FrameSupportDispatchDispatchClass\",\n    \"partialFee\": \"u128\"\n  },\n  \"AccountInfo\": {\n    \"nonce\": \"u32\",\n    \"consumer\": \"u32\",\n    \"providers\": \"u32\",\n    \"sufficients\": \"u32\",\n    \"data\": {\n      \"free\": \"u128\",\n      \"reserved\": \"u128\",\n      \"miscFrozen\": \"u128\",\n      \"feeFrozen\": \"u128\"\n    }\n  },\n  \"AssetInstanceV1\": {\n    \"_enum\": {\n      \"Undefined\": null,\n      \"Index\": \"Compact<u128>\",\n      \"Array4\": \"[u8; 4]\",\n      \"Array8\": \"[u8; 8]\",\n      \"Array16\": \"[u8; 16]\",\n      \"Array32\": \"[u8; 32]\",\n      \"Blob\": \"Data\"\n    }\n  },\n  \"FungibilityV1\": {\n    \"_enum\": {\n      \"Fungible\": \"Compact<u128>\",\n      \"NonFungible\": \"AssetInstanceV1\"\n    }\n  },\n  \"PalletAssetsAssetAccount\": {\n    \"balance\": \"u128\",\n    \"isFrozen\": \"bool\",\n    \"reason\": \"PalletAssetsExistenceReason\",\n    \"extra\": \"Null\"\n  },\n  \"PalletAssetsExistenceReason\": {\n    \"_enum\": {\n      \"Consumer\": \"Null\",\n      \"Sufficient\": \"Null\",\n      \"DepositHeld\": \"u128\",\n      \"DepositRefunded\": \"Null\"\n    }\n  },\n  \"XcmAssetId\": {\n    \"_enum\": {\n      \"Concrete\": \"XcmV1MultiLocation\",\n      \"Abstract\": \"Data\"\n    }\n  },\n  \"XcmV1MultiAsset\": {\n    \"id\": \"XcmAssetId\",\n    \"fun\": \"FungibilityV1\"\n  },\n  \"XcmV1Junction\": {\n    \"_enum\": {\n      \"Parachain\": \"Compact<u32>\",\n      \"AccountId32\": {\n        \"network\": \"XcmV0JunctionNetworkId\",\n        \"id\": \"[u8;32]\"\n      },\n      \"AccountIndex64\": {\n        \"network\": \"XcmV0JunctionNetworkId\",\n        \"index\": \"Compact<u64>\"\n      },\n      \"AccountKey20\": {\n        \"network\": \"XcmV0JunctionNetworkId\",\n        \"key\": \"[u8;20]\"\n      },\n      \"PalletInstance\": \"u8\",\n      \"GeneralIndex\": \"Compact<u128>\",\n      \"GeneralKey\": \"Bytes\"\n    }\n  },\n  \"XcmV0JunctionNetworkId\": {\n    \"_enum\": {\n      \"Any\": \"Null\",\n      \"Named\": \"Bytes\",\n      \"Polkadot\": \"Null\",\n      \"Kusama\": \"Null\"\n    }\n  },\n  \"XcmV1MultilocationJunctions\": {\n    \"_enum\": {\n      \"Here\": null,\n      \"X1\": \"XcmV1Junction\",\n      \"X2\": \"(XcmV1Junction, XcmV1Junction)\",\n      \"X3\": \"Data\",\n      \"X4\": \"Data\",\n      \"X5\": \"Data\",\n      \"X6\": \"Data\",\n      \"X7\": \"Data\"\n    }\n  },\n  \"XcmV0MultiLocation\": \"Data\",\n  \"XcmV1MultiLocation\": {\n    \"parents\": \"u8\",\n    \"interior\": \"XcmV1MultilocationJunctions\"\n  },\n  \"XcmV2WeightLimit\": {\n    \"_enum\": {\n      \"Unlimited\": \"Null\",\n      \"Limited\": \"Compact<u64>\"\n    }\n  },\n  \"XcmVersionedMultiAssets\": {\n    \"_enum\": {\n      \"V0\": \"Vec<Data>\",\n      \"V1\": \"Vec<XcmV1MultiAsset>\",\n      \"V2\": \"Vec<XcmV1MultiAsset>\"\n    }\n  },\n  \"XcmVersionedMultiLocation\": {\n    \"_enum\": {\n      \"V0\": \"XcmV0MultiLocation\",\n      \"V1\": \"XcmV1MultiLocation\"\n    }\n  }\n}\n";
            readonly paraId: 2012;
            readonly createdAt: "2022-12-27T08:37:16.884Z";
            readonly updatedAt: "2023-03-10T12:20:58.974Z";
            readonly logo: {
                readonly data: {
                    readonly id: 163;
                    readonly attributes: {
                        readonly name: "parallel.3b34b5d6..svg";
                        readonly alternativeText: "parallel.3b34b5d6..svg";
                        readonly caption: "parallel.3b34b5d6..svg";
                        readonly width: 200;
                        readonly height: 200;
                        readonly formats: null;
                        readonly hash: "parallel_3b34b5d6_ee793f8b57";
                        readonly ext: ".svg";
                        readonly mime: "image/svg+xml";
                        readonly size: 1.27;
                        readonly url: "/uploads/parallel_3b34b5d6_ee793f8b57.svg";
                        readonly previewUrl: null;
                        readonly provider: "local";
                        readonly provider_metadata: null;
                        readonly createdAt: "2022-12-27T08:37:01.568Z";
                        readonly updatedAt: "2022-12-27T08:37:01.568Z";
                    };
                };
            };
        };
    }, {
        readonly id: 15;
        readonly attributes: {
            readonly name: "moonbeam";
            readonly nativeToken: "glmr";
            readonly balanceMethodTemplate: null;
            readonly balanceReturnType: null;
            readonly balanceParser: null;
            readonly nodes: "wss://wss.api.moonbeam.network";
            readonly nativeBalanceMethodTemplate: "0x00";
            readonly nativeBalanceReturnType: null;
            readonly nativeBalanceParser: ",18";
            readonly title: "Moonbeam";
            readonly xcm: {
                readonly args: readonly [];
                readonly type: "evm";
                readonly argTypes: readonly [];
                readonly callIndex: "6302";
            };
            readonly types: "{}";
            readonly paraId: 2004;
            readonly createdAt: "2023-01-17T10:25:04.282Z";
            readonly updatedAt: "2023-01-30T09:32:44.357Z";
            readonly logo: {
                readonly data: {
                    readonly id: 104;
                    readonly attributes: {
                        readonly name: "glmr.webp";
                        readonly alternativeText: null;
                        readonly caption: null;
                        readonly width: 50;
                        readonly height: 50;
                        readonly formats: null;
                        readonly hash: "glmr_d5b6aea515";
                        readonly ext: ".webp";
                        readonly mime: "image/webp";
                        readonly size: 0.87;
                        readonly url: "/uploads/glmr_d5b6aea515.webp";
                        readonly previewUrl: null;
                        readonly provider: "local";
                        readonly provider_metadata: null;
                        readonly createdAt: "2022-10-26T13:32:11.271Z";
                        readonly updatedAt: "2022-10-26T13:32:11.271Z";
                    };
                };
            };
        };
    }, {
        readonly id: 19;
        readonly attributes: {
            readonly name: "moonbaseAlpha";
            readonly nativeToken: "glmr";
            readonly balanceMethodTemplate: null;
            readonly balanceReturnType: null;
            readonly balanceParser: null;
            readonly nodes: "wss://wss.api.moonbase.moonbeam.network";
            readonly nativeBalanceMethodTemplate: "0x00";
            readonly nativeBalanceReturnType: null;
            readonly nativeBalanceParser: ",18";
            readonly title: "Moonbase Alpha";
            readonly xcm: {
                readonly args: readonly [];
                readonly type: "evm";
                readonly argTypes: readonly [];
                readonly callIndex: "6302";
            };
            readonly types: "{}";
            readonly paraId: 2004;
            readonly createdAt: "2023-04-18T11:58:36.957Z";
            readonly updatedAt: "2023-04-18T11:58:36.957Z";
            readonly logo: {
                readonly data: {
                    readonly id: 104;
                    readonly attributes: {
                        readonly name: "glmr.webp";
                        readonly alternativeText: null;
                        readonly caption: null;
                        readonly width: 50;
                        readonly height: 50;
                        readonly formats: null;
                        readonly hash: "glmr_d5b6aea515";
                        readonly ext: ".webp";
                        readonly mime: "image/webp";
                        readonly size: 0.87;
                        readonly url: "/uploads/glmr_d5b6aea515.webp";
                        readonly previewUrl: null;
                        readonly provider: "local";
                        readonly provider_metadata: null;
                        readonly createdAt: "2022-10-26T13:32:11.271Z";
                        readonly updatedAt: "2022-10-26T13:32:11.271Z";
                    };
                };
            };
        };
    }];
    readonly meta: {
        readonly pagination: {
            readonly page: 1;
            readonly pageSize: 100;
            readonly pageCount: 1;
            readonly total: 19;
        };
    };
};
export default response;
