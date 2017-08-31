import React from 'react';

export default class VideoSection extends React.Component {

  render() {
    return (
        <div className="wrapper style1 video-section">
          <div className="row title">
            <h1>About Rojak</h1>
          </div>
          <div className="row description">
            <p>Watch this video to understand more about Rojak</p>
          </div>
          <div className="row video-thumbnail">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/9biIOtEYeHc"></iframe>
            </div>
          </div>
        </div>
    );
  }
}
