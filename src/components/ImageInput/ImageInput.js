import React, { Component } from 'react';

class ImageDropzone extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
    }
  }

  handleChange = (e) => {
    const image = e.target.files[0];
    this.removeThumbnail(e.target);
    if (!image.type.startsWith("image/")){
      this.setState({error: "File must be a picture!"});
    } else {
      this.setState({error: null});
      this.updateThumbnail(e.target, image);
    }

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      this.props.onChange(reader.result);
    }
  }

  updateThumbnail = (inputElement, image) => {
    const parentElement = inputElement.parentNode;
    parentElement.querySelector('.dropzone-before').style.display = 'none';

    const thumbnailElement = document.createElement('div');
    thumbnailElement.classList.add('dropzone-thumbnail');

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      thumbnailElement.style.backgroundImage = `url(${ reader.result })`;
    }
    parentElement.appendChild(thumbnailElement);
  }

  removeThumbnail = (inputElement) => {
    const parentElement = inputElement.parentNode;
    parentElement.querySelector('.dropzone-before').style.display = 'flex';

    const thumbnail = parentElement.querySelector('.dropzone-thumbnail');
    if(thumbnail){
      thumbnail.remove();
    }
  }

  render() {
    const error = this.state.error;
    return <>
      <div className='input dropzone'>
        <div className='dropzone-before'>Click to upload an image of the device</div>
        <input name="image" id="image" type="file" onChange={(e) => this.handleChange(e)} accept='image/*' required={true}/>
        {error && <div>{error}</div>}
      </div>
    </>;
  }
}

export default ImageDropzone;