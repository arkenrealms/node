import * as mongo from '../../util/mongo';
import type * as Types from './skill.types';

// Skill

export const SkillSchema = mongo.createSchema<Types.SkillDocument>('Skill', {});

export const Skill = mongo.createModel<Types.SkillDocument>('Skill', SkillSchema);

// SkillMod

export const SkillModSchema = mongo.createSchema<Types.SkillModDocument>('SkillMod', {});

export const SkillMod = mongo.createModel<Types.SkillModDocument>('SkillMod', SkillModSchema);

// SkillClassification

export const SkillClassificationSchema = mongo.createSchema<Types.SkillClassificationDocument>(
  'SkillClassification',
  {}
);

export const SkillClassification = mongo.createModel<Types.SkillClassificationDocument>(
  'SkillClassification',
  SkillClassificationSchema
);

// SkillCondition

export const SkillConditionSchema = mongo.createSchema<Types.SkillConditionDocument>('SkillCondition', {});

export const SkillCondition = mongo.createModel<Types.SkillConditionDocument>('SkillCondition', SkillConditionSchema);

// SkillStatusEffect

export const SkillStatusEffectSchema = mongo.createSchema<Types.SkillStatusEffectDocument>('SkillStatusEffect', {});

export const SkillStatusEffect = mongo.createModel<Types.SkillStatusEffectDocument>(
  'SkillStatusEffect',
  SkillStatusEffectSchema
);

// SkillTree

export const SkillTreeSchema = mongo.createSchema<Types.SkillTreeDocument>('SkillTree', {});

export const SkillTree = mongo.createModel<Types.SkillTreeDocument>('SkillTree', SkillTreeSchema);

// SkillTreeNode

export const SkillTreeNodeSchema = mongo.createSchema<Types.SkillTreeNodeDocument>('SkillTreeNode', {});

export const SkillTreeNode = mongo.createModel<Types.SkillTreeNodeDocument>('SkillTreeNode', SkillTreeNodeSchema);
