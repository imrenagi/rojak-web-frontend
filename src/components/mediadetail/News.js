import React from 'react';
import { Image } from 'react-bootstrap'

import styles from './news.css'

export default class News extends React.Component {

  constructor() {
    super();
  }

  joinArr(arr) {
    return arr.join(", ");
  }

  render() {
    return (
      <div className="container">
        <div className="news-title">
          <a href={this.props.url}>
            <h3>{this.props.title}</h3>
          </a>
        </div>
        <div className="news-url">
          <p>{this.props.url}</p>
        </div>
        <div className="news-content">
          <p>
            <span className="bold">
              {this.props.timestamp} - </span>
            {this.props.content}
          </p>
        </div>
        <div className="news-sentiment">
          <p><span className="bold">Hasil: </span>
          {this.joinArr(this.props.sentiments)}</p>
        </div>
      </div>
    );
  }
}
