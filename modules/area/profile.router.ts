import { z as zod } from 'zod';
import { initTRPC } from '@trpc/server';
import type { Context } from '../../types';
import { Service } from './area.service';

export const z = zod;
export const t = initTRPC.context<Context>().create();
export const router = t.router;
export const procedure = t.procedure;

const areaService = new Service();

export const createRouter = () =>
  router({
    getArea: procedure.input(z.object({ areaId: z.string() })).query(async ({ input, ctx }) => {
      return areaService.getArea(input, ctx);
    }),

    getAreaLandmark: procedure.input(z.object({ areaLandmarkId: z.string() })).query(async ({ input, ctx }) => {
      return areaService.getAreaLandmark(input, ctx);
    }),

    getAreaType: procedure.input(z.object({ areaTypeId: z.string() })).query(async ({ input, ctx }) => {
      return areaService.getAreaType(input, ctx);
    }),

    createArea: procedure
      .input(
        z.object({
          type: z.string().default('zone'),
          landmarks: z.array(z.string()).optional(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        return areaService.createArea(input, ctx);
      }),

    createAreaLandmark: procedure
      .input(
        z.object({
          areaId: z.string(),
          area: z.string().optional(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        return areaService.createAreaLandmark(input, ctx);
      }),

    createAreaType: procedure
      .input(
        z.object({
          name: z.string(),
          description: z.string().optional(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        return areaService.createAreaType(input, ctx);
      }),

    updateArea: procedure
      .input(
        z.object({
          areaId: z.string(),
          data: z.object({
            type: z.string().optional(),
            landmarks: z.array(z.string()).optional(),
          }),
        })
      )
      .mutation(async ({ input, ctx }) => {
        return areaService.updateArea(input, ctx);
      }),

    updateAreaLandmark: procedure
      .input(
        z.object({
          areaLandmarkId: z.string(),
          data: z.object({
            areaId: z.string().optional(),
            area: z.string().optional(),
          }),
        })
      )
      .mutation(async ({ input, ctx }) => {
        return areaService.updateAreaLandmark(input, ctx);
      }),

    updateAreaType: procedure
      .input(
        z.object({
          areaTypeId: z.string(),
          data: z.object({
            name: z.string().optional(),
            description: z.string().optional(),
          }),
        })
      )
      .mutation(async ({ input, ctx }) => {
        return areaService.updateAreaType(input, ctx);
      }),
  });
