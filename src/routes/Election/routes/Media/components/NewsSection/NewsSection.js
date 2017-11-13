import React from 'react'
import News from '../News'
import { Item } from 'semantic-ui-react'
import Pagination from 'components/Pagination'

export default class NewsSection extends React.Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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

    var meta = {
      page: 5,
      total_pages: 15,
      total_items: 50
    }

    return (
      <Item.Group>
        {newsItem}
        <Pagination meta={meta} />
      </Item.Group>
    )
  }
}
