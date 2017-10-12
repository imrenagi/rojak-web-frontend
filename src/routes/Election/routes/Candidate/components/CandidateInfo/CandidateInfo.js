import React from 'react'
import { Image } from 'react-bootstrap'

import './candidateinfo.css'

export default class CandidateInfo extends React.Component {
  render () {
    return (
      <div className='row container-detail'>
        <div>
          <Image className='candidate-detail-card-image'
            src={this.props.image_url}
            responsive />
          <h3>{this.props.name}</h3>
          <Image className='social-media-icon'
            src='https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Facebook_Home_logo_old.svg/1024px-Facebook_Home_logo_old.svg.png' />
          <Image className='social-media-icon'
            src='http://pngimg.com/uploads/instagram/instagram_PNG11.png' />
          <Image className='social-media-icon'
            src='http://www.pngall.com/wp-content/uploads/2016/07/Twitter-Download-PNG.png' />
          <h4 />
        </div>
      </div>
    )
  }
}
