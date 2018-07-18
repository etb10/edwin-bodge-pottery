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
              <a id="recent_work" className="menu-item" href="/recent_work">Recent Work</a>
              <a id="portfolio" className="menu-item" href="/portfolio">Portfolio</a>
              <a id="kiln_instructions" className="menu-item" href="/kiln_instructions">Kiln Instructions</a>
              <ul className="icons">
                        <li><a href="https://twitter.com/edwin_bodge" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                        <li><a href="https://www.facebook.com/edwin.bodge" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                        <li><a href="https://www.instagram.com/magicbodge/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                      </ul>
            </Menu>
    );
  }
}
export default EdwinMenu;