"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
exports.getTokenIdFromItem = exports.normalizeItem = exports.getItemFromTokenId = exports.decodeItem = exports.setTokenCache = exports.getTokenCache = exports.clearDatabase = void 0;
var lokijs_1 = __importDefault(require("lokijs"));
var incremental_indexeddb_adapter_1 = __importDefault(require("lokijs/src/incremental-indexeddb-adapter"));
var items_1 = require("../data/items");
var items_type_1 = require("../data/items.type");
var probabilityCache_1 = __importDefault(require("../data/probabilityCache"));
var math_1 = require("./math");
var useLocalStorage = false;
var useIndexedDb = false;
var useLoki = true;
var tokenCache = {};
var dbCon = new lokijs_1.default('rune.db', {
    adapter: typeof window !== 'undefined' ? new incremental_indexeddb_adapter_1.default() : new (require('lokijs/src/loki-fs-structured-adapter'))(),
    autoload: true,
    autoloadCallback: databaseInitialize,
    autosave: true,
    autosaveInterval: 4000
});
var db = {
    config: undefined,
    items: undefined
};
function databaseInitialize() {
    var _a, _b, _c, _d;
    db.config = dbCon.getCollection('config');
    db.items = dbCon.getCollection('items');
    if (dbCon.getCollection('items')) {
        dbCon.getCollection('items').chain().remove();
    }
    var cacheBreaker = 1663585883 * 1000;
    var updatedAt = (_d = (_c = (_b = (_a = db.items) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.meta) === null || _d === void 0 ? void 0 : _d.created;
    if (!updatedAt || updatedAt < cacheBreaker) {
        if (dbCon.getCollection('items')) {
            dbCon.getCollection('items').chain().remove();
        }
    }
    if (db.config === null) {
        db.config = dbCon.addCollection('config', {
            // clone: true,
            unique: 'key'
        });
        db.config.insert({
            key: 'updatedAt',
            value: cacheBreaker
        });
    }
    db.config.find({
        key: 'updatedAt'
    }).value = cacheBreaker;
    if (db.items === null) {
        // Add a collection to the database
        db.items = dbCon.addCollection('items', {
            // clone: true,
            unique: 'tokenId'
        });
    }
}
function clearDatabase() {
    if (dbCon.getCollection('config')) {
        dbCon.getCollection('config').chain().remove();
    }
    if (dbCon.getCollection('items')) {
        dbCon.getCollection('items').chain().remove();
    }
}
exports.clearDatabase = clearDatabase;
function getTokenCache() {
    // if (useLoki) {
    //   var db = new loki('rune.db')
    //   // Add a collection to the database
    //   var items = db.addCollection('items')
    // }
    // if (useIndexedDb) {
    //   // This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
    //   // @ts-ignore
    //   var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
    //   // Open (or create) the database
    //   var open = indexedDB.open("RuneItems", 1);
    //   // Create the schema
    //   open.onupgradeneeded = function() {
    //     var db = open.result;
    //     var store = db.createObjectStore("TokenData", {keyPath: "tokenId"});
    //     // var index = store.createIndex("NameIndex", ["name.last", "name.first"]);
    //   };
    //   open.onsuccess = function() {
    //     // Start a new transaction
    //     var db = open.result;
    //     var tx = db.transaction("TokenData", "readwrite");
    //     var store = tx.objectStore("TokenData");
    //     var index = store.index("NameIndex");
    //     // Query the data
    //     var getJohn = store.get(12345);
    //     // var getBob = index.get(["Smith", "Bob"]);
    //     getJohn.onsuccess = function() {
    //         console.log(getJohn.result.name.first);  // => "John"
    //     };
    //     // Close the db when the transaction is done
    //     tx.oncomplete = function() {
    //         db.close();
    //     };
    //   }
    // }
    return tokenCache;
}
exports.getTokenCache = getTokenCache;
function setTokenCache(_tokenCache) {
    tokenCache = tokenCache;
    // if (useLoki) {
    //   const db = new loki('rune.db')
    //   // Add a collection to the database
    //   const items = db.addCollection('items')
    // }
    // if (useIndexedDb) {
    //   // This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
    //   // @ts-ignore
    //   var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
    //   // Open (or create) the database
    //   var open = indexedDB.open("RuneItems", 1);
    //   // Create the schema
    //   open.onupgradeneeded = function() {
    //     var db = open.result;
    //     var store = db.createObjectStore("TokenData", {keyPath: "tokenId"});
    //     // var index = store.createIndex("NameIndex", ["name.last", "name.first"]);
    //   };
    //   open.onsuccess = function() {
    //     // Start a new transaction
    //     var db = open.result;
    //     var tx = db.transaction("TokenData", "readwrite");
    //     var store = tx.objectStore("TokenData");
    //     var index = store.index("NameIndex");
    //     // Add some data
    //     for (const item of _tokenCache) {
    //       store.put(item);
    //     }
    //     // Close the db when the transaction is done
    //     tx.oncomplete = function() {
    //         db.close();
    //     };
    //   }
    // }
}
exports.setTokenCache = setTokenCache;
function getItemTokenCache(tokenId) {
    var _a;
    try {
        console.log(9999, tokenCache[tokenId]);
        if (tokenCache[tokenId])
            return tokenCache[tokenId];
        if (useLoki) {
            var result = (_a = db.items) === null || _a === void 0 ? void 0 : _a.findOne({ 'tokenId': tokenId });
            if (result) {
                // console.log('Token found in cache', result)
                return result;
            }
            else {
                // console.log('Token NOT found in cache', tokenId)
            }
        }
        if (useLocalStorage && window.localStorage) {
            var tokenCacheText = window.localStorage.getItem("zzz_tokenCache_".concat(tokenId));
            if (tokenCacheText) {
                var tokenCacheItem = JSON.parse(tokenCacheText);
                var now = new Date();
                if (now.getTime() > tokenCacheItem.expiry) {
                    window.localStorage.removeItem("zzz_tokenCache_".concat(tokenId));
                    return;
                }
                tokenCache[tokenId] = tokenCacheItem.value;
                console.log(99999999, tokenCacheItem.value);
                return tokenCacheItem.value;
            }
        }
    }
    catch (e) {
        console.log(e, tokenId);
    }
}
function setItemTokenCache(item) {
    var _a, _b, _c, _d;
    try {
        tokenCache[item.tokenId] = item;
        if (useLoki) {
            // Find and update an existing document
            var result = (_a = db.items) === null || _a === void 0 ? void 0 : _a.findOne({ 'tokenId': item.tokenId });
            if (result) {
                for (var _i = 0, _e = Object.keys(item); _i < _e.length; _i++) {
                    var key = _e[_i];
                    result[key] = item[key];
                }
                // console.log('Updating item', item)
                (_b = db.items) === null || _b === void 0 ? void 0 : _b.update(result);
            }
            else {
                try {
                    // console.log('Inserting item', item)
                    (_c = db.items) === null || _c === void 0 ? void 0 : _c.insert(item);
                }
                catch (e) {
                    (_d = db.items) === null || _d === void 0 ? void 0 : _d.update(item);
                }
            }
            // db.saveDatabase()
        }
        if (useLocalStorage && window.localStorage) {
            var ttl = 3 * 24 * 60 * 60 * 1000;
            localStorage.setItem("zzz_tokenCache_".concat(item.tokenId), JSON.stringify({
                expiry: (new Date()).getTime() + ttl,
                value: item
            }));
        }
    }
    catch (e) {
        console.log(e, item);
    }
}
function decodeItem(tokenId) {
    var tokenCacheItem = getItemTokenCache(tokenId);
    if (tokenId && tokenCacheItem)
        return tokenCacheItem;
    return normalizeItem(getItemFromTokenId(tokenId));
}
exports.decodeItem = decodeItem;
function getItemFromTokenId(tokenId) {
    var tokenCacheItem = getItemTokenCache(tokenId);
    if (tokenId && tokenCacheItem)
        return tokenCacheItem;
    var defaultItem = {
        tokenId: tokenId,
        details: {},
        branches: {},
        shorthand: [],
        mods: [],
        attributes: [],
        perfection: null,
        category: items_type_1.ItemsMainCategoriesType.WEAPONS,
        slots: [],
        meta: {
            harvestYield: 0,
            harvestFeeToken: '',
            harvestFeePercent: 0,
            harvestFees: {},
            chanceToSendHarvestToHiddenPool: 0,
            chanceToLoseHarvest: 0,
            harvestBurn: 0,
            attributes: {}
        },
    };
    if (!tokenId || parseInt(tokenId) === 0 || Number.isNaN(parseInt(tokenId)))
        return defaultItem;
    try {
        var version = parseInt(tokenId.slice(1, 4));
        var id_1 = parseInt(tokenId.slice(4, 9));
        var type = 0;
        var modStart = 9;
        if (version === 1) {
            modStart = 9;
        }
        else {
            type = parseInt(tokenId.slice(9, 11));
            modStart = 11;
        }
        var mods = [];
        var modIndex = modStart;
        while (modIndex < tokenId.length) {
            var variant = parseInt(tokenId.slice(modIndex, modIndex + 1));
            if (variant === 2) {
                var attributeId = parseInt(tokenId.slice(modIndex + 1, modIndex + 4));
                var value = parseInt(tokenId.slice(modIndex + 4, modIndex + 7));
                if (Number.isNaN(value))
                    break;
                mods.push({
                    variant: variant,
                    attributeId: attributeId,
                    value: value,
                });
                modIndex += 7;
            }
            else {
                var value = parseInt(tokenId.slice(modIndex + 1, modIndex + 4));
                if (Number.isNaN(value))
                    break;
                mods.push({
                    variant: variant,
                    value: value,
                });
                modIndex += 4;
            }
        }
        var item = __assign(__assign(__assign(__assign({}, defaultItem), { id: id_1 }), JSON.parse(JSON.stringify(items_1.itemData[items_type_1.ItemsMainCategoriesType.OTHER].find(function (i) { return i.id === id_1; })))), { type: type, version: version, mods: mods, tokenId: tokenId, shortTokenId: "".concat(tokenId.slice(0, 23), "...").concat(tokenId.slice(-3)) });
        return item;
    }
    catch (e) {
        // console.log('Token is invalid', tokenId)
        console.log(e);
    }
    return defaultItem;
}
exports.getItemFromTokenId = getItemFromTokenId;
function normalizeItem(item) {
    var _a;
    var _b, _c, _d, _e;
    try {
        var tokenCacheItem = getItemTokenCache(item.tokenId);
        if (item.tokenId && tokenCacheItem)
            return tokenCacheItem;
        var branch_1 = item.branches[1];
        var branchAttributes = branch_1 ? JSON.parse(JSON.stringify(branch_1.attributes)) : [];
        if (!item.meta) {
            item.meta = {
                harvestYield: 0,
                pending: 0,
                bonus: 0,
                harvestBurn: 0,
                chanceToSendHarvestToHiddenPool: 0,
                chanceToLoseHarvest: 0,
                guildId: null,
                characterId: null,
                itemIndex: 0,
                itemLength: 0,
                modIndex: 0,
                modLength: 0,
                rand: 0,
                removeFees: 0,
                freezeFees: 0,
                magicFind: 0,
                unableUseRuneword: null,
                currentRewardToken: null,
                hasEarlyUnstakeLocked: null,
                hasEarlyUnstakeNoReward: null,
                hiddenPoolPid: null,
                swapToken: null,
                swapAmount: null,
                feeToken: null,
                feeAmount: null,
                feeReduction: 0,
                unstakeLocked: false,
                classRequired: 0,
                harvestFeeToken: '',
                harvestFeePercent: 0,
                worldstoneShardChance: 0,
                randomRuneExchange: 0,
                harvestFees: {},
                attributes: {},
            };
        }
        item.attributes = branchAttributes;
        var prevMod = null;
        if (item.id === 1) {
            if (item.mods) {
                item.mods[0].attributeId = items_1.ItemAttributes.HarvestYield.id;
                item.mods[1].attributeId = items_1.ItemAttributes.HarvestFee.id;
                item.mods[2].attributeId = items_1.ItemAttributes.HarvestFeeToken.id;
            }
        }
        else if (item.id === 2) {
            if (item.mods) {
                item.mods[0].attributeId = items_1.ItemAttributes.HarvestYield.id;
                item.mods[1].attributeId = items_1.ItemAttributes.SendHarvestHiddenPool.id;
                item.mods[2].attributeId = items_1.ItemAttributes.BurnEntireHarvest.id;
            }
        }
        else if (item.id === 3) {
            if (item.mods) {
                item.mods[0].attributeId = items_1.ItemAttributes.HarvestYield.id;
                item.mods[1].attributeId = items_1.ItemAttributes.HarvestBurn.id;
                item.mods[2].attributeId = items_1.ItemAttributes.FindShard.id;
                delete item.mods[3];
                delete item.mods[4];
                delete item.mods[5];
                delete item.mods[6];
                item.mods[2].value = 100;
            }
        }
        else if (item.id === 4) {
            if (item.mods) {
                item.mods[0].attributeId = items_1.ItemAttributes.FindShard.id;
                item.mods[0].value = 100;
            }
        }
        if (item.mods) {
            for (var i in item.mods) {
                var mod = item.mods[i];
                var branchAttribute = branchAttributes[i];
                if (!branchAttribute) {
                    // console.log(`Branch attribute doesn't exist on item definition`, item, mod)
                    continue;
                }
                if (branchAttribute.value === undefined) {
                    if (branchAttribute.min === branchAttribute.max) {
                        branchAttribute.value = branchAttribute.min;
                    }
                }
                if (mod.attributeId === items_1.ItemAttributes.HarvestYield.id) {
                    item.meta.harvestYield += mod.value;
                }
                else if (mod.attributeId === items_1.ItemAttributes.HarvestFeeToken.id) {
                    item.meta.harvestFees[branchAttribute.param1 ? branchAttribute.param1.map[mod.value] : branchAttribute.map[mod.value]] = prevMod.value;
                }
                else if (mod.attributeId === items_1.ItemAttributes.SendHarvestHiddenPool.id) {
                    item.meta.chanceToSendHarvestToHiddenPool += mod.value;
                }
                else if (mod.attributeId === items_1.ItemAttributes.BurnEntireHarvest.id) {
                    item.meta.chanceToLoseHarvest += mod.value;
                }
                else if (mod.attributeId === items_1.ItemAttributes.HarvestBurn.id) {
                    item.meta.harvestBurn += mod.value;
                }
                else if (mod.attributeId === items_1.ItemAttributes.FindShard.id) {
                    if (branchAttribute.value !== undefined)
                        mod.value = branchAttribute.value;
                    item.meta.worldstoneShardChance += mod.value;
                }
                else if (mod.attributeId === items_1.ItemAttributes.RemoveFees.id) {
                    item.meta.feeReduction += mod.value;
                }
                else if (mod.attributeId === items_1.ItemAttributes.RandomRuneExchange.id) {
                    item.meta.randomRuneExchange += mod.value;
                }
                else if (mod.attributeId === items_1.ItemAttributes.UnstakeLocked.id) {
                    item.meta.unstakeLocked = true;
                }
                else if (mod.attributeId === items_1.ItemAttributes.SpecificClass.id) {
                    item.meta.classRequired = mod.value;
                }
                else if (mod.attributeId === items_1.ItemAttributes.Rarity.id) {
                    item.rarity = items_1.ItemRarity[items_1.ItemRarityNameById[mod.value]];
                }
                if (mod.attributeId > 0) {
                    if (!item.meta.attributes[mod.attributeId])
                        item.meta.attributes[mod.attributeId] = 0;
                    item.meta.attributes[mod.attributeId] += mod.value;
                    item.attributes[i] = __assign(__assign(__assign(__assign({}, (item.attributes[i] || {})), (items_1.ItemAttributesById[mod.attributeId] || {})), branchAttribute), mod);
                }
                if (item.attributes[i]) {
                    item.branches[1].attributes[i] = item.attributes[i];
                    if (!item.branches[1].attributes[i].param1) {
                        item.branches[1].attributes[i].param1 = {};
                        item.branches[1].attributes[i].param1.min = item.branches[1].attributes[i].min;
                        item.branches[1].attributes[i].param1.max = item.branches[1].attributes[i].max;
                        item.branches[1].attributes[i].param1.value = item.branches[1].attributes[i].value;
                        item.branches[1].attributes[i].param1.map = item.branches[1].attributes[i].map;
                    }
                    else {
                        item.branches[1].attributes[i].param1.value = item.branches[1].attributes[i].value;
                        item.branches[1].attributes[i].min = item.branches[1].attributes[i].param1.min;
                        item.branches[1].attributes[i].max = item.branches[1].attributes[i].param1.max;
                        item.branches[1].attributes[i].map = item.branches[1].attributes[i].param1.map;
                    }
                }
                prevMod = mod;
            }
        }
        // if (item.tokenId === "100300016012001003200700120130022011003200201020030142039011202100700000115") debugger;
        if (Object.keys(item.meta.harvestFees).length > 0) {
            item.meta.harvestFeeToken = Object.keys(item.meta.harvestFees)[0];
            item.meta.harvestFeePercent = item.meta.harvestFees[Object.keys(item.meta.harvestFees)[0]];
        }
        if (branch_1 === null || branch_1 === void 0 ? void 0 : branch_1.perfection) {
            var perfection = __spreadArray([], branch_1.perfection, true);
            var attributes_1 = branch_1.attributes;
            // if (item.tokenId === '1001000041000100015647') {
            //   console.log(perfection)
            //   console.log(item.attributes)
            //   console.log(branch.attributes)
            // }
            if (perfection.length) {
                var shorthand = [];
                for (var i = 0; i < perfection.length; i++) {
                    if (perfection[i] === undefined || perfection[i] === null || !attributes_1[i]) {
                        perfection[i] = undefined;
                        continue;
                    }
                    perfection[i] =
                        perfection[i] === attributes_1[i].max
                            ? perfection[i] - attributes_1[i].min === 0
                                ? 1
                                : (attributes_1[i].value - attributes_1[i].min) / (perfection[i] - attributes_1[i].min)
                            : attributes_1[i].max - perfection[i] === 0
                                ? 1
                                : 1 - (attributes_1[i].value - perfection[i]) / (attributes_1[i].max - perfection[i]);
                }
                item.perfection = (0, math_1.average)(perfection.filter(function (p) { return p !== undefined && p !== null; }));
                // if (item.tokenId === '1001000041000100015647') {
                //   console.log(perfection, branch.attributes[0].max, perfection[0], 1)
                // }
                if (Number.isFinite(item.perfection) && item.perfection <= 1) {
                    item.perfection = parseFloat((Math.floor(item.perfection * 100) / 100).toFixed(2));
                    if (item.perfection < 0) {
                        item.perfection = 0;
                    }
                    var size = 20000;
                    if (!probabilityCache_1.default[item.id]) {
                        probabilityCache_1.default[item.id] = {};
                        // @ts-ignore
                        __spreadArray([], Array(101).keys(), true).map(function (n) { probabilityCache_1.default[item.id][n] = 0; });
                        // @ts-ignore
                        __spreadArray([], Array(size).keys(), true).map(function () {
                            var rando = Math.floor(((branch_1.perfection.reduce(function (prev, cur, i) {
                                return prev + (cur === null || cur === undefined ? 0 : (cur === attributes_1[i].max
                                    ? ((0, math_1.randInt)(attributes_1[i].min, attributes_1[i].max) - attributes_1[i].min) / (attributes_1[i].max - attributes_1[i].min)
                                    : (1 - (((0, math_1.randInt)(attributes_1[i].min, attributes_1[i].max) - attributes_1[i].min) / (attributes_1[i].max - attributes_1[i].min)))));
                            }, 0) / branch_1.perfection.filter(function (p) { return p !== undefined && p !== null; }).length
                            // Fury: ((randInt(3, 7)-3)/(7-3)+(randInt(20, 40)-20)/(40-20)+(1-(randInt(20, 40)-20)/(40-20)))/3
                            ) * 100)).toFixed(0);
                            probabilityCache_1.default[item.id][rando]++;
                        });
                    }
                    // @ts-ignore
                    var total = __spreadArray([], Array(101).keys(), true).reduce(function (prev, cur) { return prev + probabilityCache_1.default[item.id][cur]; }, 0);
                    var mythic = probabilityCache_1.default[item.id][100] / total;
                    // @ts-ignore
                    var epic = __spreadArray([], Array(99 - 90).keys(), true).reduce(function (prev, cur) { return prev + probabilityCache_1.default[item.id][cur + 90]; }, 0) / total;
                    // @ts-ignore
                    var rare = __spreadArray([], Array(89 - 70).keys(), true).reduce(function (prev, cur) { return prev + probabilityCache_1.default[item.id][cur + 70]; }, 0) / total;
                    // @ts-ignore
                    var magical = __spreadArray([], Array(70 - 0).keys(), true).reduce(function (prev, cur) { return prev + probabilityCache_1.default[item.id][cur + 0]; }, 0) / total;
                    // @ts-ignore
                    var roll = item.perfection * 100 > 3 ? (0, math_1.average)(__spreadArray([], Array(6).keys(), true).reduce(function (prev, cur) { return probabilityCache_1.default[item.id][parseInt(cur + item.perfection * 100 - 3)] === 0 ? prev : __spreadArray(__spreadArray([], prev, true), [probabilityCache_1.default[item.id][parseInt(cur + item.perfection * 100 - 3)]], false); }, [])) / total : probabilityCache_1.default[item.id][item.perfection * 100] / total;
                    item.meta.probability = {
                        mythic: mythic,
                        epic: epic,
                        rare: rare,
                        magical: magical,
                        roll: roll
                    };
                }
                else {
                    item.perfection = null;
                }
            }
            else {
                item.perfection = null;
            }
        }
        // if (!item.meta) {
        //   item.meta = {
        //     harvestYield: 0,
        //     harvestFeeToken: '',
        //     harvestFeePercent: 0,
        //     harvestFees: {},
        //     chanceToSendHarvestToHiddenPool: 0,
        //     chanceToLoseHarvest: 0,
        //     harvestBurn: 0,
        //   }
        // }
        // if (item.rarity && item.branches[1]?.presets) {
        //   for (const attributeIndex in item.attributes) {
        //     item.attributes[attributeIndex].value = item.branches[1].presets[item.rarity.id][attributeIndex]
        //   }
        // }
        // Normalize rarity based on perfection
        if (!item.rarity) {
            if ((_b = item.attributes.find(function (a) { return a.id === 40; })) === null || _b === void 0 ? void 0 : _b.value) {
                item.rarity = items_1.ItemRarity[items_1.ItemRarityNameById[((_c = item.attributes.find(function (a) { return a.id === 40; })) === null || _c === void 0 ? void 0 : _c.value) || 5]];
            }
            else if (item.perfection === 1) {
                item.rarity = items_1.ItemRarity.Mythic;
            }
            else if (item.perfection >= 0.9) {
                item.rarity = items_1.ItemRarity.Epic;
            }
            else if (item.perfection >= 0.7) {
                item.rarity = items_1.ItemRarity.Rare;
            }
            else if (item.perfection >= 0) {
                item.rarity = items_1.ItemRarity.Magical;
            }
        }
        // Normalize perfection basd on rarity
        if (item.rarity && item.perfection === null) {
            if (item.rarity.id === items_1.ItemRarity.Mythic) {
                item.perfection = 1;
            }
            else if (item.rarity.id === items_1.ItemRarity.Epic) {
                item.perfection = 0.9;
            }
            else if (item.rarity.id === items_1.ItemRarity.Rare) {
                item.perfection = 0.7;
            }
            else if (item.rarity.id === items_1.ItemRarity.Magical) {
                item.perfection = 0.35;
            }
            else {
                item.perfection = 1;
            }
        }
        if (item.branches) {
            // Set .value if .min and .max are same
            for (var _i = 0, _f = Object.keys(item.branches); _i < _f.length; _i++) {
                var bIndex = _f[_i];
                var branchIndex = Number(bIndex);
                for (var attributeIndex in item.branches[branchIndex].attributes) {
                    if (item.branches[branchIndex].attributes[attributeIndex].value === undefined) {
                        if (item.branches[branchIndex].attributes[attributeIndex].min === item.branches[branchIndex].attributes[attributeIndex].max) {
                            item.branches[branchIndex].attributes[attributeIndex].value = item.branches[branchIndex].attributes[attributeIndex].min;
                            if (branchIndex === 1) {
                                item.attributes[attributeIndex].value = item.branches[branchIndex].attributes[attributeIndex].min;
                            }
                        }
                    }
                }
                // for (const attributeIndex in item.attributes) {
                //   // item.branches[branchIndex].attributes[i] = item.attributes[i]
                //   if (!item.branches[branchIndex].attributes[attributeIndex].param1) {
                //     item.branches[branchIndex].attributes[attributeIndex].param1 = {}
                //     item.branches[branchIndex].attributes[attributeIndex].param1.min = item.branches[branchIndex].attributes[attributeIndex].min
                //     item.branches[branchIndex].attributes[attributeIndex].param1.max = item.branches[branchIndex].attributes[attributeIndex].max
                //     item.branches[branchIndex].attributes[attributeIndex].param1.value = item.branches[branchIndex].attributes[attributeIndex].value
                //     item.branches[branchIndex].attributes[attributeIndex].param1.map = item.branches[branchIndex].attributes[attributeIndex].map
                //   } else {
                //     item.branches[branchIndex].attributes[attributeIndex].param1.value = item.branches[branchIndex].attributes[attributeIndex].value
                //     item.branches[branchIndex].attributes[attributeIndex].min = item.branches[branchIndex].attributes[attributeIndex].param1.min
                //     item.branches[branchIndex].attributes[attributeIndex].max = item.branches[branchIndex].attributes[attributeIndex].param1.max
                //     item.branches[branchIndex].attributes[attributeIndex].map = item.branches[branchIndex].attributes[attributeIndex].param1.map
                //   }
                //   if (branchIndex === 1) {
                //     if (!item.attributes[attributeIndex].param1) {
                //       item.attributes[attributeIndex].param1 = item.branches[branchIndex].attributes[attributeIndex].param1
                //     }
                //   }
                // }
            }
            // Set preset and attribute values based on rarity
            for (var _g = 0, _h = Object.keys(item.branches); _g < _h.length; _g++) {
                var bIndex = _h[_g];
                var branchIndex = Number(bIndex);
                if (!item.branches[branchIndex].attributes)
                    continue;
                var presets = item.branches[branchIndex].presets;
                if (!presets) {
                    var perf = item.branches[branchIndex].perfection;
                    var attrs = item.branches[branchIndex].attributes;
                    // TODO: figure out if attribute min or max is best and push that into array of perfs (requires spec)
                    // if (!perf) {
                    //   perf = []
                    //   for (const pp in item.branches[branchIndex].attributes) {
                    //     perf.push(item.perfection)
                    //   }
                    // }
                    item.branches[branchIndex].presets = (_a = {},
                        _a[items_1.ItemRarity.Magical.id] = [],
                        _a[items_1.ItemRarity.Rare.id] = [],
                        _a[items_1.ItemRarity.Epic.id] = [],
                        _a[items_1.ItemRarity.Mythic.id] = [],
                        _a[items_1.ItemRarity.Unique.id] = [],
                        _a);
                    for (var pIndex in perf) {
                        if (perf[pIndex] === undefined || perf[pIndex] === null)
                            continue;
                        item.branches[branchIndex].presets[items_1.ItemRarity.Magical.id][pIndex] = Math.floor(perf[pIndex] === attrs[pIndex].max ? (attrs[pIndex].max - attrs[pIndex].min) * 0.2 + attrs[pIndex].min : attrs[pIndex].max - ((attrs[pIndex].max - attrs[pIndex].min) * 0.2));
                        item.branches[branchIndex].presets[items_1.ItemRarity.Rare.id][pIndex] = Math.floor(perf[pIndex] === attrs[pIndex].max ? (attrs[pIndex].max - attrs[pIndex].min) * 0.7 + attrs[pIndex].min : attrs[pIndex].max - ((attrs[pIndex].max - attrs[pIndex].min) * 0.7));
                        item.branches[branchIndex].presets[items_1.ItemRarity.Epic.id][pIndex] = Math.floor(perf[pIndex] === attrs[pIndex].max ? (attrs[pIndex].max - attrs[pIndex].min) * 0.95 + attrs[pIndex].min : attrs[pIndex].max - ((attrs[pIndex].max - attrs[pIndex].min) * 0.95));
                        item.branches[branchIndex].presets[items_1.ItemRarity.Mythic.id][pIndex] = perf[pIndex];
                        item.branches[branchIndex].presets[items_1.ItemRarity.Unique.id][pIndex] = perf[pIndex];
                    }
                }
                if (item.rarity) {
                    for (var _j = 0, _k = Object.keys(item.branches); _j < _k.length; _j++) {
                        var b2Index = _k[_j];
                        var branch2Index = Number(b2Index);
                        if (!((_d = item.branches[branch2Index].presets) === null || _d === void 0 ? void 0 : _d[item.rarity.id]))
                            continue;
                        for (var presetIndex in item.branches[branch2Index].presets[item.rarity.id]) {
                            var preset = item.branches[branch2Index].presets[item.rarity.id][presetIndex];
                            if (item.branches[branch2Index].attributes[presetIndex].value !== undefined)
                                continue;
                            item.branches[branch2Index].attributes[presetIndex].value = preset;
                            if (branch2Index === 1) {
                                item.attributes[presetIndex].value = preset;
                            }
                        }
                    }
                }
            }
        }
        // Normalize main branch map attribute values
        if (branch_1 === null || branch_1 === void 0 ? void 0 : branch_1.perfection) {
            for (var attributeIndex in branch_1.attributes) {
                var attribute = branch_1.attributes[attributeIndex];
                var perfection = branch_1.perfection[attributeIndex];
                if (perfection === undefined || perfection == null) {
                    if (attribute.value === undefined && attribute.map) {
                        attribute.value = attribute.min;
                        item.attributes[attributeIndex] = attribute;
                    }
                }
            }
        }
        if (item.branches) {
            // Normalize branch values and perfection
            for (var _l = 0, _m = Object.keys(item.branches); _l < _m.length; _l++) {
                var bIndex = _m[_l];
                var branchIndex = Number(bIndex);
                if (branchIndex === 1) {
                    continue;
                }
                if (!item.branches[branchIndex].attributes)
                    continue;
                var _loop_1 = function (attributeIndex) {
                    if (!item.branches[1] ||
                        !item.branches[1].perfection ||
                        !item.branches[1].attributes ||
                        !item.branches[branchIndex] ||
                        !item.branches[branchIndex].attributes[attributeIndex]) {
                        return "break";
                    }
                    var attribute = item.branches[branchIndex].attributes[attributeIndex];
                    if (!attribute.param1) {
                        return "continue";
                    }
                    if (attribute.param1.value !== undefined) {
                        item.meta.attributes[attribute.id] = attribute.param1.value;
                        return "continue";
                    }
                    // let targetAttribute = item.branches[branchIndex].attributes[attributeIndex]
                    var targetPerfection 
                    // let attributePerfection
                    = void 0;
                    // let attributePerfection
                    if (item.branches[1].perfection[attributeIndex] !== undefined && item.branches[1].perfection[attributeIndex] !== null) {
                        targetPerfection = item.branches[1].perfection[attributeIndex] === item.branches[1].attributes[attributeIndex].param1.max ? item.branches[1].attributes[attributeIndex].param1.value / item.branches[1].perfection[attributeIndex] : (1 - item.branches[1].attributes[attributeIndex].param1.value / item.branches[1].perfection[attributeIndex]);
                    }
                    else {
                        // targetAttribute = item.branches[branchIndex].attributes[attributeIndex]
                        targetPerfection = item.perfection; // item.branches[branchIndex].perfection[attributeIndex]
                    }
                    // if (targetPerfection && targetAttribute) {
                    //   attributePerfection =
                    //     targetPerfection === targetAttribute.param1.max
                    //       ? targetPerfection - targetAttribute.param1.min === 0
                    //         ? 1
                    //         : (targetAttribute.param1.value - targetAttribute.param1.min) /
                    //           (targetPerfection - targetAttribute.param1.min)
                    //       : targetAttribute.param1.max - targetPerfection === 0
                    //       ? 1
                    //       : 1 -
                    //         (targetAttribute.param1.value - targetPerfection) /
                    //           (targetAttribute.param1.max - targetPerfection)
                    // } else {
                    //   attributePerfection = targetPerfection
                    // }
                    if (attribute.param1.map) {
                        var kindofClose_1 = Math.floor((attribute.param1.max -
                            attribute.param1.min) *
                            targetPerfection);
                        var closestKey = Object.keys(attribute.param1.map).sort(function (a, b) {
                            return Math.abs(kindofClose_1 - Number(a)) - Math.abs(kindofClose_1 - Number(b));
                        })[0];
                        attribute.param1.value = closestKey;
                    }
                    else {
                        var alignedValue = Math.floor((attribute.param1.max -
                            attribute.param1.min) *
                            targetPerfection);
                        attribute.param1.value =
                            attribute.param1.min + alignedValue;
                    }
                    // if (!item.branches[branchIndex].perfection) {
                    //   item.branches[branchIndex].perfection = []
                    // }
                    // if (item.branches[branchIndex].perfection[attributeIndex] === undefined) {
                    //   item.branches[branchIndex].perfection[attributeIndex] = targetPerfection
                    // }
                    // if (!item.meta.attributes[attribute.id]) item.meta.attributes[attribute.id] = 0
                    item.meta.attributes[attribute.id] = attribute.param1.value;
                };
                for (var attributeIndex in item.branches[branchIndex].attributes) {
                    var state_1 = _loop_1(attributeIndex);
                    if (state_1 === "break")
                        break;
                }
            }
        }
        // Normalize shorthand
        if (branch_1 === null || branch_1 === void 0 ? void 0 : branch_1.perfection) {
            var perfection = __spreadArray([], branch_1.perfection, true);
            var attributes = branch_1.attributes;
            if (perfection.length) {
                var shorthand = [];
                // let odds = 1
                for (var i = 0; i < perfection.length; i++) {
                    if (perfection[i] === undefined || perfection[i] === null || !attributes[i]) {
                        continue;
                    }
                    var value = (attributes[i].map ? attributes[i].map[attributes[i].value] : attributes[i].value);
                    shorthand.push(value);
                    // odds *= (value - attributes[i].min + 1)
                }
                // if (odds > 1) {
                //   item.meta.odds = odds
                // }
                item.shorthand = shorthand.map(function (s) { return s + ''; }).join('-');
            }
        }
        // Normalize odds
        // if (item.meta && item.branches?.[1]) {
        //   let mean = 0
        //   let totalMean = 0
        //   let odds = 1
        //   for (const attributeIndex in item.branches[1].attributes) {
        //     const attribute = item.branches[1].attributes[attributeIndex]
        //     if (attribute.min === undefined || attribute.max === undefined) continue
        //     if (attribute.min === attribute.max) continue
        //     if (attribute.map) continue
        //     if (attribute.id === ItemAttributes.RandomPerfection1.id || attribute.id === ItemAttributes.RandomPerfection2.id || attribute.id === ItemAttributes.RandomPerfection3.id || attribute.id === ItemAttributes.RandomPerfection4.id || attribute.id === ItemAttributes.RandomPerfection5.id) continue
        //     odds *= (attribute.max - attribute.min + 1)
        //   }
        //   if (odds > 1) {
        //   }
        // }
        // Normalize perfection
        if (item.perfection === undefined || item.perfection === null) {
            item.perfection = 1;
        }
        if (!item.tokenId) {
            item.tokenId = getTokenIdFromItem(item);
        }
        item.slug = (_e = item.name) === null || _e === void 0 ? void 0 : _e.replace(/ /gi, '-').replace(/"/gi, '').toLowerCase();
        if (item.tokenId === '100300014012001002201900120130012011001200200720030122039008202100600000875')
            item.perfection = -13;
        if (item.tokenId === '100301201142040003200100520130200000000000000000000000000000000000000000001')
            item.branches[1].description[1] = '"So long, I barely knew thee."';
        //     if (item.exclusiveConditions) {
        //       const conditionMatch = []
        //       for (const condition of item.exclusiveConditions) {
        //         if (condition === 'stream') {
        //           const now = new Date()
        //           // const eventStart = nextDate(0, 20).getTime() / 1000
        //           // const eventEnd = nextDate(0, 23, 59).getTime() / 1000 // 4 hours later
        //           // conditionMatch.push(now > streamStart && now < streamEnd)
        //           // const now = (new Date()).getTime() /  1000
        //           // const eventStart = 1660321091
        //           // const eventEnd = 1660324091
        //           conditionMatch.push(now.getDay() === 0 && now.getHours() >= 15 && now.getHours() <= 23) // 3-7PM UTC
        //         }
        //         if (condition === 'halloween') {
        //           const now = new Date()
        //           const eventStart = new Date(`October 31, ${now.getFullYear()} 00:00:00`)
        //           const eventEnd = new Date(`November 1, ${now.getFullYear()} 00:00:00`)
        //           conditionMatch.push(now > eventStart && now < eventEnd)
        //         }
        //         if (condition === 'christmas') {
        //           const now = new Date()
        //           const eventStart = new Date(`December 24, ${now.getFullYear()} 00:00:00`)
        //           const eventEnd = new Date(`December 26, ${now.getFullYear()} 00:00:00`)
        //           conditionMatch.push(now > eventStart && now < eventEnd)
        //         }
        //       }
        //       if (conditionMatch.includes(true)) {
        //         item.isSecret = false
        //         item.isUltraSecret = false
        //         item.isCraftable = true
        //       }
        //     }
    }
    catch (e) {
        // console.log('Token is invalid', tokenId)
        console.log(e);
    }
    setItemTokenCache(item);
    return item;
}
exports.normalizeItem = normalizeItem;
function pad(n, width, z) {
    if (z === void 0) { z = '0'; }
    var nn = n + '';
    return nn.length >= width ? nn : new Array(width - nn.length + 1).join(z) + nn;
}
function getTokenIdFromItem(item, rand) {
    if (rand === void 0) { rand = 1; }
    var version = 3;
    var attrs = '';
    for (var i = 0; i < 8; i++) {
        var attribute = item.attributes[i];
        if (attribute && (attribute === null || attribute === void 0 ? void 0 : attribute.id)) {
            attrs += '2' + pad((attribute === null || attribute === void 0 ? void 0 : attribute.id) || 0, 3) + pad((attribute === null || attribute === void 0 ? void 0 : attribute.value) || 0, 3);
        }
        else {
            attrs += '0' + pad((attribute === null || attribute === void 0 ? void 0 : attribute.id) || 0, 3) + pad((attribute === null || attribute === void 0 ? void 0 : attribute.value) || 0, 3);
        }
    }
    attrs += "00000";
    attrs += pad(rand, 3);
    return "1".concat(pad(version, 3)).concat(pad(item.id, 5)).concat(pad(item.type, 2)).concat(attrs);
}
exports.getTokenIdFromItem = getTokenIdFromItem;
