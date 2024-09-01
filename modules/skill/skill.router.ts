import { z as zod } from 'zod';
import { initTRPC, inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { customErrorFormatter, hasRole } from '../../util/rpc';
import type { RouterContext } from '../../types';
import {
  Skill,
  SkillMod,
  SkillClassification,
  SkillCondition,
  SkillStatusEffect,
  SkillTree,
  SkillTreeNode,
} from './skill.schema';

export const z = zod;
export const t = initTRPC.context<RouterContext>().create();
export const router = t.router;
export const procedure = t.procedure;

export const createRouter = () =>
  router({
    getSkill: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ skillId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Skill.getSkill as any)(input, ctx)),

    createSkill: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(Skill)
      .mutation(({ input, ctx }) => (ctx.app.service.Skill.createSkill as any)(input, ctx)),

    updateSkill: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(z.object({ skillId: z.string(), data: Skill.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Skill.updateSkill as any)(input, ctx)),

    getSkillMod: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ skillModId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Skill.getSkillMod as any)(input, ctx)),

    createSkillMod: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(SkillMod)
      .mutation(({ input, ctx }) => (ctx.app.service.Skill.createSkillMod as any)(input, ctx)),

    updateSkillMod: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(z.object({ skillModId: z.string(), data: SkillMod.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Skill.updateSkillMod as any)(input, ctx)),

    getSkillClassification: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ skillClassificationId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Skill.getSkillClassification as any)(input, ctx)),

    createSkillClassification: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(SkillClassification)
      .mutation(({ input, ctx }) => (ctx.app.service.Skill.createSkillClassification as any)(input, ctx)),

    updateSkillClassification: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(z.object({ skillClassificationId: z.string(), data: SkillClassification.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Skill.updateSkillClassification as any)(input, ctx)),

    getSkillCondition: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ skillConditionId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Skill.getSkillCondition as any)(input, ctx)),

    createSkillCondition: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(SkillCondition)
      .mutation(({ input, ctx }) => (ctx.app.service.Skill.createSkillCondition as any)(input, ctx)),

    updateSkillCondition: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(z.object({ skillConditionId: z.string(), data: SkillCondition.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Skill.updateSkillCondition as any)(input, ctx)),

    getSkillStatusEffect: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ skillStatusEffectId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Skill.getSkillStatusEffect as any)(input, ctx)),

    createSkillStatusEffect: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(SkillStatusEffect)
      .mutation(({ input, ctx }) => (ctx.app.service.Skill.createSkillStatusEffect as any)(input, ctx)),

    updateSkillStatusEffect: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(z.object({ skillStatusEffectId: z.string(), data: SkillStatusEffect.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Skill.updateSkillStatusEffect as any)(input, ctx)),

    getSkillTree: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ skillTreeId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Skill.getSkillTree as any)(input, ctx)),

    createSkillTree: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(SkillTree)
      .mutation(({ input, ctx }) => (ctx.app.service.Skill.createSkillTree as any)(input, ctx)),

    updateSkillTree: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(z.object({ skillTreeId: z.string(), data: SkillTree.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Skill.updateSkillTree as any)(input, ctx)),

    getSkillTreeNode: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ skillTreeNodeId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Skill.getSkillTreeNode as any)(input, ctx)),

    createSkillTreeNode: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(SkillTreeNode)
      .mutation(({ input, ctx }) => (ctx.app.service.Skill.createSkillTreeNode as any)(input, ctx)),

    updateSkillTreeNode: procedure
      .use(hasRole('realm', t))
      .use(customErrorFormatter(t))
      .input(z.object({ skillTreeNodeId: z.string(), data: SkillTreeNode.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Skill.updateSkillTreeNode as any)(input, ctx)),
  });

export type Router = ReturnType<typeof createRouter>;
export type RouterInput = inferRouterInputs<Router>;
export type RouterOutput = inferRouterOutputs<Router>;
