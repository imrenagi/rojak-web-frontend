import React from 'react'
import MediaSummary from './MediaSummary'

export default class MediaVerticalList extends React.Component {
  render () {
    var mediaNodes = this.props.data.map((media) => {
      return (
        <MediaSummary />
      )
    })

    return (
      <div>
        <div>
          <h1> Positive Media </h1>
        </div>
        <div>
          {mediaNodes}
        </div>
      </div>
    )
  }
}
