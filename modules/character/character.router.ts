// module/character.router.ts

import { z as zod } from 'zod';
import { initTRPC, inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { customErrorFormatter, hasRole } from '../../util/rpc';
import type { RouterContext } from '../../types';
import {
  Character,
  CharacterAbility,
  CharacterAttribute,
  CharacterType,
  CharacterClass,
  CharacterRace,
  CharacterGender,
  CharacterPersonality,
  CharacterTitle,
  CharacterFaction,
  CharacterNameChoice,
} from './character.schema';
import { Query, getQueryInput } from '../../schema';

export const z = zod;
export const t = initTRPC.context<RouterContext>().create();
export const router = t.router;
export const procedure = t.procedure;

export const createRouter = () =>
  router({
    getCharacter: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ characterId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Character.getCharacter as any)(input, ctx)),

    createCharacter: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Character)
      .mutation(({ input, ctx }) => (ctx.app.service.Character.createCharacter as any)(input, ctx)),

    updateCharacter: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ characterId: z.string(), data: Character.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Character.updateCharacter as any)(input, ctx)),

    getCharacterAbility: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ characterAbilityId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Character.getCharacterAbility as any)(input, ctx)),

    createCharacterAbility: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(CharacterAbility)
      .mutation(({ input, ctx }) => (ctx.app.service.Character.createCharacterAbility as any)(input, ctx)),

    updateCharacterAbility: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ characterAbilityId: z.string(), data: CharacterAbility.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Character.updateCharacterAbility as any)(input, ctx)),

    getCharacterAttribute: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ characterAttributeId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Character.getCharacterAttribute as any)(input, ctx)),

    createCharacterAttribute: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(CharacterAttribute)
      .mutation(({ input, ctx }) => (ctx.app.service.Character.createCharacterAttribute as any)(input, ctx)),

    updateCharacterAttribute: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ characterAttributeId: z.string(), data: CharacterAttribute.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Character.updateCharacterAttribute as any)(input, ctx)),

    getCharacterType: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ characterTypeId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Character.getCharacterType as any)(input, ctx)),

    createCharacterType: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(CharacterType)
      .mutation(({ input, ctx }) => (ctx.app.service.Character.createCharacterType as any)(input, ctx)),

    updateCharacterType: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ characterTypeId: z.string(), data: CharacterType.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Character.updateCharacterType as any)(input, ctx)),

    getCharacterClass: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ characterClassId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Character.getCharacterClass as any)(input, ctx)),

    createCharacterClass: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(CharacterClass)
      .mutation(({ input, ctx }) => (ctx.app.service.Character.createCharacterClass as any)(input, ctx)),

    updateCharacterClass: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ characterClassId: z.string(), data: CharacterClass.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Character.updateCharacterClass as any)(input, ctx)),

    getCharacterRace: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ characterRaceId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Character.getCharacterRace as any)(input, ctx)),

    createCharacterRace: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(CharacterRace)
      .mutation(({ input, ctx }) => (ctx.app.service.Character.createCharacterRace as any)(input, ctx)),

    updateCharacterRace: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ characterRaceId: z.string(), data: CharacterRace.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Character.updateCharacterRace as any)(input, ctx)),

    getCharacterGender: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ characterGenderId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Character.getCharacterGender as any)(input, ctx)),

    createCharacterGender: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(CharacterGender)
      .mutation(({ input, ctx }) => (ctx.app.service.Character.createCharacterGender as any)(input, ctx)),

    updateCharacterGender: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ characterGenderId: z.string(), data: CharacterGender.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Character.updateCharacterGender as any)(input, ctx)),

    getCharacterPersonality: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ characterPersonalityId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Character.getCharacterPersonality as any)(input, ctx)),

    createCharacterPersonality: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(CharacterPersonality)
      .mutation(({ input, ctx }) => (ctx.app.service.Character.createCharacterPersonality as any)(input, ctx)),

    updateCharacterPersonality: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ characterPersonalityId: z.string(), data: CharacterPersonality.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Character.updateCharacterPersonality as any)(input, ctx)),

    getCharacterTitle: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ characterTitleId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Character.getCharacterTitle as any)(input, ctx)),

    createCharacterTitle: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(CharacterTitle)
      .mutation(({ input, ctx }) => (ctx.app.service.Character.createCharacterTitle as any)(input, ctx)),

    updateCharacterTitle: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ characterTitleId: z.string(), data: CharacterTitle.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Character.updateCharacterTitle as any)(input, ctx)),

    getCharacterFaction: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(getQueryInput(CharacterFaction))
      .query(({ input, ctx }) => (ctx.app.service.Character.getCharacterFaction as any)(input, ctx)),

    getCharacterFactions: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({}))
      .query(({ input, ctx }) => (ctx.app.service.Character.getCharacterFactions as any)(input, ctx)),

    createCharacterFaction: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(CharacterFaction)
      .mutation(({ input, ctx }) => (ctx.app.service.Character.createCharacterFaction as any)(input, ctx)),

    updateCharacterFaction: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ characterFactionId: z.string(), data: CharacterFaction.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Character.updateCharacterFaction as any)(input, ctx)),

    getCharacterNameChoice: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ characterNameChoiceId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Character.getCharacterNameChoice as any)(input, ctx)),

    createCharacterNameChoice: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(CharacterNameChoice)
      .mutation(({ input, ctx }) => (ctx.app.service.Character.createCharacterNameChoice as any)(input, ctx)),

    updateCharacterNameChoice: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ characterNameChoiceId: z.string(), data: CharacterNameChoice.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Character.updateCharacterNameChoice as any)(input, ctx)),
  });

export type Router = ReturnType<typeof createRouter>;
export type RouterInput = inferRouterInputs<Router>;
export type RouterOutput = inferRouterOutputs<Router>;
