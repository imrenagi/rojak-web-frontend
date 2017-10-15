import React from 'react'
import './candidatedetail.css'

import MediaBreakdown from '../MediaBreakdown'
import CandidateInfo from '../CandidateInfo'
import MediaStatistic from '../MediaStatistic'

export default class CandidateDetail extends React.Component {
  constructor () {
    super()
    this.state = {
      data : []
    }
  }

  render () {
    return (
      <div className='container'>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
          <CandidateInfo
            name='Anies & Sandi'
            image_url='http://jakartamajubersama.com/assets/base/img/layout/logos/anies-sandi.jpg' />
        </div>
        <div className='row'>
          <MediaBreakdown />
        </div>
        <MediaStatistic />
      </div>
    )
  }
}
