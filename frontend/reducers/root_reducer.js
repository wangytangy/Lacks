import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ChannelsReducer from './channels_reducer';
import CurrentChannelReducer from './current_channel_reducer';
import MessagesReducer from './messages_reducer';
import DirectMessagesReducer from './direct_messages_reducer';
import UsersReducer from './users_reducer';


const rootReducer = combineReducers({
  session: SessionReducer,
  channels: ChannelsReducer,
  currentChannel: CurrentChannelReducer,
  messages: MessagesReducer,
  directMessages: DirectMessagesReducer,
  users: UsersReducer
});

export default rootReducer;

// {
//   session: {
//       currentUser: {
//         id: 1,
//         username: wangytangy
//       },
//       errors: ["Invalid credentials"]
//     }
//   },
//
//   channels: {
//     1: {
//       id: 1,
//       title: "sample channel title"
//       members: [
//         { id: 1, username: "wangytangy" },
//         { id: 2, username: "other_user" },
//         { id: 3, username: "third_user" },
//         { id: 4, username: "fourth_user" }
//       ]
//     },
//     2: {
//       id: 2,
//       title: "second channel"
//       members: [
//         { id: 3, username: "third_user" },
//         { id: 4, username: "fourth_user" }
//       ]
//     }
//   },
//
//   currentChannel: {
//     { id: 1,
//       title: "sample channel title",
//       description: "this is the current channel"
//     }
//   },
// }
