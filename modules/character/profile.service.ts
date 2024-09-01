import type { Context } from '../../types';
import type { Character, CharacterAbility, CharacterAttribute } from './character.types';

export class Service {
  async getCharacter({ characterId }: { characterId: string }, ctx: Context) {
    console.log('Character.Service.getCharacter', characterId);
    const character = await ctx.app.model.Character.findById(characterId).lean().exec();
    if (!character) {
      throw new Error('Character not found');
    }
    return character as Character;
  }

  async addCharacterAbility(
    { characterId, abilityData }: { characterId: string; abilityData: Partial<CharacterAbility> },
    ctx: Context
  ) {
    console.log('Character.Service.addCharacterAbility', characterId, abilityData);
    const ability = await ctx.app.model.CharacterAbility.create(abilityData);
    await ctx.app.model.Character.updateOne({ _id: characterId }, { $push: { abilities: ability._id } }).exec();
    return ability as CharacterAbility;
  }

  async addCharacterAttribute(
    { characterId, attributeData }: { characterId: string; attributeData: Partial<CharacterAttribute> },
    ctx: Context
  ) {
    console.log('Character.Service.addCharacterAttribute', characterId, attributeData);
    const attribute = await ctx.app.model.CharacterAttribute.create(attributeData);
    await ctx.app.model.Character.updateOne({ _id: characterId }, { $push: { attributes: attribute._id } }).exec();
    return attribute as CharacterAttribute;
  }

  async updateCharacter({ characterId, data }: { characterId: string; data: Partial<Character> }, ctx: Context) {
    console.log('Character.Service.updateCharacter', characterId, data);
    const updatedCharacter = await ctx.app.model.Character.findByIdAndUpdate(characterId, data, { new: true })
      .lean()
      .exec();
    if (!updatedCharacter) {
      throw new Error('Character update failed');
    }
    return updatedCharacter as Character;
  }
}
