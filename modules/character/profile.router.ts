import { z as zod } from 'zod';
import { initTRPC } from '@trpc/server';
import type { Context } from '../../types';
import { Service } from './character.service';

export const z = zod;
export const t = initTRPC.context<Context>().create();
export const router = t.router;
export const procedure = t.procedure;

const characterService = new Service();

export const createRouter = () =>
  router({
    getCharacter: procedure.input(z.object({ characterId: z.string() })).query(async ({ input, ctx }) => {
      return characterService.getCharacter(input, ctx);
    }),

    addCharacterAbility: procedure
      .input(z.object({ characterId: z.string(), abilityData: z.object({}).passthrough() }))
      .mutation(async ({ input, ctx }) => {
        return characterService.addCharacterAbility(input, ctx);
      }),

    addCharacterAttribute: procedure
      .input(z.object({ characterId: z.string(), attributeData: z.object({}).passthrough() }))
      .mutation(async ({ input, ctx }) => {
        return characterService.addCharacterAttribute(input, ctx);
      }),

    updateCharacter: procedure
      .input(z.object({ characterId: z.string(), data: z.object({}).passthrough() }))
      .mutation(async ({ input, ctx }) => {
        return characterService.updateCharacter(input, ctx);
      }),
  });
