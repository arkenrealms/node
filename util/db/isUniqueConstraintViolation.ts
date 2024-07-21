import isPostgresError from './isPostgresError'

export default (error) => isPostgresError(error) && error.code === '23505'
