import { RelationMappings, JSONSchema } from 'objection';
import Profile from './profile';
import Tag from './tag';
import Rating from './rating';
import BaseModel from './base';
export default class Project extends BaseModel {
    parentId: number;
    score: number;
    owner: Profile;
    ownerId: number;
    rating: Rating;
    name: string;
    members: Array<Profile>;
    isProposal: boolean;
    tags: Array<Tag>;
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get relationMappings(): RelationMappings;
}
