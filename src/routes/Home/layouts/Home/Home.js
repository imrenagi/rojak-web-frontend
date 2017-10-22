import React from 'react'

import IndonesiaMap from '../../components/IndonesiaMap'
import CandidateSection from '../../components/CandidateSection'
import MediaSection from '../../components/MediaSection'
import VideoSection from '../../components/VideoSection'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

import PropTypes from 'prop-types'

import './home.css'

class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      isFetching: false
    }
  }

  componentDidMount () {
    this.props.actions.selectElection()
  }

  render () {
    console.log(this.props)
    const { electionId, actions, loading, candidates, media } = this.props
    return (
      <Segment>
        <Dimmer active={loading}>
          <Loader size='huge' content='Loading' />
        </Dimmer>
        <div className='container-fluid'>
          <IndonesiaMap action={actions.selectElection} />
          <CandidateSection electionId={electionId} candidates={candidates} />
          <MediaSection electionId={electionId} media={media} />
          <VideoSection />
        </div>
      </Segment>
    )
  }
}

Home.propTypes = {
  loading: PropTypes.bool.isRequired,
  electionId: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
}

export default Home
