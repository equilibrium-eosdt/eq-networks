import type { TypeVersions, V0Types } from "./types";
export * from "./types";

interface InjectResponse {
  version: TypeVersions;
  v0?: V0Types.TypeMap;
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
      resolve(callback());
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
  script.async = true;
  script.src = url;
  document.body.appendChild(script);

  return promise;
};
