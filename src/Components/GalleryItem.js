import React, { Component } from 'react';
import '../App.css';

class GalleryItem extends Component {


  // Props
  /* imageData: contains the following JSON properties
        imageName: name of image within public folder
        imageLabel: label displayed over image
        tag
     openModal: callback to parent opening modal
  */
  constructor(props) {
    super(props);
    const imageData = props.imageData;
    this.state = {
      imageName:  imageData.imageName,
      imageLabel: imageData.imageLabel,
      tag:        imageData.tag
    }
  }
 
  render() {
    const imageExtension = this.state.imageName;
    return ( 
      <button className="gallery-item" onClick={() => this.props.openModal(this.state.tag)}>
        <div className="overlay">
              <img src={imageExtension} alt={this.state.imageLabel}/>
        </div>
        <div className="desc">{this.state.imageLabel}</div>
      </button>
    );
  }
}
export default GalleryItem;