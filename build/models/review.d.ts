import { RelationMappings, JSONSchema } from 'objection';
import Rating from './rating';
import Profile from './profile';
import BaseModel from './base';
export default class Review extends BaseModel {
    parentId: number;
    rating: Rating;
    owner: Profile;
    ownerId: number;
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get relationMappings(): RelationMappings;
}
