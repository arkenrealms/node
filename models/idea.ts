import { Model, RelationMappings, JSONSchema } from 'objection'
import Node from './node'
import Rating from './rating'
import Profile from './profile'
import Community from './community'
import Tag from './tag'
import BaseModel from './base'
import Vote from './vote'

export default class Idea extends BaseModel {
  public ownerId!: number
  public communityId!: number
  public ratingId!: number

  public type!: string // [battlepass, app, game, etc.]
  public tags!: Array<Tag>

  public static get tableName(): string {
    return 'ideas'
  }

  public static get timestamps(): boolean {
    return true
  }

  public static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      required: ['key', 'value', 'meta'], // , 'owner', 'community', 'rating'
      properties: {
        owner: { type: 'object' },
        community: { type: 'object' },
        rating: { type: 'object' },
        meta: {
          type: 'object',
          required: [],
          properties: {
          }
        }
      }
    }
  }

  public static get relationMappings(): RelationMappings {
    return {
      // owner: {
      //   relation: Model.HasOneThroughRelation,
      //   modelClass: Profile,
      //   filter: (qb) => {
      //     // TODO: simplify this when this issue is resolved https://github.com/Vincit/objection.js/issues/1356
      //     qb.select('profiles.id', 'node_profiles.fromIdeaId')
      //     qb.join('nodes as node_profiles', 'node_profiles.toProfileId', 'profiles.id')
      //     qb.where('node_profiles.relationKey', '=', 'owner')
      //     // @ts-ignore
      //     qb._parentQuery.whereRaw('"owner"."fromIdeaId" = "ideas"."id"')
      //   },
      //   join: {
      //     from: 'ideas.id',
      //     to: 'profiles.id',
      //     through: {
      //       from: 'nodes.fromIdeaId',
      //       to: 'nodes.toProfileId',
      //       extra: ['relationKey'],
      //       beforeInsert(model) {
      //         (model as Node).relationKey = 'owner'
      //       }
      //     }
      //   }
      // },
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: Profile,
        join: {
          from: 'ideas.ownerId',
          to: 'profiles.id'
        }
      },
      vote: {
        relation: Model.ManyToManyRelation,
        modelClass: Vote,
        join: {
          from: 'ideas.id',
          to: 'votes.id',
          through: {
            from: 'nodes.toIdeaId',
            to: 'nodes.fromVoteId',
            extra: ['relationKey']
          }
        },
      },
      community: {
        relation: Model.BelongsToOneRelation,
        modelClass: Community,
        join: {
          from: 'ideas.communityId',
          to: 'communities.id'
        }
      },
      backers: {
        relation: Model.ManyToManyRelation,
        modelClass: Profile,
        filter: {
          relationKey: 'backers'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'backers'
        },
        join: {
          from: 'ideas.id',
          to: 'profiles.id',
          through: {
            from: 'nodes.fromIdeaId',
            to: 'nodes.toProfileId',
            extra: ['relationKey']
          }
        }
      },
      applications: {
        relation: Model.ManyToManyRelation,
        modelClass: Profile,
        filter: {
          relationKey: 'applications'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'applications'
        },
        join: {
          from: 'ideas.id',
          to: 'profiles.id',
          through: {
            from: 'nodes.fromIdeaId',
            to: 'nodes.toProfileId',
            extra: ['relationKey']
          }
        }
      },
      // rating: {
      //   relation: Model.BelongsToOneRelation,
      //   modelClass: Rating,
      //   join: {
      //     from: 'ideas.ratingId',
      //     to: 'ratings.id'
      //   }
      // },
      tags: {
        relation: Model.ManyToManyRelation,
        modelClass: Tag,
        join: {
          from: 'ideas.id',
          to: 'tags.id',
          through: {
            from: 'nodes.fromIdeaId',
            to: 'nodes.toTagId',
            extra: ['relationKey'],
            beforeInsert(model) {
              (model as Node).relationKey = 'tags'
            }
          }
        },
        filter: (qb) => {
          // TODO: simplify this when this issue is resolved https://github.com/Vincit/objection.js/issues/1356
          qb.select('tags.id', 'node_tags.fromIdeaId')
          qb.join('nodes as node_tags', 'node_tags.toTagId', 'tags.id')
          qb.where('node_tags.relationKey', '=', 'tags')
          // @ts-ignore
          qb._parentQuery.whereRaw('"tags"."fromIdeaId" = "ideas"."id"')
        },
      }
    }
  }
}
