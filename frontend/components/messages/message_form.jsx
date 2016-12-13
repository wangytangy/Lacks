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
    this.setState({body: ""});
    //dispatch a POST action to messages
    this.props.createMessage(messageData);
  }


  render() {
    return(
      <div className="footer-input">
        <div className="message-form">
          <form onSubmit={this.handleSubmit} className="message-form-container">

            <input
              type="text"
              className="message-form-chatbar"
              onChange={this.handleChange}
              value={this.state.body}>
            </input>

            <button className="message-form-button">
              <i className="material-icons add">add</i>
            </button>


          </form>
        </div>
      </div>
    );
  }





}

export default MessageForm;
