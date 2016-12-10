import React from 'react';

class BrowseChannel extends React.Component {
  constructor(props) {
    super(props);
    this.allChannelsList = this.allChannelsList.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.isMember = this.isMember.bind(this);
  }

  handleClick(action, channel) {
    if (action === "Join channel") {
      console.log("JOINNN");
      //dispatch a new Channel Membership create action
      //passing in channel ID
    } else {
      console.log("OPENNN");
      //redirect url of the chosen channel
    }
  }

  isMember(channel) {
    let bool = false;
    let currentUserID = this.props.currentUser.id;

    channel.members.forEach((user) => {
      if (user.id === currentUserID) {
        bool = true;
        return;
      }
    });
    return bool;
  }


  allChannelsList() {
    let allChannels;
    allChannels = Object.values(this.props.channels).map((channel, i) => {

      let action = "Join channel";
      if (this.isMember(channel) === true) {
        action = "Open channel";
      }

      return (
        <li key={i}>
          <span>{channel.title}</span>
          <button onClick={() => this.handleClick(action, channel)}>
            {action}
          </button>
        </li>
      );
    });
    return allChannels;
  }

  render() {
    let allChannels = this.allChannelsList();

    return(
      <div>
        <h1>Browse all channels</h1>
        <ul>
          {allChannels}
        </ul>
      </div>
    );
  }
}

export default BrowseChannel;
