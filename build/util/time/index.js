"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTimezoneOffset = exports.fancyTimeFormat = exports.now = exports.date = void 0;
var date_1 = __importDefault(require("./date"));
var now_1 = __importDefault(require("./now"));
var fancyTimeFormat_1 = __importDefault(require("./fancyTimeFormat"));
exports.date = date_1.default;
exports.now = now_1.default;
exports.fancyTimeFormat = fancyTimeFormat_1.default;
function removeTimezoneOffset(date) { var userTimezoneOffset = date.getTimezoneOffset() * 60000; if (userTimezoneOffset >= 0) {
    return new Date(date.getTime() - userTimezoneOffset);
} return new Date(date.getTime() + userTimezoneOffset); }
exports.removeTimezoneOffset = removeTimezoneOffset;
exports.default = {
    date: exports.date,
    now: exports.now,
    fancyTimeFormat: exports.fancyTimeFormat,
    removeTimezoneOffset: removeTimezoneOffset
};
