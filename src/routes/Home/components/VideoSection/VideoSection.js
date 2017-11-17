import React from 'react'
import { Container, Embed, Header } from 'semantic-ui-react'

export default class VideoSection extends React.Component {
  render () {
    return (
      <Container>
        <Header as='h1' textAlign='center'>About Rojak</Header>
        <p className='center-p'>Watch this video to understand more about Rojak</p>
        <Embed
          id='3tmd-ClpJxA'
          placeholder='https://img.youtube.com/vi/3tmd-ClpJxA/maxresdefault.jpg'
          source='youtube'
        />
      </Container>
    )
  }
}
