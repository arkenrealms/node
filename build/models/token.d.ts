import { RelationMappings, JSONSchema } from 'objection';
import BaseModel from './base';
export default class Token extends BaseModel {
    code: string;
    type: string;
    marketCap: number;
    priceUsd: number;
    priceBtc: number;
    circulatingSupply: number;
    volume24h: number;
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get relationMappings(): RelationMappings;
}
