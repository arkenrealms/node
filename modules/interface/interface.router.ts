import { z as zod } from 'zod';
import { initTRPC, TRPCError } from '@trpc/server';
import type { Context, IApp } from '../../types';
import { Query } from './interface.schema';

export const z = zod;
export const t = initTRPC.context<Context>().create();
export const router = t.router;
export const procedure = t.procedure;
export const createCallerFactory = t.createCallerFactory;

export const createRouter = () =>
  router({
    interface: procedure
      .input(z.object({ query: Query }))
      .query(async ({ input, ctx }) => ctx.app.service.Interface.interface(input, ctx)),
    interfaces: procedure
      .input(z.object({ query: Query }))
      .query(async ({ input, ctx }) => ctx.app.service.Interface.interfaces(input, ctx)),
    interfaceGroups: procedure
      .input(z.object({ query: Query }))
      .query(async ({ input, ctx }) => ctx.app.service.Interface.interfaces(input, ctx)),
    updateInterface: procedure
      .input(z.object({ query: Query }))
      .mutation(async ({ input, ctx }) => ctx.app.service.Interface.updateInterface(input, ctx)),
    publishInterface: procedure
      .input(z.object({ query: Query }))
      .mutation(async ({ input, ctx }) => ctx.app.service.Interface.updateInterface(input, ctx)),
    deleteInterface: procedure
      .input(z.object({ query: Query }))
      .mutation(async ({ input, ctx }) => ctx.app.service.Interface.updateInterface(input, ctx)),
    deactivateInterface: procedure
      .input(z.object({ query: Query }))
      .mutation(async ({ input, ctx }) => ctx.app.service.Interface.updateInterface(input, ctx)),
    createInterfaceDraft: procedure
      .input(z.object({ query: Query }))
      .mutation(async ({ input, ctx }) => ctx.app.service.Interface.updateInterface(input, ctx)),
    resetInterfaceDraft: procedure
      .input(z.object({ query: Query }))
      .mutation(async ({ input, ctx }) => ctx.app.service.Interface.updateInterface(input, ctx)),
    acceptInterfaceSubmission: procedure
      .input(z.object({ query: Query }))
      .mutation(async ({ input, ctx }) => ctx.app.service.Interface.updateInterface(input, ctx)),
  });
