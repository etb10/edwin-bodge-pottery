import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import firebase, { auth, provider } from './firebase.js';

import Home from './Pages/Home.js';
import Portfolio from './Pages/Portfolio.js';
import HomePage from './Pages/HomePage.js';
import PageNotFound from './Pages/PageNotFound.js';


class App extends Component {
  render() {
    return ( 
      <Router> 
        <div>
          <Switch>
            <Route exact path={'/'} component={HomePage}/>
            <Route exact path={'/portfolio'} component={Portfolio}/>
            <Route component={PageNotFound}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;