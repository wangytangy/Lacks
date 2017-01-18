import React from 'react';
import { Link, hashHistory } from 'react-router';

class Popout extends React.Component {

  constructor(props) {
    super(props);
    this.exitProfilePicUpdate = this.exitProfilePicUpdate.bind(this);
    this.openUpdateProfileModal = this.openUpdateProfileModal.bind(this);
    this.closeUpdateProfileModal = this.closeUpdateProfileModal.bind(this);
    this.handleImgSubmit = this.handleImgSubmit.bind(this);
    this.handleProfileSubmit = this.handleProfileSubmit.bind(this);
    this.state = {
      modalContainerClass: "modal-background-close",
      modalClass: "profile-picture-modal-close",
      avatarFile: null,
      avatarUrl: null
    };
  }
  exitProfilePicUpdate() {
    let path = hashHistory.getCurrentLocation().pathname;
    window.hashHistory = hashHistory;
    if (path.indexOf("popout") !== -1) {
      hashHistory.goBack();
    }
  }

  openUpdateProfileModal() {
    this.setState({
      modalContainerClass: "modal-background-open",
      modalClass: "profile-picture-modal-open"
    });
  }

  closeUpdateProfileModal() {
    this.setState({
      modalContainerClass: "modal-background-close",
      modalClass: "profile-picture-modal-close"
    });
  }

  handleImgSubmit(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();

    fileReader.onloadend = function() {
      this.setState({
        avatarFile: file,
        avatarUrl: fileReader.result
      });
    }.bind(this);

    fileReader.readAsDataURL(file);
  }

  handleProfileSubmit() {
    let formData = new FormData();

    formData.set("user[avatar]", this.state.avatarFile);
    formData.set("user[id]", this.props.currentUser.id);
    this.props.handleProfileUpdate(formData);
    //need to close modal
  }

  render() {
    let imgSrc;
    if (this.state.avatarUrl) {
      imgSrc = this.state.avatarUrl;
    } else {
      imgSrc = this.props.currentUser.avatar;
    }

    let style = {
      backgroundImage: 'url(' + imgSrc + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    };


    return (
      <div id="popout">
        <div id="popout-header">
          <i
            className="material-icons popout-exit"
            onClick={this.exitProfilePicUpdate}>
            clear
          </i>
        </div>

        <img src={imgSrc}></img>

        <div id="popout-intro">
          <span>{this.props.currentUser.username}</span>
          <i className="material-icons circle" id="circle">brightness_1</i>
        </div>

        <div id="popout-edit-buttons">
          <button id="edit-profile" onClick={this.openUpdateProfileModal}>
            Edit Profile
          </button>
        </div>

        <div className={this.state.modalContainerClass}>
          <div className={this.state.modalClass}>
            <i className="material-icons profile-picture-modal-exit"
              onClick={this.closeUpdateProfileModal}>
              clear
            </i>

            <div id="update-picture-container">
              <label style={style}>
                <input
                  type="file"
                  className="profile-pic-update"
                  multiple accept='image/*'
                  id="Attach an image"
                  onChange={this.handleImgSubmit}
                  >
                </input>
              </label>
              <i className="material-icons">photo_camera</i>
              <span>Change your profile photo</span>

            </div>
            <button
              id="image-submit"
              type="button"
              onClick={this.handleProfileSubmit}>
              Save changes
            </button>

          </div>
        </div>

      </div>
    );
  }
}


export default Popout;
