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
        <Grid.Row columns='equal' only='computer'>
          <Grid.Column>
            <MediaVerticalList title='Positif Media' data={this.state.data.positive_medias} />
          </Grid.Column>
          <Grid.Column>
            <MediaVerticalList title='Negatif Media' data={this.state.data.negative_medias} />
          </Grid.Column>
          <Grid.Column>
            <MediaVerticalList title='Netral Media' data={this.state.data.neutral_medias} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Column tablet={8} only='tablet'>
          <MediaVerticalList title='Positif Media' data={this.state.data.positive_medias} />
        </Grid.Column>
        <Grid.Column tablet={8} only='tablet'>
          <MediaVerticalList title='Negatif Media' data={this.state.data.negative_medias} />
        </Grid.Column>
        <Grid.Column tablet={8} only='tablet'>
          <MediaVerticalList title='Netral Media' data={this.state.data.neutral_medias} />
        </Grid.Column>

        <Grid.Column mobile={16} only='mobile'>
          <MediaVerticalList title='Positif Media' data={this.state.data.positive_medias} />
        </Grid.Column>
        <Grid.Column mobile={16} only='mobile'>
          <MediaVerticalList title='Negatif Media' data={this.state.data.negative_medias} />
        </Grid.Column>
        <Grid.Column mobile={16} only='mobile'>
          <MediaVerticalList title='Netral Media' data={this.state.data.neutral_medias} />
        </Grid.Column>
      </Grid>
    )
  }
}
