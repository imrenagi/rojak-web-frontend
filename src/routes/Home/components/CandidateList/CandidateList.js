import React from 'react'

import CandidateThumbnail from '../CandidateThumbnail'

export default class CandidateList extends React.Component {
  render () {
    var candidateNodes = this.props.data.map((candidate) => {
      return (
        <CandidateThumbnail name={candidate.name}
          img={candidate.image_url}
          counter={candidate.statistic_summary} />)
    })

    return (<div className='row custom-thumbnail'>
      {candidateNodes}
    </div>)
  }
}
