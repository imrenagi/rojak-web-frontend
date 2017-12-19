import React from 'react'
import { Menu, Image } from 'semantic-ui-react'

export default class NavigationBar extends React.Component {
  render () {
    return (
      <Menu stackable>
        <Menu.Item >
          <a href='/'>
            <Image size='medium' src='http://res.cloudinary.com/imrenagi-com/image/upload/c_scale,h_82/v1513363373/unnamed_ngyswj.png' />
          </a>
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item name='about-us' size='medium'>
            About Us
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
