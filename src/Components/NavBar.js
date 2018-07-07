import React, { Component } from 'react';
import '../App.css';

class NavBar extends Component {

  constructor() {
    super();
    this.state = {

    }
  }
 
  render() {
    return ( 
                  <nav id="nav"> 
                    <ul className="links">
                      <li><a href="/">Home</a></li>
                      <li className="active"><a href="portfolio">AP Portfolio</a></li>
                      <li><a href="elements">Elements Reference</a></li>
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