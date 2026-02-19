# arken/packages/node/legacy/data/ANALYSIS.md

## Folder purpose
Legacy game-data integration layer that maps generated datasets and rule constants into runtime-friendly structures for gameplay/economy systems.

## Key files and responsibilities
- `index.ts`: exports core generated catalogs (areas, eras, acts, NPCs, items, planets, factions, classes).
- `items.ts`: large legacy item/rune/skill dictionary surface; includes seasonal gating logic (`getFilteredItems`) and many gameplay enums/ID maps.
- `achievements.ts`: static achievement definitions and display metadata.
- `restrictList.ts`: deny/restrict lists for tokens and wallet addresses (trade/evolution access controls).
- `probabilityCache.ts`: precomputed probability lookup tables used by legacy balancing/economy logic.
- `items.type.ts`: type definitions for item category organization.
- `generated/`: source JSON catalogs consumed by this layer.

## Architectural context (omniverse platform)
This folder is a content/rules adapter for legacy gameplay loops. In a broader omniverse architecture, this should evolve toward a typed content service with explicit versioning and migration paths, because storefront/liveops systems depend on deterministic and auditable item/economy behavior.

## Risks / gaps
- `items.ts` is monolithic and mixes constants, business rules, and normalization logic.
- Heavy untyped object maps and dynamic key assignment reduce safety.
- Restriction lists in code are operationally risky vs. centrally managed policy/config.
- Probability cache is opaque without provenance/tests.

## Follow-ups
- Split `items.ts` into modular domains: IDs, rarity/types, seasonal rules, skill maps.
- Add tests around `getFilteredItems` for event-window correctness/timezone behavior.
- Add integrity tests for `restrictList` formatting and duplicate wallet/token entries.
- Add provenance docs/tests for `probabilityCache` generation assumptions.
