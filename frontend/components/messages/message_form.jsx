import React from 'react';
import Modal from 'react-modal';
import ImageUploadForm from './image_upload_form';
import imageUploadStyle from '../modal_styles/image_upload_style';

class MessageForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      body: "",
      uploadDropdown: "upload-dropdown",
      imageFile: null,
      imageUrl: null,
      imageModalOpen: false
    });
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openUploadMenu = this.openUploadMenu.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleImageSubmit = this.handleImageSubmit.bind(this);
    this.toggleImageModalOpen = this.toggleImageModalOpen.bind(this);
  }

  handleChange(e) {
    this.setState({body: e.currentTarget.value});
  }

  handleSubmit(e) {
    // return;

    let messageData = {
      channelID: parseInt(this.props.currentChannel.id),
      body: this.state.body,
      image: this.state.imageFile
    };

    this.props.createMessage(messageData);
    this.setState({body: "", imageFile: null, imageUrl: null});
  }

  handleImageSubmit() {
    let formData = new FormData();
    let channelID = parseInt(this.props.currentChannel.id);

    this.toggleImageModalOpen();
    formData.set("messages[image]", this.state.imageFile);
    formData.set("messages[channel_id]", channelID);
    this.props.createImageMessage(formData);
    this.setState({body: "", imageFile: null, imageUrl: null});
  }


  openUploadMenu() {
    if (this.state.uploadDropdown === "upload-dropdown") {
      this.setState({uploadDropdown: "upload-dropdown-open"});
    } else {
      this.setState({uploadDropdown: "upload-dropdown"});
    }
  }

  handleUpload(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();

    fileReader.onloadend = function () {
      this.setState({
        uploadDropdown: "upload-dropdown",
        imageFile: file,
        imageUrl: fileReader.result
      });
    }.bind(this);

    fileReader.readAsDataURL(file);
  }

  toggleImageModalOpen() {
    if (this.state.imageModalOpen) {
      this.setState({imageModalOpen: false});
    } else {
      this.setState({imageModalOpen: true});
    }
  }



  render() {
    return(
      <div className="footer-input">
        <div className="message-form">

          <form onSubmit={this.handleSubmit} className="message-form-container">
            <input
              type="text"
              className="message-form-chatbar"
              onChange={this.handleChange}
              value={this.state.body}>
            </input>

            <button
              type="button"
              className="message-form-button"
              onClick={this.toggleImageModalOpen}>
              <i className="material-icons add">add</i>
            </button>

            <nav className={this.state.uploadDropdown}>
              <div className="popover-mask" onClick={this.openUploadMenu}></div>

              <Modal
                isOpen={this.state.imageModalOpen}
                onRequestClose={this.toggleImageModalOpen}
                contentLabel = "browse-modal"
                style={imageUploadStyle}
                contentLabel="image-upload"
              >
                <i className="material-icons exit-icon" onClick={this.toggleImageModalOpen}>
                  highlight_off
                </i>

                <ImageUploadForm
                  imageUrl={this.state.imageUrl}
                  handleUpload={this.handleUpload}
                  handleImageSubmit={this.handleImageSubmit}
                  />
              </Modal>
            </nav>
          </form>


        </div>
      </div>
    );
  }

  //
  //

}

export default MessageForm;
