import React from 'react'
import {  Image, Divider } from 'semantic-ui-react'

export default class MediaSummary extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    return (
        <div>
          <Image centered='true' src={this.props.logo_url} />
          <Divider />
        </div>
    )
  }
}
