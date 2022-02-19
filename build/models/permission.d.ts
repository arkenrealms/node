import { RelationMappings, JSONSchema } from 'objection';
import BaseModel from './base';
export default class Permission extends BaseModel {
    static get tableName(): string;
    static get jsonSchema(): JSONSchema;
    static get relationMappings(): RelationMappings;
}
