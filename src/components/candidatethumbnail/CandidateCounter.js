import React from 'react';
import { Image } from 'react-bootstrap'

import styles from './candidatecounter.css'

export default class CandidateCounter extends React.Component {

  render() {
    return (
          <div className="container">
            <div className="leftpane">
              <h1>8</h1>
              <p># Positive Media</p>
              </div>
            <div className="middlepane">
              <h1>5</h1>
              <p># Neutral Media</p>
            </div>
            <div className="rightpane">
              <h1>2</h1>
              <p># Negative Media</p>
            </div>
          </div>
    );
  }
}
