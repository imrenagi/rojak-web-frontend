import './mediastatisticitem.css'

import React from 'react'
import { Card, Item, Image, Button, Statistic } from 'semantic-ui-react'
import Chart from 'components/charts/Chart'

var Highcharts = require('highcharts')

export default class MediaStatistic extends React.Component {
  constructor () {
    super()
    this.chartOptions = this.chartOptions.bind(this)
  }

  chartOptions (pos, neg, neut) {
    return {
      chart: {
        height: 250,
        type: 'bar'
      },
      title: {
        text: ''
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        labels: {
          formatter: function () {
            return Highcharts.numberFormat(this.value, 0, ',')
          }
        },
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        title: {
          text: 'Total berita'
        }
      },
      legend: {
        layout: 'vertical',
        enabled: false
      },
      plotOptions: {
        series: {
          pointWidth: 20,
          borderWidth: 0,
          pointPadding: 0,
          groupPadding: 0.2,
          dataLabels:{
            enabled:false,
            formatter: function () {
              return Highcharts.numberFormat(this.y, 0, ',') + ' Berita'
            }
          }
        }
      },
      tooltip: {
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> berita<br/>'
      },
      series: [{
        colorByPoint: true,
        data: [{
          color: 'green',
          name: 'Positif',
          y: pos
        },
        {
          color: 'red',
          name: 'Negatif',
          y: neg
        },
        {
          color: 'blue',
          name: 'Neutral',
          y: neut
        }]
      }]
    }
  }

  render () {
    const { data } = this.props
    return (
      <Item id={data.logo_url}>
        <div className='media-info-card col-lg-3 col-md-3 col-sm-12 col-xs-12 '>
          <Card fluid>
            <Image src={data.logo_url} />
            <Card.Content>
              <Card.Header>{data.name}</Card.Header>
              <Card.Description>Kompas cukup netral dalam pilkada ini</Card.Description>
            </Card.Content>
          </Card>
          <div >
            <Statistic size='small' className='text-centered'>
              <Statistic.Value>{data.statistic.total_news}</Statistic.Value>
              <Statistic.Label>Berita</Statistic.Label>
            </Statistic>
          </div>
          <Button fluid size='huge'>Lihat Berita</Button>
        </div>
        <div className='col-lg-9 col-md-9 col-sm-12 col-xs-12'>
          <Chart container={this.props.container} options={this.chartOptions(
            data.statistic.total_pos_news,
            data.statistic.total_neg_news,
            data.statistic.total_neutral_news
          )} />
        </div>
      </Item>
    )
  }
}
