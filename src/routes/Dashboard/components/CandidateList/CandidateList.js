import React from 'react'
import { Icon, Table, Button } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './../../actions'
import { withRouter } from 'react-router-dom'

import data from './candidates.json'

class CandidateList extends React.Component {
  constructor () {
    super()
    this.state = {
      open: false
    }
  }

  handleItemClick = name => this.setState({ activeItem: name })
  show = () => this.setState({ open:true });
  close = () => this.setState({ open:false });

  render () {
    const candidates = data.candidates

    const tableData = candidates.map((candidate) => {
      return (
        <Table.Row key={candidate.id} >
          <Table.Cell>{candidate.id}</Table.Cell>
          <Table.Cell>{candidate.election_id}</Table.Cell>
          <Table.Cell>{''}</Table.Cell>
          <Table.Cell>{candidate.candidate_number}</Table.Cell>
          <Table.Cell>{candidate.name}</Table.Cell>
          <Table.Cell>
            <Button floated='right' icon labelPosition='left' primary size='small'
              onClick={this.show}>
              <Icon name='edit' /> Edit
            </Button>
          </Table.Cell>
        </Table.Row>
      )
    })

    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Id Pemilu</Table.HeaderCell>
              <Table.HeaderCell>Nama Pemilu</Table.HeaderCell>
              <Table.HeaderCell>Nomor Urut</Table.HeaderCell>
              <Table.HeaderCell>Nama Kandidat</Table.HeaderCell>
              <Table.HeaderCell>Edit</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {tableData}
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan='6'>
                <Button floated='right' icon labelPosition='left' primary size='small'>
                  <Icon name='arrow right' /> Next
                </Button>
                <Button floated='left' icon labelPosition='left' primary size='small'>
                  <Icon name='arrow left' /> Prev
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

const CandidateListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CandidateList)

export default withRouter(CandidateListContainer)
