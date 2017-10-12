import React from 'react'

// import ImageHeader from '../../components/ImageHeader'
import IndonesiaMap from '../../components/IndonesiaMap'
import CandidateSection from '../../components/CandidateSection'
import MediaSection from '../../components/MediaSection'
import VideoSection from '../../components/VideoSection'

export default class Home extends React.Component {
  render () {
    return (
      <div className='container-fluid'>
        <IndonesiaMap />
        <CandidateSection />
        <MediaSection />
        <VideoSection />
      </div>
    )
  }
}
