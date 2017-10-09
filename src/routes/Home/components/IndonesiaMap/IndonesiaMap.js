import React, { Component } from 'react'
import { geoMercator, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'

class IndonesiaMap extends Component {
  constructor () {
    super()
    this.state = {
      worlddata: [],
      cities: [],
    }

    this.handleCountryClick = this.handleCountryClick.bind(this)
    this.handleMarkerClick = this.handleMarkerClick.bind(this)
  }
  projection () {
    return geoMercator()
      .scale(1400)
      .translate([ -2250, 450 / 2 ])
  }
  handleCountryClick (countryIndex) {
    console.log('Clicked on country: ', this.state.worlddata[countryIndex])
  }
  handleMarkerClick (i) {
    console.log('Marker XXXX: ', this.state.cities[i])
  }
  componentDidMount () {
    fetch('./public/indonesia.json')
      .then(response => {
        if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`)
          return
        }
        response.json().then(worlddata => {
          console.log(worlddata)
          this.setState({
            worlddata: feature(worlddata, worlddata.objects.idn_provinces).features,
          })
        })
      })
  }
  render () {
    return (
      <svg width={1400} height={450} viewBox='0 0 1400 450'>
        <g className='countries'>
          {
            this.state.worlddata.map((d, i) => (
              <path
                key={`path-${i}`}
                d={geoPath().projection(this.projection())(d)}
                className='country'
                fill={`rgba(38,50,56,${1 / this.state.worlddata.length * i})`}
                stroke='#FFFFFF'
                strokeWidth={0.5}
                onClick={() => this.handleCountryClick(i)}
              />
            ))
          }
        </g>
      </svg>
    )
  }
}

export default IndonesiaMap
