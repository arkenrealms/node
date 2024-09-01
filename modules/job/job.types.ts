import { z, Model, Document } from '../../util/mongo';
import * as schema from './job.schema';
export type * from './job.service';

export type Job = z.infer<typeof schema.Job>;
export type JobDocument = Job & Document;

export type Mappings = {
  Job: Model<JobDocument>;
};
