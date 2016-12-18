import React from 'react';


class ChannelHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let leaveButtonStatus = "leave-button-active";
    if (this.props.currentChannel.title === "general") {
      leaveButtonStatus = "leave-button-block";
    }

    let channelCreator = "";
    let memberCount = "";
    if (this.props.currentChannel.id) {
      channelCreator = this.props.currentChannel.creator.username;
      memberCount = this.props.currentChannel.memberCount;
    }
    let headerTitle = "";
    if (this.props.currentChannel.direct_message_status === true) {
      headerTitle = this.props.currentChannel.title;
    } else {
      headerTitle = "# " + this.props.currentChannel.title;
    }

    let leaveButton = "";
    if (this.props.currentChannel.direct_message_status) {
      leaveButton = "Leave conversation";
    } else {
      leaveButton = "Leave channel";
    }


    return(
      <div className="channel-header-container group">
        <div className="header-left">

          <div className="header-title">
            <h1>{headerTitle}</h1>
          </div>

          <div className="header-info">

            <i className="material-icons star" id="star">star_border</i>

            <span className="topic-divider">|</span>
            <i className="material-icons person">person_outline</i>
            <span className="header-status-text">{memberCount}</span>

            <span className="topic-divider">|</span>
            <i className="material-icons circle" id="circle">brightness_1</i>
            <span className="header-status-text">Created by {channelCreator}</span>

            <span className="topic-divider">|</span>
            <span className="header-status-text">{this.props.currentChannel.description}</span>
          </div>
        </div>
        <div className="header-right">
          <button
            onClick={() => this.props.leaveChannel(this.props.currentChannel.id)}
            className={leaveButtonStatus}>
            {leaveButton}
          </button>
        </div>
      </div>
    );
  }
}

export default ChannelHeader;
