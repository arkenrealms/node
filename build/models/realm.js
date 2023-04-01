"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const rating_1 = __importDefault(require("./rating"));
const profile_1 = __importDefault(require("./profile"));
const node_1 = __importDefault(require("./node"));
const base_1 = __importDefault(require("./base"));
class Realm extends base_1.default {
    static get tableName() {
        return 'realms';
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
            owner: {
                relation: objection_1.Model.HasOneThroughRelation,
                modelClass: profile_1.default,
                filter: {
                    relationKey: 'owner'
                },
                beforeInsert(model) {
                    model.relationKey = 'owner';
                },
                join: {
                    from: 'realms.id',
                    to: 'profiles.id',
                    through: {
                        from: 'nodes.fromRealmId',
                        to: 'nodes.toProfileId',
                        extra: ['relationKey']
                    }
                }
            },
            parent: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: node_1.default,
                join: {
                    from: 'realms.parentId',
                    to: 'nodes.id'
                }
            },
            rating: {
                relation: objection_1.Model.ManyToManyRelation,
                modelClass: rating_1.default,
                join: {
                    from: 'realms.id',
                    to: 'ratings.id',
                    through: {
                        from: 'nodes.fromRealmId',
                        to: 'nodes.toRatingId',
                        extra: ['relationKey']
                    }
                },
                filter: {
                    relationKey: 'rating'
                },
                beforeInsert(model) {
                    console.log(model);
                    model.relationKey = 'rating';
                }
            },
            // rating: {
            //   relation: Model.HasOneRelation,
            //   modelClass: Rating,
            //   join: {
            //     from: 'realms.ratingId',
            //     to: 'ratings.id'
            //   }
            // },
        };
    }
}
exports.default = Realm;
//# sourceMappingURL=realm.js.map