import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const UPDATE_PROFILE_PIC = "UPDATE_PROFILE_PIC";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveProfilePic = (user) => ({
  type: UPDATE_PROFILE_PIC,
  user,
});

export const login = (user) => {

 return (dispatch) => {
   return APIUtil.login(user).then((user) => {

     dispatch(receiveCurrentUser(user));
     return user;
   }, (errors) => {
     dispatch(receiveErrors(errors));
   });
 };
};

export const logout = () => {
 return (dispatch) => {
   return APIUtil.logout().then(() => {
     dispatch(receiveCurrentUser(null));
   });
 };
};

export const signup = (user) => {
 return (dispatch) => {
   return APIUtil.signup(user).then((user) => {
     dispatch(receiveCurrentUser(user));
     return user;
   }, (errors) => {
     dispatch(receiveErrors(errors));
   });
 };
};

export const submitProfilePic = (imageData) => {
  return (dispatch) => {
    return APIUtil.updateProfilePic(imageData).then((user) => {
      dispatch(receiveProfilePic(user));
    }, (errors) => {
      console.log(errors);
    });
  }
}
