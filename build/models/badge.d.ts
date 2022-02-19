import { RelationMappings, JSONSchema } from 'objection';
import BaseModel from './base';
export default class Badge extends BaseModel {
    parentId: number;
    name: string;
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get relationMappings(): RelationMappings;
}
