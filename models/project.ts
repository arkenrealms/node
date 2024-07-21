import { Model, RelationMappings, JSONSchema } from 'objection'
//import ProjectMember from './project-member'
import Profile from './profile'
import Community from './community'
import Bounty from './bounty'
import Product from './product'
import Idea from './idea'
import Tag from './tag'
import Rating from './rating'
import Node from './node'
import Event from './event'
import Vote from './vote'
import BaseModel from './base'

export default class Project extends BaseModel {
  public parentId!: number
  public score!: number

  public owner!: Profile
  public ownerId!: number

  public rating!: Rating

  public name!: string
  public members!: Array<Profile>
  public isProposal!: boolean

  public tags!: Array<Tag>

  public static get tableName(): string {
    return 'projects'
  }

  public static get timestamps(): boolean {
    return true
  }

  public static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      required: [],
      properties: {
        contractStatus: {
          type: 'string',
          enum: ['Inactive', 'Draft', 'Pending', 'Contributable', 'InDevelopment', 'Refundable', 'Rejected', 'Completed'],
          default: 'Draft'
        }
      }
    }
  }

  public static get relationMappings(): RelationMappings {
    return {
      // members: {
      //   relation: Model.ManyToManyRelation,
      //   modelClass: Profile,
      //   join: {
      //     from: 'projects.id',
      //     through: {
      //       from: 'project_members.projectId',
      //       to: 'project_members.profileId',
      //       modelClass: ProjectMember,
      //       extra: ['isAdmin']
      //     },
      //     to: 'profiles.id'
      //   }
      // },
      // subprojects: {
      //   relation: Model.HasManyRelation,
      //   modelClass: Project,
      //   join: {
      //     from: 'projects.id',
      //     to: 'projects.parentId'
      //   }
      // },
      // bounties: {
      //   relation: Model.HasManyRelation,
      //   modelClass: Bounty,
      //   join: {
      //     from: 'projects.id',
      //     to: 'bounties.parentId'
      //     // join view through where parentType == 'project'
      //     // https://www.tutorialspoint.com/postgresql/postgresql_views.htm
      //   }
      // },
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: Profile,
        join: {
          from: 'projects.ownerId',
          to: 'profiles.id'
        }
      },
      vote: {
        relation: Model.ManyToManyRelation,
        modelClass: Vote,
        join: {
          from: 'projects.id',
          to: 'votes.id',
          through: {
            from: 'nodes.toProjectId',
            to: 'nodes.fromVoteId',
            extra: ['relationKey']
          }
        },
      },
      community: {
        relation: Model.HasOneRelation,
        modelClass: Community,
        join: {
          from: 'projects.communityId',
          to: 'communities.id'
        }
      },
      idea: {
        relation: Model.HasOneRelation,
        modelClass: Idea,
        join: {
          from: 'projects.ideaId',
          to: 'ideas.id'
        }
      },
      product: {
        relation: Model.HasOneRelation,
        modelClass: Product,
        join: {
          from: 'projects.productId',
          to: 'products.id'
        }
      },
      rating: {
        relation: Model.HasOneRelation,
        modelClass: Rating,
        join: {
          from: 'projects.ratingId',
          to: 'ratings.id'
        }
      },
      events: {
        relation: Model.ManyToManyRelation,
        modelClass: Event,
        join: {
          from: 'projects.id',
          to: 'events.id',
          through: {
            from: 'nodes.fromProjectId',
            to: 'nodes.toEventId',
            extra: ['relationKey']
          }
        },
        filter: {
          relationKey: 'events'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'events'
        }
      },
      pledges: {
        relation: Model.ManyToManyRelation,
        modelClass: Profile,
        join: {
          from: 'projects.id',
          to: 'profiles.id',
          through: {
            from: 'nodes.fromProjectId',
            to: 'nodes.toProfileId',
            extra: ['relationKey']
          }
        },
        filter: {
          relationKey: 'pledges'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'pledges'
        }
      },
      contributors: {
        relation: Model.ManyToManyRelation,
        modelClass: Profile,
        join: {
          from: 'projects.id',
          to: 'profiles.id',
          through: {
            from: 'nodes.fromProjectId',
            to: 'nodes.toProfileId',
            extra: ['relationKey']
          }
        },
        filter: {
          relationKey: 'contributors'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'contributors'
        }
      },
      moderators: {
        relation: Model.ManyToManyRelation,
        modelClass: Profile,
        join: {
          from: 'projects.id',
          to: 'profiles.id',
          through: {
            from: 'nodes.fromProjectId',
            to: 'nodes.toProfileId',
            extra: ['relationKey']
          }
        },
        filter: {
          relationKey: 'moderators'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'moderators'
        }
      },
      tags: {
        relation: Model.ManyToManyRelation,
        modelClass: Tag,
        join: {
          from: 'projects.id',
          to: 'tags.id',
          through: {
            from: 'nodes.fromProjectId',
            to: 'nodes.toTagId',
            extra: ['relationKey']
          }
        },
        filter: {
          relationKey: 'tags'
        },
        beforeInsert (model) {
          console.log(model);
          (model as Node).relationKey = 'tags'
        }
      }
      // has many pledges -> node (parentId = this, parentType = project, nextId = profile.id, nextType = profile)
      // has many contributors -> node (parentId = this, parentType = project, nextId = profile.id, nextType = profile)
      // has many moderators -> node (parentId = this, parentType = project, nextId = profile.id, nextType = profile)
    }
  }

  // static get namedFilters() {
  //   const knex = this.app.get('knex');

  //   return {
  //     incomplete: builder => {
  //     builder
  //       .where('complete', '=', false)
  //       .where('dueDate', '<', knex.fn.now());
  //     }
  //   };
  // }
}

// "id": 1,
// "name": "Gym With Tim",
// "images": {
//   "preview": []
// },
// "author": "0x0",
// "content": "<h2>An adventure of a lifetime...</h2>\n<p>Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.</p><p>Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and services to you.</p> IMAGE LIST",
// "likes": 1000,
// "comments": [],
// "contributors": [],
// "moderators": [],
// "community": {
//   "discussions": [
//     {
//       "name": "[GUIDE] Short Title",
//       "count": "381",
//       "link": "#"
//     },
//     {
//       "name": "Just Title",
//       "count": "31",
//       "link": "#"
//     },
//     {
//       "name": "Just Some a Little bit long Title",
//       "count": "1701",
//       "link": "#"
//     }
//   ]
// },
// "funds": {
//   "currency": "USD",
//   "obtained": 7613,
//   "goal": 8500
// },
// "funding": {
//   "stages": [
//     {
//       "status": "done",
//       "text": "m1"
//     },
//     {
//       "status": "done",
//       "text": "m2"
//     },
//     {
//       "status": "InProgress",
//       "text": "m3"
//     },
//     {
//       "status": "awaiting",
//       "text": "m4"
//     },
//     {
//       "status": "awaiting",
//       "text": "m5"
//     },
//     {
//       "status": "awaiting",
//       "text": "m6"
//     }
//   ],
//   "fundedAmount": "202190.63",
//   "goalAmount": "200000.00",
//   "spentAmount": "32000",
//   "lockedAmount": "182242",
//   "overflowAmount": "17342"
// },
// "milestones": {
//   "overallProgress": 32,
//   "items": [
//     {
//       "id": 1,
//       "title": "Create the base game with 2 dungeons",
//       "shortDescription": "Maecenas faucibus tincidunt consectetur. Phasellus ac malesuada quam, vitae vulputate quam. Nulla dui ipsum, suscipit sed laoreet auctor, sagittis et mauris.",
//       "text": "Aenean eu tellus vel tortor tincidunt pharetra. Aenean mattis, sapien vel lacinia accumsan, justo mi venenatis justo, ut accumsan diam mauris sit amet ipsum. Vivamus iaculis lectus vel egestas vehicula. Phasellus in lacus nunc. Curabitur lobortis arcu neque, non rutrum elit placerat eget.",
//       "img": "http://via.placeholder.com/350x250",
//       "status": "done",
//       "stepNumber": 1,
//       "progress":{
//         "percentDays": 45,
//         "daysLeft": 97,
//         "percentDone": 17,
//         "percentSpent": 83
//       }
//     },
//     {
//       "id": 3,
//       "title": "Lorem ipsum dolor sit amet",
//       "shortDescription": "Sed commodo laoreet dolor nec euismod. Donec at ex in augue iaculis accumsan quis et libero.",
//       "text": "Proin sollicitudin faucibus mauris non pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur imperdiet urna, mollis vulputate risus feugiat sit amet. Ut turpis nulla, ultricies a ultricies eget, bibendum eu orci. In in suscipit nisl. Sed bibendum, mauris a convallis rhoncus, enim libero condimentum enim, in ultrices ligula orci ac nisl. Nunc vestibulum purus vitae lorem porta, eget aliquam nibh rhoncus.",
//       "img": "http://via.placeholder.com/350x250",
//       "status": "done",
//       "stepNumber": 3,
//       "progress":{
//         "percentDays": 34,
//         "daysLeft": 125,
//         "percentDone": 3,
//         "percentSpent": 80
//       }
//     },
//     {
//       "id": 2,
//       "title": "Praesent eu fringilla nisl",
//       "shortDescription": "Aenean aliquam erat quis tortor varius convallis. Suspendisse finibus orci at nibh pharetra, vel ullamcorper tellus mattis.",
//       "text": "Nulla facilisi. In hac habitasse platea dictumst. Mauris lacus nulla, laoreet et est ac, sollicitudin lacinia arcu. Phasellus vehicula arcu tristique nunc lacinia facilisis. Nunc egestas congue massa a euismod. Sed commodo laoreet dolor nec euismod. Donec at ex in augue iaculis accumsan quis et libero.",
//       "img": "http://via.placeholder.com/350x250",
//       "status": "InProgress",
//       "stepNumber": 2,
//       "progress":{
//         "percentDays": 91,
//         "daysLeft": 4,
//         "percentDone": 97,
//         "percentSpent": 99
//       }
//     },
//     {
//       "id": 4,
//       "title": "In hac habitasse platea dictumst",
//       "shortDescription": "Nulla facilisi. In hac habitasse platea dictumst. Mauris lacus nulla, laoreet et est ac",
//       "text": "Praesent eu fringilla nisl. Nullam iaculis odio non est ornare sodales non a massa. Sed sollicitudin nibh et ipsum sollicitudin blandit. Quisque vel enim congue, semper leo vitae, luctus nibh.",
//       "img": "http://via.placeholder.com/350x250",
//       "status": "InProgress",
//       "stepNumber": 4,
//       "progress":{
//         "percentDays": 85,
//         "daysLeft": 45,
//         "percentDone": 37,
//         "percentSpent": 84
//       }
//     }
//   ]
// },
// "bounties": [
//   {
//     "title": "Find a bug, behind the word mountains, far from the countries Vokalia and Consonantia, there live.",
//     "submited": "2851",
//     "approved": "408",
//     "prize": "30000",
//     "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu nulla sed urna malesuada ornare nec ac risus. Nam vehicula mauris ac augue finibus finibus non et erat. Integer malesuada rutrum elit non hendrerit. Nam volutpat scelerisque magna, in lacinia nulla consectetur eget. Nunc feugiat egestas arcu id lobortis. Proin rhoncus viverra mi, ac bibendum ligula molestie eget. Vivamus a tempor ligula.",
//     "explainText": "",
//     "fileSrc": ""
//   }
// ],
// "updates": [
//   {
//     "id": 0,
//     "title": "ea sint ea laborum ex",
//     "text": "Elit velit pariatur culpa cillum amet enim mollit deserunt non officia exercitation. Sunt culpa nisi aliqua esse veniam nisi consectetur nulla aute sunt. Ea do sit officia velit. Sit magna nostrud dolor amet. Enim ullamco adipisicing commodo reprehenderit. Sint ea esse eu nisi laboris ea.\r\nMollit dolore ea laboris ut velit minim nulla fugiat laboris reprehenderit eiusmod duis nulla id. Consectetur cillum tempor ullamco ipsum magna aliqua deserunt esse velit id. Qui occaecat mollit ullamco sunt velit anim veniam sunt culpa fugiat pariatur.\r\n",
//     "date": "2018-09-12"
//   },
//   {
//     "id": 1,
//     "title": "dolor aliquip fugiat et ex",
//     "text": "Laborum ad ipsum nulla culpa dolor quis aliquip laborum eu. Ullamco id Lorem anim qui nostrud deserunt. Ipsum fugiat esse aute consectetur. Excepteur dolore in aliquip do proident nulla est cupidatat commodo.\r\nEu aliqua deserunt magna officia in consequat nulla. Ut et reprehenderit fugiat elit. In esse irure eu excepteur. Velit nisi eiusmod ipsum amet veniam sit esse irure ipsum est tempor voluptate excepteur.\r\n",
//     "date": "2017-06-01"
//   },
//   {
//     "id": 2,
//     "title": "consectetur deserunt enim Lorem amet",
//     "text": "Officia labore consequat proident est esse in adipisicing ullamco aliquip fugiat culpa. Commodo esse et aute amet exercitation. Consequat ut dolore deserunt id aliqua voluptate aliqua officia cupidatat incididunt nostrud in elit. Laboris est excepteur laboris qui ex ad.\r\nSint velit ea amet culpa proident est sunt dolore eu enim ea ea. Eiusmod exercitation elit cupidatat ad incididunt velit pariatur velit dolor fugiat veniam minim culpa. Dolor consectetur cupidatat esse velit qui nulla ut do sint ipsum laboris minim aliqua incididunt. Id cupidatat adipisicing enim eu sint irure qui elit culpa minim in. Labore ea deserunt aliquip Lorem voluptate id pariatur commodo anim irure adipisicing. Consequat ea do irure officia culpa amet irure commodo nulla excepteur ad. Deserunt ullamco irure aliqua laborum enim consectetur est est ad eu exercitation minim aute.\r\n",
//     "date": "2018-06-18"
//   },
//   {
//     "id": 3,
//     "title": "aliquip mollit cillum veniam esse",
//     "text": "Proident mollit id occaecat aute adipisicing. Nostrud ea aliqua eu labore excepteur laborum commodo aliqua pariatur anim nulla et aliqua proident. Amet ut aliqua do velit qui in mollit ex aute.\r\nQuis quis eiusmod deserunt laborum ex amet incididunt Lorem elit. Mollit officia amet incididunt sint ut eu voluptate. Tempor non minim sint qui et. Quis minim ut nostrud commodo enim irure deserunt. Proident sit ex esse ullamco in veniam eu.\r\n",
//     "date": "2017-04-25"
//   },
//   {
//     "id": 4,
//     "title": "officia ipsum sint id mollit",
//     "text": "Tempor et quis consequat deserunt sint. Est dolore laborum proident et sit eiusmod exercitation. Adipisicing dolore adipisicing id et quis. Pariatur cillum excepteur non occaecat. Officia eiusmod nostrud aliquip ex cillum tempor consectetur velit veniam minim officia incididunt aliqua. Voluptate voluptate in nostrud mollit anim adipisicing fugiat incididunt veniam non duis. Culpa ea in duis culpa consectetur fugiat tempor labore velit aute sint tempor.\r\nNulla magna commodo consequat pariatur deserunt adipisicing aliquip esse irure eu id voluptate. Qui reprehenderit sint ea minim aliquip deserunt ad reprehenderit ex. Labore exercitation commodo magna mollit nisi pariatur nostrud eiusmod dolore sunt enim esse. Minim voluptate quis veniam do. Qui est nulla reprehenderit pariatur Lorem ipsum ullamco magna ex cillum anim consectetur excepteur laborum. Laborum qui sunt ullamco ipsum sit est enim ea cillum sint occaecat mollit deserunt aliqua.\r\n",
//     "date": "2017-04-03"
//   },
//   {
//     "id": 5,
//     "title": "laboris aute culpa nisi labore",
//     "text": "Deserunt excepteur deserunt tempor ullamco commodo velit officia qui sunt. In do pariatur nisi esse id minim eiusmod pariatur reprehenderit nisi occaecat. Id culpa consectetur irure ea in duis.\r\nLabore nisi duis aliquip dolor reprehenderit in non voluptate aute reprehenderit. Aliquip laborum culpa sunt dolor dolor ex laboris duis culpa velit consectetur. Culpa veniam aliquip reprehenderit elit excepteur ut. Sint laborum est adipisicing velit aute. Id ut occaecat labore aute elit.\r\n",
//     "date": "2017-11-04"
//   },
//   {
//     "id": 6,
//     "title": "est aliqua cupidatat exercitation fugiat",
//     "text": "Laborum minim tempor dolor dolor nostrud eiusmod. Tempor enim cillum nostrud minim ut nisi ut fugiat duis veniam aute. Ipsum ut ullamco est velit id et id cupidatat pariatur aliquip et ex. Duis ex anim exercitation qui magna consectetur fugiat. Aliquip amet ea culpa laboris ex officia in.\r\nCillum nisi nulla eu sint exercitation commodo voluptate cillum ullamco ex dolor sit. Ipsum aliqua laboris eu ex. Nulla elit minim duis ex amet nisi laborum. Deserunt quis dolor dolor anim. Aliquip eiusmod culpa cillum sunt laborum et. Non laboris exercitation deserunt est laborum minim aliquip ad minim.\r\n",
//     "date": "2017-11-09"
//   },
//   {
//     "id": 7,
//     "title": "nulla fugiat tempor incididunt qui",
//     "text": "Dolore Lorem cillum cillum sint. Ut id magna et nostrud in consectetur ad consectetur adipisicing veniam aliqua. Ullamco sit sunt ex ullamco.\r\nLabore ex qui excepteur occaecat consectetur quis nisi. Ullamco esse nostrud culpa ex fugiat ullamco. Ex labore dolore occaecat sunt nulla. Sint mollit ea excepteur nostrud cillum esse esse nisi dolor exercitation consequat voluptate duis laborum. Reprehenderit nulla do nostrud excepteur ut Lorem sit aliqua aliquip eu ut adipisicing magna. Aute sint excepteur anim duis aliquip sit ea eu qui.\r\n",
//     "date": "2017-03-19"
//   },
//   {
//     "id": 8,
//     "title": "anim quis fugiat officia mollit",
//     "text": "Duis et voluptate eu et. Deserunt ullamco sint est magna mollit officia incididunt dolor ut sunt magna nostrud excepteur et. Quis tempor quis ut elit eu laboris magna. Quis laboris aliqua pariatur consectetur. Amet culpa amet do Lorem velit nostrud.\r\nSint ipsum fugiat eu eiusmod culpa. Cillum qui do anim eu voluptate. Sit ad amet consectetur minim mollit ex eiusmod qui ut culpa.\r\n",
//     "date": "2018-01-22"
//   },
//   {
//     "id": 9,
//     "title": "ea qui laborum qui non",
//     "text": "Voluptate sit Lorem tempor cillum anim dolore nostrud id nostrud. Lorem minim ea fugiat cillum adipisicing qui ad ullamco. Consectetur id consequat nisi qui ea commodo aute. Mollit nulla duis consectetur nisi.\r\nEt eu ea sunt irure veniam eu et nostrud adipisicing mollit ipsum. Aliquip incididunt quis velit commodo. Ullamco duis do occaecat cillum enim minim ea in aute adipisicing nisi adipisicing duis. Occaecat excepteur esse nostrud anim mollit cillum laborum nulla laborum ut. Cillum labore eu aliqua dolore enim qui cillum esse velit aliqua non fugiat.\r\n",
//     "date": "2017-01-27"
//   },
//   {
//     "id": 10,
//     "title": "commodo veniam elit consectetur fugiat",
//     "text": "Ut minim non excepteur ullamco proident nulla officia mollit cupidatat id eu nisi. Ut culpa Lorem cupidatat minim culpa dolor dolore. Cupidatat consectetur ullamco est id nisi quis laboris occaecat dolor id in. Pariatur ex non excepteur officia eiusmod aliqua cillum qui dolor adipisicing non culpa est sunt. Magna commodo veniam pariatur aliquip aliqua tempor magna nisi nulla quis enim incididunt. Laboris est id tempor aliqua incididunt laborum in non elit mollit mollit sint ad fugiat. Incididunt veniam ad qui eu.\r\nElit duis incididunt eiusmod exercitation duis aliqua magna consequat aliquip dolore. Aliquip sit ullamco nostrud amet duis exercitation mollit. Nostrud eiusmod sunt excepteur voluptate duis in ex esse.\r\n",
//     "date": "2018-08-04"
//   },
//   {
//     "id": 11,
//     "title": "dolore qui enim pariatur in",
//     "text": "Excepteur consequat Lorem non voluptate cupidatat sit fugiat do aute. Tempor consectetur non tempor officia nisi pariatur irure ipsum. Nisi in consectetur dolor reprehenderit aute sint incididunt cillum.\r\nQui velit ea proident occaecat ut ut ea tempor voluptate officia. Est ipsum esse eiusmod eiusmod Lorem magna deserunt ea amet qui. Id ut eu ullamco ea cillum aute. Lorem tempor est esse eu. Ex magna ex velit fugiat.\r\n",
//     "date": "2017-07-20"
//   },
//   {
//     "id": 12,
//     "title": "incididunt cillum aute incididunt fugiat",
//     "text": "Aliqua non laboris aliqua dolore sint. Dolore aliquip qui cupidatat ipsum officia nisi. Consequat sint excepteur duis est est elit ea nisi.\r\nAdipisicing incididunt ea tempor sit anim ullamco. Qui dolor consequat mollit aliquip labore eiusmod exercitation nulla ad enim anim aliquip. Cupidatat labore elit excepteur sit officia cillum sint. Esse cillum officia eu tempor esse. Aliqua reprehenderit ut occaecat ex nulla ut deserunt consequat mollit enim.\r\n",
//     "date": "2017-08-22"
//   },
//   {
//     "id": 13,
//     "title": "elit duis ut laboris ea",
//     "text": "Culpa sunt eiusmod eiusmod laborum ipsum minim reprehenderit nulla tempor laborum irure sunt et ipsum. Excepteur laboris nostrud dolore exercitation consectetur officia esse incididunt ad dolor ex. Aute ea incididunt id qui qui esse adipisicing excepteur tempor culpa Lorem. Ullamco laboris aliquip cupidatat irure eu. Quis non ad enim qui duis. Nulla adipisicing veniam quis proident proident sunt proident ad reprehenderit aute ad adipisicing veniam.\r\nMinim excepteur incididunt est aliquip nulla mollit duis. Veniam est laborum ex mollit amet veniam in eu aute officia. Consequat occaecat do labore occaecat Lorem. Nostrud incididunt laboris dolor eu. Commodo irure adipisicing deserunt pariatur Lorem. Incididunt Lorem incididunt elit ullamco eiusmod elit. Officia labore dolor magna do nisi veniam mollit.\r\n",
//     "date": "2017-07-05"
//   },
//   {
//     "id": 14,
//     "title": "sit Lorem est velit elit",
//     "text": "Minim culpa nostrud laboris tempor tempor consectetur fugiat dolore. Qui sint non est labore elit do incididunt. Cupidatat sunt sit deserunt in in cupidatat exercitation.\r\nIn aliquip labore laborum sunt irure adipisicing voluptate consectetur. Excepteur qui ullamco deserunt esse nostrud excepteur sint ipsum. Irure ipsum quis exercitation laboris voluptate cillum veniam culpa officia.\r\n",
//     "date": "2017-01-09"
//   },
//   {
//     "id": 15,
//     "title": "sunt dolor voluptate incididunt sint",
//     "text": "Labore tempor proident ea aute cupidatat aliquip. Mollit excepteur sit in ipsum. Laboris aute ullamco non eu qui labore non aliquip nostrud.\r\nLorem fugiat nostrud ex anim aliqua pariatur sint ex laborum exercitation velit sit anim. Qui laborum fugiat consectetur commodo excepteur nisi nisi tempor in velit enim ea ea reprehenderit. Anim sit proident officia mollit aliqua laboris velit officia consequat nulla culpa. Nulla est dolor occaecat labore reprehenderit ad ullamco ipsum in. Id id et sit elit elit. Amet qui labore est do.\r\n",
//     "date": "2017-06-27"
//   },
//   {
//     "id": 16,
//     "title": "amet eiusmod commodo consequat amet",
//     "text": "Adipisicing qui consequat mollit nisi irure sit deserunt officia id Lorem aliqua. Sit consequat sunt pariatur minim adipisicing adipisicing eiusmod anim commodo Lorem cillum cillum enim. Do culpa magna veniam fugiat exercitation occaecat elit aliqua ut laboris. Enim magna eu duis enim enim ut veniam ea ad aliquip qui mollit et. Voluptate magna aute pariatur ad exercitation nostrud pariatur commodo. Magna est proident magna minim pariatur Lorem reprehenderit consequat. Officia ut enim sunt consectetur ea eiusmod magna excepteur ex.\r\nFugiat nulla ipsum mollit ex incididunt est. Voluptate et anim occaecat enim do. Cupidatat non excepteur magna fugiat. Do minim laborum anim adipisicing magna nulla laboris officia laborum sit Lorem. Est commodo irure quis minim laborum occaecat ut proident laborum elit adipisicing occaecat sint.\r\n",
//     "date": "2018-05-04"
//   },
//   {
//     "id": 17,
//     "title": "mollit cillum proident deserunt enim",
//     "text": "Tempor adipisicing non anim do Lorem et. Veniam exercitation ullamco culpa duis dolore fugiat. Voluptate nisi laborum nisi consequat proident. Laboris labore cupidatat quis labore ea aute esse commodo ex proident et nisi. Anim nisi laborum nostrud nulla exercitation ea ullamco qui laborum mollit non sit. Dolor ad qui anim esse dolor mollit pariatur.\r\nMollit dolor do cillum mollit occaecat tempor sit aliqua dolore. Et in sunt irure officia nisi culpa ad nostrud commodo amet laboris. Dolor est cillum ad culpa. Occaecat ad amet dolore anim nisi laboris adipisicing officia excepteur adipisicing elit. Duis non officia esse cillum pariatur nulla ex dolore consectetur qui nisi aliquip ea.\r\n",
//     "date": "2017-11-03"
//   },
//   {
//     "id": 18,
//     "title": "eiusmod laborum cupidatat ipsum consequat",
//     "text": "Ullamco consequat incididunt non Lorem laborum. Laboris duis non sunt fugiat deserunt laboris dolore irure cupidatat ex anim dolor tempor. Reprehenderit do anim ipsum proident exercitation exercitation duis. Aliquip consectetur consequat enim excepteur id laboris laboris eu.\r\nDuis occaecat nisi aute proident amet velit duis non est cillum. Fugiat pariatur anim est aliqua commodo non fugiat voluptate cupidatat enim. Consectetur cupidatat veniam nisi magna est fugiat proident veniam incididunt tempor ea id ea. Excepteur ad tempor adipisicing ullamco. Veniam adipisicing officia est aliquip cupidatat. Cupidatat ullamco cupidatat sunt amet pariatur pariatur. Commodo dolor cillum enim labore irure elit duis.\r\n",
//     "date": "2018-03-08"
//   },
//   {
//     "id": 19,
//     "title": "mollit non irure pariatur anim",
//     "text": "Ex amet minim cupidatat elit reprehenderit elit Lorem ad tempor est in aliqua. Labore quis sint commodo duis officia commodo aute elit eu consectetur ea esse ut officia. Cupidatat incididunt est proident amet voluptate nostrud amet. Cillum quis deserunt quis ea. Exercitation cupidatat est labore consectetur incididunt ea non incididunt magna ipsum. Culpa reprehenderit aliqua aute id do aute.\r\nQui ipsum consectetur exercitation sunt aute proident minim sint esse exercitation deserunt eiusmod dolore Lorem. Cupidatat minim cillum culpa sunt minim excepteur cupidatat eu consequat exercitation duis sint. Deserunt est voluptate adipisicing aliquip excepteur in pariatur commodo reprehenderit officia fugiat laborum officia culpa. Officia culpa nisi ex sunt aute laboris laboris proident et nostrud tempor magna nulla nulla. Ut sit commodo culpa ex et ad exercitation pariatur esse officia amet elit occaecat est.\r\n",
//     "date": "2017-11-03"
//   }
// ],
// "pledges": [
//   {
//     "id": 1,
//     "title": "Some awesome Things",
//     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a sapien luctus, placerat massa pellentesque, consectetur ante. Nam dui est, cursus at consequat quis, malesuada eget eros. ",
//     "includes": [],
//     "deliveryDate": "2019-01-12 03:46:26 -03:00",
//     "shipsTo": "USA",
//     "backers": "39",
//     "minPrice": 10
//   },
//   {
//     "id": 2,
//     "title": "Wiggly Peaple",
//     "description": "Maecenas a sapien luctus, placerat massa pellentesque, consectetur ante. Nam dui est, cursus at consequat quis, malesuada eget eros. ",
//     "includes": [
//       {
//         "text": "Morbi vitae orci lacus"
//       }
//     ],
//     "deliveryDate": "2018-12-15 03:46:26 -03:00",
//     "shipsTo": "Canada",
//     "backers": "27",
//     "minPrice": 15
//   },
//   {
//     "id": 3,
//     "title": "Praesent venenatis semper magna",
//     "description": "Maecenas a sapien luctus, placerat massa pellentesque, consectetur ante. Nam dui est, cursus at consequat quis, malesuada eget eros. ",
//     "includes": [
//       {
//         "text": "Morbi vitae orci lacus"
//       },
//       {
//         "text": "Praesent rhoncus tellus vel dapibus auctor"
//       },
//       {
//         "text": "Morbi vitae orci lacus"
//       }
//     ],
//     "deliveryDate": "2019-04-25 03:46:26 -03:00",
//     "shipsTo": "Anywhere in the world",
//     "backers": "15",
//     "minPrice": 20
//   }
// ]
