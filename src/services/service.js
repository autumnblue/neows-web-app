import { requestService } from './request'
import * as ApiUrls from './apiUrl'

const { REACT_APP_NEO_API_KEY } = process.env

export const commonService = (request, token = true) => {
  let reqObj = {
    method: request.method,
    url: request.url
  }
  if (request.data) {
    reqObj = Object.assign(reqObj, { data: request.data })
  }
  if (request.queryParams) {
    reqObj = Object.assign(reqObj, { queryParams: request.queryParams })
  }
  return requestService(reqObj)
    .then(response => {
      return response
    }).catch(error => {
      return Promise.reject(error.response.data)
    })
}

export const getBrowserDataService = (data) => {
  return commonService({
    method: 'GET',
    url: ApiUrls.GET_BROWSE_DATA_ENDPOINT,
    queryParams: {
      page: data.page,
      size: data.size,
      api_key: REACT_APP_NEO_API_KEY
    }
  })
}

export const getDataFromStartAndEndService = (data) => {
  return commonService({
    method: 'GET',
    url: ApiUrls.GET_DATA_FROM_START_AND_END_ENDPOINT,
    queryParams: {
      start_date: data.start_date,
      end_date: data.end_date,
      detailed: true,
      api_key: REACT_APP_NEO_API_KEY
    }
  })
}

export const getAsteroidByIDService = (id) => {
  return commonService({
    method: 'GET',
    url: `${ApiUrls.GET_ASTEROID_BY_ID_ENDPOINT}/${id}`,
    queryParams: {
      api_key: REACT_APP_NEO_API_KEY
    }
  })
}

