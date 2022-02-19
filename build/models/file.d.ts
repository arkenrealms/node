import { RelationMappings, JSONSchema } from 'objection';
import BaseModel from './base';
export default class File extends BaseModel {
    parentId: number;
    storageType: string;
    accessType: string;
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get relationMappings(): RelationMappings;
}
