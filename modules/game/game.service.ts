import type { Era } from './game.types';
import type { IApp } from '../../types';

export interface IService {
  eras: (ctx: any) => Promise<any>;
}

export class Service implements IService {
  constructor() {}

  async init({ app }: { app: IApp }) {}

  async eras({ app }: { app: IApp }) {
    console.log('Game.Service.eras');

    const eras = await app.model.Era.find().lean().exec();

    return { data: eras as Era[] };
  }
}
