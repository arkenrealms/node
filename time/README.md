# arken/packages/node/time/README.md

## Purpose
Shared time/date and async timing helpers used across `@arken/node` runtime paths.

## Surface
- Date/time helpers: `date`, `now`, `timestamp`, `timestampToTime`, `removeTimezoneOffset`, `fancyTimeFormat`.
- Delay/conversion helpers: `sleep`, `convert` (`timestring`).
- Async control helpers: `createTaskQueue`, `debounce`.

## Notes
- This folder mixes UTC and local-time conventions.
- Queue/debounce helpers are lightweight and currently optimized for convenience rather than production observability or strict typing.
