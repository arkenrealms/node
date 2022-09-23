import { RelationMappings, JSONSchema } from 'objection';
import BaseModel from './base';
import Profile from './profile';
export default class Guild extends BaseModel {
    parentId: number;
    players: Array<Profile>;
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get relationMappings(): RelationMappings;
}
