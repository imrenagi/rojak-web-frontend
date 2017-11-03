import React from 'react'
import { Container, Embed } from 'semantic-ui-react'

import './videosection.css'

export default class VideoSection extends React.Component {
  render () {
    return (
      <div className='wrapper style3 video-section'>
        <div className='row title'>
          <h1>About Rojak</h1>
        </div>
        <div className='row description'>
          <p>Watch this video to understand more about Rojak</p>
        </div>
        <Container>
          <Embed
            id='3tmd-ClpJxA'
            placeholder='https://img.youtube.com/vi/3tmd-ClpJxA/maxresdefault.jpg'
            source='youtube'
          />
        </Container>
      </div>
    )
  }
}
