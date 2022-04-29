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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = exports.getAddress = exports.shuffleArray = exports.randomPosition = exports.sha256 = exports.isNumeric = exports.decodePayload = exports.binaryAgent = exports.convertToDecimal = exports.getTime = exports.commarise = exports.ordinalise = exports.average = exports.getHighestId = exports.groupBy = exports.groupBySub = exports.updateGit = exports.toShort = exports.toLong = exports.removeDupes = exports.pad = exports.round = exports.wait = exports.nowReadable = exports.log = exports.logError = exports.isDebug = void 0;
var crypto_1 = __importDefault(require("crypto"));
var child_process_1 = require("child_process");
var fs_jetpack_1 = __importDefault(require("fs-jetpack"));
var ethers = __importStar(require("ethers"));
var util_1 = __importDefault(require("util"));
var db_1 = __importDefault(require("./db"));
var time_1 = __importDefault(require("./time"));
var path = require('path');
var writeLogs = false;
var logPrefix = process.env.LOG_PREFIX || '[APP]';
exports.isDebug = process.env.HOME === '/Users/dev' || process.env.HOME === '/home/dev' || process.env.HOME === '/root' || process.env.LOG === '1';
function logError() {
    var msgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        msgs[_i] = arguments[_i];
    }
    console.log.apply(console, __spreadArray([logPrefix, nowReadable()], msgs, false));
    var errorLog = fs_jetpack_1.default.read(path.resolve('./public/data/errors.json'), 'json') || [];
    for (var _a = 0, msgs_1 = msgs; _a < msgs_1.length; _a++) {
        var msg = msgs_1[_a];
        errorLog.push(JSON.stringify(msg));
    }
    if (writeLogs) {
        fs_jetpack_1.default.write(path.resolve('./public/data/errors.json'), JSON.stringify(errorLog, null, 2), { atomic: true });
    }
    throw new Error(errorLog.join('; '));
}
exports.logError = logError;
function log() {
    var msgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        msgs[_i] = arguments[_i];
    }
    if (exports.isDebug) {
        console.log.apply(console, __spreadArray([logPrefix, nowReadable()], msgs, false));
    }
    if (writeLogs) {
        var logData = fs_jetpack_1.default.read(path.resolve('../public/data/log.json'), 'json') || [];
        for (var _a = 0, msgs_2 = msgs; _a < msgs_2.length; _a++) {
            var msg = msgs_2[_a];
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
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
exports.wait = wait;
function round(num, precision) {
    var _precision = Math.pow(10, precision);
    return Math.ceil(num * _precision) / _precision;
}
exports.round = round;
function pad(n, num) {
    return n < num ? '0' + n : n;
}
exports.pad = pad;
function removeDupes(list) {
    var seen = {};
    return list.filter(function (item) {
        var k1 = item.seller + item.tokenId + item.blockNumber;
        var k2 = item.id;
        var exists = seen.hasOwnProperty(k1) || seen.hasOwnProperty(k2);
        if (!exists) {
            seen[k1] = true;
            seen[k2] = true;
        }
        return !exists;
    });
}
exports.removeDupes = removeDupes;
var toLong = function (x) { return ethers.utils.parseEther(x + ''); };
exports.toLong = toLong;
var toShort = function (x) { return round(parseFloat(ethers.utils.formatEther(x)), 4); };
exports.toShort = toShort;
var updatingGit = false;
function updateGit() {
    return __awaiter(this, void 0, void 0, function () {
        var execPromise, e2_1, _a, stdout, stderr, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (updatingGit)
                        return [2 /*return*/];
                    updatingGit = true;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 8, , 9]);
                    execPromise = util_1.default.promisify(child_process_1.exec);
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, execPromise('rm ./db/.git/index.lock')];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 5];
                case 4:
                    e2_1 = _b.sent();
                    return [3 /*break*/, 5];
                case 5: return [4 /*yield*/, execPromise('cd db && git add -A && git commit -m "build: Binzy doz it" && git push --set-upstream origin master')];
                case 6:
                    _a = _b.sent(), stdout = _a.stdout, stderr = _a.stderr;
                    console.log(stderr, stdout);
                    return [4 /*yield*/, wait(100)];
                case 7:
                    _b.sent();
                    return [3 /*break*/, 9];
                case 8:
                    e_1 = _b.sent();
                    console.log(e_1);
                    return [3 /*break*/, 9];
                case 9:
                    updatingGit = false;
                    return [2 /*return*/];
            }
        });
    });
}
exports.updateGit = updateGit;
function groupBySub(xs, key, subkey) {
    return xs.reduce(function (rv, x) {
        if (!x[key][subkey])
            return rv;
        (rv[x[key][subkey]] = rv[x[key][subkey]] || []).push(x);
        return rv;
    }, {}) || null;
}
exports.groupBySub = groupBySub;
function groupBy(xs, key) {
    return xs.reduce(function (rv, x) {
        if (!x[key])
            return rv;
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {}) || null;
}
exports.groupBy = groupBy;
function getHighestId(arr) {
    var highest = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (item.id > highest) {
            highest = item.id;
        }
    }
    return highest;
}
exports.getHighestId = getHighestId;
function average(arr) { return arr.reduce(function (p, c) { return p + c; }, 0) / arr.length; }
exports.average = average;
function ordinalise(n) { return n + (n % 10 == 1 && n % 100 != 11 ? 'st' : n % 10 == 2 && n % 100 != 12 ? 'nd' : n % 10 == 3 && n % 100 != 13 ? 'rd' : 'th'); }
exports.ordinalise = ordinalise;
function commarise(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }
exports.commarise = commarise;
function getTime() {
    return new Date().getTime();
}
exports.getTime = getTime;
function convertToDecimal(byte) {
    var result = 0;
    byte = byte.split('');
    byte.reverse();
    for (var a = 0; a < byte.length; a++) {
        if (byte[a] === '1') {
            result += Math.pow(2, a);
        }
    }
    return result;
}
exports.convertToDecimal = convertToDecimal;
function binaryAgent(str) {
    var bytes = str.split(' ');
    var output = '';
    for (var k = 0; k < bytes.length; k++) {
        if (bytes[k])
            output += String.fromCharCode(convertToDecimal(bytes[k]));
    }
    return output;
}
exports.binaryAgent = binaryAgent;
function decodePayload(msg) {
    // @ts-ignore
    var json = binaryAgent(msg); //String.fromCharCode.apply(null, new Uint8Array(msg));
    try {
        // explicitly decode the String as UTF-8 for Unicode
        //   https://github.com/mathiasbynens/utf8.js
        // json = utf8.decode(json)
        // const buffer = Buffer.from(json, "binary");
        var data = JSON.parse(json);
        return data;
    }
    catch (err) {
        // ...
        console.log(err);
    }
}
exports.decodePayload = decodePayload;
function isNumeric(str) {
    if (typeof str != "string")
        return false; // we only process strings!  
    // @ts-ignore
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)); // ...and ensure strings of whitespace fail
}
exports.isNumeric = isNumeric;
function sha256(str) {
    return crypto_1.default.createHash("sha256").update(str, "utf8").digest("base64");
}
exports.sha256 = sha256;
function randomPosition(min, max) {
    return Math.random() * (max - min) + min;
}
exports.randomPosition = randomPosition;
function shuffleArray(array) {
    var _a;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
    }
    return array;
}
exports.shuffleArray = shuffleArray;
var getAddress = function (address) {
    var mainNetChainId = 56;
    var chainId = process.env.CHAIN_ID;
    return address[chainId] ? address[chainId] : address[mainNetChainId];
};
exports.getAddress = getAddress;
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.random = random;
exports.default = {
    db: db_1.default,
    time: time_1.default
};
