import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import './config'
import { store, history } from './config/store'
import App from './App'

// import registerServiceWorker from './registerServiceWorker'

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
