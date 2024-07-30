import { z } from 'zod';
import * as zodSchema from './zod';
import mongoose, { ObjectId } from 'mongoose';

export type Common = {
  createdById?: ObjectId; // mongoose.Schema.Types.ObjectId
  editedById?: ObjectId;
  deletedById?: ObjectId;
  createdDate: Date;
  updatedDate?: Date;
  deletedDate?: Date;
};

export enum Status {
  Paused = 'Paused',
  Pending = 'Pending',
  Active = 'Active',
  Archived = 'Archived',
}

export type Meta = {
  [key: string]: unknown;
};

export type Entity = Common & {
  key: string;
  name: string;
  description?: string;
  metaverseId: mongoose.Schema.Types.ObjectId;
  ownerId?: ObjectId;
  meta?: Meta;
  status: typeof Status;
};

export type CharacterAbility = Entity & Omit<z.infer<typeof zodSchema.CharacterAbility>, 'metaverseId' | 'ownerId'>;
export type CharacterAttribute = Entity & Omit<z.infer<typeof zodSchema.CharacterAttribute>, 'metaverseId' | 'ownerId'>;
export type CharacterType = Entity & Omit<z.infer<typeof zodSchema.CharacterType>, 'metaverseId' | 'ownerId'>;
export type ItemAttribute = Entity & Omit<z.infer<typeof zodSchema.ItemAttribute>, 'metaverseId' | 'ownerId'>;
export type ItemMaterial = Entity & Omit<z.infer<typeof zodSchema.ItemMaterial>, 'metaverseId' | 'ownerId'>;
export type ItemSet = Entity & Omit<z.infer<typeof zodSchema.ItemSet>, 'metaverseId' | 'ownerId'>;
export type ItemSlot = Entity & Omit<z.infer<typeof zodSchema.ItemSlot>, 'metaverseId' | 'ownerId'>;
export type ItemRarity = Entity & Omit<z.infer<typeof zodSchema.ItemRarity>, 'metaverseId' | 'ownerId'>;
export type ItemType = Entity & Omit<z.infer<typeof zodSchema.ItemType>, 'metaverseId' | 'ownerId'>;
export type ItemSubType = Entity & Omit<z.infer<typeof zodSchema.ItemSubType>, 'metaverseId' | 'ownerId'>;
export type ItemSpecificType = Entity & Omit<z.infer<typeof zodSchema.ItemSpecificType>, 'metaverseId' | 'ownerId'>;
export type ItemAffix = Entity & Omit<z.infer<typeof zodSchema.ItemAffix>, 'metaverseId' | 'ownerId'>;
export type ItemRecipe = Entity & Omit<z.infer<typeof zodSchema.ItemRecipe>, 'metaverseId' | 'ownerId'>;
export type ItemSkin = Entity & Omit<z.infer<typeof zodSchema.ItemSkin>, 'metaverseId' | 'ownerId'>;
export type Stash = Entity & Omit<z.infer<typeof zodSchema.Stash>, 'metaverseId' | 'ownerId'>;
export type Biome = Entity & Omit<z.infer<typeof zodSchema.Biome>, 'metaverseId' | 'ownerId'>;
export type BiomeFeature = Entity & Omit<z.infer<typeof zodSchema.BiomeFeature>, 'metaverseId' | 'ownerId'>;
export type Planet = Entity & Omit<z.infer<typeof zodSchema.Planet>, 'metaverseId' | 'ownerId'> & { solarSystemId?: ObjectId };
export type SolarSystem = Entity & Omit<z.infer<typeof zodSchema.SolarSystem>, 'metaverseId' | 'ownerId'> & { galaxyId?: ObjectId };
export type Galaxy = Entity & Omit<z.infer<typeof zodSchema.Galaxy>, 'metaverseId' | 'ownerId'> & { universeId?: ObjectId };
export type Star = Entity & Omit<z.infer<typeof zodSchema.Star>, 'metaverseId' | 'ownerId'>;
export type Universe = Entity & Omit<z.infer<typeof zodSchema.Universe>, 'metaverseId' | 'ownerId'>;
export type Quest = Entity & Omit<z.infer<typeof zodSchema.Quest>, 'metaverseId' | 'ownerId'> & { type: string };
export type Area = Entity & Omit<z.infer<typeof zodSchema.Area>, 'metaverseId' | 'ownerId'> & { type: string; landmarks?: ObjectId[] };
export type AreaType = Entity & Omit<z.infer<typeof zodSchema.AreaType>, 'metaverseId' | 'ownerId'>;
export type AreaLandmark = Entity & Omit<z.infer<typeof zodSchema.AreaLandmark>, 'metaverseId' | 'ownerId'> & { areaId?: ObjectId; area?: ObjectId };
export type Act = Entity & Omit<z.infer<typeof zodSchema.Act>, 'metaverseId' | 'ownerId'>;
export type CharacterClass = Entity & Omit<z.infer<typeof zodSchema.CharacterClass>, 'metaverseId' | 'ownerId'>;
export type CharacterRace = Entity & Omit<z.infer<typeof zodSchema.CharacterRace>, 'metaverseId' | 'ownerId'> & { npcs?: ObjectId[] };
export type CharacterGender = Entity & Omit<z.infer<typeof zodSchema.CharacterGender>, 'metaverseId' | 'ownerId'>;
export type CharacterPersonality = Entity & Omit<z.infer<typeof zodSchema.CharacterPersonality>, 'metaverseId' | 'ownerId'>;
export type CharacterTitle = Entity & Omit<z.infer<typeof zodSchema.CharacterTitle>, 'metaverseId' | 'ownerId'>;
export type AreaNameChoice = Entity & Omit<z.infer<typeof zodSchema.AreaNameChoice>, 'metaverseId' | 'ownerId'>;
export type CharacterNameChoice = Entity & Omit<z.infer<typeof zodSchema.CharacterNameChoice>, 'metaverseId' | 'ownerId'>;
export type CharacterFaction = Entity & Omit<z.infer<typeof zodSchema.CharacterFaction>, 'metaverseId' | 'ownerId'>;
export type Era = Entity & Omit<z.infer<typeof zodSchema.Era>, 'metaverseId' | 'ownerId'>;
export type Season = Entity & Omit<z.infer<typeof zodSchema.Season>, 'metaverseId' | 'ownerId'>;
export type Lore = Entity & Omit<z.infer<typeof zodSchema.Lore>, 'metaverseId' | 'ownerId'> & { gameId?: string };
export type Energy = Entity & Omit<z.infer<typeof zodSchema.Energy>, 'metaverseId' | 'ownerId'>;
export type Guide = Entity & Omit<z.infer<typeof zodSchema.Guide>, 'metaverseId' | 'ownerId'> & { content?: string; attachments?: unknown[] };
export type Achievement = Entity & Omit<z.infer<typeof zodSchema.Achievement>, 'metaverseId' | 'ownerId'>;
export type Game = Entity & Omit<z.infer<typeof zodSchema.Game>, 'metaverseId' | 'ownerId'> & { productId: ObjectId };
export type Validator = Entity & Omit<z.infer<typeof zodSchema.Validator>, 'metaverseId' | 'ownerId'>;
export type Poll = Entity & Omit<z.infer<typeof zodSchema.Poll>, 'metaverseId' | 'ownerId'>;
export type ProductUpdate = Entity & Omit<z.infer<typeof zodSchema.ProductUpdate>, 'metaverseId' | 'ownerId'> & { productId?: ObjectId };
export type Raffle = Entity &
  Omit<z.infer<typeof zodSchema.Raffle>, 'metaverseId' | 'ownerId'> & {
    applicationId: ObjectId;
    rewards?: ObjectId[];
    RaffleRequirement?: ObjectId[];
    RaffleEntry?: ObjectId[];
  };
export type RaffleRequirement = Entity & { amount: number; raffleRewardId?: string; raffleReward?: ObjectId };
export type RaffleReward = Entity &
  Omit<z.infer<typeof zodSchema.RaffleReward>, 'metaverseId' | 'ownerId'> & {
    raffleId?: string;
    raffle?: ObjectId;
    winnerId?: string;
    ownerId?: ObjectId;
    winner?: ObjectId;
    RaffleRequirementsOnRaffleRewards?: ObjectId[];
    entries?: ObjectId[];
  };
export type RaffleEntry = Entity &
  Omit<z.infer<typeof zodSchema.RaffleEntry>, 'metaverseId' | 'ownerId'> & {
    raffleRewardId?: string;
    raffleReward?: ObjectId;
    ownerId?: ObjectId;
    Raffle?: ObjectId;
  };
export type Proposal = Entity & Omit<z.infer<typeof zodSchema.Proposal>, 'metaverseId' | 'ownerId'> & { content?: string };
export type Company = Entity & Omit<z.infer<typeof zodSchema.Company>, 'metaverseId' | 'ownerId'> & { content?: string; applicationId: ObjectId; people?: ObjectId[] };
export type Person = Entity & Omit<z.infer<typeof zodSchema.Person>, 'metaverseId' | 'ownerId'> & { content?: string; applicationId: ObjectId; companyId?: ObjectId };
export type Account = Entity & Omit<z.infer<typeof zodSchema.Account>, 'metaverseId' | 'ownerId'>;
export type Data = Omit<z.infer<typeof zodSchema.Data>, 'metaverseId' | 'ownerId'> & Entity;
export type Profile = Omit<z.infer<typeof zodSchema.Profile>, 'metaverseId' | 'ownerId'> & Entity;
export type Application = Omit<z.infer<typeof zodSchema.Application>, 'metaverseId' | 'ownerId'> & Entity;
export type Video = Omit<z.infer<typeof zodSchema.Video>, 'metaverseId' | 'ownerId'> & Entity;
export type VideoScene = Omit<z.infer<typeof zodSchema.VideoScene>, 'metaverseId' | 'ownerId'> & Entity;
export type Agent = Omit<z.infer<typeof zodSchema.Agent>, 'metaverseId' | 'ownerId'> & Entity;
export type Memory = Omit<z.infer<typeof zodSchema.Memory>, 'metaverseId' | 'ownerId'> & Entity;
export type Conversation = Omit<z.infer<typeof zodSchema.Conversation>, 'metaverseId' | 'ownerId'> & Entity;
export type Log = Omit<z.infer<typeof zodSchema.Log>, 'metaverseId' | 'ownerId'> & Entity;
export type Job = Omit<z.infer<typeof zodSchema.Job>, 'metaverseId' | 'ownerId'> & Entity;
export type NewsArticle = Omit<z.infer<typeof zodSchema.NewsArticle>, 'metaverseId' | 'ownerId'> & Entity;
export type Comment = Omit<z.infer<typeof zodSchema.Comment>, 'metaverseId' | 'ownerId'> & Entity;
export type Question = Omit<z.infer<typeof zodSchema.Question>, 'metaverseId' | 'ownerId'> & Entity;
export type Topic = Omit<z.infer<typeof zodSchema.Topic>, 'metaverseId' | 'ownerId'> & Entity;
export type WorldEvent = Omit<z.infer<typeof zodSchema.WorldEvent>, 'metaverseId' | 'ownerId'> & Entity;
export type CollectibleCollection = Omit<z.infer<typeof zodSchema.CollectibleCollection>, 'metaverseId' | 'ownerId'> & Entity;
export type CollectibleCardBox = Omit<z.infer<typeof zodSchema.CollectibleCardBox>, 'metaverseId' | 'ownerId'> & Entity;
export type CollectibleCardPack = Omit<z.infer<typeof zodSchema.CollectibleCardPack>, 'metaverseId' | 'ownerId'> & Entity;
export type CollectibleCard = Omit<z.infer<typeof zodSchema.CollectibleCard>, 'metaverseId' | 'ownerId'> & Entity;
export type Stock = Omit<z.infer<typeof zodSchema.Stock>, 'metaverseId' | 'ownerId'> & Entity;
export type Chain = Omit<z.infer<typeof zodSchema.Chain>, 'metaverseId' | 'ownerId'> & Entity;
export type ChainContract = Omit<z.infer<typeof zodSchema.ChainContract>, 'metaverseId' | 'ownerId'> & Entity;
export type ChainToken = Omit<z.infer<typeof zodSchema.ChainToken>, 'metaverseId' | 'ownerId'> & Entity;
export type Asset = Omit<z.infer<typeof zodSchema.Asset>, 'metaverseId' | 'ownerId'> & Entity;
export type Item = Omit<z.infer<typeof zodSchema.Item>, 'metaverseId' | 'ownerId'> & Entity;
export type ItemTransmute = Omit<z.infer<typeof zodSchema.ItemTransmute>, 'metaverseId' | 'ownerId'> & Entity;
export type Badge = Omit<z.infer<typeof zodSchema.Badge>, 'metaverseId' | 'ownerId'> & Entity;
export type BattlePass = Omit<z.infer<typeof zodSchema.BattlePass>, 'metaverseId' | 'ownerId'> & Entity;
export type Bounty = Omit<z.infer<typeof zodSchema.Bounty>, 'metaverseId' | 'ownerId'> & Entity;
export type Collection = Omit<z.infer<typeof zodSchema.Collection>, 'metaverseId' | 'ownerId'> & Entity;
export type Community = Omit<z.infer<typeof zodSchema.Community>, 'metaverseId' | 'ownerId'> & Entity;
export type Discussion = Omit<z.infer<typeof zodSchema.Discussion>, 'metaverseId' | 'ownerId'> & Entity;
export type Event = Omit<z.infer<typeof zodSchema.Event>, 'metaverseId' | 'ownerId'> & Entity;
export type Exchange = Omit<z.infer<typeof zodSchema.Exchange>, 'metaverseId' | 'ownerId'> & Entity;
export type File = Omit<z.infer<typeof zodSchema.File>, 'metaverseId' | 'ownerId'> & Entity;
export type Idea = Omit<z.infer<typeof zodSchema.Idea>, 'metaverseId' | 'ownerId'> & Entity;
export type Leaderboard = Omit<z.infer<typeof zodSchema.Leaderboard>, 'metaverseId' | 'ownerId'> & Entity;
export type Node = Omit<z.infer<typeof zodSchema.Node>, 'metaverseId' | 'ownerId'> & Entity;
export type AssetLicense = Omit<z.infer<typeof zodSchema.AssetLicense>, 'metaverseId' | 'ownerId'> & Entity;
export type MarketPair = Omit<z.infer<typeof zodSchema.MarketPair>, 'metaverseId' | 'ownerId'> & Entity;
export type Market = Omit<z.infer<typeof zodSchema.Market>, 'metaverseId' | 'ownerId'> & Entity;
export type Message = Omit<z.infer<typeof zodSchema.Message>, 'metaverseId' | 'ownerId'> & Entity;
export type Offer = Omit<z.infer<typeof zodSchema.Offer>, 'metaverseId' | 'ownerId'> & Entity;
export type Order = Omit<z.infer<typeof zodSchema.Order>, 'metaverseId' | 'ownerId'> & Entity;
export type Product = Omit<z.infer<typeof zodSchema.Product>, 'metaverseId' | 'ownerId'> & Entity;
export type Project = Omit<z.infer<typeof zodSchema.Project>, 'metaverseId' | 'ownerId'> & Entity;
export type Rating = Omit<z.infer<typeof zodSchema.Rating>, 'metaverseId' | 'ownerId'> & Entity;
export type Realm = Omit<z.infer<typeof zodSchema.Realm>, 'metaverseId' | 'ownerId'> & Entity;
export type Review = Omit<z.infer<typeof zodSchema.Review>, 'metaverseId' | 'ownerId'> & Entity;
export type Role = Omit<z.infer<typeof zodSchema.Role>, 'metaverseId' | 'ownerId'> & Entity;
export type Server = Omit<z.infer<typeof zodSchema.Server>, 'metaverseId' | 'ownerId'> & Entity;
export type Session = Omit<z.infer<typeof zodSchema.Session>, 'metaverseId' | 'ownerId'> & Entity;
export type Suggestion = Omit<z.infer<typeof zodSchema.Suggestion>, 'metaverseId' | 'ownerId'> & Entity;
export type Tag = Omit<z.infer<typeof zodSchema.Tag>, 'metaverseId' | 'ownerId'> & Entity;
export type Tournament = Omit<z.infer<typeof zodSchema.Tournament>, 'metaverseId' | 'ownerId'> & Entity;
export type Trade = Omit<z.infer<typeof zodSchema.Trade>, 'metaverseId' | 'ownerId'> & Entity;
export type ChainTransaction = Omit<z.infer<typeof zodSchema.ChainTransaction>, 'metaverseId' | 'ownerId'> & Entity;
export type Vote = Omit<z.infer<typeof zodSchema.Vote>, 'metaverseId' | 'ownerId'> & Entity;
export type Payment = Omit<z.infer<typeof zodSchema.Payment>, 'metaverseId' | 'ownerId'> & Entity;
export type Referral = Omit<z.infer<typeof zodSchema.Referral>, 'metaverseId' | 'ownerId'> & Entity;
export type Permission = Omit<z.infer<typeof zodSchema.Permission>, 'metaverseId' | 'ownerId'> & Entity;
export type Stat = Omit<z.infer<typeof zodSchema.Stat>, 'metaverseId' | 'ownerId'> & Entity;
export type RecordUpdate = Omit<z.infer<typeof zodSchema.RecordUpdate>, 'metaverseId' | 'ownerId'> & Entity;
export type Form = Omit<z.infer<typeof zodSchema.Form>, 'metaverseId' | 'ownerId'> & Entity;
export type FormGroup = z.infer<typeof zodSchema.FormGroup>;
export type FormComponent = z.infer<typeof zodSchema.FormComponent>;
export type FormSubmission = Omit<z.infer<typeof zodSchema.FormSubmission>, 'metaverseId' | 'ownerId'> & Entity;
export type Character = Omit<z.infer<typeof zodSchema.Character>, 'metaverseId' | 'ownerId'> & Entity;
export type Team = Omit<z.infer<typeof zodSchema.Team>, 'metaverseId' | 'ownerId'> & Entity;
export type Npc = Omit<z.infer<typeof zodSchema.Npc>, 'metaverseId' | 'ownerId'> & Entity;
export type Metaverse = Omit<z.infer<typeof zodSchema.Metaverse>, 'metaverseId' | 'ownerId'> & Entity;
export type Omniverse = Omit<z.infer<typeof zodSchema.Omniverse>, 'metaverseId' | 'ownerId'> & Entity;
export type Skill = Omit<z.infer<typeof zodSchema.Skill>, 'metaverseId' | 'ownerId'> & Entity;
export type SkillMod = Omit<z.infer<typeof zodSchema.SkillMod>, 'metaverseId' | 'ownerId'> & Entity;
export type SkillClassification = Omit<z.infer<typeof zodSchema.SkillClassification>, 'metaverseId' | 'ownerId'> & Entity;
export type SkillCondition = Omit<z.infer<typeof zodSchema.SkillCondition>, 'metaverseId' | 'ownerId'> & Entity;
export type SkillStatusEffect = Omit<z.infer<typeof zodSchema.SkillStatusEffect>, 'metaverseId' | 'ownerId'> & Entity;
export type SkillTree = Omit<z.infer<typeof zodSchema.SkillTree>, 'metaverseId' | 'ownerId'> & Entity;
export type SkillTreeNode = Omit<z.infer<typeof zodSchema.SkillTreeNode>, 'metaverseId' | 'ownerId'> & Entity;
