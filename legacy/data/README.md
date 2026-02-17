# arken/packages/node/legacy/data

Legacy game-content adapter layer.

## Key files
- `index.ts`: re-exports generated catalogs for runtime use.
- `items.ts`: large item/rune/skill mappings and seasonal filtering logic.
- `achievements.ts`: static achievement metadata.
- `restrictList.ts`: hardcoded token/wallet restrictions.
- `probabilityCache.ts`: precomputed probability lookup data.
- `generated/`: baked JSON catalogs consumed by this layer.

## Notes
This folder is high-coupling and partially untyped; prefer small, well-documented changes and add guard tests for behavior-sensitive paths.
