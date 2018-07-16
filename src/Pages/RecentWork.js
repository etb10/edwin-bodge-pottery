import React, { Component } from 'react';
import '../App.css';
import Lightbox from 'lightbox-react';
import 'react-image-lightbox/style.css';

import EdwinMenu from '../Components/EdwinMenu.js';
import NavBar from '../Components/NavBar.js';
import EdwinFooter from '../Components/EdwinFooter.js';
import GalleryItem from '../Components/GalleryItem.js';

import DataArrays from '../data/arrays.json';

var compressedName = ".thumbnail";
var fullName = ".jpg";

class RecentWork extends Component {

  constructor() {
    super();
    const holdImages = DataArrays.RecentWorkImages;
    const allImages = this.createAllPhotos(holdImages); 
    const keyPhotos = this.extractKeyPhotos(holdImages);
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

  // add appropriate number to each image
  createAllPhotos(allImages) {
    console.log("creating all images")
    var retImages = [];
    for(let i=0; i<allImages.length; i++) {
      for(let j=0; j<allImages[i].numberImages; j++) {
        var imageHolder = allImages[i];
        var number = j + 1;
        var newImage = {
          "imageName":  imageHolder.imageName + "" + number,
          "imageLabel": imageHolder.imageLabel,
          "tag": imageHolder.tag,
          "numberImages": imageHolder.numberImages
        }
        retImages.push(newImage);
      }
    }
    return retImages;
  }

  // add 1 to every image URL and return that list
  extractKeyPhotos(allImages) {
    var retImages = [];
    for(let i=0; i<allImages.length; i++) {
      var imageHolder = allImages[i];
      var newImage = {
          "imageName":  imageHolder.imageName + "1" + compressedName,
          "imageLabel": imageHolder.imageLabel,
          "tag": imageHolder.tag,
          "numberImages": imageHolder.numberImages
        }
      retImages.push(newImage);
    }
    return retImages;
  }

  extractMatchingPhotos(allImages, tag) {
    var matchingPhotos = [];
    for(let i=0; i<allImages.length; i++) {
      if(allImages[i].tag == tag) {
        var image = allImages[i];
        image.imageName = image.imageName.split('.')[0] + fullName;
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
                  <NavBar name="recent_work"/>

                {/* Main */}
                  <div id="main">

                    {/* Post */} 
                      <section className="post">
                        <header className="major">
                          <h1>Recent Work</h1>
                        </header>
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
                    imageTitle={lightboxPhotos[photoIndex].imageLabel}
                    imageCaption={photoIndexLabel}
                  />
                )}

            {/* Scripts */}
              

          </div>
    );
  }
}
export default RecentWork;