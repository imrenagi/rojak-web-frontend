import React from 'react';
import { Image } from 'react-bootstrap'
import CandidateCounter from './CandidateCounter'

import styles from './candidatethumbnail.css'

export default class CandidateThumbnail extends React.Component {

  render() {
    return (
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="candidate-card-wrapper">
              <div className="candidate-card-title">
                <p>{this.props.candidate_name}</p>
              </div>
              <div className="candidate-card-divider"></div>

              <div className="candidate-card-image-link">
                <Image className="candidate-card-image" src={this.props.img} responsive/>
              </div>
              <div className="candidate-card-counter">
                <CandidateCounter />
              </div>
            </div>
          </div>
        );
  }
}
