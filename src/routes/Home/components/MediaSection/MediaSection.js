import React from 'react'
import { Button } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import MediaList from '../MediaList'

export default class MediaSection extends React.Component {
  render () {
    return (
      <Route render={({ history }) => (
        <div>
          <h1>Media</h1>
          <p>Rangkuman Analisis Sentiment Berita dari seluruh media yang turut serta memberitakan
            Pilkada Jawa Barat 2018</p>
          <Container>
            <MediaList data={this.props.media} />
            <div className='row load-more'>
              <Button bsStyle='primary' bsSize='large'>Tamplikan Selengkapnya</Button>
            </div>
          </Container>
        </div>
      )} />
    )
  }
}
