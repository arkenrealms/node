import { z, Model, Document } from '../../util/mongo';
import * as schema from './game.schema';
export type * from './game.service';

export type Game = z.infer<typeof schema.Game>;
export type GameDocument = Game & Document;

export type Era = z.infer<typeof schema.Era>;
export type EraDocument = Era & Document;

export type Mappings = {
  Game: Model<GameDocument>;
  Era: Model<EraDocument>;
};
