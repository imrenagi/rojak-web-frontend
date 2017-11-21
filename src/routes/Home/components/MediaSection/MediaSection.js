import React from 'react'
import { Container, Button, Header } from 'semantic-ui-react'
import MediaList from '../MediaList'

export default class MediaSection extends React.Component {
  render () {
    return (
      <Container>
        <Header as='h1' textAlign='center'>Media</Header>
        <p className='center-p'>Rangkuman Analisis Sentiment Berita dari seluruh media yang turut serta memberitakan
            Pilkada Jawa Barat 2018</p>
        <MediaList data={this.props.media} />
        <div className='row load-more'>
          <Button primary size='large'>Tamplikan Selengkapnya</Button>
        </div>
      </Container>
    )
  }
}
