// arken/node/db.ts
//
// Compile-first version to avoid TS getting stuck in huge Mongoose generic type relations.
// Runtime behavior is preserved; types are intentionally loosened at Mongoose/Query boundaries.

import { ReplaySubject } from 'rxjs';
import Loki from 'lokijs';
// import * as jetpack from 'fs-jetpack';
import mongoose, { ConnectOptions, Schema, Document, Types, Connection } from 'mongoose';
import { Model } from './mongo';
import safeStringify from 'fast-safe-stringify';
import fsPath from 'path';

import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

export function isPostgresError(error: unknown): boolean {
  if (!error) return false;
  return _.every(['severity', 'code', 'detail', 'internalQuery', 'routine'], (attr) => _.has(error as object, attr));
}

export function isUniqueConstraintViolation(error: any) {
  return isPostgresError(error) && (error as any).code === '23505';
}

export function generateLongId(): string {
  return uuidv4().toUpperCase();
}

export function generateShortId() {
  const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
  return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => ((Math.random() * 16) | 0).toString(16)).toLowerCase();
}

export const uuidFormat = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

export function generateLongId2(): string {
  return uuidFormat
    .replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    })
    .toUpperCase();
}

export function decodeRequest(data: any): any {
  if (
    data === undefined ||
    data === null ||
    typeof data === 'string' ||
    typeof data === 'number' ||
    typeof data === 'boolean'
  ) {
    return data;
  }

  if (Array.isArray(data)) return data.map(decodeRequest);

  if (typeof data !== 'object') return data;

  const res: any = {};

  for (const key in data) {
    if (key === 'set') {
      return data[key];
    } else if (['create', 'connectOrCreate', 'upsert'].includes(key)) {
      return decodeRequest(data[key]);
    } else {
      res[key] = decodeRequest(data[key]);
    }
  }

  return Object.keys(res).length === 0 ? null : res;
}

export function escapeStringRegexp(string: string): string {
  if (typeof string !== 'string') throw new TypeError('Expected a string');
  return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}

let app: any;
let log: (...msgs: any[]) => void;

const isObject = (obj: any): obj is Record<string, any> => obj && typeof obj === 'object';

const createNestedProxy = <T extends Record<string, any>>(obj: T): T =>
  new Proxy(obj, {
    // @ts-ignore
    get(target, prop: keyof T) {
      if (prop in target) {
        // @ts-ignore
        if (isObject((target as any)[prop]) && !((target as any)[prop] instanceof Promise)) {
          return createNestedProxy((target as any)[prop]);
        }
        return (target as any)[prop];
      } else {
        (target as any)[prop] = {};
        return createNestedProxy((target as any)[prop]);
      }
    },
  });

class Database {
  public loki: Loki | null = null;
  public mongoose!: Connection;

  public collections: Record<string, any>[] = [];

  public channel = {
    log: new ReplaySubject<any[]>(10),
  };

  public data = {
    model: {} as Record<string, Model<any>>,
  };

  constructor() {}

  log(...msgs: any[]) {
    this.channel.log.next(msgs);
  }

  Schema = mongoose.Schema;
  schema: Record<string, Schema> = {};

  async initLoki() {
    this.loki = new Loki(null as any, {
      autoload: false,
      autosave: false,
    });

    this.restoreData();

    setInterval(this.saveData.bind(this), 30 * 1000);
  }

  async initMongoose() {
    this.mongoose = await mongoose
      .connect(process.env.MONGO_ENDPOINT!, {
        retryWrites: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ssl: false,
        tls: false,
        serverSelectionTimeoutMS: 5000,
        directConnection: true,
      } as any as ConnectOptions)
      .then((conn) => conn.connection);

    process.on('SIGINT', async () => {
      try {
        // @ts-ignore
        if ((this.mongoose as any)?.connection) {
          // @ts-ignore
          await (this.mongoose as any).connection.close();
        }
      } catch {}
      console.log('Mongoose connection disconnected through app termination');
      process.exit(0);
    });
  }

  model<T extends Document = Document>(key: string, schema?: Schema): Model<T> | undefined {
    if (schema) {
      this.data.model[key] = new Model<any>(mongoose.model(key, schema, key) as any);
    }

    if (!this.data.model[key]) {
      log?.(`DB Model not found: ${key}`);
    }

    return this.data.model[key] as Model<T>;
  }

  initCollection(name: string, key: string, data: Record<string, any>) {
    if (!this.collections[name]) (this.collections as any)[name] = {};

    const colGroup = (this.collections as any)[name];

    if (!colGroup[key]) {
      colGroup[key] = this.loki!.addCollection(`${name}.${key}`);
    }

    if (key === 'config') {
      delete (data as any).meta;
      delete (data as any).$loki;

      if (!colGroup[key].length) {
        colGroup[key].insert(data);
      }

      for (const k in data) {
        if (colGroup[key].data[0][k] === undefined && (data as any)[k] !== undefined) {
          colGroup[key].data[0][k] = (data as any)[k];
        }
      }

      for (const k in colGroup[key].data[0]) {
        if (Object.prototype.hasOwnProperty.call(colGroup[key].data[0], k)) {
          if (colGroup[key][k] === undefined) {
            Object.defineProperty(colGroup[key], k, {
              get() {
                return colGroup[key].data[0][k];
              },
              set(x: any) {
                colGroup[key].data[0][k] = x;
              },
            });
          }
        }
      }
    } else {
      for (const i in data as any) {
        const item = (data as any)[i];
        delete item.meta;
        delete item.$loki;

        if (!colGroup[key].data.length) {
          colGroup[key].insert(item);
        }

        for (const k in item) {
          if (typeof colGroup[key].data[i] === 'undefined') colGroup[key].data[i] = {};
          if (colGroup[key].data[i][k] === undefined && item[k] !== undefined) {
            colGroup[key].data[i][k] = item[k];
          }
        }
      }
    }

    colGroup[key].ensureId();
    colGroup[key].ensureAllIndexes(true);
  }

  initCollections(name: string, data: Record<string, any>) {
    log?.(`Adding collection: ${name}`);

    for (const key in data) {
      this.initCollection(name, key, (data as any)[key]);
    }

    return (this.collections as any)[name];
  }

  getCollections(name: string) {
    return (this.collections as any)[name];
  }

  saveData() {
    log?.('Saving data', ['p1']);

    const data: Record<string, any> = {};
    void data;
  }

  restoreData() {
    log?.('Restoring data', ['p1']);
  }

  beautify(data: any) {
    return JSON.stringify(JSON.parse(safeStringify(data)), null, 4);
  }
}

export const db = new Database();

export async function init(props: { app: any }) {
  app = props.app;
  log = db.log.bind(db);

  await db.initLoki();
  await db.initMongoose();

  return db;
}
