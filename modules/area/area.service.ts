import type { Area, AreaLandmark, AreaType, Router, RouterInput, RouterOutput, RouterContext } from './area.types';

export class Service {
  async getArea(input: RouterInput['getArea'], ctx: RouterContext): Promise<RouterOutput['getArea']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Area.Service.getArea', input.areaId);

    const area = await ctx.app.model.Area.findById(input.areaId).lean().exec();
    if (!area) throw new Error('Area not found');

    return area as Area;
  }

  async getAreaLandmark(
    input: RouterInput['getAreaLandmark'],
    ctx: RouterContext
  ): Promise<RouterOutput['getAreaLandmark']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Area.Service.getAreaLandmark', input.areaLandmarkId);

    const areaLandmark = await ctx.app.model.AreaLandmark.findById(input.areaLandmarkId).lean().exec();
    if (!areaLandmark) throw new Error('AreaLandmark not found');

    return areaLandmark as AreaLandmark;
  }

  async getAreaType(input: RouterInput['getAreaType'], ctx: RouterContext): Promise<RouterOutput['getAreaType']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Area.Service.getAreaType', input.areaTypeId);

    const areaType = await ctx.app.model.AreaType.findById(input.areaTypeId).lean().exec();
    if (!areaType) throw new Error('AreaType not found');

    return areaType as AreaType;
  }

  async createArea(input: RouterInput['createArea'], ctx: RouterContext): Promise<RouterOutput['createArea']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Area.Service.createArea', input.type, input.landmarks);

    const area = await ctx.app.model.Area.create({ type: input.type, landmarks: input.landmarks });
    return area as Area;
  }

  async createAreaLandmark(
    input: RouterInput['createAreaLandmark'],
    ctx: RouterContext
  ): Promise<RouterOutput['createAreaLandmark']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Area.Service.createAreaLandmark', input.areaId, input.area);

    const areaLandmark = await ctx.app.model.AreaLandmark.create({ areaId: input.areaId, area: input.area });
    return areaLandmark as AreaLandmark;
  }

  async createAreaType(
    input: RouterInput['createAreaType'],
    ctx: RouterContext
  ): Promise<RouterOutput['createAreaType']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Area.Service.createAreaType', input.name, input.description);

    const areaType = await ctx.app.model.AreaType.create({ name: input.name, description: input.description });
    return areaType as AreaType;
  }

  async updateArea(input: RouterInput['updateArea'], ctx: RouterContext): Promise<RouterOutput['updateArea']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Area.Service.updateArea', input.areaId, input.data);

    const updatedArea = await ctx.app.model.Area.findByIdAndUpdate(input.areaId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedArea) throw new Error('Area update failed');

    return updatedArea as Area;
  }

  async updateAreaLandmark(
    input: RouterInput['updateAreaLandmark'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateAreaLandmark']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Area.Service.updateAreaLandmark', input.areaLandmarkId, input.data);

    const updatedAreaLandmark = await ctx.app.model.AreaLandmark.findByIdAndUpdate(input.areaLandmarkId, input.data, {
      new: true,
    })
      .lean()
      .exec();
    if (!updatedAreaLandmark) throw new Error('AreaLandmark update failed');

    return updatedAreaLandmark as AreaLandmark;
  }

  async updateAreaType(
    input: RouterInput['updateAreaType'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateAreaType']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Area.Service.updateAreaType', input.areaTypeId, input.data);

    const updatedAreaType = await ctx.app.model.AreaType.findByIdAndUpdate(input.areaTypeId, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedAreaType) throw new Error('AreaType update failed');

    return updatedAreaType as AreaType;
  }
}
