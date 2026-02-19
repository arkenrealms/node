// arken/packages/node/test/api.spec.ts

import { getFilter } from '../api';

describe('api/getFilter', () => {
  test('maps id equals/in/contains operators to _id consistently', () => {
    expect(
      getFilter({
        where: {
          id: { equals: 'abc' },
          AND: [{ id: { in: ['a', 'b'] } }],
          OR: [{ id: { contains: 'x.y' } }],
        },
      })
    ).toEqual({
      $and: [{ _id: 'abc' }, { _id: { $in: ['a', 'b'] } }, { $or: [{ _id: { $regex: 'x\\.y', $options: 'i' } }] }],
    });
  });

  test('ignores empty contains fragments in OR/AND clauses', () => {
    expect(
      getFilter({
        where: {
          OR: [{ name: { contains: '' } }, { email: { contains: 'abc' } }],
          AND: [{ title: { contains: '' } }],
        },
      })
    ).toEqual({
      $or: [{ email: { $regex: 'abc', $options: 'i' } }],
    });
  });
});
