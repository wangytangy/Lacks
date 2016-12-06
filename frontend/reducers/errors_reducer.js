import { RECEIVE_SIGNUP_ERRORS, RECEIVE_LOGIN_ERRORS } from '../actions/sessions_actions';
import { eceiveSignUpErrors, receiveLogInErrors } from '../actions/sessions_actions';


const defaultState = {
  forms: {
    signUp: {errors: []},
    LogIn: {errors: []}
  }
};


const ErrorsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SIGNUP_ERRORS:
      return action.forms;
    case RECEIVE_LOGIN_ERRORS:
      return action.forms;
    default:
      return state;
  }
};

export default ErrorsReducer;
