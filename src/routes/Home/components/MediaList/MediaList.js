import React from 'react'
import { Grid } from 'semantic-ui-react'
import MediaItem from './MediaItem'

export default class MediaList extends React.Component {
  constructor () {
    super()
    this.chartOptions = this.chartOptions.bind(this)
  }

  chartOptions (candidates, posArr, negArr, neutralArr) {
    return {
      chart: {
        type: 'bar'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: candidates,
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
          text: 'Total Berita'
        },
        labels: {
          enabled: true
        }
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
        data: posArr,
        color: '#4CAF50',
      }, {
        name: 'Negatif',
        data: negArr,
        color: '#F44336'
      }, {
        name: 'Netral',
        data: neutralArr,
        color: '#2196F3'
      }]
    }
  }

  render () {
    var mediaNodes = this.props.data.map((media) => {
      const candidates = media.candidates
        .map((candidate) => {
          return candidate.detail.short_name
        })
      const positiveNews = media.candidates
        .map((candidate) => {
          return candidate.statistic['total_pos_news']
        })
      const negativeNews = media.candidates
        .map((candidate) => {
          return candidate.statistic['total_neg_news']
        })
      const neutralNews = media.candidates
        .map((candidate) => {
          return candidate.statistic['total_neutral_news']
        })
      const chartOptions = this.chartOptions(candidates, positiveNews,
        negativeNews, neutralNews)
      return (
        <MediaItem
          media={media}
          container={media.name}
          options={chartOptions}
        />
      )
    })

    return (
      <div>
        <Grid divided='vertically'>
          {mediaNodes}
        </Grid>
      </div>
    )
  }
}
