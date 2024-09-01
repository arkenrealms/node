import _ from 'lodash';
import Mongoose from 'mongoose';
import { decodeRequest, generateShortId } from '../../util/db';
import type {
  RouterContext,
  RouterInput,
  RouterOutput,
  InterfaceDocument,
  InterfaceGroupDocument,
  InterfaceComponentDocument,
} from './interface.types';

export class Service {
  constructor() {}

  // Interface Methods
  async getInterface(input: RouterInput['getInterface'], ctx: RouterContext): Promise<RouterOutput['getInterface']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Interface.Service.getInterface', input.query);

    const interfac = await ctx.app.model.Interface.findOne(input.query).select('-meta').lean().exec();
    if (!interfac) throw new Error('Interface not found');

    if (!interfac.version) interfac.version = 1;
    if (!interfac.meta) interfac.meta = {};

    return interfac as InterfaceDocument;
  }

  async getInterfaces(input: RouterInput['getInterfaces'], ctx: RouterContext): Promise<RouterOutput['getInterfaces']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Interface.Service.getInterfaces', input.query);

    const interfaces = await ctx.app.model.Interface.find(input.query).select('-meta').lean().exec();
    const rolesOnUsers = await this.fetchRolesFromContext(ctx);

    for (const interfac of interfaces) {
      if (!interfac.version) interfac.version = 1;
      if (!interfac.meta) interfac.meta = {};
    }

    return interfaces.filter((interfac) => {
      const rolesOnInterfaceGroups = [];
      return this.hasPermission(rolesOnInterfaceGroups, rolesOnUsers);
    }) as InterfaceDocument[];
  }

  async createInterface(
    input: RouterInput['createInterface'],
    ctx: RouterContext
  ): Promise<RouterOutput['createInterface']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Interface.Service.createInterface', input);

    const existingInterface = await ctx.app.model.Interface.findOne({ key: input.data.key }).lean().exec();
    const version = existingInterface ? existingInterface.version + 1 : 1;

    const newInterface = await ctx.app.model.Interface.create({
      ...decodeRequest(input.data),
      status: input.data.status || 'Draft',
      version,
      createdDate: new Date(),
    });

    await ctx.app.service.Job.updateMetrics(ctx);

    return newInterface as InterfaceDocument;
  }

  async updateInterface(
    input: RouterInput['updateInterface'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateInterface']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Interface.Service.updateInterface', input.query);

    let interfac = await ctx.app.model.Interface.findOne({ id: input.query.where.id }).lean().exec();
    if (!interfac) throw new Error('Interface does not exist');

    if (interfac.status === 'Published' || input.query.data.groupId) {
      await ctx.app.model.Interface.updateMany({ key: interfac.key, status: 'Draft' }, { status: 'Archived' }).exec();
      const version =
        (await ctx.app.model.Interface.find({ key: interfac.key }).sort({ version: -1 }).lean().exec())[0].version + 1;

      interfac = (await ctx.app.model.Interface.create({
        ...interfac,
        ...decodeRequest(input.query.data),
        status: 'Draft',
        version,
        createdDate: new Date(),
      })) as InterfaceDocument;
    } else {
      await ctx.app.model.Interface.updateOne({ id: input.query.where.id }, input.query.data).exec();
      interfac = await ctx.app.model.Interface.findOne({ id: input.query.where.id }).lean().exec();
    }

    await ctx.app.service.Job.updateMetrics(ctx);

    return interfac as InterfaceDocument;
  }

  async deleteInterface(
    input: RouterInput['deleteInterface'],
    ctx: RouterContext
  ): Promise<RouterOutput['deleteInterface']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Interface.Service.deleteInterface', input.query);

    const interfac = await ctx.app.model.Interface.findOne({ id: input.query.where.id }).lean().exec();
    if (!interfac) throw new Error('Interface does not exist');

    interfac.status = 'Archived';
    interfac.updatedDate = new Date();
    await ctx.app.model.Interface.updateOne({ id: input.query.where.id }, interfac).exec();

    await ctx.app.service.Job.updateMetrics(ctx);

    return interfac as InterfaceDocument;
  }

  // InterfaceGroup Methods
  async getInterfaceGroup(
    input: RouterInput['getInterfaceGroup'],
    ctx: RouterContext
  ): Promise<RouterOutput['getInterfaceGroup']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Interface.Service.getInterfaceGroup', input.query);

    const group = await ctx.app.model.InterfaceGroup.findOne(input.query.where).lean().exec();
    if (!group) throw new Error('InterfaceGroup not found');

    if (!group.rolesOnInterfaceGroups) group.rolesOnInterfaceGroups = [];

    for (const role of group.rolesOnInterfaceGroups) {
      role.role = await ctx.app.service.Profile.findFirstRole({
        where: { id: { equals: role.role.id } },
      });
    }

    return group as InterfaceGroupDocument;
  }

  async createInterfaceGroup(
    input: RouterInput['createInterfaceGroup'],
    ctx: RouterContext
  ): Promise<RouterOutput['createInterfaceGroup']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Interface.Service.createInterfaceGroup', input);

    const data = decodeRequest(input.data);
    const newGroup = await ctx.app.model.InterfaceGroup.create(data);

    return newGroup as InterfaceGroupDocument;
  }

  async updateInterfaceGroup(
    input: RouterInput['updateInterfaceGroup'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateInterfaceGroup']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Interface.Service.updateInterfaceGroup', input.query);

    const data = decodeRequest(input.query.data);
    await ctx.app.model.InterfaceGroup.updateOne({ _id: input.query.where.id }, data, { runValidators: true }).exec();

    const updatedGroup = await ctx.app.model.InterfaceGroup.findOne({ id: input.query.where.id }).lean().exec();
    if (!updatedGroup) throw new Error('InterfaceGroup update failed');

    return updatedGroup as InterfaceGroupDocument;
  }

  // InterfaceComponent Methods
  async getInterfaceComponent(
    input: RouterInput['getInterfaceComponent'],
    ctx: RouterContext
  ): Promise<RouterOutput['getInterfaceComponent']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Interface.Service.getInterfaceComponent', input.query);

    const component = await ctx.app.model.InterfaceComponent.findOne(input.query.where).lean().exec();
    if (!component) throw new Error('InterfaceComponent not found');

    return component as InterfaceComponentDocument;
  }

  async createInterfaceComponent(
    input: RouterInput['createInterfaceComponent'],
    ctx: RouterContext
  ): Promise<RouterOutput['createInterfaceComponent']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Interface.Service.createInterfaceComponent', input);

    if (await ctx.app.model.InterfaceComponent.findOne({ name: input.data.name }).exec()) {
      throw new Error('Component template with this name already exists');
    }
    if (await ctx.app.model.InterfaceComponent.findOne({ key: input.data.key }).exec()) {
      throw new Error('Component template with this key already exists');
    }

    const component = await ctx.app.model.InterfaceComponent.create({
      name: input.data.name,
      key: input.data.key,
      status: input.data.status,
      meta: input.data.meta,
    });

    await ctx.app.service.Job.updateMetrics(ctx);

    return component as InterfaceComponentDocument;
  }

  async updateInterfaceComponent(
    input: RouterInput['updateInterfaceComponent'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateInterfaceComponent']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Interface.Service.updateInterfaceComponent', input.query);

    const data = Object.entries(input.query.data).reduce((acc, [key, value]: any) => {
      if (value?.set) acc[key] = value.set;
      return acc;
    }, {} as any);

    await ctx.app.model.InterfaceComponent.updateOne({ _id: input.query.where.id }, data, {
      runValidators: true,
    }).exec();

    const updatedComponent = await ctx.app.model.InterfaceComponent.findOne({ id: input.query.where.id }).lean().exec();
    if (!updatedComponent) throw new Error('InterfaceComponent update failed');

    await ctx.app.service.Job.updateMetrics(ctx);

    return updatedComponent as InterfaceComponentDocument;
  }

  // Helper Methods
  private async fetchRolesFromContext(ctx: RouterContext): Promise<string[]> {
    return ctx.user?.rolesOnUsers.filter((r) => r.status === 'Active').map((r) => r.role.name) || [];
  }

  private hasPermission(rolesOnInterfaceGroups: string[], rolesOnUsers: string[]): boolean {
    return (
      rolesOnUsers.includes('Super User') ||
      rolesOnInterfaceGroups.includes('Guest') ||
      _.intersection(rolesOnInterfaceGroups, rolesOnUsers).length > 0
    );
  }
}
