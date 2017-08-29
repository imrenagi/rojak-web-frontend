import React from 'react';
import { Image } from 'react-bootstrap'

import styles from './candidatethumbnail.css'

export default class CandidateThumbnail extends React.Component {

  render() {
    return (
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="thumbnail-box">
              <h3>{this.props.candidate_name}</h3>
              <div className="container-img">
                <Image className="img" src={this.props.img}/>
              </div>
              <p>Section number</p>
            </div>

          </div>
    );
  }
}
