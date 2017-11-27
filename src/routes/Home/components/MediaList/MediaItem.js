import React from 'react'
import Chart from 'components/charts/Chart'
import { Card, Grid, Image, Button, Statistic } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as Actions from './../../actions'

import './mediaitem.css'

class MediaItem extends React.Component {
  render () {
    const relatedHashtag = this.props.media.related_tag.slice(0, 4).join(', ')
    const { history } = this.props
    return (
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
            onClick={() => { this.props.actions.pushMediaPage(history, 'dkijakarta', 'kompascom') }}>
              Lihat Detail</Button>
        </Grid.Column>
        <Grid.Column className='chart row' computer={12} tablet={12} mobile={16}>
          <Chart container={this.props.container} options={this.props.options} />
        </Grid.Column>
      </Grid.Row>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
})

const mapStateToProps = (state) => ({})

const MediaItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaItem)

export default withRouter(MediaItemContainer)
