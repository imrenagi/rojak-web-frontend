import React from 'react'
import { List, Tab } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './../../actions'
import { withRouter } from 'react-router-dom'

import Annotator from '../../components/Annotator'

import './dashboard.css'

class Dashboard extends React.Component {
  handleItemClick = name => this.setState({ activeItem: name })

  render () {
    const panes = [
      { menuItem: 'Elections', pane: { key: 'elections', content: 'This is election tab', size: 'massive' } },
      { menuItem: 'Candidates', pane: { key: 'candidates', content: 'This tab has a center aligned text', size: 'massive' } },
      { menuItem: 'Media', pane: { key: 'medias', content: 'Media Tab', size: 'massive' } },
      { menuItem: 'Articles', pane: { key: 'articles', content: 'Article Tab', size: 'massive' } },
      { menuItem: 'Users', pane: { key: 'users', content: 'Users', size: 'massive' } },
      { menuItem: 'Articles Labeling',
        pane: (
          <Tab.Pane key='articles-annotator'>
            <Annotator />
          </Tab.Pane>
        ) }
    ]

    return (
      <Tab className='dashboard-menu' panes={panes} renderActiveOnly={false} />
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
