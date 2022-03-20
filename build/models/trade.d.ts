import { RelationMappings, JSONSchema } from 'objection';
import Product from './product';
import BaseModel from './base';
import Profile from './profile';
import Chain from './chain';
export default class Trade extends BaseModel {
    parentId: number;
    product: Product;
    seller: Profile;
    buyer: Profile;
    chain: Chain;
    tokenId: string;
    price: number;
    status: string;
    hotness: number;
    lastBlock: number;
    blockNumber: number;
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get relationMappings(): RelationMappings;
}
