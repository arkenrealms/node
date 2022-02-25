import { itemData, ItemAttributes, ItemAttributesById, ItemType, ItemRarity, ItemRarityNameById } from '../data/items'
import { ItemsMainCategoriesType } from '../data/items.type'

const average = (arr: any) => arr.reduce((p: any, c: any) => p + c, 0) / arr.length

export function decodeItem(tokenId: any) {
  return normalizeItem(getItemFromTokenId(tokenId))
}

export function getItemFromTokenId(tokenId: any) {
  const defaultItem = {
    tokenId,
    details: {},
    branches: {},
    shorthand: [],
    mods: [],
    attributes: [],
    perfection: null,
    category: ItemsMainCategoriesType.WEAPONS,
    slots: [],
    meta: {
      harvestYield: 0,
      harvestFeeToken: '',
      harvestFeePercent: 0,
      harvestFees: {},
      chanceToSendHarvestToHiddenPool: 0,
      chanceToLoseHarvest: 0,
      harvestBurn: 0,
    },
  }

  if (!tokenId || parseInt(tokenId) === 0 || Number.isNaN(parseInt(tokenId))) return defaultItem

  try {
    const version = parseInt(tokenId.slice(1, 4))
    const id = parseInt(tokenId.slice(4, 9))

    let type = 0
    let modStart = 9

    if (version === 1) {
      modStart = 9
    } else {
      type = parseInt(tokenId.slice(9, 11))
      modStart = 11
    }

    const mods = []

    let modIndex = modStart
    while (modIndex < tokenId.length) {
      const variant = parseInt(tokenId.slice(modIndex, modIndex + 1))

      if (variant === 2) {
        const attributeId = parseInt(tokenId.slice(modIndex + 1, modIndex + 4))
        const value = parseInt(tokenId.slice(modIndex + 4, modIndex + 7))

        if (Number.isNaN(value)) break

        mods.push({
          variant,
          attributeId,
          value,
        })

        modIndex += 7
      } else {
        const value = parseInt(tokenId.slice(modIndex + 1, modIndex + 4))

        if (Number.isNaN(value)) break

        mods.push({
          variant,
          value,
        })

        modIndex += 4
      }
    }

    const item: any = {
      ...defaultItem,
      id,
      // @ts-ignore
      ...JSON.parse(JSON.stringify(itemData[ItemsMainCategoriesType.OTHER].find((i: any) => i.id === id))),
      type,
      version,
      mods,
      tokenId,
      shortTokenId: `${tokenId.slice(0, 23)}...${tokenId.slice(-3)}`,
    }

    return item
  } catch (e) {
    // console.log('Token is invalid', tokenId)
    console.log(e)
  }

  return defaultItem
}

export function normalizeItem(item: any) {
  try {
    const branch = item.branches[1]
    const branchAttributes = branch ? JSON.parse(JSON.stringify(branch.attributes)) : []

    const actionMetadata: any = {
      harvestYield: 0,
      pending: 0,
      bonus: 0,
      harvestBurn: 0,
      chanceToSendHarvestToHiddenPool: 0,
      chanceToLoseHarvest: 0,
      guildId: null,
      characterId: null,
      itemIndex: 0,
      itemLength: 0,
      modIndex: 0,
      modLength: 0,
      rand: 0,
      removeFees: 0,
      freezeFees: 0,
      magicFind: 0,
      unableUseRuneword: null,
      currentRewardToken: null,
      hasEarlyUnstakeLocked: null,
      hasEarlyUnstakeNoReward: null,
      hiddenPoolPid: null,
      swapToken: null,
      swapAmount: null,
      feeToken: null,
      feeAmount: null,
      feeReduction: 0,
      unstakeLocked: false,
      classRequired: 0,
      harvestFeeToken: '',
      harvestFeePercent: 0,
      worldstoneShardChance: 0,
      randomRuneExchange: 0,
      harvestFees: {},
    }

    item.attributes = branchAttributes

    let prevMod = null

    if (item.id === 1) {
      item.mods[0].attributeId = ItemAttributes.HarvestYield.id
      item.mods[1].attributeId = ItemAttributes.HarvestFee.id
      item.mods[2].attributeId = ItemAttributes.HarvestFeeToken.id
    } else if (item.id === 2) {
      item.mods[0].attributeId = ItemAttributes.HarvestYield.id
      item.mods[1].attributeId = ItemAttributes.SendHarvestHiddenPool.id
      item.mods[2].attributeId = ItemAttributes.BurnEntireHarvest.id
    } else if (item.id === 3) {
      item.mods[0].attributeId = ItemAttributes.HarvestYield.id
      item.mods[1].attributeId = ItemAttributes.HarvestBurn.id
      item.mods[2].attributeId = ItemAttributes.FindShard.id
      delete item.mods[3]
      delete item.mods[4]
      delete item.mods[5]
      delete item.mods[6]

      if (item.mods[2].value === 0) item.mods[2].value = 100
    } else if (item.id === 4) {
      item.mods[0].attributeId = ItemAttributes.FindShard.id

      if (item.mods[0].value === 0) item.mods[0].value = 100
    }

    for (const i in item.mods) {
      const mod = item.mods[i]
      const branchAttribute = branchAttributes[i]

      if (branchAttribute !== undefined && branchAttribute.value === undefined) {
        if (branchAttribute.min === branchAttribute.max) {
          branchAttribute.value = branchAttribute.min
        }
      }

      if (mod.attributeId === ItemAttributes.HarvestYield.id) {
        actionMetadata.harvestYield += mod.value

        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      } else if (mod.attributeId === ItemAttributes.HarvestFee.id) {
        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      } else if (mod.attributeId === ItemAttributes.HarvestFeeToken.id) {
        actionMetadata.harvestFees[branchAttribute.map[mod.value]] = prevMod.value

        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      } else if (mod.attributeId === ItemAttributes.SendHarvestHiddenPool.id) {
        actionMetadata.chanceToSendHarvestToHiddenPool += mod.value

        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      } else if (mod.attributeId === ItemAttributes.BurnEntireHarvest.id) {
        actionMetadata.chanceToLoseHarvest += mod.value

        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      } else if (mod.attributeId === ItemAttributes.HarvestBurn.id) {
        actionMetadata.harvestBurn += mod.value

        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      } else if (mod.attributeId === ItemAttributes.FindShard.id) {
        if (branchAttribute.value !== undefined) mod.value = branchAttribute.value

        actionMetadata.worldstoneShardChance += mod.value

        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      } else if (mod.attributeId === ItemAttributes.RemoveFees.id) {
        actionMetadata.feeReduction += mod.value

        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      } else if (mod.attributeId === ItemAttributes.RandomRuneExchange.id) {
        actionMetadata.randomRuneExchange += mod.value

        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      } else if (mod.attributeId === ItemAttributes.UnstakeLocked.id) {
        actionMetadata.unstakeLocked = true

        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      } else if (mod.attributeId === ItemAttributes.SpecificClass.id) {
        actionMetadata.classRequired = mod.value

        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      } else if (mod.attributeId === ItemAttributes.Rarity.id) {
        item.rarity = ItemRarity[ItemRarityNameById[mod.value]]

        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      } else if (mod.attributeId > 0 && ItemAttributesById[mod.attributeId]) {
        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      }

      if (item.attributes[i]) {
        item.branches[1].attributes[i] = item.attributes[i]
      }

      prevMod = mod
    }

    if (actionMetadata.harvestYield) {
      item.meta.harvestYield = actionMetadata.harvestYield
    }
    if (Object.keys(actionMetadata.harvestFees).length > 0) {
      item.meta.harvestFees = actionMetadata.harvestFees
      item.meta.harvestFeeToken = Object.keys(actionMetadata.harvestFees)[0]
      item.meta.harvestFeePercent = actionMetadata.harvestFees[Object.keys(actionMetadata.harvestFees)[0]]
    }
    if (actionMetadata.chanceToSendHarvestToHiddenPool) {
      item.meta.chanceToSendHarvestToHiddenPool += actionMetadata.chanceToSendHarvestToHiddenPool
    }
    if (actionMetadata.chanceToLoseHarvest) {
      item.meta.chanceToLoseHarvest += actionMetadata.chanceToLoseHarvest
    }
    if (actionMetadata.harvestBurn) {
      item.meta.harvestBurn = actionMetadata.harvestBurn
    }
    if (actionMetadata.feeReduction) {
      item.meta.feeReduction = actionMetadata.feeReduction
    }
    if (actionMetadata.randomRuneExchange) {
      item.meta.randomRuneExchange = actionMetadata.randomRuneExchange
    }
    if (actionMetadata.worldstoneShardChance) {
      item.meta.worldstoneShardChance = actionMetadata.worldstoneShardChance
    }
    if (actionMetadata.unstakeLocked) {
      item.meta.unstakeLocked = actionMetadata.unstakeLocked
    }
    if (actionMetadata.classRequired) {
      item.meta.classRequired = actionMetadata.classRequired
    }

    if (branch && branch.perfection) {
      const perfection = [ ...branch.perfection ]
      const attributes = branch.attributes

      // if (item.tokenId === '1001000041000100015647') {
      //   console.log(perfection)
      //   console.log(item.attributes)
      //   console.log(branch.attributes)
      // }

      if (perfection.length) {
        const shorthand = []

        for (let i = 0; i < perfection.length; i++) {
          if (perfection[i] === undefined || perfection[i] === null || !attributes[i]) {
            perfection[i] = undefined
            continue
          }

          perfection[i] =
            perfection[i] === attributes[i].max
              ? perfection[i] - attributes[i].min === 0
                ? 1
                : (attributes[i].value - attributes[i].min) / (perfection[i] - attributes[i].min)
              : attributes[i].max - perfection[i] === 0
              ? 1
              : 1 - (attributes[i].value - perfection[i]) / (attributes[i].max - perfection[i])
        }

        item.perfection = average(perfection.filter((p) => p !== undefined && p !== null))

        // if (item.tokenId === '1001000041000100015647') {
        //   console.log(perfection, branch.attributes[0].max, perfection[0], 1)
        // }

        if (Number.isFinite(item.perfection) && item.perfection <= 1) {
          item.perfection = parseFloat((Math.floor(item.perfection * 100) / 100).toFixed(2))

          if (item.perfection < 0) {
            item.perfection = 0
          }
        } else {
          item.perfection = null
        }
      } else {
        item.perfection = null
      }
    }

    if (!item.meta) {
      item.meta = {
        harvestYield: 0,
        harvestFeeToken: '',
        harvestFeePercent: 0,
        harvestFees: {},
        chanceToSendHarvestToHiddenPool: 0,
        chanceToLoseHarvest: 0,
        harvestBurn: 0,
      }
    }
    // if (item.rarity && item.branches[1]?.presets) {
    //   for (const attributeIndex in item.attributes) {
    //     item.attributes[attributeIndex].value = item.branches[1].presets[item.rarity.id][attributeIndex]
    //   }
    // }

    // Normalize rarity based on perfection
    if (!item.rarity) {
      if (item.attributes.find((a) => a.id === 40)?.value) {
        item.rarity = ItemRarityNameById[item.attributes.find((a) => a.id === 40)?.value || 5]
      } else if (item.perfection === 1) {
        item.rarity = ItemRarity.Mythic
      } else if (item.perfection >= 0.9) {
        item.rarity = ItemRarity.Epic
      } else if (item.perfection >= 0.7) {
        item.rarity = ItemRarity.Rare
      } else if (item.perfection >= 0) {
        item.rarity = ItemRarity.Magical
      }
    }

    // Normalize perfection basd on rarity
    if (item.rarity && item.perfection === null) {
      if (item.rarity.id === ItemRarity.Mythic) {
        item.perfection = 1
      } else if (item.rarity.id === ItemRarity.Epic) {
        item.perfection = 0.9
      } else if (item.rarity.id === ItemRarity.Rare) {
        item.perfection = 0.7
      } else if (item.rarity.id === ItemRarity.Magical) {
        item.perfection = 0.35
      } else {
        item.perfection = 1
      }
    }

    // Set .value if .min and .max are same
    for (const bIndex of Object.keys(item.branches)) {
      const branchIndex = Number(bIndex)

      for (const attributeIndex in item.branches[branchIndex].attributes) {
        if (item.branches[branchIndex].attributes[attributeIndex].value === undefined) {
          if (item.branches[branchIndex].attributes[attributeIndex].min === item.branches[branchIndex].attributes[attributeIndex].max) {
            item.branches[branchIndex].attributes[attributeIndex].value = item.branches[branchIndex].attributes[attributeIndex].min

            if (branchIndex === 1) {
              item.attributes[attributeIndex].value = item.branches[branchIndex].attributes[attributeIndex].min
            }
          }
        }
      }
    }

    // Set preset and attribute values based on rarity
    for (const bIndex of Object.keys(item.branches)) {
      const branchIndex = Number(bIndex)
      if (!item.branches[branchIndex].attributes) continue

      const presents = item.branches[branchIndex].presents
      if (!presents) {
        const perf = item.branches[branchIndex].perfection
        const attrs = item.branches[branchIndex].attributes

        // TODO: figure out if attribute min or max is best and push that into array of perfs (requires spec)
        // if (!perf) {
        //   perf = []

        //   for (const pp in item.branches[branchIndex].attributes) {
        //     perf.push(item.perfection)
        //   }
        // }

        item.branches[branchIndex].presents = {
          [ItemRarity.Magical.id]: [],
          [ItemRarity.Rare.id]: [],
          [ItemRarity.Epic.id]: [],
          [ItemRarity.Mythic.id]: [],
          [ItemRarity.Unique.id]: [],
        }

        for (const pIndex in perf) {
          if (perf[pIndex] === undefined || perf[pIndex] === null) continue

          item.branches[branchIndex].presents[ItemRarity.Magical.id][pIndex] = Math.floor(perf[pIndex] === attrs[pIndex].max ? (attrs[pIndex].max - attrs[pIndex].min) * 0.2 + attrs[pIndex].min : attrs[pIndex].max - ((attrs[pIndex].max - attrs[pIndex].min) * 0.2))
          item.branches[branchIndex].presents[ItemRarity.Rare.id][pIndex] = Math.floor(perf[pIndex] === attrs[pIndex].max ? (attrs[pIndex].max - attrs[pIndex].min) * 0.7 + attrs[pIndex].min : attrs[pIndex].max - ((attrs[pIndex].max - attrs[pIndex].min) * 0.7))
          item.branches[branchIndex].presents[ItemRarity.Epic.id][pIndex] = Math.floor(perf[pIndex] === attrs[pIndex].max ? (attrs[pIndex].max - attrs[pIndex].min) * 0.95 + attrs[pIndex].min : attrs[pIndex].max - ((attrs[pIndex].max - attrs[pIndex].min) * 0.95))
          item.branches[branchIndex].presents[ItemRarity.Mythic.id][pIndex] = perf[pIndex]
          item.branches[branchIndex].presents[ItemRarity.Unique.id][pIndex] = perf[pIndex]
        }
      }

      if (item.rarity) {
        for (const b2Index of Object.keys(item.branches)) {
          const branch2Index = Number(b2Index)

          if (!item.branches[branch2Index].presents?.[item.rarity.id]) continue
          
          for (const presetIndex in item.branches[branch2Index].presents[item.rarity.id]) {
            const preset = item.branches[branch2Index].presents[item.rarity.id][presetIndex]

            if (item.branches[branch2Index].attributes[presetIndex].value !== undefined) continue

            item.branches[branch2Index].attributes[presetIndex].value = preset

            if (branch2Index === 1) {
              item.attributes[presetIndex].value = preset
            }
          }
        }
      }
    }

    // Normalize main branch map attribute values
    if (branch.perfection) {
      for (const attributeIndex in branch.attributes) {
        const attribute = branch.attributes[attributeIndex]
        const perfection = branch.perfection[attributeIndex]
  
        if (perfection === undefined || perfection == null) {
          if (attribute.value === undefined && attribute.map) {
            attribute.value = attribute.min
            item.attributes[attributeIndex] = attribute
          }
        }
      }
    }

    // Normalize branch values and perfection
    for (const bIndex of Object.keys(item.branches)) {
      const branchIndex = Number(bIndex)
      if (branchIndex === 1) {
        continue
      }
      if (!item.branches[branchIndex].attributes) continue

      for (const attributeIndex in item.attributes) {
        if (
          !item.branches[1] ||
          !item.branches[1].perfection ||
          !item.branches[1].attributes ||
          !item.branches[branchIndex] ||
          !item.branches[branchIndex].attributes[attributeIndex]
        ) {
          break
        }

        if (item.branches[branchIndex].attributes[attributeIndex].value !== undefined) {
          continue
        }

        const originalAttributePerfection = item.branches[1].perfection[attributeIndex]
          ? item.branches[1].perfection[attributeIndex]
          : item.perfection

        const attributePerfection =
          originalAttributePerfection === item.attributes[attributeIndex].max
            ? originalAttributePerfection - item.attributes[attributeIndex].min === 0
              ? 1
              : (item.attributes[attributeIndex].value - item.attributes[attributeIndex].min) /
                (originalAttributePerfection - item.attributes[attributeIndex].min)
            : item.attributes[attributeIndex].max - originalAttributePerfection === 0
            ? 1
            : 1 -
              (item.attributes[attributeIndex].value - originalAttributePerfection) /
                (item.attributes[attributeIndex].max - originalAttributePerfection)
        
        if (!item.branches[branchIndex].perfection) {
          item.branches[branchIndex].perfection = []
        }
        if (item.branches[branchIndex].perfection[attributeIndex] === undefined) {
          item.branches[branchIndex].perfection[attributeIndex] = attributePerfection
        }

        if (item.branches[branchIndex].attributes[attributeIndex].map) {
          const kindofClose = Math.floor(
            (item.branches[branchIndex].attributes[attributeIndex].max -
              item.branches[branchIndex].attributes[attributeIndex].min) *
              attributePerfection,
          )
          const closestKey = Object.keys(item.branches[branchIndex].attributes[attributeIndex].map).sort((a, b) => {
            return Math.abs(kindofClose - Number(a)) - Math.abs(kindofClose - Number(b))
          })[0]

          item.branches[branchIndex].attributes[attributeIndex].value = closestKey
        } else {
          const alignedValue = Math.floor(
            (item.branches[branchIndex].attributes[attributeIndex].max -
              item.branches[branchIndex].attributes[attributeIndex].min) *
              attributePerfection,
          )
          item.branches[branchIndex].attributes[attributeIndex].value =
            item.branches[branchIndex].attributes[attributeIndex].min + alignedValue
        }
      }
    }

    // Normalize shorthand
    if (branch && branch.perfection) {
      const perfection = [ ...branch.perfection ]
      const attributes = branch.attributes

      if (perfection.length) {
        const shorthand = []

        for (let i = 0; i < perfection.length; i++) {
          if (perfection[i] === undefined || perfection[i] === null || !attributes[i]) {
            continue
          }

          shorthand.push(
            (attributes[i].map ? attributes[i].map[attributes[i].value] : attributes[i].value) + '',
          )
        }

        item.shorthand = shorthand.join('-')
      }
    }

    // Normalize odds
    if (item.meta && item.branches[1]) {
      let odds = 1

      for (const attributeIndex in item.branches[1].attributes) {
        const attribute = item.branches[1].attributes[attributeIndex]

        if (attribute.min === undefined || attribute.max === undefined) continue
        if (attribute.min === attribute.max) continue
        if (attribute.map) continue

        odds *= (attribute.max - attribute.min + 1)
      }

      if (odds > 1) {
        item.meta.odds = odds
      }
    }

    // Normalize perfection
    if (!item.perfection) {
      item.perfection = 1
    }

    if (!item.tokenId) {
      item.tokenId = getTokenIdFromItem(item)
    }

    if (item.tokenId === '100300014012001002201900120130012011001200200720030122039008202100600000875')
      item.perfection = -13
    if (item.tokenId === '100301201142040003200100520130200000000000000000000000000000000000000000001')
      item.branches[1].description[1] = '"So long, I barely knew thee."'
  } catch (e) {
    // console.log('Token is invalid', tokenId)
    console.log(e)
  }

  return item
}

function pad(n, width, z = '0') {
  const nn = n + ''
  return nn.length >= width ? nn : new Array(width - nn.length + 1).join(z) + nn
}

export function getTokenIdFromItem(item, rand = 1) {
  const version = 3

  let attrs = ''

  for (let i = 0; i < 8; i++) {
    const attribute = item.attributes[i]

    if (attribute && attribute?.id) {
      attrs += '2' + pad(attribute?.id || 0, 3) + pad(attribute?.value || 0, 3)
    } else {
      attrs += '0' + pad(attribute?.id || 0, 3) + pad(attribute?.value || 0, 3)
    }
  }

  attrs += pad(rand, 3)

  return `1${pad(version, 3)}${pad(item.id, 5)}${pad(item.type, 2)}${attrs}`
}
