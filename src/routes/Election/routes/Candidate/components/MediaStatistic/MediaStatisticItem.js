import React from 'react'
import {  Card, Icon, Item, Image, Button, Statistic } from 'semantic-ui-react'
import Chart from 'components/charts/Chart'

var Highcharts = require('highcharts')

import './mediastatisticitem.css'

export default class MediaStatistic extends React.Component {
  constructor () {
    super()
    this.state = {
      options : {
        chart: {
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
                formatter:function() {
                    var pcnt = (this.value / 150) * 100;
                    return Highcharts.numberFormat(pcnt,0,',') + '%';
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
                borderWidth: 0,
                pointPadding: 0,
                groupPadding: 0.2,

                dataLabels:{
                    enabled:true,
                    formatter:function() {
                        var pcnt = (this.y / 150) * 100;
                        return Highcharts.numberFormat(pcnt) + '%';
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
                y: 20
            },
            {
                color: 'red',
                name: 'Negatif',
                y: 40
            },
            {
            		color: 'blue',
                name: 'Neutral',
                y: 90
            }]
        }]
      }
    }
  }

  render () {
    return (
      <Item>
        <div className='media-info-card col-lg-3 col-md-3 col-sm-12 col-xs-12 '>
          <Card fluid className='text-centered'>
            <Image src={this.props.logo_url} />
            <Card.Content>
              <Card.Header>Sentimen Kompas.com terhadap Anies & Sandi</Card.Header>
              <Card.Description>Kompas cukup netral dalam pilkada ini</Card.Description>
            </Card.Content>
          </Card>
          <div >
            <Statistic size='medium' className='text-centered'>
              <Statistic.Value>5,550</Statistic.Value>
              <Statistic.Label>Berita</Statistic.Label>
            </Statistic>
          </div>
          <Button fluid size='huge'>Lihat Berita</Button>
        </div>
        <div className='col-lg-9 col-md-9 col-sm-12 col-xs-12'>
          <Chart container={this.props.container} options={this.state.options} />
        </div>
      </Item>
    )
  }
}
