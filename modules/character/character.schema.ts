// module/character.schema.ts

import { z, ObjectId, Entity } from '../../schema';

// Character schema
export const Character = Entity.merge(
  z.object({
    teamId: ObjectId.optional(),
    ownerId: ObjectId,
    ratingId: ObjectId.optional(),
    classId: ObjectId.optional(),
    token: z.string().min(1),
  })
);

// CharacterAbility schema
export const CharacterAbility = Entity.merge(
  z.object({
    // Define fields for CharacterAbility here if needed
  })
);

// CharacterAttribute schema
export const CharacterAttribute = Entity.merge(
  z.object({
    // Define fields for CharacterAttribute here if needed
  })
);

// CharacterType schema
export const CharacterType = Entity.merge(
  z.object({
    // Define fields for CharacterType here if needed
  })
);

// CharacterClass schema
export const CharacterClass = Entity.merge(
  z.object({
    // Define fields for CharacterClass here if needed
  })
);

// CharacterRace schema
export const CharacterRace = Entity.merge(
  z.object({
    npcs: z.array(ObjectId).optional(),
  })
);

// CharacterGender schema
export const CharacterGender = Entity.merge(
  z.object({
    // Define fields for CharacterGender here if needed
  })
);

// CharacterPersonality schema
export const CharacterPersonality = Entity.merge(
  z.object({
    // Define fields for CharacterPersonality here if needed
  })
);

// CharacterTitle schema
export const CharacterTitle = Entity.merge(
  z.object({
    // Define fields for CharacterTitle here if needed
  })
);

// CharacterFaction schema
export const CharacterFaction = Entity.merge(
  z.object({
    shortDescription: z.string(),
    // "npcs": [],
    // "areas": [24, 77],
    // "activeFactionConflict": [9], // CharacterFaction list
    // "passiveFactionConflict": [6], // CharacterFaction list
    // "activeGuildConflict": [], // Team
    // "areaConflict": [], // Area list
    // "characters": [] // Character list
  })
);

// CharacterNameChoice schema
export const CharacterNameChoice = Entity.merge(
  z.object({
    // Define fields for CharacterNameChoice here if needed
  })
);
