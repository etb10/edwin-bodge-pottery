import React, { Component } from 'react';
import '../App.css';

class GalleryItem extends Component {

  constructor(props) {
    console.log("Constructing a GalleryItem!")
    super(props);
    this.state = {
      imageName: this.props.imageName,
      imageLabel: this.props.imageLabel
    }
  }
 
  render() {
    const imageExtension = "images/portfolio/" + this.state.imageName;
    return ( 
      <div className="gallery-item">
        <div className="overlay">
              <img src={imageExtension} alt={this.state.imageLabel}/>
        </div>
        <div className="desc">{this.state.imageLabel}</div>
      </div>
    );
  }
}
export default GalleryItem;