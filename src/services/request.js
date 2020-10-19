import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
  maxAge: 15 * 60 * 1000
})

const api = axios.create({
  adapter: cache.adapter
})

const headers = {
  // 'Content-Type': 'application/json',
  // Accept: 'application/json',
  // 'Access-Control-Allow-Headers': '*',
  // 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
}

const request = (params) => {
  return api({
    method: params.method,
    headers: Object.assign(
      {},
      headers
    ),
    params: params.queryParams,
    url: params.url,
    data: params.data
  })
}

export const requestService = (params) => request(Object.assign({ method: 'GET' }, { ...params }))