import React from 'react'

import './videosection.css'

export default class VideoSection extends React.Component {
  render () {
    return (
      <div className='wrapper style3 video-section'>
        <div className='row title'>
          <h1>About Rojak</h1>
        </div>
        <div className='row description'>
          <p>Watch this video to understand more about Rojak</p>
        </div>
        <div className='video-thumbnail'>
          <div className='container-video'>
            <div className='embed-responsive embed-responsive-16by9'>
              <iframe
                className='embed-responsive-item'
                src='https://www.youtube.com/embed/3tmd-ClpJxA'
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
