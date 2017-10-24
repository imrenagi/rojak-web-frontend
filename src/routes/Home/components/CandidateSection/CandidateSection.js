import React from 'react'
import './candidatesection.css'
import { Route } from 'react-router-dom'
import { Button, Container } from 'semantic-ui-react'
import CandidateList from '../CandidateList'

export default class CandidateSection extends React.Component {
  constructor () {
    super()
    this.state = {
      data : {
        candidate : [1, 2, 3]
      }
    }
  }

  componentDidMount () {
    this.loadAllCandidate()
  }

  loadAllCandidate () {

  }

  render () {
    return (
      <Route render={({ history }) => (
        <div className='wrapper style1 candidate'>
          <div className='container-atas'>
            <div className='row title'>
              <h1>Kandidat</h1>
            </div>
            <div className='row description'>
              <p>Pasangan Kandidat di Pilkada Jawa Barat 2018</p>
            </div>
            <Container>
              <CandidateList data={this.state.data.candidate} />
              <Button fluid size='huge'
                onClick={() => { history.push('/election/dkijakarta/candidate/1') }}>
                Temp Candidate Detail Page
              </Button>
            </Container>
          </div>
        </div>
      )} />

    )
  }
}
