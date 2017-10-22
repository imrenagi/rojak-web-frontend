import React from 'react'
import { Grid } from 'semantic-ui-react'
import CandidateItem from './CandidateItem'

export default class CandidateList extends React.Component {
  render () {
    var candidateNodes = this.props.data.map((candidate) => {
      return (
        <Grid.Column computer={5} tablet={5} mobile={16}>
          <CandidateItem candidate={candidate} />
        </Grid.Column>
      )
    })

    return (
      <Grid columns={3} divided>
        {candidateNodes}
      </Grid>)
  }
}
