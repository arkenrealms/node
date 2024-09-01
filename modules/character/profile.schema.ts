import { z, ObjectId, Entity } from '../../schema/zod';

export const Character = Entity.merge(
  z.object({
    teamId: ObjectId.optional(),
    ownerId: ObjectId,
    ratingId: ObjectId.optional(),
    classId: ObjectId.optional(),
    token: z.string().min(1),
  })
);

export const CharacterAbility = Entity.merge(
  z.object({
    // Define fields for CharacterAbility here if needed
  })
);

export const CharacterAttribute = Entity.merge(
  z.object({
    // Define fields for CharacterAttribute here if needed
  })
);

export const CharacterType = Entity.merge(
  z.object({
    // Define fields for CharacterType here if needed
  })
);

export const CharacterClass = Entity.merge(
  z.object({
    // Define fields for CharacterClass here if needed
  })
);

export const CharacterRace = Entity.merge(
  z.object({
    npcs: z.array(ObjectId).optional(),
  })
);

export const CharacterGender = Entity.merge(
  z.object({
    // Define fields for CharacterGender here if needed
  })
);

export const CharacterPersonality = Entity.merge(
  z.object({
    // Define fields for CharacterPersonality here if needed
  })
);

export const CharacterTitle = Entity.merge(
  z.object({
    // Define fields for CharacterTitle here if needed
  })
);
