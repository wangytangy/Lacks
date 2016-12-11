import { connect } from 'react-redux';
import MessageForm from './message_form';
import { createAMessage } from '../../actions/messages_actions';


const mapStateToProps = (state) => ({
  currentChannel: state.currentChannel,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createMessage: (messageData) => dispatch(createAMessage(messageData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm);
