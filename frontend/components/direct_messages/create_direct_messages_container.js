import { connect } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';
import CreateDirectMessages from './create_direct_messages';
import { receiveAllUsers, fetchAllUsers, fetchAllDirectMessages } from '../../actions/direct_messages_actions';
import { createDirectMessage } from '../../actions/channels_actions';


const mapStateToProps = (state) => ({
  users: state.users,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  createDirectMessage: (formData) => dispatch(createDirectMessage(formData)),
  fetchDirectMessages: () => dispatch(fetchAllDirectMessages())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateDirectMessages));
