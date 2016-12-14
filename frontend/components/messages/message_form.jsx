import React from 'react';

class MessageForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      body: "",
      uploadDropdown: "upload-dropdown",
      imageFile: null,
      imageUrl: null
    });
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openUploadMenu = this.openUploadMenu.bind(this);
    // this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange(e) {
    this.setState({body: e.currentTarget.value});
  }

  handleSubmit(e) {
    // return;

    // let formData = new FormData();

    let messageData = {
      channelID: parseInt(this.props.currentChannel.id),
      body: this.state.body,
      image: this.state.imageFile
    };

    this.props.createMessage(messageData);
    this.setState({body: "", imageFile: null, imageUrl: null});
    //dispatch a POST action to messages
  }


  openUploadMenu() {
    if (this.state.uploadDropdown === "upload-dropdown") {
      this.setState({uploadDropdown: "upload-dropdown-open"});
    } else {
      this.setState({uploadDropdown: "upload-dropdown"});
    }
  }
  //
  // handleUpload(e) {
  //   let file = e.currentTarget.files[0];
  //
  //   let fileReader = new FileReader();
  //
  //   fileReader.onloadend = function () {
  //     this.setState({ imageFile: file, imageUrl: fileReader.result });
  //   }.bind(this);
  //
  //
  //   fileReader.readAsDataURL(file);
  // }
  //
  //

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
              onClick={this.openUploadMenu}>
              <i className="material-icons add">add</i>
            </button>

          </form>
        </div>
      </div>
    );
  }


  // <nav className={this.state.uploadDropdown}>
  //   <div className="popover-mask" onClick={this.openUploadMenu}></div>
  //
  //   <ul className="upload-menu-list">
  //     <li>
  //       <button type="button" onClick={this.handleSubmit}>SUBMIT PHOTO</button>
  //       <input
  //         type="file"
  //         className="image-upload-input"
  //         multiple accept='image/*'
  //         id="Attach an image"
  //         onChange={this.handleUpload}>
  //       </input>
  //     </li>
  //     <li>
  //       <img src={this.state.imageUrl}/>
  //     </li>
  //   </ul>
  // </nav>



}

export default MessageForm;
