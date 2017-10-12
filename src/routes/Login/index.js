import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from './layouts/Login'

const LoginRoute = () => (
  <Switch>
    <Route path='/login' component={Login} />
  </Switch>
)

export default LoginRoute
