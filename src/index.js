import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './containers/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import reducer from './reducers'
import logger from './middlewares/LoggerMiddleware'
import dataService from './middlewares/DataServiceMiddleware'
import { composeWithDevTools } from 'redux-devtools-extension'

// const store = createStore(reducer)
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(logger, dataService)
  )
)

render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>)
  , document.getElementById('app'))
