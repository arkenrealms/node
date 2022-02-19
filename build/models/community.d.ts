import { RelationMappings, JSONSchema } from 'objection';
import Discussion from './discussion';
import BaseModel from './base';
export default class Community extends BaseModel {
    parentId: number;
    ownerId: number;
    currentActiveUsers: number;
    monthlyActiveUsers: number;
    dailyActiveUsers: number;
    discussions: Array<Discussion>;
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get relationMappings(): RelationMappings;
}
