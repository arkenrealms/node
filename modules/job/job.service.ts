// job.service.ts

import type { Job, RouterContext, RouterInput, RouterOutput } from './job.types';
import { getFilter } from '../../util/api';
import dayjs from 'dayjs';

export class Service {
  async getJob(input: RouterInput['getJob'], ctx: RouterContext): Promise<RouterOutput['getJob']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Job.Service.getJob', input.query);

    const filter = getFilter(input.query);
    const job = await ctx.app.model.Job.findOne(filter).lean().exec();
    if (!job) throw new Error('Job not found');

    return job as Job;
  }

  async createJob(input: RouterInput['createJob'], ctx: RouterContext): Promise<RouterOutput['createJob']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Job.Service.createJob', input.data);

    const job = await ctx.app.model.Job.create(input.data);
    return job as Job;
  }

  async updateJob(input: RouterInput['updateJob'], ctx: RouterContext): Promise<RouterOutput['updateJob']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Job.Service.updateJob', input.query, input.data);

    const filter = getFilter(input.query);
    const updatedJob = await ctx.app.model.Job.findOneAndUpdate(filter, input.data, { new: true }).lean().exec();
    if (!updatedJob) throw new Error('Job update failed');

    return updatedJob as Job;
  }

  async updateMetrics(input: RouterInput['updateMetrics'], ctx: RouterContext): Promise<RouterOutput['updateMetrics']> {
    // if (!input) throw new Error('Input should not be void');
    // console.log('Job.Service.updateMetrics');

    // let latestRecord;
    // let latestNumber = 1;

    // const { Stat, Interface, InterfaceComponent } = ctx.app.model;

    // try {
    //   latestRecord = await Stat.findOne().sort({ number: -1 }).exec();

    //   if (latestRecord) {
    //     latestNumber = latestRecord.number;

    //     const dayAgo = dayjs().subtract(1, 'day');

    //     // Unset the latest record if it's older than one day, so a new one is created
    //     if (!dayjs(latestRecord.createdDate).isAfter(dayAgo)) {
    //       latestRecord = undefined;
    //     }
    //   }
    // } catch (e) {
    //   console.log('Error getting latest stat record', e);
    // }

    // const TotalInterfaces = await Interface.countDocuments().exec();
    // const TotalInterfaceDrafted = await Interface.where({ status: 'Draft' }).countDocuments().exec();
    // const TotalInterfacePublished = await Interface.where({ status: 'Published' }).countDocuments().exec();
    // const TotalInterfacePaused = await Interface.where({ status: 'Paused' }).countDocuments().exec();
    // const TotalInterfaceFinished = await Interface.where({ status: 'Finished' }).countDocuments().exec();
    // const TotalInterfaceArchived = await Interface.where({ status: 'Archived' }).countDocuments().exec();
    // const TotalInterfaceSubmissions = 1; // Example static value, replace with actual logic if needed
    // const TotalInterfaceTemplates = await InterfaceComponent.countDocuments().exec();

    // const meta = {
    //   TotalInterfaces,
    //   TotalInterfaceDrafted,
    //   TotalInterfacePublished,
    //   TotalInterfacePaused,
    //   TotalInterfaceArchived,
    //   TotalInterfaceFinished,
    //   TotalInterfaceSubmissions,
    //   TotalInterfaceTemplates,
    // };

    // if (latestRecord) {
    //   await Stat.updateOne(
    //     { _id: latestRecord.id },
    //     {
    //       ...latestRecord.toObject(),
    //       meta,
    //     }
    //   ).exec();
    // } else {
    //   await Stat.create({
    //     number: latestNumber + 1,
    //     createdDate: new Date(),
    //     meta,
    //   });
    // }

    return { status: 1 };
  }
}
