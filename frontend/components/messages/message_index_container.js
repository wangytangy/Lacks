import { connect } from 'react-redux';
import MessageIndex from './message_index';
import { fetchMessages } from '../../actions/messages_actions';
import { getAvatar } from '../../reducers/avatar_selector';

const mapStateToProps = (state) => ({
  currentChannel: state.currentChannel,
  messages: state.messages,
  avatar: getAvatar(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchMessages: (channelID) => dispatch(fetchMessages(channelID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageIndex);
