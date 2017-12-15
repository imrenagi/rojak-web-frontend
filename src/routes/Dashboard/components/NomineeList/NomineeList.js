import React from 'react'
import { Icon, Table, Button } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './../../actions'
import { withRouter } from 'react-router-dom'

import data from './nominees.json'
import dateutils from 'utils/dateutils'

class NomineeList extends React.Component {
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
    const nominees = data.nominees

    const tableData = nominees.map((nominee) => {
      return (
        <Table.Row key={nominee.id} >
          <Table.Cell>{nominee.id}</Table.Cell>
          <Table.Cell>{nominee.first_name}</Table.Cell>
          <Table.Cell>{nominee.nick_name}</Table.Cell>
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
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Nama</Table.HeaderCell>
              <Table.HeaderCell>Nama Panggilan</Table.HeaderCell>
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

const NomineeListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NomineeList)

export default withRouter(NomineeListContainer)
