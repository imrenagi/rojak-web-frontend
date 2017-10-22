import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default class CandidateItem extends React.Component {
  render () {
    return (
      <Card>
        <Image src={this.props.candidate.image_url} />
        <Card.Content>
          <Card.Header>
            {this.props.candidate.name}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Joined in 2015
            </span>
          </Card.Meta>
          <Card.Description>
            {this.props.candidate.id}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            {this.props.candidate.statistic.total_news} Berita
          </a>
        </Card.Content>
      </Card>
    )
  }
}
