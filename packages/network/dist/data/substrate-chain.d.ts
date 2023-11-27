declare const response: {
    readonly data: readonly [{
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
    }];
    readonly meta: {
        readonly pagination: {
            readonly page: 1;
            readonly pageSize: 100;
            readonly pageCount: 1;
            readonly total: 2;
        };
    };
};
export default response;
