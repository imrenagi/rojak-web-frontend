import React from 'react'
import './candidatedetail.css'

import Chart from 'components/charts/Chart'
import MediaBreakdown from '../MediaBreakdown'
import CandidateInfo from '../CandidateInfo'

export default class CandidateDetail extends React.Component {
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
      <div className='container'>
        <div className='row candidate-section'>
          <div>
            <h2> Anies Baswedan & Sandiaga Uno </h2>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
            <CandidateInfo
              name='Anies Baswedan'
              image_url='http://cerita.picmix.it/assets/file_upload/admin/images/Quotes_Anies_Baswedan_yang_Patut_Kamu_Renungkan_Untuk_Jadi_Pencerahan_di_Masa_Depan.jpg' />
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
            <CandidateInfo
              name='Sandiaga Uno'
              image_url='http://cdn2.tstatic.net/kaltim/foto/bank/images/sandiaga-uno_20160322_195936.jpg' />
          </div>
        </div>
        <div className='row chart'>
          <Chart container='chart' options={this.state.options} />
        </div>
        <div className='row'>
          <MediaBreakdown />
        </div>
      </div>
    )
  }
}
