import { RelationMappings, JSONSchema } from 'objection';
import BaseModel from './base';
export default class Account extends BaseModel {
    parentId: number;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    avatar: string;
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get relationMappings(): RelationMappings;
}
