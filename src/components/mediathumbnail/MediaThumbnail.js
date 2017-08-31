import React from 'react';
import { Image } from 'react-bootstrap'

import styles from './mediathumbnail.css'

import aniesImg from './../../static/img/anies-sandi.jpg'
import logoImg from './../../static/img/kompascom.png'

export default class MediaThumbnail extends React.Component {

  render() {
    return (
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="card">
              <div className="media-card-logo">
                <Image src={this.props.logo} responsive />
              </div>
              <div className="media-card-divider"></div>
              <div className="media-card-candidate-img">
                <Image src={this.props.candidate_img} responsive />
              </div>
            </div>
          </div>
    );
  }
}
