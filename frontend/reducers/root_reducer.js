import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ChannelsReducer from './channels_reducer';


const rootReducer = combineReducers({
  session: SessionReducer,
  channels: ChannelsReducer
});

export default rootReducer;


// {
//   session: {
//     currentUser: {
//         id: 1,
//         username: "wangytangy"
//       },
//       errors: ["Invalid credentials"]
//     }
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
// }
