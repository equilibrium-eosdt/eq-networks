import type { TypeVersions, V0Types } from "./types";
export * from "./types";
interface InjectResponse {
    version: TypeVersions;
    v0?: V0Types.TypeMap;
}
export declare const injectTypes: (url: string, callbackName: string) => Promise<InjectResponse | undefined>;
