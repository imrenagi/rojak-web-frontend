import React from 'react';
import { Image } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import CandidateCounter from './CandidateCounter'

import styles from './candidatethumbnail.css'

export default class CandidateThumbnail extends React.Component {

  render() {

    return (
      <Route render={({ history}) => (
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div className="card">
            <div className="candidate-card-title">
              <h3>{this.props.name}</h3>
            </div>
            <div className="candidate-card-divider"></div>

            <div className="candidate-card-image-link" >
              <Image className="candidate-card-image" src={this.props.img} responsive/>
              <div className="detail-btn">
                <button type="button" className="btn btn-lg btn-primary"
                  onClick = {() => { history.push('/election/dkijakarta/candidate/'+this.props.name) }}>
                  Lihat Detail</button>
              </div>
            </div>
            <div className="candidate-card-counter">
              <CandidateCounter counter={this.props.counter}/>
            </div>
          </div>
        </div>
      )} />
    );
  }
}
