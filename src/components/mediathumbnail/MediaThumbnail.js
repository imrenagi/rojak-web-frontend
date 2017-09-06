import React from 'react';
import { Image } from 'react-bootstrap'
import { Route } from 'react-router-dom'

import styles from './mediathumbnail.css'

import aniesImg from './../../static/img/anies-sandi.jpg'
import logoImg from './../../static/img/kompascom.png'

export default class MediaThumbnail extends React.Component {

  render() {
    return (
        <Route render={({ history}) => (
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="card">
              <div className="media-card-logo">
                <Image src={this.props.logo} className="cimg-responsive" />
              </div>
              <div className="media-card-divider"></div>
              <div className="media-card-candidate-img">
                <Image src={this.props.candidate_img} className="media-card-image img-responsive" />
                <div className="detail-btn">
                  <button type="button" className="btn btn-lg btn-primary"
                    onClick = {() => { history.push('/election/dkijakarta/media/1') }}>
                  Lihat Detail</button>
                </div>
              </div>
            </div>
          </div>
        )} />
    );
  }
}
