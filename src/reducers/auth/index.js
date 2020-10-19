import _ from 'lodash'

import * as ActionTypes from '../../utils/actionType'

const initialState = {
  isLoading: false,
  isLoggedIn: false,
}

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state)

  switch (action.type) {
    case ActionTypes.CHANGE_LOGIN_STATE:
      newState.isLoggedIn = action.payload
      return newState

    case ActionTypes.AUTH_API_LOADING:
      newState.isLoading = true
      return newState

    case ActionTypes.SUCCESS_LOG_IN:
      newState.isLoading = false
      return newState

    case ActionTypes.SUCCESS_SIGN_UP:
      newState.isLoading = false
      return newState

    case ActionTypes.SUCCESS_LOG_OUT:
      newState.isLoading = false
      return newState

    case ActionTypes.FAILED_AUTH_API:
      newState.isLoading = false
      return newState

    default:
      return state
  }
}

export default reducer