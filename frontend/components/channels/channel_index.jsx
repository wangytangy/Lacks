import React from 'react';
import Modal from 'react-modal';
import customStyle from '../modal_style';
import CreateChannelFormContainer from './create_channel_form_container';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.mapChannelIndex = this.mapChannelIndex.bind(this);

    this.handleModalClick = this.handleModalClick.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
    this.onModalClose = this.onModalClose.bind(this);

    this.state = { modalOpen: false };
  }

  componentDidMount() {
    this.props.fetchAllChannels();
  }

  mapChannelIndex() {
    let channelsIndex = [];
    if (this.props.channels) {
      channelsIndex = Object.values(this.props.channels).map((channel, i) => {
        return <li key={i}>{channel.title}</li>;
      });
      return channelsIndex;
    } else {
      return channelsIndex;
    }
  }

  handleModalClick() {
    this.setState({modalOpen: true});
  }

  onModalOpen() {
    //toggles opacity of modal
    customStyle.content.opacity = 100;
  }

  onModalClose() {
    customStyle.content.opacity = 0;
    this.setState({modalOpen: false});
  }

  render() {
    let channelsIndex = this.mapChannelIndex();
    return(
      <div id="channels">
        <h2>Channels</h2>
        <button onClick={this.handleModalClick}>create a channel</button>
        <ul>{channelsIndex}</ul>

        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.onModalOpen}
          onRequestClose={this.onModalClose}
          style={customStyle}
        >
          <CreateChannelFormContainer />
          <button onClick={this.onModalClose}>esc</button>
        </Modal>
      </div>
    );
  }

}

export default ChannelIndex;
