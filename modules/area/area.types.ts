import { z } from 'zod';
import * as schema from './area.schema';
import { Document, Model } from '../../util/mongo';

export type * from './area.router';
export type * from './area.service';
export type { RouterContext } from '../../types';

export type Area = z.infer<typeof schema.Area>;
export type AreaLandmark = z.infer<typeof schema.AreaLandmark>;
export type AreaType = z.infer<typeof schema.AreaType>;

export type AreaDocument = Area & Document;
export type AreaLandmarkDocument = AreaLandmark & Document;
export type AreaTypeDocument = AreaType & Document;

export type Mappings = {
  Area: Model<AreaDocument>;
  AreaLandmark: Model<AreaLandmarkDocument>;
  AreaType: Model<AreaTypeDocument>;
};
