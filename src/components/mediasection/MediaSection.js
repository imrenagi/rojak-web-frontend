import React from 'react';
import { Button } from 'react-bootstrap'

import styles from './mediasection.css'

import MediaThumbnail from './../mediathumbnail/MediaThumbnail'

export default class MediaSection extends React.Component {

  render() {
    return (
      <div className="wrapper style1 candidate">
        <div className="row title">
          <h1>Media Analytics</h1>
        </div>
        <div className="row description">
          <p>Check out our analytics result about who is/are the candidate/s which might be supported by a news media</p>
        </div>
        <div className="custom-thumbnail">
            <MediaThumbnail />
            <MediaThumbnail />
            <MediaThumbnail />
            <MediaThumbnail />
            <MediaThumbnail />
            <MediaThumbnail />
        </div>
        <div className="row load-more">
          <Button bsStyle='primary' bsSize='large'>Tamplikan Selengkapnya</Button>
        </div>
      </div>
    );
  }
}
