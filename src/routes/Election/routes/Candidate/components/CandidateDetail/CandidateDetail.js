import React from 'react'
import './candidatedetail.css'
import { Container, Divider, Dimmer, Loader } from 'semantic-ui-react'

import MediaBreakdown from '../MediaBreakdown'
import CandidateInfo from '../CandidateInfo'
import MediaStatistic from '../MediaStatistic'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './../../actions'

class CandidateDetail extends React.Component {
  componentDidMount () {
    const { actions } = this.props
    const electionId = this.props.match.params.electionId
    const candidateId = this.props.match.params.candidateId
    actions.loadCandidateData(electionId, candidateId)
  }

  render () {
    const { loading } = this.props
    return (
      <Container>
        {
          loading
            ? (
              <Dimmer active style={{ minHeight: '500px' }}>
                <Loader active size='huge' content='Loading' />
              </Dimmer>
            )
            : (
              <div>
                <CandidateInfo />
                <MediaBreakdown />
                <Divider section />
                <MediaStatistic />
              </div>
            )
        }
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

const CandidateDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CandidateDetail)

export default CandidateDetailContainer
