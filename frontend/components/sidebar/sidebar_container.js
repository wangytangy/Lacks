import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { logout } from '../../actions/sessions_actions';
import { fetchAllChannels } from '../../actions/channels_actions';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  channels: state.channels,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => (dispatch(logout())),
  fetchAllChannels: () => dispatch(fetchAllChannels())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar));
