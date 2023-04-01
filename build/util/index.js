"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.random = exports.getAddress = exports.shuffleArray = exports.randomPosition = exports.sha256 = exports.isNumeric = exports.decodePayload = exports.binaryAgent = exports.convertToDecimal = exports.getTime = exports.commarise = exports.ordinalise = exports.average = exports.getHighestId = exports.groupBy = exports.groupBySub = exports.updateGit = exports.toShort = exports.toLong = exports.removeDupes = exports.pad = exports.round = exports.wait = exports.nowReadable = exports.log = exports.logError = exports.isDebug = void 0;
const crypto_1 = __importDefault(require("crypto"));
const child_process_1 = require("child_process");
const fs_jetpack_1 = __importDefault(require("fs-jetpack"));
const ethers = __importStar(require("ethers"));
const util_1 = __importDefault(require("util"));
const db_1 = __importDefault(require("./db"));
const time_1 = __importDefault(require("./time"));
const path = require('path');
const writeLogs = false;
const logPrefix = process.env.LOG_PREFIX || '[APP]';
exports.isDebug = process.env.HOME === '/Users/dev' ||
    process.env.HOME === '/home/dev' ||
    process.env.HOME === '/root' ||
    process.env.LOG === '1';
function logError(...msgs) {
    console.log(logPrefix, nowReadable(), ...msgs);
    const errorLog = fs_jetpack_1.default.read(path.resolve('./public/data/errors.json'), 'json') || [];
    for (const msg of msgs) {
        errorLog.push(JSON.stringify(msg));
    }
    if (writeLogs) {
        fs_jetpack_1.default.write(path.resolve('./public/data/errors.json'), JSON.stringify(errorLog, null, 2), { atomic: true });
    }
    throw new Error(errorLog.join('; '));
}
exports.logError = logError;
function log(...msgs) {
    if (exports.isDebug) {
        console.log(logPrefix, nowReadable(), ...msgs);
    }
    if (writeLogs) {
        const logData = fs_jetpack_1.default.read(path.resolve('../public/data/log.json'), 'json') || [];
        for (const msg of msgs) {
            logData.push(JSON.stringify(msg));
        }
        fs_jetpack_1.default.write(path.resolve('./public/data/log.json'), JSON.stringify(logData, null, 2));
    }
}
exports.log = log;
function nowReadable() {
    return new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
}
exports.nowReadable = nowReadable;
function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
exports.wait = wait;
function round(num, precision) {
    const _precision = Math.pow(10, precision);
    return Math.ceil(num * _precision) / _precision;
}
exports.round = round;
function pad(n, width, z = '0') {
    const nn = n + '';
    return nn.length >= width ? nn : new Array(width - nn.length + 1).join(z) + nn;
}
exports.pad = pad;
function removeDupes(list) {
    const seen = {};
    return list.filter(function (item) {
        const k1 = item.seller + item.tokenId + item.blockNumber;
        const k2 = item.id;
        const exists = seen.hasOwnProperty(k1) || seen.hasOwnProperty(k2);
        if (!exists) {
            seen[k1] = true;
            seen[k2] = true;
        }
        return !exists;
    });
}
exports.removeDupes = removeDupes;
const toLong = (x) => ethers.utils.parseEther(x + '');
exports.toLong = toLong;
const toShort = (x) => round(parseFloat(ethers.utils.formatEther(x)), 4);
exports.toShort = toShort;
let updatingGit = false;
function updateGit() {
    return __awaiter(this, void 0, void 0, function* () {
        if (updatingGit)
            return;
        updatingGit = true;
        try {
            const execPromise = util_1.default.promisify(child_process_1.exec);
            try {
                yield execPromise('rm ./db/.git/index.lock');
            }
            catch (e2) { }
            const { stdout, stderr } = yield execPromise('cd db && git add -A && git commit -m "build: Binzy doz it" && git push --set-upstream origin master');
            console.log(stderr, stdout);
            yield wait(100);
        }
        catch (e) {
            console.log(e);
        }
        updatingGit = false;
    });
}
exports.updateGit = updateGit;
function groupBySub(xs, key, subkey) {
    return (xs.reduce(function (rv, x) {
        if (!x[key][subkey])
            return rv;
        (rv[x[key][subkey]] = rv[x[key][subkey]] || []).push(x);
        return rv;
    }, {}) || null);
}
exports.groupBySub = groupBySub;
function groupBy(xs, key) {
    return (xs.reduce(function (rv, x) {
        if (!x[key])
            return rv;
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {}) || null);
}
exports.groupBy = groupBy;
function getHighestId(arr) {
    let highest = 0;
    for (const item of arr) {
        if (item.id > highest) {
            highest = item.id;
        }
    }
    return highest;
}
exports.getHighestId = getHighestId;
function average(arr) {
    return arr.reduce((p, c) => p + c, 0) / arr.length;
}
exports.average = average;
function ordinalise(n) {
    return (n +
        (n % 10 == 1 && n % 100 != 11
            ? 'st'
            : n % 10 == 2 && n % 100 != 12
                ? 'nd'
                : n % 10 == 3 && n % 100 != 13
                    ? 'rd'
                    : 'th'));
}
exports.ordinalise = ordinalise;
function commarise(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
exports.commarise = commarise;
function getTime() {
    return new Date().getTime();
}
exports.getTime = getTime;
function convertToDecimal(byte) {
    let result = 0;
    byte = byte.split('');
    byte.reverse();
    for (let a = 0; a < byte.length; a++) {
        if (byte[a] === '1') {
            result += Math.pow(2, a);
        }
    }
    return result;
}
exports.convertToDecimal = convertToDecimal;
function binaryAgent(str) {
    let bytes = str.split(' ');
    let output = '';
    for (let k = 0; k < bytes.length; k++) {
        if (bytes[k])
            output += String.fromCharCode(convertToDecimal(bytes[k]));
    }
    return output;
}
exports.binaryAgent = binaryAgent;
function decodePayload(msg) {
    // @ts-ignore
    let json = binaryAgent(msg); //String.fromCharCode.apply(null, new Uint8Array(msg));
    try {
        // explicitly decode the String as UTF-8 for Unicode
        //   https://github.com/mathiasbynens/utf8.js
        // json = utf8.decode(json)
        // const buffer = Buffer.from(json, "binary");
        const data = JSON.parse(json);
        return data;
    }
    catch (err) {
        // ...
        console.log(err);
    }
}
exports.decodePayload = decodePayload;
function isNumeric(str) {
    if (typeof str != 'string')
        return false; // we only process strings!
    return (
    // @ts-ignore
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str))); // ...and ensure strings of whitespace fail
}
exports.isNumeric = isNumeric;
function sha256(str) {
    return crypto_1.default.createHash('sha256').update(str, 'utf8').digest('base64');
}
exports.sha256 = sha256;
function randomPosition(min, max) {
    return Math.random() * (max - min) + min;
}
exports.randomPosition = randomPosition;
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
exports.shuffleArray = shuffleArray;
const getAddress = (address) => {
    var _a;
    const mainNetChainId = 56;
    const chainId = ((_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.hostname) === 'testnet.rune.game' ? 97 : process.env.REACT_APP_CHAIN_ID;
    return address[chainId] ? address[chainId] : address[mainNetChainId];
};
exports.getAddress = getAddress;
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.random = random;
exports.default = {
    db: db_1.default,
    time: time_1.default,
};
//# sourceMappingURL=index.js.map