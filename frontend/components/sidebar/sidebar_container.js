import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { logout } from '../../actions/sessions_actions';
import { fetchAllChannels } from '../../actions/channels_actions';
import { withRouter } from 'react-router';
import { getAvatar } from '../../reducers/avatar_selector';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  channels: state.channels,
  avatar: getAvatar(state)
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => (dispatch(logout())),
  fetchAllChannels: () => dispatch(fetchAllChannels())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar));
