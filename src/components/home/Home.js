import React from 'react'

import ImageHeader from './../imageheader/ImageHeader'
import IndonesiaMap from './../maps/IndonesiaMap'

export default class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <IndonesiaMap />
      </div>
    );
  }
}
