import React from 'react';
import { Link } from 'react-router';
import ChannelIndexContainer from '../channels/channel_index_container';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    // this.mapChannelIndex = this.mapChannelIndex.bind(this);
    this.dropdownOpen = this.dropdownOpen.bind(this);
    this.state = { dropdown: "dropdown-menu"};
  }

  // componentDidMount() {
  //   this.props.fetchAllChannels();
  // }

  handleLogout() {
    this.props.logout();
    window.currentUser = null;
    if (this.props.currentUser) {
      this.props.router.push("/");
    }
  }

  //probably will move this to a ChannelsIndex Component
  // mapChannelIndex() {
  //   let channelsIndex = [];
  //   if (this.props.channels) {
  //     channelsIndex = Object.values(this.props.channels).map((channel, i) => {
  //       return <li key={i}>{channel.title}</li>;
  //     });
  //     return channelsIndex;
  //   } else {
  //     return channelsIndex;
  //   }
  // }

  dropdownOpen() {
    if (this.state.dropdown === "dropdown-menu") {
      this.setState({dropdown: "dropdown-menu-open"});
    } else {
      this.setState({dropdown: "dropdown-menu"});
    }
  }

  render() {
    // let channelsIndex = this.mapChannelIndex();

    return(
      <div className="sidebar">
        <div className="team-menu" onClick={this.dropdownOpen}>

          <h1 className="sidebar-header">Lacks</h1>

          <span>{this.props.currentUser.username}</span>
          <div><i>0</i></div>

          <nav className={this.state.dropdown}>
            <ul>
              <div className="dropdown-list-item"><li><strong>{this.props.currentUser.username}</strong></li></div>
              <div className="dropdown-list-item"><li><span>@{this.props.currentUser.username}</span></li></div>
              <div className="dropdown-list-item"><li><a onClick={this.handleLogout}>Sign out of Lacks</a></li></div>
            </ul>
          </nav>
        </div>

        <ChannelIndexContainer />

        <h2>Direct Messages Container</h2>

      </div>
    );
  }
}

export default Sidebar;
