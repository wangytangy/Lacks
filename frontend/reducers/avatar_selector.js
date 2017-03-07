export const getAvatar = (state) => {
  let avatarUrl = state.session.currentUser.avatarUrl;
  let profilePicUrl = state.session.currentUser.profile_pic_url;

  if (avatarUrl) {
    return avatarUrl;
  } else {
    return profilePicUrl;
  }
  //return profile_pic_url or currentUser.avatar
};
