import Home from '../../layouts/Home'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from './../../actions'

const mapStateToProps = (state) => ({
  loading: state.loading,
  electionId: state.election.electionId,
  candidates: state.election.candidates,
  media: state.election.media
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

const VisibleHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default VisibleHome
