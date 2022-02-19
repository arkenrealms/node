import { RelationMappings, JSONSchema } from 'objection';
import Tag from './tag';
import BaseModel from './base';
export default class Idea extends BaseModel {
    ownerId: number;
    communityId: number;
    ratingId: number;
    type: string;
    tags: Array<Tag>;
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get relationMappings(): RelationMappings;
}
