import { receiveChannels } from '../actions/channels_actions';
import { RECEIVE_ALL_CHANNELS } from '../actions/channels_actions';


function ChannelsReducer(state = {}, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_CHANNELS:
      return action.channels;
    default:
      return state;
  }
}

export default ChannelsReducer;


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