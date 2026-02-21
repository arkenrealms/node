// arken/packages/node/test/api.spec.ts

import Mongoose from 'mongoose';
import axios from 'axios';
import { fetch as apiFetch, getFilter } from '../api';

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    post: jest.fn(),
  },
}));

const mockedAxiosPost = axios.post as jest.Mock;

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

  test('supports nested OR nodes inside AND clauses', () => {
    expect(
      getFilter({
        where: {
          AND: [
            { status: { equals: 'active' } },
            { OR: [{ email: { contains: 'foo' } }, { username: { contains: 'bar' } }] },
          ],
        },
      })
    ).toEqual({
      $and: [
        { status: 'active' },
        {
          $or: [
            { email: { $regex: 'foo', $options: 'i' } },
            { username: { $regex: 'bar', $options: 'i' } },
          ],
        },
      ],
    });
  });

  test('supports scalar shorthand values as equality checks', () => {
    expect(
      getFilter({
        where: {
          id: 'abc123',
          status: 'active',
        },
      })
    ).toEqual({
      $and: [{ _id: 'abc123' }, { status: 'active' }],
    });
  });

  test('supports scalar shorthand values inside nested clauses', () => {
    expect(
      getFilter({
        where: {
          OR: [{ id: 'foo' }, { name: 'bar' }],
        },
      })
    ).toEqual({
      $or: [{ _id: 'foo' }, { name: 'bar' }],
    });
  });

  test('keeps non-plain objects (Date/ObjectId values) as equality conditions', () => {
    const createdAt = new Date('2026-02-18T12:34:56.000Z');
    const objectId = new Mongoose.Types.ObjectId('507f1f77bcf86cd799439011');

    expect(
      getFilter({
        where: {
          createdAt,
          id: objectId,
        },
      })
    ).toEqual({
      $and: [{ createdAt }, { _id: objectId }],
    });
  });

  test('preserves plain-object equality filters when no operator keys are present', () => {
    expect(
      getFilter({
        where: {
          metadata: { rarity: 'legendary', flags: ['quest'] },
        },
      })
    ).toEqual({
      metadata: { rarity: 'legendary', flags: ['quest'] },
    });
  });
});

describe('api/fetch', () => {
  beforeEach(() => {
    mockedAxiosPost.mockReset();
  });

  test('rejects invalid URL values before network call', async () => {
    await expect(apiFetch('   ', { where: {} })).rejects.toThrow('Invalid fetch URL');
    expect(mockedAxiosPost).not.toHaveBeenCalled();
  });

  test('rejects non-object query payload before network call', async () => {
    await expect(apiFetch('https://example.com/graphql', [] as unknown as Record<string, unknown>)).rejects.toThrow(
      'Invalid fetch query payload'
    );
    expect(mockedAxiosPost).not.toHaveBeenCalled();
  });

  test('trims URL input before network call', async () => {
    mockedAxiosPost.mockResolvedValue({ data: { ok: true } });

    await expect(apiFetch('  https://example.com/graphql  ', { where: { id: '1' } })).resolves.toEqual({ ok: true });
    expect(mockedAxiosPost).toHaveBeenCalledWith(
      'https://example.com/graphql',
      { where: { id: '1' } },
      expect.objectContaining({ timeout: 10000 })
    );
  });

  test('applies deterministic timeout and returns response data', async () => {
    mockedAxiosPost.mockResolvedValue({ data: { ok: true } });

    await expect(apiFetch('https://example.com/graphql', { where: { id: '1' } })).resolves.toEqual({ ok: true });
    expect(mockedAxiosPost).toHaveBeenCalledWith(
      'https://example.com/graphql',
      { where: { id: '1' } },
      expect.objectContaining({ timeout: 10000 })
    );
  });
});
