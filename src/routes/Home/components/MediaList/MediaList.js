import React from 'react'
import { Grid } from 'semantic-ui-react'
import MediaItem from './MediaItem'

export default class MediaList extends React.Component {
  render () {
    console.log(this.props.data)
    var mediaNodes = this.props.data.map((media) => {
      return (
        <MediaItem
          container={media.name}
          logo_url={media.logo_url}
        />
      )
    })

    return (
      <div>
        <Grid divided='vertically'>
          {mediaNodes}
        </Grid>
      </div>
    )
  }
}
