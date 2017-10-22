import { combineReducers } from 'redux'
import election from './election'
import loading from './loading'

const electionHome = combineReducers({
  election,
  loading
})

export default electionHome
