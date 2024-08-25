import mongoose from 'mongoose';
import { z } from 'zod';

export const ObjectId = z.string().refine((value) => mongoose.Types.ObjectId.isValid(value), {
  message: 'Invalid ObjectId',
});

export const StatusEnum = z.enum(['Paused', 'Pending', 'Active', 'Archived']).default('Active');

export const Common = z.object({
  createdById: ObjectId.optional(),
  editedById: ObjectId.optional(),
  deletedById: ObjectId.optional(),
  createdDate: z.date().default(() => new Date()),
  updatedDate: z.date().optional(),
  deletedDate: z.date().optional(),
  meta: z.record(z.unknown()).optional(),
  data: z.record(z.unknown()).optional(),
  status: StatusEnum,
});

export const Entity = z
  .object({
    key: z.string().min(2).max(200).trim().optional(),
    name: z.string().min(2).max(200).trim().optional(),
    description: z.string().optional(),
    applicationId: ObjectId.optional(),
    ownerId: ObjectId.optional(),
  })
  .merge(Common);

export const Metaverse = z
  .object({
    omniverseId: ObjectId,
    ratingId: ObjectId.optional(),
  })
  .merge(Common);

export const Omniverse = z
  .object({
    ratingId: ObjectId.optional(),
  })
  .merge(Common);

export const Account = z
  .object({
    username: z.string(),
    email: z.string().optional(),
    telegramUserId: z.number().optional(),
  })
  .merge(Common);

export const Profile = z
  .object({
    accountId: ObjectId,
    points: z.number().optional(),
    coins: z.number().optional(),
    telegramUserId: z.number().optional(),
    activityRating: z.number().default(0),
    interactions: z.number().default(0),
    address: z.string().max(100).optional(),
    avatar: z.string().max(100).optional(),
    roleId: ObjectId.optional(),
    privateKey: z.string().max(300).optional(),
    signature: z.string().max(200).optional(),
    chainId: ObjectId.optional(),
    isBanned: z.boolean().optional(),
    banExpireDate: z.date().optional(),
    banReason: z.string().optional(),
  })
  .merge(Entity);

export const Application = z
  .object({
    metaverseId: ObjectId,
    name: z.string(),
  })
  .merge(Entity);

export const Agent = z.object({}).merge(Entity);

export const Data = z
  .object({
    mod: z.string(),
  })
  .merge(Entity);

export const Memory = z.object({}).merge(Entity);

export const Conversation = z
  .object({
    userId: ObjectId.optional(),
    messages: z.array(z.unknown()).optional(),
  })
  .merge(Entity);

export const Log = z
  .object({
    mod: z.string(),
    messages: z.array(z.unknown()).optional(),
    tags: z.array(z.unknown()).optional(),
  })
  .merge(Entity);

export const Job = z
  .object({
    mod: z.string(),
    startDate: z.date().optional(),
    expireDate: z.date().optional(),
  })
  .merge(Entity);

export const NewsArticle = z
  .object({
    href: z.string(),
    source: z.string(),
  })
  .merge(Entity);

export const Comment = z
  .object({
    body: z.string(),
    entity: ObjectId,
    entityModel: z.enum(['NewsArticle', 'ChainToken']),
    text: z.string(),
    ratingId: ObjectId,
  })
  .merge(Entity);

export const Question = z
  .object({
    topics: z.array(z.unknown()).optional(),
    text: z.string(),
    answer: z.string(),
    popularity: z.number().optional(),
  })
  .merge(Entity);

export const Topic = z
  .object({
    text: z.string(),
    popularity: z.number().optional(),
    tags: z.array(z.unknown()).optional(),
  })
  .merge(Entity);

export const WorldEvent = z
  .object({
    text: z.string(),
    importance: z.number().optional(),
    tags: z.array(z.unknown()).optional(),
  })
  .merge(Entity);

export const CollectibleCollection = z
  .object({
    hype: z.number().optional(),
    value: z.number().optional(),
  })
  .merge(Entity);

export const CollectibleCard = z
  .object({
    collectibleCollectionId: ObjectId.optional(),
    franchise: z.string().trim(),
    ungraded: z.number().optional(),
    grade10: z.number().optional(),
    grade9: z.number().optional(),
    grade8: z.number().optional(),
    grade7: z.number().optional(),
    grade6: z.number().optional(),
    grade5: z.number().optional(),
    grade4: z.number().optional(),
    grade3: z.number().optional(),
    grade2: z.number().optional(),
    grade1: z.number().optional(),
    additional: z.string().optional(),
    code: z.string().optional(),
    hype: z.number().optional(),
    series: z.string().optional(),
    category: z.string().optional(),
    year: z.number().optional(),
  })
  .merge(Entity);

export const CollectibleCardBox = z
  .object({
    collectibleCollectionId: ObjectId.optional(),
    franchise: z.string().trim(),
  })
  .merge(Entity);

export const CollectibleCardPack = z
  .object({
    collectibleCollectionId: ObjectId.optional(),
    franchise: z.string().trim(),
    ungraded: z.number().optional(),
    grade10: z.number().optional(),
    grade9: z.number().optional(),
    grade8: z.number().optional(),
    grade7: z.number().optional(),
    grade6: z.number().optional(),
    grade5: z.number().optional(),
    grade4: z.number().optional(),
    grade3: z.number().optional(),
    grade2: z.number().optional(),
    grade1: z.number().optional(),
    additional: z.string().optional(),
    code: z.string().optional(),
    hype: z.number().optional(),
    series: z.string().optional(),
    category: z.string().optional(),
    year: z.number().optional(),
  })
  .merge(Entity);

export const Stock = z
  .object({
    rank: z.number().min(0).optional(),
    price: z.number().min(0).optional(),
    hourChange: z.number().optional(),
    dayChange: z.number().optional(),
    weekChange: z.number().optional(),
    marketCap: z.number().min(0).optional(),
    volume: z.number().min(0).optional(),
    ticker: z.string(),
    unusualActivity: z.number().min(0).optional(),
  })
  .merge(Entity);

export const Chain = z
  .object({
    content: z.string(),
    type: z.string(),
    standard: z.string(),
  })
  .merge(Entity);

export const ChainContract = z
  .object({
    type: z.string(),
    content: z.string(),
    standard: z.string(),
  })
  .merge(Entity);

export const ChainToken = z
  .object({
    rank: z.number().min(0).optional(),
    content: z.string(),
    standard: z.string(),
    type: z.string(),
    price: z.number().min(0).optional(),
    hourChange: z.number().optional(),
    dayChange: z.number().optional(),
    weekChange: z.number().optional(),
    marketCap: z.number().min(0).optional(),
    volume: z.number().min(0).optional(),
    symbol: z.string(),
    circulatingSupply: z.number().min(0).optional(),
    cmcLink: z.string().optional(),
    movementDown: z.number().min(0).optional(),
    movementUp: z.number().min(0).optional(),
    enteredTop100: z.number().min(0).optional(),
    exitedTop100: z.number().min(0).optional(),
    largeMoveDown: z.number().min(0).optional(),
  })
  .merge(Entity);

export const Asset = z
  .object({
    uri: z.string().optional(),
    type: z.string().max(100).optional(),
    standard: z.string().max(100).optional(),
    licenseId: ObjectId.optional(),
    license: ObjectId.optional(),
    chainId: ObjectId.optional(),
    items: z.array(ObjectId).optional(),
  })
  .merge(Entity);

export const Item = z
  .object({
    token: z.string().max(500).optional(),
    assetId: ObjectId,
    chainId: ObjectId,
  })
  .merge(Entity);

export const ItemTransmute = z
  .object({
    token: z.string().max(500).optional(),
    assetId: ObjectId,
    gameItemId: ObjectId,
    chainId: ObjectId,
  })
  .merge(Entity);

export const Badge = z
  .object({
    value: z.string().optional(),
  })
  .merge(Entity);

export const BattlePass = z.object({}).merge(Entity);

export const Bounty = z.object({}).merge(Entity);

export const Collection = z
  .object({
    value: z.string().optional(),
  })
  .merge(Entity);

export const Community = z
  .object({
    value: z.string().optional(),
    ideas: z.array(ObjectId).optional(),
    products: z.array(ObjectId).optional(),
    projects: z.array(ObjectId).optional(),
  })
  .merge(Entity);

export const Discussion = z
  .object({
    content: z.string().optional(),
    parentId: ObjectId.optional(),
    rootMessageId: ObjectId.optional(),
    type: z.string().default('Discussion'),
  })
  .merge(Entity);

export const Event = z
  .object({
    value: z.string().optional(),
  })
  .merge(Entity);

export const Exchange = z
  .object({
    value: z.string().optional(),
  })
  .merge(Entity);

export const File = z
  .object({
    value: z.string().optional(),
    storageType: z.string().max(100).optional(),
    accessType: z.string().max(100).optional(),
  })
  .merge(Entity);

export const Idea = z
  .object({
    value: z.string().optional(),
    type: z.string().max(100).optional(),
    communityId: ObjectId.optional(),
  })
  .merge(Entity);

export const Leaderboard = z
  .object({
    value: z.string().optional(),
    productId: ObjectId.optional(),
  })
  .merge(Entity);

export const AssetLicense = z
  .object({
    value: z.string().optional(),
    assets: z.array(ObjectId).optional(),
  })
  .merge(Entity);

export const MarketPair = z
  .object({
    value: z.string().optional(),
  })
  .merge(Entity);

export const Market = z
  .object({
    value: z.string().optional(),
  })
  .merge(Entity);

export const Message = z
  .object({
    content: z.string().optional(),
    type: z.string().max(100).optional(),
    replyToId: ObjectId.optional(),
    parentId: ObjectId.optional(),
    parent: ObjectId.optional(),
    messages: z.array(ObjectId).optional(),
  })
  .merge(Entity);

export const Offer = z
  .object({
    value: z.string().optional(),
  })
  .merge(Entity);

export const Order = z
  .object({
    value: z.string().optional(),
  })
  .merge(Entity);

export const Product = z
  .object({
    shortDescription: z.string().max(300).optional(),
    content: z.string().optional(),
    communityId: ObjectId.optional(),
    type: z.string().max(100).default('game'),
    releaseDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
  })
  .merge(Entity);

export const Project = z
  .object({
    value: z.string().optional(),
    contractStatus: z.string().default('Pending').optional(),
    parentId: ObjectId.optional(),
    realmId: ObjectId.optional(),
    communityId: ObjectId.optional(),
    productId: ObjectId.optional(),
    ratingId: ObjectId.optional(),
  })
  .merge(Entity);

export const Rating = z
  .object({
    value: z.string().optional(),
    votes: z.array(ObjectId).optional(),
    projects: z.array(ObjectId).optional(),
    comments: z.array(ObjectId).optional(),
  })
  .merge(Entity);

export const Realm = z
  .object({
    value: z.string().optional(),
  })
  .merge(Entity);

export const Review = z
  .object({
    value: z.string().optional(),
  })
  .merge(Entity);

export const Role = z
  .object({
    value: z.string().optional(),
    rolesOnProfiles: z.array(ObjectId).optional(),
    permissionsOnRoles: z.array(ObjectId).optional(),
  })
  .merge(Entity);

export const Server = z
  .object({
    value: z.string().optional(),
  })
  .merge(Entity);

export const Session = z
  .object({
    expired: z.date(),
  })
  .merge(Entity);

export const Suggestion = z
  .object({
    value: z.string().optional(),
  })
  .merge(Entity);

export const Tag = z
  .object({
    value: z.string().optional(),
  })
  .merge(Entity);

export const Tournament = z
  .object({
    value: z.string().optional(),
  })
  .merge(Entity);

export const Trade = z
  .object({
    chainId: ObjectId,
    buyerId: ObjectId,
    content: z.string().optional(),
  })
  .merge(Entity);

export const ChainTransaction = z
  .object({
    chainId: ObjectId,
    value: z.string().optional(),
  })
  .merge(Entity);

export const Vote = z
  .object({
    value: z.string().optional(),
    ratingId: ObjectId.optional(),
  })
  .merge(Entity);

export const Payment = z
  .object({
    value: z.string().optional(),
  })
  .merge(Entity);

export const Referral = z
  .object({
    recipientId: ObjectId,
    senderId: ObjectId,
    recipient: ObjectId.optional(),
    sender: ObjectId.optional(),
  })
  .merge(Entity);

export const Permission = z
  .object({
    permissionsOnRoles: z.array(ObjectId).optional(),
  })
  .merge(Entity);

export const Stat = z
  .object({
    number: z.number().default(0),
  })
  .merge(Entity);

export const RecordUpdate = z
  .object({
    objectType: z.string().max(100),
    objectId: z.string().nonempty(),
    actionType: z.string().max(100),
    reason: z.string().max(100),
    recordUpdatesOnForms: z.array(ObjectId).optional(),
    recordUpdatesOnProfiles: z.array(ObjectId).optional(),
  })
  .merge(Entity);

export const Interface = z
  .object({
    ratingId: ObjectId.optional(),
    submissions: z.array(ObjectId).optional(),
    commentsOnInterfaces: z.array(ObjectId).optional(),
    recordUpdatesOnInterfaces: z.array(ObjectId).optional(),
  })
  .merge(Entity);

export const InterfaceGroup = z
  .object({
    rolesOnInterfaceGroups: z.array(ObjectId).optional(),
  })
  .merge(Entity);

export const InterfaceComponent = z
  .object({
    value: z.unknown().optional(),
    data: z.record(z.unknown()).optional(),
    type: z.string().optional(),
    hasAttachment: z.boolean().optional(),
    hasValidation: z.boolean().optional(),
    isDisabled: z.boolean().optional(),
    isEditable: z.boolean().optional(),
    isRequired: z.boolean().optional(),
  })
  .merge(Entity);

export const InterfaceSubmission = z
  .object({
    interfaceId: ObjectId,
    interface: ObjectId.optional(),
  })
  .merge(Entity);

export const Character = z
  .object({
    teamId: ObjectId.optional(),
    ratingId: ObjectId.optional(),
    classId: ObjectId.optional(),
    token: z.string().nonempty(),
  })
  .merge(Entity);

export const Team = z
  .object({
    ratingId: ObjectId.optional(),
  })
  .merge(Entity);

export const Npc = z
  .object({
    characterRaceId: ObjectId.optional(),
    characterId: ObjectId.optional(),
  })
  .merge(Entity);

export const Skill = z.object({}).merge(Entity);

export const SkillMod = z.object({}).merge(Entity);

export const SkillClassification = z.object({}).merge(Entity);

export const SkillCondition = z.object({}).merge(Entity);

export const SkillStatusEffect = z.object({}).merge(Entity);

export const SkillTree = z.object({}).merge(Entity);

export const SkillTreeNode = z.object({}).merge(Entity);

export const CharacterAbility = z.object({}).merge(Entity);

export const CharacterAttribute = z.object({}).merge(Entity);

export const CharacterType = z.object({}).merge(Entity);

export const ItemAttribute = z.object({}).merge(Entity);

export const ItemMaterial = z.object({}).merge(Entity);

export const ItemSet = z.object({}).merge(Entity);

export const ItemSlot = z.object({}).merge(Entity);

export const ItemRarity = z.object({}).merge(Entity);

export const ItemType = z.object({}).merge(Entity);

export const ItemSubType = z.object({}).merge(Entity);

export const ItemSpecificType = CharacterAbility;
export const ItemAffix = CharacterAbility;
export const ItemRecipe = CharacterAbility;
export const ItemSkin = CharacterAbility;

export const Stash = z.object({}).merge(Entity);

export const Biome = z.object({}).merge(Entity);

export const BiomeFeature = z.object({}).merge(Entity);

export const Planet = z
  .object({
    solarSystemId: ObjectId.optional(),
  })
  .merge(Entity);

export const SolarSystem = z
  .object({
    galaxyId: ObjectId.optional(),
  })
  .merge(Entity);

export const Galaxy = z
  .object({
    universeId: ObjectId.optional(),
  })
  .merge(Entity);

export const Star = z.object({}).merge(Entity);

export const Universe = z.object({}).merge(Entity);

export const Quest = z
  .object({
    type: z.string().default('zone'),
  })
  .merge(Entity);

export const Area = z
  .object({
    type: z.string().default('zone'),
    landmarks: z.array(ObjectId).optional(),
  })
  .merge(Entity);

export const AreaType = z.object({}).merge(Entity);

export const AreaLandmark = z
  .object({
    areaId: ObjectId.optional(),
    area: ObjectId.optional(),
  })
  .merge(Entity);

export const Act = z.object({}).merge(Entity);

export const CharacterClass = z.object({}).merge(Entity);

export const CharacterRace = z
  .object({
    npcs: z.array(ObjectId).optional(),
  })
  .merge(Entity);

export const CharacterGender = z.object({}).merge(Entity);

export const CharacterPersonality = z.object({}).merge(Entity);

export const CharacterTitle = z.object({}).merge(Entity);

export const AreaNameChoice = z.object({}).merge(Entity);

export const CharacterNameChoice = z.object({}).merge(Entity);

export const CharacterFaction = z.object({}).merge(Entity);

export const Era = z.object({}).merge(Entity);

export const Season = z.object({}).merge(Entity);

export const Lore = z
  .object({
    gameId: ObjectId.optional(),
  })
  .merge(Entity);

export const Energy = z.object({}).merge(Entity);

export const Guide = z
  .object({
    content: z.string().optional(),
    gameId: ObjectId.optional(),
    attachments: z.array(z.unknown()).optional(),
  })
  .merge(Entity);

export const Achievement = z.object({}).merge(Entity);

export const Game = z
  .object({
    productId: ObjectId,
  })
  .merge(Entity);

export const Validator = z.object({}).merge(Entity);

export const Poll = z.object({}).merge(Entity);

export const ProductUpdate = z
  .object({
    productId: ObjectId.optional(),
  })
  .merge(Entity);

export const Raffle = z
  .object({
    content: z.string(),
    rewards: z.array(ObjectId).optional(),
    raffleRequirement: z.array(ObjectId).optional(),
    raffleEntry: z.array(ObjectId).optional(),
  })
  .merge(Entity);

export const RaffleRequirement = z
  .object({
    amount: z.number(),
    raffleRewardId: ObjectId.optional(),
  })
  .merge(Entity);

export const RaffleReward = z
  .object({
    raffleId: z.string().optional(),
    raffle: ObjectId.optional(),
    winnerId: z.string().optional(),
    winner: ObjectId.optional(),
    requirements: z.array(ObjectId).optional(),
    entries: z.array(ObjectId).optional(),
  })
  .merge(Entity);

export const RaffleEntry = z
  .object({
    amount: z.number(),
    raffleRewardId: z.string().optional(),
    raffleId: ObjectId.optional(),
  })
  .merge(Entity);

export const Proposal = z
  .object({
    content: z.string().optional(),
  })
  .merge(Entity);

export const Company = z
  .object({
    content: z.string().optional(),
    people: z.array(ObjectId).optional(),
  })
  .merge(Entity);

export const Person = z
  .object({
    content: z.string().optional(),
    companyId: ObjectId.optional(),
  })
  .merge(Entity);

export const Video = z
  .object({
    youtubeId: z.string(),
    url: z.string(),
  })
  .merge(Entity);

export const VideoScene = z.object({}).merge(Entity);

// Participant schema
export const VideoParticipant = z
  .object({
    profileId: ObjectId.optional(),
  })
  .merge(Entity);

// VideoDialogue schema
export const VideoDialogue = z
  .object({
    participantId: ObjectId,
    text: z.string(),
    timestamp: z.string(),
  })
  .merge(Entity);

// VideoTranscript schema
export const VideoTranscript = z
  .object({
    videoId: ObjectId, // Store the video ID as a string
    transcript: z.array(VideoDialogue), // Array of dialogues
    summary: z.string().optional(),
  })
  .merge(Entity);

export const Node = z
  .object({
    parentId: ObjectId,
    relationKey: z.string(),
    relationType: z.string(),
    fromAccountId: ObjectId.optional(),
    toAccountId: ObjectId.optional(),
    fromProfileId: ObjectId.optional(),
    toProfileId: ObjectId.optional(),
    fromBadgeId: ObjectId.optional(),
    toBadgeId: ObjectId.optional(),
    fromAchievementId: ObjectId.optional(),
    toAchievementId: ObjectId.optional(),
    fromIdeaId: ObjectId.optional(),
    toIdeaId: ObjectId.optional(),
    fromSuggestionId: ObjectId.optional(),
    toSuggestionId: ObjectId.optional(),
    fromProjectId: ObjectId.optional(),
    toProjectId: ObjectId.optional(),
    fromProductId: ObjectId.optional(),
    toProductId: ObjectId.optional(),
    fromAssetId: ObjectId.optional(),
    toAssetId: ObjectId.optional(),
    fromBountyId: ObjectId.optional(),
    toBountyId: ObjectId.optional(),
    fromRealmId: ObjectId.optional(),
    toRealmId: ObjectId.optional(),
    fromCommunityId: ObjectId.optional(),
    toCommunityId: ObjectId.optional(),
    fromCollectionId: ObjectId.optional(),
    toCollectionId: ObjectId.optional(),
    fromDiscussionId: ObjectId.optional(),
    toDiscussionId: ObjectId.optional(),
    fromMessageId: ObjectId.optional(),
    toMessageId: ObjectId.optional(),
    fromOfferId: ObjectId.optional(),
    toOfferId: ObjectId.optional(),
    fromLicenseId: ObjectId.optional(),
    toLicenseId: ObjectId.optional(),
    fromOrderId: ObjectId.optional(),
    toOrderId: ObjectId.optional(),
    fromRatingId: ObjectId.optional(),
    toRatingId: ObjectId.optional(),
    fromReviewId: ObjectId.optional(),
    toReviewId: ObjectId.optional(),
    fromTagId: ObjectId.optional(),
    toTagId: ObjectId.optional(),
    fromVoteId: ObjectId.optional(),
    toVoteId: ObjectId.optional(),
    fromLeaderboardId: ObjectId.optional(),
    toLeaderboardId: ObjectId.optional(),
    fromLogId: ObjectId.optional(),
    toLogId: ObjectId.optional(),
    fromFileId: ObjectId.optional(),
    toFileId: ObjectId.optional(),
    fromEventId: ObjectId.optional(),
    toEventId: ObjectId.optional(),
    fromServerId: ObjectId.optional(),
    toServerId: ObjectId.optional(),
  })
  .merge(Entity);
