// arken/packages/node/test/util.spec.ts

import * as util from '../util';

describe('util subpath exports', () => {
  test('exposes api helpers without circular root re-export dependency', () => {
    expect(typeof util.getFilter).toBe('function');
    expect(util.getFilter({ where: { id: { equals: 'abc' } } })).toEqual({ _id: 'abc' });
  });

  test('exposes rpc helpers', () => {
    expect(typeof util.serialize).toBe('function');
    expect(typeof util.deserialize).toBe('function');

    const encoded = util.serialize({ x: 1 });
    expect(util.deserialize(encoded)).toEqual({ x: 1 });
  });
});
