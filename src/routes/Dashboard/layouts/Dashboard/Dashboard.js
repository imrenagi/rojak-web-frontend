import React from 'react'
import { Segment } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './../../actions'
import { withRouter, Switch, Route } from 'react-router-dom'

import Annotator from '../../components/Annotator'
import ElectionList from '../../components/ElectionList'
import NomineeList from '../../components/NomineeList'
import CandidateList from '../../components/CandidateList'
import DashboardMenu from '../../components/DashboardMenu'

import './dashboard.css'

class Dashboard extends React.Component {
  constructor (props) {
    super(props)
    const { actions } = this.props
    var selectedMenu = this.props.location.pathname.split('/')[2]
    if (selectedMenu !== undefined && selectedMenu !== '') {
      actions.selectMenu(selectedMenu)
    }
  }

  render () {
    const path = this.props.location.pathname
    console.log(path)

    const Candidate = () => (
      <div>
        <h2>Candidate</h2>
      </div>
    )

    const Media = () => (
      <div>
        <h2>Media</h2>
      </div>
    )

    const Articles = () => (
      <div>
        <h2>Articles</h2>
      </div>
    )

    return (
      <div>
        <DashboardMenu />
        <Segment attached='bottom'>
          <Switch>
            <Route path='/dashboard/articles-labeling' component={Annotator} />
            <Route path='/dashboard/elections' component={ElectionList} />
            <Route path='/dashboard/candidates' component={CandidateList} />
            <Route path='/dashboard/nominees' component={NomineeList} />
            <Route path='/dashboard/media' component={Media} />
            <Route path='/dashboard/articles' component={Articles} />
          </Switch>
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
