import React from 'react'
import { Route } from 'react-router-dom'
import { Container, Button, Header } from 'semantic-ui-react'
import MediaList from '../MediaList'

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
        <Container>
          <Header as='h1' textAlign='center'>Media</Header>
          <p className='center-p'>Rangkuman Analisis Sentiment Berita dari seluruh media yang turut serta memberitakan
            Pilkada Jawa Barat 2018</p>
          <MediaList data={this.props.media} />
          <div className='row load-more'>
            <Button primary size='large'>Tamplikan Selengkapnya</Button>
          </div>
        </Container>
      )} />
    )
  }
}
