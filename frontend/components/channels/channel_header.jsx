import React from 'react';


class ChannelHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {


    return(
      <div className="channel-header-container group">
        <div className="header-left">

          <div className="header-title">
            <h1>@{this.props.currentUser.username}</h1>
            <span>(you)</span>
          </div>

          <div className="header-info">

            <i className="material-icons" id="star">star_border</i>
            <span className="topic-divider">|</span>

            <i className="material-icons" id="circle">brightness_1</i>
            <span className="header-status-message">{this.props.currentChannel.title}</span>

            <span className="topic-divider">|</span>

            <span className="header-status-message">{this.props.currentUser.username}</span>

          </div>
        </div>
      </div>
    );
  }
}

export default ChannelHeader;
