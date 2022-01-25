import React, { Component } from 'react';
import closeIcon from '../../app/img/close-icon.png';
import { REMOVE_BUTTON_SIZE } from '../../app/utilities/index';
import './style.css'

class ImageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      images: props.images ? props.images : []
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
          images: [...this.state.images, reader.result]
        })
      }
    })
  }

  handleDeleteImage = (index) => {
    const prevImages = [...this.state.images];
    prevImages.splice(index, 1);
    this.setState({ images: [...prevImages] });
  }

  render() {
    const error = this.state.error;
    const images = this.state.images;
    return <>
      <div className='dropzone'>
        <div className='dropzone-button'>Click to upload an image of the device</div>
        <input name="image" id="image" type="file" onChange={(e) => this.handleChange(e)} accept='image/*' multiple />
        {error && <div>{error}</div>}
        <div className='images'>
          {images && images.map((image, index) => {
            return (
              <div id={'image' + index} key={index} className='image-container'>
                <img src={image} />
                <button className='remove-image-button' type='button'
                  onClick={() => this.handleDeleteImage(index)}>
                  <img src={closeIcon} style={{ width: REMOVE_BUTTON_SIZE + 'px' }} />
                </button>
              </div>
            )
          })}
        </div>
      </div>

    </>;
  }
}

export default ImageInput;