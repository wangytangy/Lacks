import React from 'react';
import Modal from 'react-modal';
import customStyle from '../modal_style';
import CreateChannelFormContainer from './create_channel_form_container';
import { Link } from 'react-router';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.mapChannelIndex = this.mapChannelIndex.bind(this);

    this.handleModalClick = this.handleModalClick.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.redirect = this.redirect.bind(this);
    this.state = { modalOpen: false };
  }

  componentDidMount() {
    if (this.props.channels[0] && this.props.location.pathname === "/messages") {
      this.props.router.push(`/messages/${Object.keys(this.props.channels)[0]}`);
    } else if (this.props.location.pathname === "/messages") {
      this.props.fetchAllChannels().then((channels) => {
        this.props.router.push(`/messages/${Object.keys(channels)[0]}`);
      });
    } else {
      this.props.fetchAllChannels();
    }
  }

  mapChannelIndex() {
    let channelsIndex = [];
    if (this.props.channels) {
      channelsIndex = Object.values(this.props.channels).map((channel, i) => {
        let path = `messages/${channel.id}`;
        return <li
          key={i}>
          <Link to={path}>&#35; {channel.title}</Link>
        </li>;
      });
      return channelsIndex;
    } else {
      return channelsIndex;
    }
  }

  redirect() {
    this.props.router.push();
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
      <div className="channels group">

        <h1 className="channels-header">
          <Link>
            channels &#40;{channelsIndex.length}&#41;
            <i className="material-icons create-channel"
              onClick={this.handleModalClick}>
              add_circle_outline
            </i>
          </Link>
        </h1>


        <ul className="channels-index">{channelsIndex}</ul>

        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.onModalOpen}
          onRequestClose={this.onModalClose}
          style={customStyle}
          contentLabel=""
        >
          <CreateChannelFormContainer />
          <button onClick={this.onModalClose}>esc</button>
        </Modal>
      </div>
    );
  }

}

export default ChannelIndex;
