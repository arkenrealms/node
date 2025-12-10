import { z, ObjectId, Entity } from '../../schema';

export const Interface = Entity.merge(
  z.object({
    ratingId: ObjectId.optional(),
    groupId: ObjectId.optional(),
    submissions: z.array(ObjectId).optional(),
    // commentsOnInterfaces: z.array(ObjectId).optional(),
    // revisionsOnInterfaces: z.array(ObjectId).optional(),
    nodes: z.any(),
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
