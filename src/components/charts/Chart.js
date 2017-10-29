import React, { Component } from 'react'
import Highcharts from 'highcharts/highmaps'

export default class Chart extends Component {

  // When the DOM is ready, create the chart.
  componentDidMount() {
    // Extend Highcharts with modules
    if (this.props.modules) {
      this.props.modules.forEach(function (module) {
        module(Highcharts)
      })
    }
    // Set container which the chart should render to.
    this.chart = new Highcharts[this.props.type || 'Chart'](
      this.props.container,
      this.props.options
    )
  }

  // Destroy chart before unmount.
  componentWillUnmount() {
    this.chart.destroy()
  }

  render() {
    return (
      <div id={this.props.container} />
    )
  }
}
