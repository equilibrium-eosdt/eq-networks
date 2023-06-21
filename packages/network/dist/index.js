"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectTypes = void 0;
const check_1 = require("./util/check");
const serialize_1 = require("./util/serialize");
__exportStar(require("./types"), exports);
const injectTypes = (url, callbackName) => {
    let resolve;
    const promise = new Promise((r) => {
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
        const callback = window[callbackName];
        if (typeof callback === "function") {
            const _a = callback(), { version } = _a, rest = __rest(_a, ["version"]);
            resolve({
                version,
                [version]: rest[version],
                /** @deprecated experimental API */
                v1: JSON.parse(JSON.stringify(rest.v1), (_, v) => {
                    if ((0, check_1.hasKey)("func$", v) && typeof v.func$ === "string") {
                        const { func$ } = v;
                        // fixme types
                        return (0, serialize_1.deserializeFunction)({ func$ });
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
exports.injectTypes = injectTypes;
