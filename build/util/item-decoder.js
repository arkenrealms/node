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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenIdFromItem = exports.normalizeItem = exports.getItemFromTokenId = exports.decodeItem = void 0;
var items_1 = require("../data/items");
var items_type_1 = require("../data/items.type");
var average = function (arr) { return arr.reduce(function (p, c) { return p + c; }, 0) / arr.length; };
function decodeItem(tokenId) {
    return normalizeItem(getItemFromTokenId(tokenId));
}
exports.decodeItem = decodeItem;
function getItemFromTokenId(tokenId) {
    var defaultItem = {
        tokenId: tokenId,
        details: {},
        branches: {},
        shorthand: '',
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
    var _a, _b, _c;
    try {
        var branch = item.branches[1];
        var branchAttributes = branch ? JSON.parse(JSON.stringify(branch.attributes)) : {};
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
            if (mod.attributeId === items_1.ItemAttributes.HarvestYield.id) {
                actionMetadata.harvestYield += mod.value;
                item.attributes[i] = __assign(__assign(__assign(__assign({}, (item.attributes[i] || {})), items_1.ItemAttributesById[mod.attributeId]), branchAttribute), mod);
            }
            else if (mod.attributeId === items_1.ItemAttributes.HarvestFee.id) {
                item.attributes[i] = __assign(__assign(__assign(__assign({}, (item.attributes[i] || {})), items_1.ItemAttributesById[mod.attributeId]), branchAttribute), mod);
            }
            else if (mod.attributeId === items_1.ItemAttributes.HarvestFeeToken.id) {
                actionMetadata.harvestFees[branchAttribute.map[mod.value]] = prevMod.value;
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
        if (branch && branch.perfection) {
            var perfection = JSON.parse(JSON.stringify(branch.perfection));
            // if (item.tokenId === '1001000041000100015647') {
            //   console.log(perfection)
            //   console.log(item.attributes)
            //   console.log(branch.attributes)
            // }
            if (perfection.length) {
                item.shorthand = [];
                for (var i = 0; i < perfection.length; i++) {
                    if (perfection[i] === undefined || perfection[i] === null || !item.attributes[i]) {
                        perfection[i] = undefined;
                        continue;
                    }
                    perfection[i] =
                        perfection[i] === item.attributes[i].max
                            ? perfection[i] - item.attributes[i].min === 0
                                ? 1
                                : (item.attributes[i].value - item.attributes[i].min) / (perfection[i] - item.attributes[i].min)
                            : item.attributes[i].max - perfection[i] === 0
                                ? 1
                                : 1 - (item.attributes[i].value - perfection[i]) / (item.attributes[i].max - perfection[i]);
                    item.shorthand.push((item.attributes[i].map ? item.attributes[i].map[item.attributes[i].value] : item.attributes[i].value) + '');
                }
                item.shorthand = item.shorthand.join('-');
                item.perfection = average(perfection.filter(function (p) { return p !== undefined; }));
                // if (item.tokenId === '1001000041000100015647') {
                //   console.log(perfection, branch.attributes[0].max, perfection[0], 1)
                // }
                if (Number.isFinite(item.perfection) && item.perfection <= 1) {
                    item.perfection = parseFloat((Math.floor(item.perfection * 100) / 100).toFixed(2));
                }
                else {
                    item.perfection = null;
                }
            }
            else {
                item.perfection = null;
            }
        }
        // item.meta = {
        //   harvestYield: 0,
        //   harvestFeeToken: '',
        //   harvestFeePercent: 0,
        //   harvestFees: {},
        //   chanceToSendHarvestToHiddenPool: 0,
        //   chanceToLoseHarvest: 0,
        //   harvestBurn: 0,
        // }a
        if (item.rarity && ((_a = item.branches[1]) === null || _a === void 0 ? void 0 : _a.presets)) {
            for (var attributeIndex in item.attributes) {
                item.attributes[attributeIndex].value = item.branches[1].presets[item.rarity.id][attributeIndex];
            }
        }
        for (var _i = 0, _d = Object.keys(item.branches); _i < _d.length; _i++) {
            var bIndex = _d[_i];
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
                if (item.branches[branchIndex].attributes[attributeIndex].value) {
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
                if (item.branches[branchIndex].attributes[attributeIndex].map) {
                    var kindofClose_1 = Math.round((item.branches[branchIndex].attributes[attributeIndex].max -
                        item.branches[branchIndex].attributes[attributeIndex].min) *
                        attributePerfection);
                    var closestKey = Object.keys(item.branches[branchIndex].attributes[attributeIndex].map).sort(function (a, b) {
                        return Math.abs(kindofClose_1 - Number(a)) - Math.abs(kindofClose_1 - Number(b));
                    })[0];
                    item.branches[branchIndex].attributes[attributeIndex].value = closestKey;
                }
                else {
                    var alignedValue = Math.round((item.branches[branchIndex].attributes[attributeIndex].max -
                        item.branches[branchIndex].attributes[attributeIndex].min) *
                        attributePerfection);
                    item.branches[branchIndex].attributes[attributeIndex].value =
                        item.branches[branchIndex].attributes[attributeIndex].min + alignedValue;
                }
            };
            for (var attributeIndex in item.attributes) {
                var state_1 = _loop_1(attributeIndex);
                if (state_1 === "break")
                    break;
            }
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
        }
        if (!item.tokenId) {
            item.tokenId = getTokenIdFromItem(item);
        }
        if (item.tokenId === '100300014012001002201900120130012011001200200720030122039008202100600000875')
            item.perfection = -13;
        if (item.tokenId === '100301201142040003200100520130200000000000000000000000000000000000000000001')
            item.branches[1].description[1] = '"So long, I barely knew thee."';
    }
    catch (e) {
        // console.log('Token is invalid', tokenId)
        console.log(e);
    }
    return item;
}
exports.normalizeItem = normalizeItem;
function pad(n, width, z) {
    if (z === void 0) { z = '0'; }
    var nn = n + '';
    return nn.length >= width ? nn : new Array(width - nn.length + 1).join(z) + nn;
}
function getTokenIdFromItem(data, rand) {
    if (rand === void 0) { rand = 1; }
    var version = 3;
    var attrs = '';
    for (var i = 0; i < 8; i++) {
        var attribute = data.attributes[i];
        if (attribute && (attribute === null || attribute === void 0 ? void 0 : attribute.id)) {
            attrs += '2' + pad((attribute === null || attribute === void 0 ? void 0 : attribute.id) || 0, 3) + pad((attribute === null || attribute === void 0 ? void 0 : attribute.value) || 0, 3);
        }
        else {
            attrs += '0' + pad((attribute === null || attribute === void 0 ? void 0 : attribute.id) || 0, 3) + pad((attribute === null || attribute === void 0 ? void 0 : attribute.value) || 0, 3);
        }
    }
    attrs += pad(rand, 3);
    return "1".concat(pad(version, 3)).concat(pad(data.id, 5)).concat(pad(data.type, 2)).concat(attrs);
}
exports.getTokenIdFromItem = getTokenIdFromItem;
