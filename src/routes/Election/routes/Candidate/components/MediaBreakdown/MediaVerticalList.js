import React from 'react'
import MediaSummary from './MediaSummary'
import { Button } from 'semantic-ui-react'

import './mediaverticallist.css'

export default class MediaVerticalList extends React.Component {
  render () {
    var mediaNodes = this.props.data.map((media) => {
      return (
        <MediaSummary logo_url={media.logo_url} />
      )
    })

    return (
      <div>
        <h3 className='text-centered'>{this.props.title}</h3>
        {mediaNodes}
        <Button fluid size='huge'>3 Media Lainnya</Button>
      </div>
    )
  }
}
