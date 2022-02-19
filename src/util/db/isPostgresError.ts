import * as _ from 'underscore'

export default error => {
  if (!error) {
    return false
  }
  // Just check the existence of a bunch of attributes. There doesn't seem to be an easier way.
  return _.all(['severity', 'code', 'detail', 'internalQuery', 'routine'], attr => _.has(error, attr))
}
