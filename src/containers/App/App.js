import React from 'react'

import Main from 'routes'
import NavigationBar from 'components/NavigationBar'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <NavigationBar />
        <Main />
      </div>
    )
  }
}
