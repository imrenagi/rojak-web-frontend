import React from 'react'
import { Grid } from 'semantic-ui-react'
import MediaStatisticItem from './MediaStatisticItem'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './../../actions'

class MediaStatistic extends React.Component {
  render () {
    const { data } = this.props

    var media = Array.prototype
      .concat(data.positive_medias, data.negative_medias, data.neutral_medias)
      .filter((media) => media !== undefined)

    const statItem = media.map((media, idx) => {
      return (
        <MediaStatisticItem
          key={'stat-' + media.id + '-' + idx}
          container={'chart-stat-' + idx}
          data={media} />
      )
    })

    return (
      <Grid divided='vertically'>
        {statItem}
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  data: state.candidate.sentimentGroups
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

const MediaStatisticContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaStatistic)

export default MediaStatisticContainer
