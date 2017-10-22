import React from 'react'
import './candidatesection.css'
import { Route } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import CandidateList from '../CandidateList'
import PropTypes from 'prop-types'

class CandidateSection extends React.Component {
  render () {
    return (
      <Route render={({ history }) => (
        <div className='wrapper style1 candidate'>
          <div className='container-atas'>
            <div className='row title'>
              <h1>Kandidat</h1>
            </div>
            <div className='row description'>
              <p>Kandidate Pemilu {this.props.electionId}</p>
            </div>
            <CandidateList data={this.props.candidates} />
            <Button fluid size='huge'
              onClick={() => { history.push('/election/dkijakarta/candidate/1') }}>
            Temp Candidate Detail Page</Button>
          </div>
        </div>
      )} />
    )
  }
}

CandidateSection.propTypes = {
  electionId: PropTypes.string.isRequired,
  candidates: PropTypes.array.isRequired
}

export default CandidateSection
