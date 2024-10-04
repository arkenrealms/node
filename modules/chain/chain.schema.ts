import { z, ObjectId, Entity } from '../../schema';

export const Chain = Entity.merge(
  z.object({
    content: z.string().min(1),
    type: z.string().max(100).min(1),
    standard: z.string().max(100).min(1),
  })
);

export const ChainContract = Entity.merge(
  z.object({
    description: z.string().min(1),
    content: z.string().min(1),
    type: z.string().max(100).min(1),
    standard: z.string().max(100).min(1),
  })
);

export const ChainToken = Entity.merge(
  z.object({
    rank: z.number().optional(),
    description: z.string().optional(),
    content: z.string().min(1),
    type: z.string().max(100).min(1),
    standard: z.string().max(100).min(1),
    price: z.number().optional(),
    hourChange: z.number().optional(),
    dayChange: z.number().optional(),
    weekChange: z.number().optional(),
    marketCap: z.number().optional(),
    volume: z.number().optional(),
    symbol: z.string().min(1),
    circulatingSupply: z.number().optional(),
    cmcLink: z.string().optional(),
    movementDown: z.number().optional(),
    movementUp: z.number().optional(),
    enteredTop100: z.number().optional(),
    exitedTop100: z.number().optional(),
    largeMoveDown: z.number().optional(),
  })
);

export const ChainTransaction = Entity.merge(
  z.object({
    value: z.string().min(1),
    chainId: ObjectId,
  })
);
