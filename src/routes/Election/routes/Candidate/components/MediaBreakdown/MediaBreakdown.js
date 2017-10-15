import React from 'react'
import MediaVerticalList from './MediaVerticalList'

import testData from './data.json';

export default class MediaBreakdown extends React.Component {
  constructor () {
    super()
    this.state = {
      data: testData
    }
  }

  render () {
    return (
      <div>
        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
          <MediaVerticalList title='Positif Media' data={this.state.data.positive_medias} />
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
          <MediaVerticalList title='Negatif Media' data={this.state.data.negative_medias} />
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
          <MediaVerticalList title='Netral Media' data={this.state.data.neutral_medias} />
        </div>

      </div>
    )
  }
}
