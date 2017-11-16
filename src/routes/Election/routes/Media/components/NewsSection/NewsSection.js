import React from 'react'
import News from '../News'
import { Item } from 'semantic-ui-react'
import Pagination from 'components/Pagination'

import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from './../../actions'

class NewsSection extends React.Component {
  handleItemClick = (page) => {
    const { electionId, mediaId } = this.props
    this.props.actions.loadMediaArticles(electionId, mediaId, page)
  }

  render () {
    var newsItem = this.props.data.map((news) => {
      return (
        <News
          key={news.id}
          title={news.title}
          url={news.url}
          timestamp={news.timestamp}
          content={news.content}
          sentiments={news.sentiments}
        />
      )
    })

    return (
      <Item.Group>
        {newsItem}
        <Pagination meta={this.props.meta} onSelectorClicked={this.handleItemClick} />
      </Item.Group>
    )
  }
}

NewsSection.propTypes = {
  meta: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  data: state.media.articles,
  meta: state.media.articlesMeta,
  electionId: state.media.electionId,
  mediaId: state.media.mediaId
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

const MediaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsSection)

export default MediaContainer
