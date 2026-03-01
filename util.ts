// arken/node/util.ts

// Compatibility surface for legacy `@arken/node/util` imports.
// Re-export package-root utilities so callers expecting helpers like
// `getTime`, `random`, etc. continue to work.
export * from './index';
export { default } from './index';

// Keep explicit utility module subpath re-exports available as well.
export * from './util/api';
export * from './util/rpc';
