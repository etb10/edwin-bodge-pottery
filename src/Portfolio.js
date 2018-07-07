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
    const allImages = DataArrays.PortfolioImages;
    const keyPhotos = this.extractKeyPhotos(allImages);
    this.state = {
      allImages: allImages,
      portfolioImages: keyPhotos,
      photoIndex: 0,
      isOpen: false,
      lightboxPhotos: []
    }
    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox(tag) {
    const images = this.extractMatchingPhotos(this.state.allImages, tag);
    this.setState({
      isOpen: true,
      photoIndex: 0,
      lightboxPhotos: images
    })
  }

  // add all photos that are marked as key to the list
  extractKeyPhotos(allImages) {
    var keyPhotos = [];
    for(let i=0; i<allImages.length; i++) {
      if(allImages[i].keyPhoto) {
        keyPhotos.push(allImages[i]);
      }
    }
    return keyPhotos;
  }

  extractMatchingPhotos(allImages, tag) {
    var matchingPhotos = [];
    for(let i=0; i<allImages.length; i++) {
      if(allImages[i].tag == tag) {
        matchingPhotos.push(allImages[i]);
      }
    }
    return matchingPhotos;
  }
 
  render() {
    const { lightboxPhotos, allImages, portfolioImages, photoIndex, isOpen } = this.state;
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
                                imageData={portfolioImage}
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
                    mainSrc={lightboxPhotos[photoIndex].imageName}
                    nextSrc={lightboxPhotos[(photoIndex + 1) % lightboxPhotos.length].imageName}
                    prevSrc={lightboxPhotos[(photoIndex + lightboxPhotos.length - 1) % lightboxPhotos.length].imageName}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                      this.setState({
                        photoIndex: (photoIndex + lightboxPhotos.length - 1) % lightboxPhotos.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        photoIndex: (photoIndex + 1) % lightboxPhotos.length,
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