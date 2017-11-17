import React from 'react'
import { Image } from 'react-bootstrap'
import { Container, Grid, Button, Dimmer, Loader } from 'semantic-ui-react'

import NewsSection from '../../components/NewsSection'
import RelatedTagSection from '../../components/RelatedTagSection'
import SentimentChart from '../../components/SentimentChart'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from './../../actions'

import PropTypes from 'prop-types'

import './MediaDetail.css'

class MediaDetail extends React.Component {
  constructor () {
    super()
    this.state = {
      data : [],
      related_tag : ['pemilujakarta', 'pemiludki', 'agussilvi', 'ahokdjarot', 'aniessandi', 'pemilujakarta', 'pemiludki', 'pemilujakarta', 'pemiludki', 'agussilvi', 'ahokdjarot', 'aniessandi', 'pemilujakarta', 'pemiludki', 'pemilujakarta', 'pemiludki', 'agussilvi', 'ahokdjarot', 'aniessandi', 'pemilujakarta', 'pemiludki', 'pemilujakarta', 'pemiludki', 'agussilvi', 'ahokdjarot', 'aniessandi', 'pemilujakarta', 'pemiludki', 'pemilujakarta', 'pemiludki', 'agussilvi', 'ahokdjarot', 'aniessandi', 'pemilujakarta', 'pemiludki', 'pemilujakarta', 'pemiludki', 'agussilvi', 'ahokdjarot', 'aniessandi', 'pemilujakarta', 'pemiludki', 'agussilvi', 'ahokdjarot', 'aniessandi', 'pemilujakarta', 'pemiludki', 'agussilvi', 'ahokdjarot', 'aniessandi']
    }
  }

  componentDidMount () {
    const electionId = this.props.match.params.electionId
    const mediaId = this.props.match.params.mediaId
    this.props.actions.loadMediaData(electionId, mediaId)
  }

  render () {
    const { metadata, statistics, loading } = this.props

    return (
      <Container>
        {
          loading
            ? (
              <Dimmer active style={{ minHeight: '500px' }}>
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
                  <NewsSection />
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
  statistics: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  metadata: state.media.metadata,
  articles: state.media.articles,
  articlesMeta: state.media.articlesMeta,
  statistics: state.media.statistics
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

const MediaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaDetail)

export default MediaContainer
