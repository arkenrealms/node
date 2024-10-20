import { z, ObjectId, Entity } from '../../schema';

export const CollectibleCollection = Entity.merge(
  z.object({
    hype: z.number().optional(),
    value: z.number().optional(),
  })
);

export const CollectibleCardBox = Entity.merge(
  z.object({
    collectibleCollectionId: ObjectId,
    franchise: z.string().min(1),
  })
);

export const CollectibleCardPack = Entity.merge(
  z.object({
    collectibleCollectionId: ObjectId,
    franchise: z.string().min(1),
    ungraded: z.number().optional(),
    grade10: z.number().optional(),
    grade9: z.number().optional(),
    grade8: z.number().optional(),
    grade7: z.number().optional(),
    grade6: z.number().optional(),
    grade5: z.number().optional(),
    grade4: z.number().optional(),
    grade3: z.number().optional(),
    grade2: z.number().optional(),
    grade1: z.number().optional(),
    additional: z.string().optional(),
    code: z.string().optional(),
    hype: z.number().optional(),
    series: z.string().optional(),
    category: z.string().optional(),
    year: z.number().optional(),
  })
);

export const CollectibleCard = Entity.merge(
  z.object({
    collectibleCollectionId: ObjectId,
    franchise: z.string().min(1),
    ungraded: z.number().optional(),
    grade10: z.number().optional(),
    grade9: z.number().optional(),
    grade8: z.number().optional(),
    grade7: z.number().optional(),
    grade6: z.number().optional(),
    grade5: z.number().optional(),
    grade4: z.number().optional(),
    grade3: z.number().optional(),
    grade2: z.number().optional(),
    grade1: z.number().optional(),
    additional: z.string().optional(),
    code: z.string().optional(),
    hype: z.number().optional(),
    series: z.string().optional(),
    category: z.string().optional(),
    year: z.number().optional(),
  })
);

export const Price = Entity.merge(
  z.object({
    avg: z.number().or(z.string()).optional(),
    max: z.number().or(z.string()).optional(),
    min: z.number().or(z.string()).optional(),
    num_transactions: z.number().optional(),
    source: z.string(),
    updated_at: z.string().or(z.string()).optional(),
  })
);

export const Card = Entity.merge(
  z.object({
    set_id: ObjectId,
    name: z.string(),
    language: z.string(),
    release_date: z.string(),
    card_id: z.number(),
    price: z.array(Price),
  })
);

export const Set = Entity.merge(
  z.object({
    series_id: ObjectId,
    name: z.string(),
    language: z.string(),
    live: z.boolean(),
    release_date: z.string(),
    cards: z.array(Card).optional(),
  })
);

export const Series = Entity.merge(
  z.object({
    name: z.string(),
  })
);
