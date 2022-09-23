import { RelationMappings, JSONSchema } from 'objection';
import Chain from './chain';
import Asset from './asset';
import Profile from './profile';
import BaseModel from './base';
export default class AssetTransmuteRequest extends BaseModel {
    type: string;
    owner: Profile;
    asset: Asset;
    chain: Chain;
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get relationMappings(): RelationMappings;
}
