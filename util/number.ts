export function convert(num: any, digits = 0) {
  if (num === null || num === undefined || isNaN(num)) return undefined;

  const res = digits === 0 ? parseInt(num) : parseFloat(parseFloat(num + '').toFixed(digits));

  if (isNaN(res)) return undefined;

  return res;
}

export function chance(probability: number) {
  return Math.random() < probability / 100;
}

export function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
