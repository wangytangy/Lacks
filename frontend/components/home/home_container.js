import { connect } from 'react-redux';
import Home from './home';
import { logout } from '../../actions/sessions_actions';
import { fetchAllChannels } from '../../actions/channels_actions';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  channels: state.channels
});

const mapDispatchToProps = () => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));
