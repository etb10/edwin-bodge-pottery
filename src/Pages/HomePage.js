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
    this.imageDisplay = this.imageDisplay.bind(this);
  }

  imageDisplay(url, name) {
    return (
                          <button className="gallery-item home-page" >
                            <div className="overlay">
                                  <span class="image fit"><img src={url} alt="" /></span>
                            </div>
                            <div className="desc home-page">{name}</div>
                          </button>
    )
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
                          {this.imageDisplay("images/work/tan_bowls_1.jpg", "Recent Work")}
                          {this.imageDisplay("images/portfolio/cell_1.full", "AP Portfolio")}
                          {this.imageDisplay("images/common/clay_ball.jpg", "Kiln Instructions")}
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