import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './../home/Home'
import CandidateDetail from './../candidatedetail/CandidateDetail'
import MediaDetail from './../mediadetail/MediaDetail'

import CandidateRouter from './CandidateRouter'
import MediaRouter from './MediaRouter'

const ElectionRoute = () => (
  <Switch>
    <Route  path='/election/:electionId/candidate' component={CandidateRouter}/>
    <Route  path='/election/:electionId/media' component={MediaRouter}/>
  </Switch>
)

export default ElectionRoute
