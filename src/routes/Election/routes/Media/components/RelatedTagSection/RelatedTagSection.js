import React from 'react'

export default class RelatedTagSection extends React.Component {
  render () {
    return (
      <div>
        <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12'>
          <h1>Hashtag Terkait</h1>
        </div>
        <div className='col-lg-9 col-md-9 col-sm-12 col-xs-12'>
          <h3>{this.props.related_tag.map((item) => '#' + item + ' ')}</h3>
        </div>
      </div>
    )
  }
}
