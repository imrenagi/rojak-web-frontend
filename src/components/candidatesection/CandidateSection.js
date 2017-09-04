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
    var self = this;
    //TODO change the hardcoded part
    client.loadAllCandidate("dkijakarta")
      .then(function(res) {
        self.setState({data : res.data.candidates});
      }).catch(function(err) {
        // console.log(err);
      });
  }

  render() {
    return (
      <div className="wrapper style1 candidate">
        <div className="container-atas">
          <div className="row title">
            <h1>Candidates</h1>
          </div>
          <div className="row description">
            <p>This is all candidates which are participated in this election </p>
          </div>
          <CandidateList data={this.state.data}/>
          <div className="row load-more">
            <Button bsStyle='primary' bsSize='large'>Tamplikan Selengkapnya</Button>
          </div>
        </div>
      </div>
    );
  }
}
