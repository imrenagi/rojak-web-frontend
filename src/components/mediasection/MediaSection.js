import React from 'react';
import { Button } from 'react-bootstrap'

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
    this.loadAllMedia();
  }

  loadAllMedia() {
    var self = this;
    //TODO change the hardcoded part
    client.loadAllMedia("dkijakarta")
      .then(function(res) {
        self.setState({data : res.data.medias});
      }).catch(function(err) {
        // console.log(err);
      });
  }

  render() {
    return (
      <div className="wrapper style2 media">
        <div className="container-atas">
          <div className="row title">
            <h1>Media Analytics</h1>
          </div>
          <div className="row description">
            <p>Check out our analytics result about who is/are the candidate/s which might be supported by a news media</p>
          </div>
          <MediaList data={this.state.data} />
          <div className="row load-more">
            <Button bsStyle='primary' bsSize='large'>Tamplikan Selengkapnya</Button>
          </div>
        </div>
      </div>
    );
  }
}
