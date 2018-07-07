import React, { Component } from 'react';
import '../App.css';
import { slide as Menu } from 'react-burger-menu'

class EdwinMenu extends Component {

  constructor() {
    super();
    this.state = {

    }
  }
 
  render() {
    return ( 
            <Menu>
              <a id="home" className="menu-item" href="/">Home</a>
              <a id="about" className="menu-item" href="/portfolio">Portfolio</a>
              <ul className="icons">
                        <li><a href="#" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                        <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
                      </ul>
            </Menu>
    );
  }
}
export default EdwinMenu;