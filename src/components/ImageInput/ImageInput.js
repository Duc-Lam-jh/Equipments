import React, { Component } from 'react';
import closeIcon from '../../app/img/close-icon.png';
import { REMOVE_BUTTON_SIZE } from '../../app/utilities/index';
import './style.css'

class ImageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      images: props.images ? props.images : [],
      prevImages: props.images ? props.images : [],
      previewImages: props.images ? props.images : []
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.images.length !== this.state.images.length){
      this.props.onChange(this.state.images);
    }
  }

  handleChange = (e) => {
    const images = [...e.target.files];
    images.forEach(image => {
      if (!image.type.startsWith("image/")) {
        this.setState({ error: "File must be a picture!" });
      } else {
        this.setState({ error: null });
      }

      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => {
        this.setState({
          images: [...this.state.images, image],
          previewImages: [...this.state.previewImages, reader.result],
          prevImages: [...this.state.previewImages, reader.result],
        })
      }
    })
  }

  handleDeleteImage = (e, index) => {
    const images = this.state.images.filter((item, i) => i !== index);
    const previewImages = this.state.prevImages.filter((item, i) => i !== index);

    this.setState({ previewImages: [...previewImages], images: [...images] }, () => {
      this.setState({prevImages: [...this.state.previewImages]});
    });
    e.preventDefault();
  }

  render() {
    const error = this.state.error;
    const images = this.state.previewImages;
    return <>
      <div className='dropzone'>
        <div className='dropzone-button'>Click to upload an image of the device</div>
        <input name="image" id="image" type="file" onChange={(e) => this.handleChange(e)} accept='image/*' multiple />
        {error && <div>{error}</div>}
        <div className='images'>
          {images && images.map((image, index) => {
            return (
              <div id={'image' + index} key={index} className='image-container'>
                <img className='preview-image' src={image} alt="Preview"/>
                <div className='remove-image-button'
                  onClick={(e) => this.handleDeleteImage(e, index)}>
                  <img src={closeIcon} alt="Remove"/>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </>;
  }
}

export default ImageInput;