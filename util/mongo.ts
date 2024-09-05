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
    name?: string;
    ref?: string;
    localField?: string;
    foreignField?: string;
    justOne?: boolean;
    match?: any;
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
    const virtuals = {};
    options.virtuals.forEach((virtual) => {
      const ref = virtual.ref || virtual.name.charAt(0).toUpperCase() + virtual.name.slice(1);
      const localField = virtual.localField || '_id';
      const foreignField = virtual.foreignField || `${toCamelCase(name)}Id`; // Default foreignField
      const justOne = virtual.justOne !== undefined ? virtual.justOne : !pluralize.isPlural(virtual.name);
      const match = virtual.match || {};

      virtuals[virtual.name] = {
        options: {
          ref,
          localField,
          foreignField,
          justOne,
          match,
        },
      };
    });
    schema.set('virtuals', virtuals);
  }

  // Apply pre middleware
  if (options.pre) {
    options.pre.forEach((preHook) => {
      schema.pre(preHook.method as any, preHook.handler); // Casting to 'any' for compatibility with Mongoose types
    });
  }

  return schema;
}

const modelMap: any = {};

export function createModel<T extends Document>(
  key: string,
  schema: SchemaDefinition<T> = {} as SchemaDefinition<T>,
  options: CustomSchemaOptions = {}
) {
  if (modelMap[key]) return modelMap[key];

  const res = new Model<T>(mongoose.model<T>(key, createSchema<T>(key, schema, options)));
  modelMap[key] = res;
  return res;
}

// Proxy handler for dynamic relationship resolution
const nodeProxyHandler = {
  get(target, prop, receiver) {
    if (Reflect.has(target, prop)) {
      return Reflect.get(target, prop, receiver);
    }

    const fromRelation = prop.match(/^from([A-Z][a-zA-Z]+)$/);
    const toRelation = prop.match(/^to([A-Z][a-zA-Z]+)$/);

    if (fromRelation || toRelation) {
      const relationName = (fromRelation || toRelation)[1];
      const relationType = modelMap[relationName];

      if (relationType) {
        const relationIdField = fromRelation ? `from${relationName}Id` : `to${relationName}Id`;
        const relationId = target[relationIdField];

        if (relationId) {
          return relationType.findById(relationId).exec();
        }
      }
    }

    return undefined;
  },
};

// Model class with proxy methods
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

  // Overridden exec method to wrap the result in a proxy
  async exec(query: Query<T[], T>): Promise<any> {
    const result = await query.lean().exec();
    if (Array.isArray(result)) {
      return result.map((doc) => new Proxy(doc, nodeProxyHandler));
    }
    return result ? new Proxy(result, nodeProxyHandler) : result;
  }

  // Override the find method to handle proxy
  find(
    filter: FilterQuery<T> = {},
    projection?: ProjectionType<T> | null,
    options?: mongoose.QueryOptions
  ): Query<T[], T> {
    if (!this.filterOmitModels.includes(this.model.modelName)) {
      // @ts-ignore
      filter.applicationId = this.filters.applicationId;
    }

    return this.model.find(filter, projection, options);
  }

  // Override the findOne method to handle proxy
  findOne(
    filter: FilterQuery<T> = {},
    projection?: ProjectionType<T> | null,
    options?: QueryOptions
  ): Query<T | null, T> {
    if (!this.filterOmitModels.includes(this.model.modelName)) {
      // @ts-ignore
      filter.applicationId = this.filters.applicationId;
    }

    return this.model.findOne(filter, projection, options);
  }

  // Override the findById method to handle proxy
  findById(
    id: Types.ObjectId | string,
    projection?: ProjectionType<T> | null,
    options?: QueryOptions
  ): Query<T | null, T> {
    return this.model.findById(id, projection, options);
  }

  // Override the findOneAndUpdate method to handle proxy
  findOneAndUpdate(
    filter: FilterQuery<T>,
    update: UpdateQuery<T> | mongoose.UpdateWithAggregationPipeline,
    options?: QueryOptions & { new?: boolean }
  ): Query<T | null, T> {
    if (!this.filterOmitModels.includes(this.model.modelName)) {
      // @ts-ignore
      filter.applicationId = this.filters.applicationId;
    }

    return this.model.findOneAndUpdate(filter, update, options);
  }

  // Override the findOneAndDelete method to handle proxy
  findOneAndDelete(filter: FilterQuery<T>, options?: QueryOptions): Query<T | null, T> {
    if (!this.filterOmitModels.includes(this.model.modelName)) {
      // @ts-ignore
      filter.applicationId = this.filters.applicationId;
    }

    return this.model.findOneAndDelete(filter, options);
  }

  // Override the findByIdAndUpdate method to handle proxy
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

  // Override the findByIdAndDelete method to handle proxy
  findByIdAndDelete(id: Types.ObjectId | string, options?: QueryOptions): Query<T | null, T> {
    const filter: FilterQuery<T> = { _id: id } as FilterQuery<T>;

    if (!this.filterOmitModels.includes(this.model.modelName)) {
      // @ts-ignore
      filter.applicationId = this.filters.applicationId;
    }

    return this.model.findOneAndDelete(filter, options);
  }

  // Override the create method to handle proxy
  create(doc: Partial<T>): Promise<T>;
  create(doc: Partial<T>[]): Promise<T[]>;
  create(doc: Partial<T> | Partial<T>[]): Promise<T | T[]> {
    if (!this.filterOmitModels.includes(this.model.modelName)) {
      if (Array.isArray(doc)) {
        // @ts-ignore
        doc.forEach((d) => (d.applicationId = this.filters.applicationId));
      } else {
        // @ts-ignore
        doc.applicationId = this.filters.applicationId;
      }
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

  // Override the upsert method to handle proxy
  async upsert(
    filter: FilterQuery<T> = {},
    create: Partial<T> = {},
    update: UpdateQuery<T> = {},
    options: QueryOptions = {}
  ): Promise<T> {
    const existing = await this.findOne(filter, null, options).exec();
    if (existing) {
      await this.updateOne(filter, update, options).exec();
      return await this.findOne(filter, null, options).exec();
    } else {
      return this.create(create) as Promise<T>;
    }
  }

  updateOne(
    filter: FilterQuery<T>,
    update: UpdateQuery<T> | UpdateWithAggregationPipeline,
    options?: any
  ): Query<UpdateWriteOpResult, T> {
    if (!this.filterOmitModels.includes(this.model.modelName)) {
      // @ts-ignore
      filter.applicationId = this.filters.applicationId;
      // @ts-ignore
      update.applicationId = this.filters.applicationId;
    }

    return this.model.updateOne(filter, update, options);
  }

  updateMany(
    filter: FilterQuery<T>,
    update: UpdateQuery<T> | UpdateWithAggregationPipeline,
    options?: any
  ): Query<UpdateWriteOpResult, T> {
    if (!this.filterOmitModels.includes(this.model.modelName)) {
      // @ts-ignore
      filter.applicationId = this.filters.applicationId;
    }

    return this.model.updateMany(filter, update, options);
  }

  // Count documents method
  countDocuments(): any {
    return this.model.countDocuments();
  }

  // Method for handling aggregate
  aggregate(...props: any[]): any {
    return this.model.aggregate(...props);
  }

  // Method for handling where conditions
  where(arg1: string, arg2?: any): Query<T[], T>;
  where(arg1: object): Query<T[], T>;
  where(arg1: string | object, arg2?: any): Query<T[], T> {
    return this.model.where(arg1 as any, arg2);
  }

  // Find all documents method
  findAll(): Query<T[], T> {
    return this.model.find();
  }
}
