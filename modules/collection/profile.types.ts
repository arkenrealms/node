import { z } from 'zod';
import * as schema from './collection.schema';
import { Document, Model } from '../../util/mongo';

export type CollectibleCollection = z.infer<typeof schema.CollectibleCollection>;
export type CollectibleCardBox = z.infer<typeof schema.CollectibleCardBox>;
export type CollectibleCardPack = z.infer<typeof schema.CollectibleCardPack>;
export type CollectibleCard = z.infer<typeof schema.CollectibleCard>;

export type CollectibleCollectionDocument = CollectibleCollection & Document;
export type CollectibleCardBoxDocument = CollectibleCardBox & Document;
export type CollectibleCardPackDocument = CollectibleCardPack & Document;
export type CollectibleCardDocument = CollectibleCard & Document;

export type Mappings = {
  CollectibleCollection: Model<CollectibleCollectionDocument>;
  CollectibleCardBox: Model<CollectibleCardBoxDocument>;
  CollectibleCardPack: Model<CollectibleCardPackDocument>;
  CollectibleCard: Model<CollectibleCardDocument>;
};
