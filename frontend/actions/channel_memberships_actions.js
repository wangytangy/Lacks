import * as APIUtil from '../util/channel_membership_util';

export const createChannelMembership = (channelID) => {

  return (dispatch) => {
    APIUtil.createChannelMembership(channelID).then((ChannelMembership) => {
      //have the channelID...
      //user jbuilder to return ChannelMembership's belongs_to "channel"?
      //dispatch action to change state's currentChannel (take from channel actions?)
      
    });
  };

};
