import React from 'react';
import { Button } from 'react-bootstrap'

import styles from './mediasection.css';

import MediaThumbnail from './../mediathumbnail/MediaThumbnail'

export default class MediaList extends React.Component {

  render() {
      var mediaNodes = this.props.data.map((media) => {
        return (
          <MediaThumbnail
            logo={media.logo_url}
            candidate_img={media.candidate.image_url}/>
        )
      });

      return (<div className="row custom-thumbnail">
        {mediaNodes}
      </div>)
    }
}
