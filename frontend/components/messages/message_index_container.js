import { connect } from 'react-redux';
import MessageIndex from './message_index';
import { fetchMessages } from '../../actions/messages_actions';
import { getAvatar } from '../../reducers/avatar_selector';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({
  currentChannel: state.currentChannel,
  messages: state.messages,
  avatar: getAvatar(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchMessages: (channelID) => dispatch(fetchMessages(channelID))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageIndex));
