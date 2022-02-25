import { Model, RelationMappings, JSONSchema } from 'objection'
import Node from './node'
import BaseModel from './base'

export default class Achievement extends BaseModel {
  public parentId!: number

  public static get tableName(): string {
    return 'achievements'
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
      parent: {
        relation: Model.HasOneRelation,
        modelClass: Node,
        join: {
          from: 'achievements.parentId',
          to: 'nodes.id'
        }
      }
    }
  }
}


// {
//   "id": 1,
//   "key": "CRAFT_1",
//   "name": "New Beginnings",
//   "category": "Basic",
//   "icon": "https://rune.game/images/achievements/blue/s_030.PNG",
//   "points": 1,
//   "type": "Crafting",
//   "isCompleted": false,
//   "details": {
//     "Date": "Anytime",
//     "Total": 0
//   },
//   "branches": {
//     "1": {
//       "description": [
//         "Craft 1 Runeword"
//       ]
//     },
//     "2": {
//       "description": "Craft 1 Runeword"
//     }
//   }
// },