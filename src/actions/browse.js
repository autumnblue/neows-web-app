import * as ActionTypes from '../utils/actionType'
import * as ApiServices from '../services/service'
import { notification } from 'antd'

export const browseApiLoading = () => ({
  type: ActionTypes.BROWSE_API_LOADING
})

export const failedApiCall = (error) => ({
  type: ActionTypes.FAILED_BROWSE_API,
  payload: error
})

export const onChangePageNum = (pageNum) => {
  return {
    type: ActionTypes.ON_CHANGE_PAGE_NUM,
    payload: pageNum
  }
}

export const onChangePageSize = (current, pageSize) => {
  return {
    type: ActionTypes.ON_CHANGE_PAGE_SIZE,
    payload: {
      current,
      pageSize
    }
  }
}

export const getBrowseData = () => {
  return (dispatch, getState) => {
    dispatch(browseApiLoading())
    const pagination = () => {
      const currentPageNum = getState().browse.currentPageNum === 0 ? 0 : getState().browse.currentPageNum - 1
      const pageSize = getState().browse.pageSize
      return {
        page: currentPageNum,
        size: pageSize
      }
    }
    return ApiServices.getBrowserDataService(pagination())
      .then(response => {
        dispatch({
          type: ActionTypes.SUCCESS_GET_BROWSE_DATA,
          payload: response.data
        })
      }).catch(error => {
        dispatch(failedApiCall(error))
      })
  }
}

export const getDataFromStarDateAndEndDate = (data) => {
  return (dispatch, getState) => {
    dispatch(browseApiLoading())
    return ApiServices.getDataFromStartAndEndService(data)
      .then(response => {
        dispatch({
          type: ActionTypes.SUCCESS_GET_DATA_FROM_START_AND_END,
          payload: response.data
        })
      }).catch(error => {
        notification['error']({
          message: 'Error',
          description: error.error_message
        })
        dispatch(failedApiCall(error))
      })
  }
}

export const getAsteroidByID = (data) => {
  return (dispatch, getState) => {
    dispatch(browseApiLoading())
    return ApiServices.getAsteroidByIDService(data)
      .then(response => {
        dispatch({
          type: ActionTypes.SUCCESS_GET_ASTEROID_BY_ID,
          payload: response.data
        })
      }).catch(error => {
        notification['error']({
          message: 'Error',
          description: 'Not found the asteroid'
        })
        dispatch(failedApiCall(error))
      })
  }
}