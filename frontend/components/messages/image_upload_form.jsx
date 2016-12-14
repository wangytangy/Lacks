import React from 'react';


class ImageUploadForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div>
        <input
          type="file"
          className="image-upload-input"
          multiple accept='image/*'
          id="Attach an image"
          onChange={this.props.handleUpload}>
        </input>
        <div className="image-upload-preview">
          <img src={this.props.imageUrl}/>
        </div>

        <button type="button" onClick={this.props.handleImageSubmit}>SUBMIT PHOTO</button>
      </div>
    );

  }
}

export default ImageUploadForm;
