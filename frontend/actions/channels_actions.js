import * as APIUtil from '../util/channels_api_util';

export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const RECEIVE_NEW_CHANNEL = "RECEIVE_NEW_CHANNEL";


export const receiveChannels = (channels) => ({
    type: RECEIVE_ALL_CHANNELS,
    channels
});

export const receiveNewChannel = (channel) => ({
  type: RECEIVE_NEW_CHANNEL,
  currentChannel: channel
});

export const fetchAllChannels = () => {
  return (dispatch) => {
    return APIUtil.fetchChannels().then((channels) => {
      dispatch(receiveChannels(channels));
    });
  };
};

export const createAChannel = (channel) => {
  return (dispatch) => {
    return APIUtil.createChannel(channel).then((channel) => {
      dispatch(receiveNewChannel(channel));
      //somehow channelsIndex needs to be updated as well
      //no error handling yet
    });
  };
};


//
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
//     1: { id: 1, title: "sample channel title" },
//     2: { id: 5, title: "second channel" }
//   },
//
//   currentChannel: {
//     { id: 1,
//       title: "sample channel title",
//       description: "this is the current channel"
//       members: [
//         { id: 1, username: "wangytangy" },
//         { id: 2, username: "other_user" },
//         { id: 3, username: "third_user" },
//         { id: 4, username: "fourth_user" }
//       ]
//     }
//   },
// }
