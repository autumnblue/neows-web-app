/**
 * @module redux
 */
import {createStore, applyMiddleware, compose} from 'redux'

/**
 * @module redux-thunk
 */
import thunkMiddleware from 'redux-thunk'

/**
 * @module redux-logger
 */
import loggerMiddleware from 'redux-logger'

import isDev from 'isdev'

/**
 * @module rootReducer
 */
import rootReducer from '../../reducers'

let configureStore

// If the app is running in dev, add in redux devtools.
if (isDev) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  configureStore = initialState => {
    return createStore(
      rootReducer,
      initialState,
      composeEnhancers(
        applyMiddleware(
          thunkMiddleware,
          loggerMiddleware
        )
      )
    )
  }
} else {
  configureStore = initialState => {
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunkMiddleware)
    )
  }
}

export default configureStore