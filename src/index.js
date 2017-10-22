import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './containers/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import reducer from './routes/Home/reducers'
import logger from './routes/Home/middlewares/LoggerMiddleware'
import dataService from './routes/Home/middlewares/DataServiceMiddleware'

// const store = createStore(reducer)
const store = createStore(
  reducer,
  applyMiddleware(logger, dataService)
)

render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>)
  , document.getElementById('app'))
