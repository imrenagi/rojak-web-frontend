import React from 'react'
import Chart from 'components/charts/Chart'
import { Route } from 'react-router-dom'
import { Card, Icon, Item, Image, Button, Statistic } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'

var Highcharts = require('highcharts')

import './mediaitem.css'

export default class MediaItem extends React.Component {
  constructor() {
    super()
    this.state = {
      options: {
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Anies-Sandi', 'Jokowi-JK', 'Agus-Silvy'],
            labels: {
              style: {
                fontSize:'17px'
              }
            }
        },
        yAxis: {
            min: 0,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            title: {
                text: 'Total fruit consumption'
            },
            labels: {
               enabled: true
           },

        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Positif',
            data: [400, 20, 14],
            color: 'green',
        }, {
            name: 'Negatif',
            data: [150, 43, 0],
            color: 'red'
        }, {
            name: 'Netral',
            data: [139, 100, 23],
            color: 'blue'
        }]
      }
    }
  }

  render () {
    return (
      <Route render={({ history }) => (
        <Item>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column computer={4} tablet={4} mobile={16} className='media-card'>
                <Card fluid className='text-left'>
                  <Image src={this.props.logo_url} />
                  <Card.Content>
                    <Card.Header>Hashtag Terkait:</Card.Header>
                    <Card.Description>#pemilu #dki #jabar #jokowi</Card.Description>
                  </Card.Content>
                </Card>
                <div >
                  <Statistic size='medium' className='text-centered'>
                    <Statistic.Value>5,550</Statistic.Value>
                    <Statistic.Label>Berita</Statistic.Label>
                  </Statistic>
                </div>
                <Button fluid size='huge'
                  onClick={() => { history.push('/election/dkijakarta/media/1') }}>
                Lihat Detail</Button>
              </Grid.Column>
              <Grid.Column className='chart row' computer={12} tablet={12} mobile={16}>
                <Chart container={this.props.container} options={this.state.options} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Item>
      )} />
    )
  }
}
