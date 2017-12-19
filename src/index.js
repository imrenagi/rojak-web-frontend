import React from 'react'
import { render } from 'react-dom'

import App from './containers/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers'
import logger from './middlewares/LoggerMiddleware'
import dataService from './middlewares/DataServiceMiddleware'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      logger,
      dataService)
  )
)

render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>)
  , document.getElementById('app'))
