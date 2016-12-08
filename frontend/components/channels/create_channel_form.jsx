import React from 'react';

class CreateChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateChannel = this.handleCreateChannel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { title: "", description: "" };
  }

  handleCreateChannel() {
    this.props.createChannel(this.state);
  }

  handleChange(e) {
    if (e.currentTarget.id === "channel-name-input") {
      this.setState({title: e.currentTarget.value});
      console.log(this.state.title);
    } else if (e.currentTarget.id === "channel-purpose-input") {
      this.setState({description: e.currentTarget.value});
      console.log(this.state.description);
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleCreateChannel}>
          <h1>Create a channel</h1>
          <p>
            Channels are where your team communicates.
          </p>

          <label for="channel-name-input">Name</label>
          <input
            id="channel-name-input"
            type="text"
            onChange={this.handleChange}>
          </input>

          <label for="channel-purpose-input">Purpose</label>
          <input
            id="channel-purpose-input"
            type="text"
            onChange={this.handleChange}>
          </input>

          <button>Create Channel</button>
        </form>
      </div>
    );
  }
}

export default CreateChannelForm;
