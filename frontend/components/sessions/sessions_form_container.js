import { connect } from 'react-redux';
import SessionForm from './sessions_form';
import { login, signup, receiveErrors } from '../../actions/sessions_actions';

const mapStateToProps = (state) => ({
  loggedin: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {

  let processForm;

  if (ownProps.location.pathname === "signup" || ownProps.location.pathname === "/signup") {
    processForm = (user) => dispatch(signup(user));
  } else if (ownProps.location.pathname === "login" || ownProps.location.pathname === "/login") {
    processForm = (user) => dispatch(login(user));
  }

  return {
    formType: ownProps.location.pathname,
    processForm,
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(receiveErrors())
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
