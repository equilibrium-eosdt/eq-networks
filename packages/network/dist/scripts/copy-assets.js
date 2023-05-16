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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var promises_1 = __importDefault(require("fs/promises"));
var path_1 = __importDefault(require("path"));
var ASSETS_PATH = path_1.default.join(process.cwd(), "assets");
var SUPPORTED_EXTENSIONS = [".svg"];
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var outDir, _a, _b, _c, namespace, namespacePath, _loop_1, _d, _e, _f, e_1_1, e_2_1;
    var _g, e_2, _h, _j, _k, e_1, _l, _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0:
                outDir = process.env.OUT_DIR || path_1.default.join(process.cwd(), "..", "..", "docs");
                _o.label = 1;
            case 1:
                _o.trys.push([1, 24, 25, 30]);
                _a = true;
                return [4 /*yield*/, promises_1.default.readdir(ASSETS_PATH)];
            case 2:
                _b = __asyncValues.apply(void 0, [_o.sent()]);
                _o.label = 3;
            case 3: return [4 /*yield*/, _b.next()];
            case 4:
                if (!(_c = _o.sent(), _g = _c.done, !_g)) return [3 /*break*/, 23];
                _j = _c.value;
                _a = false;
                _o.label = 5;
            case 5:
                _o.trys.push([5, , 21, 22]);
                namespace = _j;
                namespacePath = path_1.default.join(ASSETS_PATH, namespace);
                return [4 /*yield*/, promises_1.default.stat(namespacePath)];
            case 6:
                if (!(_o.sent()).isDirectory()) {
                    // TODO name check
                    return [3 /*break*/, 22];
                }
                _o.label = 7;
            case 7:
                _o.trys.push([7, 14, 15, 20]);
                _loop_1 = function () {
                    var file, filePath, destDir, _p, destPath;
                    return __generator(this, function (_q) {
                        switch (_q.label) {
                            case 0:
                                _m = _f.value;
                                _d = false;
                                _q.label = 1;
                            case 1:
                                _q.trys.push([1, , 9, 10]);
                                file = _m;
                                filePath = path_1.default.join(namespacePath, file);
                                if (!SUPPORTED_EXTENSIONS.some(function (ext) {
                                    var _a = file.split("."), fileExt = _a[1];
                                    return ext.toLowerCase() === ".".concat(fileExt.toLowerCase());
                                })) {
                                    return [2 /*return*/, "continue"];
                                }
                                return [4 /*yield*/, promises_1.default.stat(filePath)];
                            case 2:
                                if ((_q.sent()).isDirectory()) {
                                    return [2 /*return*/, "continue"];
                                }
                                destDir = path_1.default.join(outDir, namespace);
                                _q.label = 3;
                            case 3:
                                _q.trys.push([3, 5, , 7]);
                                return [4 /*yield*/, promises_1.default.access(destDir)];
                            case 4:
                                _q.sent();
                                console.log("Found ".concat(destDir));
                                return [3 /*break*/, 7];
                            case 5:
                                _p = _q.sent();
                                return [4 /*yield*/, promises_1.default.mkdir(destDir)];
                            case 6:
                                _q.sent();
                                console.log("Created ".concat(destDir));
                                return [3 /*break*/, 7];
                            case 7:
                                destPath = path_1.default.join(outDir, namespace, file);
                                return [4 /*yield*/, promises_1.default.copyFile(filePath, destPath)];
                            case 8:
                                _q.sent();
                                console.log("Copied ".concat(filePath, " to ").concat(destPath));
                                return [3 /*break*/, 10];
                            case 9:
                                _d = true;
                                return [7 /*endfinally*/];
                            case 10: return [2 /*return*/];
                        }
                    });
                };
                _d = true;
                e_1 = void 0;
                return [4 /*yield*/, promises_1.default.readdir(namespacePath)];
            case 8:
                _e = (__asyncValues.apply(void 0, [_o.sent()]));
                _o.label = 9;
            case 9: return [4 /*yield*/, _e.next()];
            case 10:
                if (!(_f = _o.sent(), _k = _f.done, !_k)) return [3 /*break*/, 13];
                return [5 /*yield**/, _loop_1()];
            case 11:
                _o.sent();
                _o.label = 12;
            case 12: return [3 /*break*/, 9];
            case 13: return [3 /*break*/, 20];
            case 14:
                e_1_1 = _o.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 20];
            case 15:
                _o.trys.push([15, , 18, 19]);
                if (!(!_d && !_k && (_l = _e.return))) return [3 /*break*/, 17];
                return [4 /*yield*/, _l.call(_e)];
            case 16:
                _o.sent();
                _o.label = 17;
            case 17: return [3 /*break*/, 19];
            case 18:
                if (e_1) throw e_1.error;
                return [7 /*endfinally*/];
            case 19: return [7 /*endfinally*/];
            case 20: return [3 /*break*/, 22];
            case 21:
                _a = true;
                return [7 /*endfinally*/];
            case 22: return [3 /*break*/, 3];
            case 23: return [3 /*break*/, 30];
            case 24:
                e_2_1 = _o.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 30];
            case 25:
                _o.trys.push([25, , 28, 29]);
                if (!(!_a && !_g && (_h = _b.return))) return [3 /*break*/, 27];
                return [4 /*yield*/, _h.call(_b)];
            case 26:
                _o.sent();
                _o.label = 27;
            case 27: return [3 /*break*/, 29];
            case 28:
                if (e_2) throw e_2.error;
                return [7 /*endfinally*/];
            case 29: return [7 /*endfinally*/];
            case 30: return [2 /*return*/];
        }
    });
}); };
main().catch(function (e) {
    console.error(e, e.stack);
    process.exit(-1);
});
