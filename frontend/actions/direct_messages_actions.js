import * as APIUtil from '../util/direct_messages_api_util.js';

export const RECEIVE_ALL_DIRECT_MESSAGES = "RECEIVE_ALL_DIRECT_MESSAGES";

export const receiveAllDirectMessages = (directMessages) => ({
  type: RECEIVE_ALL_DIRECT_MESSAGES,
  directMessages
});

export const fetchAllDirectMessages = () => {
  return (dispatch) => {
    return APIUtil.fetchDirectMessages().then((directMessages) => {
      dispatch(receiveAllDirectMessages(directMessages));
      return directMessages;
    });
  };
};
