import { z, Entity } from '../../schema/zod';

export const Market = Entity.merge(
  z.object({
    value: z.string().nonempty(),
  })
);

export const MarketPair = Entity.merge(
  z.object({
    value: z.string().nonempty(),
  })
);
