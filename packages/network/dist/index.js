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
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectTypes = void 0;
__exportStar(require("./types"), exports);
var injectTypes = function (url, callbackName) {
    var resolve;
    var promise = new Promise(function (r) {
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
    var checkCallback = function () {
        var callback = window[callbackName];
        if (typeof callback === "function") {
            resolve(callback());
            return true;
        }
        return false;
    };
    if (checkCallback()) {
        return promise;
    }
    var interval = setInterval(function () {
        if (checkCallback()) {
            clearInterval(interval);
        }
    }, 100);
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = url;
    document.body.appendChild(script);
    return promise;
};
exports.injectTypes = injectTypes;
