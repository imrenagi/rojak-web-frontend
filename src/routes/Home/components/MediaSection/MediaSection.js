import React from 'react'
import { Button } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import MediaList from '../MediaList'

import './mediasection.css'

export default class MediaSection extends React.Component {
  constructor () {
    super()
    this.state = {
      data : [{
        name: 'kompascom',
        logo_url: 'http://assets.kompas.com/data/2016/wp/images/logokompascom.png'
      },
      {
        name: 'republika',
        logo_url: 'https://growpal.co.id/assets_frontend/images/republika.jpg'
      }]
    }
  }

  componentDidMount () {
    // this.loadAllMedia();
  }

  loadAllMedia () {
    // var self = this
    // TODO change the hardcoded part
    // client.loadAllMedia("dkijakarta")
    //   .then(function(res) {
    //     self.setState({data : res.data.medias});
    //   }).catch(function(err) {
    //     // console.log(err);
    //   });
  }

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
            <Container>
              <MediaList data={this.state.data} />
              <div className='row load-more'>
                <Button bsStyle='primary' bsSize='large'>Tamplikan Selengkapnya</Button>
              </div>
            </Container>
          </div>
        </div>
      )} />
    )
  }
}
