import React, { Component } from 'react'
import Map from 'components/charts/Map'
var Highcharts = require('highcharts')

import geoData from './id-all.geo.json'

import './indonesiamap.css'

const data = [
    ['id-3700', 0],
    ['id-ac', 1],
    ['id-ki', 2],
    ['id-jt', 3],
    ['id-be', 4],
    ['id-bt', 5],
    ['id-kb', 6],
    ['id-bb', 7],
    ['id-ba', 8],
    ['id-ji', 9],
    ['id-ks', 10],
    ['id-nt', 11],
    ['id-se', 12],
    ['id-kr', 13],
    ['id-ib', 14],
    ['id-su', 15],
    ['id-ri', 16],
    ['id-sw', 17],
    ['id-la', 18],
    ['id-sb', 19],
    ['id-ma', 20],
    ['id-nb', 21],
    ['id-sg', 22],
    ['id-st', 23],
    ['id-pa', 24],
    ['id-jr', 25],
    ['id-1024', 26],
    ['id-jk', 27],
    ['id-go', 28],
    ['id-yo', 29],
    ['id-kt', 30],
    ['id-sl', 31],
    ['id-sr', 32],
    ['id-ja', 33]
];

class IndonesiaMap extends Component {
  constructor () {
    super()
    console.log(data)
    this.state = {
      options: {
        title: {
            text: ''
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        series: [{
            data: data,
            mapData: geoData,
            joinBy: ['hc-key'],
            showInLegend: false,
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            color: 'grey',
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
      }
    }
  }

  render () {
    return (
      <div className="indonesia-map">
        <Map container='chart' options={this.state.options} />
      </div>
    )
  }
}

export default IndonesiaMap
