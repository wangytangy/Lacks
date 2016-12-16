import React from 'react';


class ImageUploadForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className="upload-form">
        <h3>Upload an image</h3>
        <div className="image-upload-preview">
          <img src={this.props.imageUrl}/>
        </div>

        <div className="upload-buttons group">
          <label id="image-upload-label">
            Select image
            <input
              type="file"
              className="image-upload-input"
              multiple accept='image/*'
              id="Attach an image"
              onChange={this.props.handleUpload}>
            </input>
          </label>
          <button id="image-submit" type="button" onClick={this.props.handleImageSubmit}>Upload</button>
        </div>

      </div>
    );

  }
}

export default ImageUploadForm;
