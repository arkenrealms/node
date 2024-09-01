import { initTRPC, TRPCError } from '@trpc/server';
// import { createTRPCProxyClient, httpBatchLink, createWSClient, wsLink } from '@trpc/client';
// import { customErrorFormatter, hasRole, transformer } from './util/rpc';
import zod from 'zod';
import type { Context } from './types';
import * as Job from './modules/job/job.router';
import * as Game from './modules/game/game.router';
import * as Profile from './modules/profile/profile.router';
import * as Interface from './modules/interface/interface.router';
import * as Core from './modules/core/core.router';
import type { IApp } from './types';

export const z = zod;
export const t = initTRPC.context<Context>().create();
export const router = t.router;
export const procedure = t.procedure;
export const createCallerFactory = t.createCallerFactory;

export const createRouter = (app: IApp) =>
  router({
    // connected: procedure
    //   .use(hasRole("realm", t))
    //   .use(customErrorFormatter(t))
    //   .input(schema.connected)
    //   .mutation(({ input, ctx }) =>
    //     service.connected(input as Schema.ConnectedInput, ctx)
    //   ),

    job: Job.createRouter(app.service.Job),
    core: Core.createRouter(app.service.Core),
    game: Game.createRouter(app.service.Game),
    profile: Profile.createRouter(app.service.Profile),
    interface: Interface.createRouter(app.service.Interface),
  });

export type Router = ReturnType<typeof createRouter>;
