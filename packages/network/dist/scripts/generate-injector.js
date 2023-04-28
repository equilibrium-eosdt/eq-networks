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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var promises_1 = __importDefault(require("fs/promises"));
var path_1 = __importDefault(require("path"));
var evm_chain_1 = __importDefault(require("../data/evm-chain"));
var evm_flow_1 = __importDefault(require("../data/evm-flow"));
var evm_smart_contract_call_1 = __importDefault(require("../data/evm-smart-contract-call"));
var evm_smart_contract_1 = __importDefault(require("../data/evm-smart-contract"));
var substrate_chain_1 = __importDefault(require("../data/substrate-chain"));
var token_crosschain_1 = __importDefault(require("../data/token-crosschain"));
var template = function (jsonStr, callbackName) {
    if (callbackName === void 0) { callbackName = "_networkInjectorCallback"; }
    return "// file is auto generated; do not edit\nconst data = ".concat(jsonStr, ";\n\nwindow.").concat(callbackName, " = () => {\n  version: \"v0\",\n  v0: data\n}\n");
};
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var outDir;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                outDir = process.env.OUT_DIT || path_1.default.join(process.cwd());
                console.log({ outDir: outDir });
                return [4 /*yield*/, promises_1.default.writeFile(path_1.default.join(outDir, "injector.js"), template(JSON.stringify({
                        "evm-chain": evm_chain_1.default,
                        "evm-flow": evm_flow_1.default,
                        "evm-smart-contract-call": evm_smart_contract_call_1.default,
                        "evm-smart-contract": evm_smart_contract_1.default,
                        "substrate-chain": substrate_chain_1.default,
                        "token-crosschain": token_crosschain_1.default,
                    })))];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
main().catch(function (e) {
    console.error(e);
    process.exit(-1);
});
