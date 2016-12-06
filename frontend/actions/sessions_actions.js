import * as APIUtil from '../util/session_api_util';

export const RECEIVE_LOGIN_ERRORS = "RECEIVE_LOGIN_ERRORS";
export const RECEIVE_SIGNUP_ERRORS = "RECEIVE_SIGNUP_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const receiveSignUpErrors = (errors) => ({
  type: RECEIVE_SIGNUP_ERRORS,
  forms: {
    signUp: {
      errors
    }
  }
});

export const receiveLogInErrors = (errors) => ({
  type: RECEIVE_LOGIN_ERRORS,
  forms: {
    logIn: {
      errors
    }
  }
});

export const login = (user) => {
 return (dispatch) => {
   return APIUtil.login(user).then((user) => {
     dispatch(receiveCurrentUser(user));
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
   });
 };
};

// {
//   currentUser: {
//     id: 1,
//     username: "wangytangy"
//   },
//   forms: {
//     signUp: {errors: []},
//     logIn: {errors: []}
//   },
//   channels: {
//     1: {
//       title: "sample channel title",
//       user_id: 1,
//       members: [
//         { id: 1, username: "wangytangy" },
//         { id: 2, username: "other_user" },
//         { id: 3, username: "third_user" },
//         { id: 4, username: "fourth_user" }
//       ],
//     }
//   },
//   directMessages: {
//     1: {
//       title: "sample DM title",
//       members: [
//         { id: 1, username: "wangytangy" },
//         { id: 2, username: "other_user" }
//       ]
//     }
//   },
//   messages: {
//     1: {
//       user_id: 1,
//       body: "this is my first message",
//       messageable_id: 1
//       messageable_type: "channel"
//     }
//   }
// }
