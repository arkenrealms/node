import mongoose, {
  Types,
  Model as MongooseModel,
  Schema,
  SchemaDefinition,
  SchemaOptions,
  Document,
  Query,
  UpdateWriteOpResult,
  QueryOptions,
  FilterQuery,
  UpdateQuery,
  UpdateWithAggregationPipeline,
  ProjectionType,
  Collection,
} from 'mongoose';

export type { Mixed, ObjectIdSchemaDefinition, AnyArray, StringSchemaDefinition } from 'mongoose'; // Mixed type
import pluralize from 'pluralize';
import { toCamelCase } from '../util/string';
export { z } from 'zod';

export { Schema } from 'mongoose';
export { Document } from 'mongoose';

const CommonFields = {
  key: { type: String, minlength: 1, maxlength: 200, trim: true },
  name: { type: String },
  description: { type: String },
  status: {
    type: String,
    default: 'Active', // Default value set here
    enum: ['Paused', 'Pending', 'Active', 'Archived'],
  },
  data: { type: Object, default: {} }, // Default value set here
  meta: { type: Object, default: {} }, // Default value set here
  createdById: { type: Schema.Types.ObjectId, ref: 'Profile' },
  editedById: { type: Schema.Types.ObjectId, ref: 'Profile' },
  deletedById: { type: Schema.Types.ObjectId, ref: 'Profile' },
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date },
  deletedDate: { type: Date },
};

const EntityFields = {
  applicationId: { type: Schema.Types.ObjectId, ref: 'Application', required: true },
  ownerId: { type: Schema.Types.ObjectId, ref: 'Profile' },
};

type PreHookMethod = keyof Query<any, any> | 'save' | 'validate';

interface CustomSchemaOptions extends SchemaOptions {
  extend?: 'EntityFields' | 'CommonFields';
  indexes?: { [field: string]: any }[];
  virtuals?: {
    name: string;
    options?: { ref?: string; localField?: string; foreignField?: string; justOne?: boolean; through?: any };
  }[];
  pre?: { method: PreHookMethod | RegExp; handler: (this: Document, next: any) => void }[];
}

export function createSchema<T>(
  name: string,
  customFields: SchemaDefinition<T> = {} as SchemaDefinition<T>,
  options: CustomSchemaOptions = {}
): Schema<T> {
  const extend = options.extend !== undefined ? options.extend : 'EntityFields';
  const collectionName = options.collection || name;

  let schema: Schema<T>;

  if (extend === 'EntityFields') {
    schema = new Schema<T>(
      {
        ...CommonFields,
        ...EntityFields,
        ...customFields,
      } as SchemaDefinition<T>,
      {
        timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
        collection: collectionName,
      }
    );
  } else {
    schema = new Schema<T>(
      {
        ...CommonFields,
        ...customFields,
      } as SchemaDefinition<T>,
      {
        timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
        collection: collectionName,
      }
    );
  }

  // Apply indexes
  if (options.indexes) {
    options.indexes.forEach((index) => schema.index(index));
  } else {
    schema.index({ key: 1 });
    schema.index({ name: 1 });
    schema.index({ status: 1 });

    // if (extend === 'EntityFields') {
    //   schema.index({ applicationId: 1, key: 1 }, { unique: true } as IndexOptions);
    // }
  }

  // Apply virtuals
  if (options.virtuals) {
    options.virtuals.forEach((virtual) => {
      const ref =
        virtual.options?.ref || pluralize.singular(virtual.name.charAt(0).toUpperCase() + virtual.name.slice(1));
      const localField = virtual.options?.localField || '_id';
      const foreignField = virtual.options?.foreignField || `${toCamelCase(name)}Id`; // Default foreignField
      const justOne =
        virtual.options?.justOne !== undefined ? virtual.options.justOne : !pluralize.isPlural(virtual.name);

      schema.virtual(virtual.name, {
        ref,
        localField,
        foreignField,
        justOne,
        ...virtual.options,
      });
    });
  }

  // Apply pre middleware
  if (options.pre) {
    options.pre.forEach((preHook) => {
      schema.pre(preHook.method as any, preHook.handler); // Casting to 'any' for compatibility with Mongoose types
    });
  }

  return schema;
}

export function createModel<T extends Document>(
  key: string,
  schema: SchemaDefinition<T> = {} as SchemaDefinition<T>,
  options: CustomSchemaOptions = {}
) {
  return new Model<T>(mongoose.model<T>(key, createSchema<T>(key, schema, options)));
}

export class Model<T extends Document> {
  protected model: MongooseModel<T>;
  protected schema: Schema;
  public filters: Record<string, any> = {};
  public filterOmitModels: string[] = ['Omniverse', 'Metaverse', 'Application'];
  public collection: Collection;

  constructor(model: MongooseModel<T>) {
    this.model = model;
    this.collection = model.collection;
    this.schema = model.schema;
  }

  aggregate(...props: any[]): any {
    return this.model.aggregate(...props);
  }

  where(arg1: string, arg2?: any): Query<T[], T>;
  where(arg1: object): Query<T[], T>;
  where(arg1: string | object, arg2?: any): Query<T[], T> {
    return this.model.where(arg1 as any, arg2);
  }

  find(
    filter: FilterQuery<T> = {},
    projection?: ProjectionType<T> | null,
    options?: mongoose.QueryOptions
  ): Query<T[], T> {
    if (!this.filterOmitModels.includes(this.model.modelName)) {
      // @ts-ignore
      filter.applicationId = this.filters.applicationId;
    }

    // if (filter.applicationId && typeof filter.applicationId === 'string') {
    //   // @ts-ignore
    //   filter.applicationId = new mongoose.Schema.Types.ObjectId(filter.applicationId);
    // }

    return this.model.find(filter, options);
  }

  findOne(
    filter: FilterQuery<T> = {},
    projection?: ProjectionType<T> | null,
    options?: QueryOptions
  ): Query<T | null, T> {
    if (!this.filterOmitModels.includes(this.model.modelName)) {
      // @ts-ignore
      filter.applicationId = this.filters.applicationId;
    }

    // if (filter.applicationId && typeof filter.applicationId === 'string') {
    //   // @ts-ignore
    //   filter.applicationId = new mongoose.Schema.Types.ObjectId(filter.applicationId);
    // }

    return this.model.findOne(filter, options);
  }

  findOneAndUpdate(
    filter: FilterQuery<T>,
    update: UpdateQuery<T> | mongoose.UpdateWithAggregationPipeline,
    options?: QueryOptions & { new?: boolean }
  ): Query<T | null, T> {
    if (!this.filterOmitModels.includes(this.model.modelName)) {
      // @ts-ignore
      filter.applicationId = this.filters.applicationId;
    }

    // if (filter.applicationId && typeof filter.applicationId === 'string') {
    //   // @ts-ignore
    //   filter.applicationId = new mongoose.Schema.Types.ObjectId(filter.applicationId);
    // }

    return this.model.findOneAndUpdate(filter, update, options);
  }

  findOneAndDelete(filter: FilterQuery<T>, options?: QueryOptions): Query<T | null, T> {
    // Add custom filtering logic based on your requirements
    if (!this.filterOmitModels.includes(this.model.modelName)) {
      // @ts-ignore
      filter.applicationId = this.filters.applicationId; // Ensure correct typing
    }

    // if (filter.applicationId && typeof filter.applicationId === 'string') {
    //   // @ts-ignore
    //   filter.applicationId = new mongoose.Schema.Types.ObjectId(filter.applicationId);
    // }

    // Call the original findOneAndDelete method
    return this.model.findOneAndDelete(filter, options);
  }

  findAll(): Query<T[], T> {
    return this.model.find();
  }

  findById(
    id: Types.ObjectId | string,
    projection?: ProjectionType<T> | null,
    options?: QueryOptions
  ): Query<T | null, T> {
    const filter: FilterQuery<T> = { _id: id } as FilterQuery<T>;

    if (!this.filterOmitModels.includes(this.model.modelName)) {
      // @ts-ignore
      filter.applicationId = this.filters.applicationId;
    }

    // if (filter.applicationId && typeof filter.applicationId === 'string') {
    //   // @ts-ignore
    //   filter.applicationId = new mongoose.Schema.Types.ObjectId(filter.applicationId);
    // }

    return this.model.findOne(filter, projection, options);
  }

  findByIdAndUpdate(
    id: Types.ObjectId | string,
    update: UpdateQuery<T> | mongoose.UpdateWithAggregationPipeline,
    options?: QueryOptions & { new?: boolean }
  ): Query<T | null, T> {
    const filter: FilterQuery<T> = { _id: id } as FilterQuery<T>;

    if (!this.filterOmitModels.includes(this.model.modelName)) {
      // @ts-ignore
      filter.applicationId = this.filters.applicationId;
    }

    // if (filter.applicationId && typeof filter.applicationId === 'string') {
    //   // @ts-ignore
    //   filter.applicationId = new mongoose.Schema.Types.ObjectId(filter.applicationId);
    // }

    return this.model.findOneAndUpdate(filter, update, options);
  }

  findByIdAndDelete(id: Types.ObjectId | string, options?: QueryOptions): Query<T | null, T> {
    const filter: FilterQuery<T> = { _id: id } as FilterQuery<T>;

    if (!this.filterOmitModels.includes(this.model.modelName)) {
      // @ts-ignore
      filter.applicationId = this.filters.applicationId;
    }

    // if (filter.applicationId && typeof filter.applicationId === 'string') {
    //   // @ts-ignore
    //   filter.applicationId = new mongoose.Schema.Types.ObjectId(filter.applicationId);
    // }

    return this.model.findOneAndDelete(filter, options);
  }

  async upsert(
    filter: FilterQuery<T> = {},
    create: Partial<T> = {},
    update: UpdateQuery<T> = {},
    options: QueryOptions = {}
  ): Promise<T> {
    console.log('Trying to find model with filter', filter, options);
    const res = await this.findOne(filter, null, options).exec();
    console.log('Result of findOne', res);
    if (res) {
      await this.updateOne(filter, update, options).exec();
      return await this.findOne(filter, null, options).exec();
    } else {
      return (await this.create(create)) as T;
    }
  }

  create(doc: Partial<T>): Promise<T>;
  create(doc: Partial<T>[]): Promise<T[]>;
  create(doc: Partial<T> | Partial<T>[]): Promise<T | T[]> {
    if (!this.filterOmitModels.includes(this.model.modelName)) {
      // @ts-ignore
      doc.applicationId = this.filters.applicationId;
    }

    // // @ts-ignore
    // if (doc.applicationId && typeof doc.applicationId === 'string') {
    //   // @ts-ignore
    //   doc.applicationId = new mongoose.Schema.Types.ObjectId(doc.applicationId);
    // }

    const res = this.model.create(doc as T | T[]);

    const createHandler = <U extends object>(path: string[] = []): ProxyHandler<U> => ({
      // @ts-ignore
      get: (target: U, key: keyof U): any => {
        if (key === 'isProxy') return true;
        if (typeof target[key] === 'object' && target[key] != null) {
          // @ts-ignore
          return new Proxy(target[key], createHandler([...path, key as string]));
        }
        return target[key];
      },
      // @ts-ignore
      set: (target: U, key: keyof U, value: any): boolean => {
        console.log(`Setting ${[...path, key]} to: `, value);
        target[key] = value;
        return true;
      },
    });

    if ((res as any).meta) (res as any).meta = new Proxy((res as any).meta, createHandler<any>());

    return res;
  }

  update(
    filter: FilterQuery<T>,
    update: UpdateQuery<T> | UpdateWithAggregationPipeline,
    options?: QueryOptions
  ): Query<UpdateWriteOpResult, T> {
    if (!this.filterOmitModels.includes(this.model.modelName)) {
      // @ts-ignore
      filter.applicationId = this.filters.applicationId;
      // @ts-ignore
      update.applicationId = this.filters.applicationId; // Ensure the update object includes applicationId
    }

    // if (filter.applicationId && typeof filter.applicationId === 'string') {
    //   // @ts-ignore
    //   filter.applicationId = new mongoose.Schema.Types.ObjectId(filter.applicationId);
    // }

    // // @ts-ignore
    // if (update.applicationId && typeof update.applicationId === 'string') {
    //   // @ts-ignore
    //   update.applicationId = new mongoose.Schema.Types.ObjectId(update.applicationId);
    // }
    // @ts-ignore
    return this.model.update(filter, update, options);
  }

  updateOne(
    filter: FilterQuery<T>,
    update: UpdateQuery<T> | UpdateWithAggregationPipeline,
    options?: QueryOptions
  ): Query<UpdateWriteOpResult, T> {
    if (!this.filterOmitModels.includes(this.model.modelName)) {
      // @ts-ignore
      filter.applicationId = this.filters.applicationId;
      // @ts-ignore
      update.applicationId = this.filters.applicationId; // Ensure the update object includes applicationId
    }

    // if (filter.applicationId && typeof filter.applicationId === 'string') {
    //   // @ts-ignore
    //   filter.applicationId = new mongoose.Schema.Types.ObjectId(filter.applicationId);
    // }

    // // @ts-ignore
    // if (update.applicationId && typeof update.applicationId === 'string') {
    //   // @ts-ignore
    //   update.applicationId = new mongoose.Schema.Types.ObjectId(update.applicationId);
    // }
    // @ts-ignore
    return this.model.updateOne(filter, update, options);
  }

  updateMany(
    filter: FilterQuery<T>,
    update: UpdateQuery<T> | UpdateWithAggregationPipeline, // Depending on use case
    options?: QueryOptions
  ): Query<UpdateWriteOpResult, T> {
    // @ts-ignore
    return this.model.updateMany(filter, update, options);
  }

  countDocuments(): any {
    return this.model.countDocuments();
  }
}
