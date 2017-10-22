import React from 'react'
import { Switch, Route } from 'react-router-dom'

// import Home from './Home'
import Home from './Home/containers/Home'
import Election from './Election'
import Login from './Login'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/election' component={Election} />
      <Route path='/login' component={Login} />
    </Switch>
  </main>
)

export default Main
