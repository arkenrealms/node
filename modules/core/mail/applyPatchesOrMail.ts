// node/modules/core/mail/applyPatchesOrMail.ts
import get from 'lodash/get';
import set from 'lodash/set';
import type { RouterContext } from '../core.types';
import type { PatchOp, EntityPatch } from '../../../types';

// Reuse your existing function or move it here
export function applyPatchToObject(obj: any, patch: PatchOp[]) {
  for (const p of patch) {
    if (p.op === 'set') {
      set(obj, p.key, p.value);
    } else if (p.op === 'unset') {
      const parts = p.key.split('.');
      const last = parts.pop();
      const parent = parts.reduce((acc: any, k) => (acc ? acc[k] : undefined), obj);
      if (parent && last) delete parent[last];
    } else if (p.op === 'inc') {
      const cur = Number(get(obj, p.key)) || 0;
      set(obj, p.key, cur + Number(p.value || 0));
    } else if (p.op === 'push') {
      const cur = get(obj, p.key);
      const arr = Array.isArray(cur) ? cur : [];
      arr.push(p.value);
      set(obj, p.key, arr);
    } else if (p.op === 'merge') {
      const cur = get(obj, p.key);
      const base = cur && typeof cur === 'object' ? cur : {};
      set(obj, p.key, { ...base, ...(p.value || {}) });
    }
  }
}

// ─────────────────────────────────────────────────────────────
// Inventory normalization hooks (you already have equivalents)
// ─────────────────────────────────────────────────────────────

async function ensureItemByKey(ctx: RouterContext, itemKey: string, name?: string) {
  const Item = (ctx.app as any)?.model?.Item;
  if (!Item) return null;

  const found = await Item.findOne?.({ key: itemKey })?.exec?.();
  if (found) return found;

  try {
    const res = await Item.findOneAndUpdate?.(
      { key: itemKey },
      {
        $setOnInsert: {
          key: itemKey,
          name: name || itemKey,
          status: 'Active',
          meta: { name: name || itemKey },
        },
      },
      { new: true, upsert: true }
    )?.exec?.();

    return res || (await Item.findOne?.({ key: itemKey })?.exec?.());
  } catch {
    return null;
  }
}

/**
 * Normalizes inventory patch ops:
 * push inventory.0.items { itemKey, quantity? } -> repeated push { itemId, ... }
 */
export async function normalizeInventoryPatch(ctx: RouterContext, patch: PatchOp[]) {
  const out: PatchOp[] = [];

  for (const p of patch) {
    if (p.op === 'push' && (p.key === 'inventory.0.items' || p.key.startsWith('inventory.0.items'))) {
      const v = (p as any).value || {};

      // already normalized
      if (v.itemId) {
        const q = Math.max(1, Number(v.quantity ?? 1));
        for (let i = 0; i < q; i++) {
          out.push({
            op: 'push',
            key: p.key,
            value: { itemId: v.itemId, x: v.x ?? 1, y: v.y ?? 1, meta: v.meta ?? undefined },
          });
        }
        continue;
      }

      if (v.itemKey) {
        const itemKey = String(v.itemKey);
        const item = await ensureItemByKey(ctx, itemKey, itemKey);
        const q = Math.max(1, Number(v.quantity ?? 1));

        if (item?._id) {
          for (let i = 0; i < q; i++) {
            out.push({
              op: 'push',
              key: p.key,
              value: { itemId: item._id, x: v.x ?? 1, y: v.y ?? 1, meta: v.meta ?? undefined },
            });
          }
        } else {
          // fallback keep itemKey
          for (let i = 0; i < q; i++) {
            out.push({
              op: 'push',
              key: p.key,
              value: { itemKey, x: v.x ?? 1, y: v.y ?? 1, meta: v.meta ?? undefined },
            });
          }
        }

        continue;
      }
    }

    out.push(p);
  }

  return out;
}

// ─────────────────────────────────────────────────────────────
// Mail + Claim abstraction
// ─────────────────────────────────────────────────────────────

type MailKind = 'mail' | 'system' | 'support' | 'dm' | 'group';

export type MailReward = { type: 'item' | 'token' | 'reward'; id: string; quantity?: number; meta?: any };
export type MailEffect = {
  type: 'stat' | 'flag' | 'buff' | 'debuff' | 'effect';
  key?: string;
  delta?: number;
  value?: any;
  label?: string;
};

export type MailPatchMessagePayload = {
  kind: 'patch-grant';
  source: string; // "trek.choice" | "evolution.round" etc
  title?: string;
  body?: string;

  // ✅ claimable patches applied ONLY WHEN CLAIMED
  patches: EntityPatch[];

  // Optional UI hints (client can render tiles without decoding patches)
  ui?: {
    rewards?: Array<MailReward>;
    effects?: Array<MailEffect>;
  };
};

export type ApplyPatchesResult = {
  appliedNow: EntityPatch[];
  mailed: {
    conversationId: string;
    messageId: string;
  } | null;
};

export async function ensureMailConversation(params: {
  ctx: RouterContext;
  profileId: string;
  kind?: MailKind;
  conversationKey: string; // REQUIRED
  title?: string;
  category?: string;
  importance?: number;
}) {
  const { ctx, profileId, kind = 'mail', conversationKey, title, category, importance } = params;

  const mongoose = (ctx.app as any).db?.mongoose ?? (ctx.app as any).mongoose;
  const Conversation = (ctx.app as any).model.Conversation;

  const profileObjId = (() => {
    try {
      return new mongoose.Types.ObjectId(profileId);
    } catch {
      return profileId;
    }
  })();

  // ✅ first try find
  let convo =
    (await Conversation.findOne?.({
      kind,
      key: conversationKey,
      $or: [{ profileId: profileObjId }, { 'participants.profileId': profileObjId }],
      status: { $ne: 'Archived' },
    })?.exec?.()) ?? null;

  if (convo) return convo;

  // ✅ upsert to avoid races
  const updated =
    (await Conversation.findOneAndUpdate?.(
      {
        kind,
        key: conversationKey,
        profileId: profileObjId,
        status: { $ne: 'Archived' },
      },
      {
        $setOnInsert: {
          profileId: profileObjId,
          kind,
          key: conversationKey,
          isLocked: true,
          allowUserSend: false,
          participants: [{ profileId: profileObjId, role: 'user', unreadCount: 0, lastReadDate: new Date(0) }],
          title: title ?? 'Mailbox',
          category: category ?? 'system',
          importance: Number(importance ?? 0),
          lastMessageDate: null,
          lastMessagePreview: '',
          messageCount: 0,
          messages: [],
          status: 'Active',
        },
      },
      { new: true, upsert: true }
    )?.exec?.()) ?? null;

  if (updated) return updated;

  // fallback read
  return await Conversation.findOne?.({ kind, conversationKey, profileId: profileObjId })?.exec?.();
}

function splitClaimable(patches: EntityPatch[]) {
  const claimable: EntityPatch[] = [];
  const immediate: EntityPatch[] = [];

  for (const p of patches || []) {
    if (!p?.entityType || !Array.isArray(p.ops)) continue;
    if (p.claimable) claimable.push(p);
    else immediate.push(p);
  }

  return { claimable, immediate };
}

/**
 * ✅ Applies NON-claimable patches immediately.
 * ✅ Mails ALL claimable patches into ConversationMessage.claim flow.
 *
 * This is now your single “central write gateway” for Trek + Evolution.
 */
export async function applyPatchesWithInventoryViaMail(params: {
  ctx: RouterContext;
  profile: any; // mongoose doc
  character?: any; // mongoose doc (optional if not needed)
  patches: EntityPatch[];
  mail: {
    profileId: string;
    kind?: MailKind;
    conversationKey: string; // ✅ REQUIRED NOW
    source: string;
    title?: string;
    body?: string;
    category?: string; // optional, only used on create
    importance?: number; // optional, only used on create
    ui?: MailPatchMessagePayload['ui'];
    dedupeKey?: string;
  };
}): Promise<ApplyPatchesResult> {
  const { ctx, profile, character, patches, mail } = params;

  const { claimable, immediate } = splitClaimable(patches);

  // 1) Apply immediate patches now
  for (const patch of immediate) {
    if (patch.entityType === 'profile.meta') {
      if (!profile.meta) profile.meta = {};
      applyPatchToObject(profile.meta, patch.ops);
      profile.markModified?.('meta');
    } else if (patch.entityType === 'character.data') {
      if (!character) continue;
      if (!character.data) character.data = {};
      applyPatchToObject(character.data, patch.ops);
      character.markModified?.('data');
    } else if (patch.entityType === 'character.inventory') {
      // If you ever want “inventory immediate”, just set claimable=false on those patches.
      if (!character) continue;
      if (!Array.isArray(character.inventory)) character.inventory = [];
      if (!character.inventory[0]) character.inventory[0] = { items: [] };
      const normalized = await normalizeInventoryPatch(ctx, patch.ops);
      applyPatchToObject(character, normalized);
      character.markModified?.('inventory');
    } else {
      throw new Error(`applyPatchesWithInventoryViaMail: unsupported entityType=${patch.entityType}`);
    }
  }

  // 2) If no claimable patches, done
  if (!claimable.length) return { appliedNow: immediate, mailed: null };

  // 3) Find/create inbox + create message with claim payload (deduped)
  const convo = await ensureMailConversation({
    ctx,
    profileId: mail.profileId,
    kind: mail.kind ?? 'mail',
    conversationKey: mail.conversationKey,
    title: mail.title ? 'Mailbox' : 'Mailbox', // keep your existing or pass something else
    category: mail.category ?? 'system',
    importance: mail.importance ?? 0,
  });

  const ConversationMessage = (ctx.app as any).model.ConversationMessage;
  const Conversation = (ctx.app as any).model.Conversation;

  const dedupeKey = mail.dedupeKey ?? null;

  // ✅ Dedupe: if message with dedupeKey already exists, don't create another
  if (dedupeKey) {
    const existing = await ConversationMessage.findOne?.({
      conversationId: convo._id,
      'claim.dedupeKey': dedupeKey,
    })?.exec?.();

    if (existing) {
      return {
        appliedNow: immediate,
        mailed: { conversationId: String(convo._id), messageId: String(existing._id) },
      };
    }
  }

  const payload: MailPatchMessagePayload = {
    kind: 'patch-grant',
    source: mail.source,
    title: mail.title,
    body: mail.body,
    patches: claimable,
    ui: mail.ui,
  };

  const msg = await ConversationMessage.create?.({
    conversationId: convo._id,
    role: 'system',
    type: 'reward', // or 'system' depending on your UI; keep as-is for now
    content: mail.body ?? '',
    payload,
    claim: {
      isClaimable: true,
      claimedDate: null,
      claimedByProfileId: null,
      dedupeKey,
      attachments: [],
    },
  });

  // Update convo listing fields (best-effort)
  try {
    const preview = (mail.title ? `${mail.title} — ` : '') + (mail.body ?? '');
    await Conversation.updateOne?.(
      { _id: convo._id },
      {
        $set: {
          lastMessageDate: new Date(),
          lastMessagePreview: String(preview).slice(0, 140),
        },
        $inc: { messageCount: 1 },
        $push: { messages: msg._id }, // back-compat
      }
    )?.exec?.();
  } catch {
    // ignore
  }

  return { appliedNow: immediate, mailed: { conversationId: String(convo._id), messageId: String(msg._id) } };
}

/**
 * ✅ Central claim handler (applies ANY claimable patch types you support).
 *
 * Atomic claim lock + patch application.
 * Supports:
 * - profile.meta
 * - character.data
 * - character.inventory (normalized)
 */
export async function claimMailMessage(params: {
  ctx: RouterContext;
  profile: any; // mongoose doc (required for profile.meta claim patches)
  character?: any; // mongoose doc (required if claim touches character.*)
  messageId: string;
}): Promise<{ ok: true }> {
  const { ctx, profile, character, messageId } = params;

  const ConversationMessage = (ctx.app as any).model.ConversationMessage;

  // Atomic claim lock
  const msg = await ConversationMessage.findOneAndUpdate?.(
    {
      _id: messageId,
      'claim.isClaimable': true,
      'claim.claimedDate': null,
      'claim.claimedByProfileId': null,
    },
    {
      $set: {
        'claim.claimedDate': new Date(),
        'claim.claimedByProfileId': String(profile._id),
      },
    },
    { new: true }
  )?.exec?.();

  if (!msg) {
    const err: any = new Error('Already claimed or not claimable');
    err.code = 'ALREADY_CLAIMED';
    throw err;
  }

  const payload = msg.payload as MailPatchMessagePayload | undefined;
  if (!payload || payload.kind !== 'patch-grant' || !Array.isArray(payload.patches)) return { ok: true };

  let touchedProfileMeta = false;
  let touchedCharacterData = false;
  let touchedCharacterInventory = false;

  for (const patch of payload.patches) {
    if (!patch?.entityType || !Array.isArray(patch.ops)) continue;

    if (patch.entityType === 'profile.meta') {
      if (!profile.meta) profile.meta = {};
      applyPatchToObject(profile.meta, patch.ops);
      touchedProfileMeta = true;
      continue;
    }

    if (patch.entityType === 'character.data') {
      if (!character) throw new Error('No character loaded for character.data claim');
      if (!character.data) character.data = {};
      applyPatchToObject(character.data, patch.ops);
      touchedCharacterData = true;
      continue;
    }

    if (patch.entityType === 'character.inventory') {
      if (!character) throw new Error('No character loaded for inventory claim');

      if (!Array.isArray(character.inventory)) character.inventory = [];
      if (!character.inventory[0]) character.inventory[0] = { items: [] };

      const normalized = await normalizeInventoryPatch(ctx, patch.ops);
      applyPatchToObject(character, normalized);
      touchedCharacterInventory = true;
      continue;
    }

    // If you truly want "any string", add a registry here.
    throw new Error(`claimMailMessage: unsupported entityType=${patch.entityType}`);
  }

  if (touchedProfileMeta) profile.markModified?.('meta');
  if (touchedCharacterData) character?.markModified?.('data');
  if (touchedCharacterInventory) character?.markModified?.('inventory');

  await profile.save?.();
  if (character && (touchedCharacterData || touchedCharacterInventory)) {
    await character.save?.();
  }

  return { ok: true };
}
