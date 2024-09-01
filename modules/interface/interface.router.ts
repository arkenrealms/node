import { z as zod } from 'zod';
import { initTRPC, inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { customErrorFormatter, hasRole } from '../../util/rpc';
import type { RouterContext } from '../../types';
import { Interface, InterfaceGroup, InterfaceComponent } from './interface.schema';

export const z = zod;
export const t = initTRPC.context<RouterContext>().create();
export const router = t.router;
export const procedure = t.procedure;

export const createRouter = () =>
  router({
    // Interface Procedures
    getInterface: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ query: z.object({ id: z.string() }) }))
      .query(({ input, ctx }) => (ctx.app.service.Interface.getInterface as any)(input, ctx)),

    createInterface: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(Interface)
      .mutation(({ input, ctx }) => (ctx.app.service.Interface.createInterface as any)(input, ctx)),

    updateInterface: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(z.object({ query: z.object({ id: z.string(), data: Interface.partial() }) }))
      .mutation(({ input, ctx }) => (ctx.app.service.Interface.updateInterface as any)(input, ctx)),

    deleteInterface: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(z.object({ query: z.object({ id: z.string() }) }))
      .mutation(({ input, ctx }) => (ctx.app.service.Interface.deleteInterface as any)(input, ctx)),

    // InterfaceGroup Procedures
    getInterfaceGroup: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ query: z.object({ id: z.string() }) }))
      .query(({ input, ctx }) => (ctx.app.service.Interface.getInterfaceGroup as any)(input, ctx)),

    createInterfaceGroup: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(InterfaceGroup)
      .mutation(({ input, ctx }) => (ctx.app.service.Interface.createInterfaceGroup as any)(input, ctx)),

    updateInterfaceGroup: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(z.object({ query: z.object({ id: z.string(), data: InterfaceGroup.partial() }) }))
      .mutation(({ input, ctx }) => (ctx.app.service.Interface.updateInterfaceGroup as any)(input, ctx)),

    // InterfaceComponent Procedures
    getInterfaceComponent: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ query: z.object({ id: z.string() }) }))
      .query(({ input, ctx }) => (ctx.app.service.Interface.getInterfaceComponent as any)(input, ctx)),

    createInterfaceComponent: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(InterfaceComponent)
      .mutation(({ input, ctx }) => (ctx.app.service.Interface.createInterfaceComponent as any)(input, ctx)),

    updateInterfaceComponent: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(z.object({ query: z.object({ id: z.string(), data: InterfaceComponent.partial() }) }))
      .mutation(({ input, ctx }) => (ctx.app.service.Interface.updateInterfaceComponent as any)(input, ctx)),
  });

export type Router = ReturnType<typeof createRouter>;
export type RouterInput = inferRouterInputs<Router>;
export type RouterOutput = inferRouterOutputs<Router>;
