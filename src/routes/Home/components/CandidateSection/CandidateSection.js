import React from 'react'
import { Route } from 'react-router-dom'
import { Button, Container } from 'semantic-ui-react'
import CandidateList from '../CandidateList'
import PropTypes from 'prop-types'

class CandidateSection extends React.Component {
  render () {
    return (
      <Route render={({ history }) => (
        <div>
          <h1>Kandidat</h1>
          <p>Kandidat Pemilu {this.props.electionId}</p>
          <Container>
            <CandidateList data={this.props.candidates} />
            <Button fluid size='huge'
              onClick={() => { history.push('/election/dkijakarta/candidate/1') }}>
              Temp Candidate Detail Page</Button>
          </Container>
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
