import React from 'react'
import { Card, Icon, Image, Popup, Button, Grid } from 'semantic-ui-react'

import Chart from 'components/charts/Chart'

import './candidateinfo.css'

export default class CandidateInfo extends React.Component {
  constructor () {
    super()
    this.state = {
      data : [],
      options: {
        title: {
          text: 'Sentiment Trends from all media'
        },

        subtitle: {
          text: 'This belongs to Jokowi and Anies in Pilkada DKI'
        },

        yAxis: {
          title: {
            text: 'Number of News'
          },
          gridLineWidth: 0,
          minorGridLineWidth: 0
        },
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        },
        xAxis: {
          type: 'datetime'
        },
        plotOptions: {
          series: {
            pointStart: Date.UTC(2010, 0, 1),
            pointInterval: 24 * 3600 * 1000 // one day
          }
        },

        series: [{
          name: 'Positive News',
          color: '#00FF00',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }, {
          name: 'Negative News',
          color: '#FF0000',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }, {
          name: 'Neutral News',
          color: '#0000FF',
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        }]
      }
    }
  }

  render () {
    return (
      <Grid.Row>
        <div className='candidate-name'>
          <h1>{this.props.name}</h1>
          <Popup size='huge'
            trigger={<Button circular size='huge' color='instagram' icon='instagram' target='_blank' href='http://www.instagram.com'/>}
            content='View on instagram'
          />
          <Popup size='huge'
            trigger={<Button circular size='huge' color='facebook' icon='facebook f' target='_blank' href='http://www.facebook.com'/>}
            content='View on facebook'
          />
          <Popup size='huge'
            trigger={<Button circular size='huge' color='twitter' icon='twitter' target='_blank' href='http://www.twitter.com'/>}
            content='View on twitter'
          />
        </div>

        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column className='img-card' computer={4} tablet={4} mobile={16}>
              <Card fluid>
                <Image src={this.props.image_url} />
                <Card.Content>
                  <Card.Header>{this.props.name}</Card.Header>
                  <Card.Meta>#OkeOce</Card.Meta>
                  <Card.Description>Moto: Pantang maju sebelum mundur.</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column className='chart row' computer={12} tablet={12} mobile={16}>
              <Chart container='chart' options={this.state.options} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid.Row>
    )
  }
}
