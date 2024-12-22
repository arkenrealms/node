import type { RouterContext, RouterInput, RouterOutput, Era, Game, GameStat } from './game.types';
import { getFilter } from '../../util/api';
import { ARXError } from '../../util/rpc';

export class Service {
  // Game Methods
  async getGame(input: RouterInput['getGame'], ctx: RouterContext): Promise<RouterOutput['getGame']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Core.Service.getGame', input, getFilter(input));

    const game = await ctx.app.model.Game.findOne(getFilter(input)).populate('stat').exec();

    if (!game) throw new Error('Game not found');

    return game as Game;
  }

  async getGames(input: RouterInput['getGames'], ctx: RouterContext): Promise<RouterOutput['getGames']> {
    console.log('Core.Service.getGames', input);

    const filter = getFilter(input);

    filter.status = 'Active';

    const games = await ctx.app.model.Game.find(filter).populate('stat').exec();

    return games as Game[];
  }

  async createGame(input: RouterInput['createGame'], ctx: RouterContext): Promise<RouterOutput['createGame']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Core.Service.createGame', input);

    const game = await ctx.app.model.Game.create(input);
    return game as Game;
  }

  async updateGame(input: RouterInput['updateGame'], ctx: RouterContext): Promise<RouterOutput['updateGame']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Core.Service.updateGame', input);

    const filter = getFilter(input);
    const updatedGame = await ctx.app.model.Game.findByIdAndUpdate(filter.id, { new: true }).lean().exec();
    if (!updatedGame) throw new Error('Game update failed');

    return updatedGame as Game;
  }

  // GameStat Methods
  async getGameStat(input: RouterInput['getGameStat'], ctx: RouterContext): Promise<RouterOutput['getGameStat']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Core.Service.getGameStat', input);

    const gameStat = await ctx.app.model.GameStat.findOne(getFilter(input)).exec();
    if (!gameStat) throw new Error('GameStat not found');

    return gameStat as GameStat;
  }

  async getGameStats(input: RouterInput['getGameStats'], ctx: RouterContext): Promise<RouterOutput['getGameStats']> {
    console.log('Core.Service.getGameStats', input);

    const filter = getFilter(input);

    filter.status = 'Active';

    const gameStats = await ctx.app.model.GameStat.find(filter).exec();

    return gameStats as GameStat[];
  }

  async createGameStat(
    input: RouterInput['createGameStat'],
    ctx: RouterContext
  ): Promise<RouterOutput['createGameStat']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Core.Service.createGameStat', input);

    const gameStat = await ctx.app.model.GameStat.create(input);
    return gameStat as GameStat;
  }

  async updateGameStat(
    input: RouterInput['updateGameStat'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateGameStat']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Core.Service.updateGameStat', input);

    const gameStat = await ctx.app.model.GameStat.findByIdAndUpdate(input.where.id.equals, { new: true }).lean().exec();
    if (!gameStat) throw new Error('GameStat update failed');

    return gameStat as GameStat;
  }

  // Era Methods
  async getEra(input: RouterInput['getEra'], ctx: RouterContext): Promise<RouterOutput['getEra']> {
    if (!input) throw new ARXError('NO_INPUT');
    console.log('Core.Service.getEra', input);

    const era = await ctx.app.model.Era.findOne(getFilter(input)).exec();
    if (!era) throw new Error('Era not found');

    return era as Era;
  }

  async getEras(input: RouterInput['getEras'], ctx: RouterContext): Promise<RouterOutput['getEras']> {
    const filter = getFilter(input);
    const eras = await ctx.app.model.Era.find(filter).exec();

    return eras as Era[];
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
