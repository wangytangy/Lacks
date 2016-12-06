import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';


const rootReducer = combineReducers({
  session: SessionReducer
});

export default rootReducer;


// LOGGED OUT
// {
//   session: {
//     currentUser: null,
//     errors: ["Invalid credentials"]
//   }
// }


// LOGGED IN
// {
//   currentUser: {
//     id: 1,
//     username: "wangytangy"
//   },
//   forms: {
//     signUp: {errors: []},
//     logIn: {errors: []}
//   },
// }
