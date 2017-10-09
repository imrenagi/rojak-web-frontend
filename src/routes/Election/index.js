import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Candidate from './routes/Candidate'
import Media from './routes/Media'

const ElectionRoute = () => (
  <Switch>
    <Route path='/election/:electionId/candidate' component={Candidate} />
    <Route path='/election/:electionId/media' component={Media} />
  </Switch>
)

export default ElectionRoute
