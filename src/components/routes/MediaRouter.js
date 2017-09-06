import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './../home/Home'
import MediaDetail from './../mediadetail/MediaDetail'

const MediaRouter = () => (
  <Switch>
    <Route exact path='/election/:electionId/media/:mediaId' component={MediaDetail}/>
  </Switch>
)

export default MediaRouter
