import type {
  Character,
  CharacterAbility,
  CharacterAttribute,
  CharacterClass,
  CharacterFaction,
  CharacterGender,
  CharacterNameChoice,
  CharacterPersonality,
  CharacterRace,
  CharacterTitle,
  CharacterType,
  Router,
  RouterInput,
  RouterOutput,
  RouterContext,
} from './character.types';

export class Service {
  async getCharacter(input: RouterInput['getCharacter'], ctx: RouterContext): Promise<RouterOutput['getCharacter']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.getCharacter', input.characterId);

    const character = await ctx.app.model.Character.findById(input.characterId).lean().exec();
    if (!character) throw new Error('Character not found');

    return character as Character;
  }

  async getCharacterAbility(
    input: RouterInput['getCharacterAbility'],
    ctx: RouterContext
  ): Promise<RouterOutput['getCharacterAbility']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.getCharacterAbility', input.characterAbilityId);

    const characterAbility = await ctx.app.model.CharacterAbility.findById(input.characterAbilityId).lean().exec();
    if (!characterAbility) throw new Error('CharacterAbility not found');

    return characterAbility as CharacterAbility;
  }

  async createCharacter(
    input: RouterInput['createCharacter'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCharacter']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.createCharacter', input);

    const character = await ctx.app.model.Character.create(input);
    return character as Character;
  }

  async createCharacterAbility(
    input: RouterInput['createCharacterAbility'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCharacterAbility']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.createCharacterAbility', input);

    const characterAbility = await ctx.app.model.CharacterAbility.create(input);
    return characterAbility as CharacterAbility;
  }

  async updateCharacter(
    input: RouterInput['updateCharacter'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCharacter']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.updateCharacter', input.characterId, input.data);

    const updatedCharacter = await ctx.app.model.Character.findByIdAndUpdate(input.characterId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedCharacter) throw new Error('Character update failed');

    return updatedCharacter as Character;
  }

  async updateCharacterAbility(
    input: RouterInput['updateCharacterAbility'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCharacterAbility']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.updateCharacterAbility', input.characterAbilityId, input.data);

    const updatedCharacterAbility = await ctx.app.model.CharacterAbility.findByIdAndUpdate(
      input.characterAbilityId,
      input.data,
      {
        new: true,
      }
    )
      .lean()
      .exec();
    if (!updatedCharacterAbility) throw new Error('CharacterAbility update failed');

    return updatedCharacterAbility as CharacterAbility;
  }

  async getCharacterAttribute(
    input: RouterInput['getCharacterAttribute'],
    ctx: RouterContext
  ): Promise<RouterOutput['getCharacterAttribute']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.getCharacterAttribute', input.characterAttributeId);

    const characterAttribute = await ctx.app.model.CharacterAttribute.findById(input.characterAttributeId)
      .lean()
      .exec();
    if (!characterAttribute) throw new Error('CharacterAttribute not found');

    return characterAttribute as CharacterAttribute;
  }

  async createCharacterAttribute(
    input: RouterInput['createCharacterAttribute'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCharacterAttribute']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.createCharacterAttribute', input);

    const characterAttribute = await ctx.app.model.CharacterAttribute.create(input);
    return characterAttribute as CharacterAttribute;
  }

  async updateCharacterAttribute(
    input: RouterInput['updateCharacterAttribute'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCharacterAttribute']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.updateCharacterAttribute', input.characterAttributeId, input.data);

    const updatedCharacterAttribute = await ctx.app.model.CharacterAttribute.findByIdAndUpdate(
      input.characterAttributeId,
      input.data,
      {
        new: true,
      }
    )
      .lean()
      .exec();
    if (!updatedCharacterAttribute) throw new Error('CharacterAttribute update failed');

    return updatedCharacterAttribute as CharacterAttribute;
  }

  async getCharacterClass(
    input: RouterInput['getCharacterClass'],
    ctx: RouterContext
  ): Promise<RouterOutput['getCharacterClass']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.getCharacterClass', input.characterClassId);

    const characterClass = await ctx.app.model.CharacterClass.findById(input.characterClassId).lean().exec();
    if (!characterClass) throw new Error('CharacterClass not found');

    return characterClass as CharacterClass;
  }

  async createCharacterClass(
    input: RouterInput['createCharacterClass'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCharacterClass']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.createCharacterClass', input);

    const characterClass = await ctx.app.model.CharacterClass.create(input);
    return characterClass as CharacterClass;
  }

  async updateCharacterClass(
    input: RouterInput['updateCharacterClass'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCharacterClass']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.updateCharacterClass', input.characterClassId, input.data);

    const updatedCharacterClass = await ctx.app.model.CharacterClass.findByIdAndUpdate(
      input.characterClassId,
      input.data,
      {
        new: true,
      }
    )
      .lean()
      .exec();
    if (!updatedCharacterClass) throw new Error('CharacterClass update failed');

    return updatedCharacterClass as CharacterClass;
  }

  // Add similar methods for other character-related models...

  async getCharacterFaction(
    input: RouterInput['getCharacterFaction'],
    ctx: RouterContext
  ): Promise<RouterOutput['getCharacterFaction']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.getCharacterFaction', input.characterFactionId);

    const characterFaction = await ctx.app.model.CharacterFaction.findById(input.characterFactionId).lean().exec();
    if (!characterFaction) throw new Error('CharacterFaction not found');

    return characterFaction as CharacterFaction;
  }

  async getCharacterFactions(
    input: RouterInput['getCharacterFactions'],
    ctx: RouterContext
  ): Promise<RouterOutput['getCharacterFactions']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.getCharacterFactions', input);

    const characterFactions = await ctx.app.model.CharacterFaction.find().lean().exec();
    if (!characterFactions) throw new Error('CharacterFactions not found');

    return characterFactions as CharacterFaction[];
  }

  async createCharacterFaction(
    input: RouterInput['createCharacterFaction'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCharacterFaction']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.createCharacterFaction', input);

    const characterFaction = await ctx.app.model.CharacterFaction.create(input);
    return characterFaction as CharacterFaction;
  }

  async updateCharacterFaction(
    input: RouterInput['updateCharacterFaction'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCharacterFaction']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.updateCharacterFaction', input.characterFactionId, input.data);

    const updatedCharacterFaction = await ctx.app.model.CharacterFaction.findByIdAndUpdate(
      input.characterFactionId,
      input.data,
      {
        new: true,
      }
    )
      .lean()
      .exec();
    if (!updatedCharacterFaction) throw new Error('CharacterFaction update failed');

    return updatedCharacterFaction as CharacterFaction;
  }

  async getCharacterGender(
    input: RouterInput['getCharacterGender'],
    ctx: RouterContext
  ): Promise<RouterOutput['getCharacterGender']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.getCharacterGender', input.characterGenderId);

    const characterGender = await ctx.app.model.CharacterGender.findById(input.characterGenderId).lean().exec();
    if (!characterGender) throw new Error('CharacterGender not found');

    return characterGender as CharacterGender;
  }

  async createCharacterGender(
    input: RouterInput['createCharacterGender'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCharacterGender']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.createCharacterGender', input);

    const characterGender = await ctx.app.model.CharacterGender.create(input);
    return characterGender as CharacterGender;
  }

  async updateCharacterGender(
    input: RouterInput['updateCharacterGender'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCharacterGender']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.updateCharacterGender', input.characterGenderId, input.data);

    const updatedCharacterGender = await ctx.app.model.CharacterGender.findByIdAndUpdate(
      input.characterGenderId,
      input.data,
      {
        new: true,
      }
    )
      .lean()
      .exec();
    if (!updatedCharacterGender) throw new Error('CharacterGender update failed');

    return updatedCharacterGender as CharacterGender;
  }

  async getCharacterNameChoice(
    input: RouterInput['getCharacterNameChoice'],
    ctx: RouterContext
  ): Promise<RouterOutput['getCharacterNameChoice']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.getCharacterNameChoice', input.characterNameChoiceId);

    const characterNameChoice = await ctx.app.model.CharacterNameChoice.findById(input.characterNameChoiceId)
      .lean()
      .exec();
    if (!characterNameChoice) throw new Error('CharacterNameChoice not found');

    return characterNameChoice as CharacterNameChoice;
  }

  async createCharacterNameChoice(
    input: RouterInput['createCharacterNameChoice'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCharacterNameChoice']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.createCharacterNameChoice', input);

    const characterNameChoice = await ctx.app.model.CharacterNameChoice.create(input);
    return characterNameChoice as CharacterNameChoice;
  }

  async updateCharacterNameChoice(
    input: RouterInput['updateCharacterNameChoice'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCharacterNameChoice']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.updateCharacterNameChoice', input.characterNameChoiceId, input.data);

    const updatedCharacterNameChoice = await ctx.app.model.CharacterNameChoice.findByIdAndUpdate(
      input.characterNameChoiceId,
      input.data,
      {
        new: true,
      }
    )
      .lean()
      .exec();
    if (!updatedCharacterNameChoice) throw new Error('CharacterNameChoice update failed');

    return updatedCharacterNameChoice as CharacterNameChoice;
  }

  async getCharacterPersonality(
    input: RouterInput['getCharacterPersonality'],
    ctx: RouterContext
  ): Promise<RouterOutput['getCharacterPersonality']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.getCharacterPersonality', input.characterPersonalityId);

    const characterPersonality = await ctx.app.model.CharacterPersonality.findById(input.characterPersonalityId)
      .lean()
      .exec();
    if (!characterPersonality) throw new Error('CharacterPersonality not found');

    return characterPersonality as CharacterPersonality;
  }

  async createCharacterPersonality(
    input: RouterInput['createCharacterPersonality'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCharacterPersonality']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.createCharacterPersonality', input);

    const characterPersonality = await ctx.app.model.CharacterPersonality.create(input);
    return characterPersonality as CharacterPersonality;
  }

  async updateCharacterPersonality(
    input: RouterInput['updateCharacterPersonality'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCharacterPersonality']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.updateCharacterPersonality', input.characterPersonalityId, input.data);

    const updatedCharacterPersonality = await ctx.app.model.CharacterPersonality.findByIdAndUpdate(
      input.characterPersonalityId,
      input.data,
      {
        new: true,
      }
    )
      .lean()
      .exec();
    if (!updatedCharacterPersonality) throw new Error('CharacterPersonality update failed');

    return updatedCharacterPersonality as CharacterPersonality;
  }

  async getCharacterRace(
    input: RouterInput['getCharacterRace'],
    ctx: RouterContext
  ): Promise<RouterOutput['getCharacterRace']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.getCharacterRace', input.characterRaceId);

    const characterRace = await ctx.app.model.CharacterRace.findById(input.characterRaceId).lean().exec();
    if (!characterRace) throw new Error('CharacterRace not found');

    return characterRace as CharacterRace;
  }

  async createCharacterRace(
    input: RouterInput['createCharacterRace'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCharacterRace']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.createCharacterRace', input);

    const characterRace = await ctx.app.model.CharacterRace.create(input);
    return characterRace as CharacterRace;
  }

  async updateCharacterRace(
    input: RouterInput['updateCharacterRace'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCharacterRace']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.updateCharacterRace', input.characterRaceId, input.data);

    const updatedCharacterRace = await ctx.app.model.CharacterRace.findByIdAndUpdate(
      input.characterRaceId,
      input.data,
      {
        new: true,
      }
    )
      .lean()
      .exec();
    if (!updatedCharacterRace) throw new Error('CharacterRace update failed');

    return updatedCharacterRace as CharacterRace;
  }

  async getCharacterTitle(
    input: RouterInput['getCharacterTitle'],
    ctx: RouterContext
  ): Promise<RouterOutput['getCharacterTitle']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.getCharacterTitle', input.characterTitleId);

    const characterTitle = await ctx.app.model.CharacterTitle.findById(input.characterTitleId).lean().exec();
    if (!characterTitle) throw new Error('CharacterTitle not found');

    return characterTitle as CharacterTitle;
  }

  async createCharacterTitle(
    input: RouterInput['createCharacterTitle'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCharacterTitle']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.createCharacterTitle', input);

    const characterTitle = await ctx.app.model.CharacterTitle.create(input);
    return characterTitle as CharacterTitle;
  }

  async updateCharacterTitle(
    input: RouterInput['updateCharacterTitle'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCharacterTitle']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.updateCharacterTitle', input.characterTitleId, input.data);

    const updatedCharacterTitle = await ctx.app.model.CharacterTitle.findByIdAndUpdate(
      input.characterTitleId,
      input.data,
      {
        new: true,
      }
    )
      .lean()
      .exec();
    if (!updatedCharacterTitle) throw new Error('CharacterTitle update failed');

    return updatedCharacterTitle as CharacterTitle;
  }

  async getCharacterType(
    input: RouterInput['getCharacterType'],
    ctx: RouterContext
  ): Promise<RouterOutput['getCharacterType']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.getCharacterType', input.characterTypeId);

    const characterType = await ctx.app.model.CharacterType.findById(input.characterTypeId).lean().exec();
    if (!characterType) throw new Error('CharacterType not found');

    return characterType as CharacterType;
  }

  async createCharacterType(
    input: RouterInput['createCharacterType'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCharacterType']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.createCharacterType', input);

    const characterType = await ctx.app.model.CharacterType.create(input);
    return characterType as CharacterType;
  }

  async updateCharacterType(
    input: RouterInput['updateCharacterType'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCharacterType']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Character.Service.updateCharacterType', input.characterTypeId, input.data);

    const updatedCharacterType = await ctx.app.model.CharacterType.findByIdAndUpdate(
      input.characterTypeId,
      input.data,
      {
        new: true,
      }
    )
      .lean()
      .exec();
    if (!updatedCharacterType) throw new Error('CharacterType update failed');

    return updatedCharacterType as CharacterType;
  }
}
