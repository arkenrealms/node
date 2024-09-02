import * as mongo from '../../util/mongo';
import type * as Types from './character.types';

export const Character = mongo.createModel<Types.CharacterDocument>('Character', {
  teamId: { type: mongo.Schema.Types.ObjectId, ref: 'Team', required: false },
  ownerId: { type: mongo.Schema.Types.ObjectId, ref: 'Profile', required: true },
  ratingId: { type: mongo.Schema.Types.ObjectId, ref: 'Rating', required: false },
  classId: { type: mongo.Schema.Types.ObjectId, ref: 'CharacterClass', required: false },
  token: { type: String, required: true, trim: true },
});

export const CharacterAbility = mongo.createModel<Types.CharacterAbilityDocument>('CharacterAbility', {});

export const CharacterAttribute = mongo.createModel<Types.CharacterAttributeDocument>('CharacterAttribute', {});

export const CharacterType = mongo.createModel<Types.CharacterTypeDocument>('CharacterType', {});

export const CharacterClass = mongo.createModel<Types.CharacterClassDocument>('CharacterClass', {});

export const CharacterRace = mongo.createModel<Types.CharacterRaceDocument>('CharacterRace', {
  npcs: [{ type: mongo.Schema.Types.ObjectId, ref: 'Npc' }],
});

export const CharacterGender = mongo.createModel<Types.CharacterGenderDocument>('CharacterGender', {});

export const CharacterPersonality = mongo.createModel<Types.CharacterPersonalityDocument>('CharacterPersonality', {});

export const CharacterTitle = mongo.createModel<Types.CharacterTitleDocument>('CharacterTitle', {});
