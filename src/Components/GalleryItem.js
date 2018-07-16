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
      tag:        imageData.tag,
      storageRef: props.storageRef,
      index: props.index
    }
  }
 
  render() {
    const imageExtension = this.state.imageName;
    const image_id = "my_image_thumbnail_" + this.state.index;
    this.state.storageRef.child(imageExtension).getDownloadURL().then(function(url) {
      document.getElementById("my_image_thumbnail").src = url;
    }).catch(function(error) {});

    return ( 
      <button className="gallery-item" onClick={() => this.props.openModal(this.state.tag)}>
        <div className="overlay">
              <img id={image_id} src={imageExtension} alt={this.state.imageLabel}/>
        </div>
        <div className="desc">{this.state.imageLabel}</div>
      </button>
    );
  }
}
export default GalleryItem;