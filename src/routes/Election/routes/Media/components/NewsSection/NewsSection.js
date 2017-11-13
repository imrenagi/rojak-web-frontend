import React from 'react'
import News from '../News'
import { Item } from 'semantic-ui-react'
import Pagination from 'components/Pagination'

import PropTypes from 'prop-types'

class NewsSection extends React.Component {
  handleItemClick = (page) => console.log(page)

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
        <Pagination meta={this.props.meta} onSelectorClicked={this.props.loadArticles} />
      </Item.Group>
    )
  }
}

NewsSection.propTypes = {
  meta: PropTypes.object.isRequired
}

export default NewsSection
