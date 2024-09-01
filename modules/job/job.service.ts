import dayjs from 'dayjs';
import type { Job } from './job.types';
import type { IApp, Context } from '../../types';

// export interface IService {
//   jobs: (ctx: any) => Promise<any>;
// }

export class Service {
  constructor() {}

  async init({ app }: { app: IApp }) {}

  async jobs({ app }: { app: IApp }) {
    console.log('Job.Service.jobs');

    const jobs = await app.model.Job.find().lean().exec();

    return { data: jobs as Job[] };
  }

  async updateMetrics(ctx: Context) {
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
