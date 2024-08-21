export const camelize = (str: string): string => {
  if (!str) return str;

  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => (index === 0 ? word.toLowerCase() : word.toUpperCase()))
    .replace(/[\s:,()&/\-\+]+/g, '');
};

export const pluralize = (singular: string, plural: string, count: number, showCount = true, zero = ''): string => {
  if (count === 0 && zero) return zero;

  const output = count === 1 ? singular : plural || `${singular}s`;

  return showCount ? `${count} ${output}` : output;
};

export const getFirstName = (str: string): string => str.split(' ')[0];

export const getNameInitials = (str: string): string => {
  const words = str.split(' ');
  return words.length > 1
    ? `${words[0][0].toUpperCase()}${words[words.length - 1][0].toUpperCase()}`
    : words[0][0].toUpperCase();
};

export function removeComments(str) {
  // Regular expression for removing single-line and multi-line comments
  const regex = /\/\/.*|\/\*[^]*?\*\//g;
  return str.replace(regex, '');
}

export function cleanJSON(str) {
  return removeComments(
    str
      .replace('```json\n', '')
      .replace('\n```', '')
      .replace(/\/\/.*|\/\*[^]*?\*\//g, '')
  );
}
