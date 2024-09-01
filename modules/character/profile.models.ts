import * as mongo from '../../util/mongo';
import type * as Types from './character.types';

// Character

export const CharacterSchema = mongo.createSchema<Types.CharacterDocument>('Character', {
  teamId: { type: mongo.Schema.Types.ObjectId, ref: 'Team', required: false },
  ownerId: { type: mongo.Schema.Types.ObjectId, ref: 'Profile', required: true },
  ratingId: { type: mongo.Schema.Types.ObjectId, ref: 'Rating', required: false },
  classId: { type: mongo.Schema.Types.ObjectId, ref: 'CharacterClass', required: false },
  token: { type: String, required: true, trim: true },
});

export const Character = mongo.createModel<Types.CharacterDocument>('Character', CharacterSchema);

// CharacterAbility

export const CharacterAbilitySchema = mongo.createSchema<Types.CharacterAbilityDocument>('CharacterAbility', {});

export const CharacterAbility = mongo.createModel<Types.CharacterAbilityDocument>(
  'CharacterAbility',
  CharacterAbilitySchema
);

// CharacterAttribute

export const CharacterAttributeSchema = mongo.createSchema<Types.CharacterAttributeDocument>('CharacterAttribute', {});

export const CharacterAttribute = mongo.createModel<Types.CharacterAttributeDocument>(
  'CharacterAttribute',
  CharacterAttributeSchema
);

// CharacterType

export const CharacterTypeSchema = mongo.createSchema<Types.CharacterTypeDocument>('CharacterType', {});

export const CharacterType = mongo.createModel<Types.CharacterTypeDocument>('CharacterType', CharacterTypeSchema);

// CharacterClass

export const CharacterClassSchema = mongo.createSchema<Types.CharacterClassDocument>('CharacterClass', {});

export const CharacterClass = mongo.createModel<Types.CharacterClassDocument>('CharacterClass', CharacterClassSchema);

// CharacterRace

export const CharacterRaceSchema = mongo.createSchema<Types.CharacterRaceDocument>('CharacterRace', {
  npcs: [{ type: mongo.Schema.Types.ObjectId, ref: 'Npc' }],
});

export const CharacterRace = mongo.createModel<Types.CharacterRaceDocument>('CharacterRace', CharacterRaceSchema);

// CharacterGender

export const CharacterGenderSchema = mongo.createSchema<Types.CharacterGenderDocument>('CharacterGender', {});

export const CharacterGender = mongo.createModel<Types.CharacterGenderDocument>(
  'CharacterGender',
  CharacterGenderSchema
);

// CharacterPersonality

export const CharacterPersonalitySchema = mongo.createSchema<Types.CharacterPersonalityDocument>(
  'CharacterPersonality',
  {}
);

export const CharacterPersonality = mongo.createModel<Types.CharacterPersonalityDocument>(
  'CharacterPersonality',
  CharacterPersonalitySchema
);

// CharacterTitle

export const CharacterTitleSchema = mongo.createSchema<Types.CharacterTitleDocument>('CharacterTitle', {});

export const CharacterTitle = mongo.createModel<Types.CharacterTitleDocument>('CharacterTitle', CharacterTitleSchema);
