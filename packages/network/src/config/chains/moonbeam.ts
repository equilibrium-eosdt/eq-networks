import type { EVMChain } from "../../types/v1";
import type { BigDecimals } from "../../util/math";

/**
 * WORK IN PROGRESS FOR EVM CHAINS
 */

const chainDef: EVMChain = {
  name: "moonbeam",
  type: "evm",
  title: "Moonbeam",
  nativeToken: "glmr",
  logo: null,
};

const xTokensContractAddress = "0x0000000000000000000000000000000000000804";

const xTokensTransferAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "currencyAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "parents",
            type: "uint8",
          },
          {
            internalType: "bytes[]",
            name: "interior",
            type: "bytes[]",
          },
        ],
        internalType: "struct Xtokens.Multilocation",
        name: "destination",
        type: "tuple",
      },
      {
        internalType: "uint64",
        name: "weight",
        type: "uint64",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export const moonbeam = {
  ...chainDef,
};
