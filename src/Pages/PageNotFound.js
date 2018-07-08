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
var fullName = ".full";

class PageNotFound extends Component {

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
                  <NavBar name=""/>

                {/* Main */}
                  <div id="main">
                    Well this is awkward...go back to <a href="/">safety</a>.
                  </div>

                {/* Footer */}
                  <EdwinFooter/>

              </div>
          </div>
    );
  }
}
export default PageNotFound;