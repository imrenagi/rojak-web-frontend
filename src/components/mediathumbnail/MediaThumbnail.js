import React from 'react';
import { Image } from 'react-bootstrap'

import testImg from './../../static/img/shipping-big.png'

export default class MediaThumbnail extends React.Component {

  render() {
    return (
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <Image src={testImg} responsive />
            <h3 className="orange">Test</h3>
            <p>Lihat Detail</p>
          </div>
    );
  }
}
