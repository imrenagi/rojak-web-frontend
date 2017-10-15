import React from 'react'
import {Item } from 'semantic-ui-react'
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
        <Item.Group divided>
          {mediaNodes}
        </Item.Group>
      </div>
    )
  }
}
