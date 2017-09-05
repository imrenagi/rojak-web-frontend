import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './../home/Home'
import CandidateDetail from './../candidatedetail/CandidateDetail'

const ElectionRoute = () => (
  <Switch>
    <Route exact path='/election' component={CandidateDetail}/>
    <Route path='/election/:electionId/candidate/:candidateId' component={CandidateDetail}/>
  </Switch>
)

export default ElectionRoute
