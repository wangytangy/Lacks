import React from 'react';

//needs current_user, channels
//needs logout button

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.mapChannelIndex = this.mapChannelIndex.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllChannels();
  }

  handleLogout() {
    this.props.logout();
    window.currentUser = null;
    if (this.props.currentUser) {
      this.props.router.push("/");
    }
  }

  mapChannelIndex() {
    let channelsIndex = [];
    if (this.props.channels) {
      channelsIndex = Object.values(this.props.channels).map((channel, i) => {
        return <li key={i}>{channel.title}</li>;
      });
      return channelsIndex;
    } else {
      return channelsIndex;
    }
  }

  render() {
    let channelsIndex = this.mapChannelIndex();

    return(
      <div>
        This is sidebar
        <h1>Welcome home {this.props.currentUser.username}</h1>
        <button onClick={this.handleLogout}>Logout</button>

        <ul>{channelsIndex}</ul>
      </div>
    );
  }
}

export default Sidebar;
