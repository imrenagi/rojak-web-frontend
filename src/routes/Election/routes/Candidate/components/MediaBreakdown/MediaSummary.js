import React from 'react'
import { Image, Card } from 'semantic-ui-react'

import './MediaSummary.css'

export default class MediaSummary extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    return (
      <div className='segment-media'>
        <Card centered href={'#' + this.props.logo_url}>
          <Card.Content>
            <Image centered='true' src={this.props.logo_url} />
          </Card.Content>
        </Card>
      </div>
    )
  }
}
