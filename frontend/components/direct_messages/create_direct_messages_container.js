import { connect } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';
import CreateDirectMessages from './create_direct_messages';
import { receiveAllUsers, fetchAllUsers } from '../../actions/direct_messages_actions';


const mapStateToProps = (state) => ({
  users: state.users
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateDirectMessages));
