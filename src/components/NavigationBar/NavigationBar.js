import React from 'react'
import { Menu } from 'semantic-ui-react'

export default class NavigationBar extends React.Component {
  render () {
    return (
      <Menu>
        <Menu.Item>
          <a href='/'>Kawal Media ID</a>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            Kandidat
          </Menu.Item>
          <Menu.Item>
            Media
          </Menu.Item>
          <Menu.Item>
            About Us
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
