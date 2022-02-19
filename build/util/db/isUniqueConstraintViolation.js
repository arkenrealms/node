"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isPostgresError_1 = __importDefault(require("./isPostgresError"));
exports.default = (function (error) { return (0, isPostgresError_1.default)(error) && error.code === '23505'; });
