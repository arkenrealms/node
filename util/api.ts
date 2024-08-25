import Mongoose from 'mongoose';
import crossFetch from 'cross-fetch';
import { escapeStringRegexp } from './db';

interface FetchVariables {
  [key: string]: any;
}

interface WhereClause {
  id?: { equals: string };
  email?: { equals: string };
  key?: { equals: string };
  name?: { equals: string };
  OR?: WhereClause[];
  AND?: WhereClause[];
  [key: string]: any;
}

interface ApolloVariables {
  where: WhereClause;
}

export function getQueryFromApolloVariables(variables: ApolloVariables): Record<string, any> {
  const query: Record<string, any> = {};

  if (variables.where.id?.equals) {
  }

  if (variables.where.email?.equals) {
    query.email = variables.where.email.equals;
  }

  if (variables.where.key?.equals) {
    query.key = variables.where.key.equals;
  }

  if (variables.where.name?.equals) {
    query.name = variables.where.name.equals;
  }

  const processOperator = (operator: WhereClause, condition: 'OR' | 'AND') => {
    Object.keys(operator).forEach((key) => {
      if (operator[key]?.contains) {
        query[key] = ['key', 'title', 'name'].includes(key)
          ? { $regex: escapeStringRegexp(operator[key].contains), $options: 'i' }
          : operator[key].contains;
      } else if (operator[key]?.in) {
        query[key] = { $in: operator[key].in };
      }
    });
  };

  variables.where.OR?.forEach((operator) => processOperator(operator, 'OR'));
  variables.where.AND?.forEach((operator) => processOperator(operator, 'AND'));

  return query;
}

export async function fetch(url: string, variables: FetchVariables): Promise<any> {
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
    body: JSON.stringify(variables),
    method: 'POST',
  });
  return response.json();
}
