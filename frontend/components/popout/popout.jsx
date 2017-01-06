import React from 'react';
import { Link, hashHistory } from 'react-router';

class Popout extends React.Component {

  constructor(props) {
    super(props);
    this.exitProfilePicUpdate = this.exitProfilePicUpdate.bind(this);
    this.openUpdateProfileModal = this.openUpdateProfileModal.bind(this);
  }
  exitProfilePicUpdate() {
    let path = hashHistory.getCurrentLocation().pathname;
    window.hashHistory = hashHistory;
    if (path.indexOf("popout") !== -1) {
      hashHistory.goBack();
    }
  }

  openUpdateProfileModal() {
    alert("FEATURE NOT IMPLEMENTED");
  }

  render() {

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
          <button onClick={this.openUpdateProfileModal}>
            Edit Profile
          </button>
        </div>

      </div>
    );
  }
}


export default Popout;
