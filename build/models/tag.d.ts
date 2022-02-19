import { RelationMappings, JSONSchema } from 'objection';
import BaseModel from './base';
export default class Tag extends BaseModel {
    parentId: number;
    locked: boolean;
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get relationMappings(): RelationMappings;
    static get modifiers(): any;
}
