import React from 'react';
import { Button } from 'react-bootstrap'

import styles from './candidatesection.css';

import CandidateThumbnail from './../candidatethumbnail/CandidateThumbnail'

import agusImg from './../../static/img/agus-silvi.jpg'
import ahokImg from './../../static/img/ahok-djarot.jpg'
import aniesImg from './../../static/img/anies-sandi.jpg'

export default class CandidateSection extends React.Component {

  render() {
    return (
      <div className="candidate-section">
        <div className="candidate-section-title">
          <h1>Candidates</h1>
        </div>
        <div className="candidate-section-description">
          <p>This is all candidates which are participated in this election </p>
        </div>
        <div className="candidate-section-thumbnail">
            <CandidateThumbnail img={agusImg} candidate_name="Agus & Silvi"/>
            <CandidateThumbnail img={ahokImg} candidate_name="Ahok & Djarot"/>
            <CandidateThumbnail img={aniesImg} candidate_name="Anies & Sandi"/>
        </div>
        <div className="candidate-section-load-more">
          <Button bsStyle='primary' bsSize='large'>Tamplikan Selengkapnya</Button>
        </div>
      </div>
    );
  }
}
