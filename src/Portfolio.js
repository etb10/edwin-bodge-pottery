import React, { Component } from 'react';
import './App.css';
import EdwinMenu from './Components/EdwinMenu.js';
import NavBar from './Components/NavBar.js';
import EdwinFooter from './Components/EdwinFooter.js';
import GalleryItem from './Components/GalleryItem.js';

import DataArrays from './data/arrays.json';

class Portfolio extends Component {

  constructor() {
    super();
    this.state = {
      portfolioImages: DataArrays.PortfolioImages
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
                    <a href="index.html" className="logo">Edwin Bodge Pottery</a>
                  </header>

                {/* Nav */}
                  <NavBar/>

                {/* Main */}
                  <div id="main">

                    {/* Post */} 
                      <section className="post">
                        <header className="major">
                          <h1>AP Senior Portfolio</h1>
                        </header>
                          <p>This concentration illustrates the modern integration of inorganic structures into natural, organic configurations. I explore the fusion of mechanical appliances with anatomy, for with current medicine and science technologies it seems to me like the human body becomes less natural and more man-made every year. I want people to understand the connection I see between modern medicine and the mechanics of our bodies through anatomical creations.</p>
                      </section>

                      <div className="box gallery">
                        <div className="gallery-wrapper">
                          {
                            this.state.portfolioImages.map((portfolioImage, index) => 
                              <GalleryItem
                                imageName={portfolioImage.imageName}
                                imageLabel={portfolioImage.imageLabel}
                              />
                            )
                          }
                        </div>
                      </div>
                  </div>

                {/* Footer */}
                  <EdwinFooter/>

              </div>

            {/* Scripts */}
              

          </div>
    );
  }
}
export default Portfolio;