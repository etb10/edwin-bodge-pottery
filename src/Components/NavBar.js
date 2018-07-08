import React, { Component } from 'react';
import '../App.css';

class NavBar extends Component {

  constructor(props) {
    super(props);
    var {home, portfolio, elements} = "";
    if(props.name == "portfolio") {
      portfolio = "active";
    } else if(props.name == "home") {
      home = "active";
    } if(props.name == "elements") {
      elements = "active";
    }
    this.state = {
      home, portfolio, elements
    }
  }
 
  render() {
    return ( 
                  <nav id="nav"> 
                    <ul className="links">
                      <li className={this.state.home}><a href="/">Home</a></li>
                      <li className={this.state.portfolio}><a href="portfolio">AP Portfolio</a></li>
                      <li className={this.state.elements}><a href="elements">Elements Reference</a></li>
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