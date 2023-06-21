"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response = {
    data: [
        {
            id: 2,
            attributes: {
                contract: "eq-token",
                method: "balanceOf",
                createdAt: "2023-02-27T12:46:45.068Z",
                updatedAt: "2023-02-27T12:46:45.068Z",
                args: ["address"],
                updateOn: [
                    ["Transfer", { from: "address" }],
                    ["Transfer", { to: "address" }],
                ],
                name: "balance",
                flow: "eq-withdraw-moonbeam-ethereum",
            },
        },
        {
            id: 3,
            attributes: {
                contract: "eq-token",
                method: "decimals",
                createdAt: "2023-02-27T12:47:25.855Z",
                updatedAt: "2023-02-28T10:26:38.764Z",
                args: [],
                updateOn: null,
                name: "decimals",
                flow: "eq-withdraw-moonbeam-ethereum",
            },
        },
        {
            id: 4,
            attributes: {
                contract: "eq-token",
                method: "allowance",
                createdAt: "2023-02-27T12:48:34.673Z",
                updatedAt: "2023-02-27T12:48:41.865Z",
                args: ["address", "0x0B322577569418b166CD98Ea8AE7C681E4A820Eb"],
                updateOn: [["Approval", null]],
                name: "allowance",
                flow: "eq-withdraw-moonbeam-ethereum",
            },
        },
        {
            id: 5,
            attributes: {
                contract: "eqd-token",
                method: "balanceOf",
                createdAt: "2023-03-07T13:23:20.472Z",
                updatedAt: "2023-03-07T13:23:20.472Z",
                args: ["address"],
                updateOn: [
                    ["Transfer", { from: "address" }],
                    ["Transfer", { to: "address" }],
                ],
                name: "balance",
                flow: "eqd-withdraw-moonbeam-ethereum",
            },
        },
        {
            id: 6,
            attributes: {
                contract: "eqd-token",
                method: "decimals",
                createdAt: "2023-03-07T13:23:34.174Z",
                updatedAt: "2023-03-07T13:23:34.174Z",
                args: [],
                updateOn: null,
                name: "decimals",
                flow: "eqd-withdraw-moonbeam-ethereum",
            },
        },
        {
            id: 7,
            attributes: {
                contract: "eqd-token",
                method: "allowance",
                createdAt: "2023-03-07T13:23:50.956Z",
                updatedAt: "2023-03-07T13:23:50.956Z",
                args: ["address", "0x0B322577569418b166CD98Ea8AE7C681E4A820Eb"],
                updateOn: [["Approval", null]],
                name: "allowance",
                flow: "eqd-withdraw-moonbeam-ethereum",
            },
        },
        {
            id: 8,
            attributes: {
                contract: "usdc-token",
                method: "balanceOf",
                createdAt: "2023-04-18T12:58:43.967Z",
                updatedAt: "2023-04-18T12:58:43.967Z",
                args: ["address"],
                updateOn: [
                    ["Transfer", { from: "address" }],
                    ["Transfer", { to: "address" }],
                ],
                name: "balance",
                flow: "usdc-withdraw-moonbaseAlpha-goerli",
            },
        },
        {
            id: 9,
            attributes: {
                contract: "usdc-token",
                method: "decimals",
                createdAt: "2023-04-18T12:59:34.278Z",
                updatedAt: "2023-04-18T12:59:34.278Z",
                args: [],
                updateOn: null,
                name: "decimals",
                flow: "usdc-withdraw-moonbaseAlpha-goerli",
            },
        },
        {
            id: 10,
            attributes: {
                contract: "usdc-token",
                method: "allowance",
                createdAt: "2023-04-18T13:00:19.970Z",
                updatedAt: "2023-04-18T13:00:19.970Z",
                args: ["address", "0x0B322577569418b166CD98Ea8AE7C681E4A820Eb"],
                updateOn: [["Approval", null]],
                name: "allowance",
                flow: "usdc-withdraw-moonbaseAlpha-goerli",
            },
        },
    ],
    meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 9 } },
};
exports.default = response;
