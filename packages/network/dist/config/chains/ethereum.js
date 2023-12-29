"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTransferArgs(context, amount, pub) {
    const functionName = "deposit";
    const _pub = pub.slice(2);
    const { resourceId, decimals } = context;
    const hostChainId = 7;
    const [int, fra] = amount.split(".");
    let _amount = BigInt(int !== null && int !== void 0 ? int : 0) * BigInt(10) ** BigInt(decimals);
    if (fra === null || fra === void 0 ? void 0 : fra.length) {
        const _fra = fra.slice(0, decimals);
        const dec = decimals - _fra.length;
        if (Number.isFinite(Number(_fra))) {
            _amount += BigInt(_fra) * BigInt(10) ** BigInt(dec);
        }
    }
    const payload = `0x${_amount.toString(16).padStart(64, "0")}${(_pub.length / 2)
        .toString(16)
        .padStart(64, "0")}${_pub}`;
    return {
        functionName,
        args: [hostChainId, resourceId, payload],
        value: BigInt(1000000000000000),
    };
}
const info = {
    abi: [
        {
            inputs: [
                {
                    internalType: "uint8",
                    name: "destinationChainID",
                    type: "uint8",
                },
                {
                    internalType: "bytes32",
                    name: "resourceID",
                    type: "bytes32",
                },
                {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes",
                },
            ],
            name: "deposit",
            outputs: [],
            stateMutability: "payable",
            type: "function",
        },
    ],
    address: "0x267c4d894db79a3023e266B84401e58f7434e1F1",
    spender: "0xe2a1D7C0c2ED4d3937bd6f93d9aCeA7498232F2F",
    nodes: ["https://eth.llamarpc.com"],
    getTransferArgs,
};
const chainDef = {
    name: "ethereum",
    type: "evm",
    title: "Ethereum",
    nativeToken: "eth",
    logo: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAxOSAoNjQtQml0KSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZlcnNpb249IjEuMSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIGltYWdlLXJlbmRlcmluZz0ib3B0aW1pemVRdWFsaXR5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIKdmlld0JveD0iMCAwIDc4NC4zNyAxMjc3LjM5IgogeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiPgogPGcgaWQ9IkxheWVyX3gwMDIwXzEiPgogIDxtZXRhZGF0YSBpZD0iQ29yZWxDb3JwSURfMENvcmVsLUxheWVyIi8+CiAgPGcgaWQ9Il8xNDIxMzk0MzQyNDAwIj4KICAgPGc+CiAgICA8cG9seWdvbiBmaWxsPSIjMzQzNDM0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHBvaW50cz0iMzkyLjA3LDAgMzgzLjUsMjkuMTEgMzgzLjUsODczLjc0IDM5Mi4wNyw4ODIuMjkgNzg0LjEzLDY1MC41NCAiLz4KICAgIDxwb2x5Z29uIGZpbGw9IiM4QzhDOEMiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSIzOTIuMDcsMCAtMCw2NTAuNTQgMzkyLjA3LDg4Mi4yOSAzOTIuMDcsNDcyLjMzICIvPgogICAgPHBvbHlnb24gZmlsbD0iIzNDM0MzQiIgZmlsbC1ydWxlPSJub256ZXJvIiBwb2ludHM9IjM5Mi4wNyw5NTYuNTIgMzg3LjI0LDk2Mi40MSAzODcuMjQsMTI2My4yOCAzOTIuMDcsMTI3Ny4zOCA3ODQuMzcsNzI0Ljg5ICIvPgogICAgPHBvbHlnb24gZmlsbD0iIzhDOEM4QyIgZmlsbC1ydWxlPSJub256ZXJvIiBwb2ludHM9IjM5Mi4wNywxMjc3LjM4IDM5Mi4wNyw5NTYuNTIgLTAsNzI0Ljg5ICIvPgogICAgPHBvbHlnb24gZmlsbD0iIzE0MTQxNCIgZmlsbC1ydWxlPSJub256ZXJvIiBwb2ludHM9IjM5Mi4wNyw4ODIuMjkgNzg0LjEzLDY1MC41NCAzOTIuMDcsNDcyLjMzICIvPgogICAgPHBvbHlnb24gZmlsbD0iIzM5MzkzOSIgZmlsbC1ydWxlPSJub256ZXJvIiBwb2ludHM9IjAsNjUwLjU0IDM5Mi4wNyw4ODIuMjkgMzkyLjA3LDQ3Mi4zMyAiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==",
    info,
};
exports.default = Object.assign({}, chainDef);
