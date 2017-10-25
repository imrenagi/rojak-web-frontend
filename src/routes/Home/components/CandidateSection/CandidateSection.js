import React from 'react'
import { Route } from 'react-router-dom'
import { Button, Container, Header } from 'semantic-ui-react'
import CandidateList from '../CandidateList'
import PropTypes from 'prop-types'

import './candidatesection.css'

class CandidateSection extends React.Component {
  render () {
    return (
      <Route render={({ history }) => (
        <Container>
          <Header as='h1' textAlign='center'>Kandidat</Header>
          <p className='center-p'>Kandidat Pemilu {this.props.electionId}</p>
          <CandidateList data={this.props.candidates} />
          <Button fluid size='huge'
            onClick={() => { history.push('/election/dkijakarta/candidate/1') }}>
            Temp Candidate Detail Page</Button>
        </Container>
      )} />
    )
  }
}

CandidateSection.propTypes = {
  electionId: PropTypes.string.isRequired,
  candidates: PropTypes.array.isRequired
}

export default CandidateSection
