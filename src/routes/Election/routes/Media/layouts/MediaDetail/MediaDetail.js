import React from 'react'
import { Image } from 'react-bootstrap'
import { Container, Grid, Segment, Button } from 'semantic-ui-react'

import Chart from 'components/charts/Chart'
import NewsSection from '../../components/NewsSection'
import RelatedTagSection from '../../components/RelatedTagSection'

import './MediaDetail.css'

var APIClient = require('services/api.js')
var client = new APIClient()

export default class MediaDetail extends React.Component {
  constructor () {
    super()
    this.state = {
      data : [],
      related_tag : ['pemilujakarta', 'pemiludki', 'agussilvi', 'ahokdjarot', 'aniessandi', 'pemilujakarta', 'pemiludki', 'pemilujakarta', 'pemiludki', 'agussilvi', 'ahokdjarot', 'aniessandi', 'pemilujakarta', 'pemiludki', 'pemilujakarta', 'pemiludki', 'agussilvi', 'ahokdjarot', 'aniessandi', 'pemilujakarta', 'pemiludki', 'pemilujakarta', 'pemiludki', 'agussilvi', 'ahokdjarot', 'aniessandi', 'pemilujakarta', 'pemiludki', 'pemilujakarta', 'pemiludki', 'agussilvi', 'ahokdjarot', 'aniessandi', 'pemilujakarta', 'pemiludki', 'pemilujakarta', 'pemiludki', 'agussilvi', 'ahokdjarot', 'aniessandi', 'pemilujakarta', 'pemiludki', 'agussilvi', 'ahokdjarot', 'aniessandi', 'pemilujakarta', 'pemiludki', 'agussilvi', 'ahokdjarot', 'aniessandi'],
      options: {
        positive_stat:
        {
          title: {
            text: 'Tren Berita Positif'
          },
          subtitle: {
            text: 'Jumlah berita positif untuk masing-masing kandidat'
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
            type: 'datetime'
          },
          plotOptions: {
            series: {
              pointStart: Date.UTC(2010, 0, 1),
              pointInterval: 24 * 3600 * 1000 // one day
            }
          },
          series: [{
            name: 'Ahok',
            data: [3, 5, 7, 3, 5]
          }, {
            name: 'Jokowi',
            data: [18, 29, 30, 23, 33]
          }, {
            name: 'Anies',
            data: [10, 23, 13, 24, 23]
          }]
        },
        negative_stat: {
          title: {
            text: 'Tren Berita Negatif'
          },
          subtitle: {
            text: 'Jumlah berita negatif untuk masing-masing kandidat'
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
            type: 'datetime'
          },
          plotOptions: {
            series: {
              pointStart: Date.UTC(2010, 0, 1),
              pointInterval: 24 * 3600 * 1000 // one day
            }
          },
          series: [{
            name: 'Ahok',
            data: [21, 32, 12, 32, 42]
          }, {
            name: 'Jokowi',
            data: [12, 15, 4, 23, 5]
          }, {
            name: 'Anies',
            data: [42, 32, 14, 23, 43]
          }]
        },
        neutral_stat: {
          title: {
            text: 'Tren Berita Netral'
          },
          subtitle: {
            text: 'Jumlah berita netral untuk masing-masing kandidat'
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
            type: 'datetime'
          },
          plotOptions: {
            series: {
              pointStart: Date.UTC(2010, 0, 1),
              pointInterval: 24 * 3600 * 1000 // one day
            }
          },
          series: [{
            name: 'Ahok',
            data: [1, 3, 5, 10, 15]
          }, {
            name: 'Jokowi',
            data: [2, 3, 4, 3, 2]
          }, {
            name: 'Anies',
            data: [6, 4, 8, 10, 12]
          }]
        }
      }
    }
  }

  componentDidMount () {
    this.loadAllNews('dkijakarta', 'kompascom')
  }

  loadAllNews (electionId, mediaId) {
    var self = this
    // TODO change the hardcoded part
    client.loadAllNewsOfMedia(electionId, mediaId)
      .then(function (res) {
        console.log(res)
        self.setState({ data : res.data.news })
      }).catch(function (err) {
        console.log(err)
      })
  }

  render () {
    return (
      <Container>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Row columns={1} textAlign='center'>
              <Grid.Column >
                <Image className='img-logo' src={'http://assets.kompas.com/data/2016/wp/images/logokompascom.png'} responsive />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1} textAlign='center'>
                <Grid.Column  >
                <Button size='huge' basic target='_blank' href='https://facebook.com/'>Kunjungi Website</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid.Row>

          <Grid.Row className='chart' columns={3}>
            <Grid.Column mobile={16} tablet={16} computer={5}>
              <Chart container='chart1' options={this.state.options.positive_stat} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} computer={5}>
              <Chart container='chart2' options={this.state.options.negative_stat} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} computer={5}>
              <Chart container='chart3' options={this.state.options.neutral_stat} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row className='divider related-tag'>
            <RelatedTagSection related_tag={this.state.related_tag} />
          </Grid.Row>

          <Grid.Row>
            <NewsSection data={this.state.data} />
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}
