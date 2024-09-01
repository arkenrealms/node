import { initTRPC, TRPCError } from '@trpc/server';
// import { createTRPCProxyClient, httpBatchLink, createWSClient, wsLink } from '@trpc/client';
// import { customErrorFormatter, hasRole, transformer } from './util/rpc';
import zod from 'zod';
import type { RouterContext } from './types';

import * as Area from './modules/area/area.router';
import * as Asset from './modules/asset/asset.router';
import * as Chain from './modules/chain/chain.router';
import * as Character from './modules/character/character.router';
import * as Chat from './modules/chat/chat.router';
import * as Collection from './modules/collection/collection.router';
import * as Core from './modules/core/core.router';
import * as Game from './modules/game/game.router';
import * as Interface from './modules/interface/interface.router';
import * as Item from './modules/item/item.router';
import * as Job from './modules/job/job.router';
import * as Market from './modules/market/market.router';
import * as Product from './modules/product/product.router';
import * as Profile from './modules/profile/profile.router';
import * as Raffle from './modules/raffle/raffle.router';
import * as Skill from './modules/skill/skill.router';
import * as Video from './modules/video/video.router';

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
    character: Character.createRouter(),
    chat: Chat.createRouter(),
    collection: Collection.createRouter(),
    core: Core.createRouter(),
    game: Game.createRouter(),
    interface: Interface.createRouter(),
    item: Item.createRouter(),
    job: Job.createRouter(),
    market: Market.createRouter(),
    product: Product.createRouter(),
    profile: Profile.createRouter(),
    raffle: Raffle.createRouter(),
    skill: Skill.createRouter(),
    video: Video.createRouter(),
  });

export type Router = ReturnType<typeof createRouter>;
