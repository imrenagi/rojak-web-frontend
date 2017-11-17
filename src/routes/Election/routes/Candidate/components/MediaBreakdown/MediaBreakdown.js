import React from 'react'
import MediaVerticalList from './MediaVerticalList'
import { Grid } from 'semantic-ui-react'

import './MediaBreakdown.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './../../actions'

class MediaBreakdown extends React.Component {
  render () {
    const { data } = this.props
    return (
      <Grid className='row'>
        <Grid.Row columns='equal' only='computer'>
          <Grid.Column>
            <MediaVerticalList title='Media Sentiment Positif' data={data.positive_medias} />
          </Grid.Column>
          <Grid.Column>
            <MediaVerticalList title='Media Sentimen Negatif' data={data.negative_medias} />
          </Grid.Column>
          <Grid.Column>
            <MediaVerticalList title='Media Sentimen Netral' data={data.neutral_medias} />
          </Grid.Column>

          <Grid.Column tablet={8} only='tablet'>
            <MediaVerticalList title='Positif Media' data={data.positive_medias} />
          </Grid.Column>
          <Grid.Column tablet={8} only='tablet'>
            <MediaVerticalList title='Negatif Media' data={data.negative_medias} />
          </Grid.Column>
          <Grid.Column tablet={8} only='tablet'>
            <MediaVerticalList title='Netral Media' data={data.neutral_medias} />
          </Grid.Column>

          <Grid.Column mobile={16} only='mobile'>
            <MediaVerticalList title='Positif Media' data={data.positive_medias} />
          </Grid.Column>
          <Grid.Column mobile={16} only='mobile'>
            <MediaVerticalList title='Negatif Media' data={data.negative_medias} />
          </Grid.Column>
          <Grid.Column mobile={16} only='mobile'>
            <MediaVerticalList title='Netral Media' data={data.neutral_medias} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    data: state.candidate.sentimentGroups,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

const MediaBreakdownContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaBreakdown)

export default MediaBreakdownContainer
