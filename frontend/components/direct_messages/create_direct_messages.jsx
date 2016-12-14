import React from 'react';

class CreateDirectMessages extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("fetch all users!");
  }

  allUsersList() {
    //map users into users
  }

  render() {
    let allUsers = this.allUsersList();

    return(
      <div className="browse-channels">
        <h1>Direct Messages</h1>

        <div className="browse-channel-searchbar">
          <i className="material-icons search">search</i>
          <input
            type="text"
            className="browse-search"
            placeholder="Find or start a conversation"

            >
          </input>
        </div>

        <h2>Recent conversations</h2>
        <ul>
          {allUsers}
        </ul>
      </div>
    );
  }
}

export default CreateDirectMessages;
