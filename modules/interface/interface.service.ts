import _ from 'lodash';
import Mongoose from 'mongoose';
import { decodeRequest, generateShortId } from '../../util/db';
import type { IApp, Context } from '../../types';
import type { Query, InterfaceDocument } from './interface.types';

// export interface IService {
//   interfaces: (ctx: any) => Promise<any>;
// }

export class Service {
  //  implements IService
  constructor() {}

  async init({ app }: { app: IApp }) {}

  public async interface(input: { query?: Query }, ctx: Context) {
    const { Interface } = ctx.app.model;
    const interfac = await Interface.findOne(input.query).select('-meta').exec();

    if (!interfac.version) interfac.version = 1;
    if (!interfac.meta) interfac.meta = {};

    return interfac;
  }

  public async interfaces(input: { query?: Query }, ctx: Context) {
    const interfaces = await this.getInterfaces(input, ctx);
    return interfaces.slice(input.query.skip, input.query.skip + input.query.take);
  }

  private async fetchRolesFromContext(ctx: Context): Promise<string[]> {
    return ctx.user?.rolesOnUsers.filter((r) => r.status === 'Active').map((r) => r.role.name) || [];
  }

  public async acceptInterfaceSubmission({ query }: { query: Query }, ctx: Context) {
    console.log('Not implemented');
  }

  //   private async fetchInterfaceGroupRoles(groupId: string, ctx: Context): Promise<string[]> {
  //     const { InterfaceGroup } = ctx.app.model;
  //     const group = await InterfaceGroup.findOne({
  //       // id: groupId,
  //       _id: new Mongoose.Types.ObjectId(groupId),
  //     }).exec();
  //     return group?.rolesOnInterfaceGroups.filter((r: any) => r.status === 'Active').map((r: any) => r.role.name) || [];
  //   }

  private hasPermission(rolesOnInterfaceGroups: string[], rolesOnUsers: string[]): boolean {
    return (
      rolesOnUsers.includes('Super User') ||
      rolesOnInterfaceGroups.includes('Guest') ||
      _.intersection(rolesOnInterfaceGroups, rolesOnUsers).length > 0
    );
  }

  public async getInterfaces({ query }: { query: Query }, ctx: Context) {
    const { Interface } = ctx.app.model;
    console.log('Interfaces query', query);

    const interfaces = await Interface.find(query).select('-meta').exec();
    const rolesOnUsers = await this.fetchRolesFromContext(ctx);

    for (const interfac of interfaces) {
      if (!interfac.version) interfac.version = 1;
      if (!interfac.meta) interfac.meta = {};
      //   if (!interfac.interfaceSubmissions) interfac.interfaceSubmissions = [];

      //   if (interfac.groupId) {
      //     interfac.group = await this.findFirstInterfaceGroup(
      //       {
      //         query: {
      //           where: { id: { equals: interfac.groupId } },
      //         },
      //       },
      //       ctx
      //     );
      //   }
    }

    return interfaces.filter((interfac) => {
      const rolesOnInterfaceGroups = [];
      // TODO: Fix
      //   interfac.group
      //     ? interfac.group.rolesOnInterfaceGroups.filter((r: any) => r.status === 'Active').map((r: any) => r.role.name)
      //     : [];

      return this.hasPermission(rolesOnInterfaceGroups, rolesOnUsers);
    });
  }

  public async aggregateInterface({ query }: { query: Query }, ctx: Context) {
    console.log(query, ctx);
    const count = (await this.getInterfaces({ query }, ctx)).length;
    return { _count: { _all: count } };
  }

  public async findFirstInterface({ query }: { query: Query }, ctx: Context) {
    const { Interface } = ctx.app.model;
    if (query.where.key) query.where.status.equals = 'Published';

    const interfac = await Interface.findOne(query).sort({ version: -1 }).exec();
    if (!interfac) throw new Error('Interface cannot be found');

    const rolesOnUsers = await this.fetchRolesFromContext(ctx);
    const rolesOnInterfaceGroups = interfac.groupId ? await this.fetchInterfaceGroupRoles(interfac.groupId, ctx) : [];

    if (!this.hasPermission(rolesOnInterfaceGroups, rolesOnUsers)) {
      console.log('Interface: No permission', interfac, rolesOnUsers, query);
      throw new Error('No permissions');
    }

    // Fetch interface submissions if available
    // interfac.interfaceSubmissions = (await this.fetchInterfaceSubmissions(interfac.key)) || [];
    await this.updateSubmissionVersions(interfac, ctx);

    // Clean up components
    this.cleanComponents(interfac);

    return this.createInterfaceResponse(interfac);
  }

  private async fetchInterfaceSubmissions(key: string): Promise<any[]> {
    return [];
  }

  private async updateSubmissionVersions(interfac: any, ctx: Context): Promise<void> {
    const { Interface } = ctx.app.model;
    for (const submission of interfac.interfaceSubmissions) {
      if (submission.interfacId === interfac.id) {
        submission.interfacVersion = interfac.version;
      } else {
        const submissionInterface = await Interface.findOne({
          _id: new Mongoose.Types.ObjectId(submission.interfacId),
        }).exec();
        if (submissionInterface) submission.interfacVersion = submissionInterface.version;
      }
    }

    interfac.interfaceSubmissions = interfac.interfaceSubmissions.filter(
      (submission: any) => !!submission.interfacVersion
    );
  }

  private cleanComponents(interfac: any): void {
    const components = interfac.components?.length ? interfac.components : interfac.meta?.data?.components;
    if (!components) return;

    components.forEach((component: any) => {
      this.cleanComponent(component);
    });

    delete interfac.meta?.data?.Template;
    delete interfac.meta?.data?.components;
    delete interfac.meta?.data?.services;
    delete interfac.meta?.data?.id;
    delete interfac.meta?.data?.name;
    delete interfac.meta?.data?.interfaceSubmissions;
    interfac.meta = {};
  }

  private cleanComponent(component: any): void {
    if (!component) return;

    if (!component.key) component.key = component.id;
    if (component.dataSourceColumns) {
      component.components = component.dataSourceColumns;
      delete component.dataSourceColumns;
    }
    if (!component.actions) component.actions = [];
    if (!component.options) component.options = [];
    if (!component.components) component.components = [];
    if (component.validation?.__typename) delete component.validation.__typename;
    if (component.id) delete component.id;

    if (component.components) {
      component.components.forEach((subComponent: any) => this.cleanComponent(subComponent));
    }
  }

  private createInterfaceResponse(interfac: any): any {
    return {
      id: interfac.id,
      key: interfac.key,
      name: interfac.name,
      description: interfac.description,
      status: interfac.status,
      interfaceSubmissions: interfac.interfaceSubmissions,
      groupId: interfac.groupId,
      group: interfac.group,
      version: interfac.version || 1,
      meta: interfac.meta || {},
      publishedInterface: interfac.publishedInterface,
      draftInterface: interfac.draftInterface,
      components: interfac.components || [],
      connectors: interfac.connectors || [],
      showInNav: interfac.showInNav || false,
      theme: interfac.theme || 'default',
    };
  }

  public async createOneInterface({ query }: { query: Query }, ctx: Context) {
    const { Interface } = ctx.app.model;

    const data = decodeRequest(query.data);
    const existingInterface = await Interface.findOne({ key: query.data.key }).exec();
    const version = existingInterface ? existingInterface.version + 1 : 1;

    const newInterface = await Interface.create({
      ...data,
      status: query.data.status || 'Draft',
      version,
      createdDate: new Date(),
    });

    await ctx.app.service.Job.updateMetrics(ctx);

    return newInterface;
  }

  public async deleteInterface({ query }: { query: Query }, ctx: Context) {
    const { Interface } = ctx.app.model;
    const interfac = await Interface.findOne({ id: query.where.id }).exec();
    if (!interfac) {
      throw new Error('Interface does not exist');
    }

    interfac.status = 'Archived';
    interfac.updatedDate = new Date();
    await interfac.save();
    await ctx.app.service.Job.updateMetrics(ctx);

    return interfac;
  }

  public async updateInterface({ query }: { query: Query }, ctx: Context) {
    const { Interface } = ctx.app.model;
    const data = query.data;
    let interfac = await Interface.findOne({ id: query.where.id }).exec();
    if (!interfac) {
      throw new Error('Interface does not exist');
    }

    if (interfac.status === 'Published' || data.groupId) {
      await Interface.updateMany({ key: interfac.key, status: 'Draft' }, { status: 'Archived' }).exec();
      const version = (await Interface.find({ key: interfac.key }).sort({ version: -1 }).exec())[0].version + 1;

      interfac = (await Interface.create({
        ...interfac.toObject(),
        ...data,
        status: 'Draft',
        version,
        createdDate: new Date(),
      })) as InterfaceDocument;
    } else {
      for (const key in data) {
        // @ts-ignore
        interfac[key] = data[key];
      }
      interfac.updatedDate = new Date();
      await interfac.save();
    }

    await ctx.app.service.Job.updateMetrics(ctx);

    return interfac;
  }

  public async publishInterface({ query }: { query: Query }, ctx: Context) {
    const { Interface } = ctx.app.model;
    const interfac = await Interface.findOne({ id: query.where.id }).exec();
    if (!interfac) {
      throw new Error('Interface does not exist');
    }

    await Interface.updateMany({ key: interfac.key }, { status: 'Paused' }).exec();

    interfac.status = 'Published';
    interfac.updatedDate = new Date();
    await interfac.save();
    await ctx.app.service.Job.updateMetrics(ctx);

    return interfac;
  }

  public async deactivateInterface({ query }: { query: Query }, ctx: Context) {
    const { Interface } = ctx.app.model;
    const interfac = await Interface.findOne({ id: query.where.id }).exec();
    if (!interfac) {
      throw new Error('Interface does not exist');
    }

    interfac.status = 'Paused';
    interfac.updatedDate = new Date();
    await interfac.save();
    await ctx.app.service.Job.updateMetrics(ctx);

    return interfac;
  }

  public async resetInterfaceDraft({ query }: { query: Query }, ctx: Context) {
    const { Interface } = ctx.app.model;
    const interfac = await Interface.findOne({ id: query.where.id }).exec();
    if (!interfac) {
      throw new Error('Interface does not exist');
    }

    const publishedInterface =
      interfac.status === 'Draft'
        ? await Interface.findOne({ key: interfac.key, status: 'Published' }).sort({ version: -1 }).exec()
        : undefined;

    if (!publishedInterface) {
      throw new Error('No published interface to copy.');
    }

    interfac.name = publishedInterface.name;
    interfac.meta = publishedInterface.meta;
    interfac.updatedDate = new Date();
    await interfac.save();

    return interfac;
  }

  public async createInterfaceDraft({ query }: { query: Query }, ctx: Context) {
    const { Interface } = ctx.app.model;
    const parentInterface = await Interface.findOne({ id: query.where.id }).exec();
    if (!parentInterface) {
      throw new Error('Interface does not exist');
    }

    const existingDraft = await Interface.findOne({
      key: parentInterface.key,
      status: 'Draft',
    }).exec();
    if (existingDraft) {
      throw new Error('Draft interface already exists');
    }

    const highestVersionInterface = await Interface.findOne({ key: parentInterface.key }).sort({ version: -1 }).exec();
    const newInterface = await Interface.create({
      ...parentInterface.toObject(),
      status: 'Draft',
      version: highestVersionInterface.version + 1,
      createdDate: new Date(),
      updatedDate: new Date(),
    });

    await ctx.app.service.Job.updateMetrics(ctx);

    return newInterface;
  }

  public async interfaceGroups({ query }: { query: Query }, ctx: Context) {
    const { InterfaceGroup } = ctx.app.model;
    const sort = query.orderBy?.name ? { name: query.orderBy.name === 'asc' ? 1 : -1 } : {};
    const interfaceGroups = await InterfaceGroup.find(query, null, { sort }).exec();

    for (const group of interfaceGroups) {
      if (!group.meta) group.meta = {};
      //   if (!group.rolesOnInterfaceGroups) group.rolesOnInterfaceGroups = [];

      //   for (const role of group.rolesOnInterfaceGroups) {
      //     if (!role.id) role.id = generateShortId();
      //     if (!role.status) role.status = 'Active';
      //     role.role = await ctx.app.service.role.findFirstRole({
      //       where: { id: { equals: role.role.id } },
      //     });
      //   }
    }

    return interfaceGroups;
  }

  public async findFirstInterfaceGroup({ query }: { query: Query }, ctx: Context) {
    const { InterfaceGroup } = ctx.app.model;

    let group = null;
    if (query.where.id?.equals) {
      group = await InterfaceGroup.findOne({ _id: query.where.id.equals }).exec();
    } else if (query.where.key?.equals) {
      group = await InterfaceGroup.findOne({ key: query.where.key.equals }).exec();
    }

    if (!group) return null;
    if (!group.rolesOnInterfaceGroups) group.rolesOnInterfaceGroups = [];

    for (const role of group.rolesOnInterfaceGroups) {
      role.role = await ctx.app.service.Profile.findFirstRole({
        where: { id: { equals: role.role.id } },
      });
    }

    return {
      id: group._id,
      key: group.key,
      name: group.name,
      status: group.status,
      meta: group.meta || {},
      createdDate: group.createdDate,
      updatedDate: group.updatedDate,
      deletedDate: group.deletedDate,
      //   rolesOnInterfaceGroups: group.rolesOnInterfaceGroups,
      interfacs: [],
    };
  }

  public async createInterfaceGroup({ query }: { query: Query }, ctx: Context) {
    const { InterfaceGroup } = ctx.app.model;
    const data = decodeRequest(query.data);
    const newGroup = await InterfaceGroup.create(data);
    return newGroup;
  }

  public async updateInterfaceGroup({ query }: { query: Query }, ctx: Context) {
    const { InterfaceGroup } = ctx.app.model;
    const data = decodeRequest(query.data);
    await InterfaceGroup.updateOne({ _id: query.where.id }, { ...data }, { runValidators: true }).exec();

    const updatedGroup = await InterfaceGroup.findOne({ id: query.where.id }).exec();
    if (!updatedGroup.meta) updatedGroup.meta = {};
    // if (!updatedGroup.interface) updatedGroup.interface = [];

    return updatedGroup;
  }

  public async interfaceComponents({ query }: { query: Query }, ctx: Context) {
    const { InterfaceComponent } = ctx.app.model;
    const components = await InterfaceComponent.find(query).exec();

    components.forEach((component: any) => {
      if (!component.meta) component.meta = {};
    });

    return components;
  }

  public async findFirstInterfaceComponent({ query }: { query: Query }, ctx: Context) {
    const { InterfaceComponent } = ctx.app.model;
    const component = await InterfaceComponent.findOne(query).exec();

    return {
      id: component._id,
      key: component.key,
      name: component.name,
      status: component.status,
      meta: component.meta || {},
    };
  }

  public async createInterfaceComponent({ query }: { query: Query }, ctx: Context) {
    const { InterfaceComponent } = ctx.app.model;
    if (await InterfaceComponent.findOne({ name: query.data.name }).exec()) {
      throw new Error('Component template with this name already exists');
    }
    if (await InterfaceComponent.findOne({ key: query.data.key }).exec()) {
      throw new Error('Component template with this key already exists');
    }

    const component = await InterfaceComponent.create({
      name: query.data.name,
      key: query.data.key,
      status: query.data.status,
      meta: query.data.meta,
    });

    await ctx.app.service.Job.updateMetrics(ctx);

    return component;
  }

  public async updateInterfaceComponent({ query }: { query: Query }, ctx: Context) {
    const { InterfaceComponent } = ctx.app.model;
    const data = Object.entries(query.data).reduce((acc, [key, value]: any) => {
      if (value?.set) acc[key] = value.set;
      return acc;
    }, {} as any);

    await InterfaceComponent.updateOne({ _id: query.where.id }, { ...data }, { runValidators: true }).exec();

    const updatedComponent = await InterfaceComponent.findOne({ id: query.where.id }).exec();
    if (!updatedComponent.meta) updatedComponent.meta = {};

    await ctx.app.service.Job.updateMetrics(ctx);

    return updatedComponent;
  }
}
