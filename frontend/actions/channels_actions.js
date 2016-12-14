import * as APIUtil from '../util/channels_api_util';

export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const RECEIVE_NEW_CHANNEL = "RECEIVE_NEW_CHANNEL";
export const DELETE_CHANNEL = "DELETE_CHANNEL";
export const RECEIVE_JOIN_CHANNEL = "RECEIVE_JOIN_CHANNEL";


export const receiveChannels = (channels) => ({
  type: RECEIVE_ALL_CHANNELS,
  channels
});

export const deleteChannel = (channel) => ({
  type: DELETE_CHANNEL,
  channel
});

export const receiveNewChannel = (channel) => ({
  type: RECEIVE_NEW_CHANNEL,
  currentChannel: channel
});

export const receiveJoinedChannel = (channel) => ({
  type: RECEIVE_JOIN_CHANNEL,
  joinedChannel: channel
});



export const fetchAllChannels = () => {
  return (dispatch) => {
    return APIUtil.fetchChannels().then((channels) => {
      dispatch(receiveChannels(channels));
      //return channels so we can take the first channel's id
      //and render it as a default channel show page
      //(in ChannelsIndex componentDidMount)
      return channels;
    });
  };
};

export const createAChannel = (channel) => {
  return (dispatch) => {
    return APIUtil.createChannel(channel).then((channel) => {
      dispatch(receiveNewChannel(channel));
      return channel;
      //no error handling yet
    });
  };
};

export const fetchAChannel = (id) => {
  return (dispatch) => {
    return APIUtil.fetchAChannel(id).then((channel) => {
      dispatch(receiveNewChannel(channel));
    });
  };
};

export const deleteAChannel = (id) => {
  return (dispatch) => {
    return APIUtil.deleteAChannel(id).then((channel) => {
      dispatch(deleteChannel(channel));
      return channel;
    });
  };
};

export const joinChannel = (channelID) => {
  return (dispatch) => {
    return APIUtil.createChannelMembership(channelID).then((channel) => {
      dispatch(receiveJoinedChannel(channel));
    });
  };
};

export const leaveChannel = (channelID) => {
  return (dispatch) => {
    return APIUtil.leaveChannel(channelID).then((remainingChannels) => {
      dispatch(receiveChannels(remainingChannels));
    });
  };
};




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
