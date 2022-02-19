import { RelationMappings, JSONSchema } from 'objection';
import BaseModel from './base';
export default class Asset extends BaseModel {
    parentId: number;
    score: number;
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get relationMappings(): RelationMappings;
}
