import { JSONSchema, RelationMappings } from 'objection';
import Project from './project';
import License from './license';
import Order from './order';
import Message from './message';
import Asset from './asset';
import Offer from './offer';
import Node from './node';
import Badge from './badge';
import Collection from './collection';
import Event from './event';
import Idea from './idea';
import Product from './product';
import BaseModel from './base';
export declare enum ProfileStatus {
    Active = "active",
    Disabled = "disabled"
}
export default class Profile extends BaseModel {
    parentId: number;
    name: string;
    status: string;
    address: string;
    privateKey: string;
    accountId: number;
    role: string;
    reputation: number;
    signature: string;
    chain: string;
    ideas: Array<Idea>;
    projects: Array<Project>;
    products: Array<Product>;
    licenses: Array<License>;
    orders: Array<Order>;
    messages: Array<Message>;
    assets: Array<Asset>;
    offers: Array<Offer>;
    badges: Array<Badge>;
    events: Array<Event>;
    collections: Array<Collection>;
    wishlists: Array<Node>;
    ownedProducts: Array<Product>;
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get modifiers(): {
        publicCols(builder: any): void;
    };
    static get relationMappings(): RelationMappings;
}
