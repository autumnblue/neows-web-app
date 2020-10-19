/**
 * api base url
 * type { String }
 */
export const { REACT_APP_API_BASE_URL } = process.env

/**
 * api version url
 * type { String }
 */
export const VERSION_URL = `${REACT_APP_API_BASE_URL}/neo/rest/v1`

export const GET_BROWSE_DATA_ENDPOINT = `${VERSION_URL}/neo/browse`

export const GET_DATA_FROM_START_AND_END_ENDPOINT = `${VERSION_URL}/feed`

export const GET_ASTEROID_BY_ID_ENDPOINT = `${VERSION_URL}/neo`