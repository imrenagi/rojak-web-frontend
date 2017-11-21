const BASE_URL = 'http://private-052434-rojak.apiary-mock.com'
var axios = require('axios')

function callApi (endpoint, authenticated) {
  let token = localStorage.getItem('access_token') || null
  let config = {}

  if (authenticated) {
    if (token) {
      config = {
        headers: { 'Authorization': `Bearer ${token}` }
      }
    } else {
      throw 'No token saved!'
    }
  }

  return axios({
    method: 'get',
    url: `${BASE_URL}/${endpoint}`,
    headers: config.headers,
    responseType: 'json'
  })
}

export const CALL_API = Symbol('Call API')

export default store => next => action => {
  const callAPI = action[CALL_API]

  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint, types, authenticated } = callAPI

  const [ requestType, successType, errorType ] = types

  return callApi(endpoint, authenticated).then(
    response =>
      next({
        response,
        authenticated,
        type: successType
      }),
    error =>
      next({
        error: error.message || 'There was an error.',
        type: errorType
      })
  )
}
