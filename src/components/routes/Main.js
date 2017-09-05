import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './../home/Home'
import CandidateDetail from './../candidatedetail/CandidateDetail'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/election' component={CandidateDetail} />
    </Switch>
  </main>
)

export default Main
