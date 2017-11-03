import React from 'react'
import { Menu, Image } from 'semantic-ui-react'

const NavigationBar = () => {
  return (
    <Menu stackable>
      <Menu.Item >
        <a href='/'>
          <Image size='tiny' src='https://react.semantic-ui.com/logo.png' />
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

export default NavigationBar
