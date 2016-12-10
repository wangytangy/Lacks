import React from 'react';

class CreateChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateChannel = this.handleCreateChannel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { title: "", description: "" };
    this.redirect = this.redirect.bind(this);
  }

  handleCreateChannel() {
    this.props.onModalClose();
    this.props.createChannel(this.state).then((channel) => {
      this.redirect(channel.id);
      this.props.fetchAllChannels();
    });
  }

  redirect(id) {
    // debugger
    this.props.router.push(`messages/${id}`);
  }

  handleChange(e) {
    if (e.currentTarget.id === "channel-name-input") {
      this.setState({title: e.currentTarget.value});
    } else if (e.currentTarget.id === "channel-purpose-input") {
      this.setState({description: e.currentTarget.value});
    }
  }

  render() {
    return(
      <div className="create-channel-form">

        <form onSubmit={this.handleCreateChannel}>
          <h1>Create a channel</h1>

          <h2>
            Channels are where your team communicates.
            They&#39;re best when organized around a topic- #leads, for example
          </h2>

          <label className="newchannel-label">
            Channel name
          </label>
          <input
            id="channel-name-input"
            type="text"
            onChange={this.handleChange}>
          </input>
          <p className="channelname-specifications">
            Names must be lowercase and less than 20 characters
          </p>

          <label className="newchannel-label">
            Purpose
          </label>
          <input
            id="channel-purpose-input"
            type="text"
            onChange={this.handleChange}>
          </input>
          <p className="channelname-specifications">
            What's this channel about&#63;
          </p>

          <button className="create-channel-button">
            Create channel
          </button>

        </form>
      </div>
    );
  }
}

export default CreateChannelForm;
