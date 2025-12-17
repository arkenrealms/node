import type { Area, AreaLandmark, AreaType, RouterInput, RouterOutput, RouterContext } from './area.types';
import { getFilter } from '../../util/api';
import { ARXError } from '../../util/rpc';

export class Service {
  async getArea(input: RouterInput['getArea'], ctx: RouterContext): Promise<RouterOutput['getArea']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Area.Service.getArea', input);

    const filter = getFilter(input);
    // @ts-ignore
    const area = await ctx.app.model.Area.findOne(filter).asJSON();
    if (!area) throw new Error('Area not found');

    return area as Area;
  }

  async getAreas(input: RouterInput['getAreas'], ctx: RouterContext): Promise<RouterOutput['getAreas']> {
    if (!input) throw new ARXError('NO_INPUT');

    const filter = getFilter(input);

    const limit = input.limit ?? 50;
    const skip = input.skip ?? 0;

    const [items, total] = await Promise.all([
      // @ts-ignore
      ctx.app.model.Area.find(filter).skip(skip).limit(limit).asJSON(),
      ctx.app.model.Area.find(filter).countDocuments().exec(),
    ]);

    return { items, total };
  }

  async getAreaLandmark(
    input: RouterInput['getAreaLandmark'],
    ctx: RouterContext
  ): Promise<RouterOutput['getAreaLandmark']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Area.Service.getAreaLandmark', input.query);

    const filter = getFilter(input.query);
    const areaLandmark = await ctx.app.model.AreaLandmark.findOne(filter).lean().exec();
    if (!areaLandmark) throw new Error('AreaLandmark not found');

    return areaLandmark as AreaLandmark;
  }

  async getAreaType(input: RouterInput['getAreaType'], ctx: RouterContext): Promise<RouterOutput['getAreaType']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Area.Service.getAreaType', input.query);

    const filter = getFilter(input.query);
    const areaType = await ctx.app.model.AreaType.findOne(filter).lean().exec();
    if (!areaType) throw new Error('AreaType not found');

    return areaType as AreaType;
  }

  async saveArea(input: RouterInput['saveArea'], ctx: RouterContext): Promise<RouterOutput['saveArea']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Area.Service.saveArea', input);

    const filter = getFilter(input);
    const area = await ctx.app.model.Area.findOneAndUpdate(filter, input.data, { new: true }).lean().exec();
    if (!area) throw new Error('Area update failed');

    return area as Area;
  }

  async createAreaLandmark(
    input: RouterInput['createAreaLandmark'],
    ctx: RouterContext
  ): Promise<RouterOutput['createAreaLandmark']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Area.Service.createAreaLandmark', input.data);

    const areaLandmark = await ctx.app.model.AreaLandmark.create(input.data);
    return areaLandmark as AreaLandmark;
  }

  async createAreaType(
    input: RouterInput['createAreaType'],
    ctx: RouterContext
  ): Promise<RouterOutput['createAreaType']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Area.Service.createAreaType', input.data);

    const areaType = await ctx.app.model.AreaType.create(input.data);
    return areaType as AreaType;
  }

  async updateAreaLandmark(
    input: RouterInput['updateAreaLandmark'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateAreaLandmark']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Area.Service.updateAreaLandmark', input.query, input.data);

    const filter = getFilter(input.query);
    const updatedAreaLandmark = await ctx.app.model.AreaLandmark.findOneAndUpdate(filter, input.data, { new: true })
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
    console.log('Area.Service.updateAreaType', input.query, input.data);

    const filter = getFilter(input.query);
    const updatedAreaType = await ctx.app.model.AreaType.findOneAndUpdate(filter, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedAreaType) throw new Error('AreaType update failed');

    return updatedAreaType as AreaType;
  }
}
