import type { Context } from '../../types';
import type { Area, AreaLandmark, AreaType } from './area.types';

export class Service {
  async getArea({ areaId }: { areaId: string }, ctx: Context) {
    console.log('Area.Service.getArea', areaId);
    const area = await ctx.app.model.Area.findById(areaId).lean().exec();
    if (!area) {
      throw new Error('Area not found');
    }
    return area as Area;
  }

  async getAreaLandmark({ areaLandmarkId }: { areaLandmarkId: string }, ctx: Context) {
    console.log('Area.Service.getAreaLandmark', areaLandmarkId);
    const areaLandmark = await ctx.app.model.AreaLandmark.findById(areaLandmarkId).lean().exec();
    if (!areaLandmark) {
      throw new Error('AreaLandmark not found');
    }
    return areaLandmark as AreaLandmark;
  }

  async getAreaType({ areaTypeId }: { areaTypeId: string }, ctx: Context) {
    console.log('Area.Service.getAreaType', areaTypeId);
    const areaType = await ctx.app.model.AreaType.findById(areaTypeId).lean().exec();
    if (!areaType) {
      throw new Error('AreaType not found');
    }
    return areaType as AreaType;
  }

  async createArea({ type, landmarks }: { type: string; landmarks?: string[] }, ctx: Context) {
    console.log('Area.Service.createArea', type, landmarks);
    const area = await ctx.app.model.Area.create({ type, landmarks });
    return area as Area;
  }

  async createAreaLandmark({ areaId, area }: { areaId: string; area?: string }, ctx: Context) {
    console.log('Area.Service.createAreaLandmark', areaId, area);
    const areaLandmark = await ctx.app.model.AreaLandmark.create({ areaId, area });
    return areaLandmark as AreaLandmark;
  }

  async createAreaType({ name, description }: { name: string; description?: string }, ctx: Context) {
    console.log('Area.Service.createAreaType', name, description);
    const areaType = await ctx.app.model.AreaType.create({ name, description });
    return areaType as AreaType;
  }

  async updateArea({ areaId, data }: { areaId: string; data: Partial<Area> }, ctx: Context) {
    console.log('Area.Service.updateArea', areaId, data);
    const updatedArea = await ctx.app.model.Area.findByIdAndUpdate(areaId, data, { new: true }).lean().exec();
    if (!updatedArea) {
      throw new Error('Area update failed');
    }
    return updatedArea as Area;
  }

  async updateAreaLandmark(
    { areaLandmarkId, data }: { areaLandmarkId: string; data: Partial<AreaLandmark> },
    ctx: Context
  ) {
    console.log('Area.Service.updateAreaLandmark', areaLandmarkId, data);
    const updatedAreaLandmark = await ctx.app.model.AreaLandmark.findByIdAndUpdate(areaLandmarkId, data, { new: true })
      .lean()
      .exec();
    if (!updatedAreaLandmark) {
      throw new Error('AreaLandmark update failed');
    }
    return updatedAreaLandmark as AreaLandmark;
  }

  async updateAreaType({ areaTypeId, data }: { areaTypeId: string; data: Partial<AreaType> }, ctx: Context) {
    console.log('Area.Service.updateAreaType', areaTypeId, data);
    const updatedAreaType = await ctx.app.model.AreaType.findByIdAndUpdate(areaTypeId, data, { new: true })
      .lean()
      .exec();
    if (!updatedAreaType) {
      throw new Error('AreaType update failed');
    }
    return updatedAreaType as AreaType;
  }
}
