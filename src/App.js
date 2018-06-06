import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
//Components
// import Header from "./Header";

// Containers
// import Home from './Home';
import TradeHistory from './containers/TradeHistory';
import NotFound from './containers/NotFound';

class App extends Component {
  render() {
    const baseUrl = process.env.PUBLIC_URL;

    return (
      <div>
        {/* <Header /> */}
        <div className="container">
          <Switch>
            <Route exact path={baseUrl + '/'} component={TradeHistory} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
