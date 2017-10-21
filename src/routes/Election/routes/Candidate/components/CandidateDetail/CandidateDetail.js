import React from 'react'
import './candidatedetail.css'
import { Container, Divider } from 'semantic-ui-react'

import MediaBreakdown from '../MediaBreakdown'
import CandidateInfo from '../CandidateInfo'
import MediaStatistic from '../MediaStatistic'

export default class CandidateDetail extends React.Component {
  constructor () {
    super()
    this.state = {
      data : []
    }
  }

  render () {
    return (
      <Container>
        <CandidateInfo
          name='Anies & Sandi'
          image_url='http://jakartamajubersama.com/assets/base/img/layout/logos/anies-sandi.jpg' />
        <MediaBreakdown />
        <Divider section />
        <MediaStatistic />
      </Container>
    )
  }
}
