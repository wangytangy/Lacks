import React from 'react';

class CreateDirectMessages extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.filterUsersbyInput = this.filterUsersbyInput.bind(this);
    this.allUsersList = this.allUsersList.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderSelectedUsers = this.renderSelectedUsers.bind(this);
    this.handleJoinDm = this.handleJoinDm.bind(this);
    this.redirect = this.redirect.bind(this);
    this.handleErrors = this.handleErrors.bind(this);

    this.state = {
      friends: [],
      searchInput: "",
      errors: ""
    };
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  handleClick(e) {
    let updatedFriends = this.state.friends;

    let selectedUser = e.currentTarget.type;
    if (this.state.friends.includes(selectedUser)) {
      let deleteIdx = updatedFriends.indexOf(selectedUser);
      updatedFriends.splice(deleteIdx, 1);
      this.setState({friends: updatedFriends});
    } else {
      if (updatedFriends.length >= 7) { return; }
      updatedFriends.push(selectedUser);
      this.setState({friends: updatedFriends});
    }
  }

  handleJoinDm() {
    let currentUsername = this.props.currentUser.username;
    let friends = this.state.friends;
    friends.push(currentUsername);
    let title = friends.join();


    let formData ={
      "channels[title]": title,
      "channels[description]": "",
      "channels[friends]": this.state.friends
    };

    console.log(formData);
    this.setState({ friends: [], searchInput: "", errors: "" });
    this.props.createDirectMessage(formData).then((channel) => {
      this.props.onCreateDirectMessageClose();
      this.redirect(channel.id);
      this.props.fetchDirectMessages();
    }, (errors) => {

      this.handleErrors(errors);
    });

  }

  handleErrors(errors) {
    this.setState({errors: errors.responseText });
  }

  redirect(id) {
    this.props.router.push(`messages/${id}`);
  }



  allUsersList(searchedUsers) {
    let usersElements = [];
    searchedUsers.forEach((user, i) => {
      let liElement = (
        <li
          key={i}
          onClick={this.handleClick}
          type={user.username}
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

  renderSelectedUsers() {
    let selectedUsers = [];
    this.state.friends.forEach((friend, i) => {
      let liElement = (
        <li
          key={i}
          className="dm-selected-item"
          type={friend}
          onClick={this.handleClick}
        >
          <div className="dm-details-container">
            <p>{friend}</p>
            <i className="material-icons clear">
              clear
            </i>
          </div>
        </li>
      );
      selectedUsers.push(liElement);
    });
    return selectedUsers;
  }

  render() {
    let usersElements = this.allUsersList(this.filterUsersbyInput());
    let selectedUsers = this.renderSelectedUsers();
    let errorsMessage = this.state.errors;

    return(
      <div className="browse-dm">
        <h1>Direct Messages</h1>
        <div className="browse-dm-searchbar">
          <i className="material-icons search">search</i>
          <input
            type="text"
            className="dm-search"
            placeholder="Find or start a conversation"
            onChange={this.handleInputChange}
            >
          </input>
        </div>

        <div className="dm-subheader">
          <h2>Find or start a conversation</h2>
          <button id="join-dm" onClick={this.handleJoinDm}>Go</button>
        </div>
        <div className="dm-selected-container">
          {selectedUsers}
        </div>
        <ul className="dm-search-results">
          {usersElements}
        </ul>

      </div>
    );
  }
}

export default CreateDirectMessages;
