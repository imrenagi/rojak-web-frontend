import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './../../actions'
import { withRouter } from 'react-router-dom'

import './login.css'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username:'',
      password:''
    }
    // redirect to dashboard if they already logged in
    const { isAuthenticated, history } = this.props
    if (isAuthenticated) {
      history.push('/dashboard')
    }
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    const { username, password } = this.state
    const { actions } = this.props
    actions.login(username, password)
    this.setState({ username: username, password: password })
  }

  render () {
    const { username, password } = this.state
    return (
      <div className='loginPage'>
        <Form size='huge' onSubmit={this.handleSubmit}>
          <Form.Input label='User Name' placeholder='User name' name='username' value={username} onChange={this.handleChange} />
          <Form.Input label='Password' type='password' placeholder='Password' name='password' value={password} onChange={this.handleChange} />
          <Form.Button content='Login' />
        </Form>
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

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default withRouter(LoginContainer)
