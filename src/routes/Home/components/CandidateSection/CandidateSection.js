import React from 'react'
import './candidatesection.css'
import { Route } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default class CandidateSection extends React.Component {
  constructor () {
    super()
    this.state = { data : [] }
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
              <p>Kandidat yang turut meramaikan pemilu</p>
            </div>
            <Button fluid size='huge'
              onClick={() => { history.push('/election/dkijakarta/candidate/1') }}>
            Temp Candidate Detail Page</Button>
          </div>
        </div>
      )} />

    )
  }
}
