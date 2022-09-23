import { Model, RelationMappings, JSONSchema } from 'objection'
import Chain from './chain'
import Asset from './asset'
import Profile from './profile'
import BaseModel from './base'

export default class AssetTransmuteRequest extends BaseModel {
  public type!: string
  public owner!: Profile
  public asset!: Asset
  public chain!: Chain

  public static get tableName(): string {
    return 'asset_transmute_requests'
  }

  public static get timestamps(): boolean {
    return true
  }

  public static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      required: [],
      properties: {
      }
    }
  }

  public static get relationMappings(): RelationMappings {
    return {
        owner: {
          relation: Model.HasOneRelation,
          modelClass: Profile,
          join: {
            from: 'rewards.ownerId',
            to: 'profiles.id'
          }
        },
      asset: {
        relation: Model.HasOneRelation,
        modelClass: Asset,
        join: {
          from: 'asset_transmute_requests.assetId',
          to: 'assets.id'
        }
      },
      chain: {
        relation: Model.HasOneRelation,
        modelClass: Chain,
        join: {
          from: 'asset_transmute_requests.chainId',
          to: 'assets.id'
        }
      },
    }
  }
}
