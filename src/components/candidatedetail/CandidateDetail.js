import React from 'react';
import { Image } from 'react-bootstrap'

import styles from './candidatedetail.css'
import AniesImg from './../../static/img/anies-sandi.jpg'

import Chart from '../charts/Chart'
import MediaBreakdown from '../mediabreakdown/MediaBreakdown'

export default class CandidateDetail extends React.Component {

  constructor() {
    super();
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
              data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
          }, {
              name: 'Negative News',
              data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
          }, {
              name: 'Neutral News',
              data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
          }]
        }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div>
            <div>
              <h1> Anies Baswedan & Sandiaga Unox </h1>
            </div>
            <div>
              <Image className="candidate-card-image" src={AniesImg} responsive/>
            </div>
          </div>
        </div>
        <div className="row chart">
            <Chart container="chart" options={this.state.options} />
        </div>
        <div className="row">
            <MediaBreakdown />
        </div>
      </div>
    );
  }
}
