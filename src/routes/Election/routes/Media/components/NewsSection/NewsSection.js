import React from 'react'
import News from '../News'
import {Grid} from 'semantic-ui-react'

export default class NewsSection extends React.Component {
  render () {
    var newsItem = this.props.data.map((news) => {
      return (
        <News
          title={news.title}
          url={news.url}
          timestamp={news.timestamp}
          content={news.content}
          sentiments={news.sentiments}
        />
      )
    })

    return (
      <Grid.Row>
        {newsItem}
      </Grid.Row>
    )
  }
}
