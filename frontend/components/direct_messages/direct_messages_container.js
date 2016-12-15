import { connect } from 'react-redux';
import DirectMessagesIndex from './direct_messages';
import { fetchAllDirectMessages } from '../../actions/direct_messages_actions';
import { usersDirectMessagesToArray } from '../../util/selectors';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

const mapStateToProps = (state) => ({
  usersDirectMessages: usersDirectMessagesToArray(state.directMessages),
  currentChannel: state.currentChannel,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchDirectMessages: () => dispatch(fetchAllDirectMessages())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessagesIndex));
