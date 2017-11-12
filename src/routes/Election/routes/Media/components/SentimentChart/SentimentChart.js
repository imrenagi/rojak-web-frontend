import React from 'react'
import { Grid } from 'semantic-ui-react'
import Chart from 'components/charts/Chart'
import DateUtils from 'utils/dateutils'

export default class SentimentChart extends React.Component {
  constructor () {
    super()
    this.state = {
    }
    this.chartOptions = this.chartOptions.bind(this)
    this.constructChart = this.constructChart.bind(this)
  }

  chartOptions (title, subtitle, xaxis, dataseries) {
    return {
      title: {
        text: title
      },
      subtitle: {
        text: subtitle
      },
      yAxis: {
        title: {
          text: 'Jumlah berita'
        }
      },
      legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom'
      },
      xAxis: {
        categories: xaxis
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      series: dataseries
    }
  }

  constructChart (title, subtitle, stats) {
    if (stats && stats.xAxis) {
      var categories = stats.xAxis.categories.map((timestamp) => {
        return DateUtils.timestampToDate(timestamp/1000)
      })
      var data = stats.series
      return this.chartOptions(title, subtitle, categories, data)
    } else {
      return undefined
    }
  }

  render () {
    const { positive_stat, negative_stat, neutral_stat } = this.props.data
    var positiveChartOpt = this.constructChart('Berita Positif', 'Subtitle', positive_stat)
    var negativeChartOpt = this.constructChart('Berita Negatif', 'Subtitle', negative_stat)
    var neutralChartOpt = this.constructChart('Berita Netral', 'Subtitle', neutral_stat)
    if (positiveChartOpt) {
      return (
        <Grid.Row className='chart' columns={3}>
          <Grid.Column mobile={16} tablet={16} computer={5}>
            <Chart container='chart1'
              options={positiveChartOpt} />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={16} computer={5}>
            <Chart container='chart2'
              options={negativeChartOpt} />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={16} computer={5}>
            <Chart container='chart3'
              options={neutralChartOpt} />
          </Grid.Column>
        </Grid.Row>
      )
    } else {
      return (
        <div>-</div>
      )
    }
  }
}
