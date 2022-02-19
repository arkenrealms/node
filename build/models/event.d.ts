import { RelationMappings, JSONSchema } from 'objection';
import BaseModel from './base';
export default class Event extends BaseModel {
    parentId: number;
    property: string;
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get relationMappings(): RelationMappings;
}
