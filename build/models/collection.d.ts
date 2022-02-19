import { RelationMappings, JSONSchema } from 'objection';
import Profile from './profile';
import BaseModel from './base';
export default class Collection extends BaseModel {
    name: string;
    parentId: number;
    owner: Profile;
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get relationMappings(): RelationMappings;
}
