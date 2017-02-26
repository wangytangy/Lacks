import React from 'react';
import { Link, hashHistory } from 'react-router';

class Popout extends React.Component {

  constructor(props) {
    super(props);
    this.exitProfilePicUpdate = this.exitProfilePicUpdate.bind(this);
    this.openUpdateProfileModal = this.openUpdateProfileModal.bind(this);
    this.closeUpdateProfileModal = this.closeUpdateProfileModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      modalContainerClass: "modal-background-close",
      modalClass: "profile-picture-modal-close"
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

  handleSubmit() {
    alert("You're ugly");
  }

  render() {

    let style = {
      backgroundImage: 'url(' + this.props.currentUser.profile_pic_url + ')',
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

        <img src={this.props.currentUser.profile_pic_url}>
        </img>

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
                  onChange={this.handleSubmit}
                  >
                </input>
              </label>

              <i className="material-icons">photo_camera</i>
              <span>Change your profile photo</span>

            </div>

          </div>
        </div>

      </div>
    );
  }
}


export default Popout;
