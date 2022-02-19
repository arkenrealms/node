import { RelationMappings, JSONSchema } from 'objection';
import Product from './product';
import BaseModel from './base';
export default class Leaderboard extends BaseModel {
    parentId: number;
    score: number;
    product: Product;
    productId: number;
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get relationMappings(): RelationMappings;
}
