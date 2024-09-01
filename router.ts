import { initTRPC, TRPCError } from '@trpc/server';
// import { createTRPCProxyClient, httpBatchLink, createWSClient, wsLink } from '@trpc/client';
// import { customErrorFormatter, hasRole, transformer } from './util/rpc';
import zod from 'zod';
import type { RouterContext } from './types';
import * as Area from './modules/area/area.router';
import * as Asset from './modules/asset/asset.router';
import * as Chain from './modules/chain/chain.router';
import * as Job from './modules/job/job.router';
import * as Game from './modules/game/game.router';
import * as Profile from './modules/profile/profile.router';
import * as Interface from './modules/interface/interface.router';
import * as Core from './modules/core/core.router';
import type { Application } from './types';

export const z = zod;
export const t = initTRPC.context<RouterContext>().create();
export const router = t.router;
export const procedure = t.procedure;
export const createCallerFactory = t.createCallerFactory;

export const createRouter = (app: Application) =>
  router({
    // connected: procedure
    //   .use(hasRole("realm", t))
    //   .use(customErrorFormatter(t))
    //   .input(schema.connected)
    //   .mutation(({ input, ctx }) =>
    //     service.connected(input as Schema.ConnectedInput, ctx)
    //   ),

    area: Area.createRouter(),
    asset: Asset.createRouter(),
    chain: Chain.createRouter(),
    job: Job.createRouter(app.service.Job),
    core: Core.createRouter(app.service.Core),
    game: Game.createRouter(app.service.Game),
    profile: Profile.createRouter(),
    interface: Interface.createRouter(),
  });

export type Router = ReturnType<typeof createRouter>;
