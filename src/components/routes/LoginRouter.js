import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './../home/Home'
import CandidateDetail from './../candidatedetail/CandidateDetail'
import Login from './../login/Login'

const LoginRoute = () => (
  <Switch>
    <Route path='/login' component={Login}/>
  </Switch>
)

export default LoginRoute
