import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from './layouts/Dashboard'

const ElectionRoute = () => (
  <Switch>
    <Route path='/dashboard' component={Dashboard} />
  </Switch>
)

export default ElectionRoute
