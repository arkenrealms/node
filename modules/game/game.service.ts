import type { RouterContext, RouterInput, RouterOutput, Era, Game } from './game.types';
import { getFilter } from '../../util/api';

export class Service {
  async getGames(input: RouterInput['getGames'], ctx: RouterContext): Promise<RouterOutput['getGames']> {
    const filter = getFilter(input);
    const games = await ctx.app.model.Game.find(filter).exec();

    return { data: games as Game[] };
  }

  // Era Methods
  async getEras(input: RouterInput['getEras'], ctx: RouterContext): Promise<RouterOutput['getEras']> {
    const filter = getFilter(input);
    const eras = await ctx.app.model.Era.find(filter).exec();

    return { data: eras as Era[] };
  }

  async createEra(input: RouterInput['createEra'], ctx: RouterContext): Promise<RouterOutput['createEra']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Game.Service.createEra', input);

    const era = await ctx.app.model.Era.create(input.data);
    return era as Era;
  }

  async updateEra(input: RouterInput['updateEra'], ctx: RouterContext): Promise<RouterOutput['updateEra']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Game.Service.updateEra', input, input.data);

    const filter = getFilter(input);
    const updatedEra = await ctx.app.model.Era.findOneAndUpdate(filter, input.data, { new: true }).exec();
    if (!updatedEra) throw new Error('Era update failed');

    return updatedEra as Era;
  }

  async deleteEra(input: RouterInput['deleteEra'], ctx: RouterContext): Promise<RouterOutput['deleteEra']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Game.Service.deleteEra', input);

    const filter = getFilter(input);
    const deletedEra = await ctx.app.model.Era.findOneAndDelete(filter).exec();
    if (!deletedEra) throw new Error('Era not found');

    return deletedEra as Era;
  }
}
