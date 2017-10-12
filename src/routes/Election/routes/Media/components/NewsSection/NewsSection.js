import React from 'react'
import News from '../News'

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
      <div className='row'>
        {newsItem}
      </div>)
  }
}
