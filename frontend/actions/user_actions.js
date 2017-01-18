import * as APIUtil from '../util/users_api_util';

export const RECEIVE_PROFILE_UPDATE = "RECEIVE_PROFILE_UPDATE";

export const receiveProfileUpdate = (response) => ({
  //return info relevent to slice of state with users
  type: RECEIVE_PROFILE_UPDATE,
  response
});

export const handleProfileUpdate = (profileData) => {
  return (dispatch) => {
    return APIUtil.updateUserInfo(profileData).then((response) => {
      dispatch(receiveProfileUpdate(response));
    });
  };
};
