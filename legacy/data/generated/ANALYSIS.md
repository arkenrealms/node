# arken/packages/node/legacy/data/generated/ANALYSIS.md

## Folder purpose
Static content bundles exported as JSON for legacy gameplay/runtime configuration. This acts like a baked data catalog for world entities (areas, items, skills, classes, eras, NPCs) that can be consumed without DB round-trips.

## What files do
- Domain catalogs: `areas.json`, `acts.json`, `eras.json`, `npcs.json`, `items.json`, `skills.json`, `character*.json`.
- Taxonomy/config dictionaries: `itemTypes.json`, `itemRarities.json`, `itemAffixes.json`, `skillConditions.json`, `skillMods.json`.
- World topology datasets: `planets.json`, `solarSystems.json`, `mapAreas.json`, `biomes.json`.

## Architectural context (omniverse platform)
For a Steam/Battle.net-style game platform, these are equivalent to shipped game metadata tables. They should be versioned, schema-validated, and ideally generated from authoritative tools/pipelines.

## Risks / gaps
- No visible schema/version pin per file in this folder.
- Runtime imports appear to trust shape blindly in upstream TS modules.
- Potential drift between generated JSON and typed usage contracts.

## Follow-ups
- Add JSON schema checks in CI for high-impact files (`items`, `skills`, `areas`).
- Add generated-at/version metadata for cache invalidation and client compatibility checks.
- Add tests that assert required keys used by legacy loaders exist.
