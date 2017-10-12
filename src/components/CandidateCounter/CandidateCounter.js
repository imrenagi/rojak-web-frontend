import React from 'react'
import './candidatecounter.css'

export default class CandidateCounter extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='leftpane'>
          <h1>{this.props.counter.positive_media}</h1>
          <p># Positive Media</p>
        </div>
        <div className='middlepane'>
          <h1>{this.props.counter.neutral_media}</h1>
          <p># Neutral Media</p>
        </div>
        <div className='rightpane'>
          <h1>{this.props.counter.negative_media}</h1>
          <p># Negative Media</p>
        </div>
      </div>
    )
  }
}
