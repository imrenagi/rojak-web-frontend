import React from 'react';
import { Button } from 'react-bootstrap'

import styles from './candidatesection.css';

import CandidateList from './CandidateList';

var request = require('superagent');

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
    request
      .get("http://private-anon-b8d16dd661-rojak.apiary-mock.com/elections/dkijakarta/candidates")
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) throw err;
        self.setState({data : res.body.candidates});
      })
  }

  render() {
    return (
      <div className="wrapper style1 candidate">
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
    );
  }
}
