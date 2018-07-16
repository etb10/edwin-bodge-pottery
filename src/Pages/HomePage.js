import React, { Component } from 'react';
import '../App.css';
import { slide as Menu } from 'react-burger-menu'

import EdwinMenu from '../Components/EdwinMenu.js';
import NavBar from '../Components/NavBar.js';
import EdwinFooter from '../Components/EdwinFooter.js';
import GalleryItem from '../Components/GalleryItem.js';

class HomePage extends Component {

  constructor() {
    super();
    this.state = {

    }
  }
 
  render() {
    return ( 
        <div>
            {/* Mobile Menu */}
              <EdwinMenu/>

            {/* Wrapper */}
              <div id="wrapper">

                {/* Header */}
                  <header id="header">
                    <a href="/" className="logo">Edwin Bodge Pottery</a>
                  </header>

                {/* Nav */}
                  <NavBar name="home"/>

                {/* Main */}
                  <div id="main">
                    
                    {/* Post */} 
                      <section className="post">
                        <header className="major">
                          <h1>Welcome to Edwin Bodge Pottery</h1>
                        </header>
                          
                      </section>

                  </div>

                {/* Footer */}
                  <EdwinFooter/>

              </div>
          </div>
    );
  }
}
export default HomePage;