import React from 'react'
import { Segment, Menu, Input } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './../../actions'
import { withRouter } from 'react-router-dom'

import Annotator from '../../components/Annotator'

import './dashboard.css'

class Dashboard extends React.Component {
  constructor () {
    super()
    this.state = {
      activeItem: 'articles-labeling'
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state
    return (
      <div>
        <Menu attached='top' tabular className='dashboard-menu'>
          <Menu.Item name='articles-labeling' active={activeItem === 'articles-labeling'} onClick={this.handleItemClick} />
          <Menu.Item name='elections' active={activeItem === 'elections'} onClick={this.handleItemClick} />
          <Menu.Item name='candidates' active={activeItem === 'candidates'} onClick={this.handleItemClick} />
          <Menu.Item name='media' active={activeItem === 'media'} onClick={this.handleItemClick} />
          <Menu.Item name='articles' active={activeItem === 'articles'} onClick={this.handleItemClick} />
          <Menu.Item name='users' active={activeItem === 'users'} onClick={this.handleItemClick} />
          <Menu.Item name='groups' active={activeItem === 'groups'} onClick={this.handleItemClick} />
          <Menu.Item name='permissions' active={activeItem === 'permissions'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input transparent icon={{ name: 'search', link: true }} placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Segment attached='bottom'>
          <Annotator />
        </Segment>
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

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default withRouter(DashboardContainer)
