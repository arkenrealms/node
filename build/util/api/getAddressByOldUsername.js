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
const profileApi = 'https://api.arken.gg';
const cache = {
    getUserAddressByUsername: {},
    getUsername: {},
};
exports.default = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (cache.getUserAddressByUsername[name])
            return cache.getUserAddressByUsername[name];
        const response = yield (0, node_fetch_1.default)(`${profileApi}/users/${name}`).catch(() => { });
        if (!response || !response.ok) {
            return '';
        }
        // @ts-ignore
        const username = yield response.text();
        cache.getUserAddressByUsername[name] = username;
        return username;
    }
    catch (error) {
        return '';
    }
});
//# sourceMappingURL=getAddressByOldUsername.js.map