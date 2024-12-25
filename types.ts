import { createRouter } from './router';

// Imports
import * as Area from './modules/area';
import * as Asset from './modules/asset';
import * as Chain from './modules/chain';
import * as Character from './modules/character';
import * as Chat from './modules/chat';
import * as Collection from './modules/collection';
import * as Core from './modules/core';
import * as Game from './modules/game';
import * as Interface from './modules/interface';
import * as Item from './modules/item';
import * as Job from './modules/job';
import * as Market from './modules/market';
import * as Product from './modules/product';
import * as Profile from './modules/profile';
import * as Raffle from './modules/raffle';
import * as Skill from './modules/skill';
import * as Video from './modules/video';

// Exports
export * as Area from './modules/area';
export * as Asset from './modules/asset';
export * as Chain from './modules/chain';
export * as Character from './modules/character';
export * as Chat from './modules/chat';
export * as Collection from './modules/collection';
export * as Core from './modules/core';
export * as Game from './modules/game';
export * as Interface from './modules/interface';
export * as Item from './modules/item';
export * as Job from './modules/job';
export * as Market from './modules/market';
export * as Product from './modules/product';
export * as Profile from './modules/profile';
export * as Raffle from './modules/raffle';
export * as Skill from './modules/skill';
export * as Video from './modules/video';

export type * as Schema from './schema';

export type Router = ReturnType<typeof createRouter>;

export type ApplicationServiceType = Partial<{
  Area: Area.Service;
  Asset: Asset.Service;
  Chain: Chain.Service;
  Character: Character.Service;
  Chat: Chat.Service;
  Collection: Collection.Service;
  Core: Core.Service;
  Game: Game.Service;
  Interface: Interface.Service;
  Item: Item.Service;
  Job: Job.Service;
  Market: Market.Service;
  Product: Product.Service;
  Profile: Profile.Service;
  Raffle: Raffle.Service;
  Skill: Skill.Service;
  Video: Video.Service;
}>;

export type ApplicationModelType = Partial<
  Area.Types.Mappings &
    Asset.Types.Mappings &
    Chain.Types.Mappings &
    Character.Types.Mappings &
    Chat.Types.Mappings &
    Collection.Types.Mappings &
    Core.Types.Mappings &
    Game.Types.Mappings &
    Interface.Types.Mappings &
    Item.Types.Mappings &
    Job.Types.Mappings &
    Market.Types.Mappings &
    Product.Types.Mappings &
    Profile.Types.Mappings &
    Raffle.Types.Mappings &
    Skill.Types.Mappings &
    Video.Types.Mappings
>;

export interface Application {
  model: ApplicationModelType;
  service: ApplicationServiceType;
  web3: any;
}

export type RouterClient = {
  socket: any;
  roles: string[];
  profile?: Profile.Types.Profile;
};

export type RouterContext = {
  app: Application;
  client?: RouterClient;
  profile?: Profile.Types.Profile;
};

export interface Signature {
  hash?: string;
  address?: string;
}

export type Position = {
  x: number;
  y: number;
  z?: number;
};

export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
