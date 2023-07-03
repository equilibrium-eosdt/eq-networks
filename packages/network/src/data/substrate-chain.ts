const response = {
  data: [
    {
      id: 1,
      attributes: {
        name: "heiko-testnet",
        nativeToken: "hko",
        balanceMethodTemplate:
          "0x682a59d51ab9e48a8c8cc418ff9708d2b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,asset}{Blake2_128Concat,0}",
        balanceReturnType: "PalletAssetsAssetAccount",
        balanceParser: "balance,12",
        nodes: "wss://parachain-testnet.equilab.io/parallel/collator/node1/wss",
        nativeBalanceMethodTemplate:
          "0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}",
        nativeBalanceReturnType: "AccountInfo",
        nativeBalanceParser: "data.free,12",
        title: "Parallel Heiko",
        xcm: {
          args: [
            { name: "asset", type: "param" },
            { type: "arg", index: "0", transform: ["decimals", "12"] },
            {
              type: "template",
              template: {
                V1: {
                  parents: "1",
                  interior: {
                    X2: [
                      { Parachain: "2024" },
                      { AccountId32: { id: "$1", network: "Any" } },
                    ],
                  },
                },
              },
            },
            { type: "value", value: "0" },
          ],
          argTypes: ["u32", "u128", "XcmVersionedMultiLocation", "u64"],
          callIndex: "2b00",
        },
        types:
          '{\n  "AccountInfo": {\n    "nonce": "u32",\n    "consumer": "u32",\n    "providers": "u32",\n    "sufficients": "u32",\n    "data": {\n      "free": "u128",\n      "reserved": "u128",\n      "miscFrozen": "u128",\n      "feeFrozen": "u128"\n    }\n  },\n  "PalletAssetsAssetAccount": {\n    "balance": "u128",\n    "isFrozen": "bool",\n    "reason": "Data",\n    "extra": "Data"\n  },\n  "XcmV1Junction": {\n    "_enum": {\n      "Parachain": "Compact<u32>",\n      "AccountId32": {\n        "network": "NetworkId",\n        "id": "AccountId"\n      },\n      "GeneralIndex": "Compact<u128>",\n      "Plurality": "Data",\n      "OnlyChild": null,\n      "AccountKey20": "Data",\n      "PalletInstance": "u8",\n      "GeneralKey": "Data"\n    }\n  },\n  "XcmV1MultilocationJunctions": {\n    "_enum": {\n      "Here": null,\n      "X1": "XcmV1Junction",\n      "X2": "(XcmV1Junction, XcmV1Junction)",\n      "X3": "Data",\n      "X4": "Data",\n      "X5": "Data",\n      "X6": "Data",\n      "X7": "Data"\n    }\n  },\n  "XcmV0MultiLocation": "Data",\n  "XcmV1MultiLocation": {\n    "parents": "u8",\n    "interior": "XcmV1MultilocationJunctions"\n  },\n  "XcmVersionedMultiLocation": {\n    "_enum": {\n      "V0": "XcmV0MultiLocation",\n      "V1": "XcmV1MultiLocation"\n    }\n  }\n}',
        paraId: 2085,
        createdAt: "2022-10-26T13:32:02.349Z",
        updatedAt: "2022-10-26T13:32:02.349Z",
        logo: {
          data: {
            id: 97,
            attributes: {
              name: "favicon-32x32.png",
              alternativeText: null,
              caption: null,
              width: 32,
              height: 32,
              formats: null,
              hash: "favicon_32x32_b8a33aedb5",
              ext: ".png",
              mime: "image/png",
              size: 2.04,
              url: "/uploads/favicon_32x32_b8a33aedb5.png",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2022-10-26T13:32:01.870Z",
              updatedAt: "2022-10-26T13:32:01.870Z",
            },
          },
        },
      },
    },
    {
      id: 2,
      attributes: {
        name: "karura-testnet",
        nativeToken: "kar",
        balanceMethodTemplate:
          "0x99971b5749ac43e0235e41b0d37869188ee7418a6531173d60d1f6a82d8f4d51{Blake2_128Concat,0}{Twox64Concat,cid}",
        balanceReturnType: "OrmlTokensAccountData",
        balanceParser: "free,9",
        nodes: "wss://parachain-stage.equilab.io/karura/collator/node1/wss",
        nativeBalanceMethodTemplate:
          "0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}",
        nativeBalanceReturnType: "AccountInfo",
        nativeBalanceParser: "data.free,12",
        title: "Karura",
        xcm: {
          args: [
            { type: "template", template: { $type: "$id" } },
            { type: "arg", index: "0", transform: ["decimals", "12"] },
            {
              type: "template",
              template: {
                V1: {
                  parents: "1",
                  interior: {
                    X2: [
                      { Parachain: "2024" },
                      { AccountId32: { id: "$1", network: "Any" } },
                    ],
                  },
                },
              },
            },
            { type: "value", value: "0" },
          ],
          argTypes: [
            "AcalaPrimitivesCurrencyCurrencyId",
            "u128",
            "XcmVersionedMultiLocation",
            "u64",
          ],
          callIndex: "3600",
        },
        types:
          '{\n    "AcalaPrimitivesCurrencyTokenSymbol": {\n      "_enum": {\n        "Aca": 0,\n        "Ausd": 1,\n        "Dot": 2,\n        "Ldot": 3,\n        "Renbtc": 20,\n        "Cash": 21,\n        "Kar": 128,\n        "Kusd": 129,\n        "Ksm": 130,\n        "Lksm": 131,\n        "Tai": 132,\n        "Bnc": 168,\n        "Vsksm": 169,\n        "Pha": 170,\n        "Kint": 171,\n        "Kbtc": 172\n      }\n    },\n    "XcmV1MultilocationJunctions": {\n      "_enum": {\n        "Here": null,\n        "X1": "XcmV1Junction",\n        "X2": "(XcmV1Junction, XcmV1Junction)",\n        "X3": "Data",\n        "X4": "Data",\n        "X5": "Data",\n        "X6": "Data",\n        "X7": "Data"\n      }\n    },\n    "XcmV1MultiLocation": {\n      "parents": "u8",\n      "interior": "XcmV1MultilocationJunctions"\n    },\n    "XcmV1Junction": {\n      "_enum": {\n        "Parachain": "Compact<u32>",\n        "AccountId32": {\n          "network": "NetworkId",\n          "id": "AccountId"\n        },\n        "GeneralIndex": "Compact<u128>",\n        "Plurality": "Data",\n        "OnlyChild": null,\n        "AccountKey20": "Data",\n        "PalletInstance": "u8",\n        "GeneralKey": "Data"\n      }\n    },\n    "XcmV0MultiLocation": "Data",\n    "XcmVersionedMultiLocation": {\n      "_enum": {\n        "V0": "XcmV0MultiLocation",\n        "V1": "XcmV1MultiLocation"\n      }\n    },\n    "AccountInfo": {\n      "nonce": "u32",\n      "consumer": "u32",\n      "providers": "u32",\n      "sufficients": "u32",\n      "data": {\n        "free": "u128",\n        "reserved": "u128",\n        "miscFrozen": "u128",\n        "feeFrozen": "u128"\n      }\n    },\n    "OrmlTokensAccountData": {\n      "free": "u128",\n      "reserved": "u128",\n      "frozen": "u128"\n    },\n    "AcalaPrimitivesCurrencyCurrencyId": {\n      "_enum": {\n        "Token": "AcalaPrimitivesCurrencyTokenSymbol",\n        "DexShare": "Data",\n        "Erc20": "Data",\n        "StableAssetPoolToken": "Data",\n        "LiquidCrowdloan": "Data",\n        "ForeignAsset": "u16"\n      }\n    }\n  }',
        paraId: 2000,
        createdAt: "2022-10-26T13:32:03.654Z",
        updatedAt: "2022-10-26T13:32:03.654Z",
        logo: {
          data: {
            id: 98,
            attributes: {
              name: "icon_old (3).svg",
              alternativeText: null,
              caption: null,
              width: 30,
              height: 30,
              formats: null,
              hash: "icon_old_3_8854281aaf",
              ext: ".svg",
              mime: "image/svg+xml",
              size: 2.03,
              url: "/uploads/icon_old_3_8854281aaf.svg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2022-10-26T13:32:03.174Z",
              updatedAt: "2022-10-26T13:32:03.174Z",
            },
          },
        },
      },
    },
    {
      id: 3,
      attributes: {
        name: "karura",
        nativeToken: "kar",
        balanceMethodTemplate:
          "0x99971b5749ac43e0235e41b0d37869188ee7418a6531173d60d1f6a82d8f4d51{Blake2_128Concat,0}{Twox64Concat,cid}",
        balanceReturnType: "OrmlTokensAccountData",
        balanceParser: "free,9",
        nodes:
          "wss://karura-rpc-0.aca-api.network,wss://karura-rpc-1.aca-api.network,wss://karura-rpc-2.aca-api.network/ws,wss://karura-rpc-3.aca-api.network/ws,wss://karura.polkawallet.io,wss://karura.api.onfinality.io/public-ws,wss://karura-rpc.dwellir.com",
        nativeBalanceMethodTemplate:
          "0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}",
        nativeBalanceReturnType: "AccountInfo",
        nativeBalanceParser: "data.free,12",
        title: "Karura",
        xcm: {
          args: [
            { type: "template", template: { $type: "$id" } },
            { type: "arg", index: "0", transform: ["decimals", "12"] },
            {
              type: "template",
              template: {
                V1: {
                  parents: "1",
                  interior: {
                    X2: [
                      { Parachain: "2024" },
                      { AccountId32: { id: "$1", network: "Any" } },
                    ],
                  },
                },
              },
            },
            { type: "value", value: "0" },
          ],
          argTypes: [
            "AcalaPrimitivesCurrencyCurrencyId",
            "u128",
            "XcmVersionedMultiLocation",
            "u64",
          ],
          callIndex: "3600",
        },
        types:
          '{\n    "AcalaPrimitivesCurrencyTokenSymbol": {\n      "_enum": {\n        "Aca": 0,\n        "Ausd": 1,\n        "Dot": 2,\n        "Ldot": 3,\n        "Renbtc": 20,\n        "Cash": 21,\n        "Kar": 128,\n        "Kusd": 129,\n        "Ksm": 130,\n        "Lksm": 131,\n        "Tai": 132,\n        "Bnc": 168,\n        "Vsksm": 169,\n        "Pha": 170,\n        "Kint": 171,\n        "Kbtc": 172\n      }\n    },\n    "XcmV1MultilocationJunctions": {\n      "_enum": {\n        "Here": null,\n        "X1": "XcmV1Junction",\n        "X2": "(XcmV1Junction, XcmV1Junction)",\n        "X3": "Data",\n        "X4": "Data",\n        "X5": "Data",\n        "X6": "Data",\n        "X7": "Data"\n      }\n    },\n    "XcmV1MultiLocation": {\n      "parents": "u8",\n      "interior": "XcmV1MultilocationJunctions"\n    },\n    "XcmV1Junction": {\n      "_enum": {\n        "Parachain": "Compact<u32>",\n        "AccountId32": {\n          "network": "NetworkId",\n          "id": "AccountId"\n        },\n        "GeneralIndex": "Compact<u128>",\n        "Plurality": "Data",\n        "OnlyChild": null,\n        "AccountKey20": "Data",\n        "PalletInstance": "u8",\n        "GeneralKey": "Data"\n      }\n    },\n    "XcmV0MultiLocation": "Data",\n    "XcmVersionedMultiLocation": {\n      "_enum": {\n        "V0": "XcmV0MultiLocation",\n        "V1": "XcmV1MultiLocation"\n      }\n    },\n    "AccountInfo": {\n      "nonce": "u32",\n      "consumer": "u32",\n      "providers": "u32",\n      "sufficients": "u32",\n      "data": {\n        "free": "u128",\n        "reserved": "u128",\n        "miscFrozen": "u128",\n        "feeFrozen": "u128"\n      }\n    },\n    "OrmlTokensAccountData": {\n      "free": "u128",\n      "reserved": "u128",\n      "frozen": "u128"\n    },\n    "AcalaPrimitivesCurrencyCurrencyId": {\n      "_enum": {\n        "Token": "AcalaPrimitivesCurrencyTokenSymbol",\n        "DexShare": "Data",\n        "Erc20": "Data",\n        "StableAssetPoolToken": "Data",\n        "LiquidCrowdloan": "Data",\n        "ForeignAsset": "u16"\n      }\n    }\n  }',
        paraId: 2000,
        createdAt: "2022-10-26T13:32:04.967Z",
        updatedAt: "2022-10-26T13:32:04.967Z",
        logo: {
          data: {
            id: 99,
            attributes: {
              name: "icon_old (3).svg",
              alternativeText: null,
              caption: null,
              width: 30,
              height: 30,
              formats: null,
              hash: "icon_old_3_fadda8fd86",
              ext: ".svg",
              mime: "image/svg+xml",
              size: 2.03,
              url: "/uploads/icon_old_3_fadda8fd86.svg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2022-10-26T13:32:04.488Z",
              updatedAt: "2022-10-26T13:32:04.488Z",
            },
          },
        },
      },
    },
    {
      id: 4,
      attributes: {
        name: "polkadot-testnet",
        nativeToken: "dot",
        balanceMethodTemplate: "",
        balanceReturnType: "",
        balanceParser: "",
        nodes: "wss://testnet.equilibrium.io/eq/relay/api/wss",
        nativeBalanceMethodTemplate:
          "0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}",
        nativeBalanceReturnType: "AccountInfo",
        nativeBalanceParser: "data.free,10",
        title: "Relay Testnet",
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
        types:
          '{\n  "AccountInfo": {\n    "nonce": "u32",\n    "consumer": "u32",\n    "providers": "u32",\n    "sufficients": "u32",\n    "data": {\n      "free": "u128",\n      "reserved": "u128",\n      "miscFrozen": "u128",\n      "feeFrozen": "u128"\n    }\n  },\n  "AssetInstanceV1": {\n    "_enum": {\n      "Undefined": null,\n      "Index": "Compact<u128>",\n      "Array4": "[u8; 4]",\n      "Array8": "[u8; 8]",\n      "Array16": "[u8; 16]",\n      "Array32": "[u8; 32]",\n      "Blob": "Data"\n    }\n  },\n  "FungibilityV1": {\n    "_enum": {\n      "Fungible": "Compact<u128>",\n      "NonFungible": "AssetInstanceV1"\n    }\n  },\n  "XcmAssetId": {\n    "_enum": {\n      "Concrete": "XcmV1MultiLocation",\n      "Abstract": "Data"\n    }\n  },\n  "XcmV1MultiAsset": {\n    "id": "XcmAssetId",\n    "fun": "FungibilityV1"\n  },\n  "XcmV1Junction": {\n    "_enum": {\n      "Parachain": "Compact<u32>",\n      "AccountId32": {\n        "network": "NetworkId",\n        "id": "AccountId"\n      },\n      "GeneralIndex": "Compact<u128>",\n      "Plurality": "Data",\n      "OnlyChild": null,\n      "AccountKey20": "Data",\n      "PalletInstance": "u8",\n      "GeneralKey": "Data"\n    }\n  },\n  "XcmV1MultilocationJunctions": {\n    "_enum": {\n      "Here": null,\n      "X1": "XcmV1Junction",\n      "X2": "(XcmV1Junction, XcmV1Junction)",\n      "X3": "Data",\n      "X4": "Data",\n      "X5": "Data",\n      "X6": "Data",\n      "X7": "Data"\n    }\n  },\n  "XcmV0MultiLocation": "Data",\n  "XcmV1MultiLocation": {\n    "parents": "u8",\n    "interior": "XcmV1MultilocationJunctions"\n  },\n  "XcmVersionedMultiAssets": {\n    "_enum": {\n      "V0": "Vec<Data>",\n      "V1": "Vec<XcmV1MultiAsset>",\n      "V2": "Vec<XcmV1MultiAsset>"\n    }\n  },\n  "XcmVersionedMultiLocation": {\n    "_enum": {\n      "V0": "XcmV0MultiLocation",\n      "V1": "XcmV1MultiLocation"\n    }\n  }\n}\n',
        paraId: 2011,
        createdAt: "2022-10-26T13:32:06.293Z",
        updatedAt: "2023-02-16T11:58:08.171Z",
        logo: { data: null },
      },
    },
    {
      id: 7,
      attributes: {
        name: "acala-testnet",
        nativeToken: "aca",
        balanceMethodTemplate:
          "0x99971b5749ac43e0235e41b0d37869188ee7418a6531173d60d1f6a82d8f4d51{Blake2_128Concat,0}{Twox64Concat,cid}",
        balanceReturnType: "OrmlTokensAccountData",
        balanceParser: "free,12",
        nodes: "wss://parachain-testnet.equilab.io/acala/collator/node1/wss",
        nativeBalanceMethodTemplate:
          "0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}",
        nativeBalanceReturnType: "AccountInfo",
        nativeBalanceParser: "data.free,12",
        title: "Acala Testnet",
        xcm: {
          args: [
            { type: "template", template: { $type: "$id" } },
            { type: "arg", index: "0", transform: ["decimals", "12"] },
            {
              type: "template",
              template: {
                V1: {
                  parents: "1",
                  interior: {
                    X2: [
                      { Parachain: "2011" },
                      { AccountId32: { id: "$1", network: "Any" } },
                    ],
                  },
                },
              },
            },
            { type: "value", value: "0" },
          ],
          argTypes: [
            "AcalaPrimitivesCurrencyCurrencyId",
            "u128",
            "XcmVersionedMultiLocation",
            "u64",
          ],
          callIndex: "3600",
        },
        types:
          '{\n    "AcalaPrimitivesCurrencyTokenSymbol": {\n      "_enum": {\n        "Aca": 0,\n        "Ausd": 1,\n        "Dot": 2,\n        "Ldot": 3,\n        "Renbtc": 20,\n        "Cash": 21,\n        "Kar": 128,\n        "Kusd": 129,\n        "Ksm": 130,\n        "Lksm": 131,\n        "Tai": 132,\n        "Bnc": 168,\n        "Vsksm": 169,\n        "Pha": 170,\n        "Kint": 171,\n        "Kbtc": 172\n      }\n    },\n    "XcmV1MultilocationJunctions": {\n      "_enum": {\n        "Here": null,\n        "X1": "XcmV1Junction",\n        "X2": "(XcmV1Junction, XcmV1Junction)",\n        "X3": "Data",\n        "X4": "Data",\n        "X5": "Data",\n        "X6": "Data",\n        "X7": "Data"\n      }\n    },\n    "XcmV1MultiLocation": {\n      "parents": "u8",\n      "interior": "XcmV1MultilocationJunctions"\n    },\n    "XcmV1Junction": {\n      "_enum": {\n        "Parachain": "Compact<u32>",\n        "AccountId32": {\n          "network": "NetworkId",\n          "id": "AccountId"\n        },\n        "GeneralIndex": "Compact<u128>",\n        "Plurality": "Data",\n        "OnlyChild": null,\n        "AccountKey20": "Data",\n        "PalletInstance": "u8",\n        "GeneralKey": "Data"\n      }\n    },\n    "XcmV0MultiLocation": "Data",\n    "XcmVersionedMultiLocation": {\n      "_enum": {\n        "V0": "XcmV0MultiLocation",\n        "V1": "XcmV1MultiLocation"\n      }\n    },\n    "AccountInfo": {\n      "nonce": "u32",\n      "consumer": "u32",\n      "providers": "u32",\n      "sufficients": "u32",\n      "data": {\n        "free": "u128",\n        "reserved": "u128",\n        "miscFrozen": "u128",\n        "feeFrozen": "u128"\n      }\n    },\n    "OrmlTokensAccountData": {\n      "free": "u128",\n      "reserved": "u128",\n      "frozen": "u128"\n    },\n    "AcalaPrimitivesCurrencyCurrencyId": {\n      "_enum": {\n        "Token": "AcalaPrimitivesCurrencyTokenSymbol",\n        "DexShare": "Data",\n        "Erc20": "Data",\n        "StableAssetPoolToken": "Data",\n        "LiquidCrowdloan": "Data",\n        "ForeignAsset": "u16"\n      }\n    }\n  }',
        paraId: 2000,
        createdAt: "2022-10-26T13:32:10.422Z",
        updatedAt: "2022-10-26T13:32:10.422Z",
        logo: {
          data: {
            id: 103,
            attributes: {
              name: "acala.png",
              alternativeText: null,
              caption: null,
              width: 128,
              height: 128,
              formats: null,
              hash: "acala_ba88e0cdaa",
              ext: ".png",
              mime: "image/png",
              size: 13.07,
              url: "/uploads/acala_ba88e0cdaa.png",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2022-10-26T13:32:09.945Z",
              updatedAt: "2022-10-26T13:32:09.945Z",
            },
          },
        },
      },
    },
    {
      id: 8,
      attributes: {
        name: "moonbeam-eq-testnet",
        nativeToken: "glmr",
        balanceMethodTemplate: null,
        balanceReturnType: null,
        balanceParser: null,
        nodes: "wss://parachain-testnet.equilab.io/moonbeam/collator/node1/wss",
        nativeBalanceMethodTemplate: "0x00",
        nativeBalanceReturnType: null,
        nativeBalanceParser: null,
        title: "Moonbeam Testnet",
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
        types: "{}",
        paraId: 2004,
        createdAt: "2022-10-26T13:32:11.727Z",
        updatedAt: "2022-12-01T16:16:47.286Z",
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
    {
      id: 9,
      attributes: {
        name: "acala-mainnet",
        nativeToken: "aca",
        balanceMethodTemplate:
          "0x99971b5749ac43e0235e41b0d37869188ee7418a6531173d60d1f6a82d8f4d51{Blake2_128Concat,0}{Twox64Concat,cid}",
        balanceReturnType: "OrmlTokensAccountData",
        balanceParser: "free,12",
        nodes: "wss://acala-rpc-3.aca-api.network/ws",
        nativeBalanceMethodTemplate:
          "0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}",
        nativeBalanceReturnType: "AccountInfo",
        nativeBalanceParser: "data.free,12",
        title: "Acala Mainnet",
        xcm: {
          args: [
            { type: "template", template: { $type: "$id" } },
            { type: "arg", index: "0", transform: ["decimals", "12"] },
            {
              type: "template",
              template: {
                V1: {
                  parents: "1",
                  interior: {
                    X2: [
                      { Parachain: "2011" },
                      { AccountId32: { id: "$1", network: "Any" } },
                    ],
                  },
                },
              },
            },
            { type: "value", value: "0" },
          ],
          argTypes: [
            "AcalaPrimitivesCurrencyCurrencyId",
            "u128",
            "XcmVersionedMultiLocation",
            "u64",
          ],
          callIndex: "3600",
        },
        types:
          '{\n    "AcalaPrimitivesCurrencyTokenSymbol": {\n      "_enum": {\n        "Aca": 0,\n        "Ausd": 1,\n        "Dot": 2,\n        "Ldot": 3,\n        "Renbtc": 20,\n        "Cash": 21,\n        "Kar": 128,\n        "Kusd": 129,\n        "Ksm": 130,\n        "Lksm": 131,\n        "Tai": 132,\n        "Bnc": 168,\n        "Vsksm": 169,\n        "Pha": 170,\n        "Kint": 171,\n        "Kbtc": 172\n      }\n    },\n    "XcmV1MultilocationJunctions": {\n      "_enum": {\n        "Here": null,\n        "X1": "XcmV1Junction",\n        "X2": "(XcmV1Junction, XcmV1Junction)",\n        "X3": "Data",\n        "X4": "Data",\n        "X5": "Data",\n        "X6": "Data",\n        "X7": "Data"\n      }\n    },\n    "XcmV1MultiLocation": {\n      "parents": "u8",\n      "interior": "XcmV1MultilocationJunctions"\n    },\n    "XcmV1Junction": {\n      "_enum": {\n        "Parachain": "Compact<u32>",\n        "AccountId32": {\n          "network": "NetworkId",\n          "id": "AccountId"\n        },\n        "GeneralIndex": "Compact<u128>",\n        "Plurality": "Data",\n        "OnlyChild": null,\n        "AccountKey20": "Data",\n        "PalletInstance": "u8",\n        "GeneralKey": "Data"\n      }\n    },\n    "XcmV0MultiLocation": "Data",\n    "XcmVersionedMultiLocation": {\n      "_enum": {\n        "V0": "XcmV0MultiLocation",\n        "V1": "XcmV1MultiLocation"\n      }\n    },\n    "AccountInfo": {\n      "nonce": "u32",\n      "consumer": "u32",\n      "providers": "u32",\n      "sufficients": "u32",\n      "data": {\n        "free": "u128",\n        "reserved": "u128",\n        "miscFrozen": "u128",\n        "feeFrozen": "u128"\n      }\n    },\n    "OrmlTokensAccountData": {\n      "free": "u128",\n      "reserved": "u128",\n      "frozen": "u128"\n    },\n    "AcalaPrimitivesCurrencyCurrencyId": {\n      "_enum": {\n        "Token": "AcalaPrimitivesCurrencyTokenSymbol",\n        "DexShare": "Data",\n        "Erc20": "Data",\n        "StableAssetPoolToken": "Data",\n        "LiquidCrowdloan": "Data",\n        "ForeignAsset": "u16"\n      }\n    }\n  }',
        paraId: 2000,
        createdAt: "2022-10-26T13:32:13.025Z",
        updatedAt: "2023-02-20T12:47:26.807Z",
        logo: {
          data: {
            id: 105,
            attributes: {
              name: "acala.png",
              alternativeText: null,
              caption: null,
              width: 128,
              height: 128,
              formats: null,
              hash: "acala_7254239a01",
              ext: ".png",
              mime: "image/png",
              size: 13.07,
              url: "/uploads/acala_7254239a01.png",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2022-10-26T13:32:12.561Z",
              updatedAt: "2022-10-26T13:32:12.561Z",
            },
          },
        },
      },
    },
    {
      id: 11,
      attributes: {
        name: "polkadot",
        nativeToken: "dot",
        balanceMethodTemplate: "",
        balanceReturnType: "",
        balanceParser: "",
        nodes: "wss://rpc.polkadot.io",
        nativeBalanceMethodTemplate:
          "0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}",
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
        types:
          '{\n  "SpWeightsWeightV2Weight": {\n    "refTime": "Compact<u64>",\n    "proofSize": "Compact<u64>"\n  },\n  "FrameSupportDispatchDispatchClass": {\n    "_enum": ["Normal", "Operational", "Mandatory"]\n  },\n  "RuntimeDispatchInfo": {\n    "weight": "SpWeightsWeightV2Weight",\n    "class": "FrameSupportDispatchDispatchClass",\n    "partialFee": "u128"\n  },\n  "AccountInfo": {\n    "nonce": "u32",\n    "consumer": "u32",\n    "providers": "u32",\n    "sufficients": "u32",\n    "data": {\n      "free": "u128",\n      "reserved": "u128",\n      "miscFrozen": "u128",\n      "feeFrozen": "u128"\n    }\n  },\n  "AssetInstanceV1": {\n    "_enum": {\n      "Undefined": null,\n      "Index": "Compact<u128>",\n      "Array4": "[u8; 4]",\n      "Array8": "[u8; 8]",\n      "Array16": "[u8; 16]",\n      "Array32": "[u8; 32]",\n      "Blob": "Data"\n    }\n  },\n  "FungibilityV1": {\n    "_enum": {\n      "Fungible": "Compact<u128>",\n      "NonFungible": "AssetInstanceV1"\n    }\n  },\n  "XcmAssetId": {\n    "_enum": {\n      "Concrete": "XcmV1MultiLocation",\n      "Abstract": "Data"\n    }\n  },\n  "XcmV1MultiAsset": {\n    "id": "XcmAssetId",\n    "fun": "FungibilityV1"\n  },\n  "XcmV1Junction": {\n    "_enum": {\n      "Parachain": "Compact<u32>",\n      "AccountId32": {\n        "network": "NetworkId",\n        "id": "AccountId"\n      },\n      "GeneralIndex": "Compact<u128>",\n      "Plurality": "Data",\n      "OnlyChild": null,\n      "AccountKey20": "Data",\n      "PalletInstance": "u8",\n      "GeneralKey": "Data"\n    }\n  },\n  "XcmV1MultilocationJunctions": {\n    "_enum": {\n      "Here": null,\n      "X1": "XcmV1Junction",\n      "X2": "(XcmV1Junction, XcmV1Junction)",\n      "X3": "Data",\n      "X4": "Data",\n      "X5": "Data",\n      "X6": "Data",\n      "X7": "Data"\n    }\n  },\n  "XcmV0MultiLocation": "Data",\n  "XcmV1MultiLocation": {\n    "parents": "u8",\n    "interior": "XcmV1MultilocationJunctions"\n  },\n  "XcmVersionedMultiAssets": {\n    "_enum": {\n      "V0": "Vec<Data>",\n      "V1": "Vec<XcmV1MultiAsset>",\n      "V2": "Vec<XcmV1MultiAsset>"\n    }\n  },\n  "XcmVersionedMultiLocation": {\n    "_enum": {\n      "V0": "XcmV0MultiLocation",\n      "V1": "XcmV1MultiLocation"\n    }\n  }\n}\n',
        paraId: 2011,
        createdAt: "2022-12-07T13:27:40.679Z",
        updatedAt: "2023-01-26T06:47:48.063Z",
        logo: { data: null },
      },
    },
    {
      id: 14,
      attributes: {
        name: "parallel",
        nativeToken: "para",
        balanceMethodTemplate:
          "0x682a59d51ab9e48a8c8cc418ff9708d2b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,assetId}{Blake2_128Concat,0}",
        balanceReturnType: "PalletAssetsAssetAccount",
        balanceParser: "withDecimals(result(balance), decimals)",
        nodes: "wss://rpc.parallel.fi",
        nativeBalanceMethodTemplate:
          "0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9{Blake2_128Concat,0}",
        nativeBalanceReturnType: "AccountInfo",
        nativeBalanceParser:
          "withDecimals(minus(result(data, free),result(data, miscFrozen)), 12)",
        title: "Parallel",
        xcm: {
          args: [
            { name: "assetIdReverse", type: "param" },
            { type: "arg", index: "0", transform: ["decimals", "10"] },
            {
              type: "template",
              template: {
                V1: {
                  parents: 1,
                  interior: {
                    X2: [
                      { Parachain: "2011" },
                      { AccountId32: { id: "$1", network: "Any" } },
                    ],
                  },
                },
              },
            },
            { type: "value", value: "Unlimited" },
          ],
          argTypes: [
            "u32",
            "u128",
            "XcmVersionedMultiLocation",
            "XcmV2WeightLimit",
          ],
          callIndex: "2b00",
        },
        types:
          '{\n  "SpWeightsWeightV2Weight": {\n    "refTime": "Compact<u64>",\n    "proofSize": "Compact<u64>"\n  },\n  "FrameSupportDispatchDispatchClass": {\n    "_enum": ["Normal", "Operational", "Mandatory"]\n  },\n  "RuntimeDispatchInfo": {\n    "weight": "SpWeightsWeightV2Weight",\n    "class": "FrameSupportDispatchDispatchClass",\n    "partialFee": "u128"\n  },\n  "AccountInfo": {\n    "nonce": "u32",\n    "consumer": "u32",\n    "providers": "u32",\n    "sufficients": "u32",\n    "data": {\n      "free": "u128",\n      "reserved": "u128",\n      "miscFrozen": "u128",\n      "feeFrozen": "u128"\n    }\n  },\n  "AssetInstanceV1": {\n    "_enum": {\n      "Undefined": null,\n      "Index": "Compact<u128>",\n      "Array4": "[u8; 4]",\n      "Array8": "[u8; 8]",\n      "Array16": "[u8; 16]",\n      "Array32": "[u8; 32]",\n      "Blob": "Data"\n    }\n  },\n  "FungibilityV1": {\n    "_enum": {\n      "Fungible": "Compact<u128>",\n      "NonFungible": "AssetInstanceV1"\n    }\n  },\n  "PalletAssetsAssetAccount": {\n    "balance": "u128",\n    "isFrozen": "bool",\n    "reason": "PalletAssetsExistenceReason",\n    "extra": "Null"\n  },\n  "PalletAssetsExistenceReason": {\n    "_enum": {\n      "Consumer": "Null",\n      "Sufficient": "Null",\n      "DepositHeld": "u128",\n      "DepositRefunded": "Null"\n    }\n  },\n  "XcmAssetId": {\n    "_enum": {\n      "Concrete": "XcmV1MultiLocation",\n      "Abstract": "Data"\n    }\n  },\n  "XcmV1MultiAsset": {\n    "id": "XcmAssetId",\n    "fun": "FungibilityV1"\n  },\n  "XcmV1Junction": {\n    "_enum": {\n      "Parachain": "Compact<u32>",\n      "AccountId32": {\n        "network": "XcmV0JunctionNetworkId",\n        "id": "[u8;32]"\n      },\n      "AccountIndex64": {\n        "network": "XcmV0JunctionNetworkId",\n        "index": "Compact<u64>"\n      },\n      "AccountKey20": {\n        "network": "XcmV0JunctionNetworkId",\n        "key": "[u8;20]"\n      },\n      "PalletInstance": "u8",\n      "GeneralIndex": "Compact<u128>",\n      "GeneralKey": "Bytes"\n    }\n  },\n  "XcmV0JunctionNetworkId": {\n    "_enum": {\n      "Any": "Null",\n      "Named": "Bytes",\n      "Polkadot": "Null",\n      "Kusama": "Null"\n    }\n  },\n  "XcmV1MultilocationJunctions": {\n    "_enum": {\n      "Here": null,\n      "X1": "XcmV1Junction",\n      "X2": "(XcmV1Junction, XcmV1Junction)",\n      "X3": "Data",\n      "X4": "Data",\n      "X5": "Data",\n      "X6": "Data",\n      "X7": "Data"\n    }\n  },\n  "XcmV0MultiLocation": "Data",\n  "XcmV1MultiLocation": {\n    "parents": "u8",\n    "interior": "XcmV1MultilocationJunctions"\n  },\n  "XcmV2WeightLimit": {\n    "_enum": {\n      "Unlimited": "Null",\n      "Limited": "Compact<u64>"\n    }\n  },\n  "XcmVersionedMultiAssets": {\n    "_enum": {\n      "V0": "Vec<Data>",\n      "V1": "Vec<XcmV1MultiAsset>",\n      "V2": "Vec<XcmV1MultiAsset>"\n    }\n  },\n  "XcmVersionedMultiLocation": {\n    "_enum": {\n      "V0": "XcmV0MultiLocation",\n      "V1": "XcmV1MultiLocation"\n    }\n  }\n}\n',
        paraId: 2012,
        createdAt: "2022-12-27T08:37:16.884Z",
        updatedAt: "2023-03-10T12:20:58.974Z",
        logo: {
          data: {
            id: 163,
            attributes: {
              name: "parallel.3b34b5d6..svg",
              alternativeText: "parallel.3b34b5d6..svg",
              caption: "parallel.3b34b5d6..svg",
              width: 200,
              height: 200,
              formats: null,
              hash: "parallel_3b34b5d6_ee793f8b57",
              ext: ".svg",
              mime: "image/svg+xml",
              size: 1.27,
              url: "/uploads/parallel_3b34b5d6_ee793f8b57.svg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2022-12-27T08:37:01.568Z",
              updatedAt: "2022-12-27T08:37:01.568Z",
            },
          },
        },
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
    {
      id: 19,
      attributes: {
        name: "moonbaseAlpha",
        nativeToken: "glmr",
        balanceMethodTemplate: null,
        balanceReturnType: null,
        balanceParser: null,
        nodes: "wss://wss.api.moonbase.moonbeam.network",
        nativeBalanceMethodTemplate: "0x00",
        nativeBalanceReturnType: null,
        nativeBalanceParser: ",18",
        title: "Moonbase Alpha",
        xcm: { args: [], type: "evm", argTypes: [], callIndex: "6302" },
        types: "{}",
        paraId: 2004,
        createdAt: "2023-04-18T11:58:36.957Z",
        updatedAt: "2023-04-18T11:58:36.957Z",
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
  meta: { pagination: { page: 1, pageSize: 100, pageCount: 1, total: 19 } },
} as const;

export default response;
