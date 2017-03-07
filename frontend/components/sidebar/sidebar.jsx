import React from 'react';
import { Link, hashHistory } from 'react-router';
import ChannelIndexContainer from '../channels/channel_index_container';
import DirectMessagesContainer from '../direct_messages/direct_messages_container';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.dropdownOpen = this.dropdownOpen.bind(this);

    this.state = { dropdown: "dropdown-menu" };
  }


  handleLogout() {
    this.props.logout();
    window.currentUser = null;
    if (this.props.currentUser) {
      this.props.router.replace("/");
    }
  }


  dropdownOpen() {
    if (this.state.dropdown === "dropdown-menu") {
      this.setState({dropdown: "dropdown-menu-open"});
    } else {
      this.setState({dropdown: "dropdown-menu"});
    }
  }

  render() {
    let path = hashHistory.getCurrentLocation().pathname;
    if (path.indexOf("popout") === -1) {
      path += "/popout";
    }

    return(
      <div className="sidebar">
        <div className="team-menu group" onClick={this.dropdownOpen}>

          <i className="material-icons bell">notifications_none</i>
          <h1>
            Lacks
            <i className="material-icons arrow">keyboard_arrow_down</i>
          </h1>

          <span>
            <i className="material-icons circle" id="circle">brightness_1</i>
            {this.props.currentUser.username}
          </span>
        </div>

        <nav className={this.state.dropdown}>
          <ul className="profile-options">
            <li>
              <div className="profile-options-header">
                <Link to={ path }>
                  <img src={this.props.avatar} />
                </Link>

                <div className="usernames">
                  <span className="profile-options-username"><strong>{this.props.currentUser.username}</strong></span>
                  <span className="profile-options-handle">@{this.props.currentUser.username}</span>
                </div>
              </div>
            </li>

            <li className="logout"><a onClick={this.handleLogout}>Sign out of Lacks</a></li>

          </ul>
          <div className="popover-mask" onClick={this.dropdownOpen}></div>
        </nav>

        <ChannelIndexContainer />
        <DirectMessagesContainer />

      </div>
    );
  }
}

export default Sidebar;
