import React from 'react'
import { Segment } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './../../actions'
import { withRouter, BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Annotator from '../../components/Annotator'
import DashboardMenu from '../../components/DashboardMenu'

import './dashboard.css'

class Dashboard extends React.Component {
  render () {
    return (
      <div>
        <DashboardMenu />
        <Router>
          <Segment attached='bottom'>
            <Switch>
              <Route exact path='/dashboard' component={Annotator} />
              <Route path='/dashboard/articles-labeling' component={Annotator} />
              <Route path='/dashboard/elections' render={() => <h1>Election</h1>} />
              <Route path='/dashboard/candidates' render={() => <h1>Candidate</h1>} />
              <Route path='/dashboard/medias' render={() => <h1>Media</h1>} />
              <Route path='/dashboard/articles' render={() => <h1>Articles</h1>} />
            </Switch>
          </Segment>
        </Router>
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
