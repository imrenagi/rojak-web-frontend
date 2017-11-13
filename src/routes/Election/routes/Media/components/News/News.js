import React from 'react'
import { Item, Label } from 'semantic-ui-react'
import './news.css'

export default class News extends React.Component {
  joinArr (arr) {
    return arr.join(', ')
  }

  render () {
    const sentimentLabel = this.props.sentiments.map((t) => {
      return (
        <Label size='gray' color='blue' horizontal>{t}</Label>
      )
    })
    return (
      <Item className='article-list'>
        <Item.Content>
          <Item.Header as='a' className='news-title'>
            <a href={this.props.url}>
              <h3>{this.props.title}</h3>
            </a>
          </Item.Header>
          <Item.Meta className='news-url'>
            {this.props.url}
          </Item.Meta>
          <Item.Description className='news-content'>
            <span className='bold'>{this.props.timestamp} - </span>
            {this.props.content}
          </Item.Description>
          {sentimentLabel}
        </Item.Content>
      </Item>
    )
  }
}
