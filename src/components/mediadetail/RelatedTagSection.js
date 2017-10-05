import React from 'react';

import style from './RelatedTag.css'

export default class RelatedTagSection extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="related-tag">
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <h1>Hashtag Terkait</h1>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
          <h3>{this.props.related_tag.map((item) => "#" + item + " ")}</h3>
        </div>
      </div>
    )
  }
}
