export const getAvatar = (state) => {
  let avatarUrl = state.session.currentUser.avatarUrl;
  let profilePicUrl = state.session.currentUser.profile_pic_url;

  if (avatarUrl === "/avatars/original/missing.png") {
    return profilePicUrl;
  } else {
    return avatarUrl;
  }
  //return profile_pic_url or currentUser.avatar
};
