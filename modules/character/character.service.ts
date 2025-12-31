// arken/packages/node/modules/character/character.service.ts
//
import mongoose from 'mongoose';
import keccak256 from 'keccak256';
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
import { getNextSeq, hashEvents } from '../../util/mongo';
import { updateLeafWithProof } from '../../util/merkle';
import { getFilter } from '../../util/api';

const TREE_DEPTH = 16;
const TREE_SIZE = 1 << TREE_DEPTH;
const LOCAL_SEER_ID = process.env.SEER_NODE_WALLET ?? 'seer-node-1';

// -------------------------------
// Inventory Sync Standard
// -------------------------------
export type InventorySyncOp =
  | { op: 'add'; itemKey: string; qty?: number }
  | { op: 'remove'; itemKey: string; qty?: number };

export type SyncCharacterInventoryPayload =
  | {
      characterId: string;
      mode: 'patch';
      ops: InventorySyncOp[];
      reason?: string;
    }
  | {
      characterId: string;
      mode: 'refresh';
      reason?: string;
    };

// Deterministic mapping from (kind, recordId) -> Merkle leaf index
function computeLeafIndex(kind: string, recordId: string): number {
  const h = keccak256(`${kind}:${recordId}`).toString('hex');
  const first8 = h.slice(0, 8); // 32 bits
  const n = parseInt(first8, 16);
  return n % TREE_SIZE;
}

// -------------------------------
// Helpers
// -------------------------------
async function resolveCharacterForRequest(ctx: RouterContext, input: any) {
  const filter = getFilter(input);
  const explicitId = filter?.characterId || filter?.id;

  // Prefer explicit characterId if provided
  if (explicitId) {
    const character = await ctx.app.model.Character.findById(explicitId);
    if (!character) throw new Error('Character not found');
    return character;
  }

  // Otherwise, fall back to "active" character = profile.characters[0]
  if (!ctx.client?.profile?.id) throw new Error('No profile');

  const profile = await ctx.app.model.Profile.findById(ctx.client.profile.id).populate('characters').exec();
  if (!profile) throw new Error('Profile not found');

  const character = profile.characters?.[0];
  if (!character) throw new Error('No character');

  // populated doc may be a mongoose doc already; if not, refetch
  const id = (character as any).id || (character as any)._id;
  const doc = await ctx.app.model.Character.findById(id);
  if (!doc) throw new Error('Character not found');

  return doc;
}

function ensureInventoryShape(character: any) {
  if (!character.inventory) character.inventory = [{ items: [] }];
  if (!character.inventory[0]) character.inventory[0] = { items: [] };
  if (!Array.isArray(character.inventory[0].items)) character.inventory[0].items = [];

  for (const item of character.inventory[0].items) {
    console.log('item', item.itemId, item.itemId.valueOf());
    item.itemId = item.itemId.valueOf();
  }
}

// -------------------------------
// Service
// -------------------------------
export class Service {
  /**
   * Sets the "active" character for the current profile.
   *
   * Convention used across codebase:
   * - profile.characters[0] is treated as active character
   *
   * Implementation:
   * - verify character exists and belongs to the caller
   * - reorder profile.characters so the selected id is first
   */
  /**
   * Sets the active character for the current profile.
   *
   * Stores:
   *   profile.data.activeCharacterId = <characterId>
   *
   * Does NOT reorder profile.characters.
   */
  async setActiveCharacter(input: { characterId: string }, ctx: RouterContext): Promise<{ characterId: string }> {
    if (!ctx.client?.profile) throw new ARXError('UNAUTHORIZED');
    if (!input?.characterId) throw new ARXError('NO_INPUT');

    const profileId = ctx.client.profile.id;
    const characterId = String(input.characterId);

    // Ensure character exists
    const character = await ctx.app.model.Character.findById(characterId).lean().exec();
    if (!character) throw new Error('Character not found');

    // Ensure ownership (saveCharacters sets ownerId = profile.id)
    if (String((character as any).ownerId || '') !== String(profileId)) {
      throw new ARXError('FORBIDDEN');
    }

    // Load profile and set pointer
    const profile = await ctx.app.model.Profile.findById(profileId).exec();
    if (!profile) throw new Error('Profile not found');

    // ensure data shape
    (profile as any).data =
      (profile as any).data && typeof (profile as any).data === 'object' ? (profile as any).data : {};
    (profile as any).data.activeCharacterId = characterId;

    profile.markModified('data');
    await profile.save();

    ctx.client.profile.data = profile.data;

    await ctx.client.emit.sync.mutate({
      kind: 'invalidate',
      targets: ['profile.me', 'trek.getState', 'character.inventory'],
      reason: 'activeCharacterChanged',
    });

    return { characterId };
  }

  /**
   * Inventory: returns canonical inventory snapshot.
   *
   * This is the "full refresh" primitive; client can call this any time it needs to converge.
   *
   * NOTE: Uses the same filter semantics as other character routes:
   * - if input includes characterId/id, we use that
   * - otherwise we default to the user's first character
   */
  async getCharacterInventory(
    input: any, // intentionally loose so you can add RouterInput/Output wiring later
    ctx: RouterContext
  ): Promise<{ characterId: string; inventory: any }> {
    if (!ctx.client?.profile) throw new ARXError('UNAUTHORIZED');

    const character = await resolveCharacterForRequest(ctx, input);
    ensureInventoryShape(character);

    return { characterId: character.id.toString(), inventory: character.inventory };
  }

  /**
   * Inventory: client convergence endpoint + "standard" payload.
   *
   * - mode=patch: client is telling us how it applied a local patch (add/remove)
   * - mode=refresh: client requests canonical snapshot (recommended fallback)
   *
   * For now, this route simply returns the canonical snapshot so the client can converge.
   * (Server-authoritative changes should still be persisted on the Character document by the
   * gameplay systems, and then the UI can call this route or respond to emitted events.)
   */
  async syncCharacterInventory(
    input: SyncCharacterInventoryPayload,
    ctx: RouterContext
  ): Promise<{ characterId: string; inventory: any }> {
    if (!ctx.client?.profile) throw new ARXError('UNAUTHORIZED');
    if (!input?.characterId) throw new ARXError('NO_INPUT');

    const character = await ctx.app.model.Character.findById(input.characterId);
    if (!character) throw new Error('Character not found');

    ensureInventoryShape(character);

    // Return canonical snapshot (client can always converge from this)
    return { characterId: character.id.toString(), inventory: character.inventory };
  }

  /**
   * Optional server -> client push helper you can call from other services.
   *
   * Usage:
   *   await ctx.client.emit.syncCharacterInventory.mutate({ ...payload })
   */
  async emitInventorySync(ctx: RouterContext, payload: SyncCharacterInventoryPayload) {
    // You asked for this exact style: ctx.client.emit.SOMETHING.mutate(DATA_HERE)
    try {
      await (ctx.client as any)?.emit?.syncCharacterInventory?.mutate?.(payload);
    } catch (e) {
      // never crash gameplay because a websocket push failed
      console.warn('Character.Service.emitInventorySync failed', e);
    }
  }

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

  async getCharacterData(
    input: RouterInput['getCharacter'],
    ctx: RouterContext
  ): Promise<RouterOutput['getCharacter']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Character.Service.getCharacterData', input);

    const filter = getFilter(input);
    // @ts-ignore
    const character = await ctx.app.model.Character.findOne(filter).asJSON();
    if (!character) throw new Error('Character not found');

    return character.data;
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
    if (!input || !Array.isArray(input) || input.length === 0) {
      throw new ARXError('NO_INPUT');
    }

    const items: any[] = [];
    const events: any[] = [];
    const payloads: any[] = [];

    for (const raw of input) {
      // Allow id or _id; do not mutate original
      const { id, _id, ...rest } = raw.data as any;

      const previousId: string | mongoose.Types.ObjectId | undefined =
        typeof id === 'string' || id instanceof mongoose.Types.ObjectId
          ? (id as any)
          : _id instanceof mongoose.Types.ObjectId || typeof _id === 'string'
          ? (_id as any)
          : undefined;

      // Scope by applicationId if the Character model uses applicationId filters
      if (ctx.app?.model?.Character?.filters?.applicationId && !rest.applicationId) {
        rest.applicationId = ctx.app.model.Character.filters.applicationId;
      }

      if (!ctx.client.profile.id) {
        throw new Error('No profile');
      }

      rest.ownerId = ctx.client.profile.id;

      // Derive key from name if missing
      if (!rest.key && typeof rest.name === 'string') {
        rest.key = String(rest.name)
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-');
      }

      // IMMUTABLE: always create a new Character document
      const doc = await ctx.app.model.Character.create(rest);
      const saved = doc?.toObject?.() ?? doc;

      items.push(saved);

      // Logical operation type (even though storage is immutable)
      const op: 'create' | 'update' = previousId ? 'update' : 'create';

      const event = {
        kind: 'Character',
        operation: op,
        recordId: saved.id.toString(), // new doc id
        applicationId: saved.applicationId,
        payload: {
          ...saved,
          previousId: previousId ? previousId.toString() : null,
        },
        timestamp: new Date(),
      };

      events.push(event);

      // -----------------------------------------------------------------------
      // Merkle + zkSNARK for this Character
      // -----------------------------------------------------------------------

      try {
        const leafIndex = computeLeafIndex('Character', saved.id.toString());

        // Poseidon-based Merkle update + zkSNARK proof using UpdateLeaf(16)
        const merkleUpdate = await updateLeafWithProof(leafIndex, {
          kind: 'Character',
          id: saved.id.toString(),
          status: saved.status,
          key: saved.key,
          applicationId: saved.applicationId,
        });

        // Build SeerPayload (one per character for now; you can batch later)
        payloads.push({
          fromSeer: LOCAL_SEER_ID,
          applicationId: saved.applicationId,
          events: [event],
          eventsHash: hashEvents([event]),
          merkleRoot: merkleUpdate.newRoot,
          proof: merkleUpdate.proof,
          publicSignals: merkleUpdate.publicSignals,
        });
      } catch (e) {
        console.log('Merkle error when creating character');
      }
    }

    // -------------------------------------------------------------------------
    // Persist SeerEvents with monotonic seq
    // -------------------------------------------------------------------------

    if (events.length > 0) {
      const lastEvent = await ctx.app.model.SeerEvent.findOne().sort({ seq: -1 }).lean().exec();
      const baseSeq = (lastEvent?.seq ?? 0) + 1;

      const docsToInsert = events.map((ev, idx) => ({
        ...ev,
        seq: baseSeq + idx,
      }));

      await ctx.app.model.SeerEvent.create(docsToInsert);
    }

    // -------------------------------------------------------------------------
    // Persist SeerPayloads for cross-seer sync
    // -------------------------------------------------------------------------

    if (payloads.length > 0) {
      await ctx.app.model.SeerPayload.create(payloads);
    }

    const total = await ctx.app.model.Character.find().countDocuments().exec();

    return { items, total };
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
