"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const node_1 = __importDefault(require("./node"));
const base_1 = __importDefault(require("./base"));
class Achievement extends base_1.default {
    static get tableName() {
        return 'achievements';
    }
    static get timestamps() {
        return true;
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {},
        };
    }
    static get relationMappings() {
        return {
            parent: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: node_1.default,
                join: {
                    from: 'achievements.parentId',
                    to: 'nodes.id',
                },
            },
        };
    }
}
exports.default = Achievement;
// {
//   "id": 1,
//   "key": "CRAFT_1",
//   "name": "New Beginnings",
//   "category": "Basic",
//   "icon": "https://arken.gg/images/achievements/blue/s_030.PNG",
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
//# sourceMappingURL=achievement.js.map