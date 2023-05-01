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
        readonly id: 5;
        readonly attributes: {
            readonly name: "genshiro-devnet";
            readonly nativeToken: "gens";
            readonly balanceMethodTemplate: "";
            readonly balanceReturnType: "";
            readonly balanceParser: "";
            readonly nodes: "wss://devnet.genshiro.io";
            readonly nativeBalanceMethodTemplate: "0x276c90850b9de2c495875fe945d2a9c7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}55c5ce389310185c39a3ca86bf21c7bd736e656700000000";
            readonly nativeBalanceReturnType: "SignedBalance";
            readonly nativeBalanceParser: "asPositive,9";
            readonly title: "Genshiro";
            readonly xcm: {
                readonly args: readonly [{
                    readonly type: "arg";
                    readonly index: "0";
                    readonly transform: readonly ["decimals", "9"];
                }, {
                    readonly type: "arg";
                    readonly index: "1";
                }, {
                    readonly type: "value";
                    readonly value: "7";
                }, {
                    readonly type: "value";
                    readonly value: "0x0000000000000000000000000000007a05c51f15d366ac77bc86672166836100";
                }];
                readonly argTypes: readonly ["u64", "Vec<u8>", "u8", "[u8; 32]"];
                readonly callIndex: "1b00";
            };
            readonly types: "{\n \"AccountInfo\": {\n    \"nonce\": \"u32\",\n    \"consumer\": \"u32\",\n    \"providers\": \"u32\"\n  },\n  \"SignedBalance\": {\n    \"_enum\": {\n      \"Positive\": \"u64\",\n      \"Negative\": \"u64\"\n    }\n  }\n}\n";
            readonly paraId: null;
            readonly createdAt: "2022-10-26T13:32:07.595Z";
            readonly updatedAt: "2022-10-26T13:32:07.595Z";
            readonly logo: {
                readonly data: {
                    readonly id: 101;
                    readonly attributes: {
                        readonly name: "gens.svg";
                        readonly alternativeText: null;
                        readonly caption: null;
                        readonly width: 28;
                        readonly height: 28;
                        readonly formats: null;
                        readonly hash: "gens_776a71ee2f";
                        readonly ext: ".svg";
                        readonly mime: "image/svg+xml";
                        readonly size: 10.51;
                        readonly url: "/uploads/gens_776a71ee2f.svg";
                        readonly previewUrl: null;
                        readonly provider: "local";
                        readonly provider_metadata: null;
                        readonly createdAt: "2022-10-26T13:32:07.131Z";
                        readonly updatedAt: "2022-10-26T13:32:07.131Z";
                    };
                };
            };
        };
    }, {
        readonly id: 6;
        readonly attributes: {
            readonly name: "genshiro-testnet";
            readonly nativeToken: "gens";
            readonly balanceMethodTemplate: "0x276c90850b9de2c495875fe945d2a9c7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}{Blake2_128Concat,assetId}";
            readonly balanceReturnType: "SignedBalance";
            readonly balanceParser: "asPositive,9";
            readonly nodes: "wss://testnet.genshiro.io";
            readonly nativeBalanceMethodTemplate: "0x276c90850b9de2c495875fe945d2a9c7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}55c5ce389310185c39a3ca86bf21c7bd736e656700000000";
            readonly nativeBalanceReturnType: "SignedBalance";
            readonly nativeBalanceParser: "asPositive,9";
            readonly title: "Genshiro";
            readonly xcm: {
                readonly args: readonly [{
                    readonly type: "arg";
                    readonly index: "0";
                    readonly transform: readonly ["decimals", "9"];
                }, {
                    readonly type: "arg";
                    readonly index: "1";
                }, {
                    readonly type: "value";
                    readonly value: "7";
                }, {
                    readonly name: "resourceId";
                    readonly type: "param";
                }];
                readonly argTypes: readonly ["u64", "Vec<u8>", "u8", "[u8; 32]"];
                readonly callIndex: "1b00";
            };
            readonly types: "{\n \"AccountInfo\": {\n    \"nonce\": \"u32\",\n    \"consumer\": \"u32\",\n    \"providers\": \"u32\"\n  },\n  \"Address\": \"AccountId\",\n  \"SignedBalance\": {\n    \"_enum\": {\n      \"Positive\": \"u64\",\n      \"Negative\": \"u64\"\n    }\n  }\n}\n";
            readonly paraId: null;
            readonly createdAt: "2022-10-26T13:32:09.100Z";
            readonly updatedAt: "2022-10-26T13:32:09.100Z";
            readonly logo: {
                readonly data: {
                    readonly id: 102;
                    readonly attributes: {
                        readonly name: "gens.svg";
                        readonly alternativeText: null;
                        readonly caption: null;
                        readonly width: 28;
                        readonly height: 28;
                        readonly formats: null;
                        readonly hash: "gens_3a86ed1c18";
                        readonly ext: ".svg";
                        readonly mime: "image/svg+xml";
                        readonly size: 10.51;
                        readonly url: "/uploads/gens_3a86ed1c18.svg";
                        readonly previewUrl: null;
                        readonly provider: "local";
                        readonly provider_metadata: null;
                        readonly createdAt: "2022-10-26T13:32:08.631Z";
                        readonly updatedAt: "2022-10-26T13:32:08.631Z";
                    };
                };
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
        readonly id: 10;
        readonly attributes: {
            readonly name: "genshiro-mainnet";
            readonly nativeToken: "gens";
            readonly balanceMethodTemplate: "0x276c90850b9de2c495875fe945d2a9c7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}{Blake2_128Concat,assetId}";
            readonly balanceReturnType: "SignedBalance";
            readonly balanceParser: "withDecimals(result(asPositive), 9)";
            readonly nodes: "wss://node.genshiro.io";
            readonly nativeBalanceMethodTemplate: "0x276c90850b9de2c495875fe945d2a9c7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}55c5ce389310185c39a3ca86bf21c7bd736e656700000000";
            readonly nativeBalanceReturnType: "SignedBalance";
            readonly nativeBalanceParser: "withDecimals(result(asPositive), 9)";
            readonly title: "Genshiro";
            readonly xcm: {
                readonly args: readonly [{
                    readonly type: "arg";
                    readonly index: "0";
                    readonly transform: readonly ["decimals", "9"];
                }, {
                    readonly type: "arg";
                    readonly index: "1";
                }, {
                    readonly type: "value";
                    readonly value: "7";
                }, {
                    readonly name: "resourceId";
                    readonly type: "param";
                }];
                readonly argTypes: readonly ["u64", "Vec<u8>", "u8", "[u8; 32]"];
                readonly callIndex: "1b00";
            };
            readonly types: "{\n    \"AccountInfo\": {\n      \"nonce\": \"Index\",\n      \"consumers\": \"RefCount\",\n      \"providers\": \"RefCount\"\n    },\n    \"Address\": \"AccountId\",\n    \"AmmPool\": {\n      \"_enum\": {\n        \"Curve\": \"PoolId\",\n        \"Yield\": \"PoolId\"\n      }\n    },\n    \"Asset\": {\n      \"0\": \"AssetIdInnerType\"\n    },\n    \"AssetData\": {\n      \"id\": \"Asset\",\n      \"lot\": \"FixedU128\",\n      \"price_step\": \"FixedU128\",\n      \"maker_fee\": \"FixedU128\",\n      \"taker_fee\": \"FixedU128\",\n      \"multi_asset\": \"Option<MultiAsset>\",\n      \"multi_location\": \"Option<MultiLocation>\",\n      \"debt_weight\": \"DebtWeightType\",\n      \"buyout_priority\": \"u64\",\n      \"asset_type\": \"AssetType\",\n      \"is_dex_enabled\": \"bool\",\n      \"collateral_enabled\": \"bool\"\n    },\n    \"AssetId\": \"Asset\",\n    \"AssetIdInnerType\": \"u64\",\n    \"AssetMetrics\": {\n      \"period_start\": \"Duration\",\n      \"period_end\": \"Duration\",\n      \"returns\": \"Vec<FixedNumber>\",\n      \"volatility\": \"FixedNumber\",\n      \"correlations\": \"Vec<(Asset, FixedNumber)>\"\n    },\n    \"AssetName\": \"Vec<u8>\",\n    \"AssetType\": {\n      \"_enum\": {\n        \"Native\": null,\n        \"Physical\": null,\n        \"Synthetic\": null,\n        \"Lp\": \"AmmPool\"\n      }\n    },\n    \"Balance\": \"u64\",\n    \"BalanceOf\": \"Balance\",\n    \"BalancesAggregate\": {\n      \"total_issuance\": \"Balance\",\n      \"total_debt\": \"Balance\"\n    },\n    \"BestPrice\": {\n      \"ask\": \"Option<FixedI64>\",\n      \"bid\": \"Option<FixedI64>\"\n    },\n    \"BinaryId\": \"u64\",\n    \"BinaryInfo\": {\n      \"start_time\": \"u64\",\n      \"end_time\": \"u64\",\n      \"proper\": \"Asset\",\n      \"minimal_amount\": \"Balance\",\n      \"target\": \"(Asset, BinaryMode)\",\n      \"total\": \"(Balance, Balance)\",\n      \"claimed\": \"Balance\"\n    },\n    \"BinaryMode\": {\n      \"_enum\": {\n        \"CallPut\": \"FixedI64\",\n        \"InOut\": \"(FixedI64, FixedI64)\"\n      }\n    },\n    \"BlockNumber\": \"u64\",\n    \"CapVec\": {\n      \"head_index\": \"u32\",\n      \"len_cap\": \"u32\",\n      \"items\": \"Vec<FixedNumber>\"\n    },\n    \"ChainAddressType\": {\n      \"_enum\": [\"Ethereum\", \"Substrate\", \"SubstrateWithPrefix\"]\n    },\n    \"ChainId\": \"u8\",\n    \"Currency\": {\n      \"_enum\": [\"UNKNOWN\", \"Eqd\", \"Eq\", \"Eth\", \"Btc\", \"Eos\", \"Dot\", \"Crv\"]\n    },\n    \"ChunkKey\": \"u64\",\n    \"DataPoint\": {\n      \"price\": \"u64\",\n      \"account_id\": \"AccountId\",\n      \"block_number\": \"BlockNumber\",\n      \"timestamp\": \"u64\"\n    },\n    \"DebtWeightType\": \"i128\",\n    \"DebtWeightTypeInner\": \"i128\",\n    \"DepositNonce\": \"u64\",\n    \"DispatchErrorModule\": \"DispatchErrorModuleU8\",\n    \"Duration\": {\n      \"secs\": \"u64\",\n      \"nanos\": \"u32\"\n    },\n    \"EpochCounter\": \"u64\",\n    \"EpochInfo\": {\n      \"counter\": \"EpochCounter\",\n      \"started_at\": \"Timestamp\",\n      \"duration\": \"Timestamp\",\n      \"new_duration\": \"Option<Timestamp>\"\n    },\n    \"FinancialMetrics\": {\n      \"period_start\": \"Duration\",\n      \"period_end\": \"Duration\",\n      \"assets\": \"Vec<Asset>\",\n      \"mean_returns\": \"Vec<FixedNumber>\",\n      \"volatilities\": \"Vec<FixedNumber>\",\n      \"correlations\": \"Vec<FixedNumber>\",\n      \"covariances\": \"Vec<FixedNumber>\"\n    },\n    \"FinancialRecalcPeriodMs\": \"u64\",\n    \"FixedI64\": \"i64\",\n    \"FixedNumber\": \"u128\",\n    \"FixedU128\": \"u128\",\n    \"Keys\": \"SessionKeys3\",\n    \"LenderInfo\": {\n      \"deposit\": \"Balance\",\n      \"pending_withdrawals\": \"PendingWithdrawal\"\n    },\n    \"LookupSource\": \"AccountId\",\n    \"MarginState\": {\n      \"_enum\": {\n        \"Good\": null,\n        \"SubGood\": null,\n        \"MaintenanceStart\": \"u64\",\n        \"MaintenanceIsGoing\": \"u64\",\n        \"MaintenanceTimeOver\": \"u64\",\n        \"MaintenanceEnd\": null,\n        \"SubCritical\": null\n      }\n    },\n    \"MaxCountOfAssetsRecalcPerBlock\": \"i32\",\n    \"MmId\": \"u16\",\n    \"MmInfo\": {\n      \"weight\": \"Perbill\",\n      \"borrowed\": \"Balance\"\n    },\n    \"MmPoolInfo\": {\n      \"account_id\": \"AccountId\",\n      \"min_amount\": \"Balance\",\n      \"total_staked\": \"Balance\",\n      \"total_deposit\": \"Balance\",\n      \"total_borrowed\": \"Balance\",\n      \"total_pending_withdrawals\": \"PendingWithdrawal\"\n    },\n    \"Number\": \"FixedU128\",\n    \"OperationRequestLiqFm\": {\n      \"authority_index\": \"AuthIndex\",\n      \"validators_len\": \"u32\",\n      \"block_num\": \"BlockNumber\"\n    },\n    \"OperationRequest\": {\n      \"account\": \"AccountId\",\n      \"authority_index\": \"AuthIndex\",\n      \"validators_len\": \"u32\",\n      \"block_num\": \"BlockNumber\",\n      \"higher_priority\": \"bool\"\n    },\n    \"OperationRequestDexDeleteOrder\": {\n      \"asset\": \"Asset\",\n      \"order_id\": \"OrderId\",\n      \"price\": \"FixedI64\",\n      \"who\": \"AccountId\",\n      \"buyout\": \"Option<Balance>\",\n      \"authority_index\": \"AuthIndex\",\n      \"validators_len\": \"u32\",\n      \"block_num\": \"BlockNumber\"\n    },\n    \"Order\": {\n      \"order_id\": \"OrderId\",\n      \"account_id\": \"AccountId\",\n      \"side\": \"OrderSide\",\n      \"price\": \"FixedI64\",\n      \"amount\": \"FixedU128\",\n      \"created_at\": \"u64\",\n      \"expiration_time\": \"u64\"\n    },\n    \"OrderType\": {\n      \"_enum\": {\n        \"Limit\": {\n          \"price\": \"FixedI64\",\n          \"expiration_time\": \"u64\"\n        },\n        \"Market\": null\n      }\n    },\n    \"OrderId\": \"u64\",\n    \"OrderSide\": {\n      \"_enum\": [\"Buy\", \"Sell\"]\n    },\n    \"PendingWithdrawal\": {\n      \"last_epoch\": \"EpochCounter\",\n      \"available\": \"Balance\",\n      \"available_next_epoch\": \"Balance\",\n      \"requested\": \"Balance\"\n    },\n    \"PoolId\": \"u32\",\n    \"PoolInfo\": {\n      \"owner\": \"AccountId\",\n      \"pool_asset\": \"AssetId\",\n      \"assets\": \"Vec<AssetId>\",\n      \"amplification\": \"Number\",\n      \"fee\": \"Permill\",\n      \"admin_fee\": \"Permill\",\n      \"balances\": \"Vec<Balance>\",\n      \"total_balances\": \"Vec<Balance>\"\n    },\n    \"PoolTokenIndex\": \"u32\",\n    \"PortfolioMetrics\": {\n      \"period_start\": \"Duration\",\n      \"period_end\": \"Duration\",\n      \"z_score\": \"u32\",\n      \"volatility\": \"FixedNumber\",\n      \"value_at_risk\": \"FixedNumber\"\n    },\n    \"Price\": \"u128\",\n    \"PriceLog\": {\n      \"latest_timestamp\": \"Duration\",\n      \"prices\": \"CapVec<Price>\"\n    },\n    \"PricePayload\": {\n      \"public\": \"[u8; 33]\",\n      \"asset\": \"Asset\",\n      \"price\": \"FixedI64\",\n      \"block_number\": \"BlockNumber\"\n    },\n    \"PricePeriod\": {\n      \"_enum\": [\"Min\", \"TenMin\", \"Hour\", \"FourHour\", \"Day\"]\n    },\n    \"PricePoint\": {\n      \"block_number\": \"BlockNumber\",\n      \"timestamp\": \"u64\",\n      \"last_fin_recalc_timestamp\": \"Timestamp\",\n      \"price\": \"u64\",\n      \"data_points\": \"Vec<DataPoint>\"\n    },\n    \"PriceUpdate\": {\n      \"period_start\": \"Duration\",\n      \"time\": \"Duration\",\n      \"price\": \"FixedNumber\"\n    },\n    \"ProposalStatus\": {\n      \"_enum\": [\"Initiated\", \"Approved\", \"Rejected\"]\n    },\n    \"ProposalVotes\": {\n      \"votes_for\": \"Vec<AccountId>\",\n      \"votes_against\": \"Vec<AccountId>\",\n      \"status\": \"ProposalStatus\",\n      \"expiry\": \"BlockNumber\"\n    },\n    \"ResourceId\": \"[u8; 32]\",\n    \"Round\": {\n      \"total_cap\": \"Balance\",\n      \"individual_cap\": \"Balance\",\n      \"end\": \"u64\",\n      \"token\": \"Asset\",\n      \"minimal_buy_amount\": \"Balance\",\n      \"vesting_params\": \"VestingParams\"\n    },\n    \"Signature\": \"u32\",\n    \"SignedBalance\": {\n      \"_enum\": {\n        \"Positive\": \"Balance\",\n        \"Negative\": \"Balance\"\n      }\n    },\n    \"SubAccType\": {\n      \"_enum\": [\"Bailsman\", \"Borrower\", \"Lender\"]\n    },\n    \"Timestamp\": \"u64\",\n    \"TotalAggregates\": {\n      \"collateral\": \"Balance\",\n      \"debt\": \"Balance\"\n    },\n    \"TransferReason\": {\n      \"_enum\": [\n        \"Common\",\n        \"InterestFee\",\n        \"MarginCall\",\n        \"LiquidityFarming\",\n        \"BailsmenRedistribution\",\n        \"TreasuryEqBuyout\",\n        \"TreasuryBuyEq\",\n        \"Subaccount\",\n        \"Lock\",\n        \"Unlock\",\n        \"Claim\",\n        \"CurveFeeWithdraw\",\n        \"Reserve\",\n        \"Unreserve\"\n      ]\n    },\n    \"UserGroup\": {\n      \"_enum\": [\"UNKNOWN\", \"Balances\", \"Bailsmen\", \"Borrowers\", \"Lenders\"]\n    },\n    \"UnsignedPriorityPair\": \"(u64, u64)\",\n    \"VestingInfo\": {\n      \"locked\": \"Balance\",\n      \"perBlock\": \"Balance\",\n      \"startingBlock\": \"BlockNumber\"\n    },\n    \"VestingParams\": {\n      \"blocks_until_beginning\": \"u64\",\n      \"amount_of_blocks\": \"u64\"\n    },\n    \"XdotNumber\": \"u128\",\n    \"XdotPoolInfo\": {\n      \"pool_asset\": \"AssetId\",\n      \"lp_total_supply\": \"Balance\",\n      \"account\": \"AccountId\",\n      \"base_asset\": \"AssetId\",\n      \"xbase_asset\": \"AssetId\",\n      \"g1\": \"XdotNumber\",\n      \"g2\": \"XdotNumber\",\n      \"maturity\": \"u64\",\n      \"ts\": \"XdotNumber\"\n    },\n    \"LockPeriod\": {\n      \"_enum\": [\"None\", \"ThreeMonth\", \"SixMonth\", \"Year\"]\n    }\n  }";
            readonly paraId: null;
            readonly createdAt: "2022-10-26T13:32:14.260Z";
            readonly updatedAt: "2023-02-21T13:21:01.665Z";
            readonly logo: {
                readonly data: {
                    readonly id: 106;
                    readonly attributes: {
                        readonly name: "gens.svg";
                        readonly alternativeText: null;
                        readonly caption: null;
                        readonly width: 28;
                        readonly height: 28;
                        readonly formats: null;
                        readonly hash: "gens_2f690705db";
                        readonly ext: ".svg";
                        readonly mime: "image/svg+xml";
                        readonly size: 10.51;
                        readonly url: "/uploads/gens_2f690705db.svg";
                        readonly previewUrl: null;
                        readonly provider: "local";
                        readonly provider_metadata: null;
                        readonly createdAt: "2022-10-26T13:32:13.796Z";
                        readonly updatedAt: "2022-10-26T13:32:13.796Z";
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
        readonly id: 12;
        readonly attributes: {
            readonly name: "statemint-testnet";
            readonly nativeToken: "dot";
            readonly balanceMethodTemplate: "0x682a59d51ab9e48a8c8cc418ff9708d2b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,assetId}{Blake2_128Concat,0}";
            readonly balanceReturnType: "PalletAssetsAssetAccount";
            readonly balanceParser: "balance,6";
            readonly nodes: "wss://parachain-testnet.equilab.io/statemint/collator/node1/wss";
            readonly nativeBalanceMethodTemplate: "0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}";
            readonly nativeBalanceReturnType: "AccountInfo";
            readonly nativeBalanceParser: "data.free,10";
            readonly title: "Statemint Testnet";
            readonly xcm: {
                readonly args: readonly [{
                    readonly type: "template";
                    readonly template: {
                        readonly V1: {
                            readonly parents: "1";
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
                                    readonly interior: {
                                        readonly X2: readonly [{
                                            readonly PalletInstance: 50;
                                        }, {
                                            readonly GeneralIndex: 1984;
                                        }];
                                    };
                                };
                            };
                            readonly fun: {
                                readonly Fungible: "$0";
                            };
                        }];
                    };
                    readonly transform: {
                        readonly "0": readonly ["decimals", "6"];
                    };
                }, {
                    readonly type: "value";
                    readonly value: "0";
                }];
                readonly argTypes: readonly ["XcmVersionedMultiLocation", "XcmVersionedMultiLocation", "XcmVersionedMultiAssets", "u32"];
                readonly callIndex: "1f02";
            };
            readonly types: "{\n  \"AccountInfo\": {\n    \"nonce\": \"u32\",\n    \"consumer\": \"u32\",\n    \"providers\": \"u32\",\n    \"sufficients\": \"u32\",\n    \"data\": {\n      \"free\": \"u128\",\n      \"reserved\": \"u128\",\n      \"miscFrozen\": \"u128\",\n      \"feeFrozen\": \"u128\"\n    }\n  },\n  \"AssetInstanceV1\": {\n    \"_enum\": {\n      \"Undefined\": null,\n      \"Index\": \"Compact<u128>\",\n      \"Array4\": \"[u8; 4]\",\n      \"Array8\": \"[u8; 8]\",\n      \"Array16\": \"[u8; 16]\",\n      \"Array32\": \"[u8; 32]\",\n      \"Blob\": \"Data\"\n    }\n  },\n  \"FungibilityV1\": {\n    \"_enum\": {\n      \"Fungible\": \"Compact<u128>\",\n      \"NonFungible\": \"AssetInstanceV1\"\n    }\n  },\n  \"PalletAssetsAssetAccount\": {\n    \"balance\": \"u128\",\n    \"isFrozen\": \"bool\",\n    \"reason\": \"PalletAssetsExistenceReason\",\n    \"extra\": \"Null\"\n  },\n  \"PalletAssetsExistenceReason\": {\n    \"_enum\": {\n      \"Consumer\": \"Null\",\n      \"Sufficient\": \"Null\",\n      \"DepositHeld\": \"u128\",\n      \"DepositRefunded\": \"Null\"\n    }\n  },\n  \"XcmAssetId\": {\n    \"_enum\": {\n      \"Concrete\": \"XcmV1MultiLocation\",\n      \"Abstract\": \"Data\"\n    }\n  },\n  \"XcmV1MultiAsset\": {\n    \"id\": \"XcmAssetId\",\n    \"fun\": \"FungibilityV1\"\n  },\n  \"XcmV1Junction\": {\n    \"_enum\": {\n      \"Parachain\": \"Compact<u32>\",\n      \"AccountId32\": {\n        \"network\": \"XcmV0JunctionNetworkId\",\n        \"id\": \"[u8;32]\"\n      },\n      \"AccountIndex64\": {\n        \"network\": \"XcmV0JunctionNetworkId\",\n        \"index\": \"Compact<u64>\"\n      },\n      \"AccountKey20\": {\n        \"network\": \"XcmV0JunctionNetworkId\",\n        \"key\": \"[u8;20]\"\n      },\n      \"PalletInstance\": \"u8\",\n      \"GeneralIndex\": \"Compact<u128>\",\n      \"GeneralKey\": \"Bytes\"\n    }\n  },\n  \"XcmV0JunctionNetworkId\": {\n    \"_enum\": {\n      \"Any\": \"Null\",\n      \"Named\": \"Bytes\",\n      \"Polkadot\": \"Null\",\n      \"Kusama\": \"Null\"\n    }\n  },\n  \"XcmV1MultilocationJunctions\": {\n    \"_enum\": {\n      \"Here\": null,\n      \"X1\": \"XcmV1Junction\",\n      \"X2\": \"(XcmV1Junction, XcmV1Junction)\",\n      \"X3\": \"Data\",\n      \"X4\": \"Data\",\n      \"X5\": \"Data\",\n      \"X6\": \"Data\",\n      \"X7\": \"Data\"\n    }\n  },\n  \"XcmV0MultiLocation\": \"Data\",\n  \"XcmV1MultiLocation\": {\n    \"parents\": \"u8\",\n    \"interior\": \"XcmV1MultilocationJunctions\"\n  },\n  \"XcmVersionedMultiAssets\": {\n    \"_enum\": {\n      \"V0\": \"Vec<Data>\",\n      \"V1\": \"Vec<XcmV1MultiAsset>\",\n      \"V2\": \"Vec<XcmV1MultiAsset>\"\n    }\n  },\n  \"XcmVersionedMultiLocation\": {\n    \"_enum\": {\n      \"V0\": \"XcmV0MultiLocation\",\n      \"V1\": \"XcmV1MultiLocation\"\n    }\n  }\n}\n";
            readonly paraId: 2011;
            readonly createdAt: "2022-12-08T09:11:30.270Z";
            readonly updatedAt: "2022-12-15T12:02:41.755Z";
            readonly logo: {
                readonly data: null;
            };
        };
    }, {
        readonly id: 13;
        readonly attributes: {
            readonly name: "statemint";
            readonly nativeToken: "dot";
            readonly balanceMethodTemplate: "0x682a59d51ab9e48a8c8cc418ff9708d2b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,assetId}{Blake2_128Concat,0}";
            readonly balanceReturnType: "PalletAssetsAssetAccount";
            readonly balanceParser: "withDecimals(result(balance), decimals)";
            readonly nodes: "wss://statemint-rpc.polkadot.io;wss://statemint.api.onfinality.io/public-ws;wss://statemint-rpc.dwellir.com;wss://public-rpc.pinknode.io/statemint;wss://statemint.public.curie.radiumblock.co/ws";
            readonly nativeBalanceMethodTemplate: "0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}";
            readonly nativeBalanceReturnType: "AccountInfo";
            readonly nativeBalanceParser: "withDecimals(result(data, free), 10)";
            readonly title: "Statemint";
            readonly xcm: {
                readonly args: readonly [{
                    readonly type: "template";
                    readonly template: {
                        readonly V1: {
                            readonly parents: "1";
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
                                    readonly interior: {
                                        readonly X2: readonly [{
                                            readonly PalletInstance: 50;
                                        }, {
                                            readonly GeneralIndex: 1984;
                                        }];
                                    };
                                };
                            };
                            readonly fun: {
                                readonly Fungible: "$0";
                            };
                        }];
                    };
                    readonly transform: {
                        readonly "0": readonly ["decimals", "6"];
                    };
                }, {
                    readonly type: "value";
                    readonly value: "0";
                }, {
                    readonly type: "template";
                    readonly template: {
                        readonly Limited: "800000000";
                    };
                }];
                readonly argTypes: readonly ["XcmVersionedMultiLocation", "XcmVersionedMultiLocation", "XcmVersionedMultiAssets", "u32", "XcmV2WeightLimit"];
                readonly callIndex: "1f08";
            };
            readonly types: "{\n  \"AccountInfo\": {\n    \"nonce\": \"u32\",\n    \"consumer\": \"u32\",\n    \"providers\": \"u32\",\n    \"sufficients\": \"u32\",\n    \"data\": {\n      \"free\": \"u128\",\n      \"reserved\": \"u128\",\n      \"miscFrozen\": \"u128\",\n      \"feeFrozen\": \"u128\"\n    }\n  },\n  \"AssetInstanceV1\": {\n    \"_enum\": {\n      \"Undefined\": null,\n      \"Index\": \"Compact<u128>\",\n      \"Array4\": \"[u8; 4]\",\n      \"Array8\": \"[u8; 8]\",\n      \"Array16\": \"[u8; 16]\",\n      \"Array32\": \"[u8; 32]\",\n      \"Blob\": \"Data\"\n    }\n  },\n  \"FungibilityV1\": {\n    \"_enum\": {\n      \"Fungible\": \"Compact<u128>\",\n      \"NonFungible\": \"AssetInstanceV1\"\n    }\n  },\n  \"PalletAssetsAssetAccount\": {\n    \"balance\": \"u128\",\n    \"isFrozen\": \"bool\",\n    \"reason\": \"PalletAssetsExistenceReason\",\n    \"extra\": \"Null\"\n  },\n  \"PalletAssetsExistenceReason\": {\n    \"_enum\": {\n      \"Consumer\": \"Null\",\n      \"Sufficient\": \"Null\",\n      \"DepositHeld\": \"u128\",\n      \"DepositRefunded\": \"Null\"\n    }\n  },\n  \"XcmAssetId\": {\n    \"_enum\": {\n      \"Concrete\": \"XcmV1MultiLocation\",\n      \"Abstract\": \"Data\"\n    }\n  },\n  \"XcmV1MultiAsset\": {\n    \"id\": \"XcmAssetId\",\n    \"fun\": \"FungibilityV1\"\n  },\n  \"XcmV1Junction\": {\n    \"_enum\": {\n      \"Parachain\": \"Compact<u32>\",\n      \"AccountId32\": {\n        \"network\": \"XcmV0JunctionNetworkId\",\n        \"id\": \"[u8;32]\"\n      },\n      \"AccountIndex64\": {\n        \"network\": \"XcmV0JunctionNetworkId\",\n        \"index\": \"Compact<u64>\"\n      },\n      \"AccountKey20\": {\n        \"network\": \"XcmV0JunctionNetworkId\",\n        \"key\": \"[u8;20]\"\n      },\n      \"PalletInstance\": \"u8\",\n      \"GeneralIndex\": \"Compact<u128>\",\n      \"GeneralKey\": \"Bytes\"\n    }\n  },\n  \"XcmV0JunctionNetworkId\": {\n    \"_enum\": {\n      \"Any\": \"Null\",\n      \"Named\": \"Bytes\",\n      \"Polkadot\": \"Null\",\n      \"Kusama\": \"Null\"\n    }\n  },\n  \"XcmV1MultilocationJunctions\": {\n    \"_enum\": {\n      \"Here\": null,\n      \"X1\": \"XcmV1Junction\",\n      \"X2\": \"(XcmV1Junction, XcmV1Junction)\",\n      \"X3\": \"Data\",\n      \"X4\": \"Data\",\n      \"X5\": \"Data\",\n      \"X6\": \"Data\",\n      \"X7\": \"Data\"\n    }\n  },\n  \"XcmV0MultiLocation\": \"Data\",\n  \"XcmV1MultiLocation\": {\n    \"parents\": \"u8\",\n    \"interior\": \"XcmV1MultilocationJunctions\"\n  },\n  \"XcmV2WeightLimit\": {\n    \"_enum\": {\n      \"Unlimited\": \"Null\",\n      \"Limited\": \"Compact<u64>\"\n    }\n  },\n  \"XcmVersionedMultiAssets\": {\n    \"_enum\": {\n      \"V0\": \"Vec<Data>\",\n      \"V1\": \"Vec<XcmV1MultiAsset>\",\n      \"V2\": \"Vec<XcmV1MultiAsset>\"\n    }\n  },\n  \"XcmVersionedMultiLocation\": {\n    \"_enum\": {\n      \"V0\": \"XcmV0MultiLocation\",\n      \"V1\": \"XcmV1MultiLocation\"\n    }\n  },\n  \"SpWeightsWeightV2Weight\": {\n    \"refTime\": \"Compact<u64>\",\n    \"proofSize\": \"Compact<u64>\"\n  },\n  \"FrameSupportDispatchDispatchClass\": {\n    \"_enum\": [\"Normal\", \"Operational\", \"Mandatory\"]\n  },\n  \"RuntimeDispatchInfo\": {\n    \"weight\": \"SpWeightsWeightV2Weight\",\n    \"class\": \"FrameSupportDispatchDispatchClass\",\n    \"partialFee\": \"u128\"\n  }\n}\n";
            readonly paraId: 1000;
            readonly createdAt: "2022-12-19T14:18:54.485Z";
            readonly updatedAt: "2023-02-21T11:54:48.163Z";
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
        readonly id: 16;
        readonly attributes: {
            readonly name: "astar";
            readonly nativeToken: "astr";
            readonly balanceMethodTemplate: "0x682a59d51ab9e48a8c8cc418ff9708d2b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,assetId}{Blake2_128Concat,0}";
            readonly balanceReturnType: "PalletAssetsAssetAccount";
            readonly balanceParser: "withDecimals(result(balance), decimals)";
            readonly nodes: "wss://rpc.astar.network;wss://astar.public.blastapi.io";
            readonly nativeBalanceMethodTemplate: "0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}";
            readonly nativeBalanceReturnType: "AccountInfo";
            readonly nativeBalanceParser: "withDecimals(minus(result(data, free),result(data, miscFrozen)), 18)";
            readonly title: "Astar";
            readonly xcm: {
                readonly args: readonly [{
                    readonly type: "template";
                    readonly template: {
                        readonly V1: {
                            readonly parents: "1";
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
                                    readonly parents: "$parents";
                                    readonly interior: "$interior";
                                };
                            };
                            readonly fun: {
                                readonly Fungible: "$0";
                            };
                        }];
                    };
                    readonly transform: {
                        readonly "0": readonly ["decimals", "18"];
                    };
                }, {
                    readonly type: "value";
                    readonly value: "0";
                }, {
                    readonly type: "template";
                    readonly template: {
                        readonly Limited: "800000000";
                    };
                }];
                readonly argTypes: readonly ["XcmVersionedMultiLocation", "XcmVersionedMultiLocation", "XcmVersionedMultiAssets", "u32", "XcmV2WeightLimit"];
                readonly callIndex: "330b";
            };
            readonly types: "{\n  \"AccountInfo\": {\n    \"nonce\": \"u32\",\n    \"consumer\": \"u32\",\n    \"providers\": \"u32\",\n    \"sufficients\": \"u32\",\n    \"data\": {\n      \"free\": \"u128\",\n      \"reserved\": \"u128\",\n      \"miscFrozen\": \"u128\",\n      \"feeFrozen\": \"u128\"\n    }\n  },\n  \"AssetInstanceV1\": {\n    \"_enum\": {\n      \"Undefined\": null,\n      \"Index\": \"Compact<u128>\",\n      \"Array4\": \"[u8; 4]\",\n      \"Array8\": \"[u8; 8]\",\n      \"Array16\": \"[u8; 16]\",\n      \"Array32\": \"[u8; 32]\",\n      \"Blob\": \"Data\"\n    }\n  },\n  \"FungibilityV1\": {\n    \"_enum\": {\n      \"Fungible\": \"Compact<u128>\",\n      \"NonFungible\": \"AssetInstanceV1\"\n    }\n  },\n  \"PalletAssetsAssetAccount\": {\n    \"balance\": \"u128\",\n    \"isFrozen\": \"bool\",\n    \"reason\": \"PalletAssetsExistenceReason\",\n    \"extra\": \"Null\"\n  },\n  \"PalletAssetsExistenceReason\": {\n    \"_enum\": {\n      \"Consumer\": \"Null\",\n      \"Sufficient\": \"Null\",\n      \"DepositHeld\": \"u128\",\n      \"DepositRefunded\": \"Null\"\n    }\n  },\n  \"XcmAssetId\": {\n    \"_enum\": {\n      \"Concrete\": \"XcmV1MultiLocation\",\n      \"Abstract\": \"Data\"\n    }\n  },\n  \"XcmV1MultiAsset\": {\n    \"id\": \"XcmAssetId\",\n    \"fun\": \"FungibilityV1\"\n  },\n  \"XcmV1Junction\": {\n    \"_enum\": {\n      \"Parachain\": \"Compact<u32>\",\n      \"AccountId32\": {\n        \"network\": \"XcmV0JunctionNetworkId\",\n        \"id\": \"[u8;32]\"\n      },\n      \"AccountIndex64\": {\n        \"network\": \"XcmV0JunctionNetworkId\",\n        \"index\": \"Compact<u64>\"\n      },\n      \"AccountKey20\": {\n        \"network\": \"XcmV0JunctionNetworkId\",\n        \"key\": \"[u8;20]\"\n      },\n      \"PalletInstance\": \"u8\",\n      \"GeneralIndex\": \"Compact<u128>\",\n      \"GeneralKey\": \"Bytes\"\n    }\n  },\n  \"XcmV0JunctionNetworkId\": {\n    \"_enum\": {\n      \"Any\": \"Null\",\n      \"Named\": \"Bytes\",\n      \"Polkadot\": \"Null\",\n      \"Kusama\": \"Null\"\n    }\n  },\n  \"XcmV1MultilocationJunctions\": {\n    \"_enum\": {\n      \"Here\": null,\n      \"X1\": \"XcmV1Junction\",\n      \"X2\": \"(XcmV1Junction, XcmV1Junction)\",\n      \"X3\": \"Data\",\n      \"X4\": \"Data\",\n      \"X5\": \"Data\",\n      \"X6\": \"Data\",\n      \"X7\": \"Data\"\n    }\n  },\n  \"XcmV0MultiLocation\": \"Data\",\n  \"XcmV1MultiLocation\": {\n    \"parents\": \"u8\",\n    \"interior\": \"XcmV1MultilocationJunctions\"\n  },\n  \"XcmV2WeightLimit\": {\n    \"_enum\": {\n      \"Unlimited\": \"Null\",\n      \"Limited\": \"Compact<u64>\"\n    }\n  },\n  \"XcmVersionedMultiAssets\": {\n    \"_enum\": {\n      \"V0\": \"Vec<Data>\",\n      \"V1\": \"Vec<XcmV1MultiAsset>\",\n      \"V2\": \"Vec<XcmV1MultiAsset>\"\n    }\n  },\n  \"XcmVersionedMultiLocation\": {\n    \"_enum\": {\n      \"V0\": \"XcmV0MultiLocation\",\n      \"V1\": \"XcmV1MultiLocation\"\n    }\n  }\n}\n";
            readonly paraId: 2006;
            readonly createdAt: "2023-01-19T06:30:50.584Z";
            readonly updatedAt: "2023-02-21T12:12:59.658Z";
            readonly logo: {
                readonly data: {
                    readonly id: 151;
                    readonly attributes: {
                        readonly name: "astar.png";
                        readonly alternativeText: null;
                        readonly caption: null;
                        readonly width: 250;
                        readonly height: 250;
                        readonly formats: {
                            readonly thumbnail: {
                                readonly ext: ".png";
                                readonly url: "/uploads/thumbnail_astar_1df47d8099.png";
                                readonly hash: "thumbnail_astar_1df47d8099";
                                readonly mime: "image/png";
                                readonly name: "thumbnail_astar.png";
                                readonly path: null;
                                readonly size: 49.31;
                                readonly width: 156;
                                readonly height: 156;
                            };
                        };
                        readonly hash: "astar_1df47d8099";
                        readonly ext: ".png";
                        readonly mime: "image/png";
                        readonly size: 14.82;
                        readonly url: "/uploads/astar_1df47d8099.png";
                        readonly previewUrl: null;
                        readonly provider: "local";
                        readonly provider_metadata: null;
                        readonly createdAt: "2022-10-26T13:33:51.027Z";
                        readonly updatedAt: "2023-01-19T06:30:43.058Z";
                    };
                };
            };
        };
    }, {
        readonly id: 17;
        readonly attributes: {
            readonly name: "interlay";
            readonly nativeToken: "intr";
            readonly balanceMethodTemplate: "0x99971b5749ac43e0235e41b0d37869188ee7418a6531173d60d1f6a82d8f4d51{Blake2_128Concat,0}{Twox64Concat,cid}";
            readonly balanceReturnType: "OrmlTokensAccountData";
            readonly balanceParser: "free,9";
            readonly nodes: "wss://interlay.api.onfinality.io/public-ws";
            readonly nativeBalanceMethodTemplate: "0x99971b5749ac43e0235e41b0d37869188ee7418a6531173d60d1f6a82d8f4d51{Blake2_128Concat,0}c483de2de1246ea70002";
            readonly nativeBalanceReturnType: "OrmlTokensAccountData";
            readonly nativeBalanceParser: "free,10";
            readonly title: "Interlay";
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
                readonly argTypes: readonly ["InterbtcPrimitivesCurrencyId", "u128", "XcmVersionedMultiLocation", "u8"];
                readonly callIndex: "5e00";
            };
            readonly types: "{\n\"Address\": \"AccountId\", \"LookupSource\": \"AccountId\",\n  \"FrameSystemAccountInfo\": {\n    \"nonce\": \"u32\",\n    \"consumers\": \"u32\",\n    \"providers\": \"u32\",\n    \"sufficients\": \"u32\",\n    \"data\": \"PalletBalancesAccountData\"\n  },\n  \"PalletBalancesAccountData\": {\n    \"free\": \"u128\",\n    \"reserved\": \"u128\",\n    \"miscFrozen\": \"u128\",\n    \"feeFrozen\": \"u128\"\n  },\n  \"InterbtcPrimitivesCurrencyId\": {\n    \"_enum\": {\n      \"Token\": \"InterbtcPrimitivesTokenSymbol\",\n      \"ForeignAsset\": \"u32\",\n      \"LendToken\": \"u32\"\n    }\n  },\n  \"InterbtcPrimitivesTokenSymbol\": {\n    \"_enum\": [\n      \"DOT\",\n      \"IBTC\",\n      \"INTR\",\n      \"__Unused3\",\n      \"__Unused4\",\n      \"__Unused5\",\n      \"__Unused6\",\n      \"__Unused7\",\n      \"__Unused8\",\n      \"__Unused9\",\n      \"KSM\",\n      \"KBTC\",\n      \"KINT\"\n    ]\n  },\n  \"OrmlTokensAccountData\": {\n    \"free\": \"u128\",\n    \"reserved\": \"u128\",\n    \"frozen\": \"u128\"\n  },\n  \"XcmVersionedMultiLocation\": {\n    \"_enum\": {\n      \"V0\": \"XcmV0MultiLocation\",\n      \"V1\": \"XcmV1MultiLocation\"\n    }\n  },\n\n  \"XcmV0MultiLocation\": {\n    \"_enum\": {\n      \"Null\": \"Null\",\n      \"X1\": \"XcmV0Junction\",\n      \"X2\": \"(XcmV0Junction,XcmV0Junction)\",\n      \"X3\": \"(XcmV0Junction,XcmV0Junction,XcmV0Junction)\",\n      \"X4\": \"(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)\",\n      \"X5\": \"(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)\",\n      \"X6\": \"(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)\",\n      \"X7\": \"(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)\",\n      \"X8\": \"(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)\"\n    }\n  },\n  \"XcmV0Junction\": {\n    \"_enum\": {\n      \"Parent\": \"Null\",\n      \"Parachain\": \"Compact<u32>\",\n      \"AccountId32\": {\n        \"network\": \"XcmV0JunctionNetworkId\",\n        \"id\": \"[u8;32]\"\n      },\n      \"AccountIndex64\": {\n        \"network\": \"XcmV0JunctionNetworkId\",\n        \"index\": \"Compact<u64>\"\n      },\n      \"AccountKey20\": {\n        \"network\": \"XcmV0JunctionNetworkId\",\n        \"key\": \"[u8;20]\"\n      },\n      \"PalletInstance\": \"u8\",\n      \"GeneralIndex\": \"Compact<u128>\",\n      \"GeneralKey\": \"Bytes\",\n      \"OnlyChild\": \"Null\",\n      \"Plurality\": {\n        \"id\": \"XcmV0JunctionBodyId\",\n        \"part\": \"XcmV0JunctionBodyPart\"\n      }\n    }\n  },\n  \"XcmV0JunctionNetworkId\": {\n    \"_enum\": {\n      \"Any\": \"Null\",\n      \"Named\": \"Bytes\",\n      \"Polkadot\": \"Null\",\n      \"Kusama\": \"Null\"\n    }\n  },\n  \"XcmV0JunctionBodyId\": {\n    \"_enum\": {\n      \"Unit\": \"Null\",\n      \"Named\": \"Bytes\",\n      \"Index\": \"Compact<u32>\",\n      \"Executive\": \"Null\",\n      \"Technical\": \"Null\",\n      \"Legislative\": \"Null\",\n      \"Judicial\": \"Null\"\n    }\n  },\n  \"XcmV0JunctionBodyPart\": {\n    \"_enum\": {\n      \"Voice\": \"Null\",\n      \"Members\": {\n        \"count\": \"Compact<u32>\"\n      },\n      \"Fraction\": {\n        \"nom\": \"Compact<u32>\",\n        \"denom\": \"Compact<u32>\"\n      },\n      \"AtLeastProportion\": {\n        \"nom\": \"Compact<u32>\",\n        \"denom\": \"Compact<u32>\"\n      },\n      \"MoreThanProportion\": {\n        \"nom\": \"Compact<u32>\",\n        \"denom\": \"Compact<u32>\"\n      }\n    }\n  },\n  \"XcmV1MultiLocation\": {\n    \"parents\": \"u8\",\n    \"interior\": \"XcmV1MultilocationJunctions\"\n  },\n  \"XcmV1MultilocationJunctions\": {\n    \"_enum\": {\n      \"Here\": \"Null\",\n      \"X1\": \"XcmV1Junction\",\n      \"X2\": \"(XcmV1Junction,XcmV1Junction)\",\n      \"X3\": \"(XcmV1Junction,XcmV1Junction,XcmV1Junction)\",\n      \"X4\": \"(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)\",\n      \"X5\": \"(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)\",\n      \"X6\": \"(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)\",\n      \"X7\": \"(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)\",\n      \"X8\": \"(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)\"\n    }\n  },\n  \"XcmV1Junction\": {\n    \"_enum\": {\n      \"Parachain\": \"Compact<u32>\",\n      \"AccountId32\": {\n        \"network\": \"XcmV0JunctionNetworkId\",\n        \"id\": \"[u8;32]\"\n      },\n      \"AccountIndex64\": {\n        \"network\": \"XcmV0JunctionNetworkId\",\n        \"index\": \"Compact<u64>\"\n      },\n      \"AccountKey20\": {\n        \"network\": \"XcmV0JunctionNetworkId\",\n        \"key\": \"[u8;20]\"\n      },\n      \"PalletInstance\": \"u8\",\n      \"GeneralIndex\": \"Compact<u128>\",\n      \"GeneralKey\": \"Bytes\",\n      \"OnlyChild\": \"Null\",\n      \"Plurality\": {\n        \"id\": \"XcmV0JunctionBodyId\",\n        \"part\": \"XcmV0JunctionBodyPart\"\n      }\n    }\n  },\n  \"SpWeightsWeightV2Weight\": {\n    \"refTime\": \"Compact<u64>\",\n    \"proofSize\": \"Compact<u64>\"\n  },\n  \"FrameSupportDispatchDispatchClass\": {\n    \"_enum\": [\"Normal\", \"Operational\", \"Mandatory\"]\n  },\n  \"RuntimeDispatchInfo\": {\n    \"weight\": \"SpWeightsWeightV2Weight\",\n    \"class\": \"FrameSupportDispatchDispatchClass\",\n    \"partialFee\": \"u128\"\n  }\n}\n";
            readonly paraId: 2032;
            readonly createdAt: "2023-01-24T07:55:34.878Z";
            readonly updatedAt: "2023-04-24T08:56:39.867Z";
            readonly logo: {
                readonly data: {
                    readonly id: 121;
                    readonly attributes: {
                        readonly name: "1638967991_interlay_logo.png";
                        readonly alternativeText: null;
                        readonly caption: null;
                        readonly width: 84;
                        readonly height: 84;
                        readonly formats: {};
                        readonly hash: "1638967991_interlay_logo_e78834f178";
                        readonly ext: ".png";
                        readonly mime: "image/svg+xml";
                        readonly size: 2.54;
                        readonly url: "/uploads/1638967991_interlay_logo_e78834f178.png";
                        readonly previewUrl: null;
                        readonly provider: "local";
                        readonly provider_metadata: null;
                        readonly createdAt: "2022-10-26T13:32:51.013Z";
                        readonly updatedAt: "2023-02-02T10:22:47.576Z";
                    };
                };
            };
        };
    }, {
        readonly id: 18;
        readonly attributes: {
            readonly name: "astar-native";
            readonly nativeToken: "astr";
            readonly balanceMethodTemplate: "0x682a59d51ab9e48a8c8cc418ff9708d2b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,assetId}{Blake2_128Concat,0}";
            readonly balanceReturnType: "PalletAssetsAssetAccount";
            readonly balanceParser: "balance,6";
            readonly nodes: "wss://rpc.astar.network;wss://astar.public.blastapi.io";
            readonly nativeBalanceMethodTemplate: "0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}";
            readonly nativeBalanceReturnType: "AccountInfo";
            readonly nativeBalanceParser: "withDecimals(minus(result(data, free),result(data, miscFrozen)), 18)";
            readonly title: "Astar";
            readonly xcm: {
                readonly args: readonly [{
                    readonly type: "template";
                    readonly template: {
                        readonly V1: {
                            readonly parents: "1";
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
                                    readonly parents: "$parents";
                                    readonly interior: "$interior";
                                };
                            };
                            readonly fun: {
                                readonly Fungible: "$0";
                            };
                        }];
                    };
                    readonly transform: {
                        readonly "0": readonly ["decimals", "18"];
                    };
                }, {
                    readonly type: "value";
                    readonly value: "0";
                }, {
                    readonly type: "template";
                    readonly template: {
                        readonly Limited: "800000000";
                    };
                }];
                readonly argTypes: readonly ["XcmVersionedMultiLocation", "XcmVersionedMultiLocation", "XcmVersionedMultiAssets", "u32", "XcmV2WeightLimit"];
                readonly callIndex: "3309";
            };
            readonly types: "{\n  \"AccountInfo\": {\n    \"nonce\": \"u32\",\n    \"consumer\": \"u32\",\n    \"providers\": \"u32\",\n    \"sufficients\": \"u32\",\n    \"data\": {\n      \"free\": \"u128\",\n      \"reserved\": \"u128\",\n      \"miscFrozen\": \"u128\",\n      \"feeFrozen\": \"u128\"\n    }\n  },\n  \"AssetInstanceV1\": {\n    \"_enum\": {\n      \"Undefined\": null,\n      \"Index\": \"Compact<u128>\",\n      \"Array4\": \"[u8; 4]\",\n      \"Array8\": \"[u8; 8]\",\n      \"Array16\": \"[u8; 16]\",\n      \"Array32\": \"[u8; 32]\",\n      \"Blob\": \"Data\"\n    }\n  },\n  \"FungibilityV1\": {\n    \"_enum\": {\n      \"Fungible\": \"Compact<u128>\",\n      \"NonFungible\": \"AssetInstanceV1\"\n    }\n  },\n  \"PalletAssetsAssetAccount\": {\n    \"balance\": \"u128\",\n    \"isFrozen\": \"bool\",\n    \"reason\": \"PalletAssetsExistenceReason\",\n    \"extra\": \"Null\"\n  },\n  \"PalletAssetsExistenceReason\": {\n    \"_enum\": {\n      \"Consumer\": \"Null\",\n      \"Sufficient\": \"Null\",\n      \"DepositHeld\": \"u128\",\n      \"DepositRefunded\": \"Null\"\n    }\n  },\n  \"XcmAssetId\": {\n    \"_enum\": {\n      \"Concrete\": \"XcmV1MultiLocation\",\n      \"Abstract\": \"Data\"\n    }\n  },\n  \"XcmV1MultiAsset\": {\n    \"id\": \"XcmAssetId\",\n    \"fun\": \"FungibilityV1\"\n  },\n  \"XcmV1Junction\": {\n    \"_enum\": {\n      \"Parachain\": \"Compact<u32>\",\n      \"AccountId32\": {\n        \"network\": \"XcmV0JunctionNetworkId\",\n        \"id\": \"[u8;32]\"\n      },\n      \"AccountIndex64\": {\n        \"network\": \"XcmV0JunctionNetworkId\",\n        \"index\": \"Compact<u64>\"\n      },\n      \"AccountKey20\": {\n        \"network\": \"XcmV0JunctionNetworkId\",\n        \"key\": \"[u8;20]\"\n      },\n      \"PalletInstance\": \"u8\",\n      \"GeneralIndex\": \"Compact<u128>\",\n      \"GeneralKey\": \"Bytes\"\n    }\n  },\n  \"XcmV0JunctionNetworkId\": {\n    \"_enum\": {\n      \"Any\": \"Null\",\n      \"Named\": \"Bytes\",\n      \"Polkadot\": \"Null\",\n      \"Kusama\": \"Null\"\n    }\n  },\n  \"XcmV1MultilocationJunctions\": {\n    \"_enum\": {\n      \"Here\": null,\n      \"X1\": \"XcmV1Junction\",\n      \"X2\": \"(XcmV1Junction, XcmV1Junction)\",\n      \"X3\": \"Data\",\n      \"X4\": \"Data\",\n      \"X5\": \"Data\",\n      \"X6\": \"Data\",\n      \"X7\": \"Data\"\n    }\n  },\n  \"XcmV0MultiLocation\": \"Data\",\n  \"XcmV1MultiLocation\": {\n    \"parents\": \"u8\",\n    \"interior\": \"XcmV1MultilocationJunctions\"\n  },\n  \"XcmV2WeightLimit\": {\n    \"_enum\": {\n      \"Unlimited\": \"Null\",\n      \"Limited\": \"Compact<u64>\"\n    }\n  },\n  \"XcmVersionedMultiAssets\": {\n    \"_enum\": {\n      \"V0\": \"Vec<Data>\",\n      \"V1\": \"Vec<XcmV1MultiAsset>\",\n      \"V2\": \"Vec<XcmV1MultiAsset>\"\n    }\n  },\n  \"XcmVersionedMultiLocation\": {\n    \"_enum\": {\n      \"V0\": \"XcmV0MultiLocation\",\n      \"V1\": \"XcmV1MultiLocation\"\n    }\n  }\n}\n";
            readonly paraId: 2006;
            readonly createdAt: "2023-02-20T13:19:41.077Z";
            readonly updatedAt: "2023-02-21T11:58:57.257Z";
            readonly logo: {
                readonly data: {
                    readonly id: 151;
                    readonly attributes: {
                        readonly name: "astar.png";
                        readonly alternativeText: null;
                        readonly caption: null;
                        readonly width: 250;
                        readonly height: 250;
                        readonly formats: {
                            readonly thumbnail: {
                                readonly ext: ".png";
                                readonly url: "/uploads/thumbnail_astar_1df47d8099.png";
                                readonly hash: "thumbnail_astar_1df47d8099";
                                readonly mime: "image/png";
                                readonly name: "thumbnail_astar.png";
                                readonly path: null;
                                readonly size: 49.31;
                                readonly width: 156;
                                readonly height: 156;
                            };
                        };
                        readonly hash: "astar_1df47d8099";
                        readonly ext: ".png";
                        readonly mime: "image/png";
                        readonly size: 14.82;
                        readonly url: "/uploads/astar_1df47d8099.png";
                        readonly previewUrl: null;
                        readonly provider: "local";
                        readonly provider_metadata: null;
                        readonly createdAt: "2022-10-26T13:33:51.027Z";
                        readonly updatedAt: "2023-01-19T06:30:43.058Z";
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
