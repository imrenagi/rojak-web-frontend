import React from 'react';
import { Button } from 'react-bootstrap'

import styles from './candidatesection.css';

import CandidateThumbnail from './../candidatethumbnail/CandidateThumbnail'

export default class CandidateSection extends React.Component {

  render() {
      var candidateNodes = this.props.data.map((candidate) => {
        return (
          <CandidateThumbnail name={candidate.name} img={candidate.img} />)
      });

      return (<div className="row custom-thumbnail">
        {candidateNodes}
      </div>)
    }
}
