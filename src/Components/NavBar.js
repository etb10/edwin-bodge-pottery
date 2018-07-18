import React, { Component } from 'react';
import '../App.css';

class NavBar extends Component {

  constructor(props) {
    super(props);
    var {home, portfolio, recent_work, kiln_instructions} = "";
    if(props.name == "portfolio") {
      portfolio = "active";
    } else if(props.name == "home") {
      home = "active";
    } else if(props.name == "recent_work") {
      recent_work = "active";
    } else if(props.name == "kiln_instructions") {
      kiln_instructions = "active";
    }
    this.state = {
      home, portfolio, recent_work, kiln_instructions
    }
  }
 
  render() {
    return ( 
                  <nav id="nav"> 
                    <ul className="links">
                      <li className={this.state.home}><a href="/">Home</a></li>
                      <li className={this.state.recent_work}><a href="recent_work">Recent Work</a></li>
                      <li className={this.state.portfolio}><a href="portfolio">AP Portfolio</a></li>
                      <li className={this.state.kiln_instructions}><a href="kiln_instructions">Kiln</a></li>
                    </ul>
                    <ul className="icons">
                      <li><a href="https://twitter.com/edwin_bodge" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                      <li><a href="https://www.facebook.com/edwin.bodge" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                      <li><a href="https://www.instagram.com/magicbodge/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                    </ul>
                  </nav>
    );
  }
}
export default NavBar;