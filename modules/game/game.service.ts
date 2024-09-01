import type { RouterContext, RouterInput, RouterOutput, Era } from './game.types';

export class Service {
  // Era Methods
  async getEras(input: RouterInput['getEras'], ctx: RouterContext): Promise<RouterOutput['getEras']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Game.Service.getEras');

    const eras = await ctx.app.model.Era.find().lean().exec();
    if (!eras) throw new Error('Eras not found');

    return { data: eras as Era[] };
  }

  async createEra(input: RouterInput['createEra'], ctx: RouterContext): Promise<RouterOutput['createEra']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Game.Service.createEra', input);

    const era = await ctx.app.model.Era.create(input);
    return era as Era;
  }

  async updateEra(input: RouterInput['updateEra'], ctx: RouterContext): Promise<RouterOutput['updateEra']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Game.Service.updateEra', input.id, input.data);

    const updatedEra = await ctx.app.model.Era.findByIdAndUpdate(input.id, input.data, { new: true }).lean().exec();
    if (!updatedEra) throw new Error('Era update failed');

    return updatedEra as Era;
  }

  async deleteEra(input: RouterInput['deleteEra'], ctx: RouterContext): Promise<RouterOutput['deleteEra']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Game.Service.deleteEra', input.id);

    const deletedEra = await ctx.app.model.Era.findByIdAndDelete(input.id).lean().exec();
    if (!deletedEra) throw new Error('Era not found');

    return deletedEra as Era;
  }
}
