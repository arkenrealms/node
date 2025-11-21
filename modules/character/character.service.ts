import mongoose from 'mongoose';
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
import { ARXError } from '../../util/rpc';
import { getFilter } from '../../util/api';

export class Service {
  async exchangeCharacterItem(
    input: RouterInput['exchangeCharacterItem'],
    ctx: RouterContext
  ): Promise<RouterOutput['exchangeCharacterItem']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.exchangeCharacterItem', input);

    const filter = getFilter(input);
    const character = await ctx.app.model.Character.findById(filter.characterId);
    if (!character) throw new Error('Character not found');

    // find the item on character
    // see if the current player has the required item
    // do the exchange

    return character as Character;
  }

  async getCharacter(input: RouterInput['getCharacter'], ctx: RouterContext): Promise<RouterOutput['getCharacter']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.getCharacter', input);

    const filter = getFilter(input);
    // @ts-ignore
    const character = await ctx.app.model.Character.findOne(filter).asJSON();
    if (!character) throw new Error('Character not found');
    console.log('charactercharactercharacter', character);
    return character as Character;
  }

  async getCharacters(input: RouterInput['getCharacters'], ctx: RouterContext): Promise<RouterOutput['getCharacters']> {
    if (!input) throw new ARXError('NO_INPUT');

    const filter = getFilter(input);

    const limit = input.limit ?? 50;
    const skip = input.skip ?? 0;

    const [items, total] = await Promise.all([
      // @ts-ignore
      ctx.app.model.Character.find(filter).skip(skip).limit(limit).asJSON(),
      ctx.app.model.Character.find(filter).countDocuments().exec(),
    ]);

    return { items, total };
  }

  async getCharacterAbility(
    input: RouterInput['getCharacterAbility'],
    ctx: RouterContext
  ): Promise<RouterOutput['getCharacterAbility']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.getCharacterAbility', input);

    const filter = getFilter(input);
    const characterAbility = await ctx.app.model.CharacterAbility.findById(filter.id).lean().exec();
    if (!characterAbility) throw new Error('CharacterAbility not found');

    return characterAbility as CharacterAbility;
  }

  async saveCharacters(
    input: RouterInput['saveCharacters'],
    ctx: RouterContext
  ): Promise<RouterOutput['saveCharacters']> {
    // if (!ctx.client?.roles?.includes('admin')) throw new Error('Not authorized');
    // current profile id = ctx.client.profile.id
    // current application = ctx.application.id

    if (!input || !Array.isArray(input) || input.length === 0) throw new ARXError('NO_INPUT');

    const items: any[] = [];

    for (const raw of input) {
      // Allow id or _id; do not mutate original
      const { id, _id, ...rest } = raw as any;
      const existingId: string | mongoose.Types.ObjectId | undefined =
        typeof id === 'string' || id instanceof mongoose.Types.ObjectId
          ? (id as any)
          : _id instanceof mongoose.Types.ObjectId || typeof _id === 'string'
          ? (_id as any)
          : undefined;

      // Make sure we scope by applicationId if your models enforce it
      // (many of your models do this via filters.applicationId)
      if (ctx.app?.model?.Character?.filters?.applicationId && !rest.applicationId) {
        rest.applicationId = ctx.app.model.Character.filters.applicationId;
      }

      // Optional: default/normalize key from name if missing
      if (!rest.key && typeof rest.name === 'string') {
        rest.key = String(rest.name)
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-');
      }

      let saved: any;

      if (existingId) {
        // applyJsonToDoc(ctx.app.model.Character.schema, doc, jsonFromClient);

        // Update existing
        saved = await ctx.app.model.Character.findByIdAndUpdate(
          existingId,
          { $set: rest },
          { new: true, upsert: true, setDefaultsOnInsert: true }
        )
          .lean()
          .exec();
      } else {
        // Create new
        saved = await ctx.app.model.Character.create(rest);
        // If you prefer consistent lean objects:
        saved = saved?.toObject?.() ?? saved;
      }

      items.push(saved);
    }

    const total = await ctx.app.model.Character.find().countDocuments().exec();

    return { items, total };
    // return out as any; // RouterOutput['saveCharacters']
  }

  async createCharacterAbility(
    input: RouterInput['createCharacterAbility'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCharacterAbility']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.createCharacterAbility', input);

    const characterAbility = await ctx.app.model.CharacterAbility.create(input);
    return characterAbility as CharacterAbility;
  }

  async updateCharacter(
    input: RouterInput['updateCharacter'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCharacter']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.updateCharacter', input);

    const filter = getFilter(input);
    const updatedCharacter = await ctx.app.model.Character.findByIdAndUpdate(filter.id, input.data, {
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
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.updateCharacterAbility', input);

    const filter = getFilter(input);
    const updatedCharacterAbility = await ctx.app.model.CharacterAbility.findByIdAndUpdate(filter.id, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedCharacterAbility) throw new Error('CharacterAbility update failed');

    return updatedCharacterAbility as CharacterAbility;
  }

  async getCharacterAttribute(
    input: RouterInput['getCharacterAttribute'],
    ctx: RouterContext
  ): Promise<RouterOutput['getCharacterAttribute']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.getCharacterAttribute', input);

    const filter = getFilter(input);
    const characterAttribute = await ctx.app.model.CharacterAttribute.findById(filter.id).lean().exec();
    if (!characterAttribute) throw new Error('CharacterAttribute not found');

    return characterAttribute as CharacterAttribute;
  }

  async createCharacterAttribute(
    input: RouterInput['createCharacterAttribute'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCharacterAttribute']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.createCharacterAttribute', input);

    const characterAttribute = await ctx.app.model.CharacterAttribute.create(input);
    return characterAttribute as CharacterAttribute;
  }

  async updateCharacterAttribute(
    input: RouterInput['updateCharacterAttribute'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCharacterAttribute']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.updateCharacterAttribute', input);

    const filter = getFilter(input);
    const updatedCharacterAttribute = await ctx.app.model.CharacterAttribute.findByIdAndUpdate(filter.id, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedCharacterAttribute) throw new Error('CharacterAttribute update failed');

    return updatedCharacterAttribute as CharacterAttribute;
  }

  async getCharacterClass(
    input: RouterInput['getCharacterClass'],
    ctx: RouterContext
  ): Promise<RouterOutput['getCharacterClass']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.getCharacterClass', input);

    const characterClass = await ctx.app.model.CharacterClass.findById(getFilter(input).id).lean().exec();
    if (!characterClass) throw new Error('CharacterClass not found');

    return characterClass as CharacterClass;
  }

  async createCharacterClass(
    input: RouterInput['createCharacterClass'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCharacterClass']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.createCharacterClass', input);

    const characterClass = await ctx.app.model.CharacterClass.create(input);
    return characterClass as CharacterClass;
  }

  async updateCharacterClass(
    input: RouterInput['updateCharacterClass'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCharacterClass']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.updateCharacterClass', input);

    const updatedCharacterClass = await ctx.app.model.CharacterClass.findByIdAndUpdate(
      getFilter(input).id,
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
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.getCharacterFaction', input);

    const characterFaction = await ctx.app.model.CharacterFaction.findOne(getFilter(input)).lean().exec();
    if (!characterFaction) throw new Error('CharacterFaction not found');

    return characterFaction as CharacterFaction;
  }

  async getCharacterFactions(
    input: RouterInput['getCharacterFactions'],
    ctx: RouterContext
  ): Promise<RouterOutput['getCharacterFactions']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.getCharacterFactions', input);

    const characterFactions = await ctx.app.model.CharacterFaction.find(getFilter(input)).lean().exec();

    return characterFactions as CharacterFaction[];
  }

  async createCharacterFaction(
    input: RouterInput['createCharacterFaction'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCharacterFaction']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.createCharacterFaction', input);

    const characterFaction = await ctx.app.model.CharacterFaction.create(input);
    return characterFaction as CharacterFaction;
  }

  async updateCharacterFaction(
    input: RouterInput['updateCharacterFaction'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCharacterFaction']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.updateCharacterFaction', input);

    const updatedCharacterFaction = await ctx.app.model.CharacterFaction.findByIdAndUpdate(
      getFilter(input).id,
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
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.getCharacterGender', input);

    const characterGender = await ctx.app.model.CharacterGender.findById(getFilter(input).id).lean().exec();
    if (!characterGender) throw new Error('CharacterGender not found');

    return characterGender as CharacterGender;
  }

  async createCharacterGender(
    input: RouterInput['createCharacterGender'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCharacterGender']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.createCharacterGender', input);

    const characterGender = await ctx.app.model.CharacterGender.create(input);
    return characterGender as CharacterGender;
  }

  async updateCharacterGender(
    input: RouterInput['updateCharacterGender'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCharacterGender']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.updateCharacterGender', input);

    const updatedCharacterGender = await ctx.app.model.CharacterGender.findByIdAndUpdate(
      getFilter(input).id,
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
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.getCharacterNameChoice', input);

    const characterNameChoice = await ctx.app.model.CharacterNameChoice.findById(getFilter(input).id).lean().exec();
    if (!characterNameChoice) throw new Error('CharacterNameChoice not found');

    return characterNameChoice as CharacterNameChoice;
  }

  async createCharacterNameChoice(
    input: RouterInput['createCharacterNameChoice'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCharacterNameChoice']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.createCharacterNameChoice', input);

    const characterNameChoice = await ctx.app.model.CharacterNameChoice.create(input);
    return characterNameChoice as CharacterNameChoice;
  }

  async updateCharacterNameChoice(
    input: RouterInput['updateCharacterNameChoice'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCharacterNameChoice']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.updateCharacterNameChoice', input);

    const updatedCharacterNameChoice = await ctx.app.model.CharacterNameChoice.findByIdAndUpdate(
      getFilter(input).id,
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
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.getCharacterPersonality', input);

    const characterPersonality = await ctx.app.model.CharacterPersonality.findById(getFilter(input).id).lean().exec();
    if (!characterPersonality) throw new Error('CharacterPersonality not found');

    return characterPersonality as CharacterPersonality;
  }

  async createCharacterPersonality(
    input: RouterInput['createCharacterPersonality'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCharacterPersonality']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.createCharacterPersonality', input);

    const characterPersonality = await ctx.app.model.CharacterPersonality.create(input);
    return characterPersonality as CharacterPersonality;
  }

  async updateCharacterPersonality(
    input: RouterInput['updateCharacterPersonality'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCharacterPersonality']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.updateCharacterPersonality', input);

    const updatedCharacterPersonality = await ctx.app.model.CharacterPersonality.findByIdAndUpdate(
      getFilter(input).id,
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
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.getCharacterRace', input);

    const characterRace = await ctx.app.model.CharacterRace.findById(getFilter(input).id).lean().exec();
    if (!characterRace) throw new Error('CharacterRace not found');

    return characterRace as CharacterRace;
  }

  async createCharacterRace(
    input: RouterInput['createCharacterRace'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCharacterRace']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.createCharacterRace', input);

    const characterRace = await ctx.app.model.CharacterRace.create(input);
    return characterRace as CharacterRace;
  }

  async updateCharacterRace(
    input: RouterInput['updateCharacterRace'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCharacterRace']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.updateCharacterRace', input);

    const updatedCharacterRace = await ctx.app.model.CharacterRace.findByIdAndUpdate(getFilter(input).id, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedCharacterRace) throw new Error('CharacterRace update failed');

    return updatedCharacterRace as CharacterRace;
  }

  async getCharacterTitle(
    input: RouterInput['getCharacterTitle'],
    ctx: RouterContext
  ): Promise<RouterOutput['getCharacterTitle']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.getCharacterTitle', input);

    const characterTitle = await ctx.app.model.CharacterTitle.findById(getFilter(input).id).lean().exec();
    if (!characterTitle) throw new Error('CharacterTitle not found');

    return characterTitle as CharacterTitle;
  }

  async createCharacterTitle(
    input: RouterInput['createCharacterTitle'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCharacterTitle']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.createCharacterTitle', input);

    const characterTitle = await ctx.app.model.CharacterTitle.create(input);
    return characterTitle as CharacterTitle;
  }

  async updateCharacterTitle(
    input: RouterInput['updateCharacterTitle'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCharacterTitle']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.updateCharacterTitle', input);

    const updatedCharacterTitle = await ctx.app.model.CharacterTitle.findByIdAndUpdate(
      getFilter(input).id,
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
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.getCharacterType', input);

    const characterType = await ctx.app.model.CharacterType.findById(getFilter(input).id).lean().exec();
    if (!characterType) throw new Error('CharacterType not found');

    return characterType as CharacterType;
  }

  async createCharacterType(
    input: RouterInput['createCharacterType'],
    ctx: RouterContext
  ): Promise<RouterOutput['createCharacterType']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.createCharacterType', input);

    const characterType = await ctx.app.model.CharacterType.create(input);
    return characterType as CharacterType;
  }

  async updateCharacterType(
    input: RouterInput['updateCharacterType'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateCharacterType']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.updateCharacterType', input);

    const updatedCharacterType = await ctx.app.model.CharacterType.findByIdAndUpdate(getFilter(input).id, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedCharacterType) throw new Error('CharacterType update failed');

    return updatedCharacterType as CharacterType;
  }
}
