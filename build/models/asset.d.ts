import { RelationMappings, JSONSchema } from 'objection';
import Profile from './profile';
import BaseModel from './base';
export default class Asset extends BaseModel {
    parentId: number;
    score: number;
    tokenId: string;
    skin: string;
    transmuteCount: number;
    owner: Profile;
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get relationMappings(): RelationMappings;
}
