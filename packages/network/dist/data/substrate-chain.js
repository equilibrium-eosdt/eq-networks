"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response = {
    data: [
        {
            id: 11,
            attributes: {
                name: "polkadot",
                nativeToken: "dot",
                balanceMethodTemplate: "",
                balanceReturnType: "",
                balanceParser: "",
                nodes: "wss://rpc.polkadot.io",
                nativeBalanceMethodTemplate: "0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}",
                nativeBalanceReturnType: "AccountInfo",
                nativeBalanceParser: "data.free,10",
                title: "Polkadot Relay",
                xcm: {
                    args: [
                        {
                            type: "template",
                            template: {
                                V1: { parents: "0", interior: { X1: { Parachain: "2011" } } },
                            },
                        },
                        {
                            type: "template",
                            template: {
                                V1: {
                                    parents: 0,
                                    interior: {
                                        X1: { AccountId32: { id: "$1", network: "Any" } },
                                    },
                                },
                            },
                        },
                        {
                            type: "template",
                            template: {
                                V1: [
                                    {
                                        id: { Concrete: { parents: 0, interior: "Here" } },
                                        fun: { Fungible: "$0" },
                                    },
                                ],
                            },
                            transform: { "0": ["decimals", "10"] },
                        },
                        { type: "value", value: "0" },
                    ],
                    argTypes: [
                        "XcmVersionedMultiLocation",
                        "XcmVersionedMultiLocation",
                        "XcmVersionedMultiAssets",
                        "u32",
                    ],
                    callIndex: "6302",
                },
                types: '{\n  "SpWeightsWeightV2Weight": {\n    "refTime": "Compact<u64>",\n    "proofSize": "Compact<u64>"\n  },\n  "FrameSupportDispatchDispatchClass": {\n    "_enum": ["Normal", "Operational", "Mandatory"]\n  },\n  "RuntimeDispatchInfo": {\n    "weight": "SpWeightsWeightV2Weight",\n    "class": "FrameSupportDispatchDispatchClass",\n    "partialFee": "u128"\n  },\n  "AccountInfo": {\n    "nonce": "u32",\n    "consumer": "u32",\n    "providers": "u32",\n    "sufficients": "u32",\n    "data": {\n      "free": "u128",\n      "reserved": "u128",\n      "miscFrozen": "u128",\n      "feeFrozen": "u128"\n    }\n  },\n  "AssetInstanceV1": {\n    "_enum": {\n      "Undefined": null,\n      "Index": "Compact<u128>",\n      "Array4": "[u8; 4]",\n      "Array8": "[u8; 8]",\n      "Array16": "[u8; 16]",\n      "Array32": "[u8; 32]",\n      "Blob": "Data"\n    }\n  },\n  "FungibilityV1": {\n    "_enum": {\n      "Fungible": "Compact<u128>",\n      "NonFungible": "AssetInstanceV1"\n    }\n  },\n  "XcmAssetId": {\n    "_enum": {\n      "Concrete": "XcmV1MultiLocation",\n      "Abstract": "Data"\n    }\n  },\n  "XcmV1MultiAsset": {\n    "id": "XcmAssetId",\n    "fun": "FungibilityV1"\n  },\n  "XcmV1Junction": {\n    "_enum": {\n      "Parachain": "Compact<u32>",\n      "AccountId32": {\n        "network": "NetworkId",\n        "id": "AccountId"\n      },\n      "GeneralIndex": "Compact<u128>",\n      "Plurality": "Data",\n      "OnlyChild": null,\n      "AccountKey20": "Data",\n      "PalletInstance": "u8",\n      "GeneralKey": "Data"\n    }\n  },\n  "XcmV1MultilocationJunctions": {\n    "_enum": {\n      "Here": null,\n      "X1": "XcmV1Junction",\n      "X2": "(XcmV1Junction, XcmV1Junction)",\n      "X3": "Data",\n      "X4": "Data",\n      "X5": "Data",\n      "X6": "Data",\n      "X7": "Data"\n    }\n  },\n  "XcmV0MultiLocation": "Data",\n  "XcmV1MultiLocation": {\n    "parents": "u8",\n    "interior": "XcmV1MultilocationJunctions"\n  },\n  "XcmVersionedMultiAssets": {\n    "_enum": {\n      "V0": "Vec<Data>",\n      "V1": "Vec<XcmV1MultiAsset>",\n      "V2": "Vec<XcmV1MultiAsset>"\n    }\n  },\n  "XcmVersionedMultiLocation": {\n    "_enum": {\n      "V0": "XcmV0MultiLocation",\n      "V1": "XcmV1MultiLocation"\n    }\n  }\n}\n',
                paraId: 2011,
                createdAt: "2022-12-07T13:27:40.679Z",
                updatedAt: "2023-01-26T06:47:48.063Z",
                logo: { data: null },
            },
        },
        {
            id: 15,
            attributes: {
                name: "moonbeam",
                nativeToken: "glmr",
                balanceMethodTemplate: null,
                balanceReturnType: null,
                balanceParser: null,
                nodes: "wss://wss.api.moonbeam.network",
                nativeBalanceMethodTemplate: "0x00",
                nativeBalanceReturnType: null,
                nativeBalanceParser: ",18",
                title: "Moonbeam",
                xcm: { args: [], type: "evm", argTypes: [], callIndex: "6302" },
                types: "{}",
                paraId: 2004,
                createdAt: "2023-01-17T10:25:04.282Z",
                updatedAt: "2023-01-30T09:32:44.357Z",
                logo: {
                    data: {
                        id: 104,
                        attributes: {
                            name: "glmr.webp",
                            alternativeText: null,
                            caption: null,
                            width: 50,
                            height: 50,
                            formats: null,
                            hash: "glmr_d5b6aea515",
                            ext: ".webp",
                            mime: "image/webp",
                            size: 0.87,
                            url: "/uploads/glmr_d5b6aea515.webp",
                            previewUrl: null,
                            provider: "local",
                            provider_metadata: null,
                            createdAt: "2022-10-26T13:32:11.271Z",
                            updatedAt: "2022-10-26T13:32:11.271Z",
                        },
                    },
                },
            },
        },
    ],
    meta: { pagination: { page: 1, pageSize: 100, pageCount: 1, total: 2 } },
};
exports.default = response;
