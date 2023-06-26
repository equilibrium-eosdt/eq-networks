export const usdt = {
  token: "usdt",
  isNative: false,
  isFeeToken: true,
  context: {
    asset: 1984,
    decimals: 6,
  },
  fees: [{
    usd: true,
    amount: 0.1,
    name: "xcm"
  }],
  existentialDeposit: 0.7
};
