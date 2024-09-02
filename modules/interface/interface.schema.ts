import { z, ObjectId, Entity } from '../../schema';

export const Query = z
  .object({
    skip: z.number().default(0).optional(),
    take: z.number().default(10).optional(),
    data: z.any(),
    where: z.object({
      id: z.object({ equals: z.string().optional() }).optional(),
      key: z.object({ equals: z.string().optional() }).optional(),
      status: z.object({ equals: z.string().optional() }).optional(),
      OR: z
        .tuple([
          z.object({
            title: z.string().optional(),
          }),
          z.object({
            key: z.string().optional(),
          }),
          z.object({
            version: z.string().optional(),
          }),
        ])
        .optional(),
      AND: z
        .tuple([
          z.object({
            title: z.string().optional(),
          }),
          z.object({
            key: z.string().optional(),
          }),
          z.object({
            version: z.string().optional(),
          }),
          z.object({
            status: z.object({ in: z.string().optional() }),
          }),
          z.object({
            groupId: z.object({ in: z.string().optional() }),
          }),
        ])
        .optional(),
    }),
    orderBy: z
      .object({
        name: z.enum(['asc', 'desc']).optional(),
      })
      .optional(),
  })
  .optional();

export const Interface = Entity.merge(
  z.object({
    ratingId: ObjectId.optional(),
    groupId: ObjectId.optional(),
    submissions: z.array(ObjectId).optional(),
    // commentsOnInterfaces: z.array(ObjectId).optional(),
    // recordUpdatesOnInterfaces: z.array(ObjectId).optional(),
    version: z.number().optional(),
    status: z.enum(['Paused', 'Pending', 'Active', 'Archived', 'Published', 'Draft']).default('Active'),
  })
);

export const InterfaceGroup = Entity.merge(
  z.object({
    roles: z.array(ObjectId).optional(),
  })
);

export const InterfaceComponent = Entity.merge(
  z.object({
    value: z.unknown().optional(),
    data: z.record(z.unknown()).optional(),
    type: z.string().optional(),
    hasAttachment: z.boolean().optional(),
    hasValidation: z.boolean().optional(),
    isDisabled: z.boolean().optional(),
    isEditable: z.boolean().optional(),
    isRequired: z.boolean().optional(),
  })
);

export const InterfaceSubmission = Entity.merge(
  z.object({
    interfaceId: ObjectId,
    interface: ObjectId.optional(),
  })
);
