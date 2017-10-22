import React from 'react'
import { Button } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import MediaList from '../MediaList'

import './mediasection.css'

export default class MediaSection extends React.Component {
  render () {
    return (
      <Route render={({ history }) => (
        <div className='wrapper style2 media'>
          <div className='container-atas'>
            <div className='row title'>
              <h1>Media</h1>
            </div>
            <div className='row description'>
              <p>Rangkuman Analisis Sentiment Berita dari seluruh media yang turut serta memberitakan
              Pilkada Jawa Barat 2018</p>
            </div>
            <MediaList data={this.props.media} />
            <div className='row load-more'>
              <Button bsStyle='primary' bsSize='large'>Tamplikan Selengkapnya</Button>
            </div>
          </div>
        </div>
      )} />
    )
  }
}
