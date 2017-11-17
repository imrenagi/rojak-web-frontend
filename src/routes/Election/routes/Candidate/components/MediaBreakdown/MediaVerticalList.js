import React from 'react'
import MediaSummary from './MediaSummary'
import { Button } from 'semantic-ui-react'

import './mediaverticallist.css'

export default class MediaVerticalList extends React.Component {
  render () {
    var arr = this.props.data
    if (arr === undefined) {
      arr = []
    }
    var mediaNodes = arr.map((media, idx) => {
      return (
        <MediaSummary key={media.id + '-' + idx} logo_url={media.logo_url} />
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
