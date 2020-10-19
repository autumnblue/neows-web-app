import { notification } from 'antd'
import * as ActionTypes from '../utils/actionType'
import * as ApiServices from '../services/service'
import fire from '../utils/firebaseConfig'
import { auth } from '../layouts/auth'

export const authApiLoading = () => ({
  type: ActionTypes.AUTH_API_LOADING
})

export const failedApiCall = (error) => ({
  type: ActionTypes.FAILED_AUTH_API,
  payload: error
})

export const changeLoginState = (isLoggedIn) => {
  return {
    type: ActionTypes.CHANGE_LOGIN_STATE,
    payload: isLoggedIn
  }
}

export const login = (email, password, history) => {
  return (dispatch, getState) => {
    dispatch(authApiLoading())
    return fire.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        fire.auth().onAuthStateChanged(user => {
          if (user) {
            auth.handleAuthentication(user, history)
            dispatch({
              type: ActionTypes.SUCCESS_LOG_IN
            })
          }
        })
      }).catch(error => {
        dispatch(failedApiCall(error))
        notification['error']({
          message: 'Login error',
          description: error.message
        })
      })
  }
}

export const signUp = (email, password, history) => {
  return (dispatch, getState) => {
    dispatch(authApiLoading())
    return fire.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        fire.auth().onAuthStateChanged(user => {
          if (user) {
            auth.handleAuthentication(user, history)
            dispatch({
              type: ActionTypes.SUCCESS_SIGN_UP
            })
          }
        })
      }).catch(error => {
        dispatch(failedApiCall(error))
        notification['error']({
          message: 'Sign up error',
          description: error.message
        })
      })
  }
}

export const signOut = () => {
  return (dispatch, getState) => {
    dispatch(authApiLoading())
    return fire.auth().signOut()
      .then(response => {
        auth.logout()
        dispatch({
          type: ActionTypes.SUCCESS_LOG_OUT
        })
      }).catch(error => {
        dispatch(failedApiCall(error))
        notification['error']({
          message: 'Log out error',
          description: error.message
        })
      })
  }
}