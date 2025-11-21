import Mongoose from 'mongoose';
import crossFetch from 'cross-fetch';

interface FetchQuery {
  [key: string]: any;
}
// Safely escape user text for a regex
function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function getFilter(query: any): Record<string, any> {
  const filter: Record<string, any> = {};
  const where = query?.where;
  if (!where || typeof where !== 'object') return filter;

  // Helper to turn a single field condition into a Mongo filter fragment
  const buildField = (field: string, cond: any) => {
    if (cond == null || typeof cond !== 'object') return undefined;

    // equals
    if ('equals' in cond) {
      if (field === 'id' || field === '_id') return { _id: cond.equals };
      return { [field]: cond.equals };
    }

    // contains (case-insensitive regex). Skip if empty string.
    if ('contains' in cond) {
      const term = cond.contains ?? '';
      if (typeof term === 'string' && term.length === 0) return undefined; // no-op for ""
      return {
        [field]:
          // For typical text-ish fields use regex, else fallback to raw contains (rare)
          { $regex: escapeRegExp(String(term)), $options: 'i' },
      };
    }

    // in
    if ('in' in cond && Array.isArray(cond.in)) {
      return { [field]: { $in: cond.in } };
    }

    return undefined;
  };

  // Collect $and and $or fragments
  const andClauses: any[] = [];
  const orClauses: any[] = [];

  // 1) Top-level simple fields (e.g., where.key.contains, where.email.equals, etc.)
  Object.keys(where).forEach((k) => {
    if (k === 'OR' || k === 'AND') return;
    const frag = buildField(k, where[k]);
    if (frag) andClauses.push(frag);
  });

  // 2) OR array
  if (Array.isArray(where.OR)) {
    const ors: any[] = [];
    for (const obj of where.OR) {
      if (!obj || typeof obj !== 'object') continue;
      const localAnd: any[] = [];
      for (const key of Object.keys(obj)) {
        const frag = buildField(key, obj[key]);
        if (frag) localAnd.push(frag);
      }
      if (localAnd.length === 1) ors.push(localAnd[0]);
      else if (localAnd.length > 1) ors.push({ $and: localAnd });
    }
    if (ors.length) orClauses.push(...ors);
  }

  // 3) AND array
  if (Array.isArray(where.AND)) {
    for (const obj of where.AND) {
      if (!obj || typeof obj !== 'object') continue;
      const localAnd: any[] = [];
      for (const key of Object.keys(obj)) {
        const frag = buildField(key, obj[key]);
        if (frag) localAnd.push(frag);
      }
      if (localAnd.length === 1) andClauses.push(localAnd[0]);
      else if (localAnd.length > 1) andClauses.push({ $and: localAnd });
    }
  }

  // Assemble final filter
  if (andClauses.length && orClauses.length) {
    return { $and: [...andClauses, { $or: orClauses }] };
  }
  if (andClauses.length) {
    return andClauses.length === 1 ? andClauses[0] : { $and: andClauses };
  }
  if (orClauses.length) {
    return { $or: orClauses };
  }

  console.log('Converted query to filter', query, filter);
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
