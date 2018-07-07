import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import firebase, { auth, provider } from './firebase.js';

import Home from './Home.js';
import Portfolio from './Portfolio.js';
import HomePage from './HomePage.js';

class App extends Component {
  render() {
    return ( 
      <Router> 
        <div>
          <Route exact path={'/home'} component={Home}/>
          <Route exact path={'/'} component={HomePage}/>
          <Route exact path={'/portfolio'} component={Portfolio}/>
        </div>
      </Router>
    )
  }
}
export default App;