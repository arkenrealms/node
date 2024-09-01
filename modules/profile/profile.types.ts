import { z } from 'zod';
import * as schema from './profile.schema';
import { Document, Model } from '../../util/mongo';
export type * from './profile.service';

export type Profile = z.infer<typeof schema.Profile>;
export type ProfileDocument = Profile & Document;

export type Mappings = {
  Profile: Model<ProfileDocument>;
};
