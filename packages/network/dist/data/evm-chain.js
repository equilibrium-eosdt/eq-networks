"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var response = {
    data: [
        {
            id: 1,
            attributes: {
                name: "rinkeby",
                title: "Ethereum Rinkeby Testnet",
                params: { chainId: "0x4" },
                bridge: null,
                spender: null,
                nativeChainId: null,
                createdAt: "2022-10-26T13:30:24.017Z",
                updatedAt: "2022-11-30T13:34:52.448Z",
            },
        },
        {
            id: 2,
            attributes: {
                name: "bsc-testnet",
                title: "BSC Testnet",
                params: { nativeId: 2, hostChainId: 168 },
                bridge: null,
                spender: null,
                nativeChainId: null,
                createdAt: "2022-10-26T13:30:25.266Z",
                updatedAt: "2022-10-26T13:30:25.266Z",
            },
        },
        {
            id: 3,
            attributes: {
                name: "heco-testnet",
                title: "Huobi ECO Testnet",
                params: { nativeId: 3, hostChainId: 168 },
                bridge: null,
                spender: null,
                nativeChainId: null,
                createdAt: "2022-10-26T13:30:26.515Z",
                updatedAt: "2022-10-26T13:30:26.515Z",
            },
        },
        {
            id: 4,
            attributes: {
                name: "aurora-testnet",
                title: "Aurora Testnet",
                params: { nativeId: 5, hostChainId: 168 },
                bridge: null,
                spender: null,
                nativeChainId: null,
                createdAt: "2022-10-26T13:30:27.789Z",
                updatedAt: "2022-10-26T13:30:27.789Z",
            },
        },
        {
            id: 5,
            attributes: {
                name: "bsc",
                title: "Binance Smart Chain",
                params: { nativeId: 2, hostChainId: 167 },
                bridge: null,
                spender: null,
                nativeChainId: null,
                createdAt: "2022-10-26T13:30:29.460Z",
                updatedAt: "2022-10-26T13:30:29.460Z",
            },
        },
        {
            id: 6,
            attributes: {
                name: "heco",
                title: "Huobi ECO Chain",
                params: { nativeId: 3, hostChainId: 167 },
                bridge: null,
                spender: null,
                nativeChainId: null,
                createdAt: "2022-10-26T13:30:30.714Z",
                updatedAt: "2022-10-26T13:30:30.714Z",
            },
        },
        {
            id: 7,
            attributes: {
                name: "eth",
                title: "Ethereum",
                params: {
                    chainId: "0x1",
                    nativeId: 0,
                    hostChainId: 167,
                    blockExplorerUrls: ["https://etherscan.io"],
                },
                bridge: "0x93251F98AcB0c83904320737aec091Bce287F8f5",
                spender: null,
                nativeChainId: null,
                createdAt: "2022-10-26T13:30:31.994Z",
                updatedAt: "2023-02-20T12:42:32.667Z",
            },
        },
        {
            id: 8,
            attributes: {
                name: "rinkeby-eq-devnet",
                title: "Ethereum Rinkeby Testnet",
                params: {
                    chainId: "0x4",
                    blockExplorerUrls: ["https://rinkeby.etherscan.io"],
                },
                bridge: "0x57eaD6030148EdcC89d267E59c77F7eE39169ce1",
                spender: "0x759A21Ce0408080a6E82805C07AE4A2cE9765432",
                nativeChainId: 0,
                createdAt: "2022-10-26T13:30:33.303Z",
                updatedAt: "2022-10-26T13:30:33.303Z",
            },
        },
        {
            id: 9,
            attributes: {
                name: "bsc-eq-devnet",
                title: "BSC Testnet",
                params: {
                    chainId: "0x61",
                    blockExplorerUrls: ["https://testnet.bscscan.com"],
                },
                bridge: "0xA59830DE3f080083a6C53fF071E5B8F5ed0f40F1",
                spender: "0x3ABef85989928DdDE2D453fD8C42d8d9d25CB5Ac",
                nativeChainId: 2,
                createdAt: "2022-10-26T13:30:34.707Z",
                updatedAt: "2022-10-26T13:30:34.707Z",
            },
        },
        {
            id: 10,
            attributes: {
                name: "bsc-eq-testnet",
                title: "BSC Testnet",
                params: {
                    chainId: "0x61",
                    blockExplorerUrls: ["https://testnet.bscscan.com"],
                },
                bridge: "0x04623e3DcdAc4Fb785ad9944679966b796e82115",
                spender: "0x2Dcb6568fC2d96f1620c03037856B52f33c03D16",
                nativeChainId: 2,
                createdAt: "2022-10-26T13:30:35.966Z",
                updatedAt: "2022-10-26T13:30:35.966Z",
            },
        },
        {
            id: 11,
            attributes: {
                name: "bsc-eq-mainnet",
                title: "BSC Mainnet",
                params: { chainId: "0x38", blockExplorerUrls: ["https://bscscan.com"] },
                bridge: "0x4194AF812C74776e10057D9cf8D915e14f7C5801",
                spender: "0xdAB8355072F81CE72333023809d17Adf3Cd19a1D",
                nativeChainId: 2,
                createdAt: "2022-10-26T13:30:37.227Z",
                updatedAt: "2022-10-26T13:30:37.227Z",
            },
        },
        {
            id: 12,
            attributes: {
                name: "rinkeby-eq-devnet",
                title: "Rinkeby",
                params: {
                    chainId: "0x04",
                    blockExplorerUrls: ["https://rinkeby.etherscan.io"],
                },
                bridge: "0xC6920FA40776054961B7218562CED755279872e4",
                spender: "0xB73894c17f089462305FA9E2D8D8Dec1b158E4Ce",
                nativeChainId: 0,
                createdAt: "2022-10-26T13:30:38.479Z",
                updatedAt: "2022-10-26T13:30:38.479Z",
            },
        },
        {
            id: 13,
            attributes: {
                name: "mumbai",
                title: "Polygon Mumbai",
                params: { chainId: "0x13881" },
                bridge: "0x8e680018d67c57889083c23786c225f730c54fb5",
                spender: null,
                nativeChainId: null,
                createdAt: "2022-11-22T12:41:22.640Z",
                updatedAt: "2022-11-30T14:02:38.341Z",
            },
        },
        {
            id: 14,
            attributes: {
                name: "goerli",
                title: "Goerli Testnet",
                params: {
                    chainId: "0x5",
                    blockExplorerUrls: ["https://goerli.etherscan.io"],
                },
                bridge: "0x69A7a50Ba89eF40d25c936eb54005094A01FA656",
                spender: null,
                nativeChainId: null,
                createdAt: "2022-11-29T15:05:13.350Z",
                updatedAt: "2022-12-01T16:04:04.771Z",
            },
        },
    ],
    meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 14 } },
};
exports.default = response;
