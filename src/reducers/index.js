import { combineReducers } from 'redux'
import election from './election'
import loading from './loading'
import media from './media'
import candidate from './candidate'

const reducers = combineReducers({
  election,
  media,
  loading,
  candidate
})

export default reducers
