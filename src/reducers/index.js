import {combineReducers} from 'redux'

import auth from './auth'
import browse from './browse'

const rootReducer = combineReducers({
  auth,
  browse
})

export default rootReducer