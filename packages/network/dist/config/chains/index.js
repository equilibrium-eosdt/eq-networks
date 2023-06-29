"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const genshiro_1 = __importDefault(require("./genshiro"));
const statemint_1 = __importDefault(require("./statemint"));
exports.default = {
    genshiro: genshiro_1.default,
    statemint: statemint_1.default,
};
