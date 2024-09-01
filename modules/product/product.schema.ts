import { z, ObjectId, Entity } from '../../schema/zod';

// Product schema for digital game platform
export const Product = Entity.merge(
  z.object({
    shortDescription: z.string().max(300).min(1),
    content: z.string().min(1),
    communityId: ObjectId,
    type: z.string().max(100).default('game'),
    releaseDate: z.date().optional(),

    sku: z.string().min(1),
    categoryId: ObjectId.optional(), // Could represent genres or categories like "RPG", "Shooter", etc.
    price: z.number().nonnegative(),
    discountPrice: z.number().nonnegative().optional(),
    currency: z.string().length(3), // ISO 4217 currency code
    images: z.array(z.string().url()).optional(),
    videos: z.array(z.string().url()).optional(),
    digitalContent: z
      .array(
        z.object({
          url: z.string().url(),
          size: z.number().nonnegative(), // Size in MB or GB
          drm: z.enum(['None', 'Steam', 'Epic', 'Uplay', 'Origin']).optional(), // DRM information
        })
      )
      .optional(),
    dlcs: z.array(ObjectId).optional(), // References to ProductDLCs that are associated with this game
    bundles: z.array(ObjectId).optional(), // References to ProductBundles this product might be part of
    achievements: z
      .array(
        z.object({
          name: z.string(),
          description: z.string().optional(),
          icon: z.string().url().optional(),
        })
      )
      .optional(),
    reviews: z
      .array(
        z.object({
          userId: ObjectId,
          rating: z.number().min(1).max(5),
          comment: z.string().optional(),
          createdDate: z.date().default(() => new Date()),
        })
      )
      .optional(),
    cloudSave: z.boolean().default(false),
    ugcSupport: z.boolean().default(false), // User-Generated Content support
    wishlistCount: z.number().int().nonnegative().default(0), // How many users have this on their wishlist
  })
);

// ProductDLC schema
export const ProductDLC = Entity.merge(
  z.object({
    name: z.string().min(1),
    description: z.string().optional(),
    gameId: ObjectId, // The base game this DLC belongs to
    price: z.number().nonnegative(),
    discountPrice: z.number().nonnegative().optional(),
    currency: z.string().length(3),
    digitalContent: z
      .array(
        z.object({
          url: z.string().url(),
          size: z.number().nonnegative(),
          drm: z.enum(['None', 'Steam', 'Epic', 'Uplay', 'Origin']).optional(),
        })
      )
      .optional(),
    achievements: z
      .array(
        z.object({
          name: z.string(),
          description: z.string().optional(),
          icon: z.string().url().optional(),
        })
      )
      .optional(),
  })
);

// ProductBundle schema
export const ProductBundle = Entity.merge(
  z.object({
    name: z.string().min(1),
    description: z.string().optional(),
    products: z.array(ObjectId), // Games and DLCs included in this bundle
    price: z.number().nonnegative(),
    discountPrice: z.number().nonnegative().optional(),
    currency: z.string().length(3),
  })
);

// ProductReview schema
export const ProductReview = Entity.merge(
  z.object({
    userId: ObjectId,
    productId: ObjectId,
    rating: z.number().min(1).max(5),
    comment: z.string().optional(),
  })
);

export const ProductUpdate = Entity.merge(
  z.object({
    productId: ObjectId,
    updateContent: z.string().min(1),
    updateDate: z.date(),
  })
);
