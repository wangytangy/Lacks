import React from 'react';

class BrowseChannel extends React.Component {
  constructor(props) {
    super(props);
    this.allChannelsList = this.allChannelsList.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.isMember = this.isMember.bind(this);

    this.state = { searchInput: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllChannels();
  }

  handleClick(action, channel) {
    if (action === "Join channel") {
      this.props.onBrowseModalClose();
      this.props.joinChannel(channel.id);
      this.props.router.replace(`messages/${channel.id}`);

      //then direct to this new channel
    } else {
      this.props.router.replace(`messages/${channel.id}`);
      this.props.onBrowseModalClose();
    }
  }

  handleInputChange(e) {
    this.setState({ searchInput: e.currentTarget.value });
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
    let allChannels = [];
    let searchInput = this.state.searchInput.toLowerCase();
    Object.values(this.props.channels).forEach((channel, i) => {
      let channelTitleLowerCase = channel.title.toLowerCase();

      if (channelTitleLowerCase.indexOf(searchInput) !== -1) {
        let action = "Join channel";
        if (this.isMember(channel) === true) {
          action = "Open channel";
        }
        let liElement = (
          <li key={i}>
            <div className="search-result group">

              <div className="search-result-topline group">
                <h3># {channel.title}</h3>
                <div className="search-members-count">
                  <i className="material-icons">person_outline</i>
                  <span>{channel.members.length}</span>
                </div>
              </div>

              <div className="search-result-bottomline">
                <i>Created by <em>{channel.creator.username}</em></i>
                <button onClick={() => this.handleClick(action, channel)}>
                  {action}
                </button>
              </div>

            </div>
          </li>
        );
        allChannels.push(liElement);
      }
      //end of if statement
    });
    //end of map
    return allChannels;
  }

  render() {
    // console.log(this.state.input`);

    let allChannels = this.allChannelsList();

    return(
      <div className="browse-channels">
        <h1>Browse all channels</h1>

        <div className="browse-channel-searchbar">
          <i className="material-icons search">search</i>
          <input
            type="text"
            className="browse-search"
            placeholder="search for channels"
            onChange={this.handleInputChange}

            >
          </input>
        </div>

        <h2>Channels you can join</h2>
        <ul>
          {allChannels}
        </ul>
      </div>
    );
  }
}

export default BrowseChannel;
