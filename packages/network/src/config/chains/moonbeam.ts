import type { DefaultContext, EVMChain } from "../../types/v1";
import type { BigDecimals } from "../../util/math";

/**
 * WORK IN PROGRESS FOR EVM CHAINS
 */

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

const info = {
  abi: xTokensTransferAbi,
  address: xTokensContractAddress,
  nodes: ["wss://wss.api.moonbeam.network"],
  getTransferArgs,
} as const;

export interface MoonbeamContext extends DefaultContext {
  address?: `0x${string}`;
  decimals: number;
}

function getTransferArgs(
  context: MoonbeamContext,
  amount: `0x${number}`,
  pub: `0x${string}`,
) {
  // Junction::AccountId32
  const DESTINATION_ENUM_SELECTOR = "0x01";
  // NetworkId::Any
  const DESTINATION_NETWORK_ID = "00";

  const getInterior = (pub: `0x${string}`): `0x${string}`[] => [
    "0x00000007db", // Parachain: 2011
    `${DESTINATION_ENUM_SELECTOR}${pub.slice(2)}${DESTINATION_NETWORK_ID}`, // AccountId32: { network: Any, id: pub}
  ];

  const functionName = "transfer";
  const { address, decimals } = context;
  const [int, fra] = amount.split(".");
  let _amount = BigInt(int ?? 0) * BigInt(10) ** BigInt(decimals);

  if (fra?.length) {
    const _fra = fra.slice(0, decimals);
    const dec = decimals - _fra.length;

    if (Number.isFinite(Number(_fra))) {
      _amount += BigInt(_fra) * BigInt(10) ** BigInt(dec);
    }
  }

  return {
    functionName,
    args: [
      address!,
      _amount,
      { parents: 1, interior: getInterior(pub) },
      BigInt(5000000),
    ],
  } as const;
}

const chainDef: EVMChain<typeof info> = {
  name: "moonbeam",
  type: "evm",
  title: "Moonbeam",
  nativeToken: "glmr",
  logo: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjEwMCIKICAgaGVpZ2h0PSIxMDAiCiAgIHZpZXdCb3g9IjAgMCAxMDAgMTAwIgogICBmaWxsPSJub25lIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmcyNiIKICAgc29kaXBvZGk6ZG9jbmFtZT0ibW9vbmJlYW0uc3ZnIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjIuMiAoNzMyYTAxZGE2MywgMjAyMi0xMi0wOSkiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXcyOCIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiMwMDAwMDAiCiAgICAgYm9yZGVyb3BhY2l0eT0iMC4yNSIKICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIzLjUyMjMyMTQiCiAgICAgaW5rc2NhcGU6Y3g9Ii03NS44MDIyODIiCiAgICAgaW5rc2NhcGU6Y3k9IjUuMjUyMjE4IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTM1MCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDgwIgogICAgIGlua3NjYXBlOndpbmRvdy14PSIzMzUxIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIyODUiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJnMTgzOS00IiAvPjxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjM2OTA5NDQ3LDAsMCwwLjM2OTA5NDQ3LC0yLjYxMDA3MjFlLTYsOS4yMTExMjcyZS03KSI+PGNpcmNsZQogICAgICAgcj0iMCIKICAgICAgIGN5PSIxMzUuNDY2NjYiCiAgICAgICBjeD0iMTM1LjQ2NjY2IgogICAgICAgaWQ9InBhdGg4NjAiCiAgICAgICBzdHlsZT0iZmlsbDojMGQxMTI2O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMGQxMTI2O3N0cm9rZS13aWR0aDoxLjU4NDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPjxnCiAgICAgICBpZD0iZzE4MzktNCIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDMuMDIwNjg5MiwwLDAsMy4wMjA2ODkyLC01NTEuODY1OTksLTQ4NS42NDQ1NykiPjxjaXJjbGUKICAgICAgICAgcj0iNDQuODQ2Mjc5IgogICAgICAgICBzdHlsZT0iZmlsbDojMTcxZTQzO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjYyNTcxOSIKICAgICAgICAgaWQ9InBhdGg4NjIiCiAgICAgICAgIGN4PSIyMjcuNTQxNjciCiAgICAgICAgIGN5PSIyMDUuNjE5MDUiIC8+PGcKICAgICAgICAgaWQ9Imc4OTEtNiIKICAgICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC44MDAwNzgzMywwLDAsMC44MDAwNzgzMyw0NS40OTA1MTQsNDEuMTA3NzA1KSI+PGcKICAgICAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjIyNjY5MTk4LDAsMCwtMC4yMjY2OTE5OCwyMzUuMDU1ODIsMTcxLjk4NzYzKSIKICAgICAgICAgICBpZD0iZzExMzktNyI+PHBhdGgKICAgICAgICAgICAgIGlkPSJwYXRoMTE0MS0yIgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzUzY2JjODtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgICAgIGQ9Im0gMCwwIGMgLTYwLjA0NiwwIC0xMDguNzI0LC00OC42NzggLTEwOC43MjQsLTEwOC43MjQgaCAwLjAwMiBjIDEwZS00LC0wLjA3NiAtMC4wMDQsLTAuMTUgMCwtMC4yMjcgbCAwLjAwOSwtMC4xNyBjIDAuMTUxLC0yLjgzNCAyLjUxMywtNS4wNDYgNS4zNTIsLTUuMDQ2IGggMjA2LjcyMiBjIDIuODM5LDAgNS4yMDIsMi4yMTIgNS4zNTIsNS4wNDYgbCAwLjAwOSwwLjE3IGMgMC4wMDQsMC4wNzcgLTEwZS00LDAuMTUxIDAsMC4yMjcgaCAwLjAwMiBDIDEwOC43MjQsLTQ4LjY3OCA2MC4wNDYsMCAwLDAiIC8+PC9nPjxnCiAgICAgICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC4yMjY2OTE5OCwwLDAsLTAuMjI2NjkxOTgsMTk0LjA5MzY0LDIyNC4xNTMxNSkiCiAgICAgICAgICAgaWQ9ImcxMTQzLTMiPjxwYXRoCiAgICAgICAgICAgICBpZD0icGF0aDExNDUtNCIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNlMTE0N2I7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgICAgICBkPSJtIDAsMCBjIDAsLTMuNjUzIC0yLjk2MiwtNi42MTYgLTYuNjE3LC02LjYxNiAtMy42NTQsMCAtNi42MTYsMi45NjMgLTYuNjE2LDYuNjE2IDAsMy42NTQgMi45NjIsNi42MTcgNi42MTYsNi42MTcgQyAtMi45NjIsNi42MTcgMCwzLjY1NCAwLDAiIC8+PC9nPjxnCiAgICAgICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC4yMjY2OTE5OCwwLDAsLTAuMjI2NjkxOTgsMjU2Ljg1NzY1LDIxNS44NTQzMSkiCiAgICAgICAgICAgaWQ9ImcxMTQ3LTgiPjxwYXRoCiAgICAgICAgICAgICBpZD0icGF0aDExNDktMCIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNlMTE0N2I7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgICAgICBkPSJtIDAsMCBoIC0yMjEuODE3IGMgLTQuOTM1LDAgLTguMDY3LC01LjI2OCAtNS43MzMsLTkuNjE2IDAuMDM2LC0wLjA2OSAwLjA3MywtMC4xMzggMC4xMTEsLTAuMjA2IDEuMTM0LC0yLjEwNiAzLjM0MiwtMy40MTEgNS43MzMsLTMuNDExIEggLTAuMTEyIGMgMi4zOTEsMCA0LjU5OSwxLjMwNSA1LjczNCwzLjQxMSAwLjAzNywwLjA2OCAwLjA3NCwwLjEzNyAwLjExMSwwLjIwNiBDIDguMDY2LC01LjI2OCA0LjkzNCwwIDAsMCIgLz48L2c+PGcKICAgICAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjIyNjY5MTk4LDAsMCwtMC4yMjY2OTE5OCwyNjMuNTM5OTYsMjAyLjI1Njc5KSIKICAgICAgICAgICBpZD0iZzExNTEtMyI+PHBhdGgKICAgICAgICAgICAgIGlkPSJwYXRoMTE1My00IgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6I2UxMTQ3YjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgICAgIGQ9Im0gMCwwIGggLTI1MS4zMDIgYyAtMy43NDYsMCAtNi42OTgsLTMuMTUxIC02LjUwNSwtNi44OTIgMC4wMDQsLTAuMDY5IDAuMDA4LC0wLjEzOCAwLjAxMiwtMC4yMDcgMC4xODMsLTMuNDQ1IDMuMDU0LC02LjEzNCA2LjUwNSwtNi4xMzQgSCAtMC4wMTIgYyAzLjQ1LDAgNi4zMjIsMi42ODkgNi41MDUsNi4xMzQgQyA2LjQ5NywtNy4wMyA2LjUsLTYuOTYxIDYuNTA0LC02Ljg5MiA2LjY5NywtMy4xNTEgMy43NDYsMCAwLDAiIC8+PC9nPjxnCiAgICAgICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC4yMjY2OTE5OCwwLDAsLTAuMjI2NjkxOTgsMjQyLjA4ODU4LDIzNi4yNTA1OSkiCiAgICAgICAgICAgaWQ9ImcxMTU1LTUiPjxwYXRoCiAgICAgICAgICAgICBpZD0icGF0aDExNTctNSIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNlMTE0N2I7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgICAgICBkPSJtIDAsMCBoIC0xMTMuMjUgYyAtNi44OCwwIC05LjA0NywtOS4yNSAtMi45MDUsLTEyLjM0OSAwLjEzOCwtMC4wNjkgMC4yNzYsLTAuMTM4IDAuNDE0LC0wLjIwOCAwLjkwMSwtMC40NSAxLjg5OCwtMC42NzYgMi45MDYsLTAuNjc2IGggMTEyLjQyIGMgMS4wMDgsMCAyLjAwNSwwLjIyNiAyLjkwNiwwLjY3NiAwLjEzOCwwLjA3IDAuMjc2LDAuMTM5IDAuNDE0LDAuMjA4IEMgOS4wNDcsLTkuMjUgNi44OCwwIDAsMCIgLz48L2c+PGcKICAgICAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjIyNjY5MTk4LDAsMCwtMC4yMjY2OTE5OCwyNTcuNzc1MDQsMjI5LjQ1MTgzKSIKICAgICAgICAgICBpZD0iZzExNTktNCI+PHBhdGgKICAgICAgICAgICAgIGlkPSJwYXRoMTE2MS0zIgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6I2UxMTQ3YjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgICAgIGQ9Im0gMCwwIGggLTExMy4yNSBjIC02Ljg4LDAgLTkuMDQ3LC05LjI0OSAtMi45MDUsLTEyLjM0OSAwLjEzOCwtMC4wNjkgMC4yNzYsLTAuMTM4IDAuNDE0LC0wLjIwOCAwLjkwMSwtMC40NSAxLjg5OCwtMC42NzYgMi45MDYsLTAuNjc2IGggMTEyLjQyIGMgMS4wMDcsMCAyLjAwNSwwLjIyNiAyLjkwNiwwLjY3NiAwLjEzOCwwLjA3IDAuMjc2LDAuMTM5IDAuNDEzLDAuMjA4IEMgOS4wNDYsLTkuMjQ5IDYuODc5LDAgMCwwIiAvPjwvZz48ZwogICAgICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMjI2NjkxOTgsMCwwLC0wLjIyNjY5MTk4LDIyMi43NjgwNywyMjUuMTgwOTcpIgogICAgICAgICAgIGlkPSJnMTE2My0yIj48cGF0aAogICAgICAgICAgICAgaWQ9InBhdGgxMTY1LTciCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojZTExNDdiO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICAgICAgZD0ibSAwLDAgYyAtMC4wNjQsMC4wNjggLTAuMTI4LDAuMTM3IC0wLjE5MywwLjIwNSAtMy44ODQsNC4xNTIgLTAuOTA2LDEwLjk0NiA0Ljc3OSwxMC45NDYgaCAxODMuODA4IGMgNS42ODYsMCA4LjY2MywtNi43OTQgNC43NzksLTEwLjk0NiBDIDE5My4xMDksMC4xMzcgMTkzLjA0NSwwLjA2OCAxOTIuOTgxLDAgMTkxLjc0LC0xLjMyMSAxOTAuMDE1LC0yLjA4MiAxODguMjAzLC0yLjA4MiBIIDQuNzc4IEMgMi45NjUsLTIuMDgyIDEuMjQxLC0xLjMyMSAwLDAiIC8+PC9nPjxnCiAgICAgICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC4yMjY2OTE5OCwwLDAsLTAuMjI2NjkxOTgsMTk3Ljk1MTA1LDIyMi42NTMwNykiCiAgICAgICAgICAgaWQ9ImcxMTY3LTgiPjxwYXRoCiAgICAgICAgICAgICBpZD0icGF0aDExNjktNCIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNlMTE0N2I7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgICAgICBkPSJtIDAsMCBoIDg3Ljc3MyBjIDYuODgsMCA5LjA0NywtOS4yNDkgMi45MDUsLTEyLjM0OSAtMC4xMzgsLTAuMDY5IC0wLjI3NiwtMC4xMzggLTAuNDE0LC0wLjIwNyAtMC45MDEsLTAuNDUxIC0xLjg5OCwtMC42NzcgLTIuOTA1LC0wLjY3NyBIIDAuNDE1IGMgLTEuMDA3LDAgLTIuMDA1LDAuMjI2IC0yLjkwNiwwLjY3NyAtMC4xMzgsMC4wNjkgLTAuMjc2LDAuMTM4IC0wLjQxMywwLjIwNyBDIC05LjA0NiwtOS4yNDkgLTYuODc5LDAgMCwwIiAvPjwvZz48ZwogICAgICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMjI2NjkxOTgsMCwwLC0wLjIyNjY5MTk4LDIwMi43MTUzNSwyMDMuNzU2NikiCiAgICAgICAgICAgaWQ9ImcxMTcxLTYiPjxwYXRoCiAgICAgICAgICAgICBpZD0icGF0aDExNzMtOCIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNlMTE0N2I7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgICAgICBkPSJtIDAsMCBjIDAsLTMuNjU0IC0yLjk2MiwtNi42MTYgLTYuNjE3LC02LjYxNiAtMy42NTQsMCAtNi42MTYsMi45NjIgLTYuNjE2LDYuNjE2IDAsMy42NTQgMi45NjIsNi42MTYgNi42MTYsNi42MTYgQyAtMi45NjIsNi42MTYgMCwzLjY1NCAwLDAiIC8+PC9nPjxnCiAgICAgICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC4yMjY2OTE5OCwwLDAsLTAuMjI2NjkxOTgsMjM4LjA3Mjc2LDIxMC45NjA0OSkiCiAgICAgICAgICAgaWQ9ImcxMTc1LTIiPjxwYXRoCiAgICAgICAgICAgICBpZD0icGF0aDExNzctNCIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNlMTE0N2I7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgICAgICBkPSJNIDAsMCBDIDAuMDE5LDAuMDY4IDAuMDM3LDAuMTM4IDAuMDU2LDAuMjA2IDEuMTc1LDQuMzM5IC0xLjk1OSw4LjQwMyAtNi4yNCw4LjQwMyBoIC0xODMuODMyIGMgLTQuMjgyLDAgLTcuNDE2LC00LjA2NCAtNi4yOTYsLTguMTk3IDAuMDE4LC0wLjA2OCAwLjAzNywtMC4xMzggMC4wNTYsLTAuMjA2IDAuNzc1LC0yLjg0NiAzLjM0NiwtNC44MyA2LjI5NSwtNC44MyBIIC02LjI5NSBjIDIuOTQ5LDAgNS41MTksMS45ODQgNi4yOTUsNC44MyIgLz48L2c+PGcKICAgICAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjIyNjY5MTk4LDAsMCwtMC4yMjY2OTE5OCwxOTEuMTI1ODEsMjEwLjU1NTM2KSIKICAgICAgICAgICBpZD0iZzExNzktMSI+PHBhdGgKICAgICAgICAgICAgIGlkPSJwYXRoMTE4MS01IgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6I2UxMTQ3YjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgICAgIGQ9Im0gMCwwIGMgMCwtMy42NTQgLTIuOTYyLC02LjYxNyAtNi42MTcsLTYuNjE3IC0zLjY1NCwwIC02LjYxNiwyLjk2MyAtNi42MTYsNi42MTcgMCwzLjY1NCAyLjk2Miw2LjYxNiA2LjYxNiw2LjYxNiBDIC0yLjk2Miw2LjYxNiAwLDMuNjU0IDAsMCIgLz48L2c+PGcKICAgICAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjIyNjY5MTk4LDAsMCwtMC4yMjY2OTE5OCwyMDIuNzE1MzUsMjE3LjM1NDEyKSIKICAgICAgICAgICBpZD0iZzExODMtNyI+PHBhdGgKICAgICAgICAgICAgIGlkPSJwYXRoMTE4NS0wIgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6I2UxMTQ3YjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgICAgIGQ9Im0gMCwwIGMgMCwtMy42NTQgLTIuOTYyLC02LjYxNyAtNi42MTcsLTYuNjE3IC0zLjY1NCwwIC02LjYxNiwyLjk2MyAtNi42MTYsNi42MTcgMCwzLjY1NCAyLjk2Miw2LjYxNiA2LjYxNiw2LjYxNiBDIC0yLjk2Miw2LjYxNiAwLDMuNjU0IDAsMCIgLz48L2c+PGcKICAgICAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjIyNjY5MTk4LDAsMCwtMC4yMjY2OTE5OCwyMjguMjQ0NjUsMjMwLjk1MTkxKSIKICAgICAgICAgICBpZD0iZzExODctNyI+PHBhdGgKICAgICAgICAgICAgIGlkPSJwYXRoMTE4OS02IgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6I2UxMTQ3YjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgICAgIGQ9Im0gMCwwIGMgMCwtMy42NTQgLTIuOTYyLC02LjYxNiAtNi42MTcsLTYuNjE2IC0zLjY1NCwwIC02LjYxNiwyLjk2MiAtNi42MTYsNi42MTYgMCwzLjY1NCAyLjk2Miw2LjYxNyA2LjYxNiw2LjYxNyBDIC0yLjk2Miw2LjYxNyAwLDMuNjU0IDAsMCIgLz48L2c+PGcKICAgICAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjIyNjY5MTk4LDAsMCwtMC4yMjY2OTE5OCwyMTIuNTU4MywyMzcuNzUwNjcpIgogICAgICAgICAgIGlkPSJnMTE5MS0xIj48cGF0aAogICAgICAgICAgICAgaWQ9InBhdGgxMTkzLTEiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojZTExNDdiO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICAgICAgZD0ibSAwLDAgYyAwLC0zLjY1NCAtMi45NjIsLTYuNjE2IC02LjYxNywtNi42MTYgLTMuNjU0LDAgLTYuNjE2LDIuOTYyIC02LjYxNiw2LjYxNiAwLDMuNjU0IDIuOTYyLDYuNjE3IDYuNjE2LDYuNjE3IEMgLTIuOTYyLDYuNjE3IDAsMy42NTQgMCwwIiAvPjwvZz48L2c+PHRleHQKICAgICAgICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgICAgICAgc3R5bGU9ImZvbnQtc2l6ZToxNy41MTgxcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpSb2JvdG87LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpSb2JvdG87ZmlsbDojMGQxMTI2O2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDowLjA4NzU5MDMiCiAgICAgICAgIHg9IjIxNi4xNTcwNyIKICAgICAgICAgeT0iMTk0LjE1ODk3IgogICAgICAgICBpZD0idGV4dDg2NC02LTIiPjx0c3BhbgogICAgICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiCiAgICAgICAgICAgaWQ9InRzcGFuODYyLTMtOSIKICAgICAgICAgICB4PSIyMTYuMTU3MDciCiAgICAgICAgICAgeT0iMTk0LjE1ODk3IgogICAgICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZToxNy41MTgxcHg7Zm9udC1mYW1pbHk6J1ZhcmVsYSBSb3VuZCc7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonVmFyZWxhIFJvdW5kJztmaWxsOiMwZDExMjY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjAuMDg3NTkwMyIgLz48L3RleHQ+PC9nPjwvZz48ZGVmcwogICAgIGlkPSJkZWZzMjQiPjxsaW5lYXJHcmFkaWVudAogICAgICAgaWQ9InBhaW50MF9saW5lYXIiCiAgICAgICB4MT0iNTAiCiAgICAgICB5MT0iMjYuOTczNiIKICAgICAgIHgyPSI1MCIKICAgICAgIHkyPSI3Mi4zNjg0IgogICAgICAgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wCiAgICAgICAgIHN0b3AtY29sb3I9IiM3QUVEQ0YiCiAgICAgICAgIGlkPSJzdG9wOCIgLz48c3RvcAogICAgICAgICBvZmZzZXQ9IjAuMjAxMzMzIgogICAgICAgICBzdG9wLWNvbG9yPSIjNjhDRUZBIgogICAgICAgICBpZD0ic3RvcDEwIiAvPjxzdG9wCiAgICAgICAgIG9mZnNldD0iMC40MDMyNDQiCiAgICAgICAgIHN0b3AtY29sb3I9IiM2ODlDRjgiCiAgICAgICAgIGlkPSJzdG9wMTIiIC8+PHN0b3AKICAgICAgICAgb2Zmc2V0PSIwLjYwMjA3NiIKICAgICAgICAgc3RvcC1jb2xvcj0iI0FDNTdDMCIKICAgICAgICAgaWQ9InN0b3AxNCIgLz48c3RvcAogICAgICAgICBvZmZzZXQ9IjAuODAxODY3IgogICAgICAgICBzdG9wLWNvbG9yPSIjRTY1NjU5IgogICAgICAgICBpZD0ic3RvcDE2IiAvPjxzdG9wCiAgICAgICAgIG9mZnNldD0iMSIKICAgICAgICAgc3RvcC1jb2xvcj0iI0YyQzI0MSIKICAgICAgICAgaWQ9InN0b3AxOCIgLz48L2xpbmVhckdyYWRpZW50PjxjbGlwUGF0aAogICAgICAgaWQ9ImNsaXAwIj48cmVjdAogICAgICAgICB3aWR0aD0iNjAuNTI2MyIKICAgICAgICAgaGVpZ2h0PSI0NS4zOTQ3IgogICAgICAgICBmaWxsPSJ3aGl0ZSIKICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkuNzM2OCAyNi45NzM2KSIKICAgICAgICAgaWQ9InJlY3QyMSIgLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4K",
  paraId: 2004,
  info,
};

export default {
  ...chainDef,
};
