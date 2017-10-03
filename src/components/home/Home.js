import React from 'react'

import ImageHeader from './../imageheader/ImageHeader';
import IndonesiaMap from './../maps/IndonesiaMap';
import HorizontalBarChart from './../charts/HorizontalBarChart';

// TODO: remove me after testing complete
import testData from './../charts/test-data.json';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <IndonesiaMap />
        <HorizontalBarChart chartData={testData}/>
      </div>
    );
  }
}
