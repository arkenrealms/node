import { RelationMappings, JSONSchema } from 'objection';
import Vote from './vote';
import BaseModel from './base';
export default class Rating extends BaseModel {
    parentId: number;
    ownerId: number;
    votes: Array<Vote>;
    score: number;
    average: number;
    upvoteTotal: number;
    downvoteTOtal: number;
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get relationMappings(): RelationMappings;
}
