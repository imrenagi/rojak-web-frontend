import React from 'react'
import { Icon, Table, Button } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './../../actions'
import { withRouter } from 'react-router-dom'

import data from './elections.json'
import dateutils from 'utils/dateutils'

class ElectionList extends React.Component {
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
    const elections = data.elections

    const tableData = elections.map((election) => {
      return (
        <Table.Row key={election.id} >
          <Table.Cell>{election.id}</Table.Cell>
          <Table.Cell>{election.name}</Table.Cell>
          <Table.Cell>{dateutils.timestampToDate(election.election_date)}</Table.Cell>
          <Table.Cell>{election.election_type}</Table.Cell>
          <Table.Cell>
            <Button floated='right' icon labelPosition='left' primary size='small'
              onClick={this.show}>
              <Icon name='edit' /> Edit
            </Button>
          </Table.Cell>
        </Table.Row>
      )
    })

    const { open } = this.state
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>#</Table.HeaderCell>
              <Table.HeaderCell>Nama</Table.HeaderCell>
              <Table.HeaderCell>Tanggal Pemilu</Table.HeaderCell>
              <Table.HeaderCell>Tipe</Table.HeaderCell>
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

const ElectionListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ElectionList)

export default withRouter(ElectionListContainer)
