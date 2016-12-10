import React from 'react';

class BrowseChannel extends React.Component {
  constructor(props) {
    super(props);
    this.allChannelsList = this.allChannelsList.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //join a channel
    // debugger
  }

  allChannelsList() {
    let allChannels;
    allChannels = Object.values(this.props.channels).map((channel, i) => {
      return (
        <li
          key={i}
          onClick={this.handleClick}
        >
          {channel.title}
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
