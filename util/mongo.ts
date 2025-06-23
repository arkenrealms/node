// mongo.ts

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

import { VirtualType, HydratedDocument } from 'mongoose';

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
  merkleLeaf: { type: String },
  merkleIndex: { type: Number },
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

interface VirtualOptions<T = any> {
  name: string;
  ref?: string;
  refPath?: string;
  localField?: string;
  foreignField?: string;
  justOne?: boolean;
  get?: (this: HydratedDocument<T>, value: any, virtual: VirtualType<T>) => any;
  set?: (this: HydratedDocument<T>, value: any, virtual: VirtualType<T>) => void;
  match?: any;
  options?: any;
}

interface CustomSchemaOptions extends SchemaOptions {
  extend?: 'EntityFields' | 'CommonFields';
  indexes?: { [field: string]: any }[];
  virtuals?: VirtualOptions[];
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

  // schema.plugin(require('mongoose-autopopulate'));

  schema.set('toJSON', {
    virtuals: true, // Include virtual fields
    versionKey: false, // Remove the __v version field
    transform: (doc, ret) => {
      ret.id = ret._id.toString(); // Assign _id to id
      delete ret._id; // Remove _id from the output
      return ret;
    },
  });

  schema.set('toObject', {
    virtuals: true, // Include virtual fields
    versionKey: false, // Remove the __v version field
    transform: (doc, ret) => {
      ret.id = ret._id.toString(); // Assign _id to id
      delete ret._id; // Remove _id from the output
      return ret;
    },
  });

  // Apply indexes
  if (options.indexes) {
    options.indexes.forEach((index) => schema.index(index));
  } else {
    schema.index({ key: 1 });
    schema.index({ name: 1 });
    schema.index({ status: 1 });
  }

  // Apply virtuals
  if (options.virtuals) {
    options.virtuals.forEach((virtual) => {
      const virtualOptions: any = {
        localField: virtual.localField || `${toCamelCase(virtual.name)}Id`,
        foreignField: virtual.foreignField || '_id',
        justOne: virtual.justOne !== undefined ? virtual.justOne : !pluralize.isPlural(virtual.name),
      };

      if (virtual.refPath) {
        virtualOptions.refPath = virtual.refPath;
      } else if (virtual.ref) {
        virtualOptions.ref = virtual.ref;
      } else if (schema.path(virtual.name + 'Id')) {
        virtualOptions.ref = pluralize.singular(schema.path(virtual.name + 'Id').options.ref);
      } else {
        virtualOptions.ref = pluralize.singular(virtual.name.charAt(0).toUpperCase() + virtual.name.slice(1));
      }

      if (virtual.options) {
        virtualOptions.options = virtual.options;
      }

      if (virtual.match) {
        virtualOptions.match = virtual.match;
      }

      // if (collectionName === 'Game') console.log(schema, virtualOptions);

      const schemaVirtual = schema.virtual(virtual.name, virtualOptions);

      if (virtual.get) {
        schemaVirtual.get(virtual.get);
      }

      if (virtual.set) {
        schemaVirtual.set(virtual.set);
      }
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

const modelMap: Record<string, Model<any>> = {};

export function createModel<T extends Document>(
  key: string,
  schemaFields: SchemaDefinition<T> = {} as SchemaDefinition<T>,
  options: CustomSchemaOptions = {}
) {
  if (modelMap[key]) return modelMap[key];

  const schema = createSchema<T>(key, schemaFields, options);

  const res = new Model<T>(mongoose.model<T>(key, schema));

  modelMap[key] = res;

  return res;
}

// Model class without proxy methods
export class Model<T extends Document> {
  protected model: MongooseModel<T>;
  protected schema: Schema;
  public filters: Record<string, any> = {};
  public filterOmitModels: string[] = ['Omniverse', 'Metaverse', 'Application'];
  public collection: Collection;

  private docSaveQueue = new WeakMap<Document, Promise<T>>();

  constructor(model: MongooseModel<T>) {
    this.model = model;
    this.collection = model.collection;
    this.schema = model.schema;
  }

  // toJSON() {
  //   // @ts-ignore
  //   return this.model.toJSON();
  // }

  populate(
    docs: T | T[],
    options: string | mongoose.PopulateOptions | string[] | mongoose.PopulateOptions[]
  ): Promise<T | T[]> {
    // If options is an array of strings, convert it to an array of PopulateOptions
    if (Array.isArray(options) && typeof options[0] === 'string') {
      options = (options as string[]).map((path) => ({ path }));
    }

    return this.model.populate(docs, options as string | mongoose.PopulateOptions | mongoose.PopulateOptions[]);
  }

  // New method to directly access a related model
  related(name: string) {
    return mongoose.model(name);
  }

  // New method to get related documents via virtuals
  findWithRelations(filter: FilterQuery<T> = {}, relations: string[] = [], options?: QueryOptions): Query<T[], T> {
    return this.find(filter, null, options).populate(relations.join(' '));
  }

  findOneWithRelations(
    filter: FilterQuery<T> = {},
    relations: string[] = [],
    options?: QueryOptions
  ): Query<T | null, T> {
    return this.findOne(filter, null, options).populate(relations.join(' '));
  }

  // Overridden exec method
  async exec(query: Query<any, T>): Promise<any> {
    return query.exec();
  }

  // Override the find method to include filters
  find(
    filter: FilterQuery<T> = {},
    projection?: ProjectionType<T> | null,
    options?: mongoose.QueryOptions
  ): Query<T[], T> {
    if (this.filters.applicationId && !this.filterOmitModels.includes(this.model.modelName)) {
      // @ts-ignore
      filter.applicationId = this.filters.applicationId;
    }

    return this.model.find(filter, projection, options);
  }

  // Override the findOne method to include filters
  findOne(
    filter: FilterQuery<T> = {},
    projection?: ProjectionType<T> | null,
    options?: QueryOptions
  ): Query<T | null, T> {
    if (this.filters.applicationId && !this.filterOmitModels.includes(this.model.modelName)) {
      // @ts-ignore
      filter.applicationId = this.filters.applicationId;
    }

    return this.model.findOne(filter, projection, options);
  }

  // Override the findById method
  findById(
    id: Types.ObjectId | string,
    projection?: ProjectionType<T> | null,
    options?: QueryOptions
  ): Query<T | null, T> {
    return this.model.findById(id, projection, options);
  }

  // Override the findOneAndUpdate method to include filters
  findOneAndUpdate(
    filter: FilterQuery<T>,
    update: UpdateQuery<T> | mongoose.UpdateWithAggregationPipeline,
    options?: QueryOptions & { new?: boolean }
  ): Query<T | null, T> {
    if (this.filters.applicationId && !this.filterOmitModels.includes(this.model.modelName)) {
      // @ts-ignore
      filter.applicationId = this.filters.applicationId;
    }

    return this.model.findOneAndUpdate(filter, update, options);
  }

  // Override the findOneAndDelete method to include filters
  findOneAndDelete(filter: FilterQuery<T>, options?: QueryOptions): Query<T | null, T> {
    if (this.filters.applicationId && !this.filterOmitModels.includes(this.model.modelName)) {
      // @ts-ignore
      filter.applicationId = this.filters.applicationId;
    }

    return this.model.findOneAndDelete(filter, options);
  }

  // Override the findByIdAndUpdate method to include filters
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

    return this.model.findOneAndUpdate(filter, update, options);
  }

  // Override the findByIdAndDelete method to include filters
  findByIdAndDelete(id: Types.ObjectId | string, options?: QueryOptions): Query<T | null, T> {
    const filter: FilterQuery<T> = { _id: id } as FilterQuery<T>;

    if (!this.filterOmitModels.includes(this.model.modelName)) {
      // @ts-ignore
      filter.applicationId = this.filters.applicationId;
    }

    return this.model.findOneAndDelete(filter, options);
  }

  // Override the create method to include filters
  create(doc: Partial<T>): Promise<T>;
  create(doc: Partial<T>[]): Promise<T[]>;
  create(doc: Partial<T> | Partial<T>[]): Promise<T | T[]> {
    if (this.filters.applicationId && !this.filterOmitModels.includes(this.model.modelName)) {
      if (Array.isArray(doc)) {
        // @ts-ignore
        doc.forEach((d) => (d.applicationId = this.filters.applicationId));
      } else {
        // @ts-ignore
        doc.applicationId = this.filters.applicationId;
      }
    }

    return this.model.create(doc as T | T[]);
  }

  // Override the upsert method to include filters
  async upsert(
    filter: FilterQuery<T> = {},
    create: Partial<T> = {},
    update: UpdateQuery<T> = {},
    options: QueryOptions = {}
  ): Promise<T> {
    const existing = await this.findOne(filter, null, options).exec();
    if (existing) {
      await this.updateOne(filter, update, options).exec();
      return (await this.findOne(filter, null, options).exec()) as T;
    } else {
      return this.create(create) as Promise<T>;
    }
  }

  // Override the updateOne method to include filters
  updateOne(
    filter: FilterQuery<T>,
    update: UpdateQuery<T> | UpdateWithAggregationPipeline,
    options?: any
  ): Query<UpdateWriteOpResult, T> {
    if (this.filters.applicationId && !this.filterOmitModels.includes(this.model.modelName)) {
      // @ts-ignore
      filter.applicationId = this.filters.applicationId;
      // @ts-ignore
      update.applicationId = this.filters.applicationId;
    }

    return this.model.updateOne(filter, update, options);
  }

  // Override the updateMany method to include filters
  updateMany(
    filter: FilterQuery<T>,
    update: UpdateQuery<T> | UpdateWithAggregationPipeline,
    options?: any
  ): Query<UpdateWriteOpResult, T> {
    if (this.filters.applicationId && !this.filterOmitModels.includes(this.model.modelName)) {
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

  async findOneProxy(
    filter: FilterQuery<T> = {},
    projection?: ProjectionType<T> | null,
    options?: QueryOptions
  ): Promise<(T & Record<string, any>) | null> {
    // Use your normal findOne to get the doc
    const doc = await this.findOne(filter, projection, options);
    if (!doc) return null;

    // Return a doc+model merged proxy
    return createDocProxy(doc, this);
  }
  /**
   * saveQueued(doc):
   *   - If there's an existing in-flight save promise for the same doc, wait until that finishes.
   *   - Then call doc.save().
   *   - Store this new save promise in the WeakMap so future calls chain onto it.
   */
  public async saveQueued(doc: T): Promise<T> {
    const existingPromise = this.docSaveQueue.get(doc) ?? Promise.resolve<T>(doc);

    // Chain a new promise onto the existing one
    const newSavePromise = existingPromise
      .then(async () => {
        // By the time we reach here, previous saves are done.
        return await doc.save(); // Mongoose's normal doc.save()
      })
      .catch((err) => {
        // If the previous promise was rejected, propagate the error
        // but remove from the queue so a later call can try again
        this.docSaveQueue.delete(doc);
        throw err;
      });

    // Store the new promise in the queue
    this.docSaveQueue.set(doc, newSavePromise);

    // Return the doc once the new promise completes
    return newSavePromise;
  }
}

export const addTagVirtuals = (modelName: string) => [
  {
    name: 'tags',
    ref: 'Node',
    localField: '_id',
    foreignField: 'from',
    justOne: false,
    match: { relationKey: 'tag', fromModel: modelName },
  },
];

export const addApplicationVirtual = () => [
  {
    name: 'application',
    ref: 'Application',
    localField: 'applicationId',
    foreignField: '_id',
    justOne: true,
  },
];

export function createDocProxy<T extends Document>(doc: T, modelWrapper: Model<T>) {
  return new Proxy(doc as T & Record<string, any>, {
    get(target, prop, receiver) {
      // 1. If the property exists on the doc itself (fields, doc methods, etc.)
      if (prop in target) {
        return Reflect.get(target, prop, receiver);
      }

      // 2. Otherwise, if the property is in your Model wrapper, return that
      if (prop in modelWrapper) {
        const val = Reflect.get(modelWrapper, prop, modelWrapper);
        // If it's a function (like saveQueued), bind it or adapt it
        if (typeof val === 'function') {
          // For example, if we want `proxyDoc.saveQueued()` to automatically
          // call modelWrapper.saveQueued(doc), we can do:
          if (prop === 'saveQueued') {
            return function (...args: any[]) {
              // automatically pass `doc` as the first arg
              // @ts-ignore
              return modelWrapper.saveQueued(doc, ...args);
            };
          }
          // Otherwise just bind the method normally
          return val.bind(modelWrapper);
        }
        return val;
      }

      // 3. If not on doc or modelWrapper, return undefined
      return undefined;
    },
  });
}
