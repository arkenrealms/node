import { z } from 'zod';
import * as schema from './character.schema';
import { Document, Model } from '../../util/mongo';

export type * from './character.router';
export type * from './character.service';
export type { RouterContext } from '../../types';

export type Character = z.infer<typeof schema.Character>;
export type CharacterInventory = z.infer<typeof schema.CharacterInventory>;
export type CharacterEquipment = z.infer<typeof schema.CharacterEquipment>;
export type CharacterAbility = z.infer<typeof schema.CharacterAbility>;
export type CharacterAttribute = z.infer<typeof schema.CharacterAttribute>;
export type CharacterClass = z.infer<typeof schema.CharacterClass>;
export type CharacterFaction = z.infer<typeof schema.CharacterFaction>;
export type CharacterGender = z.infer<typeof schema.CharacterGender>;
export type CharacterNameChoice = z.infer<typeof schema.CharacterNameChoice>;
export type CharacterPersonality = z.infer<typeof schema.CharacterPersonality>;
export type CharacterRace = z.infer<typeof schema.CharacterRace>;
export type CharacterTitle = z.infer<typeof schema.CharacterTitle>;
export type CharacterType = z.infer<typeof schema.CharacterType>;

export type CharacterEquipmentDocument = CharacterEquipment & Document;
export type CharacterInventoryDocument = CharacterInventory & Document;
export type CharacterDocument = Character & Document;
export type CharacterAbilityDocument = CharacterAbility & Document;
export type CharacterAttributeDocument = CharacterAttribute & Document;
export type CharacterClassDocument = CharacterClass & Document;
export type CharacterFactionDocument = CharacterFaction & Document;
export type CharacterGenderDocument = CharacterGender & Document;
export type CharacterNameChoiceDocument = CharacterNameChoice & Document;
export type CharacterPersonalityDocument = CharacterPersonality & Document;
export type CharacterRaceDocument = CharacterRace & Document;
export type CharacterTitleDocument = CharacterTitle & Document;
export type CharacterTypeDocument = CharacterType & Document;

export type Mappings = {
  Character: Model<CharacterDocument>;
  CharacterAbility: Model<CharacterAbilityDocument>;
  CharacterAttribute: Model<CharacterAttributeDocument>;
  CharacterClass: Model<CharacterClassDocument>;
  CharacterFaction: Model<CharacterFactionDocument>;
  CharacterGender: Model<CharacterGenderDocument>;
  CharacterNameChoice: Model<CharacterNameChoiceDocument>;
  CharacterPersonality: Model<CharacterPersonalityDocument>;
  CharacterRace: Model<CharacterRaceDocument>;
  CharacterTitle: Model<CharacterTitleDocument>;
  CharacterType: Model<CharacterTypeDocument>;
};
