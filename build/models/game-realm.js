"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const node_1 = __importDefault(require("./node"));
const tag_1 = __importDefault(require("./tag"));
const base_1 = __importDefault(require("./base"));
class GameRealm extends base_1.default {
    static get tableName() {
        return 'game_realms';
    }
    static get timestamps() {
        return true;
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {}
        };
    }
    static get relationMappings() {
        return {
            parent: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: node_1.default,
                join: {
                    from: 'game_realms.parentId',
                    to: 'nodes.id'
                }
            },
            tags: {
                relation: objection_1.Model.ManyToManyRelation,
                modelClass: tag_1.default,
                join: {
                    from: 'game_realms.id',
                    to: 'tags.id',
                    through: {
                        from: 'nodes.fromGameRealmId',
                        to: 'nodes.toTagId',
                        extra: ['relationKey']
                    }
                },
                filter: {
                    relationKey: 'tags'
                },
                beforeInsert(model) {
                    model.relationKey = 'tags';
                }
            }
        };
    }
}
exports.default = GameRealm;
// has many profiles
// has many tags
// has many events
// score
//# sourceMappingURL=game-realm.js.map