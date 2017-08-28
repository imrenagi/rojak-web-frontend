import React from 'react';
import { Button } from 'react-bootstrap'

import styles from './ImageHeader.css';

export default class ImageHeader extends React.Component {

  render() {
    return (
      <div className="row header-bg">
        <div className="header-content align-middle">
          <h1>Rojak - Media Sentiment Analyzer!</h1>
          <Button bsStyle='primary' bsSize='large'>Testing</Button>
        </div>
      </div>
    );
  }
}
