import React from 'react';

class CreateDirectMessages extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.filterUsersbyInput = this.filterUsersbyInput.bind(this);
    this.allUsersList = this.allUsersList.bind(this);
    this.state = {
      friends: [],
      searchInput: ""
    };
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  allUsersList(searchedUsers) {
    let usersElements = [];
    searchedUsers.forEach((user, i) => {
      let liElement = (
        <li
          key={i}
        >
          <div className="search-result group">

            <div className="search-result-topline group">
              <h3>{user.username}</h3>
            </div>

          </div>
        </li>
      );
      usersElements.push(liElement);
    });

    return usersElements;
  }

  handleInputChange(e) {
    this.setState({ searchInput: e.currentTarget.value});
  }

  filterUsersbyInput() {
    let filteredUsers = [];

    filteredUsers = this.props.users.filter((user) => {
      if (user.username.indexOf(this.state.searchInput) !== -1) {
        return true;
      }
    });
    return filteredUsers;
  }


  render() {
    let usersElements = this.allUsersList(this.filterUsersbyInput());

    return(
      <div className="browse-channels">
        <h1>Direct Messages</h1>

        <div className="browse-channel-searchbar">
          <i className="material-icons search">search</i>
          <input
            type="text"
            className="browse-search"
            placeholder="Find or start a conversation"
            onChange={this.handleInputChange}
            >
          </input>
        </div>

        <h2>Recent conversations</h2>
        <ul>
          {usersElements}
        </ul>
      </div>
    );
  }
}

export default CreateDirectMessages;
