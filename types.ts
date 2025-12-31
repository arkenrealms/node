// arken/packages/node/types.ts
//
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
  web3?: any;
}

export type RouterClient = {
  socket: any;
  roles: string[];
  permissions: any;
  profile?: Profile.Types.Profile;
  emit: any;
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

export type PatchOp =
  | { op: 'set'; key: string; value: any }
  | { op: 'unset'; key: string }
  | { op: 'inc'; key: string; value: number }
  | { op: 'push'; key: string; value: any }
  | { op: 'merge'; key: string; value: Record<string, any> };

export type EntityPatch = {
  entityType: string; // allow any string
  entityId: string;
  baseVersion?: number;
  ops: PatchOp[];
};

export type GameObjectDef = {
  id: string;
  type: string; // allow any string
  name: string;
  position: { x: number; y: number };
  radius?: number; // interaction distance
  tags?: string[];
  meta?: Record<string, any>;
};

export type Requirement =
  | { kind: 'exists'; key: string }
  | { kind: 'touchedObject'; objectId: string; afterKey?: string; writeKey: string };

// Generic effects (can be positive or negative)
export type Effect =
  | { kind: 'item.grant'; itemKey: string; quantity?: number }
  | { kind: 'currency.grant'; key: string; amount: number } // negative amount allowed
  | { kind: 'reputation.delta'; npcId: string; amount: number } // negative allowed
  | { kind: 'state.patch'; patch: EntityPatch } // generic patch against any entityType
  | { kind: 'ui.unlock'; uiKey: string } // optional, future
  | { kind: 'emit'; eventType: string; payload?: any }; // optional, future

export type QuestDef = {
  id: string;
  metaverseId: string;
  name: string;

  // Requirements can be checked shard-side (for anti-cheat) AND client-side (for UI state)
  requirements: Requirement[];

  // Effects are applied on completion/claim (seer-side)
  effects: Effect[];

  // keys shard will write (auditing + permissions)
  writes?: string[];
};

type QuestCompleteOp = {
  kind: 'quest.complete';
  id: string;
  ts: number;
  questId: string;
  metaverseId: string;
  evidence?: Record<string, any>;
  effects?: any[]; // can include effect refs for replay/debug
};
