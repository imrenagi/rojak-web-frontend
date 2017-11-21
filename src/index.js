import React from 'react'
import { render } from 'react-dom'

import App from './containers/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

// import { Router } from 'react-router-redux'
import { Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers'
import routes from './routes'
import logger from './middlewares/LoggerMiddleware'
import dataService from './middlewares/DataServiceMiddleware'
import { composeWithDevTools } from 'redux-devtools-extension'
// const store = createStore(reducer)
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware,
      logger,
      dataService)
  )
)

const history = syncHistoryWithStore(createBrowserHistory(), store)

render((
  <Provider store={store}>
    <Router history={history} routes={routes}>
      <App />
    </Router>
  </Provider>)
  , document.getElementById('app'))
