import * as mongo from '../../util/mongo';
import type * as Types from './area.types';

// Area

export const AreaSchema = mongo.createSchema<Types.AreaDocument>('Area', {
  type: { type: String, default: 'zone' },
  landmarks: [{ type: mongo.Schema.Types.ObjectId, ref: 'AreaLandmark' }],
});

export const Area = mongo.createModel<Types.AreaDocument>('Area', AreaSchema);

// AreaLandmark

export const AreaLandmarkSchema = mongo.createSchema<Types.AreaLandmarkDocument>('AreaLandmark', {
  areaId: { type: mongo.Schema.Types.ObjectId, ref: 'Area' },
  area: { type: mongo.Schema.Types.ObjectId, ref: 'Area' },
});

export const AreaLandmark = mongo.createModel<Types.AreaLandmarkDocument>('AreaLandmark', AreaLandmarkSchema);

// AreaType

export const AreaTypeSchema = mongo.createSchema<Types.AreaTypeDocument>('AreaType', {
  name: { type: String, required: true },
  description: { type: String },
});

export const AreaType = mongo.createModel<Types.AreaTypeDocument>('AreaType', AreaTypeSchema);
