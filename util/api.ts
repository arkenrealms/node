import Mongoose from 'mongoose';
import crossFetch from 'cross-fetch';
import { initTRPC, inferRouterInputs } from '@trpc/server';
import { escapeStringRegexp } from './db';
import type { Query } from '../schema';

interface FetchQuery {
  [key: string]: any;
}

export function getFilter(query: any): Record<string, any> {
  const filter: Record<string, any> = {};

  if (!query?.where) return filter;

  if (query.where.id?.equals) {
  }

  if (query.where.email?.equals) {
    filter.email = query.where.email.equals;
  }

  if (query.where.key?.equals) {
    filter.key = query.where.key.equals;
  }

  if (query.where.name?.equals) {
    filter.name = query.where.name.equals;
  }

  const processOperator = (operator: any, condition: 'OR' | 'AND') => {
    Object.keys(operator).forEach((key) => {
      if (operator[key]?.contains) {
        filter[key] = ['key', 'name'].includes(key)
          ? { $regex: escapeStringRegexp(operator[key].contains), $options: 'i' }
          : operator[key].contains;
      } else if (operator[key]?.in) {
        filter[key] = { $in: operator[key].in };
      }
    });
  };

  query.where.OR?.forEach((operator) => processOperator(operator, 'OR'));
  query.where.AND?.forEach((operator) => processOperator(operator, 'AND'));

  return filter;
}

export async function fetch(url: string, query: FetchQuery): Promise<any> {
  const response = await crossFetch(url, {
    headers: {
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
      'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
    body: JSON.stringify(query),
    method: 'POST',
  });
  return response.json();
}
