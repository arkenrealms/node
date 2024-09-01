// module/job.service.ts

import type { Job, RouterContext, Router, RouterInput, RouterOutput } from './job.types';

export class Service {
  async getJob(input: RouterInput['getJob'], ctx: RouterContext): Promise<RouterOutput['getJob']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Job.Service.getJob', input.jobId);

    const job = await ctx.app.model.Job.findById(input.jobId).lean().exec();
    if (!job) throw new Error('Job not found');

    return job as Job;
  }

  async createJob(input: RouterInput['createJob'], ctx: RouterContext): Promise<RouterOutput['createJob']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Job.Service.createJob', input);

    const job = await ctx.app.model.Job.create(input);
    return job as Job;
  }

  async updateJob(input: RouterInput['updateJob'], ctx: RouterContext): Promise<RouterOutput['updateJob']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Job.Service.updateJob', input.jobId, input.data);

    const updatedJob = await ctx.app.model.Job.findByIdAndUpdate(input.jobId, input.data, { new: true }).lean().exec();
    if (!updatedJob) throw new Error('Job update failed');

    return updatedJob as Job;
  }

  async updateMetrics(
    input: RouterInput['updateJobCategory'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateJobCategory']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Job.Service.updateMetrics');

    let latestRecord;
    let latestNumber = 1;

    const { Stat, Interface, InterfaceComponent } = ctx.app.model;

    try {
      latestRecord = await Stat.findOne().sort({ number: -1 }).exec();

      if (latestRecord) {
        latestNumber = latestRecord.number;

        const dayAgo = dayjs().subtract(1, 'day');

        // Unset the latest record if its older than one day, so a new one is created
        if (!dayjs(latestRecord.createdDate).isAfter(dayAgo)) {
          latestRecord = undefined;
          // return {
          //   success: false,
          // };
        }
      }
    } catch (e) {
      console.log('Error getting latest stat record', e);
    }

    const TotalInterfaces = await Interface.countDocuments().exec();
    const TotalInterfaceDrafted = 5 || (await Interface.where({ status: 'Draft' }).countDocuments().exec());
    const TotalInterfacePublished = 10 || (await Interface.where({ status: 'Published' }).countDocuments().exec());
    const TotalInterfacePaused = await Interface.where({ status: 'Paused' }).countDocuments().exec();
    const TotalInterfaceFinished = await Interface.where({ status: 'Finished' }).countDocuments().exec();
    const TotalInterfaceArchived = 20 || (await Interface.where({ status: 'Archived' }).countDocuments().exec());
    const TotalInterfaceSubmissions = 1;
    const TotalInterfaceTemplates = await InterfaceComponent.countDocuments().exec();

    const meta = {
      TotalInterfaces,
      TotalInterfaceDrafted,
      TotalInterfacePublished,
      TotalInterfacePaused,
      TotalInterfaceArchived,
      TotalInterfaceFinished,
      TotalInterfaceSubmissions,
      TotalInterfaceTemplates,
    };

    if (latestRecord) {
      await Stat.updateOne(
        { _id: latestRecord.id },
        {
          ...latestRecord.toObject(),
          meta,
        }
      ).exec();
    } else {
      await Stat.create({
        number: (latestNumber || 0) + 1,
        createdDate: new Date(),
        meta,
      });
    }

    return { status: 1 };
  }
}
