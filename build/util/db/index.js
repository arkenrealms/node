"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isPostgresError_1 = __importDefault(require("./isPostgresError"));
var isUniqueConstraintViolation_1 = __importDefault(require("./isUniqueConstraintViolation"));
exports.default = {
    isPostgresError: isPostgresError_1.default,
    isUniqueConstraintViolation: isUniqueConstraintViolation_1.default
};
