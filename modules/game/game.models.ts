import * as mongo from '../../util/mongo';
import type * as Types from './game.types';

export const Game = mongo.createModel<Types.GameDocument>('Game', {
  productId: { type: mongo.Schema.Types.ObjectId, ref: 'Product', required: true },
});

export const Era = mongo.createModel<Types.EraDocument>('Era', {});
