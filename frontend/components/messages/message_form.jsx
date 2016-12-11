import React from 'react';

class MessageForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({body: ""});
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({body: e.currentTarget.value});
  }

  handleSubmit() {
    let messageData = {
      channelID: parseInt(this.props.currentChannel.id),
      body: this.state.body
    };
    this.props.createMessage(messageData);
    //dispatch a POST action to messages
  }


  render() {
    console.log(this.state.body);
    return(
      <div className="message-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}></input>

          <input type="submit" value="send"></input>
        </form>
      </div>
    );
  }





}

export default MessageForm;
