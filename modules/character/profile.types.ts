import { z } from 'zod';
import * as schema from './character.schema';
import { Document, Model } from '../../util/mongo';
export type * from './character.service';

export type Character = z.infer<typeof schema.Character>;
export type CharacterAbility = z.infer<typeof schema.CharacterAbility>;
export type CharacterAttribute = z.infer<typeof schema.CharacterAttribute>;
export type CharacterType = z.infer<typeof schema.CharacterType>;
export type CharacterClass = z.infer<typeof schema.CharacterClass>;
export type CharacterRace = z.infer<typeof schema.CharacterRace>;
export type CharacterGender = z.infer<typeof schema.CharacterGender>;
export type CharacterPersonality = z.infer<typeof schema.CharacterPersonality>;
export type CharacterTitle = z.infer<typeof schema.CharacterTitle>;

export type CharacterDocument = Character & Document;
export type CharacterAbilityDocument = CharacterAbility & Document;
export type CharacterAttributeDocument = CharacterAttribute & Document;
export type CharacterTypeDocument = CharacterType & Document;
export type CharacterClassDocument = CharacterClass & Document;
export type CharacterRaceDocument = CharacterRace & Document;
export type CharacterGenderDocument = CharacterGender & Document;
export type CharacterPersonalityDocument = CharacterPersonality & Document;
export type CharacterTitleDocument = CharacterTitle & Document;

export type Mappings = {
  Character: Model<CharacterDocument>;
  CharacterAbility: Model<CharacterAbilityDocument>;
  CharacterAttribute: Model<CharacterAttributeDocument>;
  CharacterType: Model<CharacterTypeDocument>;
  CharacterClass: Model<CharacterClassDocument>;
  CharacterRace: Model<CharacterRaceDocument>;
  CharacterGender: Model<CharacterGenderDocument>;
  CharacterPersonality: Model<CharacterPersonalityDocument>;
  CharacterTitle: Model<CharacterTitleDocument>;
};
