import { RelationMappings, JSONSchema } from 'objection';
import Rating from './rating';
import BaseModel from './base';
export default class Suggestion extends BaseModel {
    parentId: number;
    rating: Rating;
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get relationMappings(): RelationMappings;
}
