import { z, Entity } from '../../schema';

export const Market = Entity.merge(
  z.object({
    value: z.string().min(1),
  })
);

export const MarketPair = Entity.merge(
  z.object({
    value: z.string().min(1),
  })
);

export const MarketExchange = Entity.merge(
  z.object({
    value: z.string().optional(),
  })
);
