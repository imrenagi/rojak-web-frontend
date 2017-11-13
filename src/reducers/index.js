import { combineReducers } from 'redux'
import election from './election'
import loading from './loading'
import media from './media'

const reducers = combineReducers({
  election,
  media,
  loading
})

export default reducers
