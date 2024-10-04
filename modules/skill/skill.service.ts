import type { RouterContext } from '../../types';
import type { Router, RouterInput, RouterOutput } from './skill.types';
import { getFilter } from '../../util/api';
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
  // Skill Methods
  async getSkill(input: RouterInput['getSkill'], ctx: RouterContext): Promise<RouterOutput['getSkill']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.getSkill', input.query);

    const filter = getFilter(input.query);
    const skill = await ctx.app.model.Skill.findOne(filter).lean().exec();
    if (!skill) throw new Error('Skill not found');

    return skill as Skill;
  }

  async createSkill(input: RouterInput['createSkill'], ctx: RouterContext): Promise<RouterOutput['createSkill']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.createSkill', input.data);

    const skill = await ctx.app.model.Skill.create(input.data);
    return skill as Skill;
  }

  async updateSkill(input: RouterInput['updateSkill'], ctx: RouterContext): Promise<RouterOutput['updateSkill']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.updateSkill', input.query, input.data);

    const filter = getFilter(input.query);
    const updatedSkill = await ctx.app.model.Skill.findOneAndUpdate(filter, input.data, { new: true }).lean().exec();
    if (!updatedSkill) throw new Error('Skill update failed');

    return updatedSkill as Skill;
  }

  async deleteSkill(input: RouterInput['deleteSkill'], ctx: RouterContext): Promise<RouterOutput['deleteSkill']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.deleteSkill', input.query);

    const filter = getFilter(input.query);
    const deletedSkill = await ctx.app.model.Skill.findOneAndDelete(filter).lean().exec();
    if (!deletedSkill) throw new Error('Skill delete failed');

    return deletedSkill as Skill;
  }

  // SkillMod Methods
  async getSkillMod(input: RouterInput['getSkillMod'], ctx: RouterContext): Promise<RouterOutput['getSkillMod']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.getSkillMod', input.query);

    const filter = getFilter(input.query);
    const skillMod = await ctx.app.model.SkillMod.findOne(filter).lean().exec();
    if (!skillMod) throw new Error('SkillMod not found');

    return skillMod as SkillMod;
  }

  async createSkillMod(
    input: RouterInput['createSkillMod'],
    ctx: RouterContext
  ): Promise<RouterOutput['createSkillMod']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.createSkillMod', input.data);

    const skillMod = await ctx.app.model.SkillMod.create(input.data);
    return skillMod as SkillMod;
  }

  async updateSkillMod(
    input: RouterInput['updateSkillMod'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateSkillMod']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.updateSkillMod', input.query, input.data);

    const filter = getFilter(input.query);
    const updatedSkillMod = await ctx.app.model.SkillMod.findOneAndUpdate(filter, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedSkillMod) throw new Error('SkillMod update failed');

    return updatedSkillMod as SkillMod;
  }

  async deleteSkillMod(
    input: RouterInput['deleteSkillMod'],
    ctx: RouterContext
  ): Promise<RouterOutput['deleteSkillMod']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.deleteSkillMod', input.query);

    const filter = getFilter(input.query);
    const deletedSkillMod = await ctx.app.model.SkillMod.findOneAndDelete(filter).lean().exec();
    if (!deletedSkillMod) throw new Error('SkillMod delete failed');

    return deletedSkillMod as SkillMod;
  }

  // SkillClassification Methods
  async getSkillClassification(
    input: RouterInput['getSkillClassification'],
    ctx: RouterContext
  ): Promise<RouterOutput['getSkillClassification']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.getSkillClassification', input.query);

    const filter = getFilter(input.query);
    const skillClassification = await ctx.app.model.SkillClassification.findOne(filter).lean().exec();
    if (!skillClassification) throw new Error('SkillClassification not found');

    return skillClassification as SkillClassification;
  }

  async createSkillClassification(
    input: RouterInput['createSkillClassification'],
    ctx: RouterContext
  ): Promise<RouterOutput['createSkillClassification']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.createSkillClassification', input.data);

    const skillClassification = await ctx.app.model.SkillClassification.create(input.data);
    return skillClassification as SkillClassification;
  }

  async updateSkillClassification(
    input: RouterInput['updateSkillClassification'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateSkillClassification']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.updateSkillClassification', input.query, input.data);

    const filter = getFilter(input.query);
    const updatedSkillClassification = await ctx.app.model.SkillClassification.findOneAndUpdate(filter, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedSkillClassification) throw new Error('SkillClassification update failed');

    return updatedSkillClassification as SkillClassification;
  }

  async deleteSkillClassification(
    input: RouterInput['deleteSkillClassification'],
    ctx: RouterContext
  ): Promise<RouterOutput['deleteSkillClassification']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.deleteSkillClassification', input.query);

    const filter = getFilter(input.query);
    const deletedSkillClassification = await ctx.app.model.SkillClassification.findOneAndDelete(filter).lean().exec();
    if (!deletedSkillClassification) throw new Error('SkillClassification delete failed');

    return deletedSkillClassification as SkillClassification;
  }

  // SkillCondition Methods
  async getSkillCondition(
    input: RouterInput['getSkillCondition'],
    ctx: RouterContext
  ): Promise<RouterOutput['getSkillCondition']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.getSkillCondition', input.query);

    const filter = getFilter(input.query);
    const skillCondition = await ctx.app.model.SkillCondition.findOne(filter).lean().exec();
    if (!skillCondition) throw new Error('SkillCondition not found');

    return skillCondition as SkillCondition;
  }

  async createSkillCondition(
    input: RouterInput['createSkillCondition'],
    ctx: RouterContext
  ): Promise<RouterOutput['createSkillCondition']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.createSkillCondition', input.data);

    const skillCondition = await ctx.app.model.SkillCondition.create(input.data);
    return skillCondition as SkillCondition;
  }

  async updateSkillCondition(
    input: RouterInput['updateSkillCondition'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateSkillCondition']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.updateSkillCondition', input.query, input.data);

    const filter = getFilter(input.query);
    const updatedSkillCondition = await ctx.app.model.SkillCondition.findOneAndUpdate(filter, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedSkillCondition) throw new Error('SkillCondition update failed');

    return updatedSkillCondition as SkillCondition;
  }

  async deleteSkillCondition(
    input: RouterInput['deleteSkillCondition'],
    ctx: RouterContext
  ): Promise<RouterOutput['deleteSkillCondition']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.deleteSkillCondition', input.query);

    const filter = getFilter(input.query);
    const deletedSkillCondition = await ctx.app.model.SkillCondition.findOneAndDelete(filter).lean().exec();
    if (!deletedSkillCondition) throw new Error('SkillCondition delete failed');

    return deletedSkillCondition as SkillCondition;
  }

  // SkillStatusEffect Methods
  async getSkillStatusEffect(
    input: RouterInput['getSkillStatusEffect'],
    ctx: RouterContext
  ): Promise<RouterOutput['getSkillStatusEffect']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.getSkillStatusEffect', input.query);

    const filter = getFilter(input.query);
    const skillStatusEffect = await ctx.app.model.SkillStatusEffect.findOne(filter).lean().exec();
    if (!skillStatusEffect) throw new Error('SkillStatusEffect not found');

    return skillStatusEffect as SkillStatusEffect;
  }

  async createSkillStatusEffect(
    input: RouterInput['createSkillStatusEffect'],
    ctx: RouterContext
  ): Promise<RouterOutput['createSkillStatusEffect']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.createSkillStatusEffect', input.data);

    const skillStatusEffect = await ctx.app.model.SkillStatusEffect.create(input.data);
    return skillStatusEffect as SkillStatusEffect;
  }

  async updateSkillStatusEffect(
    input: RouterInput['updateSkillStatusEffect'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateSkillStatusEffect']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.updateSkillStatusEffect', input.query, input.data);

    const filter = getFilter(input.query);
    const updatedSkillStatusEffect = await ctx.app.model.SkillStatusEffect.findOneAndUpdate(filter, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedSkillStatusEffect) throw new Error('SkillStatusEffect update failed');

    return updatedSkillStatusEffect as SkillStatusEffect;
  }

  async deleteSkillStatusEffect(
    input: RouterInput['deleteSkillStatusEffect'],
    ctx: RouterContext
  ): Promise<RouterOutput['deleteSkillStatusEffect']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.deleteSkillStatusEffect', input.query);

    const filter = getFilter(input.query);
    const deletedSkillStatusEffect = await ctx.app.model.SkillStatusEffect.findOneAndDelete(filter).lean().exec();
    if (!deletedSkillStatusEffect) throw new Error('SkillStatusEffect delete failed');

    return deletedSkillStatusEffect as SkillStatusEffect;
  }

  // SkillTree Methods
  async getSkillTree(input: RouterInput['getSkillTree'], ctx: RouterContext): Promise<RouterOutput['getSkillTree']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.getSkillTree', input.query);

    const filter = getFilter(input.query);
    const skillTree = await ctx.app.model.SkillTree.findOne(filter).lean().exec();
    if (!skillTree) throw new Error('SkillTree not found');

    return skillTree as SkillTree;
  }

  async createSkillTree(
    input: RouterInput['createSkillTree'],
    ctx: RouterContext
  ): Promise<RouterOutput['createSkillTree']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.createSkillTree', input.data);

    const skillTree = await ctx.app.model.SkillTree.create(input.data);
    return skillTree as SkillTree;
  }

  async updateSkillTree(
    input: RouterInput['updateSkillTree'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateSkillTree']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.updateSkillTree', input.query, input.data);

    const filter = getFilter(input.query);
    const updatedSkillTree = await ctx.app.model.SkillTree.findOneAndUpdate(filter, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedSkillTree) throw new Error('SkillTree update failed');

    return updatedSkillTree as SkillTree;
  }

  async deleteSkillTree(
    input: RouterInput['deleteSkillTree'],
    ctx: RouterContext
  ): Promise<RouterOutput['deleteSkillTree']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.deleteSkillTree', input.query);

    const filter = getFilter(input.query);
    const deletedSkillTree = await ctx.app.model.SkillTree.findOneAndDelete(filter).lean().exec();
    if (!deletedSkillTree) throw new Error('SkillTree delete failed');

    return deletedSkillTree as SkillTree;
  }

  // SkillTreeNode Methods
  async getSkillTreeNode(
    input: RouterInput['getSkillTreeNode'],
    ctx: RouterContext
  ): Promise<RouterOutput['getSkillTreeNode']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.getSkillTreeNode', input.query);

    const filter = getFilter(input.query);
    const skillTreeNode = await ctx.app.model.SkillTreeNode.findOne(filter).lean().exec();
    if (!skillTreeNode) throw new Error('SkillTreeNode not found');

    return skillTreeNode as SkillTreeNode;
  }

  async createSkillTreeNode(
    input: RouterInput['createSkillTreeNode'],
    ctx: RouterContext
  ): Promise<RouterOutput['createSkillTreeNode']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.createSkillTreeNode', input.data);

    const skillTreeNode = await ctx.app.model.SkillTreeNode.create(input.data);
    return skillTreeNode as SkillTreeNode;
  }

  async updateSkillTreeNode(
    input: RouterInput['updateSkillTreeNode'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateSkillTreeNode']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.updateSkillTreeNode', input.query, input.data);

    const filter = getFilter(input.query);
    const updatedSkillTreeNode = await ctx.app.model.SkillTreeNode.findOneAndUpdate(filter, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedSkillTreeNode) throw new Error('SkillTreeNode update failed');

    return updatedSkillTreeNode as SkillTreeNode;
  }

  async deleteSkillTreeNode(
    input: RouterInput['deleteSkillTreeNode'],
    ctx: RouterContext
  ): Promise<RouterOutput['deleteSkillTreeNode']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Skill.Service.deleteSkillTreeNode', input.query);

    const filter = getFilter(input.query);
    const deletedSkillTreeNode = await ctx.app.model.SkillTreeNode.findOneAndDelete(filter).lean().exec();
    if (!deletedSkillTreeNode) throw new Error('SkillTreeNode delete failed');

    return deletedSkillTreeNode as SkillTreeNode;
  }
}
