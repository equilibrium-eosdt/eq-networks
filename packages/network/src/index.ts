import { deserialize } from "v8";
import type { TypeVersions, V0Types, V1Types } from "./types";
import { hasKey } from "./util/check";
import { deserializeFunction } from "./util/serialize";
export * from "./types";

interface InjectResponse {
  version: TypeVersions;
  v0?: V0Types.TypeMap;
  v1?: V1Types.TypeMap;
}

export const injectTypes = (url: string, callbackName: string) => {
  let resolve: (v: undefined | InjectResponse) => void;

  const promise = new Promise<undefined | InjectResponse>((r) => {
    resolve = r;
  });

  // @ts-expect-error
  if (!resolve) {
    throw new Error("resolve is undefined");
  }

  if (typeof window === "undefined") {
    resolve(undefined);
    return promise;
  }

  const checkCallback = () => {
    const callback = window[callbackName as any] as unknown as
      | (() => InjectResponse)
      | undefined;

    if (typeof callback === "function") {
      const { version, ...rest } = callback();

      resolve({
        version,
        [version]: rest[version],
        /** @deprecated experimental API */
        v1: JSON.parse(JSON.stringify(rest.v1), (_, v) => {
          if (hasKey("func$", v) && typeof v.func$ === "string") {
            const { func$ } = v;
            // fixme types
            return deserializeFunction({ func$ });
          }

          return v;
        }),
      });
      return true;
    }

    return false;
  };

  if (checkCallback()) {
    return promise;
  }

  const interval = setInterval(() => {
    if (checkCallback()) {
      clearInterval(interval);
    }
  }, 100);

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.src = url;
  document.body.appendChild(script);

  return promise;
};
