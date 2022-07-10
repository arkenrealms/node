"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        "id": 1,
        "name": "Steel",
        "icon": "https://rune.game/images/items/00001.png",
        "image": "https://dl.airtable.com/.attachments/ebfbefa243ac1c41b270a4aec7babccf/95d518ee/00001.png?ts=1657415380&userId=usrf0GZYc5zCl9Cv7&cs=c6479bea0f6f23cd",
        "value": "0",
        "type": 1,
        "subType": 1,
        "specificType": 1,
        "slots": [
            1,
            2
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": true,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 198,
        "attributes": [],
        "details": {
            "Type": "One-Handed Weapon",
            "Subtype": "Night Blade",
            "Rune Word": "Tir El",
            "Distribution": "Crafted",
            "Date": "April 25, 2021 - June 3, 2021",
            "Max Supply": "Unknown"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 3,
                    "quantity": 1
                },
                {
                    "id": 1,
                    "quantity": 1
                }
            ]
        },
        "description": "Made by Men, this blade is common but has minimal downsides.",
        "shortDescription": "",
        "visualDescription": "The most standard blade of silvery sheen, usually with a handguard and fuller.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 5,
                        "max": 15
                    },
                    {
                        "id": 2,
                        "name": "HarvestFee",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Fee",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "map": {}
                    }
                ],
                "perfection": [
                    15,
                    0,
                    null
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1001,
                        "name": "PhysicalDamage",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/physicaldamage",
                        "paramType1": "value",
                        "paramValue1": "1-30",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} physical damage"
                    },
                    {
                        "id": 1218,
                        "name": "IncreaseDamageOnKill",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamageonkill",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} damage on kill",
                        "min": 3,
                        "max": 5
                    },
                    {
                        "id": 1303,
                        "name": "RandomizedItemAttribute",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomizeditemattribute",
                        "paramType1": "randomattributeid",
                        "nature": "Mechanic",
                        "influences": "All",
                        "description": "{RandomAttributeID}.id.description",
                        "min": 1,
                        "max": 3
                    },
                    {
                        "id": 1222,
                        "name": "IncreaseMovementSpeedOnKill",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasemovementspeedonkill",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Movement",
                        "description": "{parameter1} movement speed on kill",
                        "min": 10,
                        "max": 10,
                        "value": 10
                    },
                    {
                        "id": 1011,
                        "name": "CriticalHitChance",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/criticalhitchance",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} critical hit chance",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    }
                ],
                "perfection": [
                    null,
                    5,
                    null,
                    10,
                    5
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2000,
                        "name": "IncreaseDamage",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {parameter2} damage",
                        "min": 12,
                        "max": 21
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 7,
                        "max": 9
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}"
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    }
                ],
                "perfection": [
                    21,
                    9,
                    null,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            490
        ],
        "materials": [
            1
        ],
        "category": "accessory"
    },
    {
        "id": 2,
        "name": "Fury",
        "icon": "https://rune.game/images/items/00002.png",
        "image": "https://dl.airtable.com/.attachments/c65b8688be512e02b41c66cda9a14441/b2011e75/00002.png?ts=1657415387&userId=usrf0GZYc5zCl9Cv7&cs=743a4e9dc76632cf",
        "value": "0",
        "type": 1,
        "subType": 1,
        "specificType": 2,
        "slots": [
            1,
            2
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": true,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 2205,
        "attributes": [],
        "details": {
            "Type": "One-Handed Weapon",
            "Subtype": "War Sword",
            "Rune Word": "Nef Eld Tir El",
            "Distribution": "Crafted",
            "Date": "April 25, 2021 - June 3, 2021"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 4,
                    "quantity": 1
                },
                {
                    "id": 2,
                    "quantity": 1
                },
                {
                    "id": 3,
                    "quantity": 1
                },
                {
                    "id": 1,
                    "quantity": 1
                }
            ]
        },
        "description": "Not much is known about this sword, other than the creator had gone mad.",
        "shortDescription": "",
        "visualDescription": "Both beautiful and frightening, this handle of this ornate long sword is wrapped with crimson cloth. The blade itself glows with faint traces of drifting red light.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 3,
                        "max": 7
                    },
                    {
                        "id": 4,
                        "name": "SendHarvestHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
                        "min": 20,
                        "max": 40
                    },
                    {
                        "id": 5,
                        "name": "BurnEntireHarvest",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/burnentireharvest",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Chance To Burn Harvest",
                        "min": 20,
                        "max": 40
                    }
                ],
                "perfection": [
                    7,
                    null,
                    20
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1004,
                        "name": "LightningDamage",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/lightningdamage",
                        "paramType1": "value",
                        "paramValue1": "1-10",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} lightning damage"
                    },
                    {
                        "id": 1222,
                        "name": "IncreaseMovementSpeedOnKill",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasemovementspeedonkill",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Movement",
                        "description": "{parameter1} movement speed on kill",
                        "min": 10,
                        "max": 30
                    },
                    {
                        "id": 1201,
                        "name": "LeaderDeathPenaltyIncrease",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/leaderdeathpenaltyincrease",
                        "paramType1": "percent",
                        "nature": "Debuff",
                        "influences": "Game",
                        "description": "{parameter1} increase to points lost on death when leading",
                        "min": 10,
                        "max": 30
                    },
                    {
                        "id": 1218,
                        "name": "IncreaseDamageOnKill",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamageonkill",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} damage on kill",
                        "min": 10,
                        "max": 10,
                        "value": 10
                    },
                    {
                        "id": 1204,
                        "name": "LeaderMaxHealthDecrease",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/leadermaxhealthdecrease",
                        "paramType1": "percent",
                        "nature": "Debuff",
                        "influences": "Defense",
                        "description": "{parameter1} less maximum health when leader",
                        "min": 10,
                        "max": 10,
                        "value": 10
                    },
                    {
                        "id": 1100,
                        "name": "KilledPlayerPenaltyIncrease",
                        "isEnabled": true,
                        "nexusLink": "https://nexus.rune.game/item-attribute/killedplayerpenaltyincrease",
                        "paramType1": "percent",
                        "paramValue1": "0-25",
                        "nature": "Buff",
                        "influences": "Game",
                        "description": "{parameter1} greater point penalty for defeated opponents.",
                        "min": 20,
                        "max": 20,
                        "value": 20
                    },
                    {
                        "id": 1011,
                        "name": "CriticalHitChance",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/criticalhitchance",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} critical hit chance",
                        "min": 3,
                        "max": 3,
                        "value": 3
                    },
                    {
                        "id": 1301,
                        "name": "BecomeBloodDrunk",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/becomeblooddrunk",
                        "paramType1": "percent",
                        "paramValue1": "1-1",
                        "nature": "Debuff",
                        "influences": "Movement",
                        "description": "Can become blood drunk.",
                        "min": 1,
                        "max": 1,
                        "value": 1
                    }
                ],
                "perfection": [
                    null,
                    30,
                    10,
                    10,
                    10,
                    20,
                    3,
                    1
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2000,
                        "name": "IncreaseDamage",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {parameter2} damage",
                        "min": 14,
                        "max": 18
                    },
                    {
                        "id": 2903,
                        "name": "IncreaseRankRewardBonus",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaserankrewardbonus",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} Increase to Rank Reward Bonuses",
                        "min": 0,
                        "max": 20
                    },
                    {
                        "id": 2302,
                        "name": "IncreaseEnergy",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseenergy",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} maximum energy",
                        "min": 5,
                        "max": 25
                    },
                    {
                        "id": 2949,
                        "name": "IncreaseOnHit",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseonhit",
                        "paramType1": "percent",
                        "paramType2": "percent",
                        "paramType3": "stat",
                        "paramValue1": "0-100",
                        "paramValue2": "1-200",
                        "description": "{parameter1} chance for {parameter2 {parameter3} on hit",
                        "min": 10,
                        "max": 10,
                        "value": 10
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 3213,
                        "name": "SelfEffectOnCondition",
                        "isEnabled": false,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/selfeffectoncondition",
                        "paramType1": "conditions",
                        "paramType2": "conditionparams",
                        "paramType3": "effect",
                        "map": {}
                    }
                ],
                "perfection": [
                    18,
                    20,
                    25,
                    null,
                    null,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            412
        ],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 3,
        "name": "Lorekeeper",
        "icon": "https://rune.game/images/items/00003.png",
        "image": "https://dl.airtable.com/.attachments/229540c9004fb883f73320a9a28c7173/f03020d1/00003.png?ts=1657415392&userId=usrf0GZYc5zCl9Cv7&cs=8e43d3ba360a065a",
        "value": "0",
        "type": 5,
        "subType": 10,
        "specificType": 3,
        "slots": [
            3
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": true,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 9,
        "attributes": [],
        "details": {
            "Type": "Helm",
            "Subtype": "Ancient Helm",
            "Rune Word": "Nef Tir",
            "Distribution": "Crafted",
            "Date": "April 25, 2021 - June 3, 2021"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 4,
                    "quantity": 1
                },
                {
                    "id": 3,
                    "quantity": 1
                }
            ]
        },
        "description": "Forged in the darkest hour of the Reckoning; used to seek out Worldstone shards and powerful energy sources.",
        "shortDescription": "",
        "visualDescription": "An intricate silvery helm, inlaid with glittering azure gems: built more for beauty than actual defense.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 1,
                        "max": 3
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 1,
                        "max": 3
                    },
                    {
                        "id": 7,
                        "name": "FindShard",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Chance To Find Worldstone Shard (Per Raid)",
                        "min": 100,
                        "max": 100,
                        "value": 100
                    }
                ],
                "perfection": [
                    3,
                    1,
                    100
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1060,
                        "name": "DamageResist",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} damage resist"
                    },
                    {
                        "id": 1102,
                        "name": "DeathPenaltyAvoid",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/deathpenaltyavoid",
                        "paramType1": "percent",
                        "paramValue1": "0-25",
                        "nature": "Buff",
                        "influences": "Game",
                        "description": "{parameter1} to avoid losing points on death.",
                        "min": 3,
                        "max": 5
                    },
                    {
                        "id": 1169,
                        "name": "ShardFindWin",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/shardfindwin",
                        "paramType1": "percent",
                        "nature": "Mechanic",
                        "influences": "Reward",
                        "description": "{parameter1} chance to find a worldstone shard on win",
                        "min": 2,
                        "max": 2,
                        "value": 2
                    },
                    {
                        "id": 1170,
                        "name": "ShardFindItem",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/shardfinditem",
                        "paramType1": "percent",
                        "nature": "Mechanic",
                        "influences": "Reward",
                        "description": "{parameter1} chance to find a worldstone shard on item pickup",
                        "min": 0.1,
                        "max": 0.1,
                        "value": 0.1
                    },
                    {
                        "id": 1165,
                        "name": "RandomRuneOnWin",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneonwin",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} of your win reward as a random rune",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    },
                    {
                        "id": 1158,
                        "name": "WinStreakMagicFindIncrease",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/winstreakmagicfindincrease",
                        "min": 3,
                        "max": 3,
                        "value": 3
                    }
                ],
                "perfection": [
                    null,
                    5,
                    null,
                    null,
                    5,
                    null
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 5,
                        "max": 7
                    },
                    {
                        "id": 2903,
                        "name": "IncreaseRankRewardBonus",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaserankrewardbonus",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} Increase to Rank Reward Bonuses",
                        "min": 5,
                        "max": 10
                    },
                    {
                        "id": 2302,
                        "name": "IncreaseEnergy",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseenergy",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} maximum energy",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 2900,
                        "name": "WinRewardsIncrease",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
                        "paramType1": "percent",
                        "paramType2": "rewardtype",
                        "paramValue1": "0-20",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} {parameter2} Rewards on Win",
                        "min": 0,
                        "max": 5
                    }
                ],
                "perfection": [
                    7,
                    10,
                    15,
                    null,
                    5
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            494
        ],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 4,
        "name": "Worldstone Shard",
        "icon": "https://rune.game/images/items/00004.png",
        "image": "https://dl.airtable.com/.attachments/9eab66558b3617afacbd471ac140ccb3/f766e001/Untitled-3.png?ts=1657415397&userId=usrf0GZYc5zCl9Cv7&cs=f6fbb3c927329813",
        "value": "0",
        "type": 18,
        "subType": 11,
        "specificType": 4,
        "slots": [],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": true,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": false,
        "isPublishable": true,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {
            "Type": "Ingredient",
            "Subtype": "Relic",
            "Distribution": "Claimable",
            "Date": "May 3, 2021 - Now"
        },
        "recipe": {
            "requirement": []
        },
        "description": "Relics from a broken time.",
        "shortDescription": "",
        "visualDescription": "These multifaceted red crystals are found scattered across Haerra.",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [
            6
        ],
        "category": "accessory"
    },
    {
        "id": 5,
        "name": "Flash",
        "icon": "https://rune.game/images/items/00005.png",
        "image": "https://dl.airtable.com/.attachments/693a7f417b9c82bd8392a542e9180744/90cd77d5/00005.png?ts=1657415399&userId=usrf0GZYc5zCl9Cv7&cs=89985679cf10a847",
        "value": "0",
        "type": 11,
        "subType": 12,
        "specificType": 5,
        "slots": [
            12
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": true,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 550,
        "attributes": [],
        "details": {
            "Type": "Boot",
            "Subtype": "Astral Greaves",
            "Rune Word": "Ith Eld Ral Tal",
            "Distribution": "Crafted",
            "Date": "May 17, 2021 - Now"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 6,
                    "quantity": 1
                },
                {
                    "id": 2,
                    "quantity": 1
                },
                {
                    "id": 8,
                    "quantity": 1
                },
                {
                    "id": 7,
                    "quantity": 1
                }
            ]
        },
        "description": "Forged from glittering blue metal, these greaves grant their wearer miraculous speed.",
        "shortDescription": "",
        "visualDescription": "These gold-accented greaves are made from an otherworldly azure metal, which is incredibly strong yet lighter than a feather.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 1,
                        "max": 10
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 1,
                        "max": 5
                    },
                    {
                        "id": 4,
                        "name": "SendHarvestHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
                        "min": 10,
                        "max": 20
                    }
                ],
                "perfection": [
                    10,
                    1,
                    null
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1030,
                        "name": "MovementSpeedIncrease",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/movementspeedincrease",
                        "paramType1": "percent",
                        "paramValue1": "1-10",
                        "nature": "Buff",
                        "influences": "Movement",
                        "description": "{parameter1} faster movement."
                    },
                    {
                        "id": 1222,
                        "name": "IncreaseMovementSpeedOnKill",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasemovementspeedonkill",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Movement",
                        "description": "{parameter1} movement speed on kill",
                        "min": 1,
                        "max": 5
                    },
                    {
                        "id": 1223,
                        "name": "EvolveMovementBurst",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/evolvemovementburst",
                        "paramType1": "percent",
                        "paramValue1": "0-25",
                        "nature": "Mechanic",
                        "influences": "Movement",
                        "description": "{parameter1} temporary increase to movement speed on evolve",
                        "min": 5,
                        "max": 15
                    },
                    {
                        "id": 1060,
                        "name": "DamageResist",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} damage resist",
                        "min": 2,
                        "max": 2,
                        "value": 2
                    },
                    {
                        "id": 1103,
                        "name": "CriticalPointsChanceIncrease",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/criticalpointschanceincrease",
                        "paramType1": "percent",
                        "paramValue1": "0-25",
                        "nature": "Mechanic",
                        "influences": "Game",
                        "description": "{parameter1} chance to receive critical bonus points.",
                        "min": 2,
                        "max": 2,
                        "value": 2
                    }
                ],
                "perfection": [
                    null,
                    5,
                    null,
                    2,
                    null
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 4,
                        "max": 10
                    },
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 2,
                        "max": 5
                    },
                    {
                        "id": 2304,
                        "name": "IncreaseResist",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseresist",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} resistance",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 3205,
                        "name": "ChanceOnGetHit",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/chanceongethit",
                        "paramType1": "percent",
                        "paramType2": "skill",
                        "paramValue1": "0-100",
                        "paramValue2": "400-1000",
                        "nature": "Buff",
                        "description": "{parameter1} {parameter2} chance when hit",
                        "min": 2,
                        "max": 10
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    }
                ],
                "perfection": [
                    10,
                    5,
                    5,
                    10,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            480
        ],
        "materials": [
            18,
            34
        ],
        "category": "accessory"
    },
    {
        "id": 6,
        "name": "Titan",
        "icon": "https://rune.game/images/items/00006.png",
        "image": "https://dl.airtable.com/.attachments/1d8fc14204bd0d3ea642017b9162d988/7501f4c1/00006.png?ts=1657415404&userId=usrf0GZYc5zCl9Cv7&cs=167f7295d54c7a1d",
        "value": "0",
        "type": 7,
        "subType": 13,
        "specificType": 6,
        "slots": [
            18
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": true,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 88,
        "attributes": [],
        "details": {
            "Type": "Body Armor",
            "Subtype": "Templar Forge",
            "Rune Word": "Tal Ort Thul Eld Nef",
            "Distribution": "Crafted",
            "Date": "May 24, 2021 - Now"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 7,
                    "quantity": 1
                },
                {
                    "id": 9,
                    "quantity": 1
                },
                {
                    "id": 10,
                    "quantity": 1
                },
                {
                    "id": 2,
                    "quantity": 1
                },
                {
                    "id": 4,
                    "quantity": 1
                }
            ]
        },
        "description": "Crafted from astra-infused ingots, this armor absorbs blows that would obliterate any normal warrior.",
        "shortDescription": "",
        "visualDescription": "Forged from lightweight material and imbued with potent astra energy, this breastplate gleams with a pale radiance.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 2,
                        "max": 5
                    },
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 10,
                        "max": 20
                    },
                    {
                        "id": 11,
                        "name": "RandomRuneExchange",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Random Rune Exchange",
                        "min": 1,
                        "max": 2
                    }
                ],
                "perfection": [
                    5,
                    20,
                    null
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1060,
                        "name": "DamageResist",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} damage resist"
                    },
                    {
                        "id": 1219,
                        "name": "IncreaseHealthOnKill",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasehealthonkill",
                        "paramType1": "value",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} health on kill.",
                        "min": 10,
                        "max": 20
                    },
                    {
                        "id": 1303,
                        "name": "RandomizedItemAttribute",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomizeditemattribute",
                        "paramType1": "randomattributeid",
                        "nature": "Mechanic",
                        "influences": "All",
                        "description": "{RandomAttributeID}.id.description",
                        "min": 1,
                        "max": 2
                    },
                    {
                        "id": 1150,
                        "name": "WinRewardsIncrease",
                        "isEnabled": true,
                        "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
                        "paramType1": "percent",
                        "paramValue1": "0-20",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} win bonus",
                        "min": 3,
                        "max": 3,
                        "value": 3
                    },
                    {
                        "id": 1104,
                        "name": "CriticalPointsMultiplierIncrease",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/criticalpointsmultiplierincrease",
                        "paramType1": "percent",
                        "paramValue1": "0-35",
                        "nature": "Buff",
                        "influences": "Game",
                        "description": "{parameter1} increase to critical bonus.",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    }
                ],
                "perfection": [
                    null,
                    20,
                    null,
                    3,
                    5
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2300,
                        "name": "IncreaseHealth",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasehealth",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} maximum health",
                        "min": 5,
                        "max": 8
                    },
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 10,
                        "max": 20
                    },
                    {
                        "id": 2304,
                        "name": "IncreaseResist",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseresist",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} resistance",
                        "min": 5,
                        "max": 10
                    },
                    {
                        "id": 3205,
                        "name": "ChanceOnGetHit",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/chanceongethit",
                        "paramType1": "percent",
                        "paramType2": "skill",
                        "paramValue1": "0-100",
                        "paramValue2": "400-1000",
                        "nature": "Buff",
                        "description": "{parameter1} {parameter2} chance when hit",
                        "min": 3,
                        "max": 4
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    }
                ],
                "perfection": [
                    8,
                    20,
                    10,
                    4,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            465
        ],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 7,
        "name": "Smoke",
        "icon": "https://rune.game/images/items/00007.png",
        "image": "https://dl.airtable.com/.attachments/6402ec0b1b5fb7913ef336d62c0d38df/21df471d/00007.png?ts=1657415408&userId=usrf0GZYc5zCl9Cv7&cs=c0a4a6206805ad1d",
        "value": "0",
        "type": 9,
        "subType": 15,
        "specificType": 7,
        "slots": [
            9
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": true,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 380,
        "attributes": [],
        "details": {
            "Type": "Glove",
            "Subtype": "Shadow Wraps",
            "Rune Word": "Thul Ith Ort Ral",
            "Distribution": "Crafted",
            "Date": "May 25, 2021 - June 25, 2021"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 10,
                    "quantity": 1
                },
                {
                    "id": 6,
                    "quantity": 1
                },
                {
                    "id": 9,
                    "quantity": 1
                },
                {
                    "id": 8,
                    "quantity": 1
                }
            ]
        },
        "description": "These handwraps have an unknown origin and emit a dark aura.",
        "shortDescription": "",
        "visualDescription": "Though these handwraps appear simple at first glance, a closer look would reveal faint black smoke snaking up from the cloth.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 1,
                        "max": 5
                    },
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 25,
                        "max": 100
                    },
                    {
                        "id": 9,
                        "name": "UnstakeLocked",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unstakelocked",
                        "paramType1": "percent",
                        "paramValue1": "100-100",
                        "nature": "Debuff",
                        "description": "Unstake Locked Until Completion",
                        "min": 100,
                        "max": 100,
                        "value": 100
                    }
                ],
                "perfection": [
                    5,
                    100,
                    100
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1060,
                        "name": "DamageResist",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} damage resist"
                    },
                    {
                        "id": 1102,
                        "name": "DeathPenaltyAvoid",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/deathpenaltyavoid",
                        "paramType1": "percent",
                        "paramValue1": "0-25",
                        "nature": "Buff",
                        "influences": "Game",
                        "description": "{parameter1} to avoid losing points on death.",
                        "min": 1,
                        "max": 25
                    },
                    {
                        "id": 1167,
                        "name": "RunewordFindWin",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/runewordfindwin",
                        "paramType1": "percent",
                        "nature": "Mechanic",
                        "influences": "Reward",
                        "description": "{parameter1} chance to find a random runeword on win",
                        "min": 1,
                        "max": 1,
                        "value": 1
                    },
                    {
                        "id": 1173,
                        "name": "StealVictimRewardsChance",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/stealvictimrewardschance",
                        "paramType1": "percent",
                        "paramValue1": "0-10",
                        "nature": "Mechanic",
                        "influences": "Reward",
                        "description": "{parameter1} chance to take a portion of a killed player's rewards for the round",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    }
                ],
                "perfection": [
                    null,
                    25,
                    null,
                    null,
                    5
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 7,
                        "max": 10
                    },
                    {
                        "id": 2903,
                        "name": "IncreaseRankRewardBonus",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaserankrewardbonus",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} Increase to Rank Reward Bonuses",
                        "min": 0,
                        "max": 25
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 2602,
                        "name": "ExtraProjectiles",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/extraprojectiles",
                        "paramType1": "percent",
                        "paramType2": "value",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} chance of {parameter2} extra projectile(s)"
                    },
                    {
                        "id": 2309,
                        "name": "ReduceCost",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/reducecost",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": " -{parameter1} energy cost for skills",
                        "min": 5,
                        "max": 8
                    }
                ],
                "perfection": [
                    10,
                    25,
                    null,
                    null,
                    8
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            475
        ],
        "materials": [
            32
        ],
        "category": "accessory"
    },
    {
        "id": 10,
        "name": "Glory",
        "icon": "https://rune.game/images/items/00010.png",
        "image": "https://dl.airtable.com/.attachments/331c4d73d97137d13d6c97e8ec34611a/23d20f11/00010.png?ts=1657415412&userId=usrf0GZYc5zCl9Cv7&cs=8bef9c27826ba11d",
        "value": "0",
        "type": 2,
        "subType": 19,
        "specificType": 8,
        "slots": [
            1
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 2046,
        "attributes": [],
        "details": {
            "Type": "Two-Handed Weapon",
            "Subtype": "Cloudstrike Sword",
            "Rune Word": "Sol Ral Ith Eld Ort",
            "Distribution": "Crafted",
            "Date": "June 1, 2021 - Now"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 12,
                    "quantity": 1
                },
                {
                    "id": 8,
                    "quantity": 1
                },
                {
                    "id": 6,
                    "quantity": 1
                },
                {
                    "id": 2,
                    "quantity": 1
                },
                {
                    "id": 9,
                    "quantity": 1
                }
            ]
        },
        "description": "Crafted with the finest vira materials, this cloudstrike sword is imbued with the power of wind.",
        "shortDescription": "",
        "visualDescription": "Heavily detailed with gold accents and sparkling sapphires, the steel of this blade shimmers so brilliantly that it appears to glow in sunlight.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 10,
                        "max": 40
                    },
                    {
                        "id": 4,
                        "name": "SendHarvestHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
                        "min": 15,
                        "max": 15,
                        "value": 15
                    },
                    {
                        "id": 7,
                        "name": "FindShard",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Chance To Find Worldstone Shard (Per Raid)",
                        "min": 15,
                        "max": 15,
                        "value": 15
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 2,
                        "name": "HarvestFee",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Fee",
                        "min": 5,
                        "max": 15
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "min": 6,
                        "max": 8,
                        "map": {
                            "6": "TAL",
                            "7": "RAL",
                            "8": "ORT"
                        }
                    },
                    {
                        "id": 39,
                        "name": "AddSkill",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
                        "paramType1": "skill",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Use Skill: {parameter1} (SOON)",
                        "map": {}
                    },
                    {
                        "id": 21,
                        "name": "SpecificClass",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
                        "paramType1": "classId",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Class Only ({parameter1})",
                        "min": 1,
                        "max": 1,
                        "value": 1,
                        "map": {
                            "1": "Barbarian"
                        }
                    }
                ],
                "perfection": [
                    40,
                    null,
                    15,
                    10,
                    5,
                    null,
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1001,
                        "name": "PhysicalDamage",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/physicaldamage",
                        "paramType1": "value",
                        "paramValue1": "1-30",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} physical damage"
                    },
                    {
                        "id": 1222,
                        "name": "IncreaseMovementSpeedOnKill",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasemovementspeedonkill",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Movement",
                        "description": "{parameter1} movement speed on kill",
                        "min": 15,
                        "max": 15,
                        "value": 15
                    },
                    {
                        "id": 1169,
                        "name": "ShardFindWin",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/shardfindwin",
                        "paramType1": "percent",
                        "nature": "Mechanic",
                        "influences": "Reward",
                        "description": "{parameter1} chance to find a worldstone shard on win",
                        "min": 1,
                        "max": 1,
                        "value": 1
                    },
                    {
                        "id": 1300,
                        "name": "MovementSpeedDecrease",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/movementspeeddecrease",
                        "paramType1": "percent",
                        "nature": "Debuff",
                        "influences": "Movement",
                        "description": "{parameter1} slower movement",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 1218,
                        "name": "IncreaseDamageOnKill",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamageonkill",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} damage on kill",
                        "min": 5,
                        "max": 15
                    },
                    {
                        "id": 1325,
                        "name": "SkillUnlock",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/skillunlock",
                        "paramType1": "skill",
                        "nature": "Mechanic",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 1327,
                        "name": "SkillMod",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/skillmod",
                        "paramType1": "value",
                        "paramValue1": "0-5",
                        "nature": "Buff",
                        "influences": "Skill",
                        "min": 1,
                        "max": 3
                    },
                    {
                        "id": 1326,
                        "name": "ClassRequirement",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
                        "paramType1": "class",
                        "nature": "Requirement",
                        "description": "{parameter1} required"
                    },
                    {
                        "id": 1165,
                        "name": "RandomRuneOnWin",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneonwin",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} of your win reward as a random rune",
                        "min": 3,
                        "max": 3,
                        "value": 3
                    }
                ],
                "perfection": [
                    null,
                    15,
                    null,
                    0,
                    15,
                    null,
                    3,
                    null,
                    3
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2000,
                        "name": "IncreaseDamage",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {parameter2} damage",
                        "min": 15,
                        "max": 30
                    },
                    {
                        "id": 2601,
                        "name": "IncreaseStatSkill",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestatskill",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "skill",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} to {parameter2} for {param3}",
                        "min": 12,
                        "max": 15
                    },
                    {
                        "id": 2949,
                        "name": "IncreaseOnHit",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseonhit",
                        "paramType1": "percent",
                        "paramType2": "percent",
                        "paramType3": "stat",
                        "paramValue1": "0-100",
                        "paramValue2": "1-200",
                        "description": "{parameter1} chance for {parameter2 {parameter3} on hit"
                    },
                    {
                        "id": 3213,
                        "name": "SelfEffectOnCondition",
                        "isEnabled": false,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/selfeffectoncondition",
                        "paramType1": "conditions",
                        "paramType2": "conditionparams",
                        "paramType3": "effect",
                        "map": {}
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 5,
                        "max": 15
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 3803,
                        "name": "UnlockSkillMod",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskillmod",
                        "paramType1": "skill",
                        "paramType2": "mod",
                        "nature": "Buff",
                        "influences": "Skill",
                        "map": {}
                    },
                    {
                        "id": 1326,
                        "name": "ClassRequirement",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
                        "paramType1": "class",
                        "nature": "Requirement",
                        "description": "{parameter1} required"
                    }
                ],
                "perfection": [
                    30,
                    15,
                    null,
                    null,
                    15,
                    null,
                    null,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            409
        ],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 11,
        "name": "Grace",
        "icon": "https://rune.game/images/items/00011.png",
        "image": "https://dl.airtable.com/.attachments/4d646c400b38f8929f90245afff71e52/94f0b650/00011.png?ts=1657415416&userId=usrf0GZYc5zCl9Cv7&cs=d507271a20e38f2b",
        "value": "0",
        "type": 2,
        "subType": 8,
        "specificType": 9,
        "slots": [
            1
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 2046,
        "attributes": [],
        "details": {
            "Type": "Two-Handed Weapon",
            "Subtype": "Sage Bow",
            "Rune Word": "Sol Ith Nef El Ort",
            "Distribution": "Crafted",
            "Date": "June 1, 2021 - Now"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 12,
                    "quantity": 1
                },
                {
                    "id": 6,
                    "quantity": 1
                },
                {
                    "id": 4,
                    "quantity": 1
                },
                {
                    "id": 1,
                    "quantity": 1
                },
                {
                    "id": 9,
                    "quantity": 1
                }
            ]
        },
        "description": "Painstakingly constructed from druidic materials, this sage bow is imbued to seek out what is hidden.",
        "shortDescription": "",
        "visualDescription": "This longbow is intricately designed with bronze gilding, silvery strings, and colored yews weaved in beautiful knots.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 10,
                        "max": 40
                    },
                    {
                        "id": 4,
                        "name": "SendHarvestHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
                        "min": 25,
                        "max": 25,
                        "value": 25
                    },
                    {
                        "id": 7,
                        "name": "FindShard",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Chance To Find Worldstone Shard (Per Raid)",
                        "min": 10,
                        "max": 10,
                        "value": 10
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 2,
                        "name": "HarvestFee",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Fee",
                        "min": 5,
                        "max": 15
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "min": 8,
                        "max": 10,
                        "map": {
                            "8": "ORT",
                            "9": "THUL",
                            "10": "AMN"
                        }
                    },
                    {
                        "id": 39,
                        "name": "AddSkill",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
                        "paramType1": "skill",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Use Skill: {parameter1} (SOON)",
                        "map": {}
                    },
                    {
                        "id": 21,
                        "name": "SpecificClass",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
                        "paramType1": "classId",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Class Only ({parameter1})",
                        "min": 3,
                        "max": 3,
                        "value": 3,
                        "map": {
                            "3": "Amazon"
                        }
                    }
                ],
                "perfection": [
                    40,
                    null,
                    10,
                    10,
                    5,
                    null,
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1002,
                        "name": "PoisonDamage",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/poisondamage",
                        "paramType1": "value",
                        "paramValue1": "1-20",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} poison damage"
                    },
                    {
                        "id": 1222,
                        "name": "IncreaseMovementSpeedOnKill",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasemovementspeedonkill",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Movement",
                        "description": "{parameter1} movement speed on kill",
                        "min": 15,
                        "max": 15,
                        "value": 15
                    },
                    {
                        "id": 1169,
                        "name": "ShardFindWin",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/shardfindwin",
                        "paramType1": "percent",
                        "nature": "Mechanic",
                        "influences": "Reward",
                        "description": "{parameter1} chance to find a worldstone shard on win",
                        "min": 1,
                        "max": 1,
                        "value": 1
                    },
                    {
                        "id": 1025,
                        "name": "PoisonChance",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/poisonchance",
                        "paramType1": "value",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} poison chance",
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 1100,
                        "name": "KilledPlayerPenaltyIncrease",
                        "isEnabled": true,
                        "nexusLink": "https://nexus.rune.game/item-attribute/killedplayerpenaltyincrease",
                        "paramType1": "percent",
                        "paramValue1": "0-25",
                        "nature": "Buff",
                        "influences": "Game",
                        "description": "{parameter1} greater point penalty for defeated opponents.",
                        "min": 5,
                        "max": 15
                    },
                    {
                        "id": 1327,
                        "name": "SkillMod",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/skillmod",
                        "paramType1": "value",
                        "paramValue1": "0-5",
                        "nature": "Buff",
                        "influences": "Skill",
                        "min": 1,
                        "max": 3
                    },
                    {
                        "id": 1325,
                        "name": "SkillUnlock",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/skillunlock",
                        "paramType1": "skill",
                        "nature": "Mechanic",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 1326,
                        "name": "ClassRequirement",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
                        "paramType1": "class",
                        "nature": "Requirement",
                        "description": "{parameter1} required"
                    }
                ],
                "perfection": [
                    null,
                    15,
                    null,
                    10,
                    15,
                    3,
                    null,
                    null
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2000,
                        "name": "IncreaseDamage",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {parameter2} damage",
                        "min": 10,
                        "max": 25
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 7,
                        "max": 7,
                        "value": 7
                    },
                    {
                        "id": 2602,
                        "name": "ExtraProjectiles",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/extraprojectiles",
                        "paramType1": "percent",
                        "paramType2": "value",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} chance of {parameter2} extra projectile(s)"
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 2373,
                        "name": "IncreaseRandomStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaserandomstat",
                        "paramType1": "stats",
                        "paramType2": "percent",
                        "map": {}
                    },
                    {
                        "id": 3802,
                        "name": "ClassRequirement",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
                        "paramType1": "class",
                        "nature": "Requirement",
                        "influences": "Skill",
                        "description": "{parameter1} required"
                    },
                    {
                        "id": 2914,
                        "name": "DoublePickupChance",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/doublepickupchance",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} chance to double an item pickup",
                        "min": 0,
                        "max": 2
                    },
                    {
                        "id": 2900,
                        "name": "WinRewardsIncrease",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
                        "paramType1": "percent",
                        "paramType2": "rewardtype",
                        "paramValue1": "0-20",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} {parameter2} Rewards on Win",
                        "min": 0,
                        "max": 20
                    }
                ],
                "perfection": [
                    25,
                    7,
                    null,
                    null,
                    null,
                    null,
                    2,
                    20
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            457,
            410,
            456
        ],
        "materials": [
            9
        ],
        "category": "accessory"
    },
    {
        "id": 12,
        "name": "Genesis",
        "icon": "https://rune.game/images/items/00012.png",
        "image": "https://dl.airtable.com/.attachments/3d0af73538086214f8e22ed706852ab6/33b7c4ac/00012.png?ts=1657415420&userId=usrf0GZYc5zCl9Cv7&cs=a0127474c2d82f31",
        "value": "0",
        "type": 1,
        "subType": 5,
        "specificType": 10,
        "slots": [
            1,
            2
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 2232,
        "attributes": [],
        "details": {
            "Type": "One-Handed Weapon",
            "Subtype": "Dimensional Dagger",
            "Rune Word": "Sol Thul Amn Ort",
            "Distribution": "Crafted",
            "Date": "June 1, 2021 - Now"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 12,
                    "quantity": 1
                },
                {
                    "id": 10,
                    "quantity": 1
                },
                {
                    "id": 11,
                    "quantity": 1
                },
                {
                    "id": 9,
                    "quantity": 1
                }
            ]
        },
        "description": "Originally a faintly magical sacrifical tool, this dimensional dagger was locked away when suffused with twisted sacrificial power.",
        "shortDescription": "",
        "visualDescription": "With a white dragon-bone hilt, a purple gem that surges with energy, and a shimmering translucent blade, Genesis is truly a wondrous and odd dagger.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 2,
                        "max": 5
                    },
                    {
                        "id": 4,
                        "name": "SendHarvestHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
                        "min": 10,
                        "max": 40
                    },
                    {
                        "id": 11,
                        "name": "RandomRuneExchange",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Random Rune Exchange",
                        "min": 1,
                        "max": 2
                    },
                    {
                        "id": 2,
                        "name": "HarvestFee",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Fee",
                        "min": 2,
                        "max": 10
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "min": 9,
                        "max": 11,
                        "map": {
                            "9": "THUL",
                            "10": "AMN",
                            "11": "SOL"
                        }
                    },
                    {
                        "id": 39,
                        "name": "AddSkill",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
                        "paramType1": "skill",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Use Skill: {parameter1} (SOON)",
                        "map": {}
                    },
                    {
                        "id": 21,
                        "name": "SpecificClass",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
                        "paramType1": "classId",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Class Only ({parameter1})",
                        "map": {}
                    }
                ],
                "perfection": [
                    5,
                    null,
                    null,
                    2,
                    null,
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1001,
                        "name": "PhysicalDamage",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/physicaldamage",
                        "paramType1": "value",
                        "paramValue1": "1-30",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} physical damage"
                    },
                    {
                        "id": 1019,
                        "name": "LifeSteal",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/lifesteal",
                        "paramType1": "percent",
                        "paramValue1": "1-30",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} life steal",
                        "min": 20,
                        "max": 30
                    },
                    {
                        "id": 1303,
                        "name": "RandomizedItemAttribute",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomizeditemattribute",
                        "paramType1": "randomattributeid",
                        "nature": "Mechanic",
                        "influences": "All",
                        "description": "{RandomAttributeID}.id.description",
                        "min": 0,
                        "max": 1
                    },
                    {
                        "id": 1108,
                        "name": "OrbPickupDamageIncrease",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/orbpickupdamageincrease",
                        "description": "{parameter1} damage increase on orb pickup",
                        "min": 2,
                        "max": 10
                    },
                    {
                        "id": 1327,
                        "name": "SkillMod",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/skillmod",
                        "paramType1": "value",
                        "paramValue1": "0-5",
                        "nature": "Buff",
                        "influences": "Skill",
                        "min": 1,
                        "max": 3
                    },
                    {
                        "id": 1325,
                        "name": "SkillUnlock",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/skillunlock",
                        "paramType1": "skill",
                        "nature": "Mechanic",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 1326,
                        "name": "ClassRequirement",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
                        "paramType1": "class",
                        "nature": "Requirement",
                        "description": "{parameter1} required"
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    }
                ],
                "perfection": [
                    null,
                    30,
                    null,
                    null,
                    3,
                    null,
                    null,
                    5
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2000,
                        "name": "IncreaseDamage",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {parameter2} damage",
                        "min": 10,
                        "max": 14
                    },
                    {
                        "id": 1019,
                        "name": "LifeSteal",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/lifesteal",
                        "paramType1": "percent",
                        "paramValue1": "1-30",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} life steal",
                        "min": 10,
                        "max": 20
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}"
                    },
                    {
                        "id": 2302,
                        "name": "IncreaseEnergy",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseenergy",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} maximum energy",
                        "min": 2,
                        "max": 10
                    },
                    {
                        "id": 2010,
                        "name": "DamageTypeExchange",
                        "isEnabled": false,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagetypeexchange",
                        "paramType1": "percent",
                        "paramType2": "from",
                        "paramType3": "to",
                        "paramValue1": "0-100"
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 3802,
                        "name": "ClassRequirement",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
                        "paramType1": "class",
                        "nature": "Requirement",
                        "influences": "Skill",
                        "description": "{parameter1} required"
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    }
                ],
                "perfection": [
                    14,
                    20,
                    null,
                    10,
                    null,
                    null,
                    null,
                    5
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            411,
            455
        ],
        "materials": [
            3,
            7
        ],
        "category": "accessory"
    },
    {
        "id": 13,
        "name": "Destiny",
        "icon": "https://rune.game/images/items/00013.png",
        "image": "https://dl.airtable.com/.attachments/354746ccb047c8be47634cb2776661fd/f21110e7/00013.png?ts=1657415424&userId=usrf0GZYc5zCl9Cv7&cs=16719ea876390cf1",
        "value": "0",
        "type": 2,
        "subType": 7,
        "specificType": 11,
        "slots": [
            1
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 2046,
        "attributes": [],
        "details": {
            "Type": "Two-Handed Weapon",
            "Subtype": "Chrono Staff",
            "Rune Word": "Sol Amn Ort Thul Ral",
            "Distribution": "Crafted",
            "Date": "June 1, 2021 - Now"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 12,
                    "quantity": 1
                },
                {
                    "id": 11,
                    "quantity": 1
                },
                {
                    "id": 9,
                    "quantity": 1
                },
                {
                    "id": 10,
                    "quantity": 1
                },
                {
                    "id": 8,
                    "quantity": 1
                }
            ]
        },
        "description": "A mysterious staff with no defined origin, imbued with the power of time.",
        "shortDescription": "",
        "visualDescription": "Destiny is a chrome-encrusted ebony staff, crowned with an incredible amethyst. If eyed closely, a slightly glimmering star can be seen within the amethyst.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 10,
                        "max": 40
                    },
                    {
                        "id": 4,
                        "name": "SendHarvestHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
                        "min": 15,
                        "max": 15,
                        "value": 15
                    },
                    {
                        "id": 7,
                        "name": "FindShard",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Chance To Find Worldstone Shard (Per Raid)",
                        "min": 15,
                        "max": 15,
                        "value": 15
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 2,
                        "name": "HarvestFee",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Fee",
                        "min": 5,
                        "max": 15
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "min": 9,
                        "max": 11,
                        "map": {
                            "9": "THUL",
                            "10": "AMN",
                            "11": "SOL"
                        }
                    },
                    {
                        "id": 39,
                        "name": "AddSkill",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
                        "paramType1": "skill",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Use Skill: {parameter1} (SOON)",
                        "map": {}
                    },
                    {
                        "id": 21,
                        "name": "SpecificClass",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
                        "paramType1": "classId",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Class Only ({parameter1})",
                        "min": 2,
                        "max": 2,
                        "value": 2,
                        "map": {
                            "2": "Mage"
                        }
                    }
                ],
                "perfection": [
                    40,
                    null,
                    15,
                    10,
                    5,
                    null,
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1007,
                        "name": "ArcaneDamage",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/arcanedamage",
                        "paramType1": "value",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} arcane damage"
                    },
                    {
                        "id": 1022,
                        "name": "SlowChance",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/slowchance",
                        "paramType1": "value",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} slow chance",
                        "min": 15,
                        "max": 15,
                        "value": 15
                    },
                    {
                        "id": 1218,
                        "name": "IncreaseDamageOnKill",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamageonkill",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} damage on kill",
                        "min": 15,
                        "max": 15,
                        "value": 15
                    },
                    {
                        "id": 1237,
                        "name": "CastOnKillChance",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/castonkillchance",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Skill",
                        "description": "{parameter1} cast {CastOnKillEffect.Value} {CastOnKillType.Value} on kill",
                        "min": 5,
                        "max": 15
                    },
                    {
                        "id": 1201,
                        "name": "LeaderDeathPenaltyIncrease",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/leaderdeathpenaltyincrease",
                        "paramType1": "percent",
                        "nature": "Debuff",
                        "influences": "Game",
                        "description": "{parameter1} increase to points lost on death when leading",
                        "min": 5,
                        "max": 15
                    },
                    {
                        "id": 1327,
                        "name": "SkillMod",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/skillmod",
                        "paramType1": "value",
                        "paramValue1": "0-5",
                        "nature": "Buff",
                        "influences": "Skill",
                        "min": 1,
                        "max": 3
                    },
                    {
                        "id": 1325,
                        "name": "SkillUnlock",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/skillunlock",
                        "paramType1": "skill",
                        "nature": "Mechanic",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 1326,
                        "name": "ClassRequirement",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
                        "paramType1": "class",
                        "nature": "Requirement",
                        "description": "{parameter1} required"
                    },
                    {
                        "id": 1238,
                        "name": "CastOnKillType",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/castonkilltype",
                        "paramType1": "spelltype",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "min": 3,
                        "max": 3,
                        "value": 3
                    },
                    {
                        "id": 1239,
                        "name": "CastOnKillEffect",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/castonkilleffect",
                        "paramType1": "effect",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "min": 11,
                        "max": 11,
                        "value": 11
                    }
                ],
                "perfection": [
                    null,
                    15,
                    15,
                    15,
                    5,
                    3,
                    null,
                    null,
                    null,
                    null
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2000,
                        "name": "IncreaseDamage",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {parameter2} damage",
                        "min": 5,
                        "max": 20
                    },
                    {
                        "id": 4156,
                        "name": "EffectChanceOnHit",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/effectchanceonhit",
                        "paramType1": "percent",
                        "paramType2": "effect",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} chance of {parameter2} on hit.",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    },
                    {
                        "id": 2002,
                        "name": "IncreaseDamageOverTime",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamageovertime",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} increase to {parameter2} damage over time",
                        "min": 10,
                        "max": 10,
                        "value": 10
                    },
                    {
                        "id": 2302,
                        "name": "IncreaseEnergy",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseenergy",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} maximum energy",
                        "min": 15,
                        "max": 25
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 2,
                        "max": 12
                    },
                    {
                        "id": 1325,
                        "name": "SkillUnlock",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/skillunlock",
                        "paramType1": "skill",
                        "nature": "Mechanic",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 1326,
                        "name": "ClassRequirement",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
                        "paramType1": "class",
                        "nature": "Requirement",
                        "description": "{parameter1} required"
                    }
                ],
                "perfection": [
                    20,
                    5,
                    10,
                    25,
                    12,
                    null,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            429,
            447,
            445
        ],
        "materials": [
            7
        ],
        "category": "accessory"
    },
    {
        "id": 14,
        "name": "Wrath",
        "icon": "https://rune.game/images/items/00014.png",
        "image": "https://dl.airtable.com/.attachments/08afb500bafad147b184b5f96cc595b4/bab4e37f/00014.png?ts=1657415428&userId=usrf0GZYc5zCl9Cv7&cs=fe9779c0a2880178",
        "value": "0",
        "type": 1,
        "subType": 6,
        "specificType": 172,
        "slots": [
            1,
            2
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1620,
        "attributes": [],
        "details": {
            "Type": "One-Handed Weapon",
            "Subtype": "Unknown Claw",
            "Rune Word": "Shael Ith Dol Nef Sol",
            "Distribution": "Crafted",
            "Date": "June 11, 2021 - Now"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 13,
                    "quantity": 1
                },
                {
                    "id": 6,
                    "quantity": 1
                },
                {
                    "id": 14,
                    "quantity": 1
                },
                {
                    "id": 4,
                    "quantity": 1
                },
                {
                    "id": 12,
                    "quantity": 1
                }
            ]
        },
        "description": "With seamless claws of unknown material and origin, these royal vira appear vicious despite their beauty.",
        "shortDescription": "",
        "visualDescription": "These strange, intricate gauntlets are entirely gold-plated, save for the central gem and claws affixed to the finger joints. The gems and claws are made of the same material: a shimmering purple-blue metal with a gem-like quality.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 2,
                        "max": 7
                    },
                    {
                        "id": 19,
                        "name": "CreateRandomRuneword",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/createrandomruneword",
                        "paramType1": "chance",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Chance To Create Random Runeword",
                        "min": 1,
                        "max": 2
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 1,
                        "max": 15
                    },
                    {
                        "id": 2,
                        "name": "HarvestFee",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Fee",
                        "min": 2,
                        "max": 10
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "min": 11,
                        "max": 14,
                        "map": {
                            "11": "SOL",
                            "12": "SHAEL",
                            "13": "DOL",
                            "14": "HEL"
                        }
                    },
                    {
                        "id": 39,
                        "name": "AddSkill",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
                        "paramType1": "skill",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Use Skill: {parameter1} (SOON)",
                        "map": {}
                    },
                    {
                        "id": 21,
                        "name": "SpecificClass",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
                        "paramType1": "classId",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Class Only ({parameter1})",
                        "map": {}
                    }
                ],
                "perfection": [
                    7,
                    2,
                    15,
                    2,
                    null,
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1006,
                        "name": "RendingDamage",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/rendingdamage",
                        "paramType1": "value",
                        "paramValue1": "1-25",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} rending damage"
                    },
                    {
                        "id": 1167,
                        "name": "RunewordFindWin",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/runewordfindwin",
                        "paramType1": "percent",
                        "nature": "Mechanic",
                        "influences": "Reward",
                        "description": "{parameter1} chance to find a random runeword on win",
                        "min": 0,
                        "max": 1
                    },
                    {
                        "id": 1011,
                        "name": "CriticalHitChance",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/criticalhitchance",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} critical hit chance",
                        "min": 1,
                        "max": 15
                    },
                    {
                        "id": 1303,
                        "name": "RandomizedItemAttribute",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomizeditemattribute",
                        "paramType1": "randomattributeid",
                        "nature": "Mechanic",
                        "influences": "All",
                        "description": "{RandomAttributeID}.id.description",
                        "min": 1,
                        "max": 4
                    },
                    {
                        "id": 1030,
                        "name": "MovementSpeedIncrease",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/movementspeedincrease",
                        "paramType1": "percent",
                        "paramValue1": "1-10",
                        "nature": "Buff",
                        "influences": "Movement",
                        "description": "{parameter1} faster movement.",
                        "min": 2,
                        "max": 10
                    },
                    {
                        "id": 1327,
                        "name": "SkillMod",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/skillmod",
                        "paramType1": "value",
                        "paramValue1": "0-5",
                        "nature": "Buff",
                        "influences": "Skill",
                        "min": 1,
                        "max": 4
                    },
                    {
                        "id": 1325,
                        "name": "SkillUnlock",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/skillunlock",
                        "paramType1": "skill",
                        "nature": "Mechanic",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 1326,
                        "name": "ClassRequirement",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
                        "paramType1": "class",
                        "nature": "Requirement",
                        "description": "{parameter1} required"
                    }
                ],
                "perfection": [
                    null,
                    null,
                    15,
                    null,
                    10,
                    4,
                    null,
                    null
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2000,
                        "name": "IncreaseDamage",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {parameter2} damage",
                        "min": 13,
                        "max": 18
                    },
                    {
                        "id": 3807,
                        "name": "IncreaseSkillPoints",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseskillpoints",
                        "paramType1": "value",
                        "paramValue1": "0-10",
                        "nature": "Buff",
                        "influences": "Skill",
                        "description": "{parameter1} skill points",
                        "min": 1,
                        "max": 2
                    },
                    {
                        "id": 1011,
                        "name": "CriticalHitChance",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/criticalhitchance",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} critical hit chance",
                        "min": 1,
                        "max": 15
                    },
                    {
                        "id": 2373,
                        "name": "IncreaseRandomStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaserandomstat",
                        "paramType1": "stats",
                        "paramType2": "percent",
                        "map": {}
                    },
                    {
                        "id": 3213,
                        "name": "SelfEffectOnCondition",
                        "isEnabled": false,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/selfeffectoncondition",
                        "paramType1": "conditions",
                        "paramType2": "conditionparams",
                        "paramType3": "effect",
                        "map": {}
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 3802,
                        "name": "ClassRequirement",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
                        "paramType1": "class",
                        "nature": "Requirement",
                        "influences": "Skill",
                        "description": "{parameter1} required"
                    },
                    {
                        "id": 2900,
                        "name": "WinRewardsIncrease",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
                        "paramType1": "percent",
                        "paramType2": "rewardtype",
                        "paramValue1": "0-20",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} {parameter2} Rewards on Win",
                        "min": 0,
                        "max": 20
                    }
                ],
                "perfection": [
                    18,
                    2,
                    15,
                    null,
                    null,
                    null,
                    null,
                    20
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            430,
            474,
            501
        ],
        "materials": [
            19
        ],
        "category": "accessory"
    },
    {
        "id": 15,
        "name": "Fortress",
        "icon": "https://rune.game/images/items/00015.png",
        "image": "https://dl.airtable.com/.attachments/5ebbe53d6a9614c94a6dc2628d7f8883/589dc158/00015.png?ts=1657415432&userId=usrf0GZYc5zCl9Cv7&cs=ddeb28b1f689f60d",
        "value": "0",
        "type": 3,
        "subType": 9,
        "specificType": 13,
        "slots": [
            2
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": true,
        "isPaused": false,
        "isRetired": true,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 7776,
        "attributes": [],
        "details": {
            "Type": "Shield",
            "Subtype": "Blessed Vira Shield",
            "Distribution": "Crafted",
            "Date": "June 11, 2021 - Now"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 13,
                    "quantity": 1
                },
                {
                    "id": 3,
                    "quantity": 1
                },
                {
                    "id": 14,
                    "quantity": 1
                },
                {
                    "id": 10,
                    "quantity": 1
                },
                {
                    "id": 4,
                    "quantity": 1
                }
            ]
        },
        "description": "A shield designed for Vira royalty, it has been blessed with a protective aura.",
        "shortDescription": "",
        "visualDescription": "This unique, winged shield is gilded with gold and green accents, although the material appears to be some form of nearly impenetrable dragon bone.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 2,
                        "max": 10
                    },
                    {
                        "id": 12,
                        "name": "FindGuildToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/findguildtoken",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Guild Token",
                        "min": 1,
                        "max": 4
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 5,
                        "max": 10
                    },
                    {
                        "id": 11,
                        "name": "RandomRuneExchange",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Random Rune Exchange",
                        "min": 1,
                        "max": 4
                    },
                    {
                        "id": 47,
                        "name": "ReduceBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/reduceburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Reduced Burn",
                        "min": 2,
                        "max": 10
                    },
                    {
                        "id": 39,
                        "name": "AddSkill",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
                        "paramType1": "skill",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Use Skill: {parameter1} (SOON)",
                        "map": {}
                    },
                    {
                        "id": 21,
                        "name": "SpecificClass",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
                        "paramType1": "classId",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Class Only ({parameter1})",
                        "map": {}
                    }
                ],
                "perfection": [
                    10,
                    4,
                    10,
                    null,
                    10,
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1060,
                        "name": "DamageResist",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} damage resist"
                    },
                    {
                        "id": 1030,
                        "name": "MovementSpeedIncrease",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/movementspeedincrease",
                        "paramType1": "percent",
                        "paramValue1": "1-10",
                        "nature": "Buff",
                        "influences": "Movement",
                        "description": "{parameter1} faster movement.",
                        "min": 2,
                        "max": 5
                    },
                    {
                        "id": 1101,
                        "name": "DeathPenaltyDecrease",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/deathpenaltydecrease",
                        "paramType1": "percent",
                        "paramValue1": "0-25",
                        "nature": "Buff",
                        "influences": "Game",
                        "description": "{parameter1} reduction to points lost on death.",
                        "min": 5,
                        "max": 10
                    },
                    {
                        "id": 1327,
                        "name": "SkillMod",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/skillmod",
                        "paramType1": "value",
                        "paramValue1": "0-5",
                        "nature": "Buff",
                        "influences": "Skill",
                        "min": 1,
                        "max": 4
                    },
                    {
                        "id": 1059,
                        "name": "AilmentResist",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/ailmentresist",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} ailment resist",
                        "min": 2,
                        "max": 10
                    },
                    {
                        "id": 1325,
                        "name": "SkillUnlock",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/skillunlock",
                        "paramType1": "skill",
                        "nature": "Mechanic",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 1326,
                        "name": "ClassRequirement",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
                        "paramType1": "class",
                        "nature": "Requirement",
                        "description": "{parameter1} required"
                    },
                    {
                        "id": 1160,
                        "name": "WinRewardsDecrease",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsdecrease",
                        "paramType1": "percent",
                        "nature": "Debuff",
                        "influences": "Reward",
                        "description": "{parameter1} win reward reduction",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    }
                ],
                "perfection": [
                    null,
                    5,
                    10,
                    4,
                    10,
                    null,
                    null,
                    5
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 11,
                        "max": 19
                    },
                    {
                        "id": 2300,
                        "name": "IncreaseHealth",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasehealth",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} maximum health",
                        "min": 5,
                        "max": 8
                    },
                    {
                        "id": 3205,
                        "name": "ChanceOnGetHit",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/chanceongethit",
                        "paramType1": "percent",
                        "paramType2": "skill",
                        "paramValue1": "0-100",
                        "paramValue2": "400-1000",
                        "nature": "Buff",
                        "description": "{parameter1} {parameter2} chance when hit",
                        "min": 5,
                        "max": 10
                    },
                    {
                        "id": 3213,
                        "name": "SelfEffectOnCondition",
                        "isEnabled": false,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/selfeffectoncondition",
                        "paramType1": "conditions",
                        "paramType2": "conditionparams",
                        "paramType3": "effect",
                        "map": {}
                    },
                    {
                        "id": 2304,
                        "name": "IncreaseResist",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseresist",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} resistance",
                        "min": 2,
                        "max": 10
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 1326,
                        "name": "ClassRequirement",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
                        "paramType1": "class",
                        "nature": "Requirement",
                        "description": "{parameter1} required"
                    }
                ],
                "perfection": [
                    19,
                    8,
                    10,
                    null,
                    10,
                    null,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            471,
            414
        ],
        "materials": [
            3
        ],
        "category": "accessory"
    },
    {
        "id": 16,
        "name": "Elder",
        "icon": "https://rune.game/images/items/00016.png",
        "image": "https://dl.airtable.com/.attachments/a5f74e2d76feca6782e60291d719971e/d2033b37/00016.png?ts=1657415435&userId=usrf0GZYc5zCl9Cv7&cs=7b997e43560a2bf9",
        "value": "0",
        "type": 1,
        "subType": 2,
        "specificType": 14,
        "slots": [
            1,
            2
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 5760,
        "attributes": [],
        "details": {
            "Type": "One-Handed Weapon",
            "Subtype": "Worldstone Mace",
            "Rune Word": "Dol Amn Thul Ral Tal",
            "Distribution": "Crafted",
            "Date": "June 11, 2021 - Now"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 14,
                    "quantity": 1
                },
                {
                    "id": 11,
                    "quantity": 1
                },
                {
                    "id": 10,
                    "quantity": 1
                },
                {
                    "id": 8,
                    "quantity": 1
                },
                {
                    "id": 7,
                    "quantity": 1
                }
            ]
        },
        "description": "Designed to kill the most powerful primordial elementals, slaying mere mortals with Elder is like cutting grass.",
        "shortDescription": "",
        "visualDescription": "Although rather simple at first glance, Elder's ebony handle and brass head are indestructible and beautifully made. Elder's most notable feature is the massive worldstone shard affixed to its base, one of the largest worldstone shards ever found.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 2,
                        "max": 5
                    },
                    {
                        "id": 7,
                        "name": "FindShard",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Chance To Find Worldstone Shard (Per Raid)",
                        "min": 1,
                        "max": 40
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 2,
                        "max": 2,
                        "value": 2
                    },
                    {
                        "id": 11,
                        "name": "RandomRuneExchange",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Random Rune Exchange",
                        "min": 1,
                        "max": 4
                    },
                    {
                        "id": 2,
                        "name": "HarvestFee",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Fee",
                        "min": 2,
                        "max": 10
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "min": 11,
                        "max": 14,
                        "map": {
                            "11": "SOL",
                            "12": "SHAEL",
                            "13": "DOL",
                            "14": "HEL"
                        }
                    },
                    {
                        "id": 39,
                        "name": "AddSkill",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
                        "paramType1": "skill",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Use Skill: {parameter1} (SOON)",
                        "map": {}
                    },
                    {
                        "id": 21,
                        "name": "SpecificClass",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
                        "paramType1": "classId",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Class Only ({parameter1})",
                        "map": {}
                    }
                ],
                "perfection": [
                    5,
                    40,
                    2,
                    null,
                    2,
                    null,
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1008,
                        "name": "DamageTypeDamage",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagetypedamage",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {DamageType} damage"
                    },
                    {
                        "id": 1150,
                        "name": "WinRewardsIncrease",
                        "isEnabled": true,
                        "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
                        "paramType1": "percent",
                        "paramValue1": "0-20",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} win bonus",
                        "min": 1,
                        "max": 20
                    },
                    {
                        "id": 4119,
                        "name": "EggExperienceBonus",
                        "isEnabled": false,
                        "nexusLink": "https://nexus.rune.game/item-attribute/eggexperiencebonus",
                        "min": 2,
                        "max": 2,
                        "value": 2
                    },
                    {
                        "id": 1009,
                        "name": "DamageType",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagetype",
                        "paramType1": "type",
                        "nature": "Mechanic",
                        "influences": "Offense",
                        "description": "{Type} damage",
                        "min": 1,
                        "max": 4
                    },
                    {
                        "id": 1237,
                        "name": "CastOnKillChance",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/castonkillchance",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Skill",
                        "description": "{parameter1} cast {CastOnKillEffect.Value} {CastOnKillType.Value} on kill",
                        "min": 2,
                        "max": 10
                    },
                    {
                        "id": 1327,
                        "name": "SkillMod",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/skillmod",
                        "paramType1": "value",
                        "paramValue1": "0-5",
                        "nature": "Buff",
                        "influences": "Skill",
                        "min": 1,
                        "max": 4
                    },
                    {
                        "id": 1325,
                        "name": "SkillUnlock",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/skillunlock",
                        "paramType1": "skill",
                        "nature": "Mechanic",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 1326,
                        "name": "ClassRequirement",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
                        "paramType1": "class",
                        "nature": "Requirement",
                        "description": "{parameter1} required"
                    },
                    {
                        "id": 1238,
                        "name": "CastOnKillType",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/castonkilltype",
                        "paramType1": "spelltype",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "min": 2,
                        "max": 2,
                        "value": 2
                    },
                    {
                        "id": 1239,
                        "name": "CastOnKillEffect",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/castonkilleffect",
                        "paramType1": "effect",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "min": 101,
                        "max": 101,
                        "value": 101
                    }
                ],
                "perfection": [
                    null,
                    20,
                    null,
                    null,
                    10,
                    4,
                    null,
                    null,
                    null,
                    null
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2000,
                        "name": "IncreaseDamage",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {parameter2} damage",
                        "min": 12,
                        "max": 15
                    },
                    {
                        "id": 2302,
                        "name": "IncreaseEnergy",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseenergy",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} maximum energy",
                        "min": 1,
                        "max": 20
                    },
                    {
                        "id": 3209,
                        "name": "CastOnCondition",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/castoncondition",
                        "paramType1": "conditions",
                        "paramType2": "conditionparams",
                        "paramType3": "skill",
                        "map": {}
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 2902,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} Magic Find",
                        "min": 2,
                        "max": 10
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}"
                    },
                    {
                        "id": 3802,
                        "name": "ClassRequirement",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
                        "paramType1": "class",
                        "nature": "Requirement",
                        "influences": "Skill",
                        "description": "{parameter1} required"
                    }
                ],
                "perfection": [
                    15,
                    20,
                    null,
                    null,
                    10,
                    null,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [
            6
        ],
        "category": "accessory"
    },
    {
        "id": 19,
        "name": "Pledge",
        "icon": "https://rune.game/images/items/00019.png",
        "image": "https://dl.airtable.com/.attachments/57a97c8952b5f5eb313ca3c294e8da1c/fe208e96/00019.png?ts=1657415438&userId=usrf0GZYc5zCl9Cv7&cs=ff4ab873fedf0d20",
        "value": "0",
        "type": 5,
        "subType": 10,
        "specificType": 15,
        "slots": [
            3
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 900,
        "attributes": [],
        "details": {
            "Type": "Helm",
            "Subtype": "Warden Helm",
            "Rune Word": "Nef Tir Sol Ort",
            "Distribution": "Crafted",
            "Date": "June 3, 2021 - Now"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 4,
                    "quantity": 1
                },
                {
                    "id": 3,
                    "quantity": 1
                },
                {
                    "id": 12,
                    "quantity": 1
                },
                {
                    "id": 9,
                    "quantity": 1
                }
            ]
        },
        "description": "A once unbreakable helm belonging to Lord Irondell, its best days have passed.",
        "shortDescription": "",
        "visualDescription": "A silver helm of elven make, this symbol of unity is enchanted with potent protective magic.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 7,
                        "name": "FindShard",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Chance To Find Worldstone Shard (Per Raid)",
                        "min": 1,
                        "max": 15
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 1,
                        "max": 3
                    },
                    {
                        "id": 11,
                        "name": "RandomRuneExchange",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Random Rune Exchange",
                        "min": 1,
                        "max": 4
                    },
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 1,
                        "max": 5
                    }
                ],
                "perfection": [
                    15,
                    1,
                    null,
                    5
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1060,
                        "name": "DamageResist",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} damage resist"
                    },
                    {
                        "id": 1150,
                        "name": "WinRewardsIncrease",
                        "isEnabled": true,
                        "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
                        "paramType1": "percent",
                        "paramValue1": "0-20",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} win bonus",
                        "min": 1,
                        "max": 3
                    },
                    {
                        "id": 1303,
                        "name": "RandomizedItemAttribute",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomizeditemattribute",
                        "paramType1": "randomattributeid",
                        "nature": "Mechanic",
                        "influences": "All",
                        "description": "{RandomAttributeID}.id.description",
                        "min": 1,
                        "max": 4
                    },
                    {
                        "id": 1060,
                        "name": "DamageResist",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} damage resist",
                        "min": 1,
                        "max": 5
                    },
                    {
                        "id": 1201,
                        "name": "LeaderDeathPenaltyIncrease",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/leaderdeathpenaltyincrease",
                        "paramType1": "percent",
                        "nature": "Debuff",
                        "influences": "Game",
                        "description": "{parameter1} increase to points lost on death when leading",
                        "min": 3,
                        "max": 3,
                        "value": 3
                    }
                ],
                "perfection": [
                    null,
                    3,
                    null,
                    5,
                    3
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 0,
                        "max": 6
                    },
                    {
                        "id": 2006,
                        "name": "IncreaseCriticalHitChance",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasecriticalhitchance",
                        "paramType1": "percent",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1}  critical hit chance",
                        "min": 1,
                        "max": 3
                    },
                    {
                        "id": 2373,
                        "name": "IncreaseRandomStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaserandomstat",
                        "paramType1": "stats",
                        "paramType2": "percent",
                        "map": {}
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 6,
                        "max": 10
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    }
                ],
                "perfection": [
                    6,
                    3,
                    null,
                    10,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            460
        ],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 20,
        "name": "Flow",
        "icon": "https://rune.game/images/items/00020.png",
        "image": "https://dl.airtable.com/.attachments/5bc174cde3bb4cc184cef3d4e02a9355/1171703f/Untitled-31.png?ts=1657415440&userId=usrf0GZYc5zCl9Cv7&cs=a530d03968d0571b",
        "value": "0",
        "type": 8,
        "subType": 16,
        "specificType": 16,
        "slots": [
            6
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 3200,
        "attributes": [],
        "details": {
            "Type": "Leg Armor",
            "Subtype": "Templar Chausses",
            "Rune Word": "Dol Io Hel Lum",
            "Distribution": "Crafted",
            "Date": "June 26, 2021 - Now"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 14,
                    "quantity": 1
                },
                {
                    "id": 16,
                    "quantity": 1
                },
                {
                    "id": 15,
                    "quantity": 1
                },
                {
                    "id": 17,
                    "quantity": 1
                }
            ]
        },
        "description": "Fashioned from lightweight materials, these plated chausses allow the wearer to flow with the tide of battle.",
        "shortDescription": "",
        "visualDescription": "Made from purple-hued steel, these finely crafted chausses are kept in good condition despite their extensive use.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 1,
                        "max": 10
                    },
                    {
                        "id": 7,
                        "name": "FindShard",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Chance To Find Worldstone Shard (Per Raid)",
                        "min": 1,
                        "max": 10
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 4,
                        "max": 4,
                        "value": 4
                    },
                    {
                        "id": 11,
                        "name": "RandomRuneExchange",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Random Rune Exchange",
                        "min": 1,
                        "max": 4
                    },
                    {
                        "id": 34,
                        "name": "AvoidBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/avoidburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Avoid All Burns",
                        "min": 0,
                        "max": 1
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 0,
                        "max": 3
                    }
                ],
                "perfection": [
                    10,
                    10,
                    4,
                    null,
                    1,
                    0
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1060,
                        "name": "DamageResist",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} damage resist"
                    },
                    {
                        "id": 1030,
                        "name": "MovementSpeedIncrease",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/movementspeedincrease",
                        "paramType1": "percent",
                        "paramValue1": "1-10",
                        "nature": "Buff",
                        "influences": "Movement",
                        "description": "{parameter1} faster movement.",
                        "min": 1,
                        "max": 10
                    },
                    {
                        "id": 1101,
                        "name": "DeathPenaltyDecrease",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/deathpenaltydecrease",
                        "paramType1": "percent",
                        "paramValue1": "0-25",
                        "nature": "Buff",
                        "influences": "Game",
                        "description": "{parameter1} reduction to points lost on death.",
                        "min": 4,
                        "max": 4,
                        "value": 4
                    },
                    {
                        "id": 1303,
                        "name": "RandomizedItemAttribute",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomizeditemattribute",
                        "paramType1": "randomattributeid",
                        "nature": "Mechanic",
                        "influences": "All",
                        "description": "{RandomAttributeID}.id.description",
                        "min": 1,
                        "max": 4
                    },
                    {
                        "id": 1102,
                        "name": "DeathPenaltyAvoid",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/deathpenaltyavoid",
                        "paramType1": "percent",
                        "paramValue1": "0-25",
                        "nature": "Buff",
                        "influences": "Game",
                        "description": "{parameter1} to avoid losing points on death.",
                        "min": 1,
                        "max": 2
                    },
                    {
                        "id": 1100,
                        "name": "KilledPlayerPenaltyIncrease",
                        "isEnabled": true,
                        "nexusLink": "https://nexus.rune.game/item-attribute/killedplayerpenaltyincrease",
                        "paramType1": "percent",
                        "paramValue1": "0-25",
                        "nature": "Buff",
                        "influences": "Game",
                        "description": "{parameter1} greater point penalty for defeated opponents.",
                        "min": 0,
                        "max": 3
                    }
                ],
                "perfection": [
                    null,
                    10,
                    4,
                    null,
                    2,
                    3
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 1,
                        "max": 10
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 4,
                        "max": 6
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 2949,
                        "name": "IncreaseOnHit",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseonhit",
                        "paramType1": "percent",
                        "paramType2": "percent",
                        "paramType3": "stat",
                        "paramValue1": "0-100",
                        "paramValue2": "1-200",
                        "description": "{parameter1} chance for {parameter2 {parameter3} on hit",
                        "min": 10,
                        "max": 10,
                        "value": 10
                    },
                    {
                        "id": 3806,
                        "name": "IncreaseMaxSkillCharges",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasemaxskillcharges",
                        "paramType1": "value",
                        "paramType2": "skill",
                        "paramValue1": "0-10",
                        "nature": "Buff",
                        "influences": "Skill",
                        "description": "{parameter1} additional charges for {parameter 2} skill(s)",
                        "min": 0,
                        "max": 1
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 3,
                        "max": 6
                    }
                ],
                "perfection": [
                    10,
                    6,
                    null,
                    null,
                    1,
                    6
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 22,
        "name": "Lionheart",
        "icon": "https://rune.game/images/items/00022.png",
        "image": "https://dl.airtable.com/.attachments/6cd0552a55e8ada08f5026d72f485a32/096ff9d5/00022.png?ts=1657415445&userId=usrf0GZYc5zCl9Cv7&cs=0ba6ba625a2b79f7",
        "value": "0",
        "type": 1,
        "subType": 1,
        "specificType": 18,
        "slots": [
            1,
            2
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": true,
        "isPaused": true,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 2200,
        "attributes": [],
        "details": {
            "Type": "One-Handed Weapon",
            "Subtype": "Templar Broadsword",
            "Distribution": "Crafted",
            "Date": "August 27, 2021 - Now"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 14,
                    "quantity": 1
                },
                {
                    "id": 16,
                    "quantity": 1
                },
                {
                    "id": 17,
                    "quantity": 1
                },
                {
                    "id": 13,
                    "quantity": 1
                },
                {
                    "id": 18,
                    "quantity": 1
                }
            ]
        },
        "description": "Taken from a paladin whose fall from grace was legendary, the glow of this weapon's blade promises courage and strength to its wielder.",
        "shortDescription": "",
        "visualDescription": "Lionheart is emblazoned with the sun symbol of Relia, and along with being a deadly and imposing weapon, it equips the wearer with undaunting courage and strength.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 3,
                        "max": 12
                    },
                    {
                        "id": 7,
                        "name": "FindShard",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Chance To Find Worldstone Shard (Per Raid)",
                        "min": 10,
                        "max": 10,
                        "value": 10
                    },
                    {
                        "id": 12,
                        "name": "FindGuildToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/findguildtoken",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Guild Token",
                        "min": 1,
                        "max": 4
                    },
                    {
                        "id": 81,
                        "name": "GuildTreasuryYieldBonus",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/guildtreasuryyieldbonus",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} yield bonus, sent to guild treasury.",
                        "min": 1,
                        "max": 5
                    },
                    {
                        "id": 2,
                        "name": "HarvestFee",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Fee",
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "min": 12,
                        "max": 14,
                        "map": {
                            "12": "SHAEL",
                            "13": "DOL",
                            "14": "HEL"
                        }
                    },
                    {
                        "id": 21,
                        "name": "SpecificClass",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
                        "paramType1": "classId",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Class Only ({parameter1})",
                        "map": {}
                    }
                ],
                "perfection": [
                    12,
                    10,
                    4,
                    5,
                    0,
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1001,
                        "name": "PhysicalDamage",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/physicaldamage",
                        "paramType1": "value",
                        "paramValue1": "1-30",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} physical damage"
                    },
                    {
                        "id": 1219,
                        "name": "IncreaseHealthOnKill",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasehealthonkill",
                        "paramType1": "value",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} health on kill.",
                        "min": 10,
                        "max": 10,
                        "value": 10
                    },
                    {
                        "id": 1171,
                        "name": "TokenFindWin",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/tokenfindwin",
                        "paramType1": "percent",
                        "nature": "Mechanic",
                        "influences": "Reward",
                        "description": "{parameter1} chance to find a guild token on win",
                        "min": 1,
                        "max": 2
                    },
                    {
                        "id": 1162,
                        "name": "GuildTreasuryWinBonus",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/guildtreasurywinbonus",
                        "paramType1": "percent",
                        "nature": "Debuff",
                        "influences": "Reward",
                        "description": "{parameter1} win reward as guild rewards",
                        "min": 1,
                        "max": 5
                    },
                    {
                        "id": 1060,
                        "name": "DamageResist",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} damage resist"
                    },
                    {
                        "id": 1303,
                        "name": "RandomizedItemAttribute",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomizeditemattribute",
                        "paramType1": "randomattributeid",
                        "nature": "Mechanic",
                        "influences": "All",
                        "description": "{RandomAttributeID}.id.description",
                        "min": 5,
                        "max": 7
                    },
                    {
                        "id": 1327,
                        "name": "SkillMod",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/skillmod",
                        "paramType1": "value",
                        "paramValue1": "0-5",
                        "nature": "Buff",
                        "influences": "Skill"
                    },
                    {
                        "id": 1326,
                        "name": "ClassRequirement",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
                        "paramType1": "class",
                        "nature": "Requirement",
                        "description": "{parameter1} required",
                        "min": null,
                        "max": null
                    }
                ],
                "perfection": [
                    null,
                    10,
                    null,
                    1,
                    null,
                    null,
                    null,
                    null
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2000,
                        "name": "IncreaseDamage",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {parameter2} damage",
                        "min": 12,
                        "max": 21
                    },
                    {
                        "id": 2949,
                        "name": "IncreaseOnHit",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseonhit",
                        "paramType1": "percent",
                        "paramType2": "percent",
                        "paramType3": "stat",
                        "paramValue1": "0-100",
                        "paramValue2": "1-200",
                        "description": "{parameter1} chance for {parameter2 {parameter3} on hit",
                        "min": 6,
                        "max": 10
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 5,
                        "max": 8
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 5,
                        "max": 10
                    },
                    {
                        "id": 2601,
                        "name": "IncreaseStatSkill",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestatskill",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "skill",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} to {parameter2} for {param3}",
                        "min": 11,
                        "max": 15
                    },
                    {
                        "id": 2373,
                        "name": "IncreaseRandomStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaserandomstat",
                        "paramType1": "stats",
                        "paramType2": "percent",
                        "map": {}
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 1326,
                        "name": "ClassRequirement",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
                        "paramType1": "class",
                        "nature": "Requirement",
                        "description": "{parameter1} required"
                    }
                ],
                "perfection": [
                    21,
                    null,
                    8,
                    10,
                    15,
                    null,
                    null,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            472
        ],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 23,
        "name": "Pressure",
        "icon": "https://rune.game/images/items/00023.png",
        "image": "https://dl.airtable.com/.attachments/976171c280816e1f7c892827b1669a51/8cdc9af5/00023.png?ts=1657415447&userId=usrf0GZYc5zCl9Cv7&cs=1bc70077830a5107",
        "value": "0",
        "type": 9,
        "subType": 15,
        "specificType": 19,
        "slots": [
            9
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 660,
        "attributes": [],
        "details": {
            "Type": "Glove",
            "Subtype": "Astral Gauntlets",
            "Rune Word": "Ith Dol Ral Ko",
            "Distribution": "Crafted",
            "Date": "August 27, 2021 - Now"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 6,
                    "quantity": 1
                },
                {
                    "id": 14,
                    "quantity": 1
                },
                {
                    "id": 8,
                    "quantity": 1
                },
                {
                    "id": 18,
                    "quantity": 1
                }
            ]
        },
        "description": "Masterfully crafted from an otherworldly blue metal and infused with astra energy, these gauntlets brim with untapped power.",
        "shortDescription": "",
        "visualDescription": "Forged from a mysterious blue metal, these ornate gauntlets are outfitted with gold gilding and enchanted with potent astra energy.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 1,
                        "max": 5
                    },
                    {
                        "id": 4,
                        "name": "SendHarvestHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 7,
                        "name": "FindShard",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Chance To Find Worldstone Shard (Per Raid)",
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    },
                    {
                        "id": 19,
                        "name": "CreateRandomRuneword",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/createrandomruneword",
                        "paramType1": "chance",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Chance To Create Random Runeword",
                        "min": 0,
                        "max": 1
                    }
                ],
                "perfection": [
                    5,
                    null,
                    10,
                    5,
                    1
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1060,
                        "name": "DamageResist",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} damage resist"
                    },
                    {
                        "id": 1012,
                        "name": "CriticalHitMultiplier",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/criticalhitmultiplier",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} critical hit multiplier",
                        "min": 5,
                        "max": 10
                    },
                    {
                        "id": 1101,
                        "name": "DeathPenaltyDecrease",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/deathpenaltydecrease",
                        "paramType1": "percent",
                        "paramValue1": "0-25",
                        "nature": "Buff",
                        "influences": "Game",
                        "description": "{parameter1} reduction to points lost on death.",
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 1200,
                        "name": "LeaderMovementSpeedDecrease",
                        "isEnabled": true,
                        "nexusLink": "https://nexus.rune.game/item-attribute/leadermovementspeeddecrease",
                        "paramType1": "percent",
                        "nature": "Debuff",
                        "influences": "Movement",
                        "description": "{parameter1} slower movement when leading",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    },
                    {
                        "id": 1169,
                        "name": "ShardFindWin",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/shardfindwin",
                        "paramType1": "percent",
                        "nature": "Mechanic",
                        "influences": "Reward",
                        "description": "{parameter1} chance to find a worldstone shard on win",
                        "min": 0,
                        "max": 1
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 3,
                        "max": 3,
                        "value": 3
                    },
                    {
                        "id": 1325,
                        "name": "SkillUnlock",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/skillunlock",
                        "paramType1": "skill",
                        "nature": "Mechanic",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    }
                ],
                "perfection": [
                    null,
                    10,
                    10,
                    5,
                    null,
                    3,
                    null
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 1,
                        "max": 5
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 10,
                        "max": 10,
                        "value": 10
                    },
                    {
                        "id": 1325,
                        "name": "SkillUnlock",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/skillunlock",
                        "paramType1": "skill",
                        "nature": "Mechanic",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    }
                ],
                "perfection": [
                    5,
                    15,
                    10,
                    10,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            495
        ],
        "materials": [
            18
        ],
        "category": "accessory"
    },
    {
        "id": 25,
        "name": "Balance",
        "icon": "https://rune.game/images/items/00025.png",
        "image": "https://dl.airtable.com/.attachments/404b5a720df00dde2170d8992b5a3076/be437437/00025.png?ts=1657415451&userId=usrf0GZYc5zCl9Cv7&cs=a97935d02478d33b",
        "value": "0",
        "type": 10,
        "subType": 26,
        "specificType": 21,
        "slots": [
            8
        ],
        "isNew": false,
        "isSecret": true,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 594,
        "attributes": [],
        "details": {
            "Type": "Belt",
            "Subtype": "Wyrmhide Belt",
            "Distribution": "Crafted",
            "Date": "August 27, 2021 - Now"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 1,
                    "quantity": 1
                },
                {
                    "id": 16,
                    "quantity": 1
                },
                {
                    "id": 15,
                    "quantity": 1
                },
                {
                    "id": 8,
                    "quantity": 1
                }
            ]
        },
        "description": "This wyrmhide belt is made from the hide of an ancient greatwyrm, and affords the wearer significant power.",
        "shortDescription": "",
        "visualDescription": "Skillfully shaped from soft yet resilient wyrmhide, this rust-brown belt remains in perfect shape despite its age. ",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 1,
                        "max": 3
                    },
                    {
                        "id": 4,
                        "name": "SendHarvestHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 0,
                        "max": 2
                    },
                    {
                        "id": 74,
                        "name": "RandomRuneExchangeSpecific",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchangespecific",
                        "paramType1": "percent",
                        "nature": "Mechanic",
                        "description": "{parameter1} chance that random rune exchange gives a specific rune",
                        "min": 10,
                        "max": 20
                    },
                    {
                        "id": 75,
                        "name": "RandomRuneToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomrunetoken",
                        "paramType1": "rune",
                        "nature": "Mechanic",
                        "description": "Random Exchange Target: {parameter1}",
                        "min": 0,
                        "max": 12,
                        "map": {}
                    }
                ],
                "perfection": [
                    3,
                    null,
                    0,
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1060,
                        "name": "DamageResist",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} damage resist"
                    },
                    {
                        "id": 1101,
                        "name": "DeathPenaltyDecrease",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/deathpenaltydecrease",
                        "paramType1": "percent",
                        "paramValue1": "0-25",
                        "nature": "Buff",
                        "influences": "Game",
                        "description": "{parameter1} reduction to points lost on death.",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 1103,
                        "name": "CriticalPointsChanceIncrease",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/criticalpointschanceincrease",
                        "paramType1": "percent",
                        "paramValue1": "0-25",
                        "nature": "Mechanic",
                        "influences": "Game",
                        "description": "{parameter1} chance to receive critical bonus points.",
                        "min": 0,
                        "max": 2
                    },
                    {
                        "id": 1151,
                        "name": "ItemRewardsIncrease",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/itemrewardsincrease",
                        "paramType1": "percent",
                        "paramValue1": "0-20",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} item pickup bonus",
                        "min": 0,
                        "max": 2
                    },
                    {
                        "id": 1303,
                        "name": "RandomizedItemAttribute",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomizeditemattribute",
                        "paramType1": "randomattributeid",
                        "nature": "Mechanic",
                        "influences": "All",
                        "description": "{RandomAttributeID}.id.description",
                        "min": 1,
                        "max": 13
                    }
                ],
                "perfection": [
                    null,
                    5,
                    null,
                    2,
                    null
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 1,
                        "max": 3
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 0,
                        "max": 2
                    },
                    {
                        "id": 2901,
                        "name": "ItemRewardsIncrease",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/itemrewardsincrease",
                        "paramType1": "percent",
                        "paramType2": "rewardtype",
                        "paramValue1": "0-20",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} {parameter2} Rewards on Pickup",
                        "min": 1,
                        "max": 7
                    },
                    {
                        "id": 2903,
                        "name": "IncreaseRankRewardBonus",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaserankrewardbonus",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} Increase to Rank Reward Bonuses"
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    }
                ],
                "perfection": [
                    3,
                    5,
                    2,
                    7,
                    null,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            450
        ],
        "materials": [
            8
        ],
        "category": "accessory"
    },
    {
        "id": 26,
        "name": "Eternity",
        "icon": "https://rune.game/images/items/00026.png",
        "image": "https://dl.airtable.com/.attachments/efd443c0c36a4cca523c01f6be6a3603/bcef7575/00026.png?ts=1657415455&userId=usrf0GZYc5zCl9Cv7&cs=070c5ea900974a28",
        "value": "0",
        "type": 12,
        "subType": 14,
        "specificType": 22,
        "slots": [
            13,
            16,
            14
        ],
        "isNew": false,
        "isSecret": true,
        "isUltraSecret": false,
        "isPaused": true,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 120,
        "attributes": [],
        "details": {
            "Type": "Ring",
            "Subtype": "Inscribed Archon Band",
            "Distribution": "Crafted",
            "Date": "August 27, 2021 - Now"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 2,
                    "quantity": 1
                },
                {
                    "id": 11,
                    "quantity": 1
                },
                {
                    "id": 13,
                    "quantity": 1
                },
                {
                    "id": 16,
                    "quantity": 1
                },
                {
                    "id": 33,
                    "quantity": 1
                }
            ]
        },
        "description": "The method and materials used to create this object of transcendant beauty and power have long been lost to the world.",
        "shortDescription": "",
        "visualDescription": "A beautifully crafted silver ring, inscribed with an ancient dialect lost to time. The ring is partitioned in two, allowing the inscribed part of the ring to magically spin at all times.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 2,
                        "max": 4
                    },
                    {
                        "id": 4,
                        "name": "SendHarvestHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
                        "min": 0,
                        "max": 3
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    },
                    {
                        "id": 19,
                        "name": "CreateRandomRuneword",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/createrandomruneword",
                        "paramType1": "chance",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Chance To Create Random Runeword",
                        "min": 0,
                        "max": 1
                    },
                    {
                        "id": 61,
                        "name": "HarvestCritChance",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestcritchance",
                        "paramType1": "percent",
                        "paramValue1": "0-10",
                        "nature": "Mechanic",
                        "description": "{parameter1} increased chance to critically harvest yield",
                        "min": 1,
                        "max": 5
                    },
                    {
                        "id": 35,
                        "name": "EarlyAccess",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/earlyaccess",
                        "paramType1": "minutes",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "Early Rune Access: {parameter1} Minutes",
                        "min": 20,
                        "max": 20,
                        "value": 20
                    },
                    {
                        "id": 2,
                        "name": "HarvestFee",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Fee",
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "min": 14,
                        "max": 16,
                        "map": {
                            "14": "HEL",
                            "15": "IO",
                            "16": "LUM"
                        }
                    }
                ],
                "perfection": [
                    4,
                    null,
                    5,
                    1,
                    null,
                    20,
                    0,
                    null
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1030,
                        "name": "MovementSpeedIncrease",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/movementspeedincrease",
                        "paramType1": "percent",
                        "paramValue1": "1-10",
                        "nature": "Buff",
                        "influences": "Movement",
                        "description": "{parameter1} faster movement."
                    },
                    {
                        "id": 4111,
                        "name": "WinStreakRewardChanceIncrease",
                        "isEnabled": false,
                        "nexusLink": "https://nexus.rune.game/item-attribute/winstreakrewardchanceincrease",
                        "min": 3,
                        "max": 5
                    },
                    {
                        "id": 1222,
                        "name": "IncreaseMovementSpeedOnKill",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasemovementspeedonkill",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Movement",
                        "description": "{parameter1} movement speed on kill",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    },
                    {
                        "id": 1167,
                        "name": "RunewordFindWin",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/runewordfindwin",
                        "paramType1": "percent",
                        "nature": "Mechanic",
                        "influences": "Reward",
                        "description": "{parameter1} chance to find a random runeword on win",
                        "min": 0,
                        "max": 1
                    },
                    {
                        "id": 1011,
                        "name": "CriticalHitChance",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/criticalhitchance",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} critical hit chance",
                        "min": 1,
                        "max": 5
                    },
                    {
                        "id": 4119,
                        "name": "EggExperienceBonus",
                        "isEnabled": false,
                        "nexusLink": "https://nexus.rune.game/item-attribute/eggexperiencebonus",
                        "min": 10,
                        "max": 10,
                        "value": 10
                    },
                    {
                        "id": 1156,
                        "name": "NoRewardsUnlessFirst",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/norewardsunlessfirst",
                        "paramType1": "percent",
                        "paramValue1": "0-50",
                        "nature": "Debuff",
                        "influences": "Reward",
                        "description": "{parameter1} chance to receive no rewards for leaderboard positions below first.",
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 1155,
                        "name": "EarlyItemRevealChance",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/earlyitemrevealchance",
                        "paramType1": "percent",
                        "paramValue1": "0-25",
                        "nature": "Mechanic",
                        "influences": "Reward",
                        "description": "{parameter1} chance to see location of next item early.",
                        "min": 3,
                        "max": 5
                    },
                    {
                        "id": 1325,
                        "name": "SkillUnlock",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/skillunlock",
                        "paramType1": "skill",
                        "nature": "Mechanic",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    }
                ],
                "perfection": [
                    null,
                    null,
                    5,
                    null,
                    5,
                    null,
                    0,
                    null,
                    null
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 3,
                        "max": 5
                    },
                    {
                        "id": 2302,
                        "name": "IncreaseEnergy",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseenergy",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} maximum energy",
                        "min": 6,
                        "max": 9
                    },
                    {
                        "id": 2303,
                        "name": "EnergyRegen",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/energyregen",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "paramValue2": "1-60",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} energy regeneration",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    },
                    {
                        "id": 2914,
                        "name": "DoublePickupChance",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/doublepickupchance",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} chance to double an item pickup",
                        "min": 0,
                        "max": 1
                    },
                    {
                        "id": 1011,
                        "name": "CriticalHitChance",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/criticalhitchance",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} critical hit chance",
                        "min": 3,
                        "max": 5
                    },
                    {
                        "id": 2015,
                        "name": "IncreaseAilmentDuration",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseailmentduration",
                        "paramType1": "percent",
                        "paramType2": "ailment",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {parameter2} duration",
                        "min": 10,
                        "max": 10,
                        "value": 10
                    },
                    {
                        "id": 2903,
                        "name": "IncreaseRankRewardBonus",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaserankrewardbonus",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} Increase to Rank Reward Bonuses",
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    }
                ],
                "perfection": [
                    5,
                    9,
                    5,
                    1,
                    5,
                    10,
                    10,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            454
        ],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 28,
        "name": "Beacon",
        "icon": "https://rune.game/images/items/00028.png",
        "image": "https://dl.airtable.com/.attachments/d0dbd48e6930237498b9422f311b8863/8b410c9e/00028.png?ts=1657415459&userId=usrf0GZYc5zCl9Cv7&cs=ada02f19ed33154c",
        "value": "0",
        "type": 13,
        "subType": 17,
        "specificType": 24,
        "slots": [
            5
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 648,
        "attributes": [],
        "details": {
            "Type": "Amulet",
            "Subtype": "Lodestar Amulet",
            "Rune Word": "Eld Lum Io Shael",
            "Distribution": "Crafted",
            "Date": "August 27, 2021 - Now"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 2,
                    "quantity": 1
                },
                {
                    "id": 17,
                    "quantity": 1
                },
                {
                    "id": 16,
                    "quantity": 1
                },
                {
                    "id": 13,
                    "quantity": 1
                }
            ]
        },
        "description": "The light emitted from this brilliant stone highlights the latent arcane potential of objects in the environment.",
        "shortDescription": "",
        "visualDescription": "An amulet truly befitting of its name, this chain is fitted with a pulsing purple star, crackling with violent energy.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 1,
                        "max": 3
                    },
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 1,
                        "max": 3
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 1,
                        "max": 3
                    },
                    {
                        "id": 7,
                        "name": "FindShard",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Chance To Find Worldstone Shard (Per Raid)",
                        "min": 1,
                        "max": 4
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 0,
                        "max": 5
                    }
                ],
                "perfection": [
                    3,
                    3,
                    3,
                    4,
                    0
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1001,
                        "name": "PhysicalDamage",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/physicaldamage",
                        "paramType1": "value",
                        "paramValue1": "1-30",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} physical damage"
                    },
                    {
                        "id": 1102,
                        "name": "DeathPenaltyAvoid",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/deathpenaltyavoid",
                        "paramType1": "percent",
                        "paramValue1": "0-25",
                        "nature": "Buff",
                        "influences": "Game",
                        "description": "{parameter1} to avoid losing points on death.",
                        "min": 1,
                        "max": 3
                    },
                    {
                        "id": 1150,
                        "name": "WinRewardsIncrease",
                        "isEnabled": true,
                        "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
                        "paramType1": "percent",
                        "paramValue1": "0-20",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} win bonus",
                        "min": 3,
                        "max": 5
                    },
                    {
                        "id": 1151,
                        "name": "ItemRewardsIncrease",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/itemrewardsincrease",
                        "paramType1": "percent",
                        "paramValue1": "0-20",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} item pickup bonus",
                        "min": 2,
                        "max": 5
                    },
                    {
                        "id": 1201,
                        "name": "LeaderDeathPenaltyIncrease",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/leaderdeathpenaltyincrease",
                        "paramType1": "percent",
                        "nature": "Debuff",
                        "influences": "Game",
                        "description": "{parameter1} increase to points lost on death when leading",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    },
                    {
                        "id": 1164,
                        "name": "DoublePickupChance",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/doublepickupchance",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} chance to double an item pickup",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    },
                    {
                        "id": 1325,
                        "name": "SkillUnlock",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/skillunlock",
                        "paramType1": "skill",
                        "nature": "Mechanic",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    }
                ],
                "perfection": [
                    null,
                    3,
                    5,
                    5,
                    0,
                    5,
                    5,
                    null
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2302,
                        "name": "IncreaseEnergy",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseenergy",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} maximum energy",
                        "min": 6,
                        "max": 8
                    },
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 1,
                        "max": 3
                    },
                    {
                        "id": 2007,
                        "name": "IncreaseCriticalHitMultiplier",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasecriticalhitmultiplier",
                        "paramType1": "percent",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1}  critical hit multiplier",
                        "min": 3,
                        "max": 5
                    },
                    {
                        "id": 2902,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} Magic Find",
                        "min": 2,
                        "max": 7
                    },
                    {
                        "id": 2309,
                        "name": "ReduceCost",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/reducecost",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": " -{parameter1} energy cost for skills",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 3509,
                        "name": "LightAura",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/lightaura",
                        "paramType1": "value",
                        "nature": "Mechanic",
                        "description": "{parameter1} light radius",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    }
                ],
                "perfection": [
                    8,
                    3,
                    5,
                    7,
                    5,
                    null,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            448
        ],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 29,
        "name": "Dragonlight",
        "icon": "https://rune.game/images/items/00029.png",
        "image": "https://dl.airtable.com/.attachments/d235f466e1e662558a3801db5be596c5/29e18b3b/00029.png?ts=1657415462&userId=usrf0GZYc5zCl9Cv7&cs=da27429c520335fa",
        "value": "0",
        "type": 13,
        "subType": 17,
        "specificType": 173,
        "slots": [
            5
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": true,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 3472,
        "attributes": [],
        "details": {
            "Type": "Amulet",
            "Subtype": "Royal Archon Amulet",
            "Distribution": "Airdrop"
        },
        "recipe": {
            "requirement": []
        },
        "description": "Infused with the breath of an ice dragon, this ancient amulet radiates a pale blue light and is searing cold to the touch.",
        "shortDescription": "",
        "visualDescription": "With a platinum chain affixed to a glittering platinum dragon wrapped about a massive aquamarine, this feat of jewelry emanates a frosty aura.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 40,
                        "name": "Rarity",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
                        "paramType1": "value",
                        "paramValue1": "0-999",
                        "nature": "Neutral",
                        "description": "{parameter1}",
                        "min": 3,
                        "max": 6,
                        "map": {
                            "3": "Mythic",
                            "4": "Epic",
                            "5": "Rare",
                            "6": "Magical"
                        }
                    },
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 2,
                        "max": 5
                    },
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 20,
                        "max": 50
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 14,
                        "max": 20
                    },
                    {
                        "id": 7,
                        "name": "FindShard",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Chance To Find Worldstone Shard (Per Raid)"
                    }
                ],
                "perfection": [
                    null,
                    5,
                    50,
                    20,
                    null
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 2901,
                        "name": "ItemRewardsIncrease",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/itemrewardsincrease",
                        "paramType1": "percent",
                        "paramType2": "rewardtype",
                        "paramValue1": "0-20",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} {parameter2} Rewards on Pickup",
                        "min": 4,
                        "max": 10
                    },
                    {
                        "id": 2902,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} Magic Find",
                        "min": 4,
                        "max": 10
                    },
                    {
                        "id": 2303,
                        "name": "EnergyRegen",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/energyregen",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "paramValue2": "1-60",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} energy regeneration",
                        "min": 2,
                        "max": 5
                    }
                ],
                "perfection": [
                    null,
                    10,
                    10,
                    5
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 30,
        "name": "Haze",
        "icon": "https://rune.game/images/items/00030.png",
        "image": "https://dl.airtable.com/.attachments/eed5c549dd22a7ab886eaedb0b957f01/73709995/00030.png?ts=1657415463&userId=usrf0GZYc5zCl9Cv7&cs=c8208c7f858ac110",
        "value": "0",
        "type": 5,
        "subType": 10,
        "specificType": 30,
        "slots": [
            3
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": true,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 576,
        "attributes": [],
        "details": {
            "Type": "Helm",
            "Subtype": "Shadow Veil",
            "Date": "October 31, 2021 - Now"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 33,
                    "quantity": 1
                },
                {
                    "id": 19,
                    "quantity": 1
                },
                {
                    "id": 17,
                    "quantity": 1
                },
                {
                    "id": 3,
                    "quantity": 1
                },
                {
                    "id": 28,
                    "quantity": 1
                }
            ]
        },
        "description": "A hood of unknown origin and fabric, beneath which an unnatural darkness clouds the appearance of the wearer.",
        "shortDescription": "",
        "visualDescription": "Simple and unassuming, this hood appears like any other cloth hood on Haerra. However, while worn, an inky darkness hides the appearance of the wearer; inspiring fear in those who peer too close.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 47,
                        "name": "ReduceBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/reduceburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Reduced Burn",
                        "min": 0,
                        "max": 15
                    },
                    {
                        "id": 34,
                        "name": "AvoidBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/avoidburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Avoid All Burns",
                        "min": 0,
                        "max": 2
                    },
                    {
                        "id": 61,
                        "name": "HarvestCritChance",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestcritchance",
                        "paramType1": "percent",
                        "paramValue1": "0-10",
                        "nature": "Mechanic",
                        "description": "{parameter1} increased chance to critically harvest yield",
                        "min": 0,
                        "max": 3
                    },
                    {
                        "id": 69,
                        "name": "RandomRuneBonus",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomrunebonus",
                        "paramType1": "percent",
                        "paramValue1": "0-10",
                        "nature": "Buff",
                        "description": "{parameter1} bonus yield given as a random rune",
                        "min": 0,
                        "max": 2
                    },
                    {
                        "id": 2,
                        "name": "HarvestFee",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Fee",
                        "min": 30,
                        "max": 30,
                        "value": 30
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "min": 0,
                        "max": 2,
                        "map": {
                            "0": "EL",
                            "1": "ELD",
                            "2": "TIR"
                        }
                    },
                    {
                        "id": 93,
                        "name": "AttributeUnlockOnConsecutiveEquipTime",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/attributeunlockonconsecutiveequiptime",
                        "paramType1": "hours",
                        "nature": "Requirement",
                        "description": "Must equip for {hours} consecutive hours to receive benefit of {TargetAttributeToUnlock}",
                        "min": 336,
                        "max": 336,
                        "value": 336
                    },
                    {
                        "id": 94,
                        "name": "TargetAttributeToUnlock",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/targetattributetounlock",
                        "paramType1": "attributeslot",
                        "paramValue1": "0-7",
                        "nature": "Neutral",
                        "description": "{parameter1} To Unlock",
                        "min": null,
                        "max": null
                    }
                ],
                "perfection": [
                    15,
                    2,
                    null,
                    2,
                    30,
                    null,
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1060,
                        "name": "DamageResist",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} damage resist"
                    },
                    {
                        "id": 34,
                        "name": "AvoidBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/avoidburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Avoid All Burns",
                        "min": 0,
                        "max": 2
                    },
                    {
                        "id": 61,
                        "name": "HarvestCritChance",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestcritchance",
                        "paramType1": "percent",
                        "paramValue1": "0-10",
                        "nature": "Mechanic",
                        "description": "{parameter1} increased chance to critically harvest yield",
                        "min": 0,
                        "max": 3
                    },
                    {
                        "id": 69,
                        "name": "RandomRuneBonus",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomrunebonus",
                        "paramType1": "percent",
                        "paramValue1": "0-10",
                        "nature": "Buff",
                        "description": "{parameter1} bonus yield given as a random rune",
                        "min": 0,
                        "max": 2
                    },
                    {
                        "id": 2,
                        "name": "HarvestFee",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Fee",
                        "min": 30,
                        "max": 30,
                        "value": 30
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "min": 7,
                        "max": 17,
                        "map": {
                            "7": "RAL",
                            "8": "ORT",
                            "9": "THUL",
                            "10": "AMN",
                            "11": "SOL",
                            "12": "SHAEL",
                            "13": "DOL",
                            "14": "HEL",
                            "15": "IO",
                            "16": "LUM",
                            "17": "KO"
                        }
                    },
                    {
                        "id": 93,
                        "name": "AttributeUnlockOnConsecutiveEquipTime",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/attributeunlockonconsecutiveequiptime",
                        "paramType1": "hours",
                        "nature": "Requirement",
                        "description": "Must equip for {hours} consecutive hours to receive benefit of {TargetAttributeToUnlock}",
                        "min": 336,
                        "max": 336,
                        "value": 336
                    },
                    {
                        "id": 94,
                        "name": "TargetAttributeToUnlock",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/targetattributetounlock",
                        "paramType1": "attributeslot",
                        "paramValue1": "0-7",
                        "nature": "Neutral",
                        "description": "{parameter1} To Unlock",
                        "min": null,
                        "max": null
                    }
                ],
                "perfection": [
                    null,
                    2,
                    null,
                    2,
                    30,
                    null,
                    null,
                    null
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 0,
                        "max": 2
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 3,
                        "max": 6
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 5,
                        "max": 10
                    },
                    {
                        "id": 2902,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} Magic Find",
                        "min": 10,
                        "max": 10,
                        "value": 10
                    },
                    {
                        "id": 4150,
                        "name": "RuneOnWinChance",
                        "isEnabled": false,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/runeonwinchance",
                        "paramType1": "percent",
                        "paramType2": "rune",
                        "paramValue1": "0-100",
                        "paramValue2": "EL-ZOD",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} chance of receiving {parameter2} upon winning a match"
                    }
                ],
                "perfection": [
                    10,
                    2,
                    6,
                    10,
                    10,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [
            32
        ],
        "category": "accessory"
    },
    {
        "id": 31,
        "name": "Hellfire",
        "icon": "https://rune.game/images/items/00031.png",
        "image": "https://dl.airtable.com/.attachments/ef9ec698aa2ca75c4b23e1686274e7dd/6cd51a59/00031.png?ts=1657415466&userId=usrf0GZYc5zCl9Cv7&cs=ba141ea5b76e1e86",
        "value": "0",
        "type": 7,
        "subType": 13,
        "specificType": 26,
        "slots": [
            18
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 2640,
        "attributes": [],
        "details": {
            "Type": "Body Armor",
            "Subtype": "Dragonforged Cuirass",
            "Rune Word": "Fal Mal Pul Um Zod"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 19,
                    "quantity": 1
                },
                {
                    "id": 23,
                    "quantity": 1
                },
                {
                    "id": 21,
                    "quantity": 1
                },
                {
                    "id": 22,
                    "quantity": 1
                },
                {
                    "id": 33,
                    "quantity": 1
                }
            ]
        },
        "description": "Produced on one of the rare occasions that dragons lent their energies to crafting, this armor is always hot to the touch.",
        "shortDescription": "",
        "visualDescription": "Glimmering with a silver-blue hue, one might incorrectly assume this armor to be cool to the touch. However, this intricately carved breastplate radiates heat, searing all but the wearer.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 5,
                        "max": 15
                    },
                    {
                        "id": 11,
                        "name": "RandomRuneExchange",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Random Rune Exchange",
                        "min": 0,
                        "max": 2
                    },
                    {
                        "id": 63,
                        "name": "HarvestOverTime",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestovertime",
                        "paramType1": "percent",
                        "paramValue1": "0-10",
                        "nature": "Mechanic",
                        "description": "Add {parameter1} to harvest, vested over time",
                        "min": 0,
                        "max": 3
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 0,
                        "max": 4
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 0,
                        "max": 3
                    }
                ],
                "perfection": [
                    15,
                    null,
                    null,
                    4,
                    0
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1060,
                        "name": "DamageResist",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} damage resist"
                    },
                    {
                        "id": 1219,
                        "name": "IncreaseHealthOnKill",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasehealthonkill",
                        "paramType1": "value",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} health on kill.",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 1303,
                        "name": "RandomizedItemAttribute",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomizeditemattribute",
                        "paramType1": "randomattributeid",
                        "nature": "Mechanic",
                        "influences": "All",
                        "description": "{RandomAttributeID}.id.description",
                        "min": 1,
                        "max": 3
                    },
                    {
                        "id": 1150,
                        "name": "WinRewardsIncrease",
                        "isEnabled": true,
                        "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
                        "paramType1": "percent",
                        "paramValue1": "0-20",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} win bonus",
                        "min": 1,
                        "max": 3
                    },
                    {
                        "id": 1104,
                        "name": "CriticalPointsMultiplierIncrease",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/criticalpointsmultiplierincrease",
                        "paramType1": "percent",
                        "paramValue1": "0-35",
                        "nature": "Buff",
                        "influences": "Game",
                        "description": "{parameter1} increase to critical bonus.",
                        "min": 1,
                        "max": 5
                    },
                    {
                        "id": 91,
                        "name": "AttributeDebuffToBuffOnEquipTime",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/attributedebufftobuffonequiptime",
                        "paramType1": "hours",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Requires {hours} hours to unlock full potential.",
                        "min": 336,
                        "max": 336,
                        "value": 336
                    },
                    {
                        "id": 95,
                        "name": "DebuffAttributeToChange",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/debuffattributetochange",
                        "paramType1": "attributeid",
                        "nature": "Neutral"
                    },
                    {
                        "id": 96,
                        "name": "BuffAttributeToChange",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/buffattributetochange",
                        "paramType1": "attributeid",
                        "nature": "Neutral"
                    }
                ],
                "perfection": [
                    null,
                    15,
                    null,
                    3,
                    5,
                    null,
                    null,
                    null
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 10,
                        "max": 20
                    },
                    {
                        "id": 2307,
                        "name": "IncreaseAbsorb",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseabsorb",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} absorb",
                        "min": 4,
                        "max": 10
                    },
                    {
                        "id": 2373,
                        "name": "IncreaseRandomStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaserandomstat",
                        "paramType1": "stats",
                        "paramType2": "percent",
                        "map": {}
                    },
                    {
                        "id": 2014,
                        "name": "IncreaseAilmentChance",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseailmentchance",
                        "paramType1": "percent",
                        "paramType2": "ailment",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} chance to apply {parameter2}",
                        "min": 4,
                        "max": 8
                    },
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 12,
                        "max": 15
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 2000,
                        "name": "IncreaseDamage",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {parameter2} damage"
                    },
                    {
                        "id": 2902,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} Magic Find",
                        "min": 10,
                        "max": 10,
                        "value": 10
                    }
                ],
                "perfection": [
                    20,
                    10,
                    null,
                    8,
                    15,
                    null,
                    null,
                    10
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            451,
            516
        ],
        "materials": [
            21
        ],
        "category": "accessory"
    },
    {
        "id": 33,
        "name": "Growth",
        "icon": "https://rune.game/images/items/00033.png",
        "value": "0",
        "type": 3,
        "subType": 9,
        "specificType": 28,
        "slots": [
            2
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 49500,
        "attributes": [],
        "details": {
            "Type": "Shield",
            "Subtype": "Ironwood Aegis"
        },
        "recipe": {
            "requirement": []
        },
        "description": "Comparable in durability to even the strongest metals, this wooden shield was shaped and enchanted by druidic magic.",
        "shortDescription": "",
        "visualDescription": "Moreso grown than crafted, this beautiful ironwood shield is gnarled with knots and vines that cascade down its exterior.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 47,
                        "name": "ReduceBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/reduceburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Reduced Burn",
                        "min": 0,
                        "max": 8
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 4,
                        "max": 8
                    },
                    {
                        "id": 11,
                        "name": "RandomRuneExchange",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Random Rune Exchange",
                        "min": 0,
                        "max": 4
                    },
                    {
                        "id": 12,
                        "name": "FindGuildToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/findguildtoken",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Guild Token",
                        "min": 0,
                        "max": 3
                    },
                    {
                        "id": 127,
                        "name": "RaidTwoAttribute",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/raidtwoattribute",
                        "paramType1": "value",
                        "paramValue1": "0-100",
                        "nature": "Neutral",
                        "description": "[Hidden Attribute]",
                        "min": 1,
                        "max": 5
                    },
                    {
                        "id": 72,
                        "name": "SpecificWeaponType",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/specificweapontype",
                        "paramType1": "itemtype",
                        "nature": "Mechanic",
                        "description": "Bonus Weapon: {parameter1}",
                        "min": null,
                        "max": null
                    },
                    {
                        "id": 21,
                        "name": "SpecificClass",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
                        "paramType1": "classId",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Class Only ({parameter1})",
                        "map": {}
                    }
                ],
                "perfection": [
                    10,
                    8,
                    8,
                    null,
                    3,
                    null,
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1060,
                        "name": "DamageResist",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} damage resist"
                    },
                    {
                        "id": 47,
                        "name": "ReduceBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/reduceburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Reduced Burn",
                        "min": 2,
                        "max": 8
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 5,
                        "max": 8
                    },
                    {
                        "id": 11,
                        "name": "RandomRuneExchange",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Random Rune Exchange",
                        "min": 0,
                        "max": 4
                    },
                    {
                        "id": 12,
                        "name": "FindGuildToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/findguildtoken",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Guild Token",
                        "min": 0,
                        "max": 3
                    },
                    {
                        "id": 4129,
                        "name": "SkillLevel",
                        "isEnabled": false,
                        "nexusLink": "https://nexus.rune.game/item-attribute/skilllevel",
                        "min": 0,
                        "max": 1
                    },
                    {
                        "id": 72,
                        "name": "SpecificWeaponType",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/specificweapontype",
                        "paramType1": "itemtype",
                        "nature": "Mechanic",
                        "description": "Bonus Weapon: {parameter1}",
                        "min": null,
                        "max": null
                    },
                    {
                        "id": 21,
                        "name": "SpecificClass",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
                        "paramType1": "classId",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Class Only ({parameter1})",
                        "map": {}
                    }
                ],
                "perfection": [
                    null,
                    8,
                    8,
                    null,
                    3,
                    null,
                    null,
                    null
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 4,
                        "max": 10
                    },
                    {
                        "id": 47,
                        "name": "ReduceBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/reduceburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Reduced Burn",
                        "min": 2,
                        "max": 8
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 5,
                        "max": 8
                    },
                    {
                        "id": 11,
                        "name": "RandomRuneExchange",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Random Rune Exchange",
                        "min": 0,
                        "max": 4
                    },
                    {
                        "id": 12,
                        "name": "FindGuildToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/findguildtoken",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Guild Token",
                        "min": 0,
                        "max": 3
                    },
                    {
                        "id": 4129,
                        "name": "SkillLevel",
                        "isEnabled": false,
                        "nexusLink": "https://nexus.rune.game/item-attribute/skilllevel",
                        "min": 0,
                        "max": 1
                    },
                    {
                        "id": 72,
                        "name": "SpecificWeaponType",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/specificweapontype",
                        "paramType1": "itemtype",
                        "nature": "Mechanic",
                        "description": "Bonus Weapon: {parameter1}",
                        "min": null,
                        "max": null
                    },
                    {
                        "id": 21,
                        "name": "SpecificClass",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
                        "paramType1": "classId",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Class Only ({parameter1})",
                        "min": null,
                        "max": null,
                        "map": {}
                    }
                ],
                "perfection": [
                    10,
                    8,
                    8,
                    null,
                    3,
                    null,
                    null,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            466
        ],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 34,
        "name": "Blur",
        "icon": "https://rune.game/images/items/00034.png",
        "image": "https://dl.airtable.com/.attachments/01dc718ed88b8790d93a9a91c33060b0/baa39c08/00034.png?ts=1657415474&userId=usrf0GZYc5zCl9Cv7&cs=bad24aa7e39711ea",
        "value": "0",
        "type": 7,
        "subType": 13,
        "specificType": 29,
        "slots": [
            18
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 8712,
        "attributes": [],
        "details": {
            "Type": "Body Armor",
            "Subtype": "Drakehide Vestments",
            "Rune Word": "Pul Lo Um Zod"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 21,
                    "quantity": 1
                },
                {
                    "id": 28,
                    "quantity": 1
                },
                {
                    "id": 22,
                    "quantity": 1
                },
                {
                    "id": 33,
                    "quantity": 1
                }
            ]
        },
        "description": "Enchanted with evasive magic, even the surest of strikes have trouble finding purchase on this finely-crafted armor.",
        "shortDescription": "",
        "visualDescription": "Made more for dexterity than pure physical defense, this light armor is weaved together from silvery pauldrons to drakehide leathers and straps.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 34,
                        "name": "AvoidBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/avoidburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Avoid All Burns",
                        "min": 0,
                        "max": 1
                    },
                    {
                        "id": 4,
                        "name": "SendHarvestHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 62,
                        "name": "HarvestCritMultiplier",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestcritmultiplier",
                        "paramType1": "percent",
                        "paramValue1": "0-10",
                        "nature": "Buff",
                        "description": "{parameter1} critical harvest bonus",
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 5,
                        "max": 10
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    }
                ],
                "perfection": [
                    10,
                    1,
                    null,
                    10,
                    10,
                    null
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1060,
                        "name": "DamageResist",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} damage resist"
                    },
                    {
                        "id": 34,
                        "name": "AvoidBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/avoidburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Avoid All Burns",
                        "min": 0,
                        "max": 1
                    },
                    {
                        "id": 4,
                        "name": "SendHarvestHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 62,
                        "name": "HarvestCritMultiplier",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestcritmultiplier",
                        "paramType1": "percent",
                        "paramValue1": "0-10",
                        "nature": "Buff",
                        "description": "{parameter1} critical harvest bonus",
                        "min": 4,
                        "max": 10
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 2,
                        "max": 2,
                        "value": 2
                    },
                    {
                        "id": 93,
                        "name": "AttributeUnlockOnConsecutiveEquipTime",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/attributeunlockonconsecutiveequiptime",
                        "paramType1": "hours",
                        "nature": "Requirement",
                        "description": "Must equip for {hours} consecutive hours to receive benefit of {TargetAttributeToUnlock}",
                        "min": 168,
                        "max": 168,
                        "value": 168
                    },
                    {
                        "id": 94,
                        "name": "TargetAttributeToUnlock",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/targetattributetounlock",
                        "paramType1": "attributeslot",
                        "paramValue1": "0-7",
                        "nature": "Neutral",
                        "description": "{parameter1} To Unlock",
                        "min": null,
                        "max": null
                    }
                ],
                "perfection": [
                    null,
                    1,
                    null,
                    10,
                    2,
                    null,
                    null
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 10,
                        "max": 20
                    },
                    {
                        "id": 2914,
                        "name": "DoublePickupChance",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/doublepickupchance",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} chance to double an item pickup",
                        "min": 0,
                        "max": 1
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 4,
                        "max": 10
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 10,
                        "max": 10,
                        "value": 10
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    }
                ],
                "perfection": [
                    20,
                    1,
                    5,
                    10,
                    10,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            499
        ],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 35,
        "name": "Mercy",
        "icon": "https://rune.game/images/items/00035.png",
        "image": "https://dl.airtable.com/.attachments/300b9ba0445fed63fce7666e93abfb1d/b291cb49/00035.png?ts=1657415475&userId=usrf0GZYc5zCl9Cv7&cs=b9f1805ed18c7f82",
        "value": "0",
        "type": 1,
        "subType": 5,
        "specificType": 31,
        "slots": [
            1,
            2
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1296,
        "attributes": [],
        "details": {
            "Type": "One-Handed Weapon",
            "Subtype": "Fanged Dagger",
            "Rune Word": "Thul El Sol Hel Tir"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 10,
                    "quantity": 1
                },
                {
                    "id": 1,
                    "quantity": 1
                },
                {
                    "id": 12,
                    "quantity": 1
                },
                {
                    "id": 15,
                    "quantity": 1
                },
                {
                    "id": 3,
                    "quantity": 1
                }
            ]
        },
        "description": "An aura of menace surrounds this dagger, its prominent serrations promising a quick and bloody end to the foes of its wielder.",
        "shortDescription": "",
        "visualDescription": "A lethal dagger of intimidating proportions, this blade draws the ire of even the most experienced soldiers. With multiple serrated edges filing like waves along the blue-hued blade, it hurts far more coming out than going in.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 2,
                        "max": 7
                    },
                    {
                        "id": 4,
                        "name": "SendHarvestHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 34,
                        "name": "AvoidBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/avoidburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Avoid All Burns",
                        "min": 0,
                        "max": 1
                    },
                    {
                        "id": 19,
                        "name": "CreateRandomRuneword",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/createrandomruneword",
                        "paramType1": "chance",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Chance To Create Random Runeword",
                        "min": 0,
                        "max": 2
                    },
                    {
                        "id": 2,
                        "name": "HarvestFee",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Fee",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "min": 3,
                        "max": 5,
                        "map": {
                            "3": "NEF",
                            "4": "ETH",
                            "5": "ITH"
                        }
                    },
                    {
                        "id": 39,
                        "name": "AddSkill",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
                        "paramType1": "skill",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Use Skill: {parameter1} (SOON)",
                        "map": {}
                    },
                    {
                        "id": 21,
                        "name": "SpecificClass",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
                        "paramType1": "classId",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Class Only ({parameter1})",
                        "map": {}
                    }
                ],
                "perfection": [
                    7,
                    null,
                    1,
                    2,
                    10,
                    null,
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield"
                    },
                    {
                        "id": 4,
                        "name": "SendHarvestHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 34,
                        "name": "AvoidBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/avoidburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Avoid All Burns",
                        "min": 0,
                        "max": 2
                    },
                    {
                        "id": 19,
                        "name": "CreateRandomRuneword",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/createrandomruneword",
                        "paramType1": "chance",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Chance To Create Random Runeword",
                        "min": 0,
                        "max": 1
                    },
                    {
                        "id": 2,
                        "name": "HarvestFee",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Fee",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "min": 3,
                        "max": 5,
                        "map": {
                            "3": "NEF",
                            "4": "ETH",
                            "5": "ITH"
                        }
                    },
                    {
                        "id": 4129,
                        "name": "SkillLevel",
                        "isEnabled": false,
                        "nexusLink": "https://nexus.rune.game/item-attribute/skilllevel",
                        "min": 1,
                        "max": 1,
                        "value": 1
                    },
                    {
                        "id": 21,
                        "name": "SpecificClass",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
                        "paramType1": "classId",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Class Only ({parameter1})",
                        "map": {}
                    }
                ],
                "perfection": [
                    null,
                    null,
                    2,
                    1,
                    10,
                    null,
                    null,
                    null
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2000,
                        "name": "IncreaseDamage",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {parameter2} damage",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 2002,
                        "name": "IncreaseDamageOverTime",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamageovertime",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} increase to {parameter2} damage over time",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 2914,
                        "name": "DoublePickupChance",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/doublepickupchance",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} chance to double an item pickup",
                        "min": 1,
                        "max": 2
                    },
                    {
                        "id": 3213,
                        "name": "SelfEffectOnCondition",
                        "isEnabled": false,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/selfeffectoncondition",
                        "paramType1": "conditions",
                        "paramType2": "conditionparams",
                        "paramType3": "effect",
                        "map": {}
                    },
                    {
                        "id": 2601,
                        "name": "IncreaseStatSkill",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestatskill",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "skill",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} to {parameter2} for {param3}",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 4150,
                        "name": "RuneOnWinChance",
                        "isEnabled": false,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/runeonwinchance",
                        "paramType1": "percent",
                        "paramType2": "rune",
                        "paramValue1": "0-100",
                        "paramValue2": "EL-ZOD",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} chance of receiving {parameter2} upon winning a match"
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    }
                ],
                "perfection": [
                    15,
                    15,
                    2,
                    null,
                    15,
                    null,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            526
        ],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 36,
        "name": "Edict",
        "icon": "https://rune.game/images/items/00036.png",
        "value": "0",
        "type": 3,
        "subType": 28,
        "specificType": 32,
        "slots": [
            2
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1320,
        "attributes": [],
        "details": {
            "Type": "Shield",
            "Subtype": "Rune-Inscribed Tome"
        },
        "recipe": {
            "requirement": []
        },
        "description": "This leather-bound tome contains powerful incantations which give the bearer significant influence over the spirit world.",
        "shortDescription": "",
        "visualDescription": "With a giant skull emblazoned on the face of this dusty leather-bound volume, the necromantic purpose of this book is all too obvious.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 2,
                        "max": 5
                    },
                    {
                        "id": 61,
                        "name": "HarvestCritChance",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestcritchance",
                        "paramType1": "percent",
                        "paramValue1": "0-10",
                        "nature": "Mechanic",
                        "description": "{parameter1} increased chance to critically harvest yield",
                        "min": 2,
                        "max": 2,
                        "value": 2
                    },
                    {
                        "id": 4,
                        "name": "SendHarvestHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
                        "min": 25,
                        "max": 30
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    },
                    {
                        "id": 90,
                        "name": "UnlockSkillMod",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskillmod",
                        "nature": "Buff",
                        "min": 4001,
                        "max": 4005
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 2,
                        "name": "HarvestFee",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Fee",
                        "min": 5,
                        "max": 10
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "min": 13,
                        "max": 17,
                        "map": {
                            "13": "DOL",
                            "14": "HEL",
                            "15": "IO",
                            "16": "LUM",
                            "17": "KO"
                        }
                    }
                ],
                "perfection": [
                    5,
                    null,
                    null,
                    5,
                    4005,
                    0,
                    5,
                    null
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 70,
                        "name": "YieldBonusSpecificWeapon",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/yieldbonusspecificweapon",
                        "paramType1": "percent",
                        "paramValue1": "1-25",
                        "nature": "Buff",
                        "description": "{parameter1} increase to {weapon} harvest yield bonus"
                    },
                    {
                        "id": 72,
                        "name": "SpecificWeaponType",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/specificweapontype",
                        "paramType1": "itemtype",
                        "nature": "Mechanic",
                        "description": "Bonus Weapon: {parameter1}"
                    },
                    {
                        "id": 4,
                        "name": "SendHarvestHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
                        "min": 15,
                        "max": 30
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    },
                    {
                        "id": 4129,
                        "name": "SkillLevel",
                        "isEnabled": false,
                        "nexusLink": "https://nexus.rune.game/item-attribute/skilllevel",
                        "min": 1,
                        "max": 1,
                        "value": 1
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 5,
                        "max": 15
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "min": 13,
                        "max": 15,
                        "map": {
                            "13": "DOL",
                            "14": "HEL",
                            "15": "IO"
                        }
                    },
                    {
                        "id": 21,
                        "name": "SpecificClass",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
                        "paramType1": "classId",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Class Only ({parameter1})",
                        "map": {}
                    }
                ],
                "perfection": [
                    null,
                    null,
                    null,
                    5,
                    null,
                    5,
                    null,
                    null
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2000,
                        "name": "IncreaseDamage",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {parameter2} damage",
                        "min": 2,
                        "max": 5
                    },
                    {
                        "id": 72,
                        "name": "SpecificWeaponType",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/specificweapontype",
                        "paramType1": "itemtype",
                        "nature": "Mechanic",
                        "description": "Bonus Weapon: {parameter1}"
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    },
                    {
                        "id": 4129,
                        "name": "SkillLevel",
                        "isEnabled": false,
                        "nexusLink": "https://nexus.rune.game/item-attribute/skilllevel",
                        "min": 1,
                        "max": 1,
                        "value": 1
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 5,
                        "max": 15
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "map": {}
                    },
                    {
                        "id": 21,
                        "name": "SpecificClass",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
                        "paramType1": "classId",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Class Only ({parameter1})",
                        "map": {}
                    }
                ],
                "perfection": [
                    5,
                    null,
                    5,
                    null,
                    5,
                    null,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 37,
        "name": "Burial",
        "icon": "https://rune.game/images/items/00037.png",
        "image": "https://dl.airtable.com/.attachments/0de29c7c7e884f907019358f60e8d9de/57f294df/00037.png?ts=1657415478&userId=usrf0GZYc5zCl9Cv7&cs=f108d72bf5dc6831",
        "value": "0",
        "type": 2,
        "subType": 21,
        "specificType": 33,
        "slots": [
            1
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 10571,
        "attributes": [],
        "details": {
            "Type": "Two-Handed Weapon",
            "Subtype": "Soulreaver Scythe",
            "Rune Word": "Mal Ist Zod Tal Eld"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 23,
                    "quantity": 1
                },
                {
                    "id": 24,
                    "quantity": 1
                },
                {
                    "id": 33,
                    "quantity": 1
                },
                {
                    "id": 7,
                    "quantity": 1
                },
                {
                    "id": 2,
                    "quantity": 1
                }
            ]
        },
        "description": "Faint wisps of ichor energy endlessly drift from the scythe's blade, its necromantic enchantments trivializing the process of harvesting souls.",
        "shortDescription": "",
        "visualDescription": "While not particularly pretty, this massive scythe is purely practical. A gnarled and twisted handle of shadewood is affixed to a curved blade of muted and chipped steel. The edges of the long blade froth with necrotic energy, grasping towards living souls that pass by.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 0,
                        "max": 30
                    },
                    {
                        "id": 4,
                        "name": "SendHarvestHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Chance To Send Harvest To Hidden Pool"
                    },
                    {
                        "id": 119,
                        "name": "YieldBonusFromHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/yieldbonusfromhiddenpool",
                        "paramType1": "value",
                        "nature": "Buff",
                        "description": "{parameter1} Yield Bonus On Harvests From Hidden Pool",
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 0,
                        "max": 30
                    },
                    {
                        "id": 2,
                        "name": "HarvestFee",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Fee"
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "min": 0,
                        "max": 2,
                        "map": {
                            "0": "EL",
                            "1": "ELD",
                            "2": "TIR"
                        }
                    },
                    {
                        "id": 39,
                        "name": "AddSkill",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
                        "paramType1": "skill",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Use Skill: {parameter1} (SOON)",
                        "map": {}
                    },
                    {
                        "id": 21,
                        "name": "SpecificClass",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
                        "paramType1": "classId",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Class Only ({parameter1})",
                        "map": {}
                    }
                ],
                "perfection": [
                    30,
                    null,
                    10,
                    0,
                    null,
                    null,
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [
                    {
                        "id": 2000,
                        "name": "IncreaseDamage",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {parameter2} damage",
                        "min": 10,
                        "max": 25
                    },
                    {
                        "id": 2302,
                        "name": "IncreaseEnergy",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseenergy",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} maximum energy",
                        "min": 8,
                        "max": 15
                    },
                    {
                        "id": 3200,
                        "name": "IncreaseOnKill",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseonkill",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "description": "{parameter1} {parameter2} on kill",
                        "min": 20,
                        "max": 25
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 13,
                        "max": 18
                    },
                    {
                        "id": 2902,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} Magic Find",
                        "min": 5,
                        "max": 25
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 2903,
                        "name": "IncreaseRankRewardBonus",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaserankrewardbonus",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} Increase to Rank Reward Bonuses",
                        "min": 5,
                        "max": 15
                    }
                ],
                "perfection": [
                    25,
                    15,
                    25,
                    18,
                    25,
                    null,
                    15
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            520,
            493
        ],
        "materials": [
            37
        ],
        "category": "accessory"
    },
    {
        "id": 38,
        "name": "Shade",
        "icon": "https://rune.game/images/items/00038.png",
        "value": "0",
        "type": 11,
        "subType": 12,
        "specificType": 34,
        "slots": [
            12
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": false,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1728,
        "attributes": [],
        "details": {
            "Type": "Boot",
            "Subtype": "Whispertread Boots"
        },
        "recipe": {
            "requirement": []
        },
        "description": "Designed by an Irondell craftswoman who claims to collaborate with fay creatures, these boots seem to naturally muffle the sound of every step.",
        "shortDescription": "",
        "visualDescription": "TBD",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 47,
                        "name": "ReduceBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/reduceburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Reduced Burn",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 2,
                        "max": 4
                    },
                    {
                        "id": 61,
                        "name": "HarvestCritChance",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestcritchance",
                        "paramType1": "percent",
                        "paramValue1": "0-10",
                        "nature": "Mechanic",
                        "description": "{parameter1} increased chance to critically harvest yield",
                        "min": 0,
                        "max": 3
                    },
                    {
                        "id": 66,
                        "name": "HarvestTheft",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvesttheft",
                        "paramType1": "value",
                        "paramValue1": "0-10",
                        "nature": "Mechanic",
                        "description": "Enable the option to sacrifice up to {parameter1} of your harvest in order to steal {parameter1} of the next raider's harvest from the same pool.",
                        "min": 0,
                        "max": 3
                    },
                    {
                        "id": 2,
                        "name": "HarvestFee",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Fee",
                        "min": 5,
                        "max": 10
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "min": 16,
                        "max": 23,
                        "map": {
                            "16": "LUM",
                            "17": "KO",
                            "18": "FAL",
                            "19": "LEM",
                            "20": "PUL",
                            "21": "UM",
                            "22": "MAL",
                            "23": "IST"
                        }
                    }
                ],
                "perfection": [
                    5,
                    4,
                    null,
                    null,
                    5,
                    null
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 88,
                        "name": "FindFashionShard",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/findfashionshard",
                        "paramType1": "value",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Fashion Find"
                    },
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 10,
                        "max": 10,
                        "value": 10
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 10,
                        "max": 10,
                        "value": 10
                    },
                    {
                        "id": 11,
                        "name": "RandomRuneExchange",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Random Rune Exchange",
                        "min": 6,
                        "max": 6,
                        "value": 6
                    },
                    {
                        "id": 39,
                        "name": "AddSkill",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
                        "paramType1": "skill",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Use Skill: {parameter1} (SOON)",
                        "map": {}
                    }
                ],
                "perfection": [
                    null,
                    10,
                    10,
                    null,
                    null
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 20,
                        "max": 20,
                        "value": 20
                    },
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 10,
                        "max": 10,
                        "value": 10
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 10,
                        "max": 10,
                        "value": 10
                    },
                    {
                        "id": 11,
                        "name": "RandomRuneExchange",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Random Rune Exchange",
                        "min": 6,
                        "max": 6,
                        "value": 6
                    }
                ],
                "perfection": [
                    20,
                    10,
                    10,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 39,
        "name": "Folly",
        "icon": "https://rune.game/images/items/00039.png",
        "value": "0",
        "type": 5,
        "subType": 10,
        "specificType": 35,
        "slots": [
            3
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": false,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {
            "Type": "Helm",
            "Subtype": "Mask of Irony"
        },
        "recipe": {
            "requirement": []
        },
        "description": "What is the state of mind that leads a person to strap a barrel's lid to their face for protection?",
        "shortDescription": "",
        "visualDescription": "Intricately crafted from the finest straight-grained Ashyran oaks, steepled with perfectly anomalous swirled knots, meticulously infused with the most premier burgundy coloration on its reverse side, and expertly conjoined with the highest-quality resins and organic straw.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 88,
                        "name": "FindFashionShard",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/findfashionshard",
                        "paramType1": "value",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Fashion Find",
                        "min": 35,
                        "max": 35,
                        "value": 35
                    },
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 10,
                        "max": 10,
                        "value": 10
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 10,
                        "max": 10,
                        "value": 10
                    },
                    {
                        "id": 11,
                        "name": "RandomRuneExchange",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Random Rune Exchange",
                        "min": 6,
                        "max": 6,
                        "value": 6
                    },
                    {
                        "id": 39,
                        "name": "AddSkill",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
                        "paramType1": "skill",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Use Skill: {parameter1} (SOON)",
                        "map": {}
                    }
                ],
                "perfection": [
                    35,
                    10,
                    10,
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [
                    {
                        "id": 39,
                        "name": "AddSkill",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
                        "paramType1": "skill",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Use Skill: {parameter1} (SOON)",
                        "map": {}
                    }
                ],
                "perfection": [
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 40,
        "name": "Soulcord",
        "icon": "https://rune.game/images/items/00040.png",
        "value": "0",
        "type": 12,
        "subType": 14,
        "specificType": 36,
        "slots": [
            13,
            16,
            14
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": false,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 6000,
        "attributes": [],
        "details": {
            "Type": "Ring",
            "Subtype": "Darkblood Band"
        },
        "recipe": {
            "requirement": []
        },
        "description": "Empowered by tethering tortured souls to your service, this demonbone ring provides capable necromancers with an endless fount of undead.",
        "shortDescription": "",
        "visualDescription": "This blood-tinged band of demonbone exudes a strange kind of spartan elegance despite its malevolent origin.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 118,
                        "name": "YieldBonusToHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/yieldbonustohiddenpool",
                        "paramType1": "value",
                        "nature": "Buff",
                        "description": "{parameter1} yield bonus on harvests to hidden pool",
                        "min": 0,
                        "max": 4
                    },
                    {
                        "id": 119,
                        "name": "YieldBonusFromHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/yieldbonusfromhiddenpool",
                        "paramType1": "value",
                        "nature": "Buff",
                        "description": "{parameter1} Yield Bonus On Harvests From Hidden Pool",
                        "min": 0,
                        "max": 15
                    },
                    {
                        "id": 90,
                        "name": "UnlockSkillMod",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskillmod",
                        "nature": "Buff",
                        "min": 4011,
                        "max": 4015
                    },
                    {
                        "id": 126,
                        "name": "UnstakeLockedDurationFromHarvest",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unstakelockeddurationfromharvest",
                        "paramType1": "days",
                        "nature": "Mechanic",
                        "description": "Unstaking is locked for {parameter1} hours after harvest",
                        "min": 7,
                        "max": 21
                    },
                    {
                        "id": 100,
                        "name": "RequireSkill",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/requireskill",
                        "paramType1": "skill",
                        "nature": "Requirement",
                        "map": {}
                    },
                    {
                        "id": 122,
                        "name": "AttributeScaleWithHiddenPoolStake",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/attributescalewithhiddenpoolstake",
                        "paramType1": "value",
                        "nature": "Mechanic",
                        "description": "Item attributes scale with amount staked in hidden pool. Target amount: {parameter1}.",
                        "min": 250,
                        "max": 250,
                        "value": 250
                    },
                    {
                        "id": 121,
                        "name": "AttributeUnlockWhenHiddenPoolStake",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/attributeunlockwhenhiddenpoolstake",
                        "paramType1": "value",
                        "nature": "Requirement",
                        "description": "Must have {parameter1} tokens staked in hidden pool to use item's full potential",
                        "min": 250,
                        "max": 250,
                        "value": 250
                    },
                    {
                        "id": 94,
                        "name": "TargetAttributeToUnlock",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/targetattributetounlock",
                        "paramType1": "attributeslot",
                        "paramValue1": "0-7",
                        "nature": "Neutral",
                        "description": "{parameter1} To Unlock"
                    }
                ],
                "perfection": [
                    4,
                    15,
                    4015,
                    null,
                    null,
                    null,
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [
            38
        ],
        "category": "accessory"
    },
    {
        "id": 41,
        "name": "Windfall",
        "icon": "https://rune.game/images/items/00041.png",
        "value": "0",
        "type": 12,
        "subType": 14,
        "specificType": 37,
        "slots": [
            13,
            16,
            14
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": false,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 6480,
        "attributes": [],
        "details": {
            "Type": "Ring",
            "Subtype": "Prism Band"
        },
        "recipe": {
            "requirement": []
        },
        "description": "Commissioned by a legendary Elysium Mage adventurer, this ring is designed to turn devastating blunders into minor errors.",
        "shortDescription": "",
        "visualDescription": "Several precious metals were melded together with arcane power to produce this ring. A hauntingly beautiful work, and eye-catching to even the most austere-minded.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 123,
                        "name": "AvoidHarvestLossWithoutBonus",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/avoidharvestlosswithoutbonus",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "description": "{parameter1} chance to avoid harvest loss effects, receiving harvest without bonuses",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 20,
                        "max": 25
                    },
                    {
                        "id": 88,
                        "name": "FindFashionShard",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/findfashionshard",
                        "paramType1": "value",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Fashion Find",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    },
                    {
                        "id": 84,
                        "name": "RandomStaticAttribute",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomstaticattribute",
                        "paramType1": "value",
                        "nature": "Mechanic",
                        "min": 801,
                        "max": 820
                    },
                    {
                        "id": 5,
                        "name": "BurnEntireHarvest",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/burnentireharvest",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Chance To Burn Harvest",
                        "min": 0,
                        "max": 2
                    },
                    {
                        "id": 73,
                        "name": "HarvestTheftDefense",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvesttheftdefense",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} chance to defend harvest theft, taking the thief's runes instead",
                        "min": 0,
                        "max": 2
                    },
                    {
                        "id": 93,
                        "name": "AttributeUnlockOnConsecutiveEquipTime",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/attributeunlockonconsecutiveequiptime",
                        "paramType1": "hours",
                        "nature": "Requirement",
                        "description": "Must equip for {hours} consecutive hours to receive benefit of {TargetAttributeToUnlock}",
                        "min": 168,
                        "max": 168,
                        "value": 168
                    },
                    {
                        "id": 94,
                        "name": "TargetAttributeToUnlock",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/targetattributetounlock",
                        "paramType1": "attributeslot",
                        "paramValue1": "0-7",
                        "nature": "Neutral",
                        "description": "{parameter1} To Unlock"
                    }
                ],
                "perfection": [
                    5,
                    25,
                    5,
                    null,
                    0,
                    null,
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield"
                    },
                    {
                        "id": 30,
                        "name": "HarvestLockedLp",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestlockedlp",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Neutral",
                        "description": "{parameter1} Harvest Buy & Lock LP"
                    }
                ],
                "perfection": [
                    null,
                    null
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 30,
                        "name": "HarvestLockedLp",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestlockedlp",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Neutral",
                        "description": "{parameter1} Harvest Buy & Lock LP"
                    }
                ],
                "perfection": [
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 43,
        "name": "Thunderchild",
        "icon": "https://rune.game/images/items/00043.png",
        "image": "https://dl.airtable.com/.attachments/1f66cfc1b91d6e2c7ed07436a79777a3/ce8da9de/00043.png?ts=1657415486&userId=usrf0GZYc5zCl9Cv7&cs=479f12ed74e103d8",
        "value": "0",
        "type": 2,
        "subType": 38,
        "specificType": 158,
        "slots": [
            1
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1728,
        "attributes": [],
        "details": {
            "Type": "Two-Handed Weapon",
            "Subtype": "Fist of Eledon",
            "Rune Word": "Shael Ist Zod Mal Um"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 13,
                    "quantity": 1
                },
                {
                    "id": 24,
                    "quantity": 1
                },
                {
                    "id": 33,
                    "quantity": 1
                },
                {
                    "id": 23,
                    "quantity": 1
                },
                {
                    "id": 22,
                    "quantity": 1
                }
            ]
        },
        "description": "Runic inscriptions have transformed this stone hammer into a brutal conduit of Eledon's divine will.",
        "shortDescription": "",
        "visualDescription": "Crudely crafted from a stone known for its indestructibility, Thunderchild thrums with the tune of a distant storm. Inscribed with numerous runes, this hammer is dedicated to Borial, Eledon's Divine Tempest. On impact, the hammer emits a thunderclap that deafens nearby enemies.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 15,
                        "max": 30
                    },
                    {
                        "id": 127,
                        "name": "RaidTwoAttribute",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/raidtwoattribute",
                        "paramType1": "value",
                        "paramValue1": "0-100",
                        "nature": "Neutral",
                        "description": "[Hidden Attribute]",
                        "min": 2,
                        "max": 4
                    },
                    {
                        "id": 69,
                        "name": "RandomRuneBonus",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomrunebonus",
                        "paramType1": "percent",
                        "paramValue1": "0-10",
                        "nature": "Buff",
                        "description": "{parameter1} bonus yield given as a random rune",
                        "min": 5,
                        "max": 10
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 10,
                        "max": 10,
                        "value": 10
                    },
                    {
                        "id": 2,
                        "name": "HarvestFee",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Fee",
                        "min": 5,
                        "max": 10
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "map": {}
                    },
                    {
                        "id": 39,
                        "name": "AddSkill",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
                        "paramType1": "skill",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Use Skill: {parameter1} (SOON)",
                        "map": {}
                    }
                ],
                "perfection": [
                    30,
                    null,
                    10,
                    10,
                    5,
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [
                    {
                        "id": 2000,
                        "name": "IncreaseDamage",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {parameter2} damage",
                        "min": 20,
                        "max": 30
                    },
                    {
                        "id": 2013,
                        "name": "EffectChanceOnCondition",
                        "isEnabled": false,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/effectchanceoncondition",
                        "paramType1": "conditions",
                        "paramType2": "conditionparams",
                        "paramType3": "effect",
                        "paramValue1": "0-100",
                        "map": {}
                    },
                    {
                        "id": 3209,
                        "name": "CastOnCondition",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/castoncondition",
                        "paramType1": "conditions",
                        "paramType2": "conditionparams",
                        "paramType3": "skill",
                        "map": {}
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 2903,
                        "name": "IncreaseRankRewardBonus",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaserankrewardbonus",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} Increase to Rank Reward Bonuses",
                        "min": 5,
                        "max": 10
                    },
                    {
                        "id": 4155,
                        "name": "IncreaseGuildPrestigeGain",
                        "isEnabled": false,
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseguildprestigegain",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} increase to guild prestige gain following match.",
                        "min": 10,
                        "max": 20
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    }
                ],
                "perfection": [
                    30,
                    null,
                    null,
                    15,
                    10,
                    20,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            463,
            482,
            483,
            491
        ],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 44,
        "name": "Hellreaver",
        "icon": "https://rune.game/images/items/00044.png",
        "image": "https://dl.airtable.com/.attachments/05dc45bb336d198abed84cee6df55c6a/f745dddf/00044.png?ts=1657415488&userId=usrf0GZYc5zCl9Cv7&cs=18202f0730f3f453",
        "value": "0",
        "type": 2,
        "subType": 39,
        "specificType": 159,
        "slots": [
            1
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 71280,
        "attributes": [],
        "details": {
            "Type": "Two-Handed Weapon",
            "Subtype": "Ancestral Axe",
            "Rune Word": "Ral Ist Zod Mal Um"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 8,
                    "quantity": 1
                },
                {
                    "id": 24,
                    "quantity": 1
                },
                {
                    "id": 33,
                    "quantity": 1
                },
                {
                    "id": 23,
                    "quantity": 1
                },
                {
                    "id": 22,
                    "quantity": 1
                }
            ]
        },
        "description": "Passed down for generations among the barbaric Icefall Behemoths, Hellreaver embodies their vicious fighting style and terrifying war cry.",
        "shortDescription": "",
        "visualDescription": "Runic symbols etched across the blade describe its long, bloody history. Despite its extensive use, the metal gleams as if anxious to open the next violent chapter.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 30,
                        "max": 35
                    },
                    {
                        "id": 11,
                        "name": "RandomRuneExchange",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Random Rune Exchange",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 66,
                        "name": "HarvestTheft",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvesttheft",
                        "paramType1": "value",
                        "paramValue1": "0-10",
                        "nature": "Mechanic",
                        "description": "Enable the option to sacrifice up to {parameter1} of your harvest in order to steal {parameter1} of the next raider's harvest from the same pool.",
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 2,
                        "name": "HarvestFee",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Fee",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "map": {}
                    },
                    {
                        "id": 39,
                        "name": "AddSkill",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
                        "paramType1": "skill",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Use Skill: {parameter1} (SOON)",
                        "map": {}
                    }
                ],
                "perfection": [
                    35,
                    null,
                    null,
                    10,
                    10,
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [
                    {
                        "id": 2000,
                        "name": "IncreaseDamage",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {parameter2} damage",
                        "min": 20,
                        "max": 35
                    },
                    {
                        "id": 3213,
                        "name": "SelfEffectOnCondition",
                        "isEnabled": false,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/selfeffectoncondition",
                        "paramType1": "conditions",
                        "paramType2": "conditionparams",
                        "paramType3": "effect",
                        "map": {}
                    },
                    {
                        "id": 2002,
                        "name": "IncreaseDamageOverTime",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamageovertime",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} increase to {parameter2} damage over time",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 10,
                        "max": 10,
                        "value": 10
                    },
                    {
                        "id": 4150,
                        "name": "RuneOnWinChance",
                        "isEnabled": false,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/runeonwinchance",
                        "paramType1": "percent",
                        "paramType2": "rune",
                        "paramValue1": "0-100",
                        "paramValue2": "EL-ZOD",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} chance of receiving {parameter2} upon winning a match",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    },
                    {
                        "id": 2902,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} Magic Find",
                        "min": 10,
                        "max": 10,
                        "value": 10
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    }
                ],
                "perfection": [
                    35,
                    null,
                    5,
                    15,
                    10,
                    5,
                    10,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 45,
        "name": "Phoenix",
        "icon": "https://rune.game/images/items/00045.png",
        "image": "https://dl.airtable.com/.attachments/a139169143fdf979277f00432227f0f6/d4eb2cf2/image.png?ts=1657415489&userId=usrf0GZYc5zCl9Cv7&cs=b7f6304ebba2fcd4",
        "value": "0",
        "type": 2,
        "subType": 7,
        "specificType": 162,
        "slots": [
            1
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 6696,
        "attributes": [],
        "details": {
            "Type": "Two-Handed Weapon",
            "Subtype": "Beacon of Relia"
        },
        "recipe": {
            "requirement": []
        },
        "description": "A symbol of Relia favored by the League of Sol sits atop this staff, a brilliant representation of the kona energy infused within it.",
        "shortDescription": "",
        "visualDescription": "At the head of this tall staff perches the golden likeness of a phoenix: holy symbol of the League of Sol. The shaft is masterfully carved from a singular, long bough of rustwood. The staff is always warm to the touch, and occasionally emits showers of red-gold sparks.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 20,
                        "max": 50
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 15,
                        "max": 20
                    },
                    {
                        "id": 127,
                        "name": "RaidTwoAttribute",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/raidtwoattribute",
                        "paramType1": "value",
                        "paramValue1": "0-100",
                        "nature": "Neutral",
                        "description": "[Hidden Attribute]",
                        "min": 10,
                        "max": 10,
                        "value": 10
                    },
                    {
                        "id": 2,
                        "name": "HarvestFee",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Fee",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "map": {}
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 39,
                        "name": "AddSkill",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
                        "paramType1": "skill",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Use Skill: {parameter1} (SOON)",
                        "map": {}
                    },
                    {
                        "id": 128,
                        "name": "RaidThreeAttribute",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/raidthreeattribute",
                        "paramType1": "value",
                        "paramValue1": "0-100",
                        "nature": "Neutral",
                        "description": "[Hidden Attribute]",
                        "min": 1,
                        "max": 1,
                        "value": 1
                    }
                ],
                "perfection": [
                    50,
                    20,
                    null,
                    10,
                    null,
                    10,
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [
                    {
                        "id": 2000,
                        "name": "IncreaseDamage",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {parameter2} damage",
                        "min": 15,
                        "max": 20
                    },
                    {
                        "id": 2002,
                        "name": "IncreaseDamageOverTime",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamageovertime",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} increase to {parameter2} damage over time"
                    },
                    {
                        "id": 2302,
                        "name": "IncreaseEnergy",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseenergy",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} maximum energy",
                        "min": 12,
                        "max": 15
                    },
                    {
                        "id": 2003,
                        "name": "IncreaseDamageOverTimeLength",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamageovertimelength",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} longer {parameter2} damage over time effects",
                        "min": 5,
                        "max": 10
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    }
                ],
                "perfection": [
                    20,
                    null,
                    15,
                    10,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 46,
        "name": "Ignition",
        "icon": "https://rune.game/images/items/00046.png",
        "image": "https://dl.airtable.com/.attachments/3a27ef8bdcef9580afcf61ce6d5d4f65/fea4088a/image.png?ts=1657415490&userId=usrf0GZYc5zCl9Cv7&cs=c3af14b0a4c03fb3",
        "value": "0",
        "type": 11,
        "subType": 12,
        "specificType": 161,
        "slots": [
            12
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 2640,
        "attributes": [],
        "details": {
            "Type": "Boot",
            "Subtype": "Sol Battlemage Footwraps",
            "Rune Word": "Zod Ist Mal"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 33,
                    "quantity": 1
                },
                {
                    "id": 24,
                    "quantity": 1
                },
                {
                    "id": 23,
                    "quantity": 1
                }
            ]
        },
        "description": "Silken footwraps of deep crimson, this footwear allows its bearer to streak across the battlefield like a blazing firebolt.",
        "shortDescription": "",
        "visualDescription": "These silken footwraps are favored by the League of Sol, as they are well-suited to a desert environment. Saturated red dye and an infusion of kona mark these as belonging to a disciple of Relia.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 1,
                        "max": 10
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 0,
                        "max": 3
                    },
                    {
                        "id": 127,
                        "name": "RaidTwoAttribute",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/raidtwoattribute",
                        "paramType1": "value",
                        "paramValue1": "0-100",
                        "nature": "Neutral",
                        "description": "[Hidden Attribute]",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 128,
                        "name": "RaidThreeAttribute",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/raidthreeattribute",
                        "paramType1": "value",
                        "paramValue1": "0-100",
                        "nature": "Neutral",
                        "description": "[Hidden Attribute]",
                        "min": 1,
                        "max": 1,
                        "value": 1
                    }
                ],
                "perfection": [
                    10,
                    10,
                    0,
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 3,
                        "max": 5
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 5,
                        "max": 10
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 2304,
                        "name": "IncreaseResist",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseresist",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} resistance",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 2900,
                        "name": "WinRewardsIncrease",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
                        "paramType1": "percent",
                        "paramType2": "rewardtype",
                        "paramValue1": "0-20",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} {parameter2} Rewards on Win",
                        "min": 1,
                        "max": 5
                    }
                ],
                "perfection": [
                    5,
                    10,
                    null,
                    5,
                    5
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [
            20
        ],
        "category": "accessory"
    },
    {
        "id": 47,
        "name": "Corona",
        "icon": "https://rune.game/images/items/00047.png",
        "value": "0",
        "type": 7,
        "subType": 13,
        "specificType": 160,
        "slots": [
            18
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 2160,
        "attributes": [],
        "details": {
            "Type": "Body Armor",
            "Subtype": "Sol Battlemage Tunic"
        },
        "recipe": {
            "requirement": []
        },
        "description": "Worn by advanced mages in the League of Sol, these bright red silken robes exude Kona energy like brilliant sunbursts, and greatly increase the wearer's ability to manipulate fire. When worn above",
        "shortDescription": "",
        "visualDescription": "Masterfully weaved from threads of crimson and gold, these robes are truly befitting of royalty. The envy of all disciples of kona, this garb is emblazoned with brilliant markings of a long-forgotten language and subjected to the breath of a phoenix.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 5,
                        "max": 10
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 20,
                        "max": 25
                    },
                    {
                        "id": 127,
                        "name": "RaidTwoAttribute",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/raidtwoattribute",
                        "paramType1": "value",
                        "paramValue1": "0-100",
                        "nature": "Neutral",
                        "description": "[Hidden Attribute]",
                        "min": 15,
                        "max": 20
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 1,
                        "max": 5
                    },
                    {
                        "id": 5,
                        "name": "BurnEntireHarvest",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/burnentireharvest",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Chance To Burn Harvest",
                        "min": 0,
                        "max": 1
                    }
                ],
                "perfection": [
                    10,
                    25,
                    null,
                    1,
                    0
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 10,
                        "max": 13
                    },
                    {
                        "id": 2300,
                        "name": "IncreaseHealth",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasehealth",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} maximum health",
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 2304,
                        "name": "IncreaseResist",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseresist",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} resistance",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 2302,
                        "name": "IncreaseEnergy",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseenergy",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} maximum energy",
                        "min": 6,
                        "max": 10
                    }
                ],
                "perfection": [
                    13,
                    10,
                    null,
                    15,
                    10
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [
            20
        ],
        "category": "accessory"
    },
    {
        "id": 48,
        "name": "Judgement",
        "icon": "https://rune.game/images/items/00048.png",
        "value": "0",
        "type": 2,
        "subType": 38,
        "specificType": 154,
        "slots": [
            1
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": false,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {
            "Type": "Two-Handed Weapon",
            "Subtype": "Eledon's Truth"
        },
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 50,
        "name": "Greed",
        "icon": "https://rune.game/images/items/00050.png",
        "value": "0",
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": false,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {},
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 51,
        "name": "Riptide",
        "icon": "https://rune.game/images/items/00051.png",
        "value": "0",
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": false,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {},
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 52,
        "name": "Origin",
        "icon": "https://rune.game/images/items/00052.png",
        "value": "0",
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": false,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {
            "Rune Word": "Eth Ohm Ber"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 5,
                    "quantity": 1
                },
                {
                    "id": 27,
                    "quantity": 1
                },
                {
                    "id": 30,
                    "quantity": 1
                }
            ]
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 53,
        "name": "Fortitude",
        "icon": "https://rune.game/images/items/00053.png",
        "value": "0",
        "type": 7,
        "subType": 13,
        "specificType": 39,
        "slots": [
            18
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1584,
        "attributes": [],
        "details": {
            "Type": "Body Armor",
            "Subtype": "Steel Carapace"
        },
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "Despite clear wear and tear, this layered body armor offers reliable protection.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 5,
                        "max": 15
                    },
                    {
                        "id": 73,
                        "name": "HarvestTheftDefense",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvesttheftdefense",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} chance to defend harvest theft, taking the thief's runes instead",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 11,
                        "name": "RandomRuneExchange",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Random Rune Exchange",
                        "min": 0,
                        "max": 3
                    }
                ],
                "perfection": [
                    15,
                    null,
                    5,
                    null
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 40,
                        "name": "Rarity",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
                        "paramType1": "value",
                        "paramValue1": "0-999",
                        "nature": "Neutral",
                        "description": "{parameter1}",
                        "map": {}
                    }
                ],
                "perfection": [
                    null
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 40,
                        "name": "Rarity",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
                        "paramType1": "value",
                        "paramValue1": "0-999",
                        "nature": "Neutral",
                        "description": "{parameter1}",
                        "min": 3,
                        "max": 6,
                        "map": {
                            "3": "Mythic",
                            "4": "Epic",
                            "5": "Rare",
                            "6": "Magical"
                        }
                    },
                    {
                        "id": 4112,
                        "name": "IncreaseLightningDamage",
                        "isEnabled": false,
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaselightningdamage",
                        "min": 1,
                        "max": 12
                    },
                    {
                        "id": 4139,
                        "name": "IncreaseMaxEnergy",
                        "isEnabled": false,
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasemaxenergy",
                        "min": 20,
                        "max": 20,
                        "value": 20
                    },
                    {
                        "id": 4141,
                        "name": "IncreaseMaxEnergyPercent",
                        "isEnabled": false,
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasemaxenergypercent",
                        "min": 25,
                        "max": 25,
                        "value": 25
                    },
                    {
                        "id": 1328,
                        "name": "SkillLevelUp",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/skilllevelup",
                        "paramType1": "value",
                        "nature": "Buff",
                        "influences": "Skill",
                        "description": "{parameter1} levels added to equipped skill(s)",
                        "min": 1,
                        "max": 1,
                        "value": 1
                    }
                ],
                "perfection": [
                    null,
                    null,
                    null,
                    null,
                    1
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 54,
        "name": "Presence",
        "icon": "https://rune.game/images/items/00054.png",
        "value": "0",
        "type": 5,
        "subType": 10,
        "specificType": 40,
        "slots": [
            3
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 960,
        "attributes": [],
        "details": {
            "Type": "Helm",
            "Subtype": "Circlet of Exaltation"
        },
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "This platinum circlet seems to bestow upon its wearer an aura of unresistable charisma and authority.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 0,
                        "max": 3
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 0,
                        "max": 3
                    },
                    {
                        "id": 81,
                        "name": "GuildTreasuryYieldBonus",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/guildtreasuryyieldbonus",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} yield bonus, sent to guild treasury.",
                        "min": 0,
                        "max": 3
                    },
                    {
                        "id": 12,
                        "name": "FindGuildToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/findguildtoken",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Guild Token",
                        "min": 0,
                        "max": 4
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 0,
                        "max": 2
                    },
                    {
                        "id": 39,
                        "name": "AddSkill",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
                        "paramType1": "skill",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Use Skill: {parameter1} (SOON)",
                        "map": {}
                    },
                    {
                        "id": 62,
                        "name": "HarvestCritMultiplier",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestcritmultiplier",
                        "paramType1": "percent",
                        "paramValue1": "0-10",
                        "nature": "Buff",
                        "description": "{parameter1} critical harvest bonus",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    }
                ],
                "perfection": [
                    3,
                    0,
                    3,
                    4,
                    2,
                    null,
                    5
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 40,
                        "name": "Rarity",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
                        "paramType1": "value",
                        "paramValue1": "0-999",
                        "nature": "Neutral",
                        "description": "{parameter1}",
                        "map": {}
                    }
                ],
                "perfection": [
                    null
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 40,
                        "name": "Rarity",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
                        "paramType1": "value",
                        "paramValue1": "0-999",
                        "nature": "Neutral",
                        "description": "{parameter1}",
                        "min": 3,
                        "max": 6,
                        "map": {
                            "3": "Mythic",
                            "4": "Epic",
                            "5": "Rare",
                            "6": "Magical"
                        }
                    },
                    {
                        "id": 4113,
                        "name": "IncreaseDefensePercentage",
                        "isEnabled": false,
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedefensepercentage",
                        "min": 70,
                        "max": 100
                    },
                    {
                        "id": 4120,
                        "name": "IncreaseFrostDamagePercent",
                        "isEnabled": false,
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasefrostdamagepercent",
                        "min": 1,
                        "max": 5
                    },
                    {
                        "id": 1019,
                        "name": "LifeSteal",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/lifesteal",
                        "paramType1": "percent",
                        "paramValue1": "1-30",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} life steal",
                        "min": 5,
                        "max": 8
                    },
                    {
                        "id": 4114,
                        "name": "EnergySteal",
                        "isEnabled": false,
                        "nexusLink": "https://nexus.rune.game/item-attribute/energysteal",
                        "min": 5,
                        "max": 8
                    },
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 14,
                        "max": 20
                    },
                    {
                        "id": 2317,
                        "name": "MagicDamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicdamagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} magic damage reduction",
                        "min": 1,
                        "max": 5
                    },
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 20,
                        "max": 20,
                        "value": 20
                    }
                ],
                "perfection": [
                    null,
                    null,
                    null,
                    8,
                    null,
                    20,
                    5,
                    20
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [
            23
        ],
        "category": "accessory"
    },
    {
        "id": 55,
        "name": "Reave",
        "icon": "https://rune.game/images/items/00055.png",
        "image": "https://dl.airtable.com/.attachments/2ac48bac7517ce3e492571892f035477/2da3c0e0/boots_A_01.png?ts=1657415498&userId=usrf0GZYc5zCl9Cv7&cs=1bad7e3e2e32483b",
        "value": "0",
        "type": 11,
        "subType": 12,
        "specificType": 27,
        "slots": [
            12
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": false,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 3456,
        "attributes": [],
        "details": {
            "Type": "Boot",
            "Subtype": "Raider Boots"
        },
        "recipe": {
            "requirement": []
        },
        "description": "Shaped by the hands of a respected Barbarian artisan, these boots were designed to support a life of constant combat.",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 63,
                        "name": "HarvestOverTime",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestovertime",
                        "paramType1": "percent",
                        "paramValue1": "0-10",
                        "nature": "Mechanic",
                        "description": "Add {parameter1} to harvest, vested over time",
                        "min": 0,
                        "max": 3
                    },
                    {
                        "id": 62,
                        "name": "HarvestCritMultiplier",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestcritmultiplier",
                        "paramType1": "percent",
                        "paramValue1": "0-10",
                        "nature": "Buff",
                        "description": "{parameter1} critical harvest bonus",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 11,
                        "name": "RandomRuneExchange",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Random Rune Exchange",
                        "min": 0,
                        "max": 3
                    },
                    {
                        "id": 74,
                        "name": "RandomRuneExchangeSpecific",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchangespecific",
                        "paramType1": "percent",
                        "nature": "Mechanic",
                        "description": "{parameter1} chance that random rune exchange gives a specific rune",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 75,
                        "name": "RandomRuneToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomrunetoken",
                        "paramType1": "rune",
                        "nature": "Mechanic",
                        "description": "Random Exchange Target: {parameter1}",
                        "min": 0,
                        "max": 17,
                        "map": {}
                    }
                ],
                "perfection": [
                    5,
                    null,
                    5,
                    null,
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 1060,
                        "name": "DamageResist",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} damage resist"
                    }
                ],
                "perfection": [
                    null
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 2,
                        "max": 5
                    },
                    {
                        "id": 2304,
                        "name": "IncreaseResist",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseresist",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} resistance",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 4,
                        "max": 7
                    },
                    {
                        "id": 2303,
                        "name": "EnergyRegen",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/energyregen",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "paramValue2": "1-60",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} energy regeneration",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 1158,
                        "name": "WinStreakMagicFindIncrease",
                        "isEnabled": true,
                        "game": "Evolution",
                        "nexusLink": "https://nexus.rune.game/item-attribute/winstreakmagicfindincrease",
                        "min": 0,
                        "max": 5
                    }
                ],
                "perfection": [
                    5,
                    5,
                    7,
                    5,
                    null,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 55,
        "name": "Flare",
        "icon": "https://rune.game/images/items/00055.png",
        "image": "https://dl.airtable.com/.attachments/264b7064c7c2a7d51c55a5eb098f855c/10aa6323/image.png?ts=1657415499&userId=usrf0GZYc5zCl9Cv7&cs=c3a1a6f5c0c3f5b2",
        "value": "0",
        "type": 8,
        "subType": 16,
        "specificType": 181,
        "slots": [
            6
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1440,
        "attributes": [],
        "details": {
            "Type": "Leg Armor",
            "Subtype": "Sol Battlemage Leggings"
        },
        "recipe": {
            "requirement": []
        },
        "description": "A vibrant red skirt and leggings worn by advanced wielders of Kona in the league of Sol, matching their religious depictions of Relia and her closest followers. Compliments the use of fire-based magics.",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 1,
                        "max": 10
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 63,
                        "name": "HarvestOverTime",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestovertime",
                        "paramType1": "percent",
                        "paramValue1": "0-10",
                        "nature": "Mechanic",
                        "description": "Add {parameter1} to harvest, vested over time",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 73,
                        "name": "HarvestTheftDefense",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvesttheftdefense",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} chance to defend harvest theft, taking the thief's runes instead",
                        "min": 2,
                        "max": 2,
                        "value": 2
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 0,
                        "max": 3
                    }
                ],
                "perfection": [
                    10,
                    5,
                    null,
                    null,
                    0
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 1,
                        "max": 10
                    },
                    {
                        "id": 2302,
                        "name": "IncreaseEnergy",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseenergy",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} maximum energy",
                        "min": 6,
                        "max": 10
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 2014,
                        "name": "IncreaseAilmentChance",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseailmentchance",
                        "paramType1": "percent",
                        "paramType2": "ailment",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} chance to apply {parameter2}",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    },
                    {
                        "id": 3806,
                        "name": "IncreaseMaxSkillCharges",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasemaxskillcharges",
                        "paramType1": "value",
                        "paramType2": "skill",
                        "paramValue1": "0-10",
                        "nature": "Buff",
                        "influences": "Skill",
                        "description": "{parameter1} additional charges for {parameter 2} skill(s)",
                        "min": 1,
                        "max": 1,
                        "value": 1
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 3,
                        "max": 6
                    },
                    {
                        "id": 2304,
                        "name": "IncreaseResist",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseresist",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} resistance",
                        "min": 0,
                        "max": 5
                    }
                ],
                "perfection": [
                    10,
                    10,
                    null,
                    5,
                    1,
                    6,
                    5
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 109,
        "name": "Voidmaw",
        "icon": "https://rune.game/images/items/00109.png",
        "image": "https://dl.airtable.com/.attachments/d868f6955899d37816e85b87461ec9f7/85bc92ae/necklace_A_24.png?ts=1657415500&userId=usrf0GZYc5zCl9Cv7&cs=255a616fc66e1ded",
        "value": "0",
        "type": 13,
        "subType": 17,
        "specificType": 151,
        "slots": [
            5
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 275,
        "attributes": [],
        "details": {
            "Type": "Amulet",
            "Subtype": "Entropic Amulet"
        },
        "recipe": {
            "requirement": []
        },
        "description": "As though a piece of the abyss was seized and chained in physical form, this amulet consumes all light that falls upon it.",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 0,
                        "max": 4
                    },
                    {
                        "id": 4,
                        "name": "SendHarvestHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 0,
                        "max": 4
                    }
                ],
                "perfection": [
                    4,
                    null,
                    0
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [
                    {
                        "id": 2317,
                        "name": "MagicDamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicdamagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} magic damage reduction",
                        "min": 5,
                        "max": 7
                    },
                    {
                        "id": 2307,
                        "name": "IncreaseAbsorb",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseabsorb",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} absorb",
                        "min": 3,
                        "max": 4
                    },
                    {
                        "id": 3205,
                        "name": "ChanceOnGetHit",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/chanceongethit",
                        "paramType1": "percent",
                        "paramType2": "skill",
                        "paramValue1": "0-100",
                        "paramValue2": "400-1000",
                        "nature": "Buff",
                        "description": "{parameter1} {parameter2} chance when hit",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 2900,
                        "name": "WinRewardsIncrease",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
                        "paramType1": "percent",
                        "paramType2": "rewardtype",
                        "paramValue1": "0-20",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} {parameter2} Rewards on Win",
                        "min": 5,
                        "max": 10
                    }
                ],
                "perfection": [
                    7,
                    4,
                    5,
                    null,
                    10
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 110,
        "name": "Hoarfrost",
        "icon": "https://rune.game/images/items/00110.png",
        "image": "https://dl.airtable.com/.attachments/c0bff0357bb978db04c87af54f5b1225/dec09771/ring_A_11.png?ts=1657415500&userId=usrf0GZYc5zCl9Cv7&cs=82442c85b9932aac",
        "value": "0",
        "type": 12,
        "subType": 14,
        "specificType": 47,
        "slots": [
            13,
            16,
            14
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 4356,
        "attributes": [],
        "details": {
            "Type": "Ring",
            "Subtype": "Chillmetal Ring"
        },
        "recipe": {
            "requirement": []
        },
        "description": "As if it were an open door to a realm where cold reigns absolute, the sphere ",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 47,
                        "name": "ReduceBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/reduceburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Reduced Burn",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 73,
                        "name": "HarvestTheftDefense",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvesttheftdefense",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} chance to defend harvest theft, taking the thief's runes instead",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 7,
                        "name": "FindShard",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Chance To Find Worldstone Shard (Per Raid)",
                        "min": 10,
                        "max": 20
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 10,
                        "max": 20
                    }
                ],
                "perfection": [
                    5,
                    null,
                    20,
                    20
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            452,
            514
        ],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 111,
        "name": "Verdant",
        "icon": "https://rune.game/images/items/00111.png",
        "value": "0",
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {},
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 112,
        "name": "Animus",
        "icon": "https://rune.game/images/items/00112.png",
        "image": "https://dl.airtable.com/.attachments/f33b5cb45e09563bb4c908d69da45096/28d33b85/00112.png?ts=1657415501&userId=usrf0GZYc5zCl9Cv7&cs=e3ea3e86d28a484b",
        "value": "0",
        "type": 12,
        "subType": 14,
        "specificType": 156,
        "slots": [
            13,
            16,
            14
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 576,
        "attributes": [],
        "details": {
            "Type": "Ring",
            "Subtype": "Overwrought Iron Ring",
            "Rune Word": "Pul Ith Mal Um Zod"
        },
        "recipe": {
            "requirement": [
                {
                    "id": 21,
                    "quantity": 1
                },
                {
                    "id": 6,
                    "quantity": 1
                },
                {
                    "id": 23,
                    "quantity": 1
                },
                {
                    "id": 22,
                    "quantity": 1
                },
                {
                    "id": 33,
                    "quantity": 1
                }
            ]
        },
        "description": "Forged by an ancient barbarian shaman, this  abrasive metal ring imbues its wearer with boundless aggression in battle, making them heedless of danger or pain.",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 0,
                        "max": 3
                    },
                    {
                        "id": 11,
                        "name": "RandomRuneExchange",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Random Rune Exchange",
                        "min": 0,
                        "max": 3
                    },
                    {
                        "id": 69,
                        "name": "RandomRuneBonus",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomrunebonus",
                        "paramType1": "percent",
                        "paramValue1": "0-10",
                        "nature": "Buff",
                        "description": "{parameter1} bonus yield given as a random rune",
                        "min": 0,
                        "max": 2
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 0,
                        "max": 3
                    },
                    {
                        "id": 2,
                        "name": "HarvestFee",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Fee",
                        "min": 3,
                        "max": 5
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "map": {}
                    }
                ],
                "perfection": [
                    3,
                    null,
                    2,
                    0,
                    3,
                    null
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [
                    {
                        "id": 2000,
                        "name": "IncreaseDamage",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {parameter2} damage",
                        "min": 0,
                        "max": 4
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 1,
                        "max": 5
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}"
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 2903,
                        "name": "IncreaseRankRewardBonus",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaserankrewardbonus",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} Increase to Rank Reward Bonuses",
                        "min": 1,
                        "max": 5
                    },
                    {
                        "id": 2319,
                        "name": "IncreaseDamageTaken",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamagetaken",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Debuff",
                        "influences": "Defense",
                        "description": "{parameter1} additional damage taken ({parameter2})",
                        "min": 5,
                        "max": 0
                    }
                ],
                "perfection": [
                    4,
                    5,
                    null,
                    null,
                    5,
                    5
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            511
        ],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 116,
        "name": "Doom",
        "icon": "https://rune.game/images/items/00116.png",
        "value": "0",
        "specificType": 49,
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {
            "Subtype": "Devilmaw Greataxe"
        },
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 124,
        "name": "Cleave",
        "icon": "https://rune.game/images/items/00124.png",
        "value": "0",
        "specificType": 50,
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {
            "Subtype": "Skullsplitter Greataxe"
        },
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 130,
        "name": "Breath of the Dying",
        "icon": "https://rune.game/images/items/00130.png",
        "value": "0",
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {},
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 132,
        "name": "Seal of the {Guild Name}",
        "icon": "https://rune.game/images/items/00132.png",
        "value": "0",
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {},
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 133,
        "name": "Guild Officer's Insignia",
        "icon": "https://rune.game/images/items/00133.png",
        "value": "0",
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {},
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 134,
        "name": "Guild General's Insignia",
        "icon": "https://rune.game/images/items/00134.png",
        "value": "0",
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {},
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 135,
        "name": "Salt Charm",
        "icon": "https://rune.game/images/items/00135.png",
        "value": "0",
        "specificType": 54,
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {
            "Subtype": "Salt Charm"
        },
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 138,
        "name": "Triumph",
        "icon": "https://rune.game/images/items/00138.png",
        "value": "0",
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {},
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 182,
        "name": "Exile",
        "icon": "https://rune.game/images/items/00182.png",
        "value": "0",
        "type": 1,
        "subType": 1,
        "specificType": 104,
        "slots": [
            1,
            2
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1452,
        "attributes": [],
        "details": {
            "Type": "One-Handed Weapon",
            "Subtype": "Thirsting Edge"
        },
        "recipe": {
            "requirement": []
        },
        "description": "This chaos-imbued blade thirsts for life to such an extent that even the wielder's is consumed once it is drawn.",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 15,
                        "max": 25
                    },
                    {
                        "id": 69,
                        "name": "RandomRuneBonus",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomrunebonus",
                        "paramType1": "percent",
                        "paramValue1": "0-10",
                        "nature": "Buff",
                        "description": "{parameter1} bonus yield given as a random rune",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 5,
                        "max": 15
                    },
                    {
                        "id": 2,
                        "name": "HarvestFee",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Fee",
                        "min": 15,
                        "max": 15,
                        "value": 15
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "min": 11,
                        "max": 14,
                        "map": {
                            "11": "SOL",
                            "12": "SHAEL",
                            "13": "DOL",
                            "14": "HEL"
                        }
                    },
                    {
                        "id": 5,
                        "name": "BurnEntireHarvest",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/burnentireharvest",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Chance To Burn Harvest",
                        "min": 0,
                        "max": 1
                    },
                    {
                        "id": 39,
                        "name": "AddSkill",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
                        "paramType1": "skill",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Use Skill: {parameter1} (SOON)",
                        "map": {}
                    }
                ],
                "perfection": [
                    25,
                    5,
                    15,
                    15,
                    null,
                    0,
                    null
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [
                    {
                        "id": 2000,
                        "name": "IncreaseDamage",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {parameter2} damage",
                        "min": 24,
                        "max": 36
                    },
                    {
                        "id": 3213,
                        "name": "SelfEffectOnCondition",
                        "isEnabled": false,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/selfeffectoncondition",
                        "paramType1": "conditions",
                        "paramType2": "conditionparams",
                        "paramType3": "effect",
                        "map": {}
                    }
                ],
                "perfection": [
                    36,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            null
        ],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 209,
        "name": "Icebrand",
        "icon": "https://rune.game/images/items/00209.png",
        "image": "https://dl.airtable.com/.attachments/9f3125cf2dd7e4a607e535c0f91adf61/ecd2c622/icebrand.png?ts=1657415507&userId=usrf0GZYc5zCl9Cv7&cs=aa29db7f92ab0270",
        "value": "0",
        "type": 1,
        "subType": 1,
        "specificType": 152,
        "slots": [
            1,
            2
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 880,
        "attributes": [],
        "details": {
            "Type": "One-Handed Weapon",
            "Subtype": "Coldforge Blade"
        },
        "recipe": {
            "requirement": []
        },
        "description": "The translucent material that comprises this blade shimmers like ice when exposed to the light. When drawn, the blade seems to scour the heat out of the surrounding air.",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 5,
                        "max": 15
                    },
                    {
                        "id": 4,
                        "name": "SendHarvestHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
                        "min": 15,
                        "max": 30
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 1,
                        "max": 5
                    },
                    {
                        "id": 7,
                        "name": "FindShard",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Chance To Find Worldstone Shard (Per Raid)",
                        "min": 15,
                        "max": 15,
                        "value": 15
                    },
                    {
                        "id": 127,
                        "name": "RaidTwoAttribute",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/raidtwoattribute",
                        "paramType1": "value",
                        "paramValue1": "0-100",
                        "nature": "Neutral",
                        "description": "[Hidden Attribute]",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    },
                    {
                        "id": 2,
                        "name": "HarvestFee",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Fee",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "min": 5,
                        "max": 7,
                        "map": {
                            "5": "ITH",
                            "6": "TAL",
                            "7": "RAL"
                        }
                    },
                    {
                        "id": 39,
                        "name": "AddSkill",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
                        "paramType1": "skill",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Use Skill: {parameter1} (SOON)",
                        "map": {}
                    }
                ],
                "perfection": [
                    15,
                    null,
                    1,
                    15,
                    null,
                    5,
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [
                    {
                        "id": 2000,
                        "name": "IncreaseDamage",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {parameter2} damage",
                        "min": 9,
                        "max": 18
                    },
                    {
                        "id": 2000,
                        "name": "IncreaseDamage",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {parameter2} damage",
                        "min": 9,
                        "max": 18
                    },
                    {
                        "id": 2013,
                        "name": "EffectChanceOnCondition",
                        "isEnabled": false,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/effectchanceoncondition",
                        "paramType1": "conditions",
                        "paramType2": "conditionparams",
                        "paramType3": "effect",
                        "paramValue1": "0-100",
                        "map": {}
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 2006,
                        "name": "IncreaseCriticalHitChance",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasecriticalhitchance",
                        "paramType1": "percent",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1}  critical hit chance",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    }
                ],
                "perfection": [
                    18,
                    18,
                    null,
                    null,
                    5
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            489
        ],
        "materials": [
            24
        ],
        "category": "accessory"
    },
    {
        "id": 222,
        "name": "Capacity",
        "icon": "https://rune.game/images/items/00222.png",
        "value": "0",
        "type": 7,
        "subType": 13,
        "specificType": 150,
        "slots": [
            18
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {
            "Type": "Body Armor",
            "Subtype": "Painted Robes of Welarah"
        },
        "recipe": {
            "requirement": []
        },
        "description": "A colorful homage to the goddess of Mana. These robes improve the wearer's ability to hold and channel energy, but provide little direct protection.",
        "shortDescription": "",
        "visualDescription": "A colorful homage to the goddess of Mana. These robes improve the wearer's ability to hold and channel energy, but provide little direct protection.",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 240,
        "name": "Ecliptic",
        "icon": "https://rune.game/images/items/00240.png",
        "value": "0",
        "type": 9,
        "subType": 15,
        "specificType": 166,
        "slots": [
            9
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 495,
        "attributes": [],
        "details": {
            "Type": "Glove",
            "Subtype": "Korryn's Dexterity"
        },
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 1,
                        "max": 5
                    },
                    {
                        "id": 4,
                        "name": "SendHarvestHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    },
                    {
                        "id": 61,
                        "name": "HarvestCritChance",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestcritchance",
                        "paramType1": "percent",
                        "paramValue1": "0-10",
                        "nature": "Mechanic",
                        "description": "{parameter1} increased chance to critically harvest yield",
                        "min": 0,
                        "max": 2
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 0,
                        "max": 2
                    }
                ],
                "perfection": [
                    5,
                    null,
                    5,
                    null,
                    0
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 1,
                        "max": 5
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 5,
                        "max": 10
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 2903,
                        "name": "IncreaseRankRewardBonus",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaserankrewardbonus",
                        "paramType1": "percent",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} Increase to Rank Reward Bonuses",
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    }
                ],
                "perfection": [
                    5,
                    10,
                    10,
                    10,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 241,
        "name": "Pulsar",
        "icon": "https://rune.game/images/items/00241.png",
        "image": "https://dl.airtable.com/.attachments/1e38c4d58d046af1197b124912fde06f/27aed29e/ArcherBow_B_256_23.png?ts=1657415509&userId=usrf0GZYc5zCl9Cv7&cs=9bc54afcb9c1d355",
        "value": "0",
        "type": 2,
        "subType": 8,
        "specificType": 157,
        "slots": [
            1
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 7986,
        "attributes": [],
        "details": {
            "Type": "Two-Handed Weapon",
            "Subtype": "Korryn's Lancer"
        },
        "recipe": {
            "requirement": []
        },
        "description": "This otherworldly weapon hums with imbued Astra energy, seemingly ready to release a cascade of holy fire upon slightest provocation.",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 20,
                        "max": 30
                    },
                    {
                        "id": 4,
                        "name": "SendHarvestHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
                        "min": 40,
                        "max": 50
                    },
                    {
                        "id": 61,
                        "name": "HarvestCritChance",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestcritchance",
                        "paramType1": "percent",
                        "paramValue1": "0-10",
                        "nature": "Mechanic",
                        "description": "{parameter1} increased chance to critically harvest yield",
                        "min": 5,
                        "max": 10
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 5,
                        "max": 15
                    },
                    {
                        "id": 39,
                        "name": "AddSkill",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
                        "paramType1": "skill",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Use Skill: {parameter1} (SOON)",
                        "map": {}
                    }
                ],
                "perfection": [
                    30,
                    null,
                    null,
                    5,
                    null
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [
                    {
                        "id": 2000,
                        "name": "IncreaseDamage",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {parameter2} damage",
                        "min": 10,
                        "max": 20
                    },
                    {
                        "id": 2000,
                        "name": "IncreaseDamage",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {parameter2} damage",
                        "min": 5,
                        "max": 10
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 3210,
                        "name": "ModOnCondition",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/modoncondition",
                        "paramType1": "conditions",
                        "paramType2": "conditionparams",
                        "paramType3": "mod",
                        "map": {}
                    }
                ],
                "perfection": [
                    20,
                    10,
                    15,
                    null,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            500
        ],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 264,
        "name": "Torrent",
        "icon": "https://rune.game/images/items/00264.png",
        "value": "0",
        "type": 2,
        "subType": 22,
        "specificType": 174,
        "slots": [
            1
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 4536,
        "attributes": [],
        "details": {
            "Type": "Two-Handed Weapon",
            "Subtype": "Tidal Bands"
        },
        "recipe": {
            "requirement": []
        },
        "description": "The inscribed bands of an Archon, used to transform the energies of the wielder into a certain form. These bands bear runic symbols resembling ocean waves.",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 30,
                        "max": 50
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 5,
                        "max": 10
                    },
                    {
                        "id": 66,
                        "name": "HarvestTheft",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvesttheft",
                        "paramType1": "value",
                        "paramValue1": "0-10",
                        "nature": "Mechanic",
                        "description": "Enable the option to sacrifice up to {parameter1} of your harvest in order to steal {parameter1} of the next raider's harvest from the same pool.",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 2,
                        "name": "HarvestFee",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Fee",
                        "min": 15,
                        "max": 20
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "min": 20,
                        "max": 24,
                        "map": {
                            "20": "PUL",
                            "21": "UM",
                            "22": "MAL",
                            "23": "IST",
                            "24": "GUL"
                        }
                    }
                ],
                "perfection": [
                    50,
                    10,
                    null,
                    15,
                    null
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [
                    {
                        "id": 2000,
                        "name": "IncreaseDamage",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {parameter2} damage"
                    }
                ],
                "perfection": [
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [
            510,
            492
        ],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 303,
        "name": "Diligence",
        "icon": "https://rune.game/images/items/00303.png",
        "value": "0",
        "type": 7,
        "subType": 13,
        "specificType": 170,
        "slots": [
            18
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {
            "Type": "Body Armor",
            "Subtype": "Witchhunter's Coat"
        },
        "recipe": {
            "requirement": []
        },
        "description": "A Witchhunter's religious zeal is only matched by their fervor for the erasure of chaospawn.",
        "shortDescription": "",
        "visualDescription": "A Witchhunter's religious zeal is only matched by their fervor for the erasure of chaospawn.",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 342,
        "name": "Nexus",
        "icon": "https://rune.game/images/items/00342.png",
        "value": "0",
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": false,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {
            "Distribution": "Crafted",
            "Date": "March 28, 2021 - Now"
        },
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 562,
        "name": "Dragonheart",
        "icon": "https://rune.game/images/items/00562.png",
        "value": "0",
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": false,
        "isRuneword": true,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {
            "Distribution": "Airdrop",
            "Date": "September 12, 2021",
            "Max Supply": "1000"
        },
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 610,
        "name": "Mimic",
        "icon": "https://rune.game/images/items/00610.png",
        "value": "0",
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {},
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 615,
        "name": "Miasma",
        "icon": "https://rune.game/images/items/00615.png",
        "value": "0",
        "type": 2,
        "subType": 7,
        "specificType": 167,
        "slots": [
            1
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 4356,
        "attributes": [],
        "details": {
            "Type": "Two-Handed Weapon",
            "Subtype": "Darkgrowth Staff"
        },
        "recipe": {
            "requirement": []
        },
        "description": "A foreboding, noxious aura emanates from the top of this staff, fashioned of a branch harvested from the Hexgard druids' toxic groves.",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 20,
                        "max": 30
                    },
                    {
                        "id": 7,
                        "name": "FindShard",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Chance To Find Worldstone Shard (Per Raid)",
                        "min": 30,
                        "max": 40
                    },
                    {
                        "id": 63,
                        "name": "HarvestOverTime",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestovertime",
                        "paramType1": "percent",
                        "paramValue1": "0-10",
                        "nature": "Mechanic",
                        "description": "Add {parameter1} to harvest, vested over time",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 2,
                        "name": "HarvestFee",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Fee",
                        "min": 5,
                        "max": 10
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "min": 7,
                        "max": 18,
                        "map": {
                            "7": "RAL",
                            "8": "ORT",
                            "9": "THUL",
                            "10": "AMN",
                            "11": "SOL",
                            "12": "SHAEL",
                            "13": "DOL",
                            "14": "HEL",
                            "15": "IO",
                            "16": "LUM",
                            "17": "KO",
                            "18": "FAL"
                        }
                    },
                    {
                        "id": 39,
                        "name": "AddSkill",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
                        "paramType1": "skill",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Use Skill: {parameter1} (SOON)",
                        "map": {}
                    }
                ],
                "perfection": [
                    30,
                    40,
                    null,
                    10,
                    5,
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [
                    {
                        "id": 2000,
                        "name": "IncreaseDamage",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} {parameter2} damage",
                        "min": 10,
                        "max": 20
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 2002,
                        "name": "IncreaseDamageOverTime",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasedamageovertime",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-200",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1} increase to {parameter2} damage over time"
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 2900,
                        "name": "WinRewardsIncrease",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
                        "paramType1": "percent",
                        "paramType2": "rewardtype",
                        "paramValue1": "0-20",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} {parameter2} Rewards on Win",
                        "min": 1,
                        "max": 15
                    }
                ],
                "perfection": [
                    20,
                    15,
                    null,
                    null,
                    15
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 616,
        "name": "Horizon",
        "icon": "https://rune.game/images/items/00616.png",
        "value": "0",
        "type": 11,
        "subType": 12,
        "specificType": 168,
        "slots": [
            12
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1760,
        "attributes": [],
        "details": {
            "Type": "Boot",
            "Subtype": "Korryn's Stride"
        },
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 1,
                        "max": 10
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 0,
                        "max": 3
                    },
                    {
                        "id": 73,
                        "name": "HarvestTheftDefense",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvesttheftdefense",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} chance to defend harvest theft, taking the thief's runes instead",
                        "min": 0,
                        "max": 3
                    }
                ],
                "perfection": [
                    10,
                    10,
                    0,
                    null
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 5,
                        "max": 7
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 5,
                        "max": 10
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 2600,
                        "name": "IncreaseStat",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
                        "paramType1": "percent",
                        "paramType2": "stat",
                        "paramType3": "statparams",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "General",
                        "description": "{parameter1} {parameter2} {parameter3}",
                        "min": 3,
                        "max": 5
                    },
                    {
                        "id": 2900,
                        "name": "WinRewardsIncrease",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
                        "paramType1": "percent",
                        "paramType2": "rewardtype",
                        "paramValue1": "0-20",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} {parameter2} Rewards on Win",
                        "min": 1,
                        "max": 5
                    }
                ],
                "perfection": [
                    7,
                    10,
                    null,
                    5,
                    5
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 617,
        "name": "Star",
        "icon": "https://rune.game/images/items/00617.png",
        "value": "0",
        "type": 5,
        "subType": 10,
        "specificType": 169,
        "slots": [
            3
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 2376,
        "attributes": [],
        "details": {
            "Type": "Helm",
            "Subtype": "Korryn's Vision"
        },
        "recipe": {
            "requirement": []
        },
        "description": "Like the light from a star, Korryn's vision is boundless, ensuring no minions of chaos can escape his judgment.",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 5,
                        "max": 10
                    },
                    {
                        "id": 4,
                        "name": "SendHarvestHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 119,
                        "name": "YieldBonusFromHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/yieldbonusfromhiddenpool",
                        "paramType1": "value",
                        "nature": "Buff",
                        "description": "{parameter1} Yield Bonus On Harvests From Hidden Pool",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 0,
                        "max": 5
                    }
                ],
                "perfection": [
                    10,
                    null,
                    5,
                    0
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 5,
                        "max": 7
                    },
                    {
                        "id": 2006,
                        "name": "IncreaseCriticalHitChance",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increasecriticalhitchance",
                        "paramType1": "percent",
                        "paramValue1": "0-200",
                        "nature": "Buff",
                        "influences": "Offense",
                        "description": "{parameter1}  critical hit chance",
                        "min": 3,
                        "max": 5
                    },
                    {
                        "id": 2302,
                        "name": "IncreaseEnergy",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseenergy",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} maximum energy",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 3205,
                        "name": "ChanceOnGetHit",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/chanceongethit",
                        "paramType1": "percent",
                        "paramType2": "skill",
                        "paramValue1": "0-100",
                        "paramValue2": "400-1000",
                        "nature": "Buff",
                        "description": "{parameter1} {parameter2} chance when hit",
                        "min": 0,
                        "max": 5
                    }
                ],
                "perfection": [
                    7,
                    5,
                    15,
                    null,
                    5
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 618,
        "name": "Unity",
        "icon": "https://rune.game/images/items/00618.png",
        "value": "0",
        "type": 12,
        "subType": 14,
        "specificType": 177,
        "slots": [
            13,
            16,
            14
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {
            "Type": "Ring",
            "Subtype": "Band of Bound Souls"
        },
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 627,
        "name": "Legacy",
        "icon": "https://rune.game/images/items/00627.png",
        "value": "0",
        "type": 5,
        "subType": 10,
        "specificType": 182,
        "slots": [
            3
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 864,
        "attributes": [],
        "details": {
            "Type": "Helm",
            "Subtype": "Ancestral Pelt"
        },
        "recipe": {
            "requirement": []
        },
        "description": "Former head of the Great Bear Sokhe, this ancestral mark of leadership imbues the wearer with the combined ferocity of Legacy's past owners.",
        "shortDescription": "",
        "visualDescription": "Despite witnessing much blood and toil, this weathered and oily bear pelt embodies a brutal regality, fitting of only the fiercest and wisest barbarian chiefs.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 11,
                        "name": "RandomRuneExchange",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Random Rune Exchange",
                        "min": 0,
                        "max": 3
                    },
                    {
                        "id": 74,
                        "name": "RandomRuneExchangeSpecific",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchangespecific",
                        "paramType1": "percent",
                        "nature": "Mechanic",
                        "description": "{parameter1} chance that random rune exchange gives a specific rune",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 0,
                        "max": 5
                    }
                ],
                "perfection": [
                    5,
                    null,
                    null,
                    5
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 628,
        "name": "Pillage",
        "icon": "https://rune.game/images/items/00628.png",
        "value": "0",
        "type": 1,
        "subType": 42,
        "specificType": 183,
        "slots": [
            1,
            2
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 6912,
        "attributes": [],
        "details": {
            "Type": "One-Handed Weapon",
            "Subtype": "Behemoth Grappler"
        },
        "recipe": {
            "requirement": []
        },
        "description": "One of the most brutal barbarian tools, this teeth studded, disembodied claw was devised to lock down even the slipperiest of opponents.",
        "shortDescription": "",
        "visualDescription": "Numerous razor-sharp teeth are embedded into a bloodied claw of unknown origin, affixed to a long, wrought iron chain. The savage appearance of this grappling weapon is only surpassed by the cruel fate that awaits those caught in Pillage's grasp.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 15,
                        "max": 30
                    },
                    {
                        "id": 5,
                        "name": "BurnEntireHarvest",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/burnentireharvest",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Chance To Burn Harvest",
                        "min": 0,
                        "max": 1
                    },
                    {
                        "id": 11,
                        "name": "RandomRuneExchange",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Random Rune Exchange",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 5,
                        "max": 5,
                        "value": 5
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 66,
                        "name": "HarvestTheft",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvesttheft",
                        "paramType1": "value",
                        "paramValue1": "0-10",
                        "nature": "Mechanic",
                        "description": "Enable the option to sacrifice up to {parameter1} of your harvest in order to steal {parameter1} of the next raider's harvest from the same pool.",
                        "min": 0,
                        "max": 5
                    }
                ],
                "perfection": [
                    30,
                    0,
                    null,
                    5,
                    0,
                    null
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 629,
        "name": "Bloodline",
        "icon": "https://rune.game/images/items/00629.png",
        "value": "0",
        "type": 7,
        "subType": 13,
        "specificType": 184,
        "slots": [
            18
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 2376,
        "attributes": [],
        "details": {
            "Type": "Body Armor",
            "Subtype": "Ancestral Warpaints"
        },
        "recipe": {
            "requirement": []
        },
        "description": "Used to both intimidate enemies and signify allegiance, elder barbarians use these energy-infused warpaints to spark a trance-like rage.",
        "shortDescription": "",
        "visualDescription": "Though pigments of all types are used in this sacred pre-battle tradition, the most common warpaint among the Tribe of Carnage is fashioned with the blood of fallen enemies.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 11,
                        "name": "RandomRuneExchange",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Random Rune Exchange",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 74,
                        "name": "RandomRuneExchangeSpecific",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchangespecific",
                        "paramType1": "percent",
                        "nature": "Mechanic",
                        "description": "{parameter1} chance that random rune exchange gives a specific rune",
                        "min": 5,
                        "max": 15
                    },
                    {
                        "id": 75,
                        "name": "RandomRuneToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomrunetoken",
                        "paramType1": "rune",
                        "nature": "Mechanic",
                        "description": "Random Exchange Target: {parameter1}",
                        "min": 10,
                        "max": 27,
                        "map": {}
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 39,
                        "name": "AddSkill",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
                        "paramType1": "skill",
                        "paramValue1": "0-999",
                        "nature": "Requirement",
                        "description": "Use Skill: {parameter1} (SOON)",
                        "map": {}
                    }
                ],
                "perfection": [
                    15,
                    null,
                    null,
                    null,
                    0,
                    null
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [
                    {
                        "id": 2316,
                        "name": "DamageReduce",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} damage reduction",
                        "min": 15,
                        "max": 20
                    },
                    {
                        "id": 2304,
                        "name": "IncreaseResist",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/increaseresist",
                        "paramType1": "percent",
                        "paramType2": "type",
                        "paramValue1": "0-100",
                        "paramValue2": "1-14",
                        "nature": "Buff",
                        "influences": "Defense",
                        "description": "{parameter1} {parameter2} resistance"
                    },
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    }
                ],
                "perfection": [
                    20,
                    null,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 630,
        "name": "Frenzy",
        "icon": "https://rune.game/images/items/00630.png",
        "value": "0",
        "type": 8,
        "subType": 16,
        "specificType": 185,
        "slots": [
            6
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 2970,
        "attributes": [],
        "details": {
            "Type": "Leg Armor",
            "Subtype": "Behemoth Hide Trousers"
        },
        "recipe": {
            "requirement": []
        },
        "description": "Crafted from tanned behemoth hide and enchanted with ancient primal magic, these hide leggings allow the wearer's footfalls to shake the earth like a mighty behemoth.",
        "shortDescription": "",
        "visualDescription": "Composed of various tanned leathers and resilient cloths, these behemoth hide trousers show the evident wear and tear of many mighty generations.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 11,
                        "name": "RandomRuneExchange",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Random Rune Exchange",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 13,
                        "name": "MagicFind",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
                        "paramType1": "percent",
                        "paramValue1": "0-999",
                        "nature": "Buff",
                        "description": "{parameter1} Magic Find",
                        "min": 1,
                        "max": 5
                    },
                    {
                        "id": 73,
                        "name": "HarvestTheftDefense",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvesttheftdefense",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} chance to defend harvest theft, taking the thief's runes instead",
                        "min": 2,
                        "max": 4
                    },
                    {
                        "id": 6,
                        "name": "HarvestBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Burn",
                        "min": 1,
                        "max": 3
                    }
                ],
                "perfection": [
                    10,
                    null,
                    5,
                    null,
                    1
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 631,
        "name": "Shroud",
        "icon": "https://rune.game/images/items/00631.png",
        "value": "0",
        "subType": 43,
        "specificType": 186,
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {
            "Subtype": "Chameleon Cloak"
        },
        "recipe": {
            "requirement": []
        },
        "description": "This leaf-adorned cloak is both stunning to behold and practical for making oneself invisible in the dense forests of Fayhelm.",
        "shortDescription": "",
        "visualDescription": "Made by esteemed elven weavers, the soft fabric of this cloak is interwoven with magically-preserved leaves. As the seasons change, so too do the color of the leaves: from deep emerald in the summer to gold and red in the autumn. While beautiful, it also remains purely practical; allowing elven hunters to conceal themselves year-round in the ever-changing woodland.",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 632,
        "name": "Conclave",
        "icon": "https://rune.game/images/items/00632.png",
        "value": "0",
        "type": 7,
        "subType": 13,
        "specificType": 187,
        "slots": [
            18
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 792,
        "attributes": [],
        "details": {
            "Type": "Body Armor",
            "Subtype": "Warden Garb"
        },
        "recipe": {
            "requirement": []
        },
        "description": "Adorned with the sigil of a Warden commander, this prestigious ranger garb gifts its wearer the dexterity of a galewind.",
        "shortDescription": "",
        "visualDescription": "Created by the finest smiths and tailors in Irondell, this light and tactile armor bears the high-quality elements of both human and elven craftsmanship. Imbued with dyes found in Fayhelm and embellished with the Warden's silvery symbol, this garb was finally enchanted with druidic wind magic.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 10,
                        "max": 15
                    },
                    {
                        "id": 4,
                        "name": "SendHarvestHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
                        "min": 10,
                        "max": 20
                    },
                    {
                        "id": 119,
                        "name": "YieldBonusFromHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/yieldbonusfromhiddenpool",
                        "paramType1": "value",
                        "nature": "Buff",
                        "description": "{parameter1} Yield Bonus On Harvests From Hidden Pool",
                        "min": 2,
                        "max": 5
                    },
                    {
                        "id": 73,
                        "name": "HarvestTheftDefense",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvesttheftdefense",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} chance to defend harvest theft, taking the thief's runes instead",
                        "min": 1,
                        "max": 3
                    }
                ],
                "perfection": [
                    15,
                    null,
                    5,
                    null
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 633,
        "name": "Celerity",
        "icon": "https://rune.game/images/items/00633.png",
        "value": "0",
        "type": 9,
        "subType": 15,
        "specificType": 188,
        "slots": [
            9
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1350,
        "attributes": [],
        "details": {
            "Type": "Glove",
            "Subtype": "Basilisk Gauntlets"
        },
        "recipe": {
            "requirement": []
        },
        "description": "Forged from the scales of a fallen basilisk, these gauntlets allow the wearer to strike with the petrifying venom of the legendary reptile.",
        "shortDescription": "",
        "visualDescription": "Though these basilisk scale gauntlets glitter a brilliant emerald green in direct sunlight, they are virtually invisible in the shade of the Fayhelm forests. Expertly replated as ranger gloves, these gauntlets provide both excellent offensive and defensive capabilities.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 4,
                        "name": "SendHarvestHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
                        "min": 1,
                        "max": 15
                    },
                    {
                        "id": 118,
                        "name": "YieldBonusToHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/yieldbonustohiddenpool",
                        "paramType1": "value",
                        "nature": "Buff",
                        "description": "{parameter1} yield bonus on harvests to hidden pool",
                        "min": 1,
                        "max": 5
                    },
                    {
                        "id": 73,
                        "name": "HarvestTheftDefense",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvesttheftdefense",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} chance to defend harvest theft, taking the thief's runes instead",
                        "min": 1,
                        "max": 3
                    }
                ],
                "perfection": [
                    5,
                    null,
                    5,
                    null
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 634,
        "name": "Slipstream",
        "icon": "https://rune.game/images/items/00634.png",
        "value": "0",
        "type": 2,
        "subType": 8,
        "specificType": 189,
        "slots": [
            1
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 2976,
        "attributes": [],
        "details": {
            "Type": "Two-Handed Weapon",
            "Subtype": "Dryad Bow"
        },
        "recipe": {
            "requirement": []
        },
        "description": "Arrows shot from this elegant dryad bow are said to visibly cut the air as they fly, creating rippling airwaves in their wake.",
        "shortDescription": "",
        "visualDescription": "Gifted to the Wardens of Irondell by a dryad ally, this elegant wooden bow is one of the finest crafted in Haerra. Blessed with ancient fey magic lost to humanoids, Slipstream is virtually weightless and only requires the faintest effort to draw.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 10,
                        "max": 40
                    },
                    {
                        "id": 4,
                        "name": "SendHarvestHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Mechanic",
                        "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
                        "min": 30,
                        "max": 45
                    },
                    {
                        "id": 119,
                        "name": "YieldBonusFromHiddenPool",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/yieldbonusfromhiddenpool",
                        "paramType1": "value",
                        "nature": "Buff",
                        "description": "{parameter1} Yield Bonus On Harvests From Hidden Pool",
                        "min": 20,
                        "max": 25
                    },
                    {
                        "id": 2,
                        "name": "HarvestFee",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Debuff",
                        "description": "{parameter1} Harvest Fee"
                    },
                    {
                        "id": 3,
                        "name": "HarvestFeeToken",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
                        "paramType1": "tokenId",
                        "paramValue1": "0-999",
                        "nature": "Mechanic",
                        "description": "Harvest Fee Token: {parameter1}",
                        "min": 22,
                        "max": 24,
                        "map": {
                            "22": "MAL",
                            "23": "IST",
                            "24": "GUL"
                        }
                    }
                ],
                "perfection": [
                    40,
                    null,
                    25,
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 635,
        "name": "Myriad",
        "icon": "https://rune.game/images/items/00635.png",
        "value": "0",
        "subType": 44,
        "specificType": 190,
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {
            "Subtype": "Dryad Quiver"
        },
        "recipe": {
            "requirement": []
        },
        "description": "Sister to the legendary bow Slipstream, this elegant wooden quiver enchants the arrows stored within: providing both true striking and incineration capabilities.",
        "shortDescription": "",
        "visualDescription": "Sharing both wood-carved sophistication and magical weightlessness with her sister bow Slipstream, Myriad is the envy of all archers. In addition to enchanting stored arrows, this quiver also prevents arrows from falling out during the wearer's acrobatic feats; only releasing if the owner draws from quiver directly.",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 637,
        "name": "Void",
        "icon": "https://rune.game/images/items/00637.png",
        "value": "0",
        "type": 5,
        "subType": 10,
        "specificType": 191,
        "slots": [
            3
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {
            "Type": "Helm",
            "Subtype": "Craven Cowl"
        },
        "recipe": {
            "requirement": []
        },
        "description": "\"Tell me: when you gaze into the empty eyes of a Craven, can you be certain it's a _thing _that gazes back?\"",
        "shortDescription": "",
        "visualDescription": "Brutally forged from hallowed brass, the Void mask embodies the depravity of the Cravens. When adorned alongside the energy-nullifying hat, this headgear serves as a sinister omen to passersby.",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 638,
        "name": "Lawmaker",
        "icon": "https://rune.game/images/items/00638.png",
        "value": "0",
        "type": 7,
        "subType": 13,
        "specificType": 192,
        "slots": [
            18
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 11,
        "attributes": [],
        "details": {
            "Type": "Body Armor",
            "Subtype": "Craven Coat"
        },
        "recipe": {
            "requirement": []
        },
        "description": "Proudly displaying the tickets of victorious Craven hunts, this Craven coat is a symbol of order in the lawless lands of Woto Shonok. ",
        "shortDescription": "",
        "visualDescription": "Crammed with all manner of tinctures, scrolls, weapons, poisons, staves, nomicons, and many other hidden tools; Lawmaker exudes the preparedness and competence of a Craven hunter.",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 8,
                        "name": "RemoveFees",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "Remove {parameter1} Fees",
                        "min": 10,
                        "max": 20
                    }
                ],
                "perfection": [
                    20
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 639,
        "name": "Flay",
        "icon": "https://rune.game/images/items/00639.png",
        "value": "0",
        "type": 1,
        "subType": 45,
        "specificType": 193,
        "slots": [
            1,
            2
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {
            "Type": "One-Handed Weapon",
            "Subtype": "Craven Piercer"
        },
        "recipe": {
            "requirement": []
        },
        "description": "The Craven's precision-weapon of choice, this legendary crossbow has witnessed the death and suffering of both men and monsters.",
        "shortDescription": "",
        "visualDescription": "Fashioned from rusted metal and polished silver, Flay marries the harsh ruggedness of a Craven with the precision of their craft. The crow-feathered bolts shot from this crossbow are fitted with all types of heads: from razor-sharp splitting heads to viciously-serrated shredding heads.",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 640,
        "name": "Lawbreaker",
        "icon": "https://rune.game/images/items/00640.png",
        "value": "0",
        "type": 11,
        "subType": 12,
        "specificType": 194,
        "slots": [
            12
        ],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {
            "Type": "Boot",
            "Subtype": "Craven Boots"
        },
        "recipe": {
            "requirement": []
        },
        "description": "Used in close-quarters combat, the metallic spikes fitted to Lawbreaker's boot-ends are great for splitting kneecaps in a pinch.",
        "shortDescription": "",
        "visualDescription": "Crudely beautiful and viciously practical, the tips of these intimidating boots are fitted with silver staves. Made from sturdy hide and equipped with multi-purpose straps and pouches, these Craven boots often contain several knives hidden from view.",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 1000,
        "name": "Guild Token",
        "icon": "https://rune.game/images/items/01000.png",
        "value": "0",
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {},
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 1001,
        "name": "Guild Scroll",
        "icon": "https://rune.game/images/items/01001.png",
        "value": "0",
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {},
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 1100,
        "name": "Scroll of Reset",
        "icon": "https://rune.game/images/items/01100.png",
        "value": "0",
        "type": 15,
        "subType": 40,
        "specificType": 55,
        "slots": [],
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {
            "Type": "Consumable",
            "Subtype": "Scroll"
        },
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 58,
                        "name": "ResetSockets",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/resetsockets",
                        "paramType1": "value",
                        "paramValue1": "100-100",
                        "nature": "Buff",
                        "description": "Resets Sockets"
                    }
                ],
                "perfection": [
                    null
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 58,
                        "name": "ResetSockets",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/resetsockets",
                        "paramType1": "value",
                        "paramValue1": "100-100",
                        "nature": "Buff",
                        "description": "Resets Sockets"
                    }
                ],
                "perfection": [
                    null
                ]
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 1200,
        "name": "Scholar's Codex",
        "icon": "https://rune.game/images/items/01200.png",
        "image": "https://dl.airtable.com/.attachments/6c1c3d34f9e888e2a598a1c589c70c71/aa69080a/01200.png?ts=1657415525&userId=usrf0GZYc5zCl9Cv7&cs=1ef724240089cb4f",
        "value": "0",
        "specificType": 58,
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {
            "Subtype": "Trinket",
            "Distribution": "Reward",
            "Date": "June 12, 2021 - June 12, 2021",
            "Max Supply": "Mythic: 2, Epic: 4, Rare: 10, Magical: 20"
        },
        "recipe": {
            "requirement": []
        },
        "description": "Rewarded to Rune Scholars for their noble service.",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 40,
                        "name": "Rarity",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
                        "paramType1": "value",
                        "paramValue1": "0-999",
                        "nature": "Neutral",
                        "description": "{parameter1}",
                        "map": {}
                    },
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield"
                    }
                ],
                "perfection": [
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 40,
                        "name": "Rarity",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
                        "paramType1": "value",
                        "paramValue1": "0-999",
                        "nature": "Neutral",
                        "description": "{parameter1}",
                        "map": {}
                    },
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield"
                    }
                ],
                "perfection": [
                    null,
                    null
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 40,
                        "name": "Rarity",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
                        "paramType1": "value",
                        "paramValue1": "0-999",
                        "nature": "Neutral",
                        "description": "{parameter1}",
                        "map": {}
                    },
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield"
                    }
                ],
                "perfection": [
                    null,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 1201,
        "name": "General's Medallion",
        "icon": "https://rune.game/images/items/01201.png",
        "image": "https://dl.airtable.com/.attachments/0bf8fad8be2a36247308e7d3ac37821b/4a41bfa0/01201.png?ts=1657415525&userId=usrf0GZYc5zCl9Cv7&cs=48d09dc3164e7f38",
        "value": "0",
        "specificType": 58,
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {
            "Subtype": "Trinket",
            "Max Supply": "Mythic: 5, Epic: 10, Rare: 20, Magical: 30"
        },
        "recipe": {
            "requirement": []
        },
        "description": "Rewarded to Rune Generals for their valiant service.",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 40,
                        "name": "Rarity",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
                        "paramType1": "value",
                        "paramValue1": "0-999",
                        "nature": "Neutral",
                        "description": "{parameter1}",
                        "map": {}
                    },
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield"
                    }
                ],
                "perfection": [
                    null,
                    null
                ]
            },
            "2": {
                "attributes": [
                    {
                        "id": 40,
                        "name": "Rarity",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
                        "paramType1": "value",
                        "paramValue1": "0-999",
                        "nature": "Neutral",
                        "description": "{parameter1}",
                        "map": {}
                    },
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield"
                    }
                ],
                "perfection": [
                    null,
                    null
                ]
            },
            "3": {
                "attributes": [
                    {
                        "id": 40,
                        "name": "Rarity",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
                        "paramType1": "value",
                        "paramValue1": "0-999",
                        "nature": "Neutral",
                        "description": "{parameter1}",
                        "map": {}
                    },
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield"
                    }
                ],
                "perfection": [
                    null,
                    null
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 1202,
        "name": "Crafting Competition Winner",
        "icon": "https://rune.game/images/items/01202.png",
        "image": "https://dl.airtable.com/.attachments/5c87c5ade082437af456133529e895fa/2215384d/01202.png?ts=1657415526&userId=usrf0GZYc5zCl9Cv7&cs=d2ea91730e7118d9",
        "value": "0",
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": true,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {
            "Distribution": "Reward",
            "Date": "June 12, 2021 - Now",
            "Max Supply": "Unknown"
        },
        "recipe": {
            "requirement": []
        },
        "description": "Given as a token of excellence in crafting.",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 1203,
        "name": "Seed of Rebirth",
        "icon": "https://rune.game/images/items/01203.png",
        "value": "0",
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {
            "Date": "June 12, 2021 - June 12, 2021",
            "Max Supply": "Mythic: 1, Epic: 5, Rare: 20, Magical: 50"
        },
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 1204,
        "name": "Spire Seed",
        "icon": "https://rune.game/images/items/01204.png",
        "value": "0",
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": false,
        "isTransferable": false,
        "isUpgradable": false,
        "isPublishable": false,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {
            "Date": "June 12, 2021 - June 12, 2021",
            "Max Supply": "Mythic: 1, Epic: 5, Rare: 20, Magical: 50"
        },
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 1205,
        "name": "Founder's Cube",
        "icon": "https://rune.game/images/items/01205.png",
        "image": "https://dl.airtable.com/.attachments/c5d9253c088ac3f19a25dac871228e03/6d5cad59/01205.png?ts=1657415527&userId=usrf0GZYc5zCl9Cv7&cs=96cf8df420f02fc5",
        "value": "0",
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": false,
        "isUnequipable": false,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": false,
        "isPublishable": true,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 1,
        "attributes": [],
        "details": {
            "Distribution": "Fundraiser",
            "Date": "September 12, 2021 - TBD",
            "Max Supply": "1000"
        },
        "recipe": {
            "requirement": []
        },
        "description": "",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [],
                "perfection": []
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [],
                "perfection": []
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 1207,
        "name": "Black Drake Scale",
        "icon": "https://rune.game/images/items/01207.png",
        "image": "https://dl.airtable.com/.attachments/31aa2ffe51756c646155900059e04d1e/f3d08805/01207.png?ts=1657415527&userId=usrf0GZYc5zCl9Cv7&cs=41dda633a8d8bb42",
        "value": "0",
        "specificType": 195,
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 24,
        "attributes": [],
        "details": {
            "Subtype": "Dragon Scale",
            "Distribution": "Evolution Battles",
            "Date": "September 12, 2021 - TBD"
        },
        "recipe": {
            "requirement": []
        },
        "description": "A rigid, fire resistant plate that once protected the body of a mature black drake. The circumstances of the drake's death have left this scale and its defensive properties well preserved- an uncommon occurrence.",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 40,
                        "name": "Rarity",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
                        "paramType1": "value",
                        "paramValue1": "0-999",
                        "nature": "Neutral",
                        "description": "{parameter1}",
                        "min": 1,
                        "max": 6,
                        "map": {
                            "1": "Legendary",
                            "2": "Unique",
                            "3": "Mythic",
                            "4": "Epic",
                            "5": "Rare",
                            "6": "Magical"
                        }
                    },
                    {
                        "id": 47,
                        "name": "ReduceBurn",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/reduceburn",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Reduced Burn",
                        "min": 0,
                        "max": 3
                    }
                ],
                "perfection": [
                    null,
                    3
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 2900,
                        "name": "WinRewardsIncrease",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
                        "paramType1": "percent",
                        "paramType2": "rewardtype",
                        "paramValue1": "0-20",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} {parameter2} Rewards on Win",
                        "min": 0,
                        "max": 5
                    }
                ],
                "perfection": [
                    null,
                    5
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    },
    {
        "id": 1208,
        "name": "Black Drake Talon",
        "icon": "https://rune.game/images/items/01208.png",
        "image": "https://dl.airtable.com/.attachments/7350aefbc17a56beda6c83b4d1c9e43c/5a7eea28/01208.png?ts=1657415527&userId=usrf0GZYc5zCl9Cv7&cs=7b7d83f621494a34",
        "value": "0",
        "specificType": 196,
        "isNew": false,
        "isSecret": false,
        "isUltraSecret": false,
        "isPaused": false,
        "isRetired": false,
        "isDisabled": false,
        "isCraftable": false,
        "isEnabled": true,
        "isEquipable": true,
        "isUnequipable": true,
        "isTradeable": true,
        "isTransferable": true,
        "isUpgradable": true,
        "isPublishable": true,
        "isRuneword": false,
        "createdDate": 0,
        "hotness": 0,
        "numPerfectionRolls": 18,
        "attributes": [],
        "details": {
            "Subtype": "Dragon Talon",
            "Distribution": "Evolution Battles",
            "Date": "September 12, 2021 - TBD"
        },
        "recipe": {
            "requirement": []
        },
        "description": "Razor sharp and menacing, these talons can rarely be found scattered across the Mage Isles, acting as an enduring and grim reminder of the brutal violence that once filled the skies around them.",
        "shortDescription": "",
        "visualDescription": "",
        "branches": {
            "1": {
                "attributes": [
                    {
                        "id": 40,
                        "name": "Rarity",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
                        "paramType1": "value",
                        "paramValue1": "0-999",
                        "nature": "Neutral",
                        "description": "{parameter1}",
                        "min": 1,
                        "max": 6,
                        "map": {
                            "1": "Legendary",
                            "2": "Unique",
                            "3": "Mythic",
                            "4": "Epic",
                            "5": "Rare",
                            "6": "Magical"
                        }
                    },
                    {
                        "id": 1,
                        "name": "HarvestYield",
                        "isEnabled": true,
                        "game": "Raid",
                        "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
                        "paramType1": "percent",
                        "paramValue1": "0-100",
                        "nature": "Buff",
                        "description": "{parameter1} Increased Harvest Yield",
                        "min": 0,
                        "max": 2
                    }
                ],
                "perfection": [
                    null,
                    2
                ]
            },
            "2": {
                "attributes": [],
                "perfection": []
            },
            "3": {
                "attributes": [
                    {
                        "id": 3801,
                        "name": "UnlockSkills",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
                        "paramType1": "skills",
                        "nature": "Mechanic",
                        "influences": "Skill",
                        "description": "{parameter1} unlocked",
                        "map": {}
                    },
                    {
                        "id": 2900,
                        "name": "WinRewardsIncrease",
                        "isEnabled": true,
                        "game": "Infinite",
                        "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
                        "paramType1": "percent",
                        "paramType2": "rewardtype",
                        "paramValue1": "0-20",
                        "nature": "Buff",
                        "influences": "Reward",
                        "description": "{parameter1} {parameter2} Rewards on Win",
                        "min": 0,
                        "max": 5
                    }
                ],
                "perfection": [
                    null,
                    5
                ]
            },
            "4": {
                "attributes": [],
                "perfection": []
            },
            "5": {
                "attributes": [],
                "perfection": []
            }
        },
        "skills": [],
        "materials": [],
        "category": "accessory"
    }
];
