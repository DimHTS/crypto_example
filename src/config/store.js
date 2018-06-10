import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'

import reducer from '../reducers'


// const browserHistory = createBrowserHistory({ basename: '/react/crypto_example' })
const browserHistory = createBrowserHistory()
const middleware = applyMiddleware(thunk, routerMiddleware(browserHistory))

export const store = createStore(reducer, composeWithDevTools(middleware))
export const history = syncHistoryWithStore(browserHistory, store)
