import { combineReducers } from 'redux'
import election from './election'
import loading from './loading'
import media from './media'
import candidate from './candidate'
import auth from './auth'

import { routerReducer } from 'react-router-redux'

const reducers = combineReducers({
  election,
  media,
  loading,
  candidate,
  auth,
  routing: routerReducer
})

export default reducers
