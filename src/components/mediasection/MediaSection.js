import React from 'react';
import { Button } from 'react-bootstrap'

import MediaThumbnail from './../mediathumbnail/MediaThumbnail'

export default class MediaSection extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="title">
          <h1>Media Analytics</h1>
          <p>All medias which made news about this election </p>
        </div>
        <div>
            <MediaThumbnail />
            <MediaThumbnail />
            <MediaThumbnail />
            <MediaThumbnail />
            <MediaThumbnail />
            <MediaThumbnail />
        </div>
        <div>
          <Button bsStyle='primary' bsSize='large'>Tamplikan Selengkapnya</Button>
        </div>
      </div>
    );
  }
}
