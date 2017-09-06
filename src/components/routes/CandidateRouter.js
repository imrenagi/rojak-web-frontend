import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './../home/Home'
import CandidateDetail from './../candidatedetail/CandidateDetail'

const CandidateRouter = () => (
  <Switch>
    <Route exact path='/election/:electionId/candidate/:candidateId' component={CandidateDetail}/>
  </Switch>
)

export default CandidateRouter
