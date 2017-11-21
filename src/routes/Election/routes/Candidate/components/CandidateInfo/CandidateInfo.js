import React from 'react'
import { Card, Image, Popup, Button, Grid } from 'semantic-ui-react'
import Chart from 'components/charts/Chart'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './../../actions'
import DateUtils from 'utils/dateutils'

import './candidateinfo.css'

class CandidateInfo extends React.Component {
  constructor () {
    super()
    this.constructChart = this.constructChart.bind(this)
    this.chartOptions = this.chartOptions.bind(this)
  }

  chartOptions (candidateName, categories, series) {
    return {
      title: {
        text: 'Sentimen Media Online'
      },
      subtitle: {
        text: candidateName
      },
      yAxis: {
        title: {
          text: 'Jumlah Berita'
        },
        gridLineWidth: 0,
        minorGridLineWidth: 0
      },
      legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom'
      },
      xAxis: {
        categories: categories
      },
      series: series
    }
  }

  constructChart (candidateName, xaxis, series) {
    if (xaxis) {
      var categories = xaxis.categories.map((timestamp) => {
        return DateUtils.timestampToDate(timestamp / 1000)
      })
      return this.chartOptions(candidateName, categories, series)
    } else {
      return this.chartOptions(candidateName, [], [])
    }
  }

  render () {
    const { data, statistics } = this.props
    return (
      <Grid.Row>
        <div className='candidate-name'>
          <h1>{data.name}</h1>
          <Popup size='huge'
            trigger={<Button circular size='huge' color='instagram' icon='instagram' target='_blank' href={'https://www.instagram.com/' + data.instagram_id} />}
            content='View on instagram'
          />
          <Popup size='huge'
            trigger={<Button circular size='huge' color='facebook' icon='facebook f' target='_blank' href={data.facebook_url} />}
            content='View on facebook'
          />
          <Popup size='huge'
            trigger={<Button circular size='huge' color='twitter' icon='twitter' target='_blank' href={'https://www.twitter.com/' + data.twitter_id} />}
            content='View on twitter'
          />
        </div>

        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column className='img-card' computer={4} tablet={4} mobile={16}>
              <Card fluid>
                <Image src={data.image_url} />
                <Card.Content>
                  <Card.Header>{data.name}</Card.Header>
                  <Card.Meta>#OkeOce</Card.Meta>
                  <Card.Description>Moto: Pantang maju sebelum mundur.</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column className='chart' computer={12} tablet={12} mobile={16}>
              <Chart container='chart' options={this.constructChart(data.name,
                statistics.xAxis,
                statistics.series)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid.Row>
    )
  }
}

CandidateInfo.propTypes = {
  data: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  data: state.candidate.data,
  statistics: state.candidate.statistics
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

const CandidateInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CandidateInfo)

export default CandidateInfoContainer
