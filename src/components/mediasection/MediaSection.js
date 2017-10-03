import React from 'react';
import { Button } from 'react-bootstrap'
import { Route } from 'react-router-dom'

import styles from './mediasection.css'

import MediaList from './MediaList'

var APIClient = require('../../services/api.js');
var client = new APIClient();

export default class MediaSection extends React.Component {

  constructor() {
    super()
    this.state = {
      data : []
    };
  }

  componentDidMount() {
    // this.loadAllMedia();
  }

  loadAllMedia() {
    var self = this;
    //TODO change the hardcoded part
    // client.loadAllMedia("dkijakarta")
    //   .then(function(res) {
    //     self.setState({data : res.data.medias});
    //   }).catch(function(err) {
    //     // console.log(err);
    //   });
  }

  render() {
    return (
      <Route render={({ history}) => (
      <div className="wrapper style2 media">
        <div className="container-atas">
          <div className="row title">
            <h1>Media</h1>
          </div>
          <div className="row description">
            <p>Mari kita perhatikan bagaimana sentimen tiap media terhadap pasangan-pasangan dalam pemilu</p>
          </div>
          <button type="button" className="btn btn-lg btn-primary"
            onClick = {() => { history.push('/election/dkijakarta/media/1') }}>
            Media Detail Temp Button</button>
          <div className="row load-more">
            <Button bsStyle='primary' bsSize='large'>Tamplikan Selengkapnya</Button>
          </div>
        </div>
      </div>
    )} />
    );
  }
}
