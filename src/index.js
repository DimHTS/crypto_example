import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'

import reducer from './reducers'
import App from './App'

import './config'
// import registerServiceWorker from './registerServiceWorker'

// const browserHistory = createBrowserHistory({ basename: '/react/crypto_example' })
const browserHistory = createBrowserHistory()

const middleware = applyMiddleware(thunk, routerMiddleware(browserHistory))
const store = createStore(reducer, composeWithDevTools(middleware))

const history = syncHistoryWithStore(browserHistory, store)


const Root = (
  <div>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </div>
)

ReactDOM.render(Root, document.getElementById('root'));
// registerServiceWorker();
