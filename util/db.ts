import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash'
import dayjs from 'dayjs'
import { differenceObjectDeep, flattenKeys } from './object'

interface MutationOptions {
  includeWhere?: boolean
  includeCreate?: boolean
  includeUpdate?: boolean
}

interface Revision {
  id: string
  objectId: string
  objectType: string
  actionType: string
  reason: string
  meta: {
    changes: Array<{ key: string; before: any; after: any }>
  }
  user: any
}

export function generateLongId(): string {
  return uuidv4().toUpperCase()
}

export const uuidFormat = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'

export function generateLongId2(): string {
  return uuidFormat
    .replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
    .toUpperCase()
}

export function processModel(item: any, item2: any): void {
  if (!item.__original) {
    item.__original = _.cloneDeep(item2)
  }

  for (const key in item) {
    if (key === '__original') continue
    if (Array.isArray(item[key])) {
      item[key].forEach((subitem: any) => processModel(subitem, subitem))
    } else if (item[key]?.id) {
      processModel(item[key], item[key])
    }
  }
}

export function decodeRequest(data: any): any {
  if (
    data === undefined ||
    data === null ||
    typeof data === 'string' ||
    typeof data === 'number' ||
    typeof data === 'boolean'
  )
    return data

  if (Array.isArray(data)) {
    return data.map(decodeRequest)
  }

  if (typeof data !== 'object') return data

  const res: any = {}

  for (const key in data) {
    if (key === 'set') {
      return data[key]
    } else if (['create', 'connectOrCreate', 'upsert'].includes(key)) {
      return decodeRequest(data[key])
    } else {
      res[key] = decodeRequest(data[key])
    }
  }

  return Object.keys(res).length === 0 ? null : res
}

export function escapeStringRegexp(string: string): string {
  if (typeof string !== 'string') {
    throw new TypeError('Expected a string')
  }

  return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d')
}

function getMutation(
  name: string,
  before: any,
  after: any,
  options: MutationOptions = { includeWhere: false, includeCreate: false, includeUpdate: false },
  generateId: () => string
): any {
  if (Array.isArray(after)) {
    return after.map((item, key) => getMutation(name, before?.[key], after[key], options, generateId))
  }

  if (after && typeof after === 'object') {
    const res: any = {}

    if (options.includeUpdate) {
      res.update = transformRequest(name, 'update', before, after, generateId)
    }

    if (options.includeCreate) {
      res.create = transformRequest(name, 'create', before, after, generateId)
    }

    if (options.includeWhere) {
      res.where = after.email ? { email: after.email } : { id: after.id }
    }

    return res
  }

  const res: any = {}
  if (options.includeUpdate) {
    res.update = after
  }
  if (options.includeCreate) {
    res.create = after
  }
  return res
}

export function transformRequest<T>(
  name: string,
  type: 'create' | 'update',
  before: any,
  after: any,
  generateId: () => string,
  withRevision = true
): any {
  const clonedBefore = _.cloneDeep(before ?? {})
  const clonedAfter = _.cloneDeep(after)

  if (type === 'update') {
    ;['__typename', '__original'].forEach((prop) => {
      delete clonedBefore[prop]
      delete clonedAfter[prop]
    })

    cleanModelMeta(clonedBefore)
    cleanModelMeta(clonedAfter)

    const res = cleanModelMeta(_.cloneDeep(differenceObjectDeep(clonedBefore, clonedAfter)))

    clonedAfter[`revisionsOn${name}s`] ??= []

    Object.keys(clonedAfter).forEach((key) => {
      if (!Object.keys(clonedBefore).includes(key)) {
        delete clonedAfter[key]
        delete res[key]
      }
    })

    Object.keys(clonedBefore).forEach((key) => {
      if (!Object.keys(clonedAfter).includes(key)) {
        delete clonedBefore[key]
        delete res[key]
      }
    })

    if (withRevision) {
      const revision = getRevision(name, clonedBefore, clonedAfter, generateId)
      if (revision?.meta?.changes?.length > 0) {
        clonedAfter[`revisionsOn${name}s`].push({ revision })
      }
    }

    for (const key in clonedAfter) {
      if (key === 'create' || key === 'update') continue

      if (key.includes('revisionsOn')) {
        res[key] = {
          upsert: clonedAfter[key].map((item: any, key2: any) => {
            item.revision.profile ??= {}
            item.revision.profile.id ??= generateId()
            item.revision.profile.meta ??= {}
            item.revision.profile.name ??= 'System'
            item.revision.profile.email ??= 'system@arken.gg'
            item.revision.profile.photoUrl ??= '/images/system-avatar.png'

            return getMutation(
              key,
              clonedBefore?.[key]?.[key2],
              clonedAfter[key][key2],
              { includeWhere: true, includeCreate: true, includeUpdate: true },
              generateId
            )
          }),
        }
      } else if (key.includes(`On${name}s`) || key.includes(`${name}sOn`)) {
        res[key] = {
          upsert: clonedAfter[key].map((item: any, key2: any) => {
            return getMutation(
              key,
              clonedBefore?.[key]?.[key2],
              clonedAfter[key][key2],
              { includeWhere: true, includeCreate: true, includeUpdate: true },
              generateId
            )
          }),
        }
      } else {
        if (key === 'Profile') {
          clonedAfter.profile.meta ??= {}
          res[key] = {
            upsert: {
              create: getMutation(key, clonedBefore?.[key], clonedAfter[key], { includeCreate: true }, generateId)
                .create,
              update:
                getMutation(key, clonedBefore?.[key], clonedAfter[key], { includeUpdate: true }, generateId).update ??
                {},
            },
          }
        } else if (key === 'meta') {
          res[key] = clonedAfter[key]
        } else if (key === 'revision') {
          res[key] = {
            upsert: getMutation(
              key,
              clonedBefore?.[key],
              clonedAfter[key],
              { includeWhere: true, includeCreate: true, includeUpdate: true },
              generateId
            ),
          }
        } else if (key === 'orders') {
          delete res[key]
        } else if (clonedAfter[key] instanceof Date) {
        } else if (dayjs.isDayjs(clonedAfter[key])) {
          clonedAfter[key] = clonedAfter[key].toDate()
        } else if (name === 'rolesOnProfiles' && (key === 'id' || key === 'status')) {
          res[key] = { set: clonedAfter[key] }
        } else if (Array.isArray(clonedAfter[key])) {
          res[key] = {
            upsert: clonedAfter[key].map((item: any, key2: any) => {
              return getMutation(
                key,
                clonedBefore?.[key]?.[key2],
                clonedAfter[key][key2],
                { includeWhere: true, includeCreate: true, includeUpdate: true },
                generateId
              )
            }),
          }
        } else if (clonedAfter[key] && typeof clonedAfter[key] === 'object') {
          if (clonedBefore?.[key]?.id !== clonedAfter[key]?.id) {
            res[key] = {
              connectOrCreate: getMutation(
                key,
                clonedBefore?.[key],
                clonedAfter[key],
                { includeWhere: true, includeCreate: true },
                generateId
              ),
            }
          } else {
            const mut = getMutation(
              key,
              clonedBefore?.[key],
              clonedAfter[key],
              { includeWhere: true, includeUpdate: true },
              generateId
            )

            res[key] = {
              upsert: {
                create: getMutation(key, clonedBefore?.[key], clonedAfter[key], { includeCreate: true }, generateId)
                  .create,
                update: mut.update || (Array.isArray(res[key]) ? [] : {}),
                where: mut.where,
              },
            }
          }
        } else if (clonedAfter[key] !== undefined) {
          res[key] = { set: clonedAfter[key] }
        }
      }
    }

    return res
  }

  if (type === 'create') {
    if (!after || typeof after !== 'object') return after

    const res = _.cloneDeep(after)
    delete res.__original
    delete res.__typename

    for (const key in res) {
      if (key.includes('revisionsOn')) {
        res[key] = {
          connectOrCreate: res[key].map((item: any, key2: any) => {
            return getMutation(
              key,
              before?.[key]?.[key2],
              after[key][key2],
              { includeWhere: true, includeCreate: true },
              generateId
            )
          }),
        }
      } else if (key.includes('On')) {
        res[key] = {
          connectOrCreate: res[key].map((item: any, key2: any) => {
            return getMutation(
              key,
              before?.[key]?.[key2],
              after[key][key2],
              { includeWhere: true, includeCreate: true },
              generateId
            )
          }),
        }
      } else {
        if (key === 'user') {
          after.profile.meta ??= {}
          res[key] = {
            connectOrCreate: getMutation(
              key,
              before?.[key],
              after[key],
              { includeWhere: true, includeCreate: true },
              generateId
            ),
          }
        } else if (dayjs.isDayjs(res[key])) {
          res[key] = res[key].toDate()
        } else if (res[key] && typeof res[key] === 'object') {
          res[key] = {
            connectOrCreate: getMutation(
              key,
              before?.[key],
              after[key],
              {
                includeWhere: true,
                includeCreate: true,
              },
              generateId
            ),
          }
        }
      }
    }

    return res
  }
}

export function transformResponse(res: any): any {
  if (!res) return res

  if (Array.isArray(res)) {
    res.forEach((item) => transformResponse(item))
  } else if (res && typeof res === 'object') {
    for (const key in res) {
      transformResponse(res[key])
    }
  }

  return res
}

function cleanModelMeta(obj: any): any {
  for (const key in obj) {
    if (key === '__original' || key === '__typename') {
      delete obj[key]
      continue
    }

    const item = obj[key]
    if (Array.isArray(item)) {
      item.forEach((subitem: any) => cleanModelMeta(subitem))
    } else if (item && typeof item === 'object') {
      cleanModelMeta(item)
    }
  }

  return obj
}

export function getRevision(name: string, before: any, after: any, generateId: () => string): Revision | undefined {
  const cleanedBefore = cleanModelMeta(_.cloneDeep(before))
  const cleanedAfter = cleanModelMeta(_.cloneDeep(after))

  delete cleanedBefore[`revisionsOn${name}s`]
  delete cleanedAfter[`revisionsOn${name}s`]

  const beforeFlattened = flattenKeys(cleanedBefore)
  const afterFlattened = flattenKeys(cleanedAfter)
  const diff = differenceObjectDeep(beforeFlattened, afterFlattened)

  if (_.isEqual(beforeFlattened, afterFlattened)) return undefined

  const changes = Object.keys(diff).map((key) => ({
    key,
    before: beforeFlattened[key],
    after: afterFlattened[key],
  }))

  return {
    id: generateId(),
    objectId: after.id,
    objectType: name,
    actionType: 'edit',
    reason: 'Editing',
    meta: { changes },
    user: after.profile,
  }
}
