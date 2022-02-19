import { RelationMappings, JSONSchema } from 'objection';
import BaseModel from './base';
export declare enum DiscussionType {
    Discussion = "discussion",
    Chat = "chat",
    Both = "both"
}
export default class Discussion extends BaseModel {
    content: string;
    parentId: number;
    rootMessageId: number;
    type: DiscussionType;
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get modifiers(): any;
    static get relationMappings(): RelationMappings;
}
