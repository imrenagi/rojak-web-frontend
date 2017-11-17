import React from 'react'
import { Container, Embed } from 'semantic-ui-react'

export default class VideoSection extends React.Component {
  render () {
    return (
      <div>
        <h1>About Rojak</h1>
        <p>Watch this video to understand more about Rojak</p>
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
