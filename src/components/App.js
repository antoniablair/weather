import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, } from "react-router-dom";

import Weather from './weather/Weather';
import colors from "../styles/colors";

/**
 * Manages all routes.
 **/

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Weather}/>
        </Switch>
      </div>
    );
  }
}

export default connect()(App);
