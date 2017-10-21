import React from 'react'
import { Item } from 'semantic-ui-react'
import MediaStatisticItem from './MediaStatisticItem'

export default class MediaStatistic extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <Item.Group divided>
        <MediaStatisticItem
          container='chart1'
          logo_url='http://assets.kompas.com/data/2016/wp/images/logokompascom.png' />
        <MediaStatisticItem
          container='chart2'
          logo_url='https://growpal.co.id/assets_frontend/images/republika.jpg' />
      </Item.Group>
    )
  }
}
