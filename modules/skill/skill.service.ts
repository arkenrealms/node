import type { RouterContext } from '../../types';
import type { Router, RouterInput, RouterOutput } from './skill.types';
import type {
  Skill,
  SkillMod,
  SkillClassification,
  SkillCondition,
  SkillStatusEffect,
  SkillTree,
  SkillTreeNode,
} from './skill.types';

export class Service {
  async getSkill(input: RouterInput['getSkill'], ctx: RouterContext): Promise<RouterOutput['getSkill']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.getSkill', input.skillId);

    const skill = await ctx.app.model.Skill.findById(input.skillId).lean().exec();
    if (!skill) throw new Error('Skill not found');

    return skill as Skill;
  }

  async createSkill(input: RouterInput['createSkill'], ctx: RouterContext): Promise<RouterOutput['createSkill']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.createSkill', input);

    const skill = await ctx.app.model.Skill.create(input);
    return skill as Skill;
  }

  async updateSkill(input: RouterInput['updateSkill'], ctx: RouterContext): Promise<RouterOutput['updateSkill']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.updateSkill', input.skillId, input.data);

    const updatedSkill = await ctx.app.model.Skill.findByIdAndUpdate(input.skillId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedSkill) throw new Error('Skill update failed');

    return updatedSkill as Skill;
  }

  async getSkillMod(input: RouterInput['getSkillMod'], ctx: RouterContext): Promise<RouterOutput['getSkillMod']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.getSkillMod', input.skillModId);

    const skillMod = await ctx.app.model.SkillMod.findById(input.skillModId).lean().exec();
    if (!skillMod) throw new Error('SkillMod not found');

    return skillMod as SkillMod;
  }

  async createSkillMod(
    input: RouterInput['createSkillMod'],
    ctx: RouterContext
  ): Promise<RouterOutput['createSkillMod']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.createSkillMod', input);

    const skillMod = await ctx.app.model.SkillMod.create(input);
    return skillMod as SkillMod;
  }

  async updateSkillMod(
    input: RouterInput['updateSkillMod'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateSkillMod']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.updateSkillMod', input.skillModId, input.data);

    const updatedSkillMod = await ctx.app.model.SkillMod.findByIdAndUpdate(input.skillModId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedSkillMod) throw new Error('SkillMod update failed');

    return updatedSkillMod as SkillMod;
  }

  async getSkillClassification(
    input: RouterInput['getSkillClassification'],
    ctx: RouterContext
  ): Promise<RouterOutput['getSkillClassification']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.getSkillClassification', input.skillClassificationId);

    const skillClassification = await ctx.app.model.SkillClassification.findById(input.skillClassificationId)
      .lean()
      .exec();
    if (!skillClassification) throw new Error('SkillClassification not found');

    return skillClassification as SkillClassification;
  }

  async createSkillClassification(
    input: RouterInput['createSkillClassification'],
    ctx: RouterContext
  ): Promise<RouterOutput['createSkillClassification']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.createSkillClassification', input);

    const skillClassification = await ctx.app.model.SkillClassification.create(input);
    return skillClassification as SkillClassification;
  }

  async updateSkillClassification(
    input: RouterInput['updateSkillClassification'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateSkillClassification']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.updateSkillClassification', input.skillClassificationId, input.data);

    const updatedSkillClassification = await ctx.app.model.SkillClassification.findByIdAndUpdate(
      input.skillClassificationId,
      input.data,
      { new: true }
    )
      .lean()
      .exec();
    if (!updatedSkillClassification) throw new Error('SkillClassification update failed');

    return updatedSkillClassification as SkillClassification;
  }

  async getSkillCondition(
    input: RouterInput['getSkillCondition'],
    ctx: RouterContext
  ): Promise<RouterOutput['getSkillCondition']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.getSkillCondition', input.skillConditionId);

    const skillCondition = await ctx.app.model.SkillCondition.findById(input.skillConditionId).lean().exec();
    if (!skillCondition) throw new Error('SkillCondition not found');

    return skillCondition as SkillCondition;
  }

  async createSkillCondition(
    input: RouterInput['createSkillCondition'],
    ctx: RouterContext
  ): Promise<RouterOutput['createSkillCondition']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.createSkillCondition', input);

    const skillCondition = await ctx.app.model.SkillCondition.create(input);
    return skillCondition as SkillCondition;
  }

  async updateSkillCondition(
    input: RouterInput['updateSkillCondition'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateSkillCondition']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.updateSkillCondition', input.skillConditionId, input.data);

    const updatedSkillCondition = await ctx.app.model.SkillCondition.findByIdAndUpdate(
      input.skillConditionId,
      input.data,
      { new: true }
    )
      .lean()
      .exec();
    if (!updatedSkillCondition) throw new Error('SkillCondition update failed');

    return updatedSkillCondition as SkillCondition;
  }

  async getSkillStatusEffect(
    input: RouterInput['getSkillStatusEffect'],
    ctx: RouterContext
  ): Promise<RouterOutput['getSkillStatusEffect']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.getSkillStatusEffect', input.skillStatusEffectId);

    const skillStatusEffect = await ctx.app.model.SkillStatusEffect.findById(input.skillStatusEffectId).lean().exec();
    if (!skillStatusEffect) throw new Error('SkillStatusEffect not found');

    return skillStatusEffect as SkillStatusEffect;
  }

  async createSkillStatusEffect(
    input: RouterInput['createSkillStatusEffect'],
    ctx: RouterContext
  ): Promise<RouterOutput['createSkillStatusEffect']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.createSkillStatusEffect', input);

    const skillStatusEffect = await ctx.app.model.SkillStatusEffect.create(input);
    return skillStatusEffect as SkillStatusEffect;
  }

  async updateSkillStatusEffect(
    input: RouterInput['updateSkillStatusEffect'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateSkillStatusEffect']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.updateSkillStatusEffect', input.skillStatusEffectId, input.data);

    const updatedSkillStatusEffect = await ctx.app.model.SkillStatusEffect.findByIdAndUpdate(
      input.skillStatusEffectId,
      input.data,
      { new: true }
    )
      .lean()
      .exec();
    if (!updatedSkillStatusEffect) throw new Error('SkillStatusEffect update failed');

    return updatedSkillStatusEffect as SkillStatusEffect;
  }

  async getSkillTree(input: RouterInput['getSkillTree'], ctx: RouterContext): Promise<RouterOutput['getSkillTree']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.getSkillTree', input.skillTreeId);

    const skillTree = await ctx.app.model.SkillTree.findById(input.skillTreeId).lean().exec();
    if (!skillTree) throw new Error('SkillTree not found');

    return skillTree as SkillTree;
  }

  async createSkillTree(
    input: RouterInput['createSkillTree'],
    ctx: RouterContext
  ): Promise<RouterOutput['createSkillTree']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.createSkillTree', input);

    const skillTree = await ctx.app.model.SkillTree.create(input);
    return skillTree as SkillTree;
  }

  async updateSkillTree(
    input: RouterInput['updateSkillTree'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateSkillTree']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.updateSkillTree', input.skillTreeId, input.data);

    const updatedSkillTree = await ctx.app.model.SkillTree.findByIdAndUpdate(input.skillTreeId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedSkillTree) throw new Error('SkillTree update failed');

    return updatedSkillTree as SkillTree;
  }

  async getSkillTreeNode(
    input: RouterInput['getSkillTreeNode'],
    ctx: RouterContext
  ): Promise<RouterOutput['getSkillTreeNode']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.getSkillTreeNode', input.skillTreeNodeId);

    const skillTreeNode = await ctx.app.model.SkillTreeNode.findById(input.skillTreeNodeId).lean().exec();
    if (!skillTreeNode) throw new Error('SkillTreeNode not found');

    return skillTreeNode as SkillTreeNode;
  }

  async createSkillTreeNode(
    input: RouterInput['createSkillTreeNode'],
    ctx: RouterContext
  ): Promise<RouterOutput['createSkillTreeNode']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.createSkillTreeNode', input);

    const skillTreeNode = await ctx.app.model.SkillTreeNode.create(input);
    return skillTreeNode as SkillTreeNode;
  }

  async updateSkillTreeNode(
    input: RouterInput['updateSkillTreeNode'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateSkillTreeNode']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.updateSkillTreeNode', input.skillTreeNodeId, input.data);

    const updatedSkillTreeNode = await ctx.app.model.SkillTreeNode.findByIdAndUpdate(
      input.skillTreeNodeId,
      input.data,
      { new: true }
    )
      .lean()
      .exec();
    if (!updatedSkillTreeNode) throw new Error('SkillTreeNode update failed');

    return updatedSkillTreeNode as SkillTreeNode;
  }
}
