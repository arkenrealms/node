// packages/node/modules/core/mail/mailClaimablePatchesBatch.ts
//
import type { RouterContext } from '../core.types';
import type { EntityPatch } from '../../../types';

type MailKind = 'mail' | 'dm' | 'group' | 'support' | 'system';

export type MailPatchMessagePayload = {
  kind: 'patch-grant';
  source: string;
  title?: string;
  body?: string;
  patches: EntityPatch[];
  ui?: {
    rewards?: Array<{ type: 'item' | 'token' | 'reward'; id: string; quantity?: number; meta?: any }>;
    effects?: Array<{ type: 'stat' | 'flag' | 'effect'; key?: string; delta?: number; value?: any; label?: string }>;
  };
};

export type MailClaimableBatchParams = {
  ctx: RouterContext;

  /** If omitted, helper streams all profiles */
  profileIds?: string[];

  /** Streaming mode: process all profiles using _id cursor */
  streamAllProfiles?: boolean;

  kind?: MailKind; // default 'mail'
  source: string;

  title: string;
  body: string;

  /**
   * Same dedupeKey across all conversations is OK because uniqueness is enforced by:
   * (conversationId, claim.dedupeKey)
   */
  dedupeKey: string;

  /**
   * IMPORTANT: These patches should be claimable. Your applyPatchesWithInventoryViaMail
   * uses `patch.claimable` to decide mail vs immediate. For broadcast we ALWAYS mail.
   */
  claimablePatches: EntityPatch[];

  payloadUi?: MailPatchMessagePayload['ui'];

  batchSize?: number; // default 1000

  conversationKey: string; // ✅ REQUIRED
  conversationTitle?: string; // optional: used on new convo creation
  conversationCategory?: string; // optional
  conversationImportance?: number; // optional
};

export type MailClaimableBatchResult = {
  processedProfiles: number;
  conversationsFound: number;
  conversationsCreated: number;

  messagesExisting: number;
  messagesCreated: number;
};

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function toObjectId(mongoose: any, id: string) {
  // Works whether id already is ObjectId-like or string
  try {
    return new mongoose.Types.ObjectId(id);
  } catch {
    return id;
  }
}

/**
 * Bulk-mail claimable patches to many profiles.
 *
 * Design assumptions:
 * - 1 mailbox per profile per kind (kind='mail' for inbox)
 * - Conversation can be found by:
 *   - kind + profileId (back-compat) OR
 *   - kind + participants.profileId (new)
 * - Dedupe per conversation by claim.dedupeKey
 */
export async function mailClaimablePatchesBatch(params: MailClaimableBatchParams): Promise<MailClaimableBatchResult> {
  const {
    ctx,
    kind = 'mail',
    source,
    title,
    body,
    dedupeKey,
    claimablePatches,
    payloadUi,
    batchSize = 1000,
    conversationKey,
  } = params;

  const mongoose = (ctx.app as any).db?.mongoose ?? (ctx.app as any).mongoose;
  const Profile = (ctx.app as any).model.Profile;
  const Conversation = (ctx.app as any).model.Conversation;
  const ConversationMessage = (ctx.app as any).model.ConversationMessage;

  if (!Profile || !Conversation || !ConversationMessage) {
    throw new Error('mailClaimablePatchesBatch: missing required models (Profile/Conversation/ConversationMessage)');
  }

  const payload: MailPatchMessagePayload = {
    kind: 'patch-grant',
    source,
    title,
    body,
    patches: claimablePatches,
    ui: payloadUi,
  };

  const preview = `${title} — ${body}`.slice(0, 140);
  const now = new Date();

  let processedProfiles = 0;
  let conversationsFound = 0;
  let conversationsCreated = 0;
  let messagesExisting = 0;
  let messagesCreated = 0;

  // ----------------------------
  // Resolve profile id batches
  // ----------------------------
  const explicitIds = Array.isArray(params.profileIds) ? params.profileIds.filter(Boolean) : [];

  // If caller gave explicit profileIds, just run those (chunked).
  if (explicitIds.length > 0) {
    for (const batch of chunk(explicitIds, batchSize)) {
      const r = await processProfileIdBatch(batch, ctx);
      processedProfiles += r.processedProfiles;
      conversationsFound += r.conversationsFound;
      conversationsCreated += r.conversationsCreated;
      messagesExisting += r.messagesExisting;
      messagesCreated += r.messagesCreated;
    }

    return { processedProfiles, conversationsFound, conversationsCreated, messagesExisting, messagesCreated };
  }

  // Otherwise stream all profiles if requested; default true if neither profileIds nor streamAllProfiles specified.
  const streamAll = params.streamAllProfiles ?? true;
  if (!streamAll) {
    return {
      processedProfiles: 0,
      conversationsFound: 0,
      conversationsCreated: 0,
      messagesExisting: 0,
      messagesCreated: 0,
    };
  }

  // Stream profiles by _id cursor to avoid loading everything.
  let lastId: any = null;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const q: any = lastId ? { _id: { $gt: lastId } } : {};
    const docs = await Profile.find(q).select({ _id: 1 }).sort({ _id: 1 }).limit(batchSize).lean().exec();

    if (!docs || docs.length === 0) break;

    const batchIds = docs.map((d: any) => String(d._id));
    lastId = docs[docs.length - 1]._id;

    const r = await processProfileIdBatch(batchIds, ctx);
    processedProfiles += r.processedProfiles;
    conversationsFound += r.conversationsFound;
    conversationsCreated += r.conversationsCreated;
    messagesExisting += r.messagesExisting;
    messagesCreated += r.messagesCreated;
  }

  return { processedProfiles, conversationsFound, conversationsCreated, messagesExisting, messagesCreated };

  // ============================================================
  // Batch worker: takes string profile ids
  // ============================================================
  async function processProfileIdBatch(profileIds: string[], ctx: any): Promise<MailClaimableBatchResult> {
    const profileObjectIds = profileIds.map((id) => toObjectId(mongoose, id));

    // 1) Find existing inbox conversations for these profiles (both back-compat + participants)
    const existingConvos = await ctx.app.model.Conversation.find({
      kind,
      key: conversationKey, // ✅ NEW
      $or: [{ profileId: { $in: profileObjectIds } }, { 'participants.profileId': { $in: profileObjectIds } }],
    })
      .select({ _id: 1, profileId: 1, participants: 1 })
      .lean()
      .exec();

    const convoByProfileId = new Map<string, any>();

    for (const c of existingConvos || []) {
      // Prefer participant mapping when available
      const participants = Array.isArray((c as any).participants) ? (c as any).participants : [];
      for (const p of participants) {
        if (p?.profileId) convoByProfileId.set(String(p.profileId), c);
      }
      if ((c as any).profileId) convoByProfileId.set(String((c as any).profileId), c);
    }

    const foundCount = convoByProfileId.size;

    // 2) Create missing conversations
    const missingProfileIds = profileIds.filter((pid) => !convoByProfileId.has(String(pid)));

    // 2) Create missing conversations (UPSERT)
    if (missingProfileIds.length > 0) {
      const ops = missingProfileIds.map((pid) => {
        const pidObj = toObjectId(mongoose, pid);
        return {
          updateOne: {
            filter: {
              applicationId: toObjectId(mongoose, (ctx.app as any).filters.applicationId),
              kind,
              key: conversationKey,
              profileId: pidObj,
              status: { $ne: 'Archived' },
            },
            update: {
              $setOnInsert: {
                applicationId: toObjectId(mongoose, (ctx.app as any).filters.applicationId),
                kind,
                key: conversationKey,
                profileId: pidObj,
                participants: [
                  {
                    profileId: pidObj,
                    role: 'user',
                    lastReadAt: new Date(0),
                    unreadCount: 0,
                    isMuted: false,
                    isPinned: false,
                    isArchived: false,
                    isDeleted: false,
                  },
                ],
                isLocked: true,
                allowUserSend: false,
                title: 'Mailbox',
                category: 'system',
                importance: 0,
                lastMessageDate: null,
                lastMessagePreview: '',
                messageCount: 0,
                messages: [],
                status: 'Active',
              },
            },
            upsert: true,
          },
        };
      });

      // bulkWrite exists on your wrapper (you already call it later)
      const res = await ctx.app.model.Conversation.bulkWrite(ops, { ordered: false });

      // 🔴 REQUIRED: re-read conversations to get _id for newly upserted docs
      const convosForBatch = await ctx.app.model.Conversation.find({
        kind,
        key: conversationKey,
        $or: [{ profileId: { $in: profileObjectIds } }, { 'participants.profileId': { $in: profileObjectIds } }],
      })
        .select({ _id: 1, profileId: 1, participants: 1 })
        .lean()
        .exec();

      // rebuild convoByProfileId with fresh _id values
      convoByProfileId.clear();
      for (const c of convosForBatch || []) {
        const participants = Array.isArray(c.participants) ? c.participants : [];
        for (const p of participants) {
          if (p?.profileId) convoByProfileId.set(String(p.profileId), c);
        }
        if (c.profileId) convoByProfileId.set(String(c.profileId), c);
      }

      // Depending on wrapper, it may return { upsertedCount } or { nUpserted }
      conversationsCreated += Number((res as any)?.upsertedCount ?? (res as any)?.nUpserted ?? 0);
    }

    // 3) Now we have conversation ids for (almost) everyone in the batch
    const convoIds = profileIds.map((pid) => convoByProfileId.get(String(pid))?._id).filter(Boolean);

    // If something is still missing, skip those profiles (should be extremely rare)
    const convoIdSet = new Set(convoIds.map((id: any) => String(id)));
    const uniqueConvoIds = Array.from(convoIdSet).map((id) => toObjectId(mongoose, id));

    // 4) Dedupe: find existing messages with this dedupeKey for these conversations
    const existingMsgs = await ctx.app.model.ConversationMessage.find({
      conversationId: { $in: uniqueConvoIds },
      'claim.dedupeKey': dedupeKey,
    })
      .select({ _id: 1, conversationId: 1 })
      .lean()
      .exec();

    const hasMsgForConvo = new Set<string>((existingMsgs || []).map((m: any) => String(m.conversationId)));
    const existingMsgCount = hasMsgForConvo.size;

    // 5) Build inserts for conversations missing the message
    const msgsToInsert = uniqueConvoIds
      .filter((cid: any) => !hasMsgForConvo.has(String(cid)))
      .map((conversationId: any) => ({
        conversationId,
        role: 'system',
        type: 'reward',
        content: body ?? '',
        payload,
        claim: {
          isClaimable: true,
          claimedDate: null,
          claimedByProfileId: null,
          dedupeKey,
          attachments: [],
          revokedDate: null,
          revokeReason: null,
        },
      }));

    let insertedMsgs: any[] = [];
    if (msgsToInsert.length > 0) {
      try {
        insertedMsgs = await ctx.app.model.ConversationMessage.insertMany(msgsToInsert, { ordered: false });
      } catch (e: any) {
        console.log('error inserting conversation messages', e);
        // If some duplicate insert races happened, we ignore and continue.
        // console.warn('ConversationMessage.insertMany partial failure', e?.message);
      }
    }

    // 6) Update conversations listing fields for those where we inserted a message
    if (insertedMsgs.length > 0) {
      const convoUpdates = insertedMsgs.map((m: any) => ({
        updateOne: {
          filter: { _id: m.conversationId },
          update: {
            $set: {
              lastMessageDate: now,
              lastMessagePreview: preview,
            },
            $inc: {
              messageCount: 1,
              // Increment unread count for the user participant if present
              'participants.$[p].unreadCount': 1,
            },
            // Back-compat array; you said you’re keeping it for now.
            $push: { messages: m._id },
          },
          arrayFilters: [{ 'p.role': 'user' }],
        },
      }));

      try {
        await ctx.app.model.Conversation.bulkWrite(convoUpdates, { ordered: false });
      } catch (e: any) {
        console.log('error bulk updating conversations', e);
        // ignore
      }
    }

    return {
      processedProfiles: profileIds.length,
      conversationsFound: foundCount,
      conversationsCreated: 0, // tracked at outer scope; keep per-batch minimal
      messagesExisting: existingMsgCount,
      messagesCreated: insertedMsgs.length,
    };
  }
}
