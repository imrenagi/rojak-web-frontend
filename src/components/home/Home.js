import React from 'react'

import ImageHeader from './../imageheader/ImageHeader';
import IndonesiaMap from './../maps/IndonesiaMap';
import CandidateSection from './../candidatesection/CandidateSection';
import MediaSection from './../mediasection/MediaSection';
import VideoSection from './../videosection/VideoSection';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <IndonesiaMap />
        <CandidateSection />
        <MediaSection />
        <VideoSection />
      </div>
    );
  }
}
