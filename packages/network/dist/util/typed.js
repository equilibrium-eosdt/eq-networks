"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntries = void 0;
const getEntries = (obj) => {
    return Object.entries(obj !== null && obj !== void 0 ? obj : {});
};
exports.getEntries = getEntries;
