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
    if (!input) throw new Error('Input should not be void');
    console.log('Job.Service.updateMetrics');

    let latestRecord;
    let latestNumber = 1;

    const { Stat, Payment } = ctx.app.model;

    try {
      latestRecord = await Stat.findOne().sort({ number: -1 }).exec();

      if (latestRecord) {
        latestNumber = latestRecord.number;

        const dayAgo = dayjs().subtract(1, 'day');

        // Unset the latest record if it's older than one day, so a new one is created
        if (!dayjs(latestRecord.createdDate).isAfter(dayAgo)) {
          latestRecord = undefined;
        }
      }
    } catch (e) {
      console.log('Error getting latest stat record', e);
    }

    const totalPaymentsCount = await Payment.countDocuments().exec();
    const pendingPayments = await Payment.where({ status: { $in: ['Processing', 'Processed', 'Finalized'] } });
    const completedPayments = await Payment.where({ status: { $in: ['Completed'] } });

    const pendingTokens: any = {};
    const distributedTokens: any = {};

    for (const payment of pendingPayments) {
      for (const i in payment.meta.tokenKeys) {
        const key = payment.meta.tokenKeys[i];
        const amount = payment.meta.tokenAmounts[i];

        if (!pendingTokens[key]) pendingTokens[key] = 0;

        pendingTokens[key] += amount;
      }
    }

    for (const payment of completedPayments) {
      for (const i in payment.meta.tokenKeys) {
        const key = payment.meta.tokenKeys[i];
        const amount = payment.meta.tokenAmounts[i];

        if (!distributedTokens[key]) distributedTokens[key] = 0;

        distributedTokens[key] += amount;
      }
    }

    const pendingPaymentsCount = pendingPayments.length;
    const completedPaymentsCount = completedPayments.length;

    // const result = await ctx.app.model.Profile.aggregate([
    //   {
    //     $group: {
    //       _id: null,
    //       totalDoge: { $sum: "$meta.rewards.tokens.doge" },
    //       totalPepe: { $sum: "$meta.rewards.tokens.pepe" },
    //     }
    //   }
    // ]);
    const pendingRewardTokens = await ctx.app.model.Profile.aggregate([
      {
        // Convert meta.rewards.tokens => { k, v } pairs
        $project: {
          tokens: { $objectToArray: '$meta.rewards.tokens' },
        },
      },
      {
        // Unwind each { k, v } into its own document
        $unwind: '$tokens',
      },
      {
        // Group by token name (k), summing up values (v)
        $group: {
          _id: '$tokens.k',
          total: { $sum: '$tokens.v' },
        },
      },
      {
        // Re-group into a single document with an array of { k, v }
        $group: {
          _id: null,
          tokens: {
            $push: {
              k: '$_id',
              v: '$total',
            },
          },
        },
      },
      {
        // Convert the array [ { k, v }, { k, v }, ... ] back into an object
        $project: {
          _id: 0,
          tokens: { $arrayToObject: '$tokens' },
        },
      },
    ]);

    const meta: any = {
      payments: {
        totalCount: totalPaymentsCount,
        pendingCount: pendingPaymentsCount,
        completedCount: completedPaymentsCount,
        status: {
          Processing: await Payment.where({ status: 'Processing' }).countDocuments().exec(),
          Processed: await Payment.where({ status: 'Processed' }).countDocuments().exec(),
          Finalized: await Payment.where({ status: 'Finalized' }).countDocuments().exec(),
          Completed: await Payment.where({ status: 'Completed' }).countDocuments().exec(),
          Voided: await Payment.where({ status: 'Voided' }).countDocuments().exec(),
        },
        pendingTokens,
        distributedTokens,
      },
      rewards: {
        pendingRewardTokens: pendingRewardTokens?.[0]?.tokens || {},
      },
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
        number: latestNumber + 1,
        createdDate: new Date(),
        meta,
      });
    }

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
