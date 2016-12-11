import { connect } from 'react-redux';
import MessageIndex from './message_index';
import { fetchMessages } from '../../actions/messages_actions';


const mapStateToProps = (state) => ({
  currentChannel: state.currentChannel,
  currentUser: state.session.currentUser,
  messages: state.messages
});

const mapDispatchToProps = (dispatch) => ({
  fetchMessages: (channelID) => dispatch(fetchMessages(channelID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageIndex);
