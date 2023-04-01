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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const api = 'https://cache.rune.game';
// const cache = {
//   getUserMeta: {},
// }
exports.default = (address) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // if (cache.getUserMeta[address]) return cache.getUserMeta[address]
        const response = yield (0, node_fetch_1.default)(`${api}/user/${address}`);
        if (!response.ok) {
            return {};
        }
        const data = yield response.json();
        // cache.getUserMeta[address] = data
        return data;
    }
    catch (error) {
        return {};
    }
});
//# sourceMappingURL=getOldUserMeta.js.map