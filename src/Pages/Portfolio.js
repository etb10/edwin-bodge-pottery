import React, { Component } from 'react';
import '../App.css';
import Lightbox from 'lightbox-react';
import 'react-image-lightbox/style.css';
import firebase, { auth, provider } from '../firebase.js';

import EdwinMenu from '../Components/EdwinMenu.js';
import NavBar from '../Components/NavBar.js';
import EdwinFooter from '../Components/EdwinFooter.js';
import GalleryItem from '../Components/GalleryItem.js';

import DataArrays from '../data/arrays.json';

var compressedName = ".thumbnail";
var fullName = ".full";

class Portfolio extends Component {

  constructor() {
    super();
    const allImages = DataArrays.PortfolioImages;
    const keyPhotos = this.extractKeyPhotos(allImages);
    var storageRef = firebase.storage().ref();
    this.state = {
      allImages: allImages,
      portfolioImages: keyPhotos,
      photoIndex: 0,
      isOpen: false,
      lightboxPhotos: [],
      storageRef: storageRef
    }
    this.openLightbox = this.openLightbox.bind(this);
  }

  componentDidMount() {

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
        var image = allImages[i];
        image.imageName = image.imageName.split('.')[0] + compressedName;
        keyPhotos.push(image);
      }
    }
    return keyPhotos;
  }

  extractMatchingPhotos(allImages, tag) {
    var matchingPhotos = [];
    for(let i=0; i<allImages.length; i++) {
      if(allImages[i].tag == tag) {
        var image = allImages[i];
        image.imageName = image.imageName.split('.')[0] + fullName;
        console.log(image.imageName);
        matchingPhotos.push(image);
      }
    }
    return matchingPhotos;
  }
 
  render() {
    const { lightboxPhotos, allImages, portfolioImages, photoIndex, isOpen } = this.state;
    const photoIndexPlus1 = photoIndex + 1;
    const photoIndexLabel = "(" + photoIndexPlus1 + " of " + lightboxPhotos.length + ")";
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
                  <NavBar name="portfolio"/>

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
                                storageRef={this.state.storageRef}
                                index={index}
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
                    imageTitle={lightboxPhotos[photoIndex].imageLabel}
                    imageCaption={photoIndexLabel}
                  />
                )}

            {/* Scripts */}
              

          </div>
    );
  }
}
export default Portfolio;