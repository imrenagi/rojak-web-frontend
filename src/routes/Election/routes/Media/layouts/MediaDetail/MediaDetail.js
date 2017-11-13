import React from 'react'
import { Image } from 'react-bootstrap'
import { Container, Grid, Button, Dimmer, Loader } from 'semantic-ui-react'

import NewsSection from '../../components/NewsSection'
import RelatedTagSection from '../../components/RelatedTagSection'
import SentimentChart from '../../components/SentimentChart'

import PropTypes from 'prop-types'

import './MediaDetail.css'

class MediaDetail extends React.Component {
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
    this.loadArticles = this.loadArticles.bind(this)
  }

  componentDidMount () {
    const electionId = this.props.match.params.electionId
    const mediaId = this.props.match.params.mediaId
    this.props.actions.loadMediaData(electionId, mediaId)
  }

  loadArticles (page) {
    console.log(page + ' -------- ')
    const electionId = this.props.match.params.electionId
    const mediaId = this.props.match.params.mediaId
    this.props.actions.loadMediaArticles(electionId, mediaId, page)
  }

  render () {
    const { metadata, articles, articlesMeta, statistics, loading } = this.props

    return (
      <Container>
        {
          loading
            ? (
              <Dimmer active fluid style={{ minHeight: '500px' }}>
                <Loader active size='huge' content='Loading' />
              </Dimmer>
            )
            : (
              <Grid>
                <Grid.Row columns={1}>
                  <Grid.Row columns={1} textAlign='center'>
                    <Grid.Column >
                      <Image className='img-logo' src={metadata.logo_url} responsive />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns={1} textAlign='center'>
                    <Grid.Column>
                      <Button size='huge' basic target='_blank' href={metadata.web_url}>Kunjungi Website</Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid.Row>

                <SentimentChart data={statistics} />

                <Grid.Row className='divider related-tag'>
                  <RelatedTagSection related_tag={this.state.related_tag} />
                </Grid.Row>

                <Grid.Row>
                  <NewsSection
                    data={articles}
                    meta={articlesMeta}
                    loadArticles={this.loadArticles}
                  />
                </Grid.Row>
              </Grid>
            )
        }
      </Container>
    )
  }
}

MediaDetail.propTypes = {
  actions: PropTypes.object.isRequired,
  metadata: PropTypes.object.isRequired,
  articles: PropTypes.array.isRequired,
  articlesMeta: PropTypes.object.isRequired,
  statistics: PropTypes.object.isRequired,
}

export default MediaDetail
