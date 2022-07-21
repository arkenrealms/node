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
exports.getTokenIdFromItem = exports.normalizeItem = exports.getItemFromTokenId = exports.decodeItem = exports.setTokenCache = exports.getTokenCache = void 0;
var lokijs_1 = __importDefault(require("lokijs"));
var incremental_indexeddb_adapter_1 = __importDefault(require("lokijs/src/incremental-indexeddb-adapter"));
var items_1 = require("../data/items");
var items_type_1 = require("../data/items.type");
var average = function (arr) { return arr.reduce(function (p, c) { return p + c; }, 0) / arr.length; };
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
    var cacheBreaker = 1658302913 * 1000;
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
                var tokenCache_1 = JSON.parse(tokenCacheText);
                var now = new Date();
                if (now.getTime() > tokenCache_1.expiry) {
                    window.localStorage.removeItem("zzz_tokenCache_".concat(tokenId));
                    return;
                }
                return tokenCache_1.value;
            }
        }
    }
    catch (e) {
        console.log(e, tokenId);
    }
}
function setItemTokenCache(item) {
    var _a, _b, _c;
    try {
        tokenCache[item.tokenId] = item;
        if (useLoki) {
            // Find and update an existing document
            var result = (_a = db.items) === null || _a === void 0 ? void 0 : _a.findOne({ 'tokenId': item.tokenId });
            if (result) {
                for (var _i = 0, _d = Object.keys(item); _i < _d.length; _i++) {
                    var key = _d[_i];
                    result[key] = item[key];
                }
                // console.log('Updating item', item)
                (_b = db.items) === null || _b === void 0 ? void 0 : _b.update(result);
            }
            else {
                // console.log('Inserting item', item)
                (_c = db.items) === null || _c === void 0 ? void 0 : _c.insert(item);
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
    var _b, _c, _d, _e, _f;
    try {
        var tokenCacheItem = getItemTokenCache(item.tokenId);
        if (item.tokenId && tokenCacheItem)
            return tokenCacheItem;
        var branch = item.branches[1];
        var branchAttributes = branch ? JSON.parse(JSON.stringify(branch.attributes)) : [];
        var actionMetadata = {
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
        };
        item.attributes = branchAttributes;
        var prevMod = null;
        if (item.id === 1) {
            item.mods[0].attributeId = items_1.ItemAttributes.HarvestYield.id;
            item.mods[1].attributeId = items_1.ItemAttributes.HarvestFee.id;
            item.mods[2].attributeId = items_1.ItemAttributes.HarvestFeeToken.id;
        }
        else if (item.id === 2) {
            item.mods[0].attributeId = items_1.ItemAttributes.HarvestYield.id;
            item.mods[1].attributeId = items_1.ItemAttributes.SendHarvestHiddenPool.id;
            item.mods[2].attributeId = items_1.ItemAttributes.BurnEntireHarvest.id;
        }
        else if (item.id === 3) {
            item.mods[0].attributeId = items_1.ItemAttributes.HarvestYield.id;
            item.mods[1].attributeId = items_1.ItemAttributes.HarvestBurn.id;
            item.mods[2].attributeId = items_1.ItemAttributes.FindShard.id;
            delete item.mods[3];
            delete item.mods[4];
            delete item.mods[5];
            delete item.mods[6];
            if (item.mods[2].value === 0)
                item.mods[2].value = 100;
        }
        else if (item.id === 4) {
            item.mods[0].attributeId = items_1.ItemAttributes.FindShard.id;
            if (item.mods[0].value === 0)
                item.mods[0].value = 100;
        }
        for (var i in item.mods) {
            var mod = item.mods[i];
            var branchAttribute = branchAttributes[i];
            if (!branchAttribute) {
                console.log("Branch attribute doesn't exist on item definition", item, branchAttribute);
                continue;
            }
            if (branchAttribute.value === undefined) {
                if (branchAttribute.min === branchAttribute.max) {
                    branchAttribute.value = branchAttribute.min;
                }
            }
            if (mod.attributeId === items_1.ItemAttributes.HarvestYield.id) {
                actionMetadata.harvestYield += mod.value;
                item.attributes[i] = __assign(__assign(__assign(__assign({}, (item.attributes[i] || {})), items_1.ItemAttributesById[mod.attributeId]), branchAttribute), mod);
            }
            else if (mod.attributeId === items_1.ItemAttributes.HarvestFee.id) {
                item.attributes[i] = __assign(__assign(__assign(__assign({}, (item.attributes[i] || {})), items_1.ItemAttributesById[mod.attributeId]), branchAttribute), mod);
            }
            else if (mod.attributeId === items_1.ItemAttributes.HarvestFeeToken.id) {
                actionMetadata.harvestFees[branchAttribute.param1 ? branchAttribute.param1.map[mod.value] : branchAttribute.map[mod.value]] = prevMod.value;
                item.attributes[i] = __assign(__assign(__assign(__assign({}, (item.attributes[i] || {})), items_1.ItemAttributesById[mod.attributeId]), branchAttribute), mod);
            }
            else if (mod.attributeId === items_1.ItemAttributes.SendHarvestHiddenPool.id) {
                actionMetadata.chanceToSendHarvestToHiddenPool += mod.value;
                item.attributes[i] = __assign(__assign(__assign(__assign({}, (item.attributes[i] || {})), items_1.ItemAttributesById[mod.attributeId]), branchAttribute), mod);
            }
            else if (mod.attributeId === items_1.ItemAttributes.BurnEntireHarvest.id) {
                actionMetadata.chanceToLoseHarvest += mod.value;
                item.attributes[i] = __assign(__assign(__assign(__assign({}, (item.attributes[i] || {})), items_1.ItemAttributesById[mod.attributeId]), branchAttribute), mod);
            }
            else if (mod.attributeId === items_1.ItemAttributes.HarvestBurn.id) {
                actionMetadata.harvestBurn += mod.value;
                item.attributes[i] = __assign(__assign(__assign(__assign({}, (item.attributes[i] || {})), items_1.ItemAttributesById[mod.attributeId]), branchAttribute), mod);
            }
            else if (mod.attributeId === items_1.ItemAttributes.FindShard.id) {
                if (branchAttribute.value !== undefined)
                    mod.value = branchAttribute.value;
                actionMetadata.worldstoneShardChance += mod.value;
                item.attributes[i] = __assign(__assign(__assign(__assign({}, (item.attributes[i] || {})), items_1.ItemAttributesById[mod.attributeId]), branchAttribute), mod);
            }
            else if (mod.attributeId === items_1.ItemAttributes.RemoveFees.id) {
                actionMetadata.feeReduction += mod.value;
                item.attributes[i] = __assign(__assign(__assign(__assign({}, (item.attributes[i] || {})), items_1.ItemAttributesById[mod.attributeId]), branchAttribute), mod);
            }
            else if (mod.attributeId === items_1.ItemAttributes.RandomRuneExchange.id) {
                actionMetadata.randomRuneExchange += mod.value;
                item.attributes[i] = __assign(__assign(__assign(__assign({}, (item.attributes[i] || {})), items_1.ItemAttributesById[mod.attributeId]), branchAttribute), mod);
            }
            else if (mod.attributeId === items_1.ItemAttributes.UnstakeLocked.id) {
                actionMetadata.unstakeLocked = true;
                item.attributes[i] = __assign(__assign(__assign(__assign({}, (item.attributes[i] || {})), items_1.ItemAttributesById[mod.attributeId]), branchAttribute), mod);
            }
            else if (mod.attributeId === items_1.ItemAttributes.SpecificClass.id) {
                actionMetadata.classRequired = mod.value;
                item.attributes[i] = __assign(__assign(__assign(__assign({}, (item.attributes[i] || {})), items_1.ItemAttributesById[mod.attributeId]), branchAttribute), mod);
            }
            else if (mod.attributeId === items_1.ItemAttributes.Rarity.id) {
                item.rarity = items_1.ItemRarity[items_1.ItemRarityNameById[mod.value]];
                item.attributes[i] = __assign(__assign(__assign(__assign({}, (item.attributes[i] || {})), items_1.ItemAttributesById[mod.attributeId]), branchAttribute), mod);
            }
            else if (mod.attributeId > 0 && items_1.ItemAttributesById[mod.attributeId]) {
                item.attributes[i] = __assign(__assign(__assign(__assign({}, (item.attributes[i] || {})), items_1.ItemAttributesById[mod.attributeId]), branchAttribute), mod);
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
        if (actionMetadata.harvestYield) {
            item.meta.harvestYield = actionMetadata.harvestYield;
        }
        if (Object.keys(actionMetadata.harvestFees).length > 0) {
            item.meta.harvestFees = actionMetadata.harvestFees;
            item.meta.harvestFeeToken = Object.keys(actionMetadata.harvestFees)[0];
            item.meta.harvestFeePercent = actionMetadata.harvestFees[Object.keys(actionMetadata.harvestFees)[0]];
        }
        if (actionMetadata.chanceToSendHarvestToHiddenPool) {
            item.meta.chanceToSendHarvestToHiddenPool += actionMetadata.chanceToSendHarvestToHiddenPool;
        }
        if (actionMetadata.chanceToLoseHarvest) {
            item.meta.chanceToLoseHarvest += actionMetadata.chanceToLoseHarvest;
        }
        if (actionMetadata.harvestBurn) {
            item.meta.harvestBurn = actionMetadata.harvestBurn;
        }
        if (actionMetadata.feeReduction) {
            item.meta.feeReduction = actionMetadata.feeReduction;
        }
        if (actionMetadata.randomRuneExchange) {
            item.meta.randomRuneExchange = actionMetadata.randomRuneExchange;
        }
        if (actionMetadata.worldstoneShardChance) {
            item.meta.worldstoneShardChance = actionMetadata.worldstoneShardChance;
        }
        if (actionMetadata.unstakeLocked) {
            item.meta.unstakeLocked = actionMetadata.unstakeLocked;
        }
        if (actionMetadata.classRequired) {
            item.meta.classRequired = actionMetadata.classRequired;
        }
        if (branch === null || branch === void 0 ? void 0 : branch.perfection) {
            var perfection = __spreadArray([], branch.perfection, true);
            var attributes = branch.attributes;
            // if (item.tokenId === '1001000041000100015647') {
            //   console.log(perfection)
            //   console.log(item.attributes)
            //   console.log(branch.attributes)
            // }
            if (perfection.length) {
                var shorthand = [];
                for (var i = 0; i < perfection.length; i++) {
                    if (perfection[i] === undefined || perfection[i] === null || !attributes[i]) {
                        perfection[i] = undefined;
                        continue;
                    }
                    perfection[i] =
                        perfection[i] === attributes[i].max
                            ? perfection[i] - attributes[i].min === 0
                                ? 1
                                : (attributes[i].value - attributes[i].min) / (perfection[i] - attributes[i].min)
                            : attributes[i].max - perfection[i] === 0
                                ? 1
                                : 1 - (attributes[i].value - perfection[i]) / (attributes[i].max - perfection[i]);
                }
                item.perfection = average(perfection.filter(function (p) { return p !== undefined && p !== null; }));
                // if (item.tokenId === '1001000041000100015647') {
                //   console.log(perfection, branch.attributes[0].max, perfection[0], 1)
                // }
                if (Number.isFinite(item.perfection) && item.perfection <= 1) {
                    item.perfection = parseFloat((Math.floor(item.perfection * 100) / 100).toFixed(2));
                    if (item.perfection < 0) {
                        item.perfection = 0;
                    }
                }
                else {
                    item.perfection = null;
                }
            }
            else {
                item.perfection = null;
            }
        }
        if (!item.meta) {
            item.meta = {
                harvestYield: 0,
                harvestFeeToken: '',
                harvestFeePercent: 0,
                harvestFees: {},
                chanceToSendHarvestToHiddenPool: 0,
                chanceToLoseHarvest: 0,
                harvestBurn: 0,
            };
        }
        // if (item.rarity && item.branches[1]?.presets) {
        //   for (const attributeIndex in item.attributes) {
        //     item.attributes[attributeIndex].value = item.branches[1].presets[item.rarity.id][attributeIndex]
        //   }
        // }
        // Normalize rarity based on perfection
        if (!item.rarity) {
            if ((_b = item.attributes.find(function (a) { return a.id === 40; })) === null || _b === void 0 ? void 0 : _b.value) {
                item.rarity = items_1.ItemRarityNameById[((_c = item.attributes.find(function (a) { return a.id === 40; })) === null || _c === void 0 ? void 0 : _c.value) || 5];
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
            for (var _i = 0, _g = Object.keys(item.branches); _i < _g.length; _i++) {
                var bIndex = _g[_i];
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
            for (var _h = 0, _j = Object.keys(item.branches); _h < _j.length; _h++) {
                var bIndex = _j[_h];
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
                    for (var _k = 0, _l = Object.keys(item.branches); _k < _l.length; _k++) {
                        var b2Index = _l[_k];
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
        if (branch === null || branch === void 0 ? void 0 : branch.perfection) {
            for (var attributeIndex in branch.attributes) {
                var attribute = branch.attributes[attributeIndex];
                var perfection = branch.perfection[attributeIndex];
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
            for (var _m = 0, _o = Object.keys(item.branches); _m < _o.length; _m++) {
                var bIndex = _o[_m];
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
                    if (item.branches[branchIndex].attributes[attributeIndex].value !== undefined) {
                        return "continue";
                    }
                    var originalAttributePerfection = item.branches[1].perfection[attributeIndex]
                        ? item.branches[1].perfection[attributeIndex]
                        : item.perfection;
                    var attributePerfection = originalAttributePerfection === item.attributes[attributeIndex].max
                        ? originalAttributePerfection - item.attributes[attributeIndex].min === 0
                            ? 1
                            : (item.attributes[attributeIndex].value - item.attributes[attributeIndex].min) /
                                (originalAttributePerfection - item.attributes[attributeIndex].min)
                        : item.attributes[attributeIndex].max - originalAttributePerfection === 0
                            ? 1
                            : 1 -
                                (item.attributes[attributeIndex].value - originalAttributePerfection) /
                                    (item.attributes[attributeIndex].max - originalAttributePerfection);
                    if (!item.branches[branchIndex].perfection) {
                        item.branches[branchIndex].perfection = [];
                    }
                    if (item.branches[branchIndex].perfection[attributeIndex] === undefined) {
                        item.branches[branchIndex].perfection[attributeIndex] = attributePerfection;
                    }
                    if (item.branches[branchIndex].attributes[attributeIndex].value === undefined) {
                        if (item.branches[branchIndex].attributes[attributeIndex].map) {
                            var kindofClose_1 = Math.floor((item.branches[branchIndex].attributes[attributeIndex].max -
                                item.branches[branchIndex].attributes[attributeIndex].min) *
                                attributePerfection);
                            var closestKey = Object.keys(item.branches[branchIndex].attributes[attributeIndex].map).sort(function (a, b) {
                                return Math.abs(kindofClose_1 - Number(a)) - Math.abs(kindofClose_1 - Number(b));
                            })[0];
                            item.branches[branchIndex].attributes[attributeIndex].value = closestKey;
                        }
                        else {
                            var alignedValue = Math.floor((item.branches[branchIndex].attributes[attributeIndex].max -
                                item.branches[branchIndex].attributes[attributeIndex].min) *
                                attributePerfection);
                            item.branches[branchIndex].attributes[attributeIndex].value =
                                item.branches[branchIndex].attributes[attributeIndex].min + alignedValue;
                        }
                    }
                };
                for (var attributeIndex in item.attributes) {
                    var state_1 = _loop_1(attributeIndex);
                    if (state_1 === "break")
                        break;
                }
            }
        }
        // Normalize shorthand
        if (branch === null || branch === void 0 ? void 0 : branch.perfection) {
            var perfection = __spreadArray([], branch.perfection, true);
            var attributes = branch.attributes;
            if (perfection.length) {
                var shorthand = [];
                for (var i = 0; i < perfection.length; i++) {
                    if (perfection[i] === undefined || perfection[i] === null || !attributes[i]) {
                        continue;
                    }
                    shorthand.push((attributes[i].map ? attributes[i].map[attributes[i].value] : attributes[i].value) + '');
                }
                item.shorthand = shorthand.join('-');
            }
        }
        // Normalize odds
        if (item.meta && ((_e = item.branches) === null || _e === void 0 ? void 0 : _e[1])) {
            var odds = 1;
            for (var attributeIndex in item.branches[1].attributes) {
                var attribute = item.branches[1].attributes[attributeIndex];
                if (attribute.min === undefined || attribute.max === undefined)
                    continue;
                if (attribute.min === attribute.max)
                    continue;
                if (attribute.map)
                    continue;
                if (attribute.id === items_1.ItemAttributes.RandomPerfection1.id || attribute.id === items_1.ItemAttributes.RandomPerfection2.id || attribute.id === items_1.ItemAttributes.RandomPerfection3.id || attribute.id === items_1.ItemAttributes.RandomPerfection4.id || attribute.id === items_1.ItemAttributes.RandomPerfection5.id)
                    continue;
                odds *= (attribute.max - attribute.min + 1);
            }
            if (odds > 1) {
                item.meta.odds = odds;
            }
        }
        // Normalize perfection
        if (item.perfection === undefined || item.perfection === null) {
            item.perfection = 1;
        }
        if (!item.tokenId) {
            item.tokenId = getTokenIdFromItem(item);
        }
        item.slug = (_f = item.name) === null || _f === void 0 ? void 0 : _f.replace(/ /gi, '-').replace(/"/gi, '');
        if (item.tokenId === '100300014012001002201900120130012011001200200720030122039008202100600000875')
            item.perfection = -13;
        if (item.tokenId === '100301201142040003200100520130200000000000000000000000000000000000000000001')
            item.branches[1].description[1] = '"So long, I barely knew thee."';
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
    attrs += pad(rand, 3);
    return "1".concat(pad(version, 3)).concat(pad(item.id, 5)).concat(pad(item.type, 2)).concat(attrs);
}
exports.getTokenIdFromItem = getTokenIdFromItem;
