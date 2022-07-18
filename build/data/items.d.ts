import { ItemCategoriesType } from './items.type';
export declare const rewardTokenIdMap: {
    'Guardian Egg': {
        Magical: string;
        Rare: string;
        Epic: string;
        Mythic: string;
    };
    "Early Access Founder's Cube": {
        Unique: string;
    };
    'Santa Christmas 2021 Ticket': {
        Normal: string;
    };
    "Zavox's Fortune": {
        Normal: string;
    };
    Trinket: {
        Magical: string;
        Rare: string;
        Epic: string;
        Mythic: string;
    };
    RUNE: {
        Normal: string;
    };
};
export declare const Games: {
    Raid: {
        id: number;
    };
    Evolution: {
        id: number;
    };
    Infinite: {
        id: number;
    };
    Sanctuary: {
        id: number;
    };
    Guardians: {
        id: number;
    };
};
export declare const ConditionIdByName: {
    WaitForTime: number;
    InAura: number;
    SkillHits: number;
    IsNight: number;
    Ailment: number;
    Buff: number;
    AlliesNearby: number;
    NPCsNearby: number;
    MapModActive: number;
    StepsTaken: number;
    UniqueEnemiesKilled: number;
    ConsecutiveWins: number;
    KillStreak: number;
    PerfectHealth: number;
    HealthBelow: number;
    HealthAbove: number;
    EnemyWithAilmentNearby: number;
    SkillTypeNearby: number;
    CriticalHitWithSkill: number;
    AppliedAilment: number;
    EnemyWithDoTNearby: number;
    PerfectDodge: number;
    SkillTypeUsed: number;
    AttackDefended: number;
    TimeWithoutDamageTaken: number;
    TimeWithoutCriticalHit: number;
    DualWielding: number;
    EnemyHealthAbove: number;
    EnemyHealthBelow: number;
    EmptyOffHand: number;
    RankAchieved: number;
    TimeWithoutHits: number;
};
export declare const ConditionNames: any;
export declare const ConditionParamIdByName: {
    Attack: number;
};
export declare const ConditionParamNames: any;
export declare const TypeIdByName: {
    Fire: number;
    Lightning: number;
    Ice: number;
    Water: number;
    Arcane: number;
    Wind: number;
    Earth: number;
    Physical: number;
    Poison: number;
    Light: number;
    Dark: number;
    AoE: number;
    Beam: number;
    Projectile: number;
    Totem: number;
    Aura: number;
    Mage: number;
    Necromancer: number;
    Paladin: number;
    Barbarian: number;
    Ranger: number;
    Druid: number;
    Rogue: number;
    Buff: number;
    Melee: number;
    Spell: number;
    Ranged: number;
    Utility: number;
    Attack: number;
    Healing: number;
    Debuff: number;
    DamageOverTime: number;
    Bard: number;
    All: number;
    Ultimate: number;
};
export declare const TypeNames: any;
export declare const SpecificTypeIdByName: {
    Fire: number;
    Lightning: number;
    Ice: number;
    Water: number;
    Arcane: number;
    Wind: number;
    Earth: number;
    Physical: number;
    Poison: number;
    Light: number;
    Dark: number;
    AoE: number;
    Beam: number;
    Projectile: number;
    Totem: number;
    Aura: number;
    Mage: number;
    Necromancer: number;
    Paladin: number;
    Barbarian: number;
    Ranger: number;
    Druid: number;
    Rogue: number;
    Buff: number;
    Melee: number;
    Spell: number;
    Ranged: number;
    Utility: number;
    Attack: number;
    Healing: number;
    Debuff: number;
    DamageOverTime: number;
    Bard: number;
    All: number;
    Ultimate: number;
};
export declare const SpecificTypeNames: any;
export declare const EffectIdByName: {
    Poison: number;
    Bleed: number;
    Freeze: number;
    Stun: number;
    Burn: number;
    BloodDrunk: number;
    Sacrifice: number;
    Silence: number;
    Blind: number;
    Sick: number;
    Slow: number;
    EvolveLock: number;
    Complacent: number;
    Rooted: number;
    Airborne: number;
    Sleep: number;
    Shatter: number;
    Polymorph: number;
    'Armor Weakened': number;
    AttackSpeedReduce: number;
    'Healing Prevention': number;
    Ethereal: number;
    Haste: number;
    Regeneration: number;
    Shield: number;
    GuildLeadership: number;
    Damage: number;
    AttackSpeedIncrease: number;
    CritChance: number;
    CritMultiplier: number;
    AilmentChance: number;
    BurstOfSpeed: number;
    Disarm: number;
    Petrify: number;
    Fear: number;
    Confuse: number;
    Parry: number;
    Block: number;
    Reflect: number;
    Oil: number;
    'Wet ': number;
    'HP Critical': number;
    FreezingDamage: number;
    FireDamage: number;
    LightningDamage: number;
    ArcaneDamage: number;
    RendingDamage: number;
    PoisonDamage: number;
    HolyDamage: number;
    DarkDamage: number;
    Magnetism: number;
    MovementDamage: number;
};
export declare const EffectNames: any;
export declare const StatIdByName: {
    EnergyRegen: number;
    CriticalHitChance: number;
    MovementSpeed: number;
    AttackSpeed: number;
    CriticalHitMultiplier: number;
    CastSpeed: number;
    Health: number;
    Strength: number;
    Dexterity: number;
    Vitality: number;
};
export declare const StatNames: any;
export declare const ModIdByName: {
    'Wild Swings': number;
    'Scorching Light': number;
    Bloodseekers: number;
};
export declare const ModNames: any;
export declare const ItemAttributes: {
    HarvestYield: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    HarvestFee: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    HarvestFeeToken: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    SendHarvestHiddenPool: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    BurnEntireHarvest: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    HarvestBurn: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    FindShard: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    RemoveFees: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    UnstakeLocked: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    EarlyUnstakeNoReward: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    RandomRuneExchange: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    FindGuildToken: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    MagicFind: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    FractureItem: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    LaunchPoolReward: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    LaunchPoolToken: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    FreezeFees: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    UnableUseRuneword: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    CreateRandomRuneword: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    SpecificGuild: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    SpecificClass: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    RemoveTransferFees: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    HarvestFeeToRandomRaider: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    ShardOnHarvest: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    HarvestStartDelay: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    HarvestClaimDelay: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    EarlyUnstakeFee: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    EarlyUnstakeFeeValue: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    FreezeFeesValue: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    HarvestLockedLp: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    DepositLockedLp: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    WithdrawLockedLp: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    TransmuteItem: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    AvoidBurn: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    EarlyAccess: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    NeverHarvestCurrentRune: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    GameLottery: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    IncreasePoolMultiplier: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    AddSkill: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    Rarity: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    RandomPerfection1: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    RandomPerfection2: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    RandomPerfection3: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    RandomPerfection4: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    RandomPerfection5: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    SpecificRuneReward: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    ReduceBurn: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    GuildMemberCapacity: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    GuildInventorySpaces: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    GuildFarmingYield: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    GuildTokenStakeRequired: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    GuildTokenValueRequired: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    GuildRuneStakeRequired: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    PetFarmingYield: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    Sockets: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    SpecificRuneRewardToken: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    SpecificRuneRewardAmount: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    ResetSockets: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    CrafterCertificate: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    HarvestCritChance: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    HarvestCritMultiplier: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    HarvestOverTime: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    HarvestVestmentReduction: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    HarvestVestmentIncrease: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    HarvestTheft: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    HarvestTheftMinIncrease: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    HarvestTheftMaxIncrease: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    HarvestTheftMinDecrease: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    RandomRuneBonus: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    YieldBonusSpecificWeapon: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    RandomRuneSpecificWeapon: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    SpecificWeaponType: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    HarvestTheftDefense: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    RandomRuneExchangeSpecific: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    RandomRuneToken: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    SetBonusItems: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    TwoItemSetBonus: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    ThreeItemSetBonus: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    FourItemSetBonus: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    FiveItemSetBonus: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    GuildTreasuryYieldBonus: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    HarvestToTreasury: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    GuildTreasuryAccessKey: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    KarmicInfluence: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    VestingUnequipLock: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    RaidUnequipLockOnStake: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    FindFashionShard: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    AddSkillPoint: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    UnlockSkillMod: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    AttributeDebuffToBuffOnEquipTime: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    AttributeUnlockOnEquipTime: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    AttributeUnlockOnConsecutiveEquipTime: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    TargetAttributeToUnlock: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    DebuffAttributeToChange: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    BuffAttributeToChange: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    DebuffToBuffAttributeRange: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    RequireAttributeID: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    RequireAttributeValue: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    RequireSkill: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    CriticalCraftChance: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    DisenchantmentBonus: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    CriticalSlamChance: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    RequireHarvestedRunes: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    IgnoreTheftDefense: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    HarvestSpeed: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    StunOnHarvest: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    StunRecovery: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    FractureReduction: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    LimitedDurability: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    BeginRaidMana: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    BeginRaidHealthIncrease: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    ManaTheftOnHarvest: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    ManaPoolMultiplierIncrease: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    UnequipLockRaidDuration: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    AttributeDebuffToBuffOnBurnedRunes: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    AttributeDebuffToBuffOnHarvestedRunes: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    YieldBonusToHiddenPool: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    YieldBonusFromHiddenPool: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    AttributeDebuffToBuffWhenHiddenPoolStake: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    AttributeUnlockWhenHiddenPoolStake: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    AttributeScaleWithHiddenPoolStake: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    AvoidHarvestLossWithoutBonus: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    HarvestFeeReductionPenalty: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    HarvestYieldBonusWeapons: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    AutoCompoundHiddenPool: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    UnstakeLockedDurationFromHarvest: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    EnhancedDefense: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    ColdDamage: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    ColdDuration: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    SlowerStaminaDrain: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    LifeStolenPerHit: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    ManaStolenPerHit: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    DamageReduced: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    MagicDamageReduced: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    EvolutionMovementSpeedIncrease: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    InfiniteMovementSpeedIncrease: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    DeathPenaltyAvoid: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    DodgeChance: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    ReduceSkillCooldown: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    EnergyDecayDecrease: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    EarlyOrbPickup: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    DamageReduce: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    DoublePickupChance: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    AttackSpeed: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    CriticalHitChance: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    IncreaseSkillPoints: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    IncreaseAbsorb: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    IncreaseRandomStat: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    IncreaseAilmentChance: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    IncreaseAilmentDuration: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    UnlockSkills: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    IncreaseDamage: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    SelfEffectOnCondition: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    IncreaseRankRewardBonus: {
        id: number;
        min: number;
        max: number;
        paramType1: string;
        description: string;
    };
    IncreaseDamageTaken: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    IncreaseStat: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    IncreaseEnergy: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    IncreaseOnKill: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    IncreaseResist: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
    WinRewardsIncrease: {
        id: number;
        min: number;
        max: number;
        description: string;
    };
};
export declare const SkillNames: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    13: string;
    14: string;
    15: string;
    16: string;
    17: string;
    18: string;
    19: string;
    20: string;
    21: string;
    22: string;
    23: string;
    24: string;
    25: string;
    26: string;
    27: string;
    28: string;
    29: string;
    30: string;
    31: string;
    32: string;
    33: string;
    34: string;
    35: string;
    36: string;
    37: string;
    201: string;
    202: string;
    203: string;
    204: string;
    205: string;
    206: string;
    207: string;
    208: string;
    209: string;
    210: string;
    211: string;
    212: string;
    213: string;
    214: string;
    215: string;
    401: string;
    402: string;
    403: string;
    404: string;
    405: string;
    406: string;
    407: string;
    408: string;
    409: string;
    410: string;
    411: string;
    412: string;
    413: string;
    414: string;
    415: string;
    416: string;
    417: string;
    418: string;
    419: string;
    420: string;
    421: string;
    422: string;
    423: string;
    424: string;
    425: string;
    426: string;
    427: string;
    428: string;
    429: string;
    430: string;
    431: string;
    432: string;
    433: string;
    434: string;
    435: string;
    436: string;
    437: string;
    438: string;
    439: string;
    440: string;
    441: string;
    442: string;
    443: string;
    444: string;
    445: string;
    446: string;
    447: string;
    448: string;
    449: string;
    450: string;
    451: string;
    452: string;
    453: string;
    454: string;
    455: string;
    456: string;
    457: string;
    458: string;
    459: string;
    460: string;
    461: string;
    462: string;
    463: string;
    464: string;
    465: string;
    466: string;
    467: string;
    468: string;
    469: string;
    470: string;
    471: string;
    472: string;
    473: string;
    474: string;
    475: string;
    476: string;
    477: string;
    478: string;
    479: string;
    480: string;
    481: string;
    482: string;
    483: string;
    484: string;
    485: string;
    486: string;
    487: string;
    488: string;
    489: string;
    490: string;
    491: string;
    492: string;
    493: string;
    494: string;
    495: string;
    496: string;
    497: string;
    529: string;
    498: string;
    499: string;
    500: string;
    501: string;
    502: string;
    503: string;
    504: string;
    505: string;
    506: string;
    507: string;
    508: string;
    509: string;
    510: string;
    511: string;
    512: string;
    537: string;
    513: string;
    514: string;
    515: string;
    530: string;
    516: string;
    531: string;
    517: string;
    532: string;
    518: string;
    533: string;
    519: string;
    534: string;
    520: string;
    535: string;
    521: string;
    536: string;
    522: string;
    523: string;
    524: string;
    525: string;
    526: string;
    528: string;
};
export declare const SkillIdByName: any;
export declare const ClassNames: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
};
export declare const ClassIdByName: any;
export declare const CraftingCompetitionWinner: {
    1: string;
    2: string;
    3: string;
};
declare type ItemRarityKeyType = 'Legendary' | 'Unique' | 'Mythic' | 'Epic' | 'Rare' | 'Magical' | 'Normal' | 'Set' | 'Quest' | 'Trash';
declare type ItemRarityValueType = {
    id: number;
    name: ItemRarityKeyType;
};
declare type ItemRarityType = Record<ItemRarityKeyType, ItemRarityValueType>;
export declare const ItemRarity: ItemRarityType;
export declare const ItemRarityNameById: any;
export declare const ItemAttributesById: any;
export declare const ItemType: {
    None: number;
    OneHandedWeapon: number;
    TwoHandedWeapon: number;
    Shield: number;
    Arrow: number;
    Helm: number;
    Pet: number;
    BodyArmor: number;
    LegArmor: number;
    Glove: number;
    Belt: number;
    Boot: number;
    Ring: number;
    Amulet: number;
    Trinket: number;
    Consumable: number;
    Gem: number;
    Rune: number;
    Ingredient: number;
    Quest: number;
    Undercloth: number;
    Mount: number;
    Key: number;
    Container: number;
    WristArmor: number;
    Misc: number;
};
export declare const ItemTypeToText: {
    [x: number]: string;
};
export declare const ItemSlot: {
    None: number;
    LeftHand: number;
    RightHand: number;
    Head: number;
    Pet: number;
    Neck: number;
    Legs: number;
    Chest: number;
    Waist: number;
    Hands: number;
    Wrists: number;
    Shoulders: number;
    Feet: number;
    Finger1: number;
    Finger2: number;
    Trinket1: number;
    Trinket2: number;
    Trinket3: number;
    Body: number;
    Companion: number;
    Mount: number;
};
export declare const ItemSlotToText: {
    [x: number]: string;
};
export declare const ItemId: {
    Steel: number;
    Fury: number;
    Lorekeeper: number;
    WorldstoneShard: number;
    Flash: number;
    Titan: number;
    Smoke: number;
    Nexus: number;
    Triumph: number;
    Glory: number;
    Grace: number;
    Genesis: number;
    Destiny: number;
    Wrath: number;
    Fortress: number;
    Elder: number;
    Pledge: number;
    Flow: number;
    GuidingLight: number;
};
export declare const RuneId: {
    EL: number;
    ELD: number;
    TIR: number;
    NEF: number;
    ETH: number;
    ITH: number;
    TAL: number;
    RAL: number;
    ORT: number;
    THUL: number;
    AMN: number;
    SOL: number;
    SHAEL: number;
    DOL: number;
    HEL: number;
    IO: number;
    LUM: number;
    KO: number;
    FAL: number;
    LEM: number;
    PUL: number;
    UM: number;
    MAL: number;
    IST: number;
    GUL: number;
    VEX: number;
    OHM: number;
    LO: number;
    SUR: number;
    BER: number;
    JAH: number;
    CHAM: number;
    ZOD: number;
};
export declare const RuneNames: any;
export declare const itemData: {
    runeword: ({
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word": string;
            Distribution: string;
            Date: string;
            "Max Supply": string;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "0": string;
                            "1": string;
                            "2": string;
                        };
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                    paramValue1?: undefined;
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                            "4"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "4": string;
                            "109"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        map: {
                            "109"?: undefined;
                            "4"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {};
                        min?: undefined;
                        max?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: number[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word": string;
            Distribution: string;
            Date: string;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                    };
                }[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                    game?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    paramValue2: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    nature?: undefined;
                    influences?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "412": string;
                        };
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    param1: {
                        spec: string;
                        map: {
                            "412"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                    param2?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: any[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word": string;
            Distribution: string;
            Date: string;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                    paramType1?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                    paramValue1?: undefined;
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "494": string;
                        };
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue2?: undefined;
                    param2?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: any[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: any[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            Distribution: string;
            Date: string;
            "Rune Word"?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                }[];
                perfection: any[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: any[];
                perfection: any[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: number[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word": string;
            Distribution: string;
            Date: string;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                    };
                }[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "3": string;
                            "109"?: undefined;
                            "2"?: undefined;
                            "476"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                            "3"?: undefined;
                            "2"?: undefined;
                            "476"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "2": string;
                            "3"?: undefined;
                            "109"?: undefined;
                            "476"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "476": string;
                            "3"?: undefined;
                            "109"?: undefined;
                            "2"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                    influences?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "480": string;
                        };
                    };
                    paramType2?: undefined;
                    paramType3?: undefined;
                    paramValue1?: undefined;
                    param2?: undefined;
                    paramValue2?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: number[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word": string;
            Distribution: string;
            Date: string;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                    };
                }[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                    game?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                            "9"?: undefined;
                            "496"?: undefined;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "9": string;
                            "109"?: undefined;
                            "496"?: undefined;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "496": string;
                            "109"?: undefined;
                            "9"?: undefined;
                        };
                    };
                    influences?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {};
                        min?: undefined;
                        max?: undefined;
                    };
                    paramValue1?: undefined;
                    param2?: undefined;
                    paramType2?: undefined;
                    paramValue2?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: any[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word": string;
            Distribution: string;
            Date: string;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                    influences?: undefined;
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "474": string;
                        };
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: number[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word": string;
            Distribution: string;
            Date: string;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "6": string;
                            "7": string;
                            "8": string;
                            "409"?: undefined;
                        };
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "409": string;
                            "6"?: undefined;
                            "7"?: undefined;
                            "8"?: undefined;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {
                            "6"?: undefined;
                            "7"?: undefined;
                            "8"?: undefined;
                            "409"?: undefined;
                        };
                        value?: undefined;
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "201": string;
                        };
                    };
                    paramValue1?: undefined;
                    influences?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                    influences?: undefined;
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        map: {
                            "1"?: undefined;
                            "4"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        map: {
                            "1"?: undefined;
                            "4"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    paramValue2: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    nature?: undefined;
                    influences?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    param1: {
                        spec: string;
                        map: {
                            "409"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "1": string;
                            "4"?: undefined;
                        };
                    };
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "4": string;
                            "1"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "409": string;
                        };
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    nature: string;
                    influences: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "409": string;
                        };
                    };
                    param2: {
                        spec: string;
                        map: {
                            "1"?: undefined;
                            "4"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    description?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    influences?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: any[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word": string;
            Distribution: string;
            Date: string;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "8": string;
                            "9": string;
                            "10": string;
                            "410"?: undefined;
                        };
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "410": string;
                            "8"?: undefined;
                            "9"?: undefined;
                            "10"?: undefined;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {
                            "8"?: undefined;
                            "9"?: undefined;
                            "10"?: undefined;
                            "410"?: undefined;
                        };
                        value?: undefined;
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    game?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {};
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                    influences?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                    influences?: undefined;
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "9": string;
                            "4"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "4": string;
                            "9"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {};
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    param1: {
                        spec: string;
                        map: {};
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue2?: undefined;
                    paramType3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: number[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word": string;
            Distribution: string;
            Date: string;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "9": string;
                            "10": string;
                            "11": string;
                            "6"?: undefined;
                        };
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "6": string;
                            "9"?: undefined;
                            "10"?: undefined;
                            "11"?: undefined;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {
                            "9"?: undefined;
                            "10"?: undefined;
                            "11"?: undefined;
                            "6"?: undefined;
                        };
                        value?: undefined;
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType1?: undefined;
                    paramValue1?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {};
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                    influences?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                    influences?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    influences?: undefined;
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "9": string;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        map: {
                            "9"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue2?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "455": string;
                        };
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    influences?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: number[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word": string;
            Distribution: string;
            Date: string;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "9": string;
                            "10": string;
                            "11": string;
                            "429"?: undefined;
                        };
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "429": string;
                            "9"?: undefined;
                            "10"?: undefined;
                            "11"?: undefined;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {
                            "9"?: undefined;
                            "10"?: undefined;
                            "11"?: undefined;
                            "429"?: undefined;
                        };
                        value?: undefined;
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {
                            "11"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    influences?: undefined;
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                    influences?: undefined;
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    description?: undefined;
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "11": string;
                        };
                    };
                    description?: undefined;
                    paramValue1?: undefined;
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "1": string;
                            "6"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {
                            "1"?: undefined;
                            "6"?: undefined;
                        };
                        value?: undefined;
                    };
                    paramValue2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "1": string;
                            "6"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "6": string;
                            "1"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {};
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    influences?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    influences?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: number[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word": string;
            Distribution: string;
            Date: string;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "11": string;
                            "12": string;
                            "13": string;
                            "14": string;
                            "430"?: undefined;
                        };
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "430": string;
                            "11"?: undefined;
                            "12"?: undefined;
                            "13"?: undefined;
                            "14"?: undefined;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {
                            "11"?: undefined;
                            "12"?: undefined;
                            "13"?: undefined;
                            "14"?: undefined;
                            "430"?: undefined;
                        };
                        value?: undefined;
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "430": string;
                        };
                    };
                    paramValue1?: undefined;
                    influences?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                    influences?: undefined;
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "9": string;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    param1: {
                        spec: string;
                        map: {
                            "21"?: undefined;
                            "475"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "21": string;
                            "475"?: undefined;
                        };
                    };
                    param2: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {
                            "9"?: undefined;
                        };
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "475": string;
                            "21"?: undefined;
                        };
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: number[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            Distribution: string;
            Date: string;
            "Rune Word"?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "467": string;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {
                            "467"?: undefined;
                        };
                        value?: undefined;
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "467": string;
                        };
                    };
                    influences?: undefined;
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                    influences?: undefined;
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                            "496"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "496": string;
                            "109"?: undefined;
                        };
                    };
                    influences?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "24": string;
                            "471"?: undefined;
                        };
                    };
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "471": string;
                            "24"?: undefined;
                        };
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    influences?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: number[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word": string;
            Distribution: string;
            Date: string;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "11": string;
                            "12": string;
                            "13": string;
                            "14": string;
                        };
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "11": string;
                            "12"?: undefined;
                            "13"?: undefined;
                            "14"?: undefined;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {
                            "11"?: undefined;
                            "12"?: undefined;
                            "13"?: undefined;
                            "14"?: undefined;
                        };
                        value?: undefined;
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    game?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    nexusLink: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    game?: undefined;
                    paramType1?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {
                            "11"?: undefined;
                            "101"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "11": string;
                            "101"?: undefined;
                        };
                    };
                    influences?: undefined;
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                    influences?: undefined;
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    description?: undefined;
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "101": string;
                            "11"?: undefined;
                        };
                    };
                    description?: undefined;
                    paramValue1?: undefined;
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "2": string;
                            "1"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    param1: {
                        spec: string;
                        map: {
                            "481"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {
                            "2"?: undefined;
                            "1"?: undefined;
                        };
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "481": string;
                        };
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "1": string;
                            "2"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: number[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word": string;
            Distribution: string;
            Date: string;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                    };
                }[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    game?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                    paramValue1?: undefined;
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                            "5"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    param1: {
                        spec: string;
                        map: {
                            "460"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "5": string;
                            "109"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "460": string;
                        };
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: any[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word": string;
            Distribution: string;
            Date: string;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    game?: undefined;
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                            "3"?: undefined;
                            "5"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "3": string;
                            "109"?: undefined;
                            "5"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {};
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    paramValue2: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    nature?: undefined;
                    influences?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        map: {
                            "109"?: undefined;
                            "3"?: undefined;
                            "5"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    paramValue2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "5": string;
                            "109"?: undefined;
                            "3"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: string;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word": string;
            Distribution: string;
            Date: string;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "9": string;
                            "10": string;
                            "11": string;
                        };
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    influences?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                    nature?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                    };
                    paramValue1?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    nature: string;
                    influences: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                    };
                    paramType1?: undefined;
                    paramValue1?: undefined;
                    description?: undefined;
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "9": string;
                            "1"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "1": string;
                            "9"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        map: {
                            "9"?: undefined;
                            "1"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    influences?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "1": string;
                            "9"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "419": string;
                            "31"?: undefined;
                        };
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "31": string;
                            "419"?: undefined;
                        };
                    };
                    param2: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {
                            "9"?: undefined;
                            "1"?: undefined;
                        };
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    param1: {
                        spec: string;
                        map: {
                            "419"?: undefined;
                            "31"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {
                            "9"?: undefined;
                            "1"?: undefined;
                        };
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: any[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            Distribution: string;
            Date: string;
            "Rune Word"?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "9": string;
                            "10": string;
                            "11": string;
                        };
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {
                            "9"?: undefined;
                            "10"?: undefined;
                            "11"?: undefined;
                        };
                        value?: undefined;
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description?: undefined;
                    param1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                    influences?: undefined;
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "9": string;
                            "7"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    paramValue2: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    nature?: undefined;
                    influences?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        map: {
                            "9"?: undefined;
                            "7"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "7": string;
                            "9"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    param1: {
                        spec: string;
                        map: {
                            "472"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "472": string;
                        };
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        map?: undefined;
                        value?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    influences?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: any[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word": string;
            Distribution: string;
            Date: string;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                    };
                }[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    game?: undefined;
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    influences?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "215": string;
                        };
                    };
                    influences?: undefined;
                    paramValue1?: undefined;
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                            "5"?: undefined;
                            "4"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "5": string;
                            "109"?: undefined;
                            "4"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "4": string;
                            "109"?: undefined;
                            "5"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    influences?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "495": string;
                        };
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    influences?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: number[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: any[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            Distribution: string;
            Date: string;
            "Rune Word"?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                    };
                    paramValue1?: undefined;
                })[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                    influences?: undefined;
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                            "5"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    param1: {
                        spec: string;
                        map: {
                            "529"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "5": string;
                            "109"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        map: {
                            "109"?: undefined;
                            "5"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "529": string;
                        };
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    influences?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            Distribution: string;
            Date: string;
            "Rune Word"?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "0": string;
                            "1": string;
                            "2": string;
                            "3": string;
                            "4": string;
                            "5": string;
                            "6": string;
                            "7": string;
                            "8": string;
                            "9": string;
                            "10": string;
                            "11": string;
                            "12": string;
                        };
                    };
                    paramValue1?: undefined;
                })[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                            "7"?: undefined;
                            "2"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "7": string;
                            "109"?: undefined;
                            "2"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "2": string;
                            "109"?: undefined;
                            "7"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {};
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: number[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            Distribution: string;
            Date: string;
            "Rune Word"?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "9": string;
                            "10": string;
                            "11": string;
                        };
                        value?: undefined;
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    nexusLink: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    game?: undefined;
                    paramType1?: undefined;
                    paramValue1?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    nexusLink: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    game?: undefined;
                    paramType1?: undefined;
                    paramValue1?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "213": string;
                        };
                    };
                    paramValue1?: undefined;
                    influences?: undefined;
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "6": string;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramType3?: undefined;
                    param2?: undefined;
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramType3?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramType3?: undefined;
                    paramValue1?: undefined;
                    param2?: undefined;
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramType3?: undefined;
                    param2?: undefined;
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "454": string;
                        };
                    };
                    paramType2?: undefined;
                    paramType3?: undefined;
                    paramValue1?: undefined;
                    param2?: undefined;
                    paramValue2?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: any[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word": string;
            Distribution: string;
            Date: string;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                    };
                }[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "4": string;
                            "9"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramType3?: undefined;
                    param2?: undefined;
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "9": string;
                            "4"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramType3?: undefined;
                    paramValue1?: undefined;
                    param2?: undefined;
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "476": string;
                        };
                    };
                    paramType2?: undefined;
                    paramType3?: undefined;
                    paramValue1?: undefined;
                    param2?: undefined;
                    paramValue2?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: number[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            Distribution: string;
            Date: string;
            "Rune Word"?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                    };
                }[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    game?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    influences?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "214": string;
                        };
                    };
                    paramValue1?: undefined;
                    influences?: undefined;
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                    influences?: undefined;
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "460": string;
                        };
                    };
                    paramValue1?: undefined;
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: any[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            Distribution: string;
            "Rune Word"?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "3": string;
                            "4": string;
                            "5": string;
                            "6": string;
                        };
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "3": string;
                        };
                    };
                }[];
                perfection: any[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "3": string;
                            "4": string;
                            "5": string;
                            "6": string;
                        };
                    };
                    paramType2?: undefined;
                    influences?: undefined;
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                    paramType2?: undefined;
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            Date: string;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "0": string;
                            "1": string;
                            "2": string;
                        };
                        value?: undefined;
                    };
                    paramType2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                })[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                    paramType2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    influences?: undefined;
                    paramType2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    influences?: undefined;
                    paramType2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "7": string;
                            "8": string;
                            "9": string;
                            "10": string;
                            "11": string;
                            "12": string;
                            "13": string;
                            "14": string;
                            "15": string;
                            "16": string;
                            "17": string;
                        };
                        value?: undefined;
                    };
                    influences?: undefined;
                    paramType2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    influences?: undefined;
                    paramValue1?: undefined;
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                            "2"?: undefined;
                            "1"?: undefined;
                            "16"?: undefined;
                            "17"?: undefined;
                            "18"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    paramValue2?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "2": string;
                            "109"?: undefined;
                            "1"?: undefined;
                            "16"?: undefined;
                            "17"?: undefined;
                            "18"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "1": string;
                            "109"?: undefined;
                            "2"?: undefined;
                            "16"?: undefined;
                            "17"?: undefined;
                            "18"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "16": string;
                            "17": string;
                            "18": string;
                            "109"?: undefined;
                            "2"?: undefined;
                            "1"?: undefined;
                        };
                        value?: undefined;
                    };
                    paramType3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: number[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word": string;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                    };
                }[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    game?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                    influences?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                    };
                    influences?: undefined;
                    description?: undefined;
                    paramValue1?: undefined;
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                            "1"?: undefined;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "1": string;
                            "109"?: undefined;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    param1: {
                        spec: string;
                        map: {};
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {};
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        map?: undefined;
                        value?: undefined;
                    };
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: number[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            Distribution: string;
            Date: string;
            "Max Supply": string;
            "Rune Word"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "3": string;
                            "4": string;
                            "5": string;
                            "6": string;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "3": string;
                        };
                    };
                    influences?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    influences?: undefined;
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                    };
                    paramType2?: undefined;
                    paramType3?: undefined;
                    paramValue1?: undefined;
                    influences?: undefined;
                    description?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                    };
                    param2: {
                        spec: string;
                        map: {};
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                    };
                    paramType2?: undefined;
                    paramType3?: undefined;
                    influences?: undefined;
                    param2?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {};
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    influences?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    nexusLink: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    game?: undefined;
                    paramType1?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                    influences?: undefined;
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {};
                        value?: undefined;
                    };
                    influences?: undefined;
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    influences?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    nexusLink: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    game?: undefined;
                    paramType1?: undefined;
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    influences?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {};
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    influences?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: any[];
        category: string;
        image?: undefined;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word": string;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    influences?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    influences?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "512": string;
                        };
                    };
                    paramValue1?: undefined;
                })[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                    };
                    paramValue1?: undefined;
                    paramType2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    influences?: undefined;
                    paramType2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                    influences?: undefined;
                    paramType2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                    influences?: undefined;
                    paramValue1?: undefined;
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                            "4"?: undefined;
                            "2"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "4": string;
                            "109"?: undefined;
                            "2"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "2": string;
                            "109"?: undefined;
                            "4"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    influences?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "499": string;
                        };
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: any[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "3": string;
                            "4": string;
                            "5": string;
                            "526"?: undefined;
                        };
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "526": string;
                            "3"?: undefined;
                            "4"?: undefined;
                            "5"?: undefined;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {
                            "3"?: undefined;
                            "4"?: undefined;
                            "5"?: undefined;
                            "526"?: undefined;
                        };
                        value?: undefined;
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "3": string;
                            "4": string;
                            "5": string;
                        };
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    nexusLink: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    game?: undefined;
                    paramType1?: undefined;
                    paramValue1?: undefined;
                    nature?: undefined;
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {
                            "3"?: undefined;
                            "4"?: undefined;
                            "5"?: undefined;
                        };
                        value?: undefined;
                    };
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "9": string;
                            "7"?: undefined;
                            "3"?: undefined;
                            "4"?: undefined;
                            "5"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "7": string;
                            "9"?: undefined;
                            "3"?: undefined;
                            "4"?: undefined;
                            "5"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "21": string;
                            "501"?: undefined;
                        };
                    };
                    param2: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {
                            "9"?: undefined;
                            "7"?: undefined;
                            "3"?: undefined;
                            "4"?: undefined;
                            "5"?: undefined;
                        };
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue2?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "3": string;
                            "4": string;
                            "5": string;
                            "9"?: undefined;
                            "7"?: undefined;
                        };
                        value?: undefined;
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "501": string;
                            "21"?: undefined;
                        };
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: any[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    nature: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType1?: undefined;
                    paramValue1?: undefined;
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "13": string;
                            "14": string;
                            "15": string;
                            "16": string;
                            "17": string;
                        };
                        value?: undefined;
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    nexusLink: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    game?: undefined;
                    paramType1?: undefined;
                    paramValue1?: undefined;
                    nature?: undefined;
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "13": string;
                            "14": string;
                            "15": string;
                        };
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {
                            "13"?: undefined;
                            "14"?: undefined;
                            "15"?: undefined;
                        };
                        value?: undefined;
                    };
                })[];
                perfection: number[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "9": string;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    influences?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    influences?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    nexusLink: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    game?: undefined;
                    paramType1?: undefined;
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    influences?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {};
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    influences?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {};
                        value?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    influences?: undefined;
                    param2?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
        image?: undefined;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word": string;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "0": string;
                            "1": string;
                            "2": string;
                            "19"?: undefined;
                        };
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "19": string;
                            "0"?: undefined;
                            "1"?: undefined;
                            "2"?: undefined;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {
                            "0"?: undefined;
                            "1"?: undefined;
                            "2"?: undefined;
                            "19"?: undefined;
                        };
                        value?: undefined;
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "9": string;
                            "7"?: undefined;
                            "1"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "7": string;
                            "9"?: undefined;
                            "1"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                    influences?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "1": string;
                            "9"?: undefined;
                            "7"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {};
                        min?: undefined;
                        max?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: number[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "22": string;
                        };
                    };
                })[];
                perfection: any[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "22": string;
                        };
                    };
                }[];
                perfection: any[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
        image?: undefined;
    } | {
        id: number;
        name: string;
        icon: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    nature: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType1?: undefined;
                    description?: undefined;
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "19": string;
                        };
                    };
                    description?: undefined;
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: any[];
                perfection: any[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: number[];
        category: string;
        image?: undefined;
    } | {
        id: number;
        name: string;
        icon: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                    paramType2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    paramType2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                    paramType2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    description?: undefined;
                    paramValue1?: undefined;
                    paramType2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                    paramValue1?: undefined;
                })[];
                perfection: number[];
            };
            "2": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                }[];
                perfection: any[];
            };
            "3": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                }[];
                perfection: any[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
        image?: undefined;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    nexusLink: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    game?: undefined;
                    paramType1?: undefined;
                    paramValue1?: undefined;
                    nature?: undefined;
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "5": string;
                            "6": string;
                            "7": string;
                            "26"?: undefined;
                        };
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "26": string;
                            "5"?: undefined;
                            "6"?: undefined;
                            "7"?: undefined;
                        };
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                            "1"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "3": string;
                        };
                    };
                    param2: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {
                            "109"?: undefined;
                            "1"?: undefined;
                        };
                        value?: undefined;
                    };
                    paramValue2?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    param1: {
                        spec: string;
                        map: {
                            "3"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {
                            "109"?: undefined;
                            "1"?: undefined;
                        };
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "1": string;
                            "109"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    game?: undefined;
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {
                            "3"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: any[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word": string;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "0": string;
                            "1": string;
                            "2": string;
                            "27"?: undefined;
                        };
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "27": string;
                            "0"?: undefined;
                            "1"?: undefined;
                            "2"?: undefined;
                        };
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType3?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "23": string;
                        };
                    };
                    param2: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {
                            "9"?: undefined;
                            "1"?: undefined;
                            "16"?: undefined;
                            "17"?: undefined;
                            "18"?: undefined;
                            "19"?: undefined;
                            "20"?: undefined;
                            "21"?: undefined;
                        };
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "9": string;
                            "1"?: undefined;
                            "16"?: undefined;
                            "17"?: undefined;
                            "18"?: undefined;
                            "19"?: undefined;
                            "20"?: undefined;
                            "21"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "1": string;
                            "9"?: undefined;
                            "16"?: undefined;
                            "17"?: undefined;
                            "18"?: undefined;
                            "19"?: undefined;
                            "20"?: undefined;
                            "21"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        map: {
                            "9"?: undefined;
                            "1"?: undefined;
                            "16"?: undefined;
                            "17"?: undefined;
                            "18"?: undefined;
                            "19"?: undefined;
                            "20"?: undefined;
                            "21"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "16": string;
                            "17": string;
                            "18": string;
                            "19": string;
                            "20": string;
                            "21": string;
                            "9"?: undefined;
                            "1"?: undefined;
                        };
                        value?: undefined;
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    paramType3?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {
                            "23"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    paramType3?: undefined;
                    param2?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    nexusLink: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    game?: undefined;
                    paramType1?: undefined;
                    paramValue1?: undefined;
                    nature?: undefined;
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "0": string;
                            "1": string;
                            "2": string;
                            "28"?: undefined;
                        };
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "28": string;
                            "0"?: undefined;
                            "1"?: undefined;
                            "2"?: undefined;
                        };
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                            "1"?: undefined;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "1": string;
                            "109"?: undefined;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "1": string;
                            "109"?: undefined;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {};
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    nexusLink: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                    game?: undefined;
                    paramType1?: undefined;
                    paramValue1?: undefined;
                    nature?: undefined;
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    nexusLink: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                    game?: undefined;
                    paramType1?: undefined;
                    paramValue1?: undefined;
                    nature?: undefined;
                    description?: undefined;
                })[];
                perfection: number[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                            "3"?: undefined;
                            "1"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "3": string;
                            "109"?: undefined;
                            "1"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "450": string;
                        };
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "1": string;
                            "109"?: undefined;
                            "3"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue2?: undefined;
                    paramType3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: number[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                    };
                }[];
                perfection: number[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        map: {
                            "1"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {};
                        min?: undefined;
                        max?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "1": string;
                        };
                    };
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: number[];
        category: string;
        image?: undefined;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    nexusLink: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    game?: undefined;
                    paramType1?: undefined;
                    paramValue1?: undefined;
                    nature?: undefined;
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "9": string;
                            "10": string;
                            "11": string;
                            "29"?: undefined;
                        };
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "29": string;
                            "9"?: undefined;
                            "10"?: undefined;
                            "11"?: undefined;
                        };
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "6": string;
                            "109"?: undefined;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                            "6"?: undefined;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {};
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: number[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        value: string;
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type?: undefined;
            Subtype?: undefined;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: any[];
                perfection: any[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: any[];
                perfection: any[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
        image?: undefined;
        type?: undefined;
        subType?: undefined;
        specificType?: undefined;
        slots?: undefined;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word": string;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "1": string;
                            "2": string;
                            "3": string;
                        };
                    };
                    paramValue1?: undefined;
                })[];
                perfection: number[];
            };
            "2": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string[];
                        min: number;
                        max: number;
                        value: number;
                    };
                }[];
                perfection: any[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                            "9"?: undefined;
                            "3"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "9": string;
                            "109"?: undefined;
                            "3"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "3": string;
                            "109"?: undefined;
                            "9"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "471": string;
                        };
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType1?: undefined;
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                            "1"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "448": string;
                        };
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        map: {
                            "109"?: undefined;
                            "1"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    paramValue2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "1": string;
                            "109"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "1": string;
                            "109"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                    };
                }[];
                perfection: number[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                            "497"?: undefined;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        map: {
                            "109"?: undefined;
                            "497"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "497": string;
                            "109"?: undefined;
                        };
                    };
                    influences?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {};
                        min?: undefined;
                        max?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue2?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word": string;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "3": string;
                            "4": string;
                            "5": string;
                        };
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "9": string;
                            "1"?: undefined;
                            "4"?: undefined;
                            "109"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "1": string;
                            "9"?: undefined;
                            "4"?: undefined;
                            "109"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "4": string;
                            "9"?: undefined;
                            "1"?: undefined;
                            "109"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "511": string;
                        };
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                            "9"?: undefined;
                            "1"?: undefined;
                            "4"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: any[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        value: string;
        specificType: number;
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Subtype: string;
            Type?: undefined;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: any[];
                perfection: any[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: any[];
                perfection: any[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
        image?: undefined;
        type?: undefined;
        subType?: undefined;
        slots?: undefined;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word": string;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: {
                id: number;
                quantity: number;
            }[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "0": string;
                            "1": string;
                            "2": string;
                            "36"?: undefined;
                        };
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "36": string;
                            "0"?: undefined;
                            "1"?: undefined;
                            "2"?: undefined;
                        };
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "9": string;
                        };
                    };
                    paramType3?: undefined;
                    param3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "23": string;
                            "479"?: undefined;
                        };
                    };
                    param2: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {
                            "9"?: undefined;
                        };
                        value?: undefined;
                    };
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                    param3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    paramValue2: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    param3: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "7": string;
                        };
                    };
                    nature?: undefined;
                    influences?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "479": string;
                            "23"?: undefined;
                        };
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                    param3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    nexusLink: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    game?: undefined;
                    paramType1?: undefined;
                    paramValue1?: undefined;
                    nature?: undefined;
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "10": string;
                            "11": string;
                            "12": string;
                            "32"?: undefined;
                        };
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "32": string;
                            "10"?: undefined;
                            "11"?: undefined;
                            "12"?: undefined;
                        };
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        map: {};
                        min?: undefined;
                        max?: undefined;
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    param1: {
                        spec: string;
                        map: {
                            "489"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: any;
                        max: any;
                        map: {};
                    };
                    paramValue2?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "489": string;
                        };
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: number[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                            "2"?: undefined;
                            "4"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "2": string;
                            "109"?: undefined;
                            "4"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "4": string;
                            "109"?: undefined;
                            "2"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {};
                        min?: undefined;
                        max?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
        image?: undefined;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "37": string;
                        };
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "9": string;
                            "6"?: undefined;
                            "5"?: undefined;
                            "1"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "6": string;
                            "9"?: undefined;
                            "5"?: undefined;
                            "1"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "5": string;
                            "9"?: undefined;
                            "6"?: undefined;
                            "1"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {};
                        min?: undefined;
                        max?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    param1: {
                        spec: string;
                        map: {};
                        min?: undefined;
                        max?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "1": string;
                            "9"?: undefined;
                            "6"?: undefined;
                            "5"?: undefined;
                        };
                    };
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    nature?: undefined;
                    influences?: undefined;
                    description?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: any[];
        category: string;
    } | {
        id: number;
        name: string;
        icon: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "20": string;
                            "21": string;
                            "22": string;
                            "23": string;
                            "24": string;
                        };
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                }[];
                perfection: any[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: number[];
        materials: any[];
        category: string;
        image?: undefined;
    } | {
        id: number;
        name: string;
        icon: string;
        value: string;
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Distribution: string;
            Date: string;
            Type?: undefined;
            Subtype?: undefined;
            "Rune Word"?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: any[];
                perfection: any[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: any[];
                perfection: any[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
        image?: undefined;
        type?: undefined;
        subType?: undefined;
        specificType?: undefined;
        slots?: undefined;
    } | {
        id: number;
        name: string;
        icon: string;
        value: string;
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Distribution: string;
            Date: string;
            "Max Supply": string;
            Type?: undefined;
            Subtype?: undefined;
            "Rune Word"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: any[];
                perfection: any[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: any[];
                perfection: any[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
        image?: undefined;
        type?: undefined;
        subType?: undefined;
        specificType?: undefined;
        slots?: undefined;
    } | {
        id: number;
        name: string;
        icon: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "7": string;
                            "8": string;
                            "9": string;
                            "31"?: undefined;
                        };
                        value?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "31": string;
                            "7"?: undefined;
                            "8"?: undefined;
                            "9"?: undefined;
                        };
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                            "1"?: undefined;
                            "7"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "1": string;
                            "109"?: undefined;
                            "7"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "7": string;
                            "109"?: undefined;
                            "1"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {};
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue2?: undefined;
                    paramType3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
        image?: undefined;
    } | {
        id: number;
        name: string;
        icon: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                    };
                }[];
                perfection: number[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                            "3"?: undefined;
                            "1"?: undefined;
                        };
                    };
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "3": string;
                            "109"?: undefined;
                            "1"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {};
                        min?: undefined;
                        max?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                    paramType3?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramType3: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "1": string;
                            "109"?: undefined;
                            "3"?: undefined;
                        };
                    };
                    paramValue2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: any;
                        max: any;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue2?: undefined;
                    paramType3?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
        image?: undefined;
    } | {
        id: number;
        name: string;
        icon: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                    };
                    paramValue1?: undefined;
                })[];
                perfection: number[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {};
                        min?: undefined;
                        max?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        map: {
                            "109"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                        value?: undefined;
                    };
                    influences?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
        image?: undefined;
    } | {
        id: number;
        name: string;
        icon: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "10": string;
                            "11": string;
                            "12": string;
                            "13": string;
                            "14": string;
                            "15": string;
                            "16": string;
                            "17": string;
                            "18": string;
                            "19": string;
                            "20": string;
                            "21": string;
                            "22": string;
                            "23": string;
                            "24": string;
                            "25": string;
                            "26": string;
                            "27": string;
                        };
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {
                            "10"?: undefined;
                            "11"?: undefined;
                            "12"?: undefined;
                            "13"?: undefined;
                            "14"?: undefined;
                            "15"?: undefined;
                            "16"?: undefined;
                            "17"?: undefined;
                            "18"?: undefined;
                            "19"?: undefined;
                            "20"?: undefined;
                            "21"?: undefined;
                            "22"?: undefined;
                            "23"?: undefined;
                            "24"?: undefined;
                            "25"?: undefined;
                            "26"?: undefined;
                            "27"?: undefined;
                        };
                        min?: undefined;
                        max?: undefined;
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "109": string;
                            "9"?: undefined;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    paramValue2: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                    param2: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "9": string;
                            "109"?: undefined;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map: {
                            "401": string;
                        };
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                    paramValue2?: undefined;
                    param2?: undefined;
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
        image?: undefined;
    } | {
        id: number;
        name: string;
        icon: string;
        value: string;
        subType: number;
        specificType: number;
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Subtype: string;
            Type?: undefined;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: any[];
                perfection: any[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: any[];
                perfection: any[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
        image?: undefined;
        type?: undefined;
        slots?: undefined;
    } | {
        id: number;
        name: string;
        icon: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: number[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value?: undefined;
                        map?: undefined;
                    };
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        value: number;
                        map?: undefined;
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "22": string;
                            "23": string;
                            "24": string;
                        };
                        value?: undefined;
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: any[];
                perfection: any[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
        image?: undefined;
    } | {
        id: number;
        name: string;
        icon: string;
        value: string;
        type: number;
        subType: number;
        specificType: number;
        slots: any[];
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                }[];
                perfection: any[];
            };
            "2": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                }[];
                perfection: any[];
            };
            "3": {
                attributes: any[];
                perfection: any[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
        image?: undefined;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        specificType: number;
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Subtype: string;
            Distribution: string;
            Date: string;
            "Max Supply": string;
            Type?: undefined;
            "Rune Word"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                }[];
                perfection: any[];
            };
            "2": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                }[];
                perfection: any[];
            };
            "3": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                }[];
                perfection: any[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
        type?: undefined;
        subType?: undefined;
        slots?: undefined;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        specificType: number;
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Subtype: string;
            "Max Supply": string;
            Type?: undefined;
            "Rune Word"?: undefined;
            Distribution?: undefined;
            Date?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                }[];
                perfection: any[];
            };
            "2": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                }[];
                perfection: any[];
            };
            "3": {
                attributes: {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                }[];
                perfection: any[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
        type?: undefined;
        subType?: undefined;
        slots?: undefined;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Distribution: string;
            Date: string;
            "Max Supply": string;
            Type?: undefined;
            Subtype?: undefined;
            "Rune Word"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: any[];
                perfection: any[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: any[];
                perfection: any[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
        type?: undefined;
        subType?: undefined;
        specificType?: undefined;
        slots?: undefined;
    } | {
        id: number;
        name: string;
        icon: string;
        value: string;
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Date: string;
            "Max Supply": string;
            Type?: undefined;
            Subtype?: undefined;
            "Rune Word"?: undefined;
            Distribution?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: any[];
                perfection: any[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: any[];
                perfection: any[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
        image?: undefined;
        type?: undefined;
        subType?: undefined;
        specificType?: undefined;
        slots?: undefined;
    } | {
        id: number;
        name: string;
        icon: string;
        image: string;
        value: string;
        specificType: number;
        isPolled: boolean;
        isNew: boolean;
        isSecret: boolean;
        isUltraSecret: boolean;
        isPaused: boolean;
        isRetired: boolean;
        isDisabled: boolean;
        isCraftable: boolean;
        isEnabled: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isPublishable: boolean;
        isRuneword: boolean;
        createdDate: number;
        hotness: number;
        numPerfectionRolls: number;
        attributes: any[];
        details: {
            Subtype: string;
            Distribution: string;
            Date: string;
            Type?: undefined;
            "Rune Word"?: undefined;
            "Max Supply"?: undefined;
        };
        recipe: {
            requirement: any[];
        };
        description: string;
        shortDescription: string;
        visualDescription: string;
        branches: {
            "1": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map: {
                            "1": string;
                            "2": string;
                            "3": string;
                            "4": string;
                            "5": string;
                            "6": string;
                        };
                    };
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramValue1: string;
                    nature: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                })[];
                perfection: number[];
            };
            "2": {
                attributes: any[];
                perfection: any[];
            };
            "3": {
                attributes: ({
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        map: {};
                        min?: undefined;
                        max?: undefined;
                    };
                    paramType2?: undefined;
                    paramValue1?: undefined;
                } | {
                    id: number;
                    name: string;
                    isEnabled: boolean;
                    game: string;
                    nexusLink: string;
                    paramType1: string;
                    paramType2: string;
                    paramValue1: string;
                    nature: string;
                    influences: string;
                    description: string;
                    param1: {
                        spec: string;
                        min: number;
                        max: number;
                        map?: undefined;
                    };
                })[];
                perfection: number[];
            };
            "4": {
                attributes: any[];
                perfection: any[];
            };
            "5": {
                attributes: any[];
                perfection: any[];
            };
        };
        skills: any[];
        materials: any[];
        category: string;
        type?: undefined;
        subType?: undefined;
        slots?: undefined;
    } | {
        id: number;
        name: string;
        category: ItemCategoriesType;
        icon: string;
        value: string;
        isPublishable: boolean;
        isSecret: boolean;
        type: number;
        slots: any[];
        isNew: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isCraftable: boolean;
        isDisabled: boolean;
        isRuneword: boolean;
        isRetired: boolean;
        createdDate: number;
        hotness: number;
        attributes: any[];
        details: {
            Type: string;
            Distribution: string;
            Date: string;
            'Max Supply': string;
            Subtype?: undefined;
        };
        description: string[];
        branches: {
            [x: number]: {
                attributes: ({
                    min: number;
                    max: number;
                    value: number;
                    map: any;
                    id: number;
                    description: string;
                } | {
                    description: string;
                })[];
            };
            2: {
                attributes: ({
                    min: number;
                    max: number;
                    value: number;
                    map: any;
                    id: number;
                    description: string;
                } | {
                    description: string;
                })[];
            };
            3: {
                attributes: ({
                    min: number;
                    max: number;
                    value: number;
                    map: any;
                    id: number;
                    description: string;
                } | {
                    description: string;
                })[];
            };
            4: {
                attributes: ({
                    min: number;
                    max: number;
                    value: number;
                    map: any;
                    id: number;
                    description: string;
                } | {
                    description: string;
                })[];
            };
        };
        rarity?: undefined;
        isTransmutable?: undefined;
    } | {
        id: number;
        name: string;
        category: ItemCategoriesType;
        icon: string;
        value: string;
        isPublishable: boolean;
        isSecret: boolean;
        rarity: ItemRarityValueType;
        type: number;
        slots: any[];
        isNew: boolean;
        isEquipable: boolean;
        isUnequipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isUpgradable: boolean;
        isCraftable: boolean;
        isDisabled: boolean;
        isRuneword: boolean;
        isTransmutable: boolean;
        createdDate: number;
        hotness: number;
        attributes: any[];
        details: {
            Type: string;
            Subtype: string;
            Distribution: string;
            Date: string;
            'Max Supply': string;
        };
        branches: {
            [x: number]: {
                description: string[];
                attributes: {
                    min: number;
                    max: number;
                    description: string;
                    id: number;
                }[];
            } | {
                attributes: any[];
                description?: undefined;
            };
            "2"?: undefined;
            "3"?: undefined;
            "4"?: undefined;
        };
        isRetired?: undefined;
        description?: undefined;
    })[];
    rune: ({
        id: number;
        name: string;
        category: ItemCategoriesType;
        icon: string;
        value: string;
        isPublishable: boolean;
        isSecret: boolean;
        isNew: boolean;
        isEquipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isCraftable: boolean;
        isDisabled: boolean;
        attributes: any[];
        description: string[];
        details: {
            Symbol: string;
            Distribution: string;
            Date: string;
            'Max Supply': string;
            Reward?: undefined;
            'Planned Distribution'?: undefined;
            'Planned Date'?: undefined;
            'Planned Max Supply'?: undefined;
        };
        branches: {
            [x: number]: {
                description: string[];
                attributes: any[];
            } | {
                attributes: any[];
                description?: undefined;
            };
            "2"?: undefined;
            "3"?: undefined;
            "4"?: undefined;
        };
    } | {
        id: number;
        name: string;
        category: ItemCategoriesType;
        icon: string;
        value: string;
        isSecret: boolean;
        isNew: boolean;
        isEquipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isCraftable: boolean;
        isDisabled: boolean;
        attributes: any[];
        description: string[];
        details: {
            Symbol: string;
            Distribution: string;
            Date: string;
            'Max Supply': string;
            Reward: string;
            'Planned Distribution'?: undefined;
            'Planned Date'?: undefined;
            'Planned Max Supply'?: undefined;
        };
        branches: {
            [x: number]: {
                description: string[];
                attributes: any[];
            };
            2: {
                description: string[];
                attributes: any[];
            };
            3: {
                description: string[];
                attributes: any[];
            };
            4: {
                description: string[];
                attributes: any[];
            };
        };
        isPublishable?: undefined;
    } | {
        id: number;
        name: string;
        category: ItemCategoriesType;
        icon: string;
        value: string;
        isSecret: boolean;
        isNew: boolean;
        isEquipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isCraftable: boolean;
        isDisabled: boolean;
        attributes: any[];
        description: string[];
        details: {
            Symbol: string;
            'Planned Distribution': string;
            'Planned Date': string;
            'Planned Max Supply': string;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
            Reward?: undefined;
        };
        branches: {
            [x: number]: {
                description: string[];
                attributes: any[];
            } | {
                attributes: any[];
                description?: undefined;
            };
            "2"?: undefined;
            "3"?: undefined;
            "4"?: undefined;
        };
        isPublishable?: undefined;
    } | {
        id: number;
        name: string;
        category: ItemCategoriesType;
        icon: string;
        value: string;
        isSecret: boolean;
        isNew: boolean;
        isEquipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isCraftable: boolean;
        isDisabled: boolean;
        attributes: any[];
        description: string[];
        details: {
            Symbol: string;
            'Planned Distribution': string;
            'Planned Date': string;
            'Planned Max Supply': string;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
            Reward?: undefined;
        };
        branches: {
            [x: number]: {
                description: string[];
                attributes: any[];
            };
            2: {
                description: string[];
                attributes: any[];
            };
            3: {
                description: string[];
                attributes: any[];
            };
            4: {
                description: string[];
                attributes: any[];
            };
        };
        isPublishable?: undefined;
    } | {
        id: number;
        name: string;
        category: ItemCategoriesType;
        icon: string;
        value: string;
        isSecret: boolean;
        isNew: boolean;
        isEquipable: boolean;
        isTradeable: boolean;
        isTransferable: boolean;
        isCraftable: boolean;
        isDisabled: boolean;
        attributes: any[];
        description: string[];
        details: {
            Symbol: string;
            'Planned Distribution': string;
            Distribution?: undefined;
            Date?: undefined;
            "Max Supply"?: undefined;
            Reward?: undefined;
            'Planned Date'?: undefined;
            'Planned Max Supply'?: undefined;
        };
        branches: {
            [x: number]: {
                description: string[];
                attributes: any[];
            } | {
                attributes: any[];
                description?: undefined;
            };
            "2"?: undefined;
            "3"?: undefined;
            "4"?: undefined;
        };
        isPublishable?: undefined;
    })[];
    weapon: any[];
    shield: any[];
    armor: any[];
};
export default itemData;
