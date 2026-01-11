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
// Inventory normalization hooks
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
// Generic sync emission (NO wrappers)
// ─────────────────────────────────────────────────────────────

type InventorySyncOp =
  | { op: 'add'; itemKey: string; quantity?: number }
  | { op: 'remove'; itemKey: string; quantity?: number };

function inventoryOpsFromPatchOps(patchOps: any[]): InventorySyncOp[] {
  const ops: InventorySyncOp[] = [];
  const list = Array.isArray(patchOps) ? patchOps : [];

  for (const op of list) {
    const key = String(op?.key || '');
    const isInvItems =
      key === 'inventory.0.items' ||
      key.startsWith('inventory.0.items') ||
      // allow future bags without rewriting
      key.includes('.items');

    if (!isInvItems) continue;

    if (op?.op === 'push') {
      const v = op?.value || {};
      const itemKey = v?.itemKey ?? v?.itemId;
      if (!itemKey) continue;
      const qty = Number(v?.quantity ?? 1);
      ops.push({ op: 'add', itemKey: String(itemKey), quantity: Number.isFinite(qty) ? qty : 1 });
      continue;
    }

    if (op?.op === 'pull') {
      const v = op?.value || {};
      const itemKey = v?.itemKey ?? v?.itemId;
      if (!itemKey) continue;
      const qty = Number(v?.quantity ?? 1);
      ops.push({ op: 'remove', itemKey: String(itemKey), quantity: Number.isFinite(qty) ? qty : 1 });
      continue;
    }
  }

  return ops;
}

function inventoryOpsFromEntityPatches(
  patches: EntityPatch[] | undefined
): Array<{ characterId: string; ops: InventorySyncOp[] }> {
  const out: Array<{ characterId: string; ops: InventorySyncOp[] }> = [];
  for (const ep of patches || []) {
    if (ep?.entityType !== 'character.inventory') continue;
    const characterId = String(ep?.entityId || '');
    if (!characterId) continue;

    const ops = inventoryOpsFromPatchOps((ep as any)?.ops || []);
    if (ops.length) out.push({ characterId, ops });
  }
  return out;
}

async function emitSyncPatch(ctx: RouterContext, input: { target: string; patch: any; reason?: string }) {
  try {
    await (ctx.client as any)?.emit?.sync?.mutate?.({
      kind: 'patch',
      target: input.target,
      patch: input.patch,
      reason: input.reason,
    });
  } catch (e) {
    // never crash gameplay because push failed
    console.warn('[applyPatchesOrMail] emit.sync failed', e);
  }
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
  source: string;
  title?: string;
  body?: string;

  patches: EntityPatch[];

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
  conversationKey: string;
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

  let convo =
    (await Conversation.findOne?.({
      kind,
      key: conversationKey,
      $or: [{ profileId: profileObjId }, { 'participants.profileId': profileObjId }],
      status: { $ne: 'Archived' },
    })?.exec?.()) ?? null;

  if (convo) return convo;

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
          name: title ?? 'System',
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

  return await Conversation.findOne?.({ kind, conversationKey, profileId: profileObjId })?.exec?.();
}

function splitClaimable(patches: EntityPatch[]) {
  const claimable: EntityPatch[] = [];
  const immediate: EntityPatch[] = [];

  for (const p of patches || []) {
    if (!p?.entityType || !Array.isArray(p.ops)) continue;
    if ((p as any).claimable) claimable.push(p);
    else immediate.push(p);
  }

  return { claimable, immediate };
}

/**
 * ✅ Applies NON-claimable patches immediately.
 * ✅ Mails ALL claimable patches.
 * ✅ Emits generic sync.patch for any immediate inventory change.
 */
export async function applyPatchesWithInventoryViaMail(params: {
  ctx: RouterContext;
  profile: any;
  character?: any;
  patches: EntityPatch[];
  mail: {
    profileId: string;
    kind?: MailKind;
    conversationKey: string;
    source: string;
    title?: string;
    body?: string;
    category?: string;
    importance?: number;
    ui?: MailPatchMessagePayload['ui'];
    dedupeKey?: string;
  };
}): Promise<ApplyPatchesResult> {
  const { ctx, profile, character, patches, mail } = params;

  const { claimable, immediate } = splitClaimable(patches);

  // Track inventory changes applied immediately
  const immediateInventorySync = inventoryOpsFromEntityPatches(immediate);

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

  // persist immediate effects
  await profile.save?.();
  if (character && immediate.some((p) => p.entityType?.startsWith('character.'))) {
    await character.save?.();
  }

  // ✅ emit sync for immediate inventory changes
  for (const hit of immediateInventorySync) {
    await emitSyncPatch(ctx, {
      target: 'character.inventory',
      patch: {
        characterId: hit.characterId,
        ops: hit.ops, // already reduced, generic
        mode: 'patch',
        source: mail.source,
        reason: 'immediate',
      },
      reason: 'immediate',
    });
  }

  // 2) If no claimable patches, done
  if (!claimable.length) return { appliedNow: immediate, mailed: null };

  // 3) Find/create inbox + create message with claim payload (deduped)
  const convo = await ensureMailConversation({
    ctx,
    profileId: mail.profileId,
    kind: mail.kind ?? 'mail',
    conversationKey: mail.conversationKey,
    title: 'System',
    category: mail.category ?? 'system',
    importance: mail.importance ?? 0,
  });

  const ConversationMessage = (ctx.app as any).model.ConversationMessage;
  const Conversation = (ctx.app as any).model.Conversation;

  const dedupeKey = mail.dedupeKey ?? null;

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
    type: 'reward',
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
        $push: { messages: msg._id },
      }
    )?.exec?.();
  } catch {
    // ignore
  }

  return { appliedNow: immediate, mailed: { conversationId: String(convo._id), messageId: String(msg._id) } };
}

/**
 * ✅ Central claim handler
 * ✅ Emits generic sync.patch for any claimed inventory changes.
 */
export async function claimMailMessage(params: {
  ctx: RouterContext;
  profile: any;
  character?: any;
  messageId: string;
}): Promise<{ ok: true }> {
  const { ctx, profile, character, messageId } = params;

  const ConversationMessage = (ctx.app as any).model.ConversationMessage;

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

  // collect inventory sync intents BEFORE normalization mutates anything
  const claimedInventorySync = inventoryOpsFromEntityPatches(payload.patches);

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

    throw new Error(`claimMailMessage: unsupported entityType=${patch.entityType}`);
  }

  if (touchedProfileMeta) profile.markModified?.('meta');
  if (touchedCharacterData) character?.markModified?.('data');
  if (touchedCharacterInventory) character?.markModified?.('inventory');

  await profile.save?.();
  if (character && (touchedCharacterData || touchedCharacterInventory)) {
    await character.save?.();
  }

  // ✅ emit sync for claimed inventory changes
  for (const hit of claimedInventorySync) {
    await ctx.client.emit.sync.mutate({
      kind: 'patch',
      target: 'character.inventory',
      patch: {
        characterId: hit.characterId,
        ops: hit.ops,
        mode: 'patch',
        source: payload.source || 'mail.claim',
        reason: 'claim',
      },
      reason: 'claim',
    });
  }

  return { ok: true };
}
