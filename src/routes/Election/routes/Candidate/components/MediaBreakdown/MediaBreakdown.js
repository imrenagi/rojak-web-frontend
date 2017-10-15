import React from 'react'
import MediaVerticalList from './MediaVerticalList'
import { Grid } from 'semantic-ui-react'

import './MediaBreakdown.css'

import testData from './data.json';

export default class MediaBreakdown extends React.Component {
  constructor () {
    super()
    this.state = {
      data: testData
    }
  }

  render () {
    return (
      <Grid className='row'>
        <Grid.Column computer={5} mobile={16} tablet={8}>
          <MediaVerticalList title='Positif Media' data={this.state.data.positive_medias} />
        </Grid.Column>
        <Grid.Column computer={5} mobile={16} tablet={8}>
          <MediaVerticalList title='Negatif Media' data={this.state.data.negative_medias} />
        </Grid.Column>
        <Grid.Column computer={5} mobile={16} tablet={8}>
          <MediaVerticalList title='Netral Media' data={this.state.data.neutral_medias} />
        </Grid.Column>
      </Grid>
    )
  }
}
