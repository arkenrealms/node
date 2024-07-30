import _date from './date';
import _now from './now';
import _fancyTimeFormat from './fancyTimeFormat';

export const date = _date;
export const now = _now;
export const fancyTimeFormat = _fancyTimeFormat;

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function removeTimezoneOffset(date) {
  const userTimezoneOffset = date.getTimezoneOffset() * 60000;
  if (userTimezoneOffset >= 0) {
    return new Date(date.getTime() - userTimezoneOffset);
  }
  return new Date(date.getTime() + userTimezoneOffset);
}

export default {
  sleep,
  date,
  now,
  fancyTimeFormat,
  removeTimezoneOffset,
};
