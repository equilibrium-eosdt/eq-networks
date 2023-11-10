import fs from "fs/promises";
import path from "path";
import evmChainResponse from "../data/evm-chain";
import evmFlowResponse from "../data/evm-flow";
import evmSmartContractCallResponse from "../data/evm-smart-contract-call";
import evmSmartContractResponse from "../data/evm-smart-contract";
import substrateChainResponse from "../data/substrate-chain";
import tokenCrosschainResponse from "../data/token-crosschain";
import chains from "../config/chains";
import { genshiro, equilibrium, crosschain } from "../config/tokens";

const template = (
  jsonStr: string,
  callbackName: string = "_networkInjectorCallback",
) => `// file is auto generated; do not edit
const data = ${jsonStr};

window.${callbackName} = () => ({
  version: "v0",
  ...data
});
`;

const main = async () => {
  const outDir =
    process.env.OUT_DIR || path.join(process.cwd(), "..", "..", "docs");

  await fs.writeFile(
    path.join(outDir, "injector.js"),
    template(
      JSON.stringify(
        {
          v0: {
            "evm-chain": evmChainResponse,
            "evm-flow": evmFlowResponse,
            "evm-smart-contract-call": evmSmartContractCallResponse,
            "evm-smart-contract": evmSmartContractResponse,
            "substrate-chain": substrateChainResponse,
            "token-crosschain": tokenCrosschainResponse,
            "gens-tokens": genshiro,
          },
          v1: {
            chains,
            equilibrium,
            crosschain,
            genshiro,
          },
        },
        (_, v) => {
          if (typeof v === "function") {
            return {
              func$: v.toString(),
            };
          }

          return v;
        },
      ),
    ),
  );
};

main().catch((e) => {
  console.error(e);
  process.exit(-1);
});
