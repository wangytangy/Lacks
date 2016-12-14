import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router';
import CreateDirectMessages from './create_direct_messages';

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
    this.setState({ selected: nextProps.params.id });
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
        let path = `messages/${dm.id}`;
        let deleteFn = this.handleDelete;
        let icon;

        if (i === 0 || dm.user_id !== this.props.currentUser.id) {
          deleteFn = () => {};
          icon = null;
        } else {
          icon = (
            <i
              className="material-icons delete-channel"
              onClick={() => deleteFn(dm.id)}>
              cancel
            </i>
          );
        }

        let highlightPresence;
        if (this.state.selected === `${dm.id}`) {
          highlightPresence = "group active";
        } else {
          highlightPresence = "group default";
        }


        let liElement = (
          <li
            onClick={() => this.setSelected(`${dm.id}`)}
            key={i}
            className={highlightPresence}
          >
            <Link to={path}>&#35; {dm.title}</Link>
            {icon}
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

        <ul className="channels-index">{dmIndex}</ul>

        <Modal
          isOpen={this.state.createDirectMessageOpen}
          onRequestClose={this.onCreateDirectMessageClose}
          contentLabel = "create-dm-modal"
        >
          <CreateDirectMessages />
        </Modal>
      </div>
    );
  }

}

export default DirectMessagesIndex;
