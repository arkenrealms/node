import { removeTimezoneOffset } from '../../util/time';
import ItemAttributes from './generated/itemAttributes.json';
import generatedItems from './generated/items.json';
import { ItemCategoriesType, ItemsMainCategoriesType } from './items.type';

export const rewardTokenIdMap = {
  'Guardian Egg': {
    Magical: '1003030101820400062000000200000020000002000000200000020000002000000001',
    Rare: '1003030101820400052000000200000020000002000000200000020000002000000001',
    Epic: '1003030101820400042000000200000020000002000000200000020000002000000001',
    Mythic: '1003030101820400032000000200000020000002000000200000020000002000000001',
  },
  "Early Access Founder's Cube": {
    Unique: '1003030111820400022000000200000020000002000000200000020000002000000001',
  },
  'Santa Christmas 2021 Ticket': {
    Normal: '1003012102400000000000000000000000000000000000000000000000000000000001',
  },
  "Zavox's Fortune": {
    Normal: '1003012122529991232999456000000000000000000000000000000000000000000001',
  },
  Trinket: {
    Magical: '1003030121820400062000000200000020000002000000200000020000002000000001',
    Rare: '1003030121820400052000000200000020000002000000200000020000002000000001',
    Epic: '1003030121820400042000000200000020000002000000200000020000002000000001',
    Mythic: '1003030121820400032000000200000020000002000000200000020000002000000001',
  },
  RUNE: {
    Normal: '1003030131820400022000000200000020000002000000200000020000002000000001',
  },
};

export const Games = {
  Raid: {
    id: 1,
  },
  Evolution: {
    id: 2,
  },
  Infinite: {
    id: 3,
  },
  Sanctuary: {
    id: 4,
  },
  Guardians: {
    id: 5,
  },
};

export const GamesById = {
  1: 'Raid',
  2: 'Evolution',
  3: 'Infinite',
  4: 'Sanctuary',
  5: 'Guardians',
};

export function getFilteredItems(list: any) {
  const exclusiveItems = list.filter((item) => !!item.isExclusive);

  for (const item of exclusiveItems) {
    item.activeConditions = [];
    for (const condition of item.exclusiveConditions) {
      if (condition === 'stream') {
        const now = removeTimezoneOffset(new Date());

        if ((now.getDay() === 0 && now.getHours() >= 22) || (now.getDay() === 1 && now.getHours() <= 2)) {
          // 3-7PM UTC
          item.activeConditions.push(condition);
        }
      }

      if (condition === 'halloween') {
        const now = removeTimezoneOffset(new Date());
        const eventStart = removeTimezoneOffset(new Date(`October 31, ${now.getFullYear()} 00:00:00`));
        const eventEnd = removeTimezoneOffset(new Date(`November 1, ${now.getFullYear()} 00:00:00`));

        if (now > eventStart && now < eventEnd) {
          item.activeConditions.push(condition);
        }
      }

      if (condition === 'christmas') {
        const now = removeTimezoneOffset(new Date());
        const eventStart = removeTimezoneOffset(new Date(`December 24, ${now.getFullYear()} 00:00:00`));
        const eventEnd = removeTimezoneOffset(new Date(`December 26, ${now.getFullYear()} 00:00:00`));

        if (now > eventStart && now < eventEnd) {
          item.activeConditions.push(condition);
        }
      }
    }
    if (item.activeConditions.length > 0) {
      item.isCraftable = true;
      item.isSecret = false;
      item.isUltraSecret = false;
    }
  }

  return list;
}

export const ConditionIdByName = {
  WaitForTime: 1,
  InAura: 2,
  SkillHits: 3,
  IsNight: 4,
  Ailment: 5,
  Buff: 6,
  AlliesNearby: 7,
  NPCsNearby: 8,
  MapModActive: 9,
  StepsTaken: 10,
  UniqueEnemiesKilled: 11,
  ConsecutiveWins: 12,
  KillStreak: 13,
  PerfectHealth: 14,
  HealthBelow: 15,
  HealthAbove: 16,
  EnemyWithAilmentNearby: 17,
  SkillTypeNearby: 18,
  CriticalHitWithSkill: 19,
  AppliedAilment: 20,
  EnemyWithDoTNearby: 21,
  PerfectDodge: 22,
  SkillTypeUsed: 23,
  AttackDefended: 24,
  TimeWithoutDamageTaken: 25,
  TimeWithoutCriticalHit: 26,
  DualWielding: 27,
  EnemyHealthAbove: 28,
  EnemyHealthBelow: 29,
  EmptyOffHand: 30,
  RankAchieved: 31,
  TimeWithoutHits: 32,
};

export const ConditionNames: any = {};

for (const key of Object.keys(ConditionIdByName)) {
  // @ts-ignore
  ConditionNames[ConditionIdByName[key]] = key;
}

export const ConditionParamIdByName = {
  Attack: 1,
};

export const ConditionParamNames: any = {};

for (const key of Object.keys(ConditionParamIdByName)) {
  // @ts-ignore
  ConditionParamNames[ConditionParamIdByName[key]] = key;
}

export const TypeIdByName = {
  Fire: 1,
  Lightning: 2,
  Ice: 4,
  Water: 8,
  Arcane: 6,
  Wind: 3,
  Earth: 5,
  Physical: 9,
  Poison: 7,
  Light: 10,
  Dark: 11,
  AoE: 12,
  Beam: 13,
  Projectile: 14,
  Totem: 15,
  Aura: 16,
  Mage: 101,
  Necromancer: 102,
  Paladin: 103,
  Warrior: 104,
  Ranger: 105,
  Druid: 106,
  Rogue: 107,
  Buff: 22,
  Melee: 18,
  Spell: 19,
  Ranged: 20,
  Utility: 21,
  Attack: 23,
  Healing: 24,
  Debuff: 25,
  DamageOverTime: 26,
  Bard: 108,
  All: 109,
  Ultimate: 27,
};

export const TypeNames: any = {};

for (const key of Object.keys(TypeIdByName)) {
  // @ts-ignore
  TypeNames[TypeIdByName[key]] = key;
}

export const SpecificTypeIdByName = {
  Fire: 1,
  Lightning: 2,
  Ice: 4,
  Water: 8,
  Arcane: 6,
  Wind: 3,
  Earth: 5,
  Physical: 9,
  Poison: 7,
  Light: 10,
  Dark: 11,
  AoE: 12,
  Beam: 13,
  Projectile: 14,
  Totem: 15,
  Aura: 16,
  Mage: 101,
  Necromancer: 102,
  Paladin: 103,
  Warrior: 104,
  Ranger: 105,
  Druid: 106,
  Rogue: 107,
  Buff: 22,
  Melee: 18,
  Spell: 19,
  Ranged: 20,
  Utility: 21,
  Attack: 23,
  Healing: 24,
  Debuff: 25,
  DamageOverTime: 26,
  Bard: 108,
  All: 109,
  Ultimate: 27,
};

export const SpecificTypeNames: any = {};

for (const key of Object.keys(SpecificTypeIdByName)) {
  // @ts-ignore
  SpecificTypeNames[SpecificTypeIdByName[key]] = key;
}

export const EffectIdByName = {
  Poison: 0,
  Bleed: 1,
  Freeze: 2,
  Stun: 3,
  Burn: 4,
  BloodDrunk: 5,
  Sacrifice: 6,
  Silence: 7,
  Blind: 8,
  Sick: 9,
  Slow: 10,
  EvolveLock: 11,
  Complacent: 12,
  Rooted: 13,
  Airborne: 14,
  Sleep: 15,
  Shatter: 16,
  Polymorph: 17,
  'Armor Weakened': 50,
  AttackSpeedReduce: 51,
  'Healing Prevention': 52,
  Ethereal: 53,
  Haste: 100,
  Regeneration: 101,
  Shield: 102,
  GuildLeadership: 103,
  Damage: 104,
  AttackSpeedIncrease: 105,
  CritChance: 106,
  CritMultiplier: 107,
  AilmentChance: 108,
  BurstOfSpeed: 109,
  Disarm: 110,
  Petrify: 111,
  Fear: 112,
  Confuse: 113,
  Parry: 114,
  Block: 115,
  Reflect: 116,
  Oil: 117,
  'Wet ': 118,
  'HP Critical': 119,
  FreezingDamage: 201,
  FireDamage: 202,
  LightningDamage: 203,
  ArcaneDamage: 204,
  RendingDamage: 205,
  PoisonDamage: 206,
  HolyDamage: 207,
  DarkDamage: 208,
  Magnetism: 209,
  MovementDamage: 210,
};

export const EffectNames: any = {};

for (const key of Object.keys(EffectIdByName)) {
  // @ts-ignore
  EffectNames[EffectIdByName[key]] = key;
}

export const StatIdByName = {
  EnergyRegen: 1,
  CriticalHitChance: 2,
  MovementSpeed: 3,
  AttackSpeed: 4,
  CriticalHitMultiplier: 5,
  CastSpeed: 6,
  Health: 7,
  Strength: 8,
  Dexterity: 9,
  Vitality: 10,
};

export const StatNames: any = {};

for (const key of Object.keys(StatIdByName)) {
  // @ts-ignore
  StatNames[StatIdByName[key]] = key;
}

export const ModIdByName = {
  'Wild Swings': 1,
  'Scorching Light': 2,
  Bloodseekers: 3,
};

export const ModNames: any = {};

for (const key of Object.keys(ModIdByName)) {
  // @ts-ignore
  ModNames[ModIdByName[key]] = key;
}

// export const ItemAttributes = {
//   HarvestYield: {
//     id: 1,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Increased Harvest Yield`,
//   },
//   HarvestFee: {
//     id: 2,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Harvest Fee`,
//   },
//   HarvestFeeToken: {
//     id: 3,
//     min: 0,
//     max: 33,
//     description: `Harvest Fee Token: {param1}`,
//   },
//   SendHarvestHiddenPool: {
//     id: 4,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Chance To Send Harvest To Hidden Pool`,
//   },
//   BurnEntireHarvest: {
//     id: 5,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Chance To Lose Entire Harvest`,
//   },
//   HarvestBurn: {
//     id: 6,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Harvest Burn`,
//   },
//   FindShard: {
//     id: 7,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Chance To Find Worldstone Shard`,
//     explanation: 'Chance applies once per raid.'
//   },
//   RemoveFees: {
//     id: 8,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Reduced Harvest Fees`,
//   },
//   UnstakeLocked: {
//     id: 9,
//     min: 0,
//     max: 100,
//     description: `Unstake Locked Until Completion`,
//   },
//   EarlyUnstakeNoReward: {
//     id: 10,
//     min: 0,
//     max: 100,
//     description: `No Reward Early Unstake`,
//   },
//   RandomRuneExchange: {
//     id: 11,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Random Rune Exchange`,
//   },
//   FindGuildToken: {
//     id: 12,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Guild Token (Not Implemented)`,
//   },
//   MagicFind: {
//     id: 13,
//     min: 0,
//     max: 999,
//     paramType1: 'percent',
//     description: `{param1} Magic Find`,
//   },
//   FractureItem: {
//     id: 14,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Chance To Fracture Item (Not Implemented)`,
//   },
//   LaunchPoolReward: {
//     id: 15,
//     min: 0,
//     max: 50,
//     paramType1: 'percent',
//     description: `{param1} Launchpool Reward (Not Implemented)`,
//   },
//   LaunchPoolToken: {
//     id: 16,
//     min: 0,
//     max: 999,
//     description: `Reward Token: {param1}`,
//   },
//   FreezeFees: {
//     id: 17,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Chance to Freeze Fees (1 Hour) (Not Implemented)`,
//   },
//   UnableUseRuneword: {
//     id: 18,
//     min: 0,
//     max: 999,
//     description: `Unable To Use Runeword (Not Implemented)`,
//   },
//   CreateRandomRuneword: {
//     id: 19,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Chance To Create Random Runeword (Not Implemented)`,
//   },
//   SpecificGuild: {
//     id: 20,
//     min: 0,
//     max: 999,
//     description: `Guild Only ({param1})`,
//   },
//   SpecificClass: {
//     id: 21,
//     min: 0,
//     max: 6,
//     description: `{param1} Required`,
//   },
//   RemoveTransferFees: {
//     id: 22,
//     min: 0,
//     max: 100,
//     description: `{param1} Transfer Fees Removed`,
//   },
//   HarvestFeeToRandomRaider: {
//     id: 23,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Harvest Donated To Random Raider`,
//   },
//   ShardOnHarvest: {
//     id: 24,
//     min: 0,
//     max: 50,
//     paramType1: 'percent',
//     description: `{param1} Chance To Find Shard (On Harvest)`,
//   },
//   HarvestStartDelay: {
//     id: 25,
//     min: 0,
//     max: 24,
//     description: `Harvest Delayed By {param1} Hours`,
//   },
//   HarvestClaimDelay: {
//     id: 26,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Harvest Claim Delay`,
//   },
//   EarlyUnstakeFee: {
//     id: 27,
//     min: 0,
//     max: 999,
//     paramType1: 'percent',
//     description: `{param1} Early Unstake Fee`,
//   },
//   EarlyUnstakeFeeValue: {
//     id: 28,
//     min: 0,
//     max: 999,
//     description: `Early Unstake Timeline: {param1} Days`,
//   },
//   FreezeFeesValue: {
//     id: 29,
//     min: 0,
//     max: 999,
//     description: `Freeze Fees Timeline: {param1} Hours`,
//   },
//   HarvestLockedLp: {
//     id: 30,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Harvest Buy & Lock LP`,
//   },
//   DepositLockedLp: {
//     id: 31,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Deposit Buy & Lock LP`,
//   },
//   WithdrawLockedLp: {
//     id: 32,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Withdraw Buy & Lock LP`,
//   },
//   TransmuteItem: {
//     id: 33,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Chance To Transmute Item (Not Implemented)`,
//   },
//   AvoidBurn: {
//     id: 34,
//     min: 0,
//     max: 999,
//     paramType1: 'percent',
//     description: `{param1} Avoid All Burns (Not Implemented)`,
//   },
//   EarlyAccess: {
//     id: 35,
//     min: 0,
//     max: 999,
//     description: `Early Raid Access: {param1} Minutes (Not Implemented)`,
//   },
//   NeverHarvestCurrentRune: {
//     id: 36,
//     min: 0,
//     max: 999,
//     description: `Can Never Harvest Current Rune (Not Implemented)`,
//   },
//   GameLottery: {
//     id: 37,
//     min: 0,
//     max: 999,
//     description: ``,
//   },
//   IncreasePoolMultiplier: {
//     id: 38,
//     min: 0,
//     max: 999,
//     paramType1: 'percent',
//     description: `Increases Pool Multiplier {param1} (Not Implemented)`,
//   },
//   AddSkill: {
//     id: 39,
//     min: 0,
//     max: 999,
//     description: `Use Skill: {param1} (Not Implemented)`,
//   },
//   Rarity: {
//     id: 40,
//     min: 0,
//     max: 100,
//     description: `Rarity: {param1}`,
//   },
//   RandomPerfection1: {
//     id: 41,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   RandomPerfection2: {
//     id: 42,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   RandomPerfection3: {
//     id: 43,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   RandomPerfection4: {
//     id: 44,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   RandomPerfection5: {
//     id: 45,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   SpecificRuneReward: {
//     id: 46,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   ReduceBurn: {
//     id: 47,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Reduced Burn (Not Implemented)`,
//   },
//   GuildMemberCapacity: {
//     id: 48,
//     min: 0,
//     max: 100,
//     description: `{param1} Increased Inventory Spaces (Not Implemented)`,
//   },
//   GuildInventorySpaces: {
//     id: 49,
//     min: 0,
//     max: 10,
//     description: `{param1} Increased Harvest Yield`,
//   },
//   GuildFarmingYield: {
//     id: 50,
//     min: 0,
//     max: 33,
//     description: `Staked Token: {param1}`,
//   },
//   GuildTokenStakeRequired: {
//     id: 51,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Reduced Burn`,
//   },
//   GuildTokenValueRequired: {
//     id: 52,
//     min: 0,
//     max: 999,
//     description: `Staked Token Amount: {param1} (Not Implemented)`,
//   },
//   GuildRuneStakeRequired: {
//     id: 53,
//     min: 0,
//     max: 999,
//     description: `Staking required: {param1} RXS (Not Implemented)`,
//   },
//   PetFarmingYield: {
//     id: 54,
//     min: 0,
//     max: 10,
//     description: `{param1} Increased Harvest Yield`,
//   },
//   Sockets: {
//     id: 55,
//     min: 0,
//     max: 5,
//     description: `{param1} Sockets`,
//   },
//   SpecificRuneRewardToken: {
//     id: 56,
//     min: 0,
//     max: 5,
//     description: `Earn Rune: {param1}`,
//   },
//   SpecificRuneRewardAmount: {
//     id: 57,
//     min: 0,
//     max: 5,
//     description: `Earned Amount: {param1}`,
//   },
//   ResetSockets: {
//     id: 58,
//     min: 100,
//     max: 100,
//     description: `Resets Sockets (Not Implemented)`,
//   },
//   CrafterCertificate: {
//     id: 59,
//     min: 1,
//     max: 999,
//     description: `{param1}`,
//   },
//   HarvestCritChance: {
//     id: 61,
//     min: 0,
//     max: 5,
//     paramType1: 'percent',
//     description: `{param1} Increased Chance To Critically Harvest Yield (Not Implemented)`,
//   },
//   HarvestCritMultiplier: {
//     id: 62,
//     min: 0,
//     max: 5,
//     paramType1: 'percent',
//     description: `{param1} Critical Harvest Bonus (Not Implemented)`,
//   },
//   HarvestOverTime: {
//     id: 63,
//     min: 0,
//     max: 5,
//     paramType1: 'percent',
//     description: `Add {param1} To Harvest, Vested Over Time (Not Implemented)`,
//   },
//   HarvestVestmentReduction: {
//     id: 64,
//     min: 0,
//     max: 5,
//     paramType1: 'percent',
//     description: `{param1} Increase To Vestment Period (Not Implemented)`,
//   },
//   HarvestVestmentIncrease: {
//     id: 65,
//     min: 0,
//     max: 5,
//     paramType1: 'percent',
//     description: `{param1} Decrease To Vestment Period (Not Implemented)`,
//   },
//   HarvestTheft: {
//     id: 66,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `Enable the option to sacrifice up to 10% of your harvest in order to steal {param1} of the next raider's harvest from the same pool (Not Implemented)`,
//   },
//   HarvestTheftMinIncrease: {
//     id: 67,
//     min: 0,
//     max: 5,
//     paramType1: 'percent',
//     description: `+{param1} Minimum Harvest Theft (Not Implemented)`,
//   },
//   HarvestTheftMaxIncrease: {
//     id: 67,
//     min: 0,
//     max: 5,
//     paramType1: 'percent',
//     description: `+{param1} Maximum Harvest Theft (Not Implemented)`,
//   },
//   HarvestTheftMinDecrease: {
//     id: 68,
//     min: 0,
//     max: 5,
//     paramType1: 'percent',
//     description: `+{param1} Minimum Harvest Theft (Not Implemented)`,
//   },
//   RandomRuneBonus: {
//     id: 69,
//     min: 0,
//     max: 5,
//     paramType1: 'percent',
//     description: `{param1} Bonus Yield Given as a Random Rune (Not Implemented)`,
//   },
//   YieldBonusSpecificWeapon: {
//     id: 70,
//     min: 0,
//     max: 5,
//     paramType1: 'percent',
//     description: `{param1} increase to specific weapon harvest yield bonus (Not Implemented)`,
//   },
//   RandomRuneSpecificWeapon: {
//     id: 71,
//     min: 0,
//     max: 5,
//     paramType1: 'percent',
//     description: `{param1} Increase To Specific Weapon Yield Bonus, Given As A Random Rune (Not Implemented)`,
//   },
//   SpecificWeaponType: {
//     id: 72,
//     min: 0,
//     max: 5,
//     description: `Specific Weapon: {param1} (Not Implemented)`,
//   },
//   HarvestTheftDefense: {
//     id: 73,
//     min: 0,
//     max: 5,
//     paramType1: 'percent',
//     description: `{param1} Theft Counter Chance (Not Implemented)`,
//   },
//   RandomRuneExchangeSpecific: {
//     id: 74,
//     min: 0,
//     max: 5,
//     paramType1: 'percent',
//     description: `{param1} Chance That Random Rune Exchange Gives a Specific Rune (Not Implemented)`,
//   },
//   RandomRuneToken: {
//     id: 75,
//     min: 0,
//     max: 5,
//     description: `Random exchange target: {param1} (Not Implemented)`,
//   },
//   SetBonusItems: {
//     id: 76,
//     min: 0,
//     max: 5,
//     paramType1: 'percent',
//     description: `{param1} increased chance to critically harvest yield`,
//   },
//   TwoItemSetBonus: {
//     id: 77,
//     min: 0,
//     max: 5,
//     paramType1: 'percent',
//     description: `{param1} increased chance to critically harvest yield`,
//   },
//   ThreeItemSetBonus: {
//     id: 78,
//     min: 0,
//     max: 5,
//     paramType1: 'percent',
//     description: `{param1} increased chance to critically harvest yield`,
//   },
//   FourItemSetBonus: {
//     id: 79,
//     min: 0,
//     max: 5,
//     paramType1: 'percent',
//     description: `{param1} increased chance to critically harvest yield`,
//   },
//   FiveItemSetBonus: {
//     id: 80,
//     min: 0,
//     max: 5,
//     paramType1: 'percent',
//     description: `{param1} increased chance to critically harvest yield`,
//   },
//   GuildTreasuryYieldBonus: {
//     id: 81,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} yield bonus, sent to guild treasury (Not Implemented)`,
//   },
//   HarvestToTreasury: {
//     id: 82,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} of harvest sent to guild treasury (Not Implemented)`,
//   },
//   GuildTreasuryAccessKey: {
//     id: 83,
//     min: 1,
//     max: 1,
//     description: `Ability to sign guild treasury transactions (Not Implemented)`,
//   },
//   KarmicInfluence: {
//     id: 85,
//     min: -1,
//     max: 1,
//     description: `Sway a pool or farm toward your alignment, receiving a bonus when it matches (Not Implemented)`,
//   },
//   VestingUnequipLock: {
//     id: 86,
//     min: 0,
//     max: 999,
//     description: `Can not unequip Runeword until vested payouts have completed (Not Implemented)`,
//   },
//   RaidUnequipLockOnStake: {
//     id: 87,
//     min: 0,
//     max: 5,
//     paramType1: 'percent',
//     description: `{param1} increased chance to critically harvest yield (Not Implemented)`,
//   },
//   FindFashionShard: {
//     id: 88,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Fashion Find (Not Implemented)`,
//   },
//   AddSkillPoint: {
//     id: 89,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Fashion Find (Not Implemented)`,
//   },
//   UnlockSkillMod: {
//     id: 90,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Fashion Find (Not Implemented)`,
//   },
//   AttributeDebuffToBuffOnEquipTime: {
//     id: 91,
//     min: 0,
//     max: 999,
//     description: `Requires {param1} hours to unlock full potential.`,
//   },
//   AttributeUnlockOnEquipTime: {
//     id: 92,
//     min: 0,
//     max: 5,
//     description: ``,
//   },
//   AttributeUnlockOnConsecutiveEquipTime: {
//     id: 93,
//     min: 0,
//     max: 999,
//     description: `Must equip for {param1} consecutive hours to receive benefit of "Avoid All Burns" (Not Implemented)`,
//   },
//   TargetAttributeToUnlock: {
//     id: 94,
//     min: 0,
//     max: 10,
//     description: `Attribute {param1} is initially locked, and is unlocked via equip time.`,
//   },
//   DebuffAttributeToChange: {
//     id: 95,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   BuffAttributeToChange: {
//     id: 96,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   DebuffToBuffAttributeRange: {
//     id: 97,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   RequireAttributeID: {
//     id: 98,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   RequireAttributeValue: {
//     id: 99,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   RequireSkill: {
//     id: 100,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   CriticalCraftChance: {
//     id: 101,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   DisenchantmentBonus: {
//     id: 102,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   CriticalSlamChance: {
//     id: 103,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   RequireHarvestedRunes: {
//     id: 104,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   IgnoreTheftDefense: {
//     id: 105,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   HarvestSpeed: {
//     id: 106,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   StunOnHarvest: {
//     id: 107,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   StunRecovery: {
//     id: 108,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   FractureReduction: {
//     id: 109,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   LimitedDurability: {
//     id: 110,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   BeginRaidMana: {
//     id: 111,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   BeginRaidHealthIncrease: {
//     id: 112,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   ManaTheftOnHarvest: {
//     id: 113,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   ManaPoolMultiplierIncrease: {
//     id: 114,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   UnequipLockRaidDuration: {
//     id: 115,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   AttributeDebuffToBuffOnBurnedRunes: {
//     id: 116,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   AttributeDebuffToBuffOnHarvestedRunes: {
//     id: 117,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   YieldBonusToHiddenPool: {
//     id: 118,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   YieldBonusFromHiddenPool: {
//     id: 119,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Yield Bonus From Hidden Pool`,
//   },
//   AttributeDebuffToBuffWhenHiddenPoolStake: {
//     id: 120,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   AttributeUnlockWhenHiddenPoolStake: {
//     id: 121,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   AttributeScaleWithHiddenPoolStake: {
//     id: 122,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   AvoidHarvestLossWithoutBonus: {
//     id: 123,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   HarvestFeeReductionPenalty: {
//     id: 124,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   HarvestYieldBonusWeapons: {
//     id: 125,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   AutoCompoundHiddenPool: {
//     id: 126,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   UnstakeLockedDurationFromHarvest: {
//     id: 127,
//     min: 0,
//     max: 100,
//     description: ``,
//   },
//   EnhancedDefense: {
//     id: 201,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Enhanced Defense`,
//   },
//   ColdDamage: {
//     id: 201,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `Adds {param1} Cold Damage`,
//   },
//   ColdDuration: {
//     id: 201,
//     min: 0,
//     max: 100,
//     description: `{param1} Seconds Cold Duration`,
//   },
//   SlowerStaminaDrain: {
//     id: 202,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Slower Stamina Drain`,
//   },
//   LifeStolenPerHit: {
//     id: 203,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Life Stolen Per Hit`,
//   },
//   ManaStolenPerHit: {
//     id: 204,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Mana Stolen Per Hit`,
//   },
//   DamageReduced: {
//     id: 205,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `Physical Damage Reduced By {param1}`,
//   },
//   MagicDamageReduced: {
//     id: 206,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `Magic Damage Reduced By {param1}`,
//   },
//   EvolutionMovementSpeedIncrease: {
//     id: 1030,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Faster Movement`,
//   },
//   InfiniteMovementSpeedIncrease: {
//     id: 1030,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Faster Movement`,
//   },
//   DeathPenaltyAvoid: {
//     id: 1102,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} To Avoid Losing Points On Death`,
//   },
//   DodgeChance: {
//     id: 2159,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Dodge Chance`,
//   },
//   ReduceSkillCooldown: {
//     id: 1329,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Skill Cooldown Reduction`,
//   },
//   EnergyDecayDecrease: {
//     id: 1104,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Decrease To Energy Decay Speed`,
//   },
//   EarlyOrbPickup: {
//     id: 1114,
//     min: 0,
//     max: 0,
//     description: `Can Pick Up Orbs Early.`,
//   },
//   DamageReduce: {
//     id: 2316,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Damage Reduction`,
//   },
//   DoublePickupChance: {
//     id: 2914,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Chance To Double Item Pickup`,
//   },
//   AttackSpeed: {
//     id: 2153,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Attack Speed`,
//   },
//   CriticalHitChance: {
//     id: 2006,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Critical Hit Chance`,
//   },
//   IncreaseSkillPoints: {
//     id: 3807,
//     min: 0,
//     max: 100,
//     description: `+{param1} Skill Points`,
//   },
//   IncreaseAbsorb: {
//     id: 2307,
//     min: 0,
//     max: 100,
//     description: `Increase Absorb`,
//   },
//   IncreaseRandomStat: {
//     id: 2600,
//     min: 0,
//     max: 100,
//     description: `{param1} {param2}`,
//   },
//   IncreaseAilmentChance: {
//     id: 2914,
//     min: 0,
//     max: 100,
//     description: `Increase Ailment Chance`,
//   },
//   IncreaseAilmentDuration: {
//     id: 2015,
//     min: 0,
//     max: 100,
//     description: `Increase Ailment Duration`,
//   },
//   UnlockSkills: {
//     id: 3801,
//     min: 0,
//     max: 100,
//     description: `{param1} Unlocked`,
//   },
//   IncreaseDamage: {
//     id: 3801,
//     min: 0,
//     max: 100,
//     description: `{parameter1} {parameter2} damage`,
//   },
//   SelfEffectOnCondition: {
//     id: 3801,
//     min: 0,
//     max: 100,
//     description: `{parameter1} {parameter2} damage`,
//   },
//   IncreaseRankRewardBonus: {
//     id: 3801,
//     min: 0,
//     max: 100,
//     paramType1: 'percent',
//     description: `{param1} Increase To Rank Reward Bonuses`,
//   },
//   IncreaseDamageTaken: {
//     id: 3801,
//     min: 0,
//     max: 100,
//     description: `{parameter1} Additional Damage Taken ({parameter2})`,
//   },
//   IncreaseStat: {
//     id: 3801,
//     min: 0,
//     max: 100,
//     description: `{parameter1} {parameter2} {parameter3}`,
//   },
//   IncreaseEnergy: {
//     id: 2302,
//     min: 0,
//     max: 999,
//     description: `{parameter1}% Maximum Energy`,
//   },
//   IncreaseOnKill: {
//     id: 3801,
//     min: 0,
//     max: 200,
//     description: `{parameter1} {parameter2} On Kill`,
//   },
//   IncreaseResist: {
//     id: 2304,
//     min: 0,
//     max: 200,
//     description: `{parameter1} {parameter2} resistance`,
//   },
//   WinRewardsIncrease: {
//     id: 1150,
//     min: 0,
//     max: 200,
//     description: `{parameter1} win bonus`,
//   }
// }

export const ItemAttributesByName = {};

// Temp: Fill from DB
for (const itemAttribute of ItemAttributes) {
  // if (itemAttribute.id < 1000) continue // Don't do raid for now
  if (!ItemAttributesByName[itemAttribute.game]) ItemAttributesByName[itemAttribute.game] = {};

  ItemAttributesByName[itemAttribute.game][itemAttribute.name] = itemAttribute;
}

export const SkillNames = {
  0: 'None',
  // 1: 'Whirlwind',
  // 2: 'Fire Wall',
  // 3: 'Sanctuary Aura',
  // 4: 'Wolf Strike',
  // 5: 'Time Warp',
  // 6: 'Sacrifice',
  // 7: 'Hidden Shot',
  // 8: 'Fade',
  // 9: 'Phase',
  // 10: 'Deep Impact',
  // 11: 'Mystic Insight',
  // 12: 'Rending Blade',
  // 13: 'Piercing Shot',
  // 14: 'Preemptive Strike',
  // 15: 'Conversion',
  // 16: 'Bone Divination',
  // 17: 'Tranquil State',
  // 18: 'Arcane Augmentation',
  // 19: 'Soul Reaver',
  // 20: 'Animal Bond',
  // 21: 'Incendiary Trap',
  // 22: 'Jester\'s Folly',
  // 23: 'Inspiring Presence',
  // 24: 'Shadow Strike',
  // 612: 'Battle Rage',
  // 613: 'White Lightning',
  // 614: 'Inferno Fire Blast',
  // 615: 'Cosmic Flare',
  // 616: 'Veil of Night',
  // 617: 'Sky Swarm',
  // 618: 'Flurry Assault',
  // 619: 'Destructive Impact',
  // 620: 'Nova Breath',
  // 512: 'Evasion',
  // 499: 'Arcane Orbs',
  1: 'Whirlwind',
  2: 'Fire Wall',
  3: 'Sanctuary Aura',
  4: 'Wolf Strike',
  5: 'Time Warp',
  6: 'Sacrifice',
  7: 'Hidden Shot',
  8: 'Fade',
  9: 'Phase',
  10: 'Deep Impact',
  11: 'Mystic Insight',
  12: 'Rending Blade',
  13: 'Piercing Shot',
  14: 'Preemptive Strike',
  15: 'Conversion',
  16: 'Bone Divination',
  17: 'Tranquil State',
  18: 'Arcane Augmentation',
  19: 'Soul Reaver',
  20: 'Animal Bond',
  21: 'Incendiary Trap',
  22: "Jester's Folly",
  23: 'Inspiring Presence',
  24: 'Shadow Strike',
  25: 'Shadowstep',
  26: 'Hidden Skill 1',
  27: 'Hidden Skill 2',
  28: 'Hidden Skill 3',
  29: 'Hidden Skill 4',
  30: 'Hidden Skill 5',
  31: 'Hidden Skill 6',
  32: 'Hidden Skill 7',
  33: 'Hidden Skill 8',
  34: 'Hidden Skill 9',
  35: 'Hidden Skill 10',
  36: 'Sating Rend',
  37: 'Holy Bolt',
  201: 'Furious Rush',
  202: 'Fade',
  203: 'Soul Harvest',
  204: 'Piercing Shot',
  205: 'Sacred Aura',
  206: 'Nova',
  207: 'Dramatic Growth',
  208: 'Deadly Wit',
  209: 'Mirror Image',
  210: 'Static Cloud',
  211: 'Moonlight Torrent',
  212: 'Potentiation',
  213: 'Dragonlight',
  214: 'Arcane Eye',
  215: 'Air Blast',
  401: 'Flurry',
  402: 'Relentless',
  403: 'Onslaught',
  404: 'Enlightenment',
  405: 'Blink',
  406: 'Static Snare',
  407: 'Steadfast Defense',
  408: 'Elusive Movements',
  409: 'Whirlwind',
  410: 'Hidden Shot',
  411: 'Blood Summoning',
  412: 'Breath of Fire',
  413: 'Afterimage Assault',
  414: 'Sanctuary Aura',
  415: 'Animal Strike',
  416: 'Rejuvenation',
  417: 'Fluid Movement',
  418: "Moon's Embrace",
  419: 'Moonlight Wave',
  420: 'Determined Charge',
  421: 'Momentum',
  422: 'Commitment',
  423: 'Equilibrium',
  424: 'Potentiation',
  425: 'Revealing Glow',
  426: 'Anticipation',
  427: 'Enkindle',
  428: 'Roll',
  429: 'Time Warp',
  430: 'Fade',
  431: 'Shadow Step',
  432: 'Lightning Strike',
  433: 'Power Shot',
  434: 'Dash',
  435: 'Static Encirclement',
  436: 'Trap',
  437: 'Summon Swarm',
  438: 'Elemental Affinity',
  439: 'Clear Mind',
  440: 'Echo',
  441: 'Domain of Power',
  442: 'Violent Growth',
  443: 'Lightning Lancer',
  444: 'Animal Form',
  445: 'Meteor',
  446: 'Spectral Weapon',
  447: 'Fire Ball',
  448: 'Fire Wall',
  449: 'Rain of Fire',
  450: 'Flaming Dash',
  451: 'Infernal Cascade',
  452: 'Frozen Orb',
  453: 'Chain Lightning',
  454: 'Bone Prison',
  455: 'Ethereal Spear',
  456: 'Split Shot',
  457: 'Trueflight Arrow',
  458: 'Incineration Arrow',
  459: 'Bone Barricade',
  460: 'Hell Fire Trap',
  461: 'Cure',
  462: 'Dragon Strike',
  463: 'Storm Call',
  464: 'Salvo Trap',
  465: 'Intimidating Warcry',
  466: 'Rooting Totem',
  467: 'Sanctuary Aura',
  468: 'Grim Harvest Aura',
  469: 'Frost Armor',
  470: 'Rejuvenation',
  471: 'Charge',
  472: 'Leap',
  473: 'Slash',
  474: 'Shuriken Dance',
  475: 'Shuriken Throw',
  476: 'Inspiration',
  477: 'Haste',
  478: 'Fire Aura',
  479: 'Bloodlet',
  480: 'Flash',
  481: 'Voltaic Orb',
  482: 'Thunder Wrath',
  483: 'Lightning Fury',
  484: 'Lightning Trap',
  485: 'Gluttony',
  486: 'Magnetic Field',
  487: 'Freeze Blast',
  488: 'Blizzard',
  489: 'Icestrike',
  490: 'Fend',
  491: 'Discharge',
  492: 'Aqua Splash',
  493: 'Haunting Spirit',
  494: 'Weakness',
  495: 'Blade Barrier',
  496: 'Defend',
  497: 'Block Sorcery',
  529: 'Deflect Sorcery',
  498: 'Riposte',
  499: 'Arcane Orbs',
  500: 'Arcane Beam',
  501: 'Poison Nova',
  502: 'Thunderclap Blade',
  503: 'Almighty Domain',
  504: 'Burning Fists',
  505: 'Tailwinds',
  506: 'Vine Whip',
  507: 'Hallowed Earth',
  508: 'Cleansing Arc',
  509: 'Raging Fireball',
  510: 'Aqua Beam',
  511: 'Berserker Soul',
  512: 'Evasion',
  537: 'Gravity Well',
  513: 'Soften Earth',
  514: 'Glacial Wall',
  515: 'Energy Wave',
  530: 'Shadow Illusion',
  516: 'Fire Nova',
  531: 'Healing Totem',
  517: 'Grappling Hook',
  532: 'Mana Totem',
  518: 'Ground Slam',
  533: 'Healing and Mana Totem',
  519: 'Damage Aura Totem',
  534: 'Protect Sorcery',
  520: 'Magic Resist Totem/Physical Resist Totem',
  535: 'Summon Gargoyle',
  521: 'Elemental Attack Totem',
  536: 'Weapon Throw',
  522: 'Elemental Field Totem',
  523: 'Attack Speed Totem',
  524: 'Critical Totem',
  525: 'Cast Speed Totem',
  526: 'Shadow Strike',
  // 527: "Evasion",
  528: 'Flywing Dust',
  612: 'Battle Rage',
  613: 'White Lightning',
  614: 'Inferno Fire Blast',
  615: 'Cosmic Flare',
  616: 'Veil of Night',
  617: 'Sky Swarm',
  618: 'Flurry Assault',
  619: 'Destructive Impact',
  620: 'Nova Breath',
};

for (let i = 0; i < 1000; i++) {
  if (!SkillNames[i]) {
    SkillNames[i] = '';
  }
}

export const SkillIdByName: any = {};

for (const key of Object.keys(SkillNames)) {
  // @ts-ignore
  SkillIdByName[SkillNames[key]] = parseInt(key);
}

export const ClassNames = {
  0: 'None',
  1: 'Warrior',
  2: 'Mage',
  3: 'Ranger',
  4: 'Necromancer',
  5: 'Paladin',
  6: 'Assassin',
  7: 'Druid',
  8: 'Bard',
};

export const ClassIdByName: any = {};

for (const key of Object.keys(ClassNames)) {
  // @ts-ignore
  ClassIdByName[ClassNames[key]] = parseInt(key);
}

export const CraftingCompetitionWinner = {
  1: 'Crafting Competition #1 Winner PT',
  2: 'Crafting Competition #2 Winner Spontaneous',
  3: 'Crafting Competition #3 Winner X',
};

type ItemRarityKeyType =
  | 'Legendary'
  | 'Unique'
  | 'Mythic'
  | 'Epic'
  | 'Rare'
  | 'Magical'
  | 'Normal'
  | 'Set'
  | 'Quest'
  | 'Trash';
type ItemRarityValueType = {
  id: number;
  name: ItemRarityKeyType;
};

type ItemRarityType = Record<ItemRarityKeyType, ItemRarityValueType>;

export const ItemRarity: ItemRarityType = {
  Legendary: { id: 1, name: 'Legendary' },
  Unique: { id: 2, name: 'Unique' },
  Mythic: { id: 3, name: 'Mythic' },
  Epic: { id: 4, name: 'Epic' },
  Rare: { id: 5, name: 'Rare' },
  Magical: { id: 6, name: 'Magical' },
  Normal: { id: 7, name: 'Normal' },
  Set: { id: 8, name: 'Set' },
  Quest: { id: 9, name: 'Quest' },
  Trash: { id: 10, name: 'Trash' },
};

export const ItemRarityNameById: any = {};

for (const key of Object.keys(ItemRarity)) {
  // @ts-ignore
  ItemRarityNameById[ItemRarity[key].id] = ItemRarity[key].name;
}

export const ItemAttributesById: any = {};

for (const itemAttribute of ItemAttributes) {
  // @ts-ignore
  ItemAttributesById[itemAttribute.id] = itemAttribute;
}

export const ItemType = {
  None: 0,
  OneHandedWeapon: 1,
  TwoHandedWeapon: 2,
  Shield: 3,
  Arrow: 4,
  Helm: 5,
  Pet: 6,
  BodyArmor: 7,
  LegArmor: 8,
  Glove: 9,
  Belt: 10,
  Boot: 11,
  Ring: 12,
  Amulet: 13,
  Trinket: 14,
  Consumable: 15,
  Gem: 16,
  Rune: 17,
  Ingredient: 18,
  Quest: 19,
  Undercloth: 20,
  Mount: 21,
  Key: 22,
  Container: 23,
  WristArmor: 24,
  Misc: 25,
};

export const ItemTypeNames = {
  [ItemType.None]: 'None',
  [ItemType.OneHandedWeapon]: 'One Handed Weapon',
  [ItemType.TwoHandedWeapon]: 'Two Handed Weapon',
  [ItemType.Shield]: 'Shield',
  [ItemType.Arrow]: 'Arrow',
  [ItemType.Helm]: 'Helm',
  [ItemType.Pet]: 'Pet',
  [ItemType.BodyArmor]: 'Body Armor',
  [ItemType.LegArmor]: 'Leggings',
  [ItemType.Glove]: 'Glove',
  [ItemType.Belt]: 'Belt',
  [ItemType.Boot]: 'Boot',
  [ItemType.Ring]: 'Ring',
  [ItemType.Amulet]: 'Amulet',
  [ItemType.Trinket]: 'Trinket',
  [ItemType.Consumable]: 'Consumable',
  [ItemType.Gem]: 'Gem',
  [ItemType.Rune]: 'Rune',
  [ItemType.Ingredient]: 'Ingredient',
  [ItemType.Quest]: 'Quest',
  [ItemType.Undercloth]: 'Undercloth',
  [ItemType.Mount]: 'Mount',
  [ItemType.Key]: 'Key',
  [ItemType.Container]: 'Container',
  [ItemType.Misc]: 'Misc',
  [ItemType.WristArmor]: 'Wrist Armor',
};

export const ItemTypeToText = ItemTypeNames;

export const ItemTypeIdByName: any = {};

for (const key of Object.keys(ItemTypeNames)) {
  // @ts-ignore
  ItemTypeIdByName[ItemTypeNames[key]] = parseInt(key);
}

export const ItemSlot = {
  None: 0,
  LeftHand: 1,
  RightHand: 2,
  Head: 3,
  Pet: 4,
  Neck: 5,
  Legs: 6,
  Chest: 7,
  Waist: 8,
  Hands: 9,
  Wrists: 10,
  Shoulders: 11,
  Feet: 12,
  Finger1: 13,
  Finger2: 14,
  Trinket1: 15,
  Trinket2: 16,
  Trinket3: 17,
  Body: 18,
  Companion: 19,
  Mount: 20,
};

export const ItemSlotToText = {
  [ItemSlot.None]: 'None',
  [ItemSlot.LeftHand]: 'Left Hand',
  [ItemSlot.RightHand]: 'Right Hand',
  [ItemSlot.Head]: 'Head',
  [ItemSlot.Body]: 'Body',
  [ItemSlot.Neck]: 'Neck',
  // [ItemSlot.Shoulder]: 'Shoulder',
  [ItemSlot.Chest]: 'Chest',
  [ItemSlot.Waist]: 'Waist',
  [ItemSlot.Hands]: 'Hands',
  [ItemSlot.Wrists]: 'Wrists',
  [ItemSlot.Legs]: 'Legs',
  [ItemSlot.Feet]: 'Feet',
  [ItemSlot.Finger1]: 'Finger 1',
  [ItemSlot.Finger2]: 'Finger 2',
  [ItemSlot.Trinket1]: 'Trinket 1',
  [ItemSlot.Trinket2]: 'Trinket 2',
  [ItemSlot.Trinket3]: 'Trinket 3',
  [ItemSlot.Pet]: 'Pet',
  [ItemSlot.Companion]: 'Companion',
  [ItemSlot.Mount]: 'Mount',
};

export const ItemId = {
  Steel: 1,
  Fury: 2,
  Lorekeeper: 3,
  WorldstoneShard: 4,
  Flash: 5,
  Titan: 6,
  Smoke: 7,
  Nexus: 8,
  Triumph: 9,
  Glory: 10,
  Grace: 11,
  Genesis: 12,
  Destiny: 13,
  Wrath: 14,
  Fortress: 15,
  Elder: 16,
  Pledge: 19,
  Flow: 20,
  GuidingLight: 21,
};

export const RuneId = {
  EX: 0,
  ELM: 1,
  TYR: 2,
  NEN: 3,
  EVA: 4,
  ISA: 5,
  TATO: 6,
  RO: 7,
  ORE: 8,
  THAL: 9,
  ASH: 10,
  SOLO: 11,
  SEN: 12,
  DA: 13,
  HAN: 14,
  ION: 15,
  LUX: 16,
  KA: 17,
  FUS: 18,
  LENI: 19,
  PAI: 20,
  ULN: 21,
  MOR: 22,
  ISK: 23,
  GON: 24,
  VAL: 25,
  OH: 26,
  LOR: 27,
  SU: 28,
  BERU: 29,
  JUA: 30,
  CHIN: 31,
  ZENO: 32,
};

export const RuneNames: any = {};

for (const key of Object.keys(RuneId)) {
  // @ts-ignore
  RuneNames[parseInt(RuneId[key])] = key;
}

const ignoredItems = [
  // "Founder's Cube",
  // "Zavox's Fortune",
  // "General's Medallion",
  // "Scholar's Codex",
  // 'Crafting Competition Certificate',
];

export const itemData = {
  [ItemsMainCategoriesType.OTHER]: [
    ...generatedItems.filter((item) => item.specificType !== 73 && !ignoredItems.includes(item.name)),
  ],
  [ItemsMainCategoriesType.RUNES]: [
    ...generatedItems.filter((item) => item.specificType === 73 && !ignoredItems.includes(item.name)),
  ],
  [ItemsMainCategoriesType.WEAPONS]: [],
  [ItemsMainCategoriesType.SHIELDS]: [],
  [ItemsMainCategoriesType.ARMORS]: [],
};

export default itemData;
