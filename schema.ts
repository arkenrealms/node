import Mongoose, { Types } from 'mongoose';
import { z as zod } from 'zod';

export const z = zod;

// @ts-ignore
export const ObjectId = z.union([
  z.instanceof(Types.ObjectId), // Accept Mongoose ObjectId instances
  z.string().refine((value) => Mongoose.isValidObjectId(value), {
    // Accept valid ObjectId strings
    message: 'Invalid ObjectId',
  }),
]);

export enum Status {
  Paused = 'Paused',
  Pending = 'Pending',
  Active = 'Active',
  Archived = 'Archived',
}

export type Meta = {
  [key: string]: unknown;
};

export const Common = z.object({
  id: ObjectId.optional(),
  createdById: ObjectId.optional(),
  editedById: ObjectId.optional(),
  deletedById: ObjectId.optional(),
  createdDate: z.date().default(() => new Date()), // Default matches Mongoose
  updatedDate: z.date().optional(),
  deletedDate: z.date().optional(),
  meta: z.any(), // Default value set here matches Mongoose
  data: z.any(), // Default value set here matches Mongoose
  status: z.enum(['Paused', 'Pending', 'Active', 'Archived']).default('Active'), // Default set in StatusEnum matches Mongoose
});

export type Common = zod.infer<typeof Common>;

export const Entity = z
  .object({
    key: z.string().min(1).max(200).trim().optional(),
    name: z.string().min(1).max(200).trim().optional(),
    description: z.string().optional(),
    applicationId: ObjectId.optional(),
    ownerId: ObjectId.optional(),
  })
  .merge(Common);

export type Entity = zod.infer<typeof Entity>;

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

export type Query = z.infer<typeof Query>;
