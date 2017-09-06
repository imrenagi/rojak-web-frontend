import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './../home/Home'
import ElectionRouter from './ElectionRouter'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/election' component={ElectionRouter} />
    </Switch>
  </main>
)

export default Main
