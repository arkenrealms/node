import { RelationMappings, JSONSchema } from 'objection';
import Profile from './profile';
import BaseModel from './base';
export default class Realm extends BaseModel {
    parentId: number;
    ownerId: number;
    owner: Profile;
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get relationMappings(): RelationMappings;
}
