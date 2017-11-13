import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MediaDetail from './containers/Media'

const MediaRouter = () => (
  <Switch>
    <Route exact path='/election/:electionId/media/:mediaId' component={MediaDetail} />
  </Switch>
)

export default MediaRouter
