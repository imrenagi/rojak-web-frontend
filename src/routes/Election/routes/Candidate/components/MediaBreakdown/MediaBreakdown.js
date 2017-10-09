import React from 'react'
import MediaVerticalList from './MediaVerticalList'

export default class MediaBreakdown extends React.Component {
  constructor () {
    super()
    this.state = {
      data: [1, 2, 3, 4]
    }
  }

  render () {
    return (
      <div>
        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
          <MediaVerticalList data={this.state.data} />
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
          <MediaVerticalList data={this.state.data} />
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
          <MediaVerticalList data={this.state.data} />
        </div>

      </div>
    )
  }
}
