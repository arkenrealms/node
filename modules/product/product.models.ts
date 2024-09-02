import * as mongo from '../../util/mongo';
import type * as Types from './product.types';

export const Product = mongo.createModel<Types.ProductDocument>(
  'Product',
  {
    shortDescription: { type: String, maxlength: 300, required: true },
    content: { type: String, required: true },
    communityId: { type: mongo.Schema.Types.ObjectId, ref: 'Community', required: true },
    type: { type: String, default: 'game', maxlength: 100 },
    releaseDate: { type: Date },
  },
  {
    virtuals: [
      {
        name: 'projects',
        options: {
          ref: 'Project',
          localField: '_id',
          foreignField: 'productId',
        },
      },
      {
        name: 'leaderboards',
        options: {
          ref: 'Leaderboard',
          localField: '_id',
          foreignField: 'productId',
        },
      },
      {
        name: 'games',
        options: {
          ref: 'Game',
          localField: '_id',
          foreignField: 'productId',
        },
      },
      {
        name: 'productUpdates',
        options: {
          ref: 'ProductUpdate',
          localField: '_id',
          foreignField: 'productId',
        },
      },
    ],
  }
);

export const ProductUpdate = mongo.createModel<Types.ProductUpdateDocument>('ProductUpdate', {
  productId: { type: mongo.Schema.Types.ObjectId, ref: 'Product', required: true },
  updateContent: { type: String, required: true },
  updateDate: { type: Date, required: true },
});
