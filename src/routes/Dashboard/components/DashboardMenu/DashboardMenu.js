import React from 'react'
import { Menu, Input } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as Actions from './../../actions'

class DashboardMenu extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = {
      activeItem: props.selectedMenu
    }
  }

  handleItemClick = (e, { name }) => {
    const { actions, history } = this.props
    actions.selectMenu(name)
    this.setState({ activeItem: name })
    switch (name) {
      case 'elections':
        // actions.goToElectionDashboard()
        history.push('/dashboard/elections')
        break
      case 'articles-labeling':
        // actions.goToArticlesLabelingDashboard()
        history.push('/dashboard/articles-labeling')
        break
      case 'candidates':
        // actions.goToCandidateDashboard()
        break
      case 'media':
        // actions.goToMediaDashboard()
        break
      case 'articles':
        // actions.goToArticlesDashboard()
        break
      case 'users':
        // actions.goToUserDashboard()
        break
      case 'permissions':
        // actions.goToPermissionDashboard()
        break
      case 'groups':
        // actions.goToGroupsDashboard()
        break
      default:
        break
    }
  }

  render () {
    const { activeItem } = this.state
    return (
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
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  selectedMenu: state.dashboard.selectedMenu
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

const DashboardMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardMenu)

export default withRouter(DashboardMenuContainer)
