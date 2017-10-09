import React from 'react'

import MediaThumbnail from '../MediaThumbnail'

export default class MediaList extends React.Component {
  render () {
    var mediaNodes = this.props.data.map((media) => {
      return (
        <MediaThumbnail
          logo={media.logo_url}
          candidate_img={media.candidate.image_url} />
      )
    })

    return (<div className='row custom-thumbnail'>
      {mediaNodes}
    </div>)
  }
}
