import React, { Component } from 'react';
import './App.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import EdwinMenu from './Components/EdwinMenu.js';
import NavBar from './Components/NavBar.js';
import EdwinFooter from './Components/EdwinFooter.js';
import GalleryItem from './Components/GalleryItem.js';

import DataArrays from './data/arrays.json';

class Portfolio extends Component {

  constructor() {
    super();
    this.state = {
      portfolioImages: DataArrays.PortfolioImages,
      photoIndex: 0,
      isOpen: false
    }
    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox(imageTag) {
    this.setState({
      isOpen: true,
      photoIndex: 0
    })
  }
 
  render() {
    const { portfolioImages, photoIndex, isOpen } = this.state;
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
                                openModal={this.openLightbox}
                              />
                            )
                          }
                        </div>
                      </div>
                  </div>

                {/* Footer */}
                  <EdwinFooter/>

              </div>

              {/* Lightbox */}

                {isOpen && (
                  <Lightbox
                    mainSrc={portfolioImages[photoIndex].imageName}
                    nextSrc={portfolioImages[(photoIndex + 1) % portfolioImages.length].imageName}
                    prevSrc={portfolioImages[(photoIndex + portfolioImages.length - 1) % portfolioImages.length].imageName}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                      this.setState({
                        photoIndex: (photoIndex + portfolioImages.length - 1) % portfolioImages.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        photoIndex: (photoIndex + 1) % portfolioImages.length,
                      })
                    }
                  />
                )}

            {/* Scripts */}
              

          </div>
    );
  }
}
export default Portfolio;