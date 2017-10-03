import React from 'react';
import { Button } from 'react-bootstrap'

import styles from './candidatesection.css';

import CandidateList from './CandidateList';

var APIClient = require('../../services/api.js');
var client = new APIClient();

export default class CandidateSection extends React.Component {

  constructor() {
    super();
    this.state = { data : [] }
  }

  componentDidMount() {
    this.loadAllCandidate();
  }

  loadAllCandidate() {

  }

  render() {
    return (
      <div className="wrapper style1 candidate">
        <div className="container-atas">
          <div className="row title">
            <h1>Kandidat</h1>
          </div>
          <div className="row description">
            <p>Kandidat yang turut meramaikan pemilu</p>
          </div>
        </div>
      </div>
    );
  }
}
