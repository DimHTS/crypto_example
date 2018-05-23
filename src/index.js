import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'

import reducer from './node_modules/reducers'
import App from './node_modules/App'
import registerServiceWorker from './registerServiceWorker'


const browserHistory = createBrowserHistory({ basename: '/react/crypto_example' })

const middleware = applyMiddleware(thunk, routerMiddleware(browserHistory))
const store = createStore(reducer, composeWithDevTools(middleware))

const history = syncHistoryWithStore(browserHistory, store)


const Root = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
)

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
