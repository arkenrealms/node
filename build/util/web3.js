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
exports.getTopicSignatureHex = exports.getSignedRequest = exports.isValidRequest = exports.getAddress = exports.iterateBlocks = exports.getRandomProvider = exports.Web3 = void 0;
const js_md5_1 = __importDefault(require("js-md5"));
const web3_1 = __importDefault(require("web3"));
const hdwallet_provider_1 = __importDefault(require("@truffle/hdwallet-provider"));
const _1 = require(".");
// const fetchPrice = async (id, vs = 'usd') => {
//   const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=${vs}`)
//   return parseFloat((await response.json())[id][vs])
// }
// const fetchPrices = async () => {
// const response = await fetch('https://api.coingecko.com/api/v3/coins/list')
// prices = (await response.json())
// }
exports.Web3 = web3_1.default;
const getRandomProvider = (secret) => {
    return new hdwallet_provider_1.default(secret.mnemonic, process.env.PROVIDER_URI //networks[Math.floor(Math.random() * networks.length)]
    );
};
exports.getRandomProvider = getRandomProvider;
function iterateBlocks(app, name, address, fromBlock, toBlock, event, processLog, updateConfig) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!toBlock)
            return;
        if (fromBlock === toBlock)
            return;
        // event List(address indexed seller, address indexed buyer, uint256 tokenId, uint256 price);
        // event Update(address indexed seller, address indexed buyer, uint256 tokenId, uint256 price);
        // event Delist(address indexed seller, uint256 tokenId);
        // event Buy(address indexed seller, address indexed buyer, uint256 tokenId, uint256 price);
        // event Recover(address indexed user, address indexed seller, uint256 tokenId);
        try {
            const toBlock2 = fromBlock + 5000 < toBlock ? fromBlock + 5000 : toBlock;
            const filter = {
                address,
                fromBlock,
                toBlock: toBlock2,
                topics: event.topics,
            };
            (0, _1.log)(name, 'Iterating block', fromBlock, 'to', toBlock2, 'eventually', toBlock, 'for', event.topics);
            const logs = yield app.ethersProvider.getLogs(filter);
            for (let i = 0; i < logs.length; i++) {
                yield processLog(logs[i], false);
            }
            // await wait(3 * 1000)
            if (updateConfig && toBlock2 > 0) {
                yield updateConfig(toBlock2);
            }
            yield iterateBlocks(app, name, address, toBlock2, toBlock, event, processLog, updateConfig);
        }
        catch (e) {
            (0, _1.logError)('Iterate Blocks Error', e);
            (0, _1.logError)(name, address, fromBlock, toBlock, event);
            // process.exit(1)
        }
    });
}
exports.iterateBlocks = iterateBlocks;
const getAddress = (address) => {
    var _a;
    const mainNetChainId = 56;
    const chainId = typeof window !== 'undefined' && ((_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.hostname) === 'testnet.arken.gg'
        ? 97
        : process.env.REACT_APP_CHAIN_ID;
    return address[chainId] ? address[chainId] : address[mainNetChainId];
};
exports.getAddress = getAddress;
function isValidRequest(web3, req) {
    (0, _1.log)('Verifying', req);
    try {
        const hashedData = (0, js_md5_1.default)(JSON.stringify(req.data));
        return (web3.eth.accounts.recover(req.signature.data, req.signature.hash).toLowerCase() ===
            req.signature.address.toLowerCase() && hashedData === req.signature.data);
    }
    catch (e) {
        (0, _1.logError)(e);
        return false;
    }
}
exports.isValidRequest = isValidRequest;
function getSignedRequest(web3, secret, data) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, _1.log)('Signing', data);
        try {
            const hashedData = (0, js_md5_1.default)(JSON.stringify(data));
            return {
                address: secret.address,
                hash: (yield web3.eth.accounts.sign(hashedData, secret.key)).signature,
                data: hashedData,
            };
        }
        catch (e) {
            (0, _1.logError)(e);
            return null;
        }
    });
}
exports.getSignedRequest = getSignedRequest;
function getTopicSignatureHex(web3, topicSignature) {
    return web3.eth.abi.encodeFunctionSignature(topicSignature);
}
exports.getTopicSignatureHex = getTopicSignatureHex;
//# sourceMappingURL=web3.js.map