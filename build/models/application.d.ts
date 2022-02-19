import { RelationMappings, JSONSchema } from 'objection';
import BaseModel from './base';
export default class Application extends BaseModel {
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get relationMappings(): RelationMappings;
}
