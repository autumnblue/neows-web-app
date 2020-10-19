import _ from 'lodash'

import * as ActionTypes from '../../utils/actionType'

const initialState = {
  isLoading: false,
  totalSize: 0,
  currentPageNum: 1,
  pageSize: 10,
  list: [],
  feeds: null,
  asteroidById: null
}

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state)

  switch (action.type) {
    case ActionTypes.BROWSE_API_LOADING:
      newState.isLoading = true
      return newState

    case ActionTypes.ON_CHANGE_PAGE_NUM:
      newState.currentPageNum = action.payload
      return newState

    case ActionTypes.ON_CHANGE_PAGE_SIZE:
      newState.currentPageNum = action.payload.current
      newState.pageSize = action.payload.pageSize
      return newState

    case ActionTypes.SUCCESS_GET_BROWSE_DATA:
      newState.isLoading = false
      newState.list = action.payload.near_earth_objects
      if (action.payload.page) {
        newState.totalSize = action.payload.page.total_elements
        newState.currentPageNum = action.payload.page.number + 1
      }
      return newState

    case ActionTypes.SUCCESS_GET_DATA_FROM_START_AND_END:
      newState.feeds = action.payload.near_earth_objects
      newState.isLoading = false
      return newState

    case ActionTypes.SUCCESS_GET_ASTEROID_BY_ID:
      newState.asteroidById = action.payload
      newState.isLoading = false
      return newState

    case ActionTypes.FAILED_BROWSE_API:
      newState.isLoading = false
      return newState

    default:
      return state
  }
}

export default reducer