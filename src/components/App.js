import React from 'react'
import { Button } from 'react-bootstrap'

import Main from './routes/Main'
import NavigationBar from './navigation/NavigationBar'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Main />
      </div>
    );
  }
 }
