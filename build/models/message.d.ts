import { JSONSchema, RelationMappings } from 'objection';
import BaseModel from './base';
export declare enum MessageStatus {
    Active = "active",
    Disabled = "disabled",
    Removed = "removed"
}
export default class Message extends BaseModel {
    parentId: number;
    ownerId: number;
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get relationMappings(): RelationMappings;
}
