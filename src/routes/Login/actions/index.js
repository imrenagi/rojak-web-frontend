import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS } from 'utils/types'

var APIClient = require('services/api')
var client = new APIClient()

export function errorHandler (dispatch, error, type) {
  let errorMessage = ''

  if (error.data.error) {
    errorMessage = error.data.error
  } else if (error.data) {
    errorMessage = error.data
  } else {
    errorMessage = error
  }

  if (error.status === 401) {
    dispatch({
      type: type,
      payload: 'You are not authorized to do this. Please login and try again.'
    })
    logout()
  } else {
    dispatch({
      type: type,
      payload: errorMessage
    })
  }
}

const requestLogin = (username, password) => ({
  type: LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  username,
  password
})

const receiveLogin = (user) => ({
  type: LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  accessToken: user.accessToken
})

const loginError = (message) => ({
  type: LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  message
})

export function login (username, password) {
  return dispatch => {
    dispatch(requestLogin(username, password))
    return client.login(username, password)
      .then(function (res) {
        var user = {
          accessToken: res.token,
          refreshToken: res.refresh_token
        }
        localStorage.setItem('access_token', user.accessToken)
        localStorage.setItem('refresh_token', user.refreshToken)
        dispatch(receiveLogin(user))

        window.location.href = '/dashboard'
      }).catch(err => console.log('Error: ', err))
  }
}

const requestLogout = () => ({
  type: LOGOUT_REQUEST,
  isFetching: true,
  isAuthenticated: true
})

const receiveLogout = () => ({
  type: LOGOUT_SUCCESS,
  isFetching: false,
  isAuthenticated: false
})

export function logout () {
  return dispatch => {
    dispatch(requestLogout)
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    dispatch(receiveLogout())
    window.location.href = '/'
  }
}
