"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageStatus = void 0;
const objection_1 = require("objection");
const node_1 = __importStar(require("./node"));
const profile_1 = __importDefault(require("./profile"));
const base_1 = __importDefault(require("./base"));
const discussion_1 = __importDefault(require("./discussion"));
var MessageStatus;
(function (MessageStatus) {
    MessageStatus["Active"] = "active";
    MessageStatus["Disabled"] = "disabled";
    MessageStatus["Removed"] = "removed";
})(MessageStatus = exports.MessageStatus || (exports.MessageStatus = {}));
class Message extends base_1.default {
    static get tableName() {
        return 'messages';
    }
    static get timestamps() {
        return true;
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {
                owner: {
                    type: 'object'
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
                    from: 'messages.parentId',
                    to: 'nodes.id'
                }
            },
            owner: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: profile_1.default,
                join: {
                    from: 'messages.ownerId',
                    to: 'profiles.id'
                }
            },
            replies: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: Message,
                join: {
                    from: 'messages.id',
                    to: 'messages.replyToId'
                }
            },
            replyTo: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: Message,
                join: {
                    from: 'messages.replyToId',
                    to: 'messages.id'
                }
            },
            discussion: {
                relation: objection_1.Model.ManyToManyRelation,
                modelClass: discussion_1.default,
                beforeInsert(model) {
                    model.relationKey = node_1.NodeRelation.Chat;
                },
                join: {
                    from: 'messages.id',
                    through: {
                        from: 'nodes.fromMessageId',
                        extra: ['relationKey'],
                        to: 'nodes.toDiscussionId'
                    },
                    to: 'discussions.id'
                }
            }
        };
    }
}
exports.default = Message;
//# sourceMappingURL=message.js.map