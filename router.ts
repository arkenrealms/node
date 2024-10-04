import zod from 'zod';
import { initTRPC, TRPCError } from '@trpc/server';
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

export const z = zod;
export const t = initTRPC.context<RouterContext>().create();
export const router = t.router;
export const procedure = t.procedure;
export const createCallerFactory = t.createCallerFactory;

export const createRouter = () =>
  router({
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

// /**
//  * Unprotected procedure
//  **/
// const isAcceptableOrigin = t.middleware(({ ctx: { user, acceptableOrigin }, next }) => {
//   if (!acceptableOrigin)
//     throw new TRPCError({
//       code: 'UNAUTHORIZED',
//       message: 'Please use the public API instead: https://docs.arken.gg',
//     });
//   return next({ ctx: { user, acceptableOrigin } });
// });

// export const enforceClientVersion = t.middleware(async ({ next, ctx }) => {
//   // if (await needsUpdate(ctx.req)) {
//   //   throw new TRPCError({
//   //     code: 'PRECONDITION_FAILED',
//   //     message: 'Update required',
//   //     cause: 'Please refresh your browser to get the latest version of the app',
//   //   });
//   // }
//   const result = await next();
//   //   if (await needsUpdate(ctx.req)) {
//   //     ctx.res?.setHeader('x-update-required', 'true');
//   //     ctx.cache.edgeTTL = 0;
//   //   }
//   return result;
// });

// export const publicProcedure = t.procedure.use(isAcceptableOrigin).use(enforceClientVersion);

// /**
//  * Protected procedure
//  **/
// export const protectedProcedure = publicProcedure.use(isAuthed);

// /**
//  * Moderator procedure
//  **/
// export const moderatorProcedure = protectedProcedure.use(isMod);

// /**
//  * Guarded procedure to prevent users from making actions
//  * based on muted/banned properties
//  */
// export const guardedProcedure = protectedProcedure.use(isMuted);

// /**
//  * Verified procedure to prevent users from making actions
//  * if they haven't completed the onboarding process
//  */
// export const verifiedProcedure = protectedProcedure.use(isOnboarded);
