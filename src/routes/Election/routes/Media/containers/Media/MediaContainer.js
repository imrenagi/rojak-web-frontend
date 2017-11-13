import MediaDetail from './../../layouts/MediaDetail'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from './../../actions'

const mapStateToProps = (state) => ({
  loading: state.loading,
  metadata: state.media.metadata,
  articles: state.media.articles,
  articlesMeta: state.media.articlesMeta,
  statistics: state.media.statistics
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

const MediaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaDetail)

export default MediaContainer
