"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const node_1 = __importDefault(require("./node"));
const base_1 = __importDefault(require("./base"));
class Tag extends base_1.default {
    static get tableName() {
        return 'tags';
    }
    static get timestamps() {
        return true;
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['key', 'name', 'meta'],
            properties: {
                key: { type: 'string' },
                name: { type: 'string' },
                meta: {
                    type: 'object',
                    required: ['author', 'assets'],
                    properties: {
                        author: { type: 'string' },
                        assets: { type: 'array' },
                        background: { type: ['string', 'null'] },
                        estimatedValue: { type: 'integer' }
                    }
                }
            }
        };
    }
    static get relationMappings() {
        return {
            parent: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: node_1.default,
                join: {
                    from: 'tags.parentId',
                    to: 'nodes.id'
                }
            },
        };
    }
    static get modifiers() {
        return {
            released(builder) {
                builder.where('tags.name', 'Released');
            }
        };
    }
}
exports.default = Tag;
//# sourceMappingURL=tag.js.map