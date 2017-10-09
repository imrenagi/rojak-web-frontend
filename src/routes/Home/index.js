import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './layouts/Home'

const HomeRoute = () => (
  <Switch>
    <Route path='/' component={Home} />
  </Switch>
)

export default HomeRoute
