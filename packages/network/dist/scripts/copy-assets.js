"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const ASSETS_PATH = path_1.default.join(process.cwd(), "assets");
const SUPPORTED_EXTENSIONS = [".svg"];
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, e_1, _b, _c, _d, e_2, _e, _f;
    const outDir = process.env.OUT_DIR || path_1.default.join(process.cwd(), "..", "..", "docs");
    try {
        for (var _g = true, _h = __asyncValues(yield promises_1.default.readdir(ASSETS_PATH)), _j; _j = yield _h.next(), _a = _j.done, !_a;) {
            _c = _j.value;
            _g = false;
            try {
                const namespace = _c;
                const namespacePath = path_1.default.join(ASSETS_PATH, namespace);
                if (!(yield promises_1.default.stat(namespacePath)).isDirectory()) {
                    // TODO name check
                    continue;
                }
                try {
                    for (var _k = true, _l = (e_2 = void 0, __asyncValues(yield promises_1.default.readdir(namespacePath))), _m; _m = yield _l.next(), _d = _m.done, !_d;) {
                        _f = _m.value;
                        _k = false;
                        try {
                            const file = _f;
                            const filePath = path_1.default.join(namespacePath, file);
                            if (!SUPPORTED_EXTENSIONS.some((ext) => {
                                const [, fileExt] = file.split(".");
                                return ext.toLowerCase() === `.${fileExt.toLowerCase()}`;
                            })) {
                                continue;
                            }
                            if ((yield promises_1.default.stat(filePath)).isDirectory()) {
                                continue;
                            }
                            const destDir = path_1.default.join(outDir, namespace);
                            try {
                                yield promises_1.default.access(destDir);
                                console.log(`Found ${destDir}`);
                            }
                            catch (_o) {
                                yield promises_1.default.mkdir(destDir);
                                console.log(`Created ${destDir}`);
                            }
                            const destPath = path_1.default.join(outDir, namespace, file);
                            yield promises_1.default.copyFile(filePath, destPath);
                            console.log(`Copied ${filePath} to ${destPath}`);
                        }
                        finally {
                            _k = true;
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (!_k && !_d && (_e = _l.return)) yield _e.call(_l);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            finally {
                _g = true;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (!_g && !_a && (_b = _h.return)) yield _b.call(_h);
        }
        finally { if (e_1) throw e_1.error; }
    }
});
main().catch((e) => {
    console.error(e, e.stack);
    process.exit(-1);
});
