import React from 'react'
import { Image } from 'react-bootstrap'
import CandidateCounter from 'components/CandidateCounter'

export default class MediaSummary extends React.Component {
  constructor () {
    super()
    this.state = {
      counter: {
        positive_media: 2,
        negative_media: 3,
        neutral_media: 5
      }
    }
  }

  render () {
    return (
      <div className='row'>
        <div className='media-card-logo'>
          <Image src='http://assets.kompas.com/data/2016/wp/images/logokompascom.png'
            className='cimg-responsive' />
        </div>
        <div>
          <CandidateCounter counter={this.state.counter} />
        </div>
      </div>
    )
  }
}
