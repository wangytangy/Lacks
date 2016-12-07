import * as APIUtil from '../util/channels_api_util';

export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";



export const receiveChannels = (channels) => ({
    type: RECEIVE_ALL_CHANNELS,
    channels
});

export const fetchAllChannels = () => {

  return (dispatch) => {
    return APIUtil.fetchChannels().then((channels) => {
      dispatch(receiveChannels(channels));
    });
  };
};


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
