import { z, Entity } from '../../schema';

export const Market = Entity.merge(
  z.object({
    value: z.string().min(1),
  })
);

export const MarketPair = Entity.merge(
  z.object({
    value: z.string().min(1),
  })
);

export const MarketExchange = Entity.merge(
  z.object({
    value: z.string().optional(),
  })
);

export const MarketAnalysis = Entity.merge(
  z.object({
    action: z.enum(['buy', 'sell']), // buy or sell action
    asset: z.string().min(1), // the asset being traded (e.g., oil, Bitcoin)
    signalType: z.string().min(1), // type of signal (e.g., news)
    confidence: z.number().min(0).max(100), // confidence level from 0 to 100
    riskLevel: z.enum(['Low', 'Medium', 'High']), // risk level
    timeFrame: z.enum(['Short-Term', 'Long-Term']), // investment time frame
    source: z.string().min(1), // source of information (e.g., FinancialJuice, Ground News)
    summary: z.string().min(1), // summary of the analysis
    labels: z.object({
      sector: z.string().optional(), // sector related to the asset (e.g., energy, aviation)
      topic: z.string().optional(), // topic of the news (e.g., oil demand, job cuts)
      sentiment: z.enum(['Positive', 'Neutral', 'Negative']).optional(), // sentiment of the news
    }),
  })
);
