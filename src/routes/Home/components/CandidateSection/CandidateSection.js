import React from 'react'
import { Button, Container, Header } from 'semantic-ui-react'
import CandidateList from '../CandidateList'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './../../actions'
import { withRouter } from 'react-router-dom'

import './candidatesection.css'

class CandidateSection extends React.Component {
  render () {
    const { history } = this.props
    return (
      <Container>
        <Header as='h1' textAlign='center'>Kandidat</Header>
        <p className='center-p'>Kandidat Pemilu {this.props.electionId}</p>
        <CandidateList data={this.props.candidates} />
        <Button fluid size='huge'
          onClick={() => {
            this.props.actions.pushCandidatePage(history, 'dkijakarta', '2')
          }}>
          Temp Candidate Detail Page</Button>
      </Container>
    )
  }
}

CandidateSection.propTypes = {
  electionId: PropTypes.string.isRequired,
  candidates: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  electionId: state.election.electionId,
  candidates: state.election.candidates
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
})

const CandidateSectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CandidateSection)

export default withRouter(CandidateSectionContainer)
