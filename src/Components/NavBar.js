import React, { Component } from 'react';
import '../App.css';

class NavBar extends Component {

  constructor(props) {
    super(props);
    var {home, portfolio, recent_work} = "";
    if(props.name == "portfolio") {
      portfolio = "active";
    } else if(props.name == "home") {
      home = "active";
    } if(props.name == "recent_work") {
      recent_work = "active";
    }
    this.state = {
      home, portfolio, recent_work
    }
  }
 
  render() {
    return ( 
                  <nav id="nav"> 
                    <ul className="links">
                      <li className={this.state.home}><a href="/">Home</a></li>
                      <li className={this.state.recent_work}><a href="recent_work">Recent Work</a></li>
                      <li className={this.state.portfolio}><a href="portfolio">AP Portfolio</a></li>
                    </ul>
                    <ul className="icons">
                      <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                      <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                      <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                      <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
                    </ul>
                  </nav>
    );
  }
}
export default NavBar;