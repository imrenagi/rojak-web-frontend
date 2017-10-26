import React from 'react'
import Chart from 'components/charts/Chart'
import { Route } from 'react-router-dom'
import { Card, Grid, Image, Button, Statistic } from 'semantic-ui-react'

import './mediaitem.css'

export default class MediaItem extends React.Component {
  render () {
    const relatedHashtag = this.props.media.related_tag.slice(0, 4).join(', ')

    return (
      <Route render={({ history }) => (
        <Grid.Row columns={2}>
          <Grid.Column computer={4} tablet={4} mobile={16} className='media-card'>
            <Card fluid className='text-left'>
              <Image src={this.props.media.logo_url} />
              <Card.Content>
                <Card.Header>Hashtag Terkait:</Card.Header>
                <Card.Description>{relatedHashtag}</Card.Description>
              </Card.Content>
            </Card>
            <div >
              <Statistic size='small' className='text-centered'>
                <Statistic.Value>{this.props.media.total_news}</Statistic.Value>
                <Statistic.Label>Berita</Statistic.Label>
              </Statistic>
            </div>
            <Button fluid size='huge'
              onClick={() => { history.push('/election/dkijakarta/media/1') }}>
              Lihat Detail</Button>
          </Grid.Column>
          <Grid.Column className='chart row' computer={12} tablet={12} mobile={16}>
            <Chart container={this.props.container} options={this.props.options} />
          </Grid.Column>
        </Grid.Row>
      )} />
    )
  }
}
