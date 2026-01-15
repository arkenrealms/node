import _ from 'lodash';

export default (error: unknown): boolean => {
  if (!error) {
    return false;
  }

  return _.every(['severity', 'code', 'detail', 'internalQuery', 'routine'], (attr) => _.has(error as object, attr));
};
