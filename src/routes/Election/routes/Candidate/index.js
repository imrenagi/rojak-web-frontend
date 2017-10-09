import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CandidateDetail from './components/CandidateDetail'

const CandidateRouter = () => (
  <Switch>
    <Route exact path='/election/:electionId/candidate/:candidateId' component={CandidateDetail} />
  </Switch>
)

export default CandidateRouter
