declare const response: {
    readonly data: readonly [{
        readonly id: 2;
        readonly attributes: {
            readonly contract: "eq-token";
            readonly method: "balanceOf";
            readonly createdAt: "2023-02-27T12:46:45.068Z";
            readonly updatedAt: "2023-02-27T12:46:45.068Z";
            readonly args: readonly ["address"];
            readonly updateOn: readonly [readonly ["Transfer", {
                readonly from: "address";
            }], readonly ["Transfer", {
                readonly to: "address";
            }]];
            readonly name: "balance";
            readonly flow: "eq-withdraw-moonbeam-ethereum";
        };
    }, {
        readonly id: 3;
        readonly attributes: {
            readonly contract: "eq-token";
            readonly method: "decimals";
            readonly createdAt: "2023-02-27T12:47:25.855Z";
            readonly updatedAt: "2023-02-28T10:26:38.764Z";
            readonly args: readonly [];
            readonly updateOn: null;
            readonly name: "decimals";
            readonly flow: "eq-withdraw-moonbeam-ethereum";
        };
    }, {
        readonly id: 4;
        readonly attributes: {
            readonly contract: "eq-token";
            readonly method: "allowance";
            readonly createdAt: "2023-02-27T12:48:34.673Z";
            readonly updatedAt: "2023-02-27T12:48:41.865Z";
            readonly args: readonly ["address", "0x0B322577569418b166CD98Ea8AE7C681E4A820Eb"];
            readonly updateOn: readonly [readonly ["Approval", null]];
            readonly name: "allowance";
            readonly flow: "eq-withdraw-moonbeam-ethereum";
        };
    }, {
        readonly id: 5;
        readonly attributes: {
            readonly contract: "eqd-token";
            readonly method: "balanceOf";
            readonly createdAt: "2023-03-07T13:23:20.472Z";
            readonly updatedAt: "2023-03-07T13:23:20.472Z";
            readonly args: readonly ["address"];
            readonly updateOn: readonly [readonly ["Transfer", {
                readonly from: "address";
            }], readonly ["Transfer", {
                readonly to: "address";
            }]];
            readonly name: "balance";
            readonly flow: "eqd-withdraw-moonbeam-ethereum";
        };
    }, {
        readonly id: 6;
        readonly attributes: {
            readonly contract: "eqd-token";
            readonly method: "decimals";
            readonly createdAt: "2023-03-07T13:23:34.174Z";
            readonly updatedAt: "2023-03-07T13:23:34.174Z";
            readonly args: readonly [];
            readonly updateOn: null;
            readonly name: "decimals";
            readonly flow: "eqd-withdraw-moonbeam-ethereum";
        };
    }, {
        readonly id: 7;
        readonly attributes: {
            readonly contract: "eqd-token";
            readonly method: "allowance";
            readonly createdAt: "2023-03-07T13:23:50.956Z";
            readonly updatedAt: "2023-03-07T13:23:50.956Z";
            readonly args: readonly ["address", "0x0B322577569418b166CD98Ea8AE7C681E4A820Eb"];
            readonly updateOn: readonly [readonly ["Approval", null]];
            readonly name: "allowance";
            readonly flow: "eqd-withdraw-moonbeam-ethereum";
        };
    }, {
        readonly id: 8;
        readonly attributes: {
            readonly contract: "usdc-token";
            readonly method: "balanceOf";
            readonly createdAt: "2023-04-18T12:58:43.967Z";
            readonly updatedAt: "2023-04-18T12:58:43.967Z";
            readonly args: readonly ["address"];
            readonly updateOn: readonly [readonly ["Transfer", {
                readonly from: "address";
            }], readonly ["Transfer", {
                readonly to: "address";
            }]];
            readonly name: "balance";
            readonly flow: "usdc-withdraw-moonbaseAlpha-goerli";
        };
    }, {
        readonly id: 9;
        readonly attributes: {
            readonly contract: "usdc-token";
            readonly method: "decimals";
            readonly createdAt: "2023-04-18T12:59:34.278Z";
            readonly updatedAt: "2023-04-18T12:59:34.278Z";
            readonly args: readonly [];
            readonly updateOn: null;
            readonly name: "decimals";
            readonly flow: "usdc-withdraw-moonbaseAlpha-goerli";
        };
    }, {
        readonly id: 10;
        readonly attributes: {
            readonly contract: "usdc-token";
            readonly method: "allowance";
            readonly createdAt: "2023-04-18T13:00:19.970Z";
            readonly updatedAt: "2023-04-18T13:00:19.970Z";
            readonly args: readonly ["address", "0x0B322577569418b166CD98Ea8AE7C681E4A820Eb"];
            readonly updateOn: readonly [readonly ["Approval", null]];
            readonly name: "allowance";
            readonly flow: "usdc-withdraw-moonbaseAlpha-goerli";
        };
    }];
    readonly meta: {
        readonly pagination: {
            readonly page: 1;
            readonly pageSize: 25;
            readonly pageCount: 1;
            readonly total: 9;
        };
    };
};
export default response;
