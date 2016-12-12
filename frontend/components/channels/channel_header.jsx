import React from 'react';


class ChannelHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let channelCreator = "";
    let memberCount = "";
    if (this.props.currentChannel.id) {
      channelCreator = this.props.currentChannel.creator.username;
      memberCount = this.props.currentChannel.memberCount;
    }
    return(
      <div className="channel-header-container group">
        <div className="header-left">

          <div className="header-title">
            <h1>#{this.props.currentChannel.title}</h1>
          </div>

          <div className="header-info">

            <i className="material-icons" id="star">star_border</i>

            <span className="topic-divider">|</span>
            <i className="material-icons">person_outline</i>
            <span className="header-status-text">{memberCount}</span>

            <span className="topic-divider">|</span>
            <i className="material-icons" id="circle">brightness_1</i>
            <span className="header-status-text">Created by {channelCreator}</span>

            <span className="topic-divider">|</span>
            <span className="header-status-text">{this.props.currentChannel.description}</span>
          </div>
        </div>
        <div className="header-right">
          <button
            onClick={() => this.props.leaveChannel(this.props.currentChannel.id)}
            >
            Leave Channel</button>
        </div>
      </div>
    );
  }
}

export default ChannelHeader;
