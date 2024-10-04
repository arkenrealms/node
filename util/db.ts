import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

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
  )
    return data;

  if (Array.isArray(data)) {
    return data.map(decodeRequest);
  }

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
  if (typeof string !== 'string') {
    throw new TypeError('Expected a string');
  }

  return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}
