import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

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
          }
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
      <div className='row container'>
        <div className='candidate-name'>
          <h2>{this.props.name}</h2>
          <Icon name='instagram' size='huge' />
          <Icon name='facebook' size='huge' />
          <Icon name='twitter' size='huge' />
        </div>

        <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12 img-card'>
          <Card fluid>
            <Image src={this.props.image_url} />
            <Card.Content>
              <Card.Header>{this.props.name}</Card.Header>
              <Card.Meta>#OkeOce</Card.Meta>
              <Card.Description>Moto: Pantang maju sebelum mundur.</Card.Description>
            </Card.Content>
          </Card>
        </div>
        <div className='row chart col-lg-9 col-md-9 col-sm-12 col-xs-12'>
          <Chart container='chart' options={this.state.options} />
        </div>
      </div>
    )
  }
}
