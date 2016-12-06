import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/sessions_actions';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

const mapStateToProps = (state) => ({

  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting));


// LOGGED OUT
// {
//   session: {
//     currentUser: null,
//     errors: ["Invalid credentials"]
//   }
// }

// LOGGED IN
// {
//   session: {
//     currentUser: {
//       id: 1,
//       username: wangytangy
//     },
//     errors: ["Invalid credentials"]
//   }
// }
