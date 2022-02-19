import { RelationMappings, JSONSchema } from 'objection';
import BaseModel from './base';
export default class BattlePass extends BaseModel {
    parentId: number;
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get relationMappings(): RelationMappings;
}