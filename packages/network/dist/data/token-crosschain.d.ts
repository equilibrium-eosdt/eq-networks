declare const response: {
    readonly data: readonly [{
        readonly id: 51;
        readonly attributes: {
            readonly chainId: "10009";
            readonly token: "dot";
            readonly chainType: "substrate";
            readonly chainName: "polkadot";
            readonly isNative: true;
            readonly params: {
                readonly id: "Dot";
                readonly type: "Token";
                readonly additional: {
                    readonly noRuntimeCalls: true;
                };
            };
            readonly decimals: 10;
            readonly isDisabled: false;
            readonly createdAt: "2022-12-07T13:28:03.179Z";
            readonly updatedAt: "2023-02-14T08:43:35.870Z";
            readonly isDepositEnabled: true;
            readonly isWithdrawEnabled: false;
            readonly withdrawXcmType: "relay";
            readonly minDeposit: 0;
            readonly depositFeeUsd: 0.1;
            readonly withdrawFee: 0.1;
            readonly employeeOnly: null;
            readonly paysFee: null;
            readonly depositSenderMinBalance: 1;
        };
    }, {
        readonly id: 52;
        readonly attributes: {
            readonly chainId: "10009";
            readonly token: "dot";
            readonly chainType: "substrate";
            readonly chainName: "polkadot";
            readonly isNative: true;
            readonly params: {};
            readonly decimals: 10;
            readonly isDisabled: false;
            readonly createdAt: "2022-12-07T13:56:33.881Z";
            readonly updatedAt: "2022-12-09T15:42:10.857Z";
            readonly isDepositEnabled: false;
            readonly isWithdrawEnabled: true;
            readonly withdrawXcmType: "relay";
            readonly minDeposit: null;
            readonly depositFeeUsd: null;
            readonly withdrawFee: 0.0469417452;
            readonly employeeOnly: null;
            readonly paysFee: null;
            readonly depositSenderMinBalance: null;
        };
    }, {
        readonly id: 60;
        readonly attributes: {
            readonly chainId: "10009";
            readonly token: "glmr";
            readonly chainType: "substrate";
            readonly chainName: "moonbeam";
            readonly isNative: true;
            readonly params: {
                readonly withdrawExtra: {
                    readonly feePayer: "ThisAccWillPay";
                    readonly xcmFeeAsset: "glmr";
                    readonly xcmFeeAmount: 800000;
                };
            };
            readonly decimals: 18;
            readonly isDisabled: false;
            readonly createdAt: "2023-01-17T10:23:37.682Z";
            readonly updatedAt: "2023-04-07T08:07:48.813Z";
            readonly isDepositEnabled: true;
            readonly isWithdrawEnabled: true;
            readonly withdrawXcmType: "parachain-evm";
            readonly minDeposit: 0;
            readonly depositFeeUsd: 0.1;
            readonly withdrawFee: 0.1;
            readonly employeeOnly: false;
            readonly paysFee: null;
            readonly depositSenderMinBalance: 0;
        };
    }, {
        readonly id: 63;
        readonly attributes: {
            readonly chainId: "10009";
            readonly token: "eq";
            readonly chainType: "substrate";
            readonly chainName: "moonbeam";
            readonly isNative: false;
            readonly params: {
                readonly token: "0xFffFFfFf8f6267e040D8a0638C576dfBa4F0F6D6";
                readonly withdrawExtra: {
                    readonly feePayer: "ThisAccWillPay";
                    readonly xcmFeeAsset: "eq";
                    readonly xcmFeeAmount: 2424242424;
                };
            };
            readonly decimals: 9;
            readonly isDisabled: false;
            readonly createdAt: "2023-01-27T09:59:01.079Z";
            readonly updatedAt: "2023-03-07T09:19:10.267Z";
            readonly isDepositEnabled: true;
            readonly isWithdrawEnabled: true;
            readonly withdrawXcmType: "parachain-evm";
            readonly minDeposit: 0;
            readonly depositFeeUsd: 0.1;
            readonly withdrawFee: 0;
            readonly employeeOnly: false;
            readonly paysFee: null;
            readonly depositSenderMinBalance: 0;
        };
    }, {
        readonly id: 64;
        readonly attributes: {
            readonly chainId: "10009";
            readonly token: "eqd";
            readonly chainType: "substrate";
            readonly chainName: "moonbeam";
            readonly isNative: false;
            readonly params: {
                readonly token: "0xFFffFfFF8cdA1707bAF23834d211B08726B1E499";
                readonly withdrawExtra: {
                    readonly feePayer: "ThisAccWillPay";
                    readonly xcmFeeAsset: "eqd";
                    readonly xcmFeeAmount: 100000000;
                };
            };
            readonly decimals: 9;
            readonly isDisabled: false;
            readonly createdAt: "2023-01-27T10:00:16.278Z";
            readonly updatedAt: "2023-03-09T12:00:13.866Z";
            readonly isDepositEnabled: true;
            readonly isWithdrawEnabled: true;
            readonly withdrawXcmType: "parachain-evm";
            readonly minDeposit: 0;
            readonly depositFeeUsd: 0.1;
            readonly withdrawFee: 0;
            readonly employeeOnly: false;
            readonly paysFee: null;
            readonly depositSenderMinBalance: 0;
        };
    }];
    readonly meta: {
        readonly pagination: {
            readonly page: 1;
            readonly pageSize: 100;
            readonly pageCount: 1;
            readonly total: 72;
        };
    };
};
export default response;
