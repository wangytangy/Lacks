import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router';
import CreateDirectMessagesContainer from './create_direct_messages_container';
import imageUploadStyle from '../modal_styles/image_upload_style';
class DirectMessagesIndex extends React.Component {
  constructor(props) {
    super(props);

    this.mapDmIndex = this.mapDmIndex.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.openCreateModal = this.openCreateModal.bind(this);
    this.onCreateDirectMessageClose = this.onCreateDirectMessageClose.bind(this);
    this.state = {
      selected: this.props.params.id,
      createDirectMessageOpen: false,
      browseDirectMessageOpen: false
    };
  }

  componentWillReceiveProps(nextProps) {
    // this.props.fetchDirectMessages();
    this.setState({ selected: nextProps.params.id });
  }

  componentDidMount() {
    this.props.fetchDirectMessages();
  }


  setSelected(dmID) {
    this.setState({selected: dmID});
  }

  handleDelete(dmId) {
    console.log("handle delete");
    return;
  }

  mapDmIndex() {
    let dmIndex = [];
    if (this.props.usersDirectMessages.length > 0) {
      this.props.usersDirectMessages.forEach((dm, i) => {
        let title;
        if (dm.title.length > 20) {
          title = dm.title.slice(0, 16) + "...";
        } else {
          title = dm.title;
        }

        let highlightPresence;
        if (this.state.selected === `${dm.id}`) {
          highlightPresence = "dm-li active";
        } else {
          highlightPresence = "dm-li default";
        }

        let path = `messages/${dm.id}`;
        let liElement = (
          <li
            onClick={() => this.setSelected(`${dm.id}`)}
            key={i}
            className={highlightPresence}
          >
            <Link to={path}>
              <span>{dm.members.length}</span>
              <p>{title}</p>
            </Link>
          </li>);

          dmIndex.push(liElement);
        }
      );
      return dmIndex;
    } else {
      return dmIndex;
    }
  }

  onCreateDirectMessageClose() {
    this.setState({ createDirectMessageOpen: false });
  }

  openCreateModal() {
    this.setState({ createDirectMessageOpen: true });
  }


  render() {

    let dmIndex = this.mapDmIndex();
    return(
      <div className="channels group">

        <div className="channels-title">
          <h1 className="channels-header">
            <Link onClick={this.openCreateModal}>
              Direct Messages &#40;{dmIndex.length}&#41;
            </Link>
          </h1>
          <i
            className="material-icons create-channel"
            onClick={this.openCreateModal}
          >
            add_circle_outline
          </i>
        </div>

        <ul className="dm-index">{dmIndex}</ul>

        <Modal
          isOpen={this.state.createDirectMessageOpen}
          onRequestClose={this.onCreateDirectMessageClose}
          contentLabel = "create-dm-modal"
          style={imageUploadStyle}
        >
        <i className="material-icons exit-icon" onClick={this.onCreateDirectMessageClose}>
          highlight_off
        </i>
          <CreateDirectMessagesContainer
            onCreateDirectMessageClose={this.onCreateDirectMessageClose}
            />
        </Modal>
      </div>
    );
  }

}

export default DirectMessagesIndex;
