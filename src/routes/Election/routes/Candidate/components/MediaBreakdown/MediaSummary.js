import React from 'react'
import { Image, Card } from 'semantic-ui-react'

import './MediaSummary.css'

export default class MediaSummary extends React.Component {
  render () {
    return (
      <div className='segment-media'>
        <Card centered href={'#' + this.props.logo_url}>
          <Card.Content>
            <Image src={this.props.logo_url} />
          </Card.Content>
        </Card>
      </div>
    )
  }
}
