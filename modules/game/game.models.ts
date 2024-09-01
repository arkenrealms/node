import * as mongo from '../../util/mongo';
import type * as Types from './game.types';

// Game

export const GameSchema = mongo.createSchema<Types.GameDocument>('Game', {
  productId: { type: mongo.Schema.Types.ObjectId, ref: 'Product', required: true },
});
export const Game = mongo.createModel<Types.GameDocument>('Game', GameSchema);

// Era

export const EraSchema = mongo.createSchema<Types.EraDocument>('Era', {});
export const Era = mongo.createModel<Types.EraDocument>('Era', EraSchema); // mongoose.model<Types.EraDocument>('Era', EraSchema);
