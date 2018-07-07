import React, { Component } from 'react';
import '../App.css';

class GalleryItem extends Component {


  // Props
  /*
    imageName: name of image within public folder
    imageLabel: label displayed over image
    openModal: callback to parent opening modal
  */
  constructor(props) {
    console.log("Constructing a GalleryItem!")
    super(props);
    this.state = {
      imageName: this.props.imageName,
      imageLabel: this.props.imageLabel,
      imageTag: "eye"
    }
  }
 
  render() {
    const imageExtension = this.state.imageName;
    return ( 
      <button className="gallery-item" onClick={() => this.props.openModal(this.state.imageTag)}>
        <div className="overlay">
              <img src={imageExtension} alt={this.state.imageLabel}/>
        </div>
        <div className="desc">{this.state.imageLabel}</div>
      </button>
    );
  }
}
export default GalleryItem;